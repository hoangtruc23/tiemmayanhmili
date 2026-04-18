'use client'

import { useState } from 'react'
import CardCamera from '@/app/(frontend)/(components)/CardCamera'

// Nhận dữ liệu truyền từ page.tsx vào qua props
export default function CameraListClient({ initialCameras }) {
  const [keyword, setKeyword] = useState('')

  const filteredCameras = initialCameras.filter((cam: any) =>
    cam.name.toLowerCase().includes(keyword.toLowerCase()),
  )

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Tìm máy ảnh..."
        className="w-full mb-10 py-4 px-6 border border-[#eddfc8] rounded-2xl outline-none focus:ring-2 focus:ring-[#c0a080]"
      />

      {/* Hiển thị danh sách kết quả */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCameras.map((cam: any) => (
          <CardCamera item={cam} type="thuê" key={cam.id} />
        ))}
      </div>

      {filteredCameras.length === 0 && (
        <p className="text-center text-[#8b7355] italic">Không tìm thấy máy phù hợp...</p>
      )}
    </div>
  )
}
