import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Models from '@/collections/Models'
import Brands from '@/collections/Brands'
import Devices from '@/collections/Devices'
import Bookings from '@/collections/Bookings'
import Rentals from '@/collections/Rentals'
import Customers from '@/collections/Customers'
import Expenses from '@/collections/Expenses'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      icons: [
        {
          rel: 'icon',
          url: '/image/logo.png',
        },
      ],
    },
  },
  collections: [Users, Media, Brands, Models, Devices, Bookings, Rentals, Customers, Expenses],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})
