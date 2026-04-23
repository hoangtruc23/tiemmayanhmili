'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CardCamera from '@/app/(frontend)/(components)/CardCamera'
import RentalBookingForm from '@/app/(frontend)/(components)/RentalBookingForm'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

interface CameraListProps {
  initialCameras: any[]
}

export default function CameraListClient({ initialCameras }: CameraListProps) {
  const [keyword, setKeyword] = useState('')
  const [selectedCamera, setSelectedCamera] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredCameras = initialCameras.filter((cam: any) =>
    cam.name?.toLowerCase().includes(keyword.toLowerCase()),
  )

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-3">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Tìm máy ảnh..."
          className="flex-grow py-2 px-6 border border-[#eddfc8] rounded-xl outline-none transition-all"
        />
      </div>
      {/* <div className="mb-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-2 bg-[#4a3f35] text-white font-bold rounded-xl hover:bg-[#383029] transition-all shadow-lg whitespace-nowrap"
        >
          Kiểm tra lịch thuê máy
        </button>
      </div> */}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg w-full bg-[#fcfaf7] rounded-3xl p-6 md:p-10 border-none">
          <DialogTitle className="sr-only">Đặt lịch thuê máy</DialogTitle>
          <RentalBookingForm item={selectedCamera} />
        </DialogContent>
      </Dialog>

      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCameras.map((cam: any) => (
            <CardCamera
              item={cam}
              type="thuê"
              key={cam.id}
              onBookClick={() => {
                setSelectedCamera(cam)
                setIsModalOpen(true)
              }}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredCameras.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[#8b7355] italic py-10"
        >
          Không tìm thấy máy phù hợp...
        </motion.p>
      )}
    </div>
  )
}
