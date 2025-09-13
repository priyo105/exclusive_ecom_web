import { Banner } from "./Banner";
import { Category } from "./Category";
import { OrderResponse, OrdersByUserId } from "./Order";
import { ProductInfo } from "./ProductInfo";
import { Product } from "./Products";
import { Vendor } from "./Vendor";

export type RootStackParamList = {
  login: {navigationName: keyof RootTabParamList};
  signup: undefined,
  home: undefined,
  productDetails: { product: Product },
  productInfo: { productInfo?: ProductInfo },
  productSpecification: { productInfo?: ProductInfo },
  brandInfo:{ productInfo?:ProductInfo},
  deliveryInfo: { productInfo?:ProductInfo},
  ratingsAndReview:{product:Product},
  categoryWiseProducts:{category:Category},
  vendorHome:{vendor:Vendor},
  categoryList:undefined,
  Cart:undefined,
  orderSummary:undefined,
  changeShipping:undefined,
  reciept:{order:OrderResponse|null},
  bannerProducts:{img:any,data:Banner},
  ProductListView:{products:Product[] | null |undefined, sectionId?:String, comingFrom?:String}
};

export type RootTabParamList={
  Home:undefined,
  Cart:undefined,
  shipping:undefined,
  OrderSummary:undefined
  orderDetails:{order:OrdersByUserId}
}