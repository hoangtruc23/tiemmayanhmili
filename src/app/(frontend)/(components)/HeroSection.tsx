import Image from 'next/image'

function HeroSection() {
  const headerHeight = '80px'

  return (
    <section
      className="relative flex items-center overflow-hidden bg-[#eddfc8]/30 px-6 lg:px-12"
      style={{ minHeight: `calc(100vh - ${headerHeight})` }}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-white/40 skew-x-[-10deg] translate-x-32 z-0 hidden lg:block shadow-[-20px_0_50px_rgba(0,0,0,0.02)]"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 py-12 lg:py-0">
        {/* Right Content - Visual (Đặt lên trước trên Mobile) */}
        <div className="relative flex items-center justify-center lg:order-2">
          {/* Vòng tròn sáng nhẹ */}
          <div className="absolute w-[60vw] lg:w-[400px] aspect-square bg-gradient-to-tr from-white to-transparent rounded-full blur-3xl opacity-50 animate-pulse"></div>

          <div className="relative z-10 w-full max-w-[280px] lg:max-w-[500px] animate-in zoom-in duration-1000">
            <Image
              src="/image/pocket_3.png"
              alt="DJI Osmo Pocket 3"
              width={200}
              height={200}
              className="object-cover mx-auto drop-shadow-[0_20px_50px_rgba(74,63,53,0.15)] hover:scale-105 transition-transform duration-500"
              priority
            />

            {/* Status Pill (Nhỏ lại trên mobile) */}
            <div className="absolute top-[10%] -right-2 lg:top-[25%] bg-white/90 backdrop-blur shadow-md border border-[#eddfc8] p-2 lg:p-3 rounded-2xl flex items-center gap-2">
              <span className="relative flex h-2 w-2 lg:h-3 lg:w-3">
                <span className="relative inline-flex rounded-full h-2 w-2 lg:h-3 lg:w-3 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] lg:text-sm font-bold text-[#4a3f35]">
                Sẵn máy tại HCM
              </span>
            </div>
          </div>
        </div>

        {/* Left Content - Text (Đặt sau trên Mobile) */}
        <div className="flex flex-col justify-center space-y-6 lg:order-1 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 bg-[#4a3f35] text-[#eddfc8] text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm mx-auto lg:mx-0">
              Established 2026
            </div>

            <h1 className="flex flex-col gap-1 lg:gap-2">
              <span className="text-5xl md:text-7xl lg:text-8xl font-black text-[#4a3f35] tracking-tight">
                Mili.Frame
              </span>
              <span className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-3">
                <span className="text-xl md:text-3xl font-light text-[#8b7355] tracking-[0.1em] uppercase">
                  Tiệm máy ảnh
                </span>
                <span className="px-3 py-1 border border-[#c0a080] text-[#c0a080] text-xs lg:text-md font-bold rounded-md">
                  Mua & Bán & Thuê
                </span>
              </span>
            </h1>

            <div className="max-w-md mx-auto lg:mx-0 space-y-4">
              <p className="text-[#6b5e51] text-sm lg:text-base leading-relaxed">
                Liên hệ shop để tụi mình tư vấn kỹ hơn nhaa!
              </p>
              <div className="w-12 h-[1px] bg-[#4a3f35] mx-auto lg:mx-0"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 lg:px-8 lg:py-4 bg-[#4a3f35] text-white font-bold rounded-2xl hover:bg-[#383029] transition-all shadow-lg flex items-center gap-2 group">
              Thuê máy ngay
            </button>
            <a
              href="https://zalo.me/0779641623"
              className="px-6 py-3 lg:px-8 lg:py-4 bg-white/50 border border-[#d4c3a8] text-[#4a3f35] font-semibold rounded-2xl hover:bg-white transition-all"
            >
              Tư vấn thêm
            </a>
          </div>

          {/* Quick Stats (Ẩn 1 mục trên mobile để đỡ chật) */}
          <div className="flex justify-center lg:justify-start gap-6 lg:gap-8 pt-4">
            <div>
              <p className="text-xl lg:text-2xl font-black text-[#4a3f35]">150k</p>
              <p className="text-[9px] font-bold text-[#8b7355] uppercase tracking-tighter">
                Đồng giá
              </p>
            </div>
            <div className="w-px h-10 bg-[#d4c3a8]/60"></div>
            <div>
              <p className="text-xl lg:text-2xl font-black text-[#4a3f35]">0đ</p>
              <p className="text-[9px] font-bold text-[#8b7355] uppercase tracking-tighter">
                Cọc linh hoạt
              </p>
            </div>
            <div className="w-px h-10 bg-[#d4c3a8]/60 hidden sm:block"></div>
            <div className="hidden sm:block">
              <p className="text-xl lg:text-2xl font-black text-[#4a3f35]">4.9★</p>
              <p className="text-[9px] font-bold text-[#8b7355] uppercase tracking-tighter">
                Tin dùng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
