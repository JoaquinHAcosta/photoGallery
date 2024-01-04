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

export function ImageMenu({ image }: { image: SearchResult }) {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-8 h-8 p-0">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-38">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
