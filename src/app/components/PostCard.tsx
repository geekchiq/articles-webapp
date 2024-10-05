import Link from 'next/link'
import { PostProps } from '@/types/postTypes'
import React from 'react'

const PostCard = ({ post }: PostProps) => {
  return (
    post && (
      <Link
        href="/"
        className="w-full flex flex-col gap-4 bg-white p-3 shadow-md rounded-lg lg:w-[45%]"
      >
        <p className="text-md capitalize">{post.title}</p>
        <p className="text-sm">{post.body}</p>
      </Link>
    )
  )
}

export default PostCard
