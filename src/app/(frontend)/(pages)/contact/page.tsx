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
          Ghé chơi với <span className="italic font-serif font-light text-[#8b7355]">Mili.</span>
        </h1>
        <p className="text-[#6b5e51] max-w-xl mx-auto px-6 leading-relaxed">
          Bạn có câu hỏi về thiết bị hay cần tư vấn gói thuê dài hạn? Đừng ngần ngại để lại lời nhắn
          hoặc ghé trực tiếp tiệm nhé!
        </p>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Cột trái: Thông tin liên hệ */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Địa chỉ */}
              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#eddfc8] flex items-center justify-center text-[#c0a080] group-hover:bg-[#4a3f35] group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#4a3f35] uppercase text-xs tracking-widest mb-2">
                    Địa chỉ
                  </h3>
                  <p className="text-[#6b5e51] text-sm leading-relaxed">
                    541/27 Huỳnh Văn Bánh - Phú Nhuận
                    <br />
                    Thành phố Hồ Chí Minh
                  </p>
                </div>
              </div>

              {/* Hotline */}
              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#eddfc8] flex items-center justify-center text-[#c0a080] group-hover:bg-[#4a3f35] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#4a3f35] uppercase text-xs tracking-widest mb-2">
                    Hotline / Zalo
                  </h3>
                  <p className="text-[#6b5e51] text-sm font-bold">0779641623</p>
                  <p className="text-[#8b7355] text-[10px] italic underline">Nhấn để gọi ngay</p>
                </div>
              </div>

              {/* Giờ làm việc */}
              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#eddfc8] flex items-center justify-center text-[#c0a080] group-hover:bg-[#4a3f35] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#4a3f35] uppercase text-xs tracking-widest mb-2">
                    Giờ mở cửa
                  </h3>
                  <p className="text-[#6b5e51] text-sm">08:00 AM - 09:00 PM</p>
                  <p className="text-[#8b7355] text-[10px]">Làm việc cả T7 & CN</p>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#eddfc8] flex items-center justify-center text-[#c0a080] group-hover:bg-[#4a3f35] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#4a3f35] uppercase text-xs tracking-widest mb-2">
                    Email
                  </h3>
                  <p className="text-[#6b5e51] text-sm">Đang update...</p>
                </div>
              </div>
            </div>

            {/* Quick Zalo Card */}
            <div className="p-8 rounded-[32px] bg-[#4a3f35] text-white flex items-center justify-between shadow-2xl shadow-[#4a3f35]/20">
              <div>
                <p className="text-xl font-bold">Tư vấn nhanh qua Zalo</p>
                <p className="text-[#c0a080] text-sm italic">Hỗ trợ check lịch máy 24/7</p>
              </div>
              <a
                href="https://zalo.me/0779641623"
                className="w-14 h-14 rounded-full bg-white text-[#4a3f35] flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
              >
                <MessageCircle fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Cột phải: Google Maps hoặc Hình ảnh tiệm */}
          <div className="relative h-[450px] lg:h-full min-h-[400px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
            {/* Thay src bằng link embed Maps của bạn */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4950462234053!2d106.69916297593635!3d10.773344259253457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f474364e3cb%3A0xc393667c80d839c0!2zRHluaCBEx丁YyBM4bqtcA!5e0!3m2!1svi!2s!4v1713500000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) sepia(0.2)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
