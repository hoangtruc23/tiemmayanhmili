import React from 'react'
import { Rokkitt } from 'next/font/google' // Import font
import './styles.css'
import Header from '@/app/(frontend)/(components)/Header'

// Cấu hình font
const rokkitt = Rokkitt({
  subsets: ['vietnamese'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-rokkitt', // Biến CSS
  display: 'swap',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Mili.Frame - Tiệm máy ảnh cho thuê',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="vi" className={rokkitt.variable}>
      <body className="font-rokkitt">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
