import { Product, VariantOption } from "./Products";


type VariantOptions = {
    [key: string]: string;
};
export interface CartItem {
    product: Product;
    quantity: number;
    selectedVariant: VariantOptions
}