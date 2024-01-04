import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FolderIcon } from './icons/folder'
import { useState } from 'react'
import { SearchResult } from '@/app/gallery/page'
import { addImageToAlbum } from './actions'

export function AddToAlbumDialog({ image }: { image: SearchResult }) {
  const [albumName, setAlbumName] = useState('')

  const [openState, setOpenState] = useState(false)
  return (
    <Dialog open={openState} onOpenChange={setOpenState}>
      <DialogTrigger asChild>
        <Button variant={'secondary'}>
          <FolderIcon className="mr-2 h-4 w-4" />
          <span>Add to Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type an album you want to add this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              onChange={(e) => setAlbumName(e.currentTarget.value)}
              id="album-name"
              value={albumName}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              setOpenState(false)
              await addImageToAlbum(image, albumName)
            }}
            type="submit"
          >
            Add to Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
