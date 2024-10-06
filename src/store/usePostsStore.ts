import { PostType } from '@/types/postTypes'
import { create } from 'zustand'

// Create a store for the todo list
const usePostsStore = create((set) => ({
  posts: [],
  addPost: (post: PostType) =>
    set((state: { posts: PostType[] }) => ({
      posts: [...state.posts, post]
    })),
  updatePost: (id: number, title: string, body: string) =>
    set((state: { posts: any }) => {
      const updatedPosts = [...state.posts]
      const index = updatedPosts.findIndex((obj) => obj.id == id)
      if (index > -1) {
        updatedPosts[index].title = title
        updatedPosts[index].body = body
      }

      return { posts: updatedPosts }
    })
}))

export default usePostsStore
