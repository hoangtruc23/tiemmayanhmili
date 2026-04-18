import Image from 'next/image'
import React from 'react'

function CardCamera({ item, type }: { item: any; type: string }) {
  return (
    <div className="group relative flex flex-col bg-[#fcfaf7] rounded-[32px] p-4 border border-transparent hover:border-[#eddfc8] hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-[#4a3f35]/5">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#f5efe6] flex items-center justify-center p-6">
        {item.isHot && (
          <span className="absolute top-4 left-4 z-20 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
            🔥 Phổ biến
          </span>
        )}

        <Image
          src={item?.image?.url || '/image/placeholder-camera.png'}
          alt={item.name || 'Camera image'}
          width={120}
          height={120}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Quick View Button (Hover mới hiện) */}
        <div className="absolute inset-0 bg-[#4a3f35]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-white text-[#4a3f35] px-6 py-2.5 rounded-full font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform">
            Chi tiết
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 px-2 pb-2">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] font-bold text-[#c0a080] uppercase tracking-widest">
              {item.brand}
            </p>
            <h3 className="text-xl font-bold text-[#4a3f35] leading-tight">{item.name}</h3>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#eddfc8]/60">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#8b7355] font-bold uppercase">Giá {type}</span>
            <p className="text-[#4a3f35] font-black text-lg">
              {item.service === 'rent'
                ? item.pricePerDay.toLocaleString()
                : item.priceBuy.toLocaleString()}
              đ{type === 'thuê' && <span className="text-xs font-normal">/ngày</span>}
            </p>
          </div>
          <button className="w-10 h-10 rounded-full bg-[#4a3f35] text-white flex items-center justify-center hover:bg-black transition-colors shadow-lg shadow-[#4a3f35]/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardCamera
