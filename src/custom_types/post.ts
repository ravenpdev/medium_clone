export interface Post {
  user: {
    img_url: string
    username: string
  }
  title: string
  description?: string
  imge_url: string
  created_at: string
  minsToRead: number
  memberOnly: boolean
}
