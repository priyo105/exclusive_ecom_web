import { Category } from "./Category";
import { Product } from "./Products";

export interface Vendor {
    email: string;
    category: any;
    featured: boolean;
    _id: string;
    userId: string;
    name: string;
    coverPhoto:string,
    description: string;
    logoUrl: string;
    businessType: string;
    featuredProducts: Product[];
    categories: Category[];
    contactNumber?: string;
    emailVerified: boolean;
    smsVerified: boolean;
    tradeLicenseUrl?: string;
    address?: string;
    postcode?: string;
    status: string;
    rating: {
        average: number;
        count: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
}
