export interface PostType {
  id: number
  userId: number
  title: string
  body: string
}

export interface PostProps {
  post?: PostType
}
