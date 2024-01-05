import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MenuIcon } from './icons/menu'
import { AddToAlbumDialog } from './add-to-album-dialog'
import { SearchResult } from '@/app/gallery/page'
import { useState } from 'react'
import Link from 'next/link'
import { PencilIcon } from 'lucide-react'

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-8 h-8 p-0">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-38">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              variant={'ghost'}
              asChild
              className="cursor-pointer flex justify-start pl-4"
            >
              <Link
                href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
              >
                <PencilIcon className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
