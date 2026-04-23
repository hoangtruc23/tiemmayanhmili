'use client'
import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react' // Bạn có thể dùng icon tùy ý
import { useRouter } from 'next/navigation'
import Sidebar from '@/app/manage/components/Sidebar'
// import DashboardPage from '@/app/admin/Dashboard'
// import DeviceManagement from '@/app/admin/DeviceManagement'
// import RentalSchedule from '@/app/admin/RentalsSchedule'
// import MenuAdmin from '@/app/admin/Menu'
// import Expenses from '@/app/admin/Expenses'
// import Customer from '@/app/admin/Customer'

function ManagePage() {
  const [activeTab, setActiveTab] = useState('manage')
  const [openSidebar, setOpenSidebar] = useState(false)
  const router = useRouter()

  const handleTab = (tab: string) => {
    switch (tab) {
      case 'dashboard':
        router.push('/manage/dashboard')
    }
  }

  useEffect(() => {
    handleTab(activeTab)
  }, [activeTab])

  return (
    <div className="flex h-screen w-full bg-slate-50 relative">
      {/* 1. Overlay (Lớp phủ đen khi mở menu trên mobile) */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white border-b lg:hidden">
          <button
            onClick={() => setOpenSidebar(true)}
            className="p-2 hover:bg-slate-100 rounded-md"
          >
            <Menu size={24} />
          </button>
          <h1 className="font-semibold capitalize">{activeTab}</h1>
          <div className="w-8" />
        </header>

        <main className="flex-1 overflow-y-auto p-6"></main>
      </div>
    </div>
  )
}

export default ManagePage
