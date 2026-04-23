'use client'
import { LayoutDashboard, Camera, CalendarDays, Users, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname() // Lấy đường dẫn hiện tại từ URL

  const navItems = [
    {
      id: 'dashboard',
      label: 'Tổng quan',
      href: '/manage/dashboard',
      icon: <LayoutDashboard size={20} />,
    },
    { id: 'devices', label: 'Thiết bị', href: '/manage/device', icon: <Camera size={20} /> },
    {
      id: 'rentals',
      label: 'Lịch thuê',
      href: '/manage/rentals',
      icon: <CalendarDays size={20} />,
    },
    { id: 'customers', label: 'Khách hàng', href: '/manage/customers', icon: <Users size={20} /> },
    { id: 'expenses', label: 'Chi tiêu', href: '/manage/expenses', icon: <Users size={20} /> },
  ]

  return (
    <aside className="flex flex-col w-64 h-screen bg-white border-r border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-6 h-16 border-b border-gray-100">
        <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
          <span className="text-white font-bold text-lg">M</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Mili.<span className="text-indigo-600">Frame</span>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          // Kiểm tra xem trang hiện tại có khớp với href không
          const isActive = pathname === item.href

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className={`${isActive ? 'text-indigo-600' : 'text-gray-400'}`}>
                {item.icon}
              </span>
              {item.label}
              {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600" />}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900">Admin</span>
            <span className="text-xs text-gray-500">Quản trị viên</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
