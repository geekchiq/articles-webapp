import React, { useEffect, useState } from 'react'

import NoData from './NoData'
import PostCard from './PostCard'
import { PostType } from '@/types/postTypes'
import useSession from '@/hooks/useSession'

const PostFeed = ({
  postsParam,
  handleButtonClick
}: {
  postsParam: PostType[]
  handleButtonClick: (post: PostType) => void
}) => {
  const [posts, setPosts] = useState([])
  const { session } = useSession()

  useEffect(() => {
    if (posts !== postsParam) {
      const newPosts = postsParam
      setPosts([...newPosts])
    }
  }, [postsParam])

  return (
    <div className="flex gap-x-4 gap-y-8 justify-between flex-wrap">
      {posts?.length > 0 ? (
        posts.map((post: PostType, i: number) => (
          <PostCard
            key={post.id}
            post={post}
            onButtonClick={handleButtonClick}
            isCurrentUser={session?.userId == post.userId}
          />
        ))
      ) : (
        <NoData />
      )}
    </div>
  )
}

export default PostFeed
