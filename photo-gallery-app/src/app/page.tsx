'use client'
import {
  CldImage,
  CldUploadButton,
  CldUploadWidgetResults,
} from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'

export type UploadResult = {
  info: {
    public_id: string
  }
  event: 'success'
}

export default function Home() {
  const [imageId, setImageId] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  )
}
