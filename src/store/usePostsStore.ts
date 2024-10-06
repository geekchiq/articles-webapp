import { PostType } from '@/types/postTypes'
import { create } from 'zustand'

const usePostsStore = <T extends object>() =>
  create<{
    posts: PostType[]
    addPost: (post: PostType) => void
    updatePost: (id: number, title: string, body: string) => void
  }>((set) => ({
    posts: [],
    addPost: (post: PostType) =>
      set((state) => ({
        posts: [...state.posts, post]
      })),
    updatePost: (id: number, title: string, body: string) =>
      set((state) => {
        const updatedPosts = [...state.posts]
        const index = updatedPosts.findIndex((obj) => obj.id === id)
        if (index > -1) {
          updatedPosts[index].title = title
          updatedPosts[index].body = body
        }
        return { posts: updatedPosts }
      })
  }))

export default usePostsStore
