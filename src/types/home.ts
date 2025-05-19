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
}

export interface ProductDetailProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
