export interface Category {
    _id: string
    name: string
    description: string
    iconUrl: string
    createdAt: string
    updatedAt: string
    __v: number
    subcategories:Category[]
    isSubCategories:Boolean
    webiconimageurl:string
  }
  