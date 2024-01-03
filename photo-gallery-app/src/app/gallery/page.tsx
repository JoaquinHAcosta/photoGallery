'use client'

import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary'
import React from 'react'
import { UploadResult } from '../page'
import { Button } from '@/components/ui/button'

const GalleryPage = () => {
  return (
    <section className="flex justify-between">
      <h1 className="text-4xl font-bold">Gallery</h1>
      <Button asChild>
        <CldUploadButton
          onUpload={(results: CldUploadWidgetResults) => {
            const res = results as UploadResult
            const publicId = res.info.public_id
            //   setImageId(publicId)
          }}
          uploadPreset="fioroasn"
        />
      </Button>
    </section>
  )
}

export default GalleryPage
