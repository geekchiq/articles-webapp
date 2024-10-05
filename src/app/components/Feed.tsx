'use client'

import React, { useState } from 'react'

import PostFeed from './PostFeed'
import SearchBar from './SearchBar'

const Feed = () => {
  const [keyword, setKeyword] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchInput = formData.get('searchInput') as string
    console.log('searchInput', searchInput)

    if (searchInput) {
      setKeyword(searchInput)
    }
  }

  return (
    <>
      <SearchBar
        placeholder="Type search title here"
        onSubmit={(value) => handleSearch(value)}
      />
      <PostFeed searchQuery={keyword} />
    </>
  )
}

export default Feed
