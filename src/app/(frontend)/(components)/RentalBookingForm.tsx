'use client'
import { useState, useMemo } from 'react'
import { Sparkles, Calendar, Clock, Plus, Minus } from 'lucide-react'

export default function RentalBookingForm({ item }: { item: any }) {
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('09:00')
  const [duration, setDuration] = useState(1) // Mặc định thuê 1 ngày

  // Tự động tính ngày trả dựa trên ngày nhận + số ngày thuê
  const endDate = useMemo(() => {
    if (!startDate) return ''
    const date = new Date(startDate)
    date.setDate(date.getDate() + duration)
    return date.toISOString().split('T')[0] // Format YYYY-MM-DD
  }, [startDate, duration])

  const handleCheckDevice = (value: string) => {}

  return (
    <div className="max-w-md mx-auto bg-[#fcfaf7] rounded-[32px]">
      <h2 className="text-xl font-black text-[#4a3f35] mb-6 tracking-tight">ĐẶT LỊCH THUÊ MÁY</h2>

      {/* Date & Time Inputs */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-[10px] font-bold text-neutral-500 uppercase mb-1 block">
            Ngày nhận
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-3 rounded-xl border border-[#eddfc8] text-sm text-[#4a3f35] bg-white outline-none focus:ring-2 focus:ring-[#c0a080]/30"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-neutral-500 uppercase mb-1 block">
            Giờ nhận
          </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-3 rounded-xl border border-[#eddfc8] text-sm text-[#4a3f35] bg-white"
          />
        </div>
      </div>

      <div className="mb-6 p-4 bg-white rounded-2xl border border-[#eddfc8]">
        <label className="text-[10px] font-bold text-neutral-500 uppercase mb-3 block">
          Số ngày thuê
        </label>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setDuration(Math.max(1, duration - 1))}
            className="w-10 h-10 rounded-full bg-[#fcfaf7] border border-[#eddfc8] flex items-center justify-center hover:bg-[#eddfc8] transition-colors"
          >
            <Minus className="w-4 h-4 text-[#4a3f35]" />
          </button>
          <div className="text-xl font-black text-[#4a3f35]">
            {duration} <span className="text-sm font-normal text-neutral-500">ngày</span>
          </div>
          <button
            onClick={() => setDuration(duration + 1)}
            className="w-10 h-10 rounded-full bg-[#fcfaf7] border border-[#eddfc8] flex items-center justify-center hover:bg-[#eddfc8] transition-colors"
          >
            <Plus className="w-4 h-4 text-[#4a3f35]" />
          </button>
        </div>
      </div>

      {/* Calculated End Date (Readonly) */}
      <div className="mb-6 p-4 bg-[#f3e9d8]/30 rounded-2xl border border-[#eddfc8]/50 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-bold text-neutral-500 uppercase">Ngày trả dự kiến</p>
          <p className="text-sm font-bold text-[#4a3f35]">{endDate || '---'}</p>
        </div>
        <Clock className="w-5 h-5 text-[#c0a080]" />
      </div>
      <p className="text-center text-md text-neutral-400 mt-6 italic">
        Nhắn tin cho shop để thay đổi giờ nhận/trả máy linh hoạt hơn nha!
      </p>
      <button
        className="w-full py-4 bg-[#4a3f35] text-white font-bold rounded-2xl uppercase text-sm shadow-sm hover:bg-[#383029] transition-all"
        onClick={() => handleCheckDevice('')}
      >
        Kiểm tra máy trống
      </button>
    </div>
  )
}
