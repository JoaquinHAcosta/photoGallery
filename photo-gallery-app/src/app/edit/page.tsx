'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

interface Props {
  searchParams: { publicId: string }
}

const EditPage = ({ searchParams: { publicId } }: Props) => {
  const [transformation, setTransformation] = useState<
    | undefined
    | 'generative-fill'
    | 'blur'
    | 'grayscale'
    | 'pixelate'
    | 'removeBg'
  >(undefined)

  const [prompt, setPrompt] = useState('')
  const [pendingPrompt, setPendingPrompt] = useState('')

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>

        <div className="flex gap-4">
          <Button
            variant={'ghost'}
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>

          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                setTransformation('generative-fill')
                setPrompt(pendingPrompt)
              }}
            >
              Apply Generate Fill
            </Button>
            <Label>Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>
          <Button onClick={() => setTransformation('blur')}>Apply Blur</Button>
          <Button onClick={() => setTransformation('grayscale')}>
            Conver to Gray
          </Button>
          <Button onClick={() => setTransformation('pixelate')}>
            Pixelate
          </Button>
          <Button onClick={() => setTransformation('removeBg')}>
            Remove Background
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} width={1200} height={1400} alt="text" />

          {transformation === 'generative-fill' && (
            <CldImage
              src={publicId}
              width={1800}
              height={1400}
              alt="text"
              crop="pad"
              fillBackground={{
                prompt,
              }}
            />
          )}

          {transformation === 'blur' && (
            <CldImage
              src={publicId}
              width={1200}
              height={1400}
              blur="800"
              alt="text"
            />
          )}

          {transformation === 'grayscale' && (
            <CldImage
              src={publicId}
              width={1200}
              height={1400}
              grayscale
              alt="text"
            />
          )}

          {transformation === 'pixelate' && (
            <CldImage
              src={publicId}
              width={1200}
              height={1400}
              pixelate={true}
              alt="text"
            />
          )}

          {transformation === 'removeBg' && (
            <CldImage
              src={publicId}
              width={1200}
              height={1400}
              removeBackground
              alt="text"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default EditPage
