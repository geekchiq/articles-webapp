'use client'

import Image from 'next/image'
import React from 'react'

interface SearchFormProp {
  placeholder: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const SearchBar = ({ placeholder, onSubmit }: SearchFormProp) => {
  return (
    <form
      className="flex gap-2 w-full bg-white p-2 rounded-lg items-center"
      onSubmit={onSubmit}
    >
      Search
      <input
        placeholder={placeholder}
        className="bg-slate-100 rounded-lg p-2 w-full"
        name="searchInput"
      />
      <Image src="/search.png" alt="" width={20} height={20} />
    </form>
  )
}

export default SearchBar
