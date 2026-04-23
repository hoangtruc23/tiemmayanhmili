'use client'
import { useState, useEffect, useCallback } from 'react'
import { fetchDevices } from './actions'
import { Button } from '@/components/ui/button'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit2, Trash2 } from 'lucide-react'
import { Device } from '@/payload-types'
import StatusBadge from '@/app/manage/components/StatusBadge'

export default function DeviceManagement() {
  const [statusDevice, setStatusDevice] = useState('')
  const [countDevice, setCountDevice] = useState({
    totalDevices: 0,
    availableDevices: 0,
    rentedDevices: 0,
    maintenanceDevices: 0,
  })

  const [devices, setDevices] = useState<Device[]>([])
  const [status, setStatus] = useState('')

  // Gọi hàm fetchDevices từ file actions
  const loadData = useCallback(async () => {
    const res = await fetchDevices(status)
    setDevices(res)
    const activeDevices = res.filter((d: Device) => d.status !== 'sold')
    setCountDevice({
      totalDevices: activeDevices.length,
      availableDevices: res.filter((d: Device) => d.status === 'available').length,
      rentedDevices: res.filter((d: Device) => d.status === 'rented').length,
      maintenanceDevices: res.filter((d: Device) => d.status === 'maintenance').length,
    })
  }, [status])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <div>
      <div className="md:flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Quản lý thiết bị</h1>
      </div>

      <div className="my-2">
        <span className="text-sm font-medium text-gray-600 mx-2">Lọc theo trạng thái</span>
        <select
          className="border rounded-lg px-3 py-2 text-sm bg-white"
          value={statusDevice}
          onChange={(e) => setStatusDevice(e.target.value)}
        >
          <option value="">Tất cả</option>
          <option value="available">Sẵn sàng</option>
          <option value="rented">Đang cho thuê</option>
          <option value="maintenance">Bảo trì</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-pink-50 rounded-lg border">
          <div className="text-xs text-pink-500 uppercase font-bold">Tổng máy hoạt động</div>
          <div className="text-2xl font-bold text-pink-900">{countDevice.totalDevices}</div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <div className="text-xs text-green-600 uppercase font-bold">Đang trống</div>
          <div className="text-2xl font-bold text-green-700">{countDevice.availableDevices}</div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="text-xs text-blue-600 uppercase font-bold">Đang cho thuê</div>
          <div className="text-2xl font-bold text-blue-700">{countDevice.rentedDevices}</div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <div className="text-xs text-amber-600 uppercase font-bold">Bảo trì</div>
          <div className="text-2xl font-bold text-amber-700">{countDevice.maintenanceDevices}</div>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        {/* --- GIAO DIỆN TABLE (Chỉ hiện từ màn hình sm trở lên) --- */}
        <div className="hidden md:block">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead>Tên máy</TableHead>
                <TableHead>Dòng máy</TableHead>
                <TableHead>Giá thuê</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ghi chú</TableHead>
                <TableHead className="text-right">Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell>
                    <div className="">
                      {device.name} - {device.serialNumber}
                    </div>
                  </TableCell>
                  <TableCell>{device?.model?.name}</TableCell>
                  <TableCell className="font-medium">
                    {device?.model?.pricePerDay?.toLocaleString()}đ
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={device.status || ''} />
                  </TableCell>
                  <TableCell>{device.note}</TableCell>
                  <TableCell className="text-right text-nowrap">
                    <Button variant="ghost" size="icon">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* --- GIAO DIỆN MOBILE CARD --- */}
        <div className="md:hidden divide-y">
          {devices.map((device) => (
            <div key={device.id} className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-slate-500">
                    {device.serialNumber}
                  </span>
                  <h3 className="font-bold text-slate-900">{device.name}</h3>
                </div>
                <StatusBadge status={device.status || ''} />
              </div>

              <div className="text-sm text-slate-500">
                Giá thuê:{' '}
                <span className="text-blue-600 font-semibold">{device.model?.pricePerDay}đ</span>
              </div>
              <div className="text-sm text-slate-500">{device.note || ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
