import { CollectionConfig } from 'payload'

const Brands: CollectionConfig = {
  slug: 'brands',
  auth: false,
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'note', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
export default Brands
