import axios from 'axios';
import { Vendor } from "../types/Vendor";
import { GET_ALL_VERIFIED_VENDORS } from "./endpoints";

export async function getVerifiedVendors(): Promise<Vendor[]> {
    const response = await axios.get(GET_ALL_VERIFIED_VENDORS);
    return response.data;
}
