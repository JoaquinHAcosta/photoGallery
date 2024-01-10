'use client'

import { ImageGrid } from '@/components/image-grid'
import CloudinaryImage from '@/components/cloudinary-image'
import { SearchResult } from './page'

interface Props {
  images: SearchResult[]
}

export default function GalleryGrid({ images }: Props) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="random text"
          />
        )
      }}
    />
  )
}
