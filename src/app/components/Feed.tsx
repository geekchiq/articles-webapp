import PostCard from './PostCard'
import { PostType } from '@/types/postType'
import React from 'react'
import { getPosts } from '@/app/services/api'

const Feed = async () => {
  const posts = await getPosts()
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post: PostType, i: number) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  )
}

export default Feed
