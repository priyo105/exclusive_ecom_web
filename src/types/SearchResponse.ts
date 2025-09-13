import { Category } from "./Category";
import { Product } from "./Products";

export interface SearchResponse {
  message: string;
  pagination: Pagination;
  primaryResults: Product[];
  resultType: 'products' | 'categories' | 'subcategories';
  results: {
    categories: Category[];
    products: Product[];
    subcategories: Subcategory[];
  };
}

export interface Pagination {
  currentPage: number;
  pageLimit: number;
  totalCategories: number;
  totalProducts: number;
  totalSubcategories: number;
}



export interface Brand {
  _id: string;
  name: string;
}

export interface CategoryReference {
  _id: string;
  name: string;
}

export interface ProductImage {
  url: string;
  altText?: string;
}

export interface Ratings {
  average?: number;
  count?: number;
}

export interface VariantCombination {
  _id: string;
  name: string;
  options: string[];
}

export interface VariantOption {
  _id: string;
  name: string;
  values: string[];
}

export interface VendorReference {
  _id: string;
  name: string;
}


export interface Subcategory {
  _id: string;
  name: string;
}