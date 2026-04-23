'use server'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

// Hàm lấy dữ liệu
export async function fetchData(status?: string) {
  const where: any = {}
  if (status) where.status = { equals: status }
  const res = await payload.find({ collection: 'expenses', where, pagination: false })
  return res.docs
}
