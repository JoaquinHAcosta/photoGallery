'use client'

import { CldImage } from 'next-cloudinary'

interface Props {
  searchParams: { publicId: string }
}

const EditPage = ({ searchParams: { publicId } }: Props) => {
  console.log(publicId)

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>

        <CldImage src={publicId} width={300} height={200} alt="text" />
      </div>
    </section>
  )
}

export default EditPage
