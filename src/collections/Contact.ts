import { CollectionConfig } from 'payload'

const Contact: CollectionConfig = {
  slug: 'contact',
  auth: false,
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'hotline', type: 'text', required: true },
    { name: 'email', type: 'text', required: false },
  ],
}
export default Contact
