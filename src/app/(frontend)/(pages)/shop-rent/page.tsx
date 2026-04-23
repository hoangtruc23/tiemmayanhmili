import config from '@/payload.config'
import { getPayload } from 'payload'
import CameraListClient from './camera-list/CameraList' // Import component client của bạn
export default async function ShopRentPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const models = await payload.find({
    collection: 'models',
    where: {
      isForRent: {
        equals: true,
      },
    },
  })

  return (
    <section className="bg-white py-10 px-6 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-[#4a3f35] text-4xl md:text-4xl font-black mb-6">
          Danh sách các máy<span className="text-[#c0a080]"> cho thuê</span>
        </h2>

        <CameraListClient initialCameras={models.docs} />
      </div>
    </section>
  )
}
