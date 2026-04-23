import type { CollectionConfig } from 'payload'

const Rentals: CollectionConfig = {
  slug: 'rentals',
  admin: {
    useAsTitle: 'customerId',
  },
  // auth: true,
  fields: [
    { name: 'startRental', type: 'text', required: true },
    { name: 'endRental', type: 'text', required: true },
    { name: 'status', type: 'text' },
    { name: 'total', type: 'number' },
    { name: 'note', type: 'text' },
    { name: 'discount', type: 'number' },
    { name: 'imageContract', type: 'upload', relationTo: 'media' },
    { name: 'customerId', type: 'relationship', relationTo: 'customers' },
    {
      name: 'deviceIds', // Tên field trong database
      type: 'relationship',
      relationTo: 'devices', // Phải khớp với slug của collection 'brands'
      required: true, // Bắt buộc phải chọn brand
      hasMany: true,
    },
  ],
}

export default Rentals
