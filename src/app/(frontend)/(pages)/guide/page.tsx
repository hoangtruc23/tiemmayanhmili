import React from 'react'
import { ClipboardList, ShieldCheck, MapPin, Phone } from 'lucide-react'

// Component con
const GuideCard = ({ title, icon: Icon, children, footer }: any) => (
  <div className="bg-[#0c121d] text-[#e0d8cc] p-6 md:p-10 rounded-3xl h-full flex flex-col shadow-xl">
    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
      <Icon className="w-9 h-9 text-[#c0a080]" />
      <h2 className="text-2xl md:text-2xl font-bold">{title}</h2>
    </div>

    <div className="flex-grow space-y-6 text-base md:text-lg leading-relaxed opacity-90">
      {children}
    </div>

    <div className="mt-10 pt-6 border-t border-white/10 text-sm text-neutral-400">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="w-4 h-4" /> 541/27 Huỳnh Văn Bánh, Phú Nhuận, TP.HCM
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4" /> {footer}
      </div>
    </div>
  </div>
)

function GuidePage() {
  return (
    <section className="bg-[#f9f7f2] py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Quy trình thuê */}
          <GuideCard title="Quy trình thuê" icon={ClipboardList} footer="0779641623 - 0972933942">
            <ol className="list-decimal pl-6 space-y-3 text-[16px]">
              <li>Khách hàng lựa chọn số ngày thuê để ra số tiền thuê.</li>
              <li>Khách hàng thanh toán tiền thuê + hình thức cọc.</li>
              <li>Khách hàng sử dụng, hoàn trả máy sau đó.</li>
              <li>Hoàn cọc sau khi trả máy, tối đa 24h.</li>
            </ol>

            <div className="font-bold text-[#c0a080] text-[16px]">Các hình thức cọc:</div>
            <ul className="list-disc pl-6 space-y-2 text-[16px]">
              <li>Cọc full giá trị máy.</li>
              <li>Cọc tài sản tương đương giá trị máy.</li>
              <li>Cọc 2 triệu.</li>
            </ul>
            <p className="italic pt-2 text-md text-neutral-300 text-[18px]">
              * Chỉ chấp nhận cho thuê với account chính chủ.
            </p>
          </GuideCard>

          {/* Quy định bảo quản */}
          <GuideCard title="Quy định bảo quản" icon={ShieldCheck} footer="0779641623 - 0972933942">
            <ul className="list-disc pl-6 space-y-3 text-[16px]">
              <li>Không chạm tay trực tiếp vào lens máy.</li>
              <li>Không để máy dưới ánh nắng mặt trời, nhiệt độ quá cao/quá thấp.</li>
              <li>Không để máy dính nước, cát, bùn đất.</li>
              <li>Không tự ý tháo máy, linh kiện.</li>
              <li>Không tự ý sửa chữa máy.</li>
              <li>Không để máy trong cốp xe hoặc tháo pin khi nhiệt độ cao.</li>
            </ul>

            <div className="mt-6 border border-[#c0a080]/30 rounded-2xl p-6 space-y-3 bg-white/5">
              <p className="font-bold text-red-400 uppercase tracking-wide">Phí đền bù:</p>
              <p>Với lỗi có thể sửa chữa, bạn vui lòng đền bù 100% phí sửa chữa.</p>
              <p>
                Trường hợp mất phụ kiện hoặc không thể sửa chữa, bạn vui lòng đền bù 100% giá trị.
              </p>
            </div>
          </GuideCard>
        </div>
      </div>
    </section>
  )
}

export default GuidePage
