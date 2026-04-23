import { CollectionConfig } from 'payload'

const Customers: CollectionConfig = {
  slug: 'customers',
  auth: false,
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'phoneNumber', type: 'text', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'times', type: 'number', defaultValue: 1 },
    { name: 'identityCard', type: 'text', required: false },
    { name: 'address', type: 'text', required: false },
    { name: 'note', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
export default Customers
