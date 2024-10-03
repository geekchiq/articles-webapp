import { PostType } from '@/types/postType'
import React from 'react'

interface PostProps {
  post?: PostType
}

const PostCard = ({ post }: PostProps) => {
  return (
    post && (
      <div className="flex flex-col gap-4 bg-white p-4 shadow-md rounded-lg">
        <p className="text-md capitalize">{post.title}</p>
        <p className="text-sm">{post.body}</p>
      </div>
    )
  )
}

export default PostCard
