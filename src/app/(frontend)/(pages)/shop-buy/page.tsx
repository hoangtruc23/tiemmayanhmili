import CardCamera from '@/app/(frontend)/(components)/CardCamera'
import config from '@/payload.config'
import { getPayload } from 'payload'

async function ShopBuy() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Lấy danh sách camera từ Database thông qua Local API của Payload
  const cameras = await payload.find({
    collection: 'cameras',
    where: {
      service: {
        equals: 'buy',
      },
    },
  })

  return (
    <>
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-[#4a3f35] text-4xl md:text-5xl font-black">
                Danh sách <span className="text-[#c0a080]">máy ảnh</span>
              </h2>
              <p className="text-[#8b7355] max-w-md font-medium">
                Lựa chọn người bạn đồng hành phù hợp cho chuyến đi của bạn. Tất cả máy đều được vệ
                sinh và kiểm tra kỹ lưỡng.
              </p>
            </div>

            {/* Filter đơn giản */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {['Tất cả', 'Action Cam', 'Phụ kiện'].map((tab) => (
                <button
                  key={tab}
                  className="whitespace-nowrap px-6 py-2 rounded-full border border-[#eddfc8] text-[#4a3f35] font-semibold hover:bg-[#eddfc8] transition-colors"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Danh sách máy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cameras.docs.map((cam) => (
              <CardCamera item={cam} type="bán" key={cam.id} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-[#4a3f35] font-bold border-b-2 border-[#c0a080] pb-1 hover:text-[#c0a080] transition-colors">
              Xem toàn bộ thiết bị
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopBuy
