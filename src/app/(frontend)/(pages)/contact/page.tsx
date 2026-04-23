import React from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="bg-[#fdfaf6] min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-[#eddfc8]/30 border-b border-[#eddfc8]/50 text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c0a080] mb-4 block">
          Kết nối với chúng mình
        </span>
        <h1 className="text-5xl md:text-6xl font-black text-[#4a3f35] mb-6">
          Ghé chơi với <br />{' '}
          <span className="italic font-serif font-light text-[#8b7355]">Mili</span>
        </h1>
        <p className="text-[#6b5e51] max-w-xl mx-auto px-6 leading-relaxed">
          Bạn có câu hỏi về thiết bị hay cần tư vấn gói thuê dài hạn? Đừng ngần ngại để lại lời nhắn
          hoặc ghé trực tiếp tiệm nhé!
        </p>
      </section>

      <section className="bg-neutral-50 py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#4a3f35] mb-4">
              Liên hệ & Hỗ trợ
            </h2>
            <div className="h-1 w-20 bg-[#c0a080]"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch text-center">
            {/* Cột trái: Thông tin & Zalo */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: MapPin,
                    title: 'Địa chỉ',
                    content: '541/27 Huỳnh Văn Bánh, Phú Nhuận, TP.HCM',
                  },
                  { icon: Phone, title: 'Hotline', content: '0779641623' },
                  {
                    icon: Clock,
                    title: 'Giờ mở cửa',
                    content: '08:00 AM - 09:00 PM',
                  },
                  { icon: Mail, title: 'Email', content: 'limyshop29@gmail.com' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="m-auto w-12 h-12 rounded-2xl bg-[#fdfaf5] border border-[#eddfc8] flex items-center justify-center text-[#c0a080] mb-4 group-hover:bg-[#4a3f35] group-hover:text-white transition-colors">
                      <item.icon size={20} />
                    </div>
                    <h3 className="font-bold text-[#4a3f35] uppercase text-xs tracking-widest mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#6b5e51] font-medium leading-snug">{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Quick Zalo Card - Làm nổi bật hơn */}
              <div className="relative overflow-hidden p-8 rounded-[32px] bg-[#4a3f35] text-white flex items-center justify-between shadow-xl">
                <div className="relative z-10">
                  <p className="text-xl font-bold mb-1">Tư vấn nhanh qua Zalo</p>
                  <p className="text-[#c0a080] text-sm">Hỗ trợ check lịch máy 24/7</p>
                </div>
                <a
                  href="https://zalo.me/0779641623"
                  className="relative z-10 w-14 h-14 rounded-full bg-white text-[#4a3f35] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  <MessageCircle fill="currentColor" size={24} />
                </a>
                {/* Decorative circle */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#c0a080] rounded-full opacity-10"></div>
              </div>
            </div>

            {/* Cột phải: Google Maps */}
            <div className="relative h-[400px] lg:h-auto rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?..." // Thay bằng link nhúng thật của bạn
                className="w-full h-full"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
