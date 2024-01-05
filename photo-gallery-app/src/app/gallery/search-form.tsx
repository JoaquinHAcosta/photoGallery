'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const SearchForm = ({ initialSearch }: { initialSearch: string }) => {
  const [tagName, setTagName] = useState(initialSearch ?? '')

  function onSearch(ev) {
    ev.preventDefault()
    console.log(tagName)
    router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
    router.refresh()
  }

  useEffect(() => {
    setTagName(initialSearch)
  }, [initialSearch])

  const router = useRouter()

  return (
    <form onSubmit={onSearch}>
      <Label htmlFor="name" className="text-rigth">
        Search by Tag
      </Label>
      <div className="flex gap-2">
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="album-name"
          value={tagName}
          className="col-span-3"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  )
}
