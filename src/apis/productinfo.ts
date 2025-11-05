import axios from "axios";
import { ProductInfo } from "../types/ProductInfo";
import { GET_PRODUCT_INFO } from "./endpoints";

export async function getProductInfo(ProductID:string): Promise<ProductInfo> {
  const response = await axios.get(GET_PRODUCT_INFO+"/"+ProductID);
  return response.data;
}
