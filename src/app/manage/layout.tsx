import React from 'react'
import { Rokkitt } from 'next/font/google' // Import font
import './styles.css'
import Sidebar from '@/app/manage/components/Sidebar'

// Cấu hình font
const rokkitt = Rokkitt({
  subsets: ['vietnamese'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-rokkitt', // Biến CSS
  display: 'swap',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="vi" className={rokkitt.variable}>
      <body className="flex font-rokkitt">
        <Sidebar />
        <main className="w-full p-8">{children}</main>
      </body>
    </html>
  )
}
