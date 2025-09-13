import axios from 'axios';
import { GET_BANNERS, GET_CATEGORIES } from './endpoints';
import { Banner } from '../types/Banner';
import { Category } from '@/types/Category';

export async function getBanners(): Promise<Banner[]> {
  const response = await axios.get(GET_BANNERS);
  return response.data;
}


export async function getCategories(): Promise<Category[]> {
  const response = await axios.get(GET_CATEGORIES);
  return response.data;
}
