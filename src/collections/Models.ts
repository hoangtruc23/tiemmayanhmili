import { CollectionConfig } from 'payload'

const Models: CollectionConfig = {
  slug: 'models',
  auth: false,
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true }, //Pocket 3, Osmo Nano,...
    { name: 'note', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'pricePerDay', type: 'number', required: false },
    {
      name: 'isForSale',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'isForRent',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'brand', // Tên field trong database
      type: 'relationship',
      relationTo: 'brands', // Phải khớp với slug của collection 'brands'
      required: true, // Bắt buộc phải chọn brand
      hasMany: false, // Mỗi model chỉ thuộc về 1 brand duy nhất
    },
  ],
}
export default Models
