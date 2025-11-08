import axios from "axios";
import { ProductInfo } from "../types/ProductInfo";
import { GET_PRODUCT_BY_ID, GET_PRODUCT_INFO, GET_PRODUCT_REVIEWS } from "./endpoints";
import { ProductReviewType } from "../types/ProductReview";

export async function getProductInfo(ProductID:string): Promise<ProductInfo> {
  const response = await axios.get(GET_PRODUCT_INFO+"/"+ProductID);
  return response.data;
}

export async function getProductReviews(ProductID:string): Promise<ProductReviewType[]> {
  const response = await axios.get(GET_PRODUCT_REVIEWS+"/"+ProductID);
  return response.data;
}


export async function getProductById(ProductID: string): Promise<any> {
  const response = await axios.get(GET_PRODUCT_BY_ID + "/" + ProductID);
  return response.data;
}