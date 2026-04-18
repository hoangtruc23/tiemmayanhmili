import { CollectionConfig } from 'payload'

const Cameras: CollectionConfig = {
  slug: 'cameras',
  auth: false,
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'brand', type: 'select', options: ['DJI', 'Insta360', 'Sony'] },
    { name: 'pricePerDay', type: 'number', required: false },
    { name: 'priceBuy', type: 'number', required: false },
    { name: 'status', type: 'select', options: ['available', 'rented', 'maintenance'] },
    { name: 'service', type: 'select', options: ['buy', 'rent'] },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
export default Cameras
