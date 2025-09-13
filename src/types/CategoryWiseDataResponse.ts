import { Pagination } from "./Paginations"
import { Product } from "./Products"

export interface CategoryWiseDataResponse {
    status: string
    data: Product[]
    pagination: Pagination
  }


