import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
// import './globals.css'
import HeroSection from '@/app/(frontend)/(components)/HeroSection'
import Header from '@/app/(frontend)/(components)/Header'
import Brand from '@/app/(frontend)/(components)/Brand'
import HowItWork from '@/app/(frontend)/(components)/HowItWork'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  // Lấy danh sách camera từ Database thông qua Local API của Payload
  const cameras = await payload.find({
    collection: 'cameras',
  })

  return (
    <div className="home">
      <div className="content">
        <HeroSection />
        <div className="p-16">
          {/* <Brand /> */}
          <HowItWork />
        </div>
      </div>
      {/* <div>
        <h1>Danh sách Camera cho thuê</h1>
        <ul>
          {cameras.docs.map((cam) => (
            <li key={cam.id}>
              {cam.name} - {cam.pricePerDay}/ngày
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}
