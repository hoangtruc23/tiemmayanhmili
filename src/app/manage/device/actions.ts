'use server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { revalidatePath } from 'next/cache'

const payload = await getPayload({ config })

// Hàm lấy dữ liệu
export async function fetchDevices(status?: string) {
  const where: any = {}
  if (status) where.status = { equals: status }
  const res = await payload.find({
    collection: 'devices',
    where,
    sort: 'name',
    limit: 20,
    page: 1,
  })
  return res.docs
}

// Hàm Create
export async function createDevice(data: any) {
  await payload.create({ collection: 'devices', data })
  revalidatePath('/devices') // Tự load lại dữ liệu
}

// Hàm Update
export async function updateDevice(id: string, data: any) {
  await payload.update({ collection: 'devices', id, data })
  revalidatePath('/devices')
}

// Hàm Delete
export async function deleteDevice(id: string) {
  await payload.delete({ collection: 'devices', id })
  revalidatePath('/devices')
}
