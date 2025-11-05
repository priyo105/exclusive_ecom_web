export type ProductImage = { url: string };
export type VariantOption = { name: string; options: string[] };
export type VariantCombination = { options?: string[]; images?: (string | ProductImage)[] };
export type Ratings = { average?: number; count?: number };

export type Product = {
  _id: string;
  name: string;
  description?: string;
  images?: ProductImage[];
  variantOptions: VariantOption[];
  variantCombinations?: VariantCombination[];
  ratings?: Ratings;
  price: number;
  discountedPrice?: number;
  stock?: number;
};
