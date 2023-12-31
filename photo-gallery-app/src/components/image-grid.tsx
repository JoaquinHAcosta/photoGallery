import CloudinaryImage from '@/components/cloudinary-image'
import { SearchResult } from '@/app/gallery/page'
import { ReactNode } from 'react'

interface Props {
  images: SearchResult[]
  getImage: (imageData: SearchResult) => ReactNode
}

export function ImageGrid({ images, getImage }: Props) {
  const MAX_COLUMNS = 4

  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => {
      return idx % MAX_COLUMNS === colIndex
    })
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map(getImage)}
          </div>
        )
      )}
    </div>
  )
}
