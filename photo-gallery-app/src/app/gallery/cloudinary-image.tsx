'use client'

import { HeartIcon } from '@/components/icons/heart'
import { CldImage, CldImageProps } from 'next-cloudinary'
import { setAsFavoriteAction } from './actions'
import { ComponentProps, useState, useTransition } from 'react'
import { SearchResult } from './page'
import { FullHeartIcon } from '@/components/icons/fullheart'

export default function CloudinaryImage(
  props: {
    imageData: SearchResult
    onUnheart?: (unheartResource: SearchResult) => void
  } & Omit<CldImageProps, 'src'>
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
          className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
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
          className="absolute top-2 right-2 hover:text-red-600 cursor-pointer"
          onClick={() => {
            setIsFavorite(true)
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, true)
            })
          }}
        />
      )}
    </div>
  )
}
