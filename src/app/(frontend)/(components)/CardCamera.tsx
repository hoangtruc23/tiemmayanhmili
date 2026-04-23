import Image from 'next/image'

function CardCamera({
  item,
  type,
  onBookClick,
}: {
  item: any
  type: string
  onBookClick?: () => void
}) {
  return (
    // 1. Giảm padding của card từ p-4 xuống p-3
    <div className="group relative flex flex-col bg-[#fcfaf7] rounded-[24px] p-3 border border-transparent hover:border-[#eddfc8] hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-[#4a3f35]/5">
      {/* 2. Đổi aspect-[4/5] (dài) sang aspect-square hoặc aspect-[4/3] (vuông hơn) */}
      <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[#f5efe6] flex items-center justify-center p-4">
        {item?.isHot && (
          <span className="absolute top-3 left-3 z-20 bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
            🔥 Hot
          </span>
        )}

        <Image
          src={item?.image?.url || '/image/placeholder-camera.png'}
          alt={item?.name || 'Camera image'}
          fill
          className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 25vw"
          quality={80}
        />

        <div className="absolute inset-0 bg-[#4a3f35]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
          <button className="bg-white text-[#4a3f35] px-4 py-2 rounded-full font-bold shadow-lg text-sm translate-y-2 group-hover:translate-y-0 transition-transform">
            Chi tiết
          </button>
        </div>
      </div>

      {/* 3. Giảm margin-top mt-6 xuống mt-3 */}
      <div className="mt-3 px-1 pb-1">
        <div className="mb-1">
          <p className="text-[9px] font-bold text-[#c0a080] uppercase tracking-widest">
            {item?.brand?.name}
          </p>
          {/* 4. Giảm text-xl xuống text-base */}
          <h3 className="text-base font-bold text-[#4a3f35] leading-tight truncate">
            {item?.name}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#eddfc8]/60">
          <div className="flex flex-col">
            <span className="text-[9px] text-[#8b7355] font-bold uppercase">Giá {type}</span>
            {/* 5. Giảm text-lg xuống text-sm */}
            <p className="text-[#4a3f35] font-black text-sm">
              {type === 'bán' && 'Liên hệ'}
              {type === 'thuê' && item?.pricePerDay?.toLocaleString() + 'đ'}
              {type === 'thuê' && <span className="text-[10px] font-normal">/ngày</span>}
            </p>
          </div>

          {/* <button
            className="w-8 h-8 rounded-full bg-[#4a3f35] text-white flex items-center justify-center hover:bg-black transition-colors shadow-lg"
            onClick={onBookClick}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default CardCamera
