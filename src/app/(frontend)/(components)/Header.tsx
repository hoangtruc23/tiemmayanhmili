'use client' // Cần thiết vì có useState cho mobile menu

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menu = [
    { label: 'Trang chủ', slug: '/' },
    { label: 'Cửa hàng', slug: '/shop-buy' },
    { label: 'Danh sách máy thuê', slug: '/shop-rent' },
    { label: 'Hướng dẫn', slug: '/guide' },
    { label: 'Liên hệ', slug: '/contact' },
  ]

  return (
    <header className="bg-[#0a0a0a]">
      {/* Container - padding 22px 64px theo đúng CSS của bạn */}
      <nav className="flex items-center justify-between px-6 py-[22px] lg:px-16">
        {/* Logo */}
        <a
          className="flex items-center gap-3 text-[1.55rem] font-bold tracking-[0.04em] text-[#eddfc8] no-underline"
          href="/"
        >
          Mili.Frame
        </a>

        {/* Desktop Links - Ẩn trên mobile */}
        <ul className="hidden lg:flex gap-10 list-none">
          {menu.map((i, index) => (
            <li key={index}>
              <a
                href={i.slug}
                className="font-normal tracking-[0.06em] text-[#eddfc8] no-underline transition-colors hover:text-white"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden lg:block bg-[#eddfc8] text-[#0a0a0a] rounded-[100px] px-[26px] py-[11px] font-semibold text-[0.82rem] tracking-[0.04em] transition-all hover:bg-[#d4c3a8] hover:scale-[1.04]">
          Đặt lịch thuê
        </button>

        {/* Mobile Hamburger Button */}
        <button className="lg:hidden text-[#eddfc8]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-[#eddfc8]/20 p-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
          {menu.map((i, index) => (
            <a
              key={index}
              href={i.slug}
              className="text-[#eddfc8] font-semibold tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {i.label}
            </a>
          ))}
          <button className="bg-[#eddfc8] text-[#0a0a0a] rounded-[100px] py-3 font-semibold tracking-wider">
            Đặt lịch thuê
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
