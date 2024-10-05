import Image from 'next/image'
import React from 'react'
import { addPost } from '@/actions'

const NewPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="https://images.pexels.com/photos/27658364/pexels-photo-27658364/free-photo-of-a-black-and-white-photo-of-a-bridge-and-cars.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className="w-12 h-12 rounded-full object-cover"
        width={48}
        height={48}
      />
      <div className="flex-1 p-2">
        <form action={addPost} className="flex flex-col gap-4">
          <input
            required
            name="postTitle"
            placeholder="Type the post title here"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          />
          <textarea
            required
            name="postContent"
            placeholder="Type your post here and press Enter"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          />
          <button className="w-[20%] py-2 rounded-lg bg-pink-700 text-white self-end">
            Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewPost
