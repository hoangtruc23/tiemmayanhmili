'use server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { revalidatePath } from 'next/cache'

const payload = await getPayload({ config })

// Hàm lấy dữ liệu
export async function fetchData(status?: string) {
  const where: any = {}
  if (status) {
    if (status === 'active') {
      where.status = { not_equals: 'completed' }
    } else {
      where.status = { equals: status }
    }
  }
  const res = await payload.find({ collection: 'rentals', where, sort: 'name', pagination: false })
  return res.docs
}

export async function create(data?: any) {
  console.log(data)
  if (data.phoneCustomer) {
    const customer = await payload.find({
      collection: 'customers',
      where: {
        phone: { equals: data.phoneCustomer },
      },
    })
    if (customer.docs.length === 0) {
      const newCustomer = await payload.create({
        collection: 'customers',
        data: { phoneNumber: data.phoneCustomer, name: data.nameCustomer },
      })
      data.customerId = newCustomer.id
    }
  }
  const res = await payload.create({ collection: 'rentals', data })
  revalidatePath('/manage/rentals')
  return res
}

export async function update(id: string, data?: any) {
  const res = await payload.update({ collection: 'rentals', id, data })
  revalidatePath('/manage/rentals')
  return res
}

export const getAvailableDevices = async (query: any) => {
  try {
    const { start, end } = query
    if (!start || !end) {
      throw new Error('Vui lòng chọn đầy đủ thời gian')
    }

    // 1. Tìm các đơn thuê đang diễn ra (có sự giao thoa)
    const busyRentals = await payload.find({
      collection: 'rentals',
      depth: 0, // Không cần populate dữ liệu quan hệ, chỉ cần ID
      pagination: false, // Lấy tất cả, giả định số lượng đơn thuê không quá khủng khiếp
      where: {
        status: { not_equals: 'canceled' },
        and: [{ startRental: { less_than: end } }, { endRental: { greater_than: start } }],
      },
    })

    // 2. Trích xuất ID các thiết bị đang bận
    // (Trong Payload, field relation là mảng ID)
    const busyDeviceIds = busyRentals.docs.flatMap((rental) => rental.deviceIds)

    // 3. Tìm các thiết bị không nằm trong danh sách bận
    const availableDevices = await payload.find({
      collection: 'devices',
      pagination: false,
      where: {
        // Kiểm tra ID không nằm trong danh sách bận
        id: { not_in: busyDeviceIds },
        // Kiểm tra trạng thái
        status: { not_in: ['sold', 'maintenance'] },
      },
    })

    return availableDevices.docs
  } catch (error: any) {
    console.error('Lỗi khi tìm thiết bị trống:', error)
    throw new Error(error.message)
  }
}
