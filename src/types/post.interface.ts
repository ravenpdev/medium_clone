export interface Post {
  user: {
    img_url: string
    username: string
  }
  post: {
    title: string
  }
  created_at: string
  minsToRead: number
  memberOnly: boolean
}
