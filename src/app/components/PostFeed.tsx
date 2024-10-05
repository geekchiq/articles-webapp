import NoData from './NoData'
import PostCard from './PostCard'
import { PostType } from '@/types/postTypes'
import React from 'react'

const PostFeed = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="flex gap-x-4 gap-y-8 justify-between flex-wrap">
      {posts?.length > 0 ? (
        posts.map((post: PostType, i: number) => (
          <PostCard key={i} post={post} />
        ))
      ) : (
        <NoData />
      )}
    </div>
  )
}

export default PostFeed
