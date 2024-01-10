'use client'

import { HeartIcon } from '@/components/icons/heart'
import { CldImage, CldImageProps } from 'next-cloudinary'
import { setAsFavoriteAction } from '../app/gallery/actions'
import { useState, useTransition } from 'react'
import { SearchResult } from '../app/gallery/page'
import { FullHeartIcon } from '@/components/icons/fullheart'
import { ImageMenu } from './image-menu'

export default function CloudinaryImage(
  props: {
    imageData: SearchResult
    onUnheart?: (unheartResource: SearchResult) => void
  }
  // & Omit<CldImageProps, 'src'>
) {
  const [transition, startTransition] = useTransition()
  const { imageData, onUnheart } = props
  const [isFavorite, setIsFavorite] = useState(
    imageData.tags?.includes('favorite')
  )

  return (
    <div className="relative">
      <CldImage src={imageData.public_id} {...props} />
      {isFavorite ? (
        <FullHeartIcon
          className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            onUnheart?.(imageData)
            setIsFavorite(false)
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, false)
            })
          }}
        />
      ) : (
        <HeartIcon
          className="absolute top-2 left-2 hover:text-red-600 cursor-pointer"
          onClick={() => {
            setIsFavorite(true)
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, true)
            })
          }}
        />
      )}
      <ImageMenu image={imageData} />
    </div>
  )
}
