export interface ProductInfo {
    _id: string
    product: Product
    productInformation: string
    specifications: Specification[]
    returnPolicy: string
    deliveryInformation: string
    brandInformation: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface Product {
    _id: string
    name: string
    price: number
  }
  
  export interface Specification {
    key: string
    value: string
    _id: string
  }
  