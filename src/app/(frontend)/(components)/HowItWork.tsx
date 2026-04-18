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
    <section className="py-12 bg-[#fdfaf6]">
      <div className="container mx-auto px-6">
        {/* Tiêu đề Section */}
        <div className="text-center mb-20">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c0a080] mb-3 block">
            Đơn giản & Minh bạch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#4a3f35] mb-4">
            Quy trình <span className="italic font-serif font-light text-[#8b7355]">thuê máy</span>
          </h2>
          <div className="w-16 h-1 bg-[#eddfc8] mx-auto rounded-full"></div>
        </div>

        {/* Quy trình - Desktop Timeline */}
        <div className="relative">
          {/* Đường kẻ nối giữa các bước (Chỉ hiện trên Desktop) */}
          <div className="absolute top-[45px] left-0 w-full h-[2px] bg-[#eddfc8] z-0 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {STEPS.map((step, index) => (
              <div key={step.id} className="group flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="relative mb-8">
                  <div className="w-[90px] h-[90px] rounded-[30px] bg-white border-2 border-[#eddfc8] flex items-center justify-center text-[#4a3f35] shadow-sm group-hover:bg-[#4a3f35] group-hover:text-white group-hover:border-[#4a3f35] transition-all duration-500 rotate-3 group-hover:rotate-0">
                    {step.icon}
                  </div>
                  {/* Số thứ tự nhỏ */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#eddfc8] text-[#8b7355] text-xs font-black flex items-center justify-center border-4 border-[#fdfaf6]">
                    {step.id}
                  </span>
                </div>

                {/* Nội dung */}
                <div className="space-y-3 px-2">
                  <h3 className="text-xl font-black text-[#4a3f35]">{step.title}</h3>
                  <p className="text-sm text-[#8b7355] leading-relaxed font-medium">{step.desc}</p>
                </div>

                {/* Arrow cho Mobile/Tablet (Ẩn trên LG) */}
                {index !== STEPS.length - 1 && (
                  <div className="mt-8 lg:hidden text-[#eddfc8]">
                    <svg
                      className="w-6 h-6 rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                )}
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
