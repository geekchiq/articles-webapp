'use client'

import React, { useState } from 'react'

import AlertDialog from './AlertDialog'
import NewPost from '@/app/components/NewPost'
import PostFeed from './PostFeed'
import { PostType } from '@/types/postTypes'
import SearchBar from './SearchBar'
import { getPosts } from '@/actions'
import useAsyncFunctionWithParam from '@/hooks/useAsyncFunctionWithParam'
import usePostsStore from '@/store/usePostsStore'
import useSession from '@/hooks/useSession'

type PostsDataType = {
  post: PostType[]
}

const Feed = () => {
  const [keyword, setKeyword] = useState('')
  const [post, setPost] = useState<PostType | null>(null)

  const { session } = useSession()
  const { data, loading, error, refetch } = useAsyncFunctionWithParam(
    getPosts,
    keyword
  )
  const usePostsDataStore = usePostsStore<PostsDataType>()
  const { posts, addPost, updatePost } = usePostsDataStore()

  // just for demonstration, in the beginner the posts are coming from the api.
  // but when you create a new post it will be stored in state management
  // since we  do not have a connection to the db
  const allPosts = posts.length > 0 ? posts : data || []

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchInput = formData.get('searchInput') as string

    if (searchInput) {
      setKeyword(searchInput)
    }
  }

  const handleSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const idInput = formData.get('id') as string
    const titleInput = formData.get('postTitle') as string
    const postInput = formData.get('postContent') as string

    if (idInput) {
      updatePost(parseInt(idInput), titleInput, postInput)
      refetch()
    } else {
      const userId = session?.userId || 100
      addPost({
        userId: userId,
        id: posts.length + 1,
        title: titleInput,
        body: postInput
      })
    }
  }

  const handleButtonClick = (postParam: PostType) => {
    setPost(postParam)
  }

  return (
    <>
      <NewPost post={post} onSubmit={(value) => handleSubmitPost(value)} />
      <SearchBar
        placeholder="Type search title here"
        onSubmit={(value) => handleSearch(value)}
      />
      {error && (
        <AlertDialog title="An Error Occured" message={error.message} />
      )}
      {!loading && (
        <PostFeed postsParam={allPosts} handleButtonClick={handleButtonClick} />
      )}
    </>
  )
}

export default Feed
