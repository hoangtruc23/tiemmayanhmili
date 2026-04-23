import { CollectionConfig } from 'payload'

const Bookings: CollectionConfig = {
  slug: 'bookings',
  auth: false,
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'note', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
export default Bookings
