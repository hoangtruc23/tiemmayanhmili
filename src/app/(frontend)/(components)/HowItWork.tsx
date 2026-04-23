import React from 'react'
import { Search, Calendar, Truck, Camera, RotateCcw } from 'lucide-react'

const STEPS = [
  {
    id: '01',
    icon: <Search className="w-5 h-5" />,
    title: 'Chọn thiết bị',
    desc: 'Tham khảo danh sách và nhắn Zalo để shop tư vấn mẫu máy phù hợp nhất.',
  },
  {
    id: '02',
    icon: <Calendar className="w-5 h-5" />,
    title: 'Đặt lịch thuê',
    desc: 'Chọn ngày nhận máy. Thanh toán tiền thuê & cọc để giữ lịch.',
    note: 'Nhắn shop check lịch trước khi chuyển khoản nhé!',
  },
  {
    id: '03',
    icon: <Truck className="w-5 h-5" />,
    title: 'Nhận thiết bị',
    desc: 'Giao tận nơi nội thành TP.HCM hoặc nhận tại studio của Mili.Frame.',
  },
  {
    id: '04',
    icon: <Camera className="w-5 h-5" />,
    title: 'Trải nghiệm',
    desc: 'Tận hưởng chuyến đi. Trả máy đúng hẹn, không phát sinh chi phí ẩn.',
  },
  {
    id: '05',
    icon: <RotateCcw className="w-5 h-5" />,
    title: 'Hoàn cọc',
    desc: 'Shop kiểm tra máy và hoàn cọc trong vòng 6 tiếng sau khi nhận.',
  },
]

const HowItWork = () => {
  return (
    <section className="">
      <div className="container mx-auto px-6">
        {/* Tiêu đề Section */}
        <div className="text-center mb-5">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c0a080] mb-3 block">
            Đơn giản & Minh bạch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#4a3f35] mb-4">
            Quy trình <span className="italic font-serif font-light text-[#8b7355]">thuê máy</span>
          </h2>
          <div className="w-16 h-1 bg-[#eddfc8] mx-auto rounded-full"></div>
        </div>

        {/* Quy trình - Desktop Timeline */}
        <div className="max-w-3xl mx-auto py-6">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#eddfc8]">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[#4a3f35] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-[#4a3f35]">{step.icon}</span>
                </div>

                {/* Card Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[#fcfaf7] border border-[#eddfc8]/30 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-black text-[#4a3f35]">{step.title}</h3>
                    <span className="text-[#eddfc8] font-black text-2xl opacity-50">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-[#8b7355] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nút hỗ trợ nhanh bên dưới quy trình */}
        {/* <div className="mt-20 flex justify-center">
          <div className="bg-white p-6 rounded-[32px] border border-[#eddfc8] flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-[#4a3f35]/5">
            <p className="text-[#4a3f35] font-bold">Bạn còn thắc mắc về thủ tục?</p>
            <button className="px-6 py-3 bg-[#25d366] text-white rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              Chat Zalo tư vấn ngay
            </button>
          </div>
        </div> */}
        <a
          href="https://zalo.me/0779641623"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit my-3 mx-auto px-6 py-3 bg-[#0068ff] text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-[#0056d2] hover:scale-105 transition-all shadow-lg shadow-blue-500/20"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          Chat Zalo tư vấn ngay
        </a>
      </div>
    </section>
  )
}

export default HowItWork
