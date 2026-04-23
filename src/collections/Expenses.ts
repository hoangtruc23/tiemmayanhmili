import { CollectionConfig } from 'payload'

const Expenses: CollectionConfig = {
  slug: 'expenses',
  auth: false,
  admin: { useAsTitle: 'total' },
  fields: [
    { name: 'total', type: 'number', required: true },
    { name: 'description', type: 'text', required: false },
    { name: 'note', type: 'text', required: false },
    { name: 'status', type: 'text', required: false },
  ],
}
export default Expenses
