'use client'

import UploadButton from './upload-button'
import cloudinary from 'cloudinary'

const GalleryPage = async () => {
  const result = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute()
    .then((result) => console.log(result))

  return (
    <section className="flex justify-between">
      <h1 className="text-4xl font-bold">Gallery</h1>
      <UploadButton />
    </section>
  )
}

export default GalleryPage
