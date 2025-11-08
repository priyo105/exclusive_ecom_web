import { BASE_URL } from "./url";

export const Login_URL=BASE_URL+"auth/login";
export const SIGN_UP_URL=BASE_URL+"auth/register"
export const GOOGLE_SIGNIN_URL=BASE_URL+"auth/google-signin"
export const GET_REFRESH_TOKEN=BASE_URL+"auth/refresh"

export const imageUrls="http://3.82.146.88:5001"
//home
export const GET_BANNERS=BASE_URL+"banner"
export const GET_CATEGORIES= BASE_URL+"category/categories"
export const GET_TOPRATED_PRODUCTS=BASE_URL+"home/top-rated"
export const GET_HOME_SECTIONS=BASE_URL+"home/getSections"
//products
export const GET_PRODUCT_INFO=BASE_URL+"productinfo"
export const GET_PRODUCT_REVIEWS=BASE_URL+"productReview/products/reviews"
export const GET_PRODUCT_BY_CATEGORY=BASE_URL+"category/products"
export const GET_PRODUCTS_BY_VENDORID=BASE_URL+"product/products/vendor"
export const GET_SIMILAR_PRODUCT_URL=BASE_URL+"product/similar"
export const GET_PRODUCT_BY_ID=BASE_URL+"product/products"
//product List

export const GET_PRODUCTS_BY_SECTION_ID=BASE_URL+"home/getProductsBySectionId"

//Vendor
export const GET_ALL_VERIFIED_VENDORS=BASE_URL+"vendor/vendors"

//search and Filter
export const SEARCH_BY_KEYWORD=BASE_URL+'product/search'


//shipping address
export const CREATE_SHIPPING_ADDRESS=BASE_URL+'address/create'
export const GET_SHIPPING_ADDRESS_BY_USER=BASE_URL+'address'

//Orders

export const PLACE_ORDER=BASE_URL+"order/orders"
export const GET_ORDER_BY_USER=BASE_URL+"order/orders/user"

//stripe Payment
export const STRIPE_PAYMENT=BASE_URL+'payment/create-payment-intent'
export const STRIPE_PAYMENT_SHEET=BASE_URL+'payment/payment-sheet'
