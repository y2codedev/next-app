export type BannerSlide = {
  id: number;
  title: string;
  description: string;
  fixtures: {
    [fixtureType: string]: {
      defaultImage: string;
      colors: {
        [colorName: string]: string;
      };
    };
  };
};

export interface AddToCartProps {
  productTitle: string;
  variantId: number;
  price: number;
}

export interface ItemVariant {
  id: number;
  thumbnail?: string;
  color: string[];
  photos: string[];
  title?: string;
  description?: string;
  price?: number;
}

export interface ProductType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  photos: string[];
  price?: number;
  item_variants: ItemVariant[];
  color?: string;
  image?: string;
}

export interface ProductDetail {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
  stock: number;
  rating?: number;
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  color?: string[];
  fixture?: string;
  images?: string[];
  reviews?: {
    rating: number;
    comment: string;
    reviewerName: string;
  }[];
}

export interface ProductApiResponse {
  products?: ProductDetail[];
  total?: number;
}

export type ColorCode = string;

export interface VariantItem {
  id?: number;
  price: number;
  title: string;
  description: string;
  images: string[];
  stock?: number;
  thumbnail?: string;
  discountPercentage?: number;
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  rating?: number;
}

export interface Variant {
  colors: {
    all_colors: ColorCode[];
    color_id: string;
    variant_id: string;
  };
  items: Record<ColorCode, VariantItem>;
}

export interface ProductData {
  variants: Variant[];
}
