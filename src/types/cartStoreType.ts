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
