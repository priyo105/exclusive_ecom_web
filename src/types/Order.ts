import { Product } from "./Products";

export type OrderItem = {
  product: string; 
  quantity: number;
  discount?: number; // Optional
};

export type CreateOrderPayload = {
  user: string; 
  items: OrderItem[];
  shippingAddress: string; 
  paymentMethod: 'Card' | 'Cash' | 'Klarna';
  orderStatus: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'; 
  vendor: string; 
};


export type OrderResponse = {
  order: {
    _id: string;
    user: string; 
    items: string[]; 
    shippingAddress: string; 
    vendor: string; 
    paymentMethod: string;
    paymentInfo: {
      status: 'pending' | 'completed' | 'failed'; 
    };
    orderStatus: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'; 
    totalAmount: number;
    placedAt: string; 
  };
};




// GET RESPONSE TYPES. GETORDERSBYUSER

export interface OrdersByUserId {
  _id: string;
  user: string;
  items: items[];
  shippingAddress: string;
  vendor: Vendor;
  paymentMethod: string;
  orderStatus: string;
  totalAmount: number;
  placedAt: string; 
  paymentInfo: PaymentInfo;
  __v: number;
}

export interface items {
  _id: string;
  product: Product;
  quantity: number;
  price: number;
  discount: number;
  subtotal: number;
  order: string;
  __v: number;
}

export interface Vendor {
  _id: string;
  name: string;
}

export interface PaymentInfo {
  status: string; 
}

