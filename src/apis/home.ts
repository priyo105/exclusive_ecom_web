import axios from 'axios';
import { GET_BANNERS, GET_CATEGORIES, GET_TOPRATED_PRODUCTS, GET_HOME_SECTIONS } from './endpoints';
import { Banner } from '../types/Banner';
import { Category } from '../types/Category';
import { Product, TopRatedProduct } from '../types/Products';
import { HomeSection } from '../types/HomeSection';

export async function getBanners(): Promise<Banner[]> {
  const response = await axios.get(GET_BANNERS);
  return response.data;
}


export async function getCategories(): Promise<Category[]> {
  const response = await axios.get(GET_CATEGORIES);
  return response.data;
}


export async function getTopRatedProdcuts(page=1,limit=8): Promise<TopRatedProduct> {
  const response = await axios.get(GET_TOPRATED_PRODUCTS+"?page="+page+"&limit="+limit);
  return response.data;
} 


export async function getHomeSections(): Promise<HomeSection[]> {
  const response = await axios.get(GET_HOME_SECTIONS);
  return response.data;
}
