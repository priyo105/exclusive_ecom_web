import { Product } from "./Products"

export interface Banner {
    _id: string
    title: string
    description: string
    imageUrl: string
    products: Product[]
    category: string
    startDate: string
    endDate: string
    priority: number
    criteria: string
    createdAt: string
    updatedAt: string
    __v: number
  }


