import Link from 'next/link'
import React from 'react'

const PostCard = ({ user }: any) => {
  return (
    user && (
      <Link
        href="/"
        className="w-full flex flex-col gap-4 bg-white p-3 shadow-md rounded-lg lg:w-[45%]"
      >
        <p className="text-md capitalize">{user.name}</p>
        <p className="text-sm">{user.email}</p>
      </Link>
    )
  )
}

export default PostCard
