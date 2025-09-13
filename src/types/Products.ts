import { Category } from "./Category"
import { Ratings } from "./Rating"

export interface Product {
    ratings: Ratings
    _id: string
    name: string
    description: string
    price: number
    discountedPrice:number
    vendor: Vendor
    category: Category
    brand: Brand
    stock: number
    images: Image[]
    specialOffer: boolean
    featured: boolean
    createdAt: string
    updatedAt: string
    __v: number
    variantCombinations: VariantCombination[]
    variantOptions: VariantOption[]
    sales: number
    subcategory:string
  }

  export interface TopRatedProduct{
    products:Product[],
    total:Number,
    page:Number,
    totalPages:Number
  }

  export interface Image {
    url: string
    altText: string
    _id: string
  }

  export interface VariantCombination {
    options: string[]
    stock: number
    images: string[]
    _id: string
  }
  
  export interface VariantOption {
    name: string
    options: string[]
    _id: string
  }

  export interface Vendor {
    rating: Ratings
    emailVerified: boolean
    smsVerified: boolean
    status: string
    _id: string
    userId: string
    name: string
    description: string
    logoUrl: string
    businessType: string
    featuredProducts: any[]
    categories: any[]
    createdAt: string
    updatedAt: string
    __v: number
  }


  export interface Brand {
    _id: string
    name: string
    description: string
    createdBy: string
    createdAt: string
    __v: number
  }



export interface ProductListResponse {
  products: Product[];
  currentPage: number;
  totalPages: number;
  totalProducts: number;
}
