'use client'

import React, { useState } from 'react'

import AlertDialog from './AlertDialog'
import PostFeed from './PostFeed'
import SearchBar from './SearchBar'
import { getPosts } from '@/actions'
import useAsyncFunction from '@/hooks/useAsyncFunction'

const Feed = () => {
  const [keyword, setKeyword] = useState('')

  const { data, loading, error } = useAsyncFunction(getPosts, keyword)
  const posts = data || []

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchInput = formData.get('searchInput') as string

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
      {error && (
        <AlertDialog title="An Error Occured" message={error.message} />
      )}
      {!loading && <PostFeed posts={posts} />}
    </>
  )
}

export default Feed
