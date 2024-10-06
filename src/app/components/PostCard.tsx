import { PostType } from '@/types/postTypes'
import React from 'react'

interface PostProps {
  post: PostType
  isCurrentUser: boolean
  onButtonClick: (post: PostType) => void
}

const PostCard = ({ post, onButtonClick, isCurrentUser }: PostProps) => {
  const handleClick = () => {
    onButtonClick(post) // Send the value to the parent component
  }
  return (
    post && (
      <div className="w-full flex flex-col gap-4 bg-white p-3 shadow-md rounded-lg lg:w-[45%]">
        {isCurrentUser && (
          <div className="flex w-full justify-end">
            <button
              className="px-2 py-1 bg-pink-700 text-white rounded-lg"
              onClick={handleClick}
            >
              Edit
            </button>
          </div>
        )}
        <p className="text-md capitalize">{post.title}</p>
        <p className="text-sm">{post.body}</p>
      </div>
    )
  )
}

export default PostCard
