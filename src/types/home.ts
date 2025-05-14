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

export interface ItemVariant {
  id: number;
  thumbnail?: string;
  color: string[];
  photos: string[];
}

export interface ProductType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  photos: string[];
  item_variants: ItemVariant[];
}
