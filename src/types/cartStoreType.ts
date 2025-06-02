export interface Product {
  title: string;
  price: number;
  images: string[];
  color?: string;
  fixture?: string;
  quantity: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}


export interface CartProduct {
  id: number;
  quantity: number;
}

export interface Cart {
  id: number;
  userId: number;
  products: CartProduct[];
  total?: number;
  totalProducts?: number;
  totalQuantity?: number;
  discountedTotal?: number;
  isDeleted?: boolean;
  deletedOn?: string;
}

export type CartId = CartProduct[];