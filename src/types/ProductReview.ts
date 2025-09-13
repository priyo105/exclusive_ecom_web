import { User } from "./User"

export interface ProductReview {
  _id: string
  product: string
  user: User
  rating: number
  comment: string
  createdAt: string
  __v: number
}

