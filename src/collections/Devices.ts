import { CollectionConfig } from 'payload'

const Devices: CollectionConfig = {
  slug: 'devices',
  auth: false,
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'model', // Tên field trong database
      type: 'relationship',
      relationTo: 'models', // Phải khớp với slug của collection 'models'
      required: true, // Bắt buộc phải chọn model
      hasMany: false, // Mỗi device chỉ thuộc về 1 model duy nhất
    },
    { name: 'name', type: 'text', required: true }, //Máy 1...
    { name: 'serialNumber', type: 'text', required: true }, // Số serial của thiết bị
    { name: 'priceBuy', type: 'number', required: false },
    { name: 'priceSale', type: 'number', required: false },
    { name: 'type', type: 'select', required: true, options: ['rental', 'sale'] }, // Loại thiết bị // Thuê hay Bán
    {
      name: 'status',
      type: 'select',
      options: ['available', 'rented', 'maintenance', 'sold', 'reserved'],
      defaultValue: 'available',
    },

    { name: 'note', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
export default Devices
