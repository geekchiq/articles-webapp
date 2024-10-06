'use client'

import React, { useRef, useState } from 'react'

import Image from 'next/image'

interface SearchFormProp {
  placeholder: string
  // eslint-disable-next-line no-unused-vars
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const SearchBar = ({ placeholder, onSubmit }: SearchFormProp) => {
  const [text, setText] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setText(value)

    if (value === '' && formRef.current) {
      formRef.current.submit()
    }
  }
  return (
    <form
      className="flex gap-2 w-full bg-white p-2 rounded-lg items-center"
      onSubmit={onSubmit}
      ref={formRef}
    >
      Search
      <input
        type="search"
        placeholder={placeholder}
        className="bg-slate-100 rounded-lg p-2 w-full"
        name="searchInput"
        value={text}
        onChange={handleInputChange}
      />
      <Image src="/search.png" alt="" width={20} height={20} />
    </form>
  )
}

export default SearchBar
