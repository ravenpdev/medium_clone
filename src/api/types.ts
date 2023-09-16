export interface IUser {
  _id: string
  username: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

export interface IArticle {
  _id: string
  title: string
  description: string
  imgUrl: string
  minsToRead: number
  memberOnly: boolean
  createdAt: string
  updatedAt?: string
  user: {
    imgUrl: string
    username: string
  }
}
