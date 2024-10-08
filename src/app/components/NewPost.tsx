import React, { useEffect, useState } from 'react'

import Button from './Button'
import Image from 'next/image'
import { PostType } from '@/types/postTypes'

interface NewPostProp {
  post?: PostType | null
  // eslint-disable-next-line no-unused-vars
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const NewPost = ({ post, onSubmit }: NewPostProp) => {
  const [id, setId] = useState(post?.id || '')
  const [title, setTitle] = useState(post?.title || '')
  const [content, setContent] = useState(post?.body || '')

  useEffect(() => {
    if (post) {
      setId(post.id)
      setTitle(post.title)
      setContent(post.body)
    }
  }, [post])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setId('')
    setTitle('')
    setContent('')
    onSubmit(e)
  }

  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="/geekchiq.png"
        alt=""
        className="w-12 h-12 rounded-full object-cover"
        width={48}
        height={48}
      />
      <div className="flex-1 p-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="hidden" value={id} name="id" />
          <input
            required
            type="text"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type the post title here"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            minLength={10}
            maxLength={100}
          />
          <textarea
            required
            name="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your post here and press Enter"
            className="flex-1  bg-slate-100 rounded-lg p-2"
            minLength={10}
            maxLength={1000}
          />
          <Button label={'Post'} />
        </form>
      </div>
    </div>
  )
}

export default NewPost
