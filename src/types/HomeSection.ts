import { Product } from "./Products"

export interface HomeSection {
    _id: string
    title: string
    description: string
    products: Product[]
    status: boolean
    __v: number
  }