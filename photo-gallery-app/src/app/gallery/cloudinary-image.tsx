'use client'

import { HeartIcon } from '@/components/icons/heart'
import { CldImage } from 'next-cloudinary'
import { setAsFavoriteAction } from './actions'
import { useTransition } from 'react'
import { SearchResult } from './page'
import { FullHeartIcon } from '@/components/icons/fullheart'

export default function CloudinaryImage(
  props: any & { imageData: SearchResult; path: string }
) {
  const [transition, startTransition] = useTransition()
  const { imageData } = props
  const isFavorited = imageData.tags?.includes('favorite')

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {!isFavorited ? (
        <HeartIcon
          className="absolute top-2 right-2 hover:text-red-600 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, false, props.path)
            })
          }}
        />
      ) : (
        <FullHeartIcon
          className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, true, props.path)
            })
          }}
        />
      )}
    </div>
  )
}
