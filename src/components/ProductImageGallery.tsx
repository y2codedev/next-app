"use client";

import React, { useState } from "react";
import { OptimizedImage } from "@/components";
import ThumbnailSlider from "./Slider";

interface Props {
  thumbnail: string;
  images: string[];
  title: string;
}


const ProductImageGallery: React.FC<Props> = ({ thumbnail, images, title }) => {
  const [mainImage, setMainImage] = useState<string>(thumbnail);
  return (
    <div className="w-full md:space-y-4">
      <div className="relative w-full mt-3 h-48 sm:h-[500px] overflow-hidden">
        <OptimizedImage
          src={mainImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <ThumbnailSlider
        images={images}
        activeImage={mainImage}
        onImageClick={setMainImage}
      />
    </div>
  )
}

export default ProductImageGallery;