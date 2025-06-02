"use client";
import React from "react";
import { ProductDetail as ProductDetailType } from "@/types/home";
import {
  ProductInfo,
  ProductImageGallery,
  ProductActions,
  ProductReviews,
} from "@/components";

const ProductDetail: React.FC<ProductDetailType> = ({
  title,
  description,
  price,
  thumbnail,
  rating,
  discountPercentage,
  stock,
  warrantyInformation,
  shippingInformation,
  returnPolicy,
  minimumOrderQuantity,
  reviews,
  images = [],
}) => {
  return (
    <>
      <div className="flex flex-col  sm:py-6 py-0 sm:flex-row gap-4">
        <div className="w-full sm:w-1/2 mb-6">
          <ProductImageGallery
            thumbnail={thumbnail}
            images={images}
            title={title}
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col ">
          <ProductInfo
            title={title}
            description={description}
            price={price}
            discountPercentage={discountPercentage}
            rating={rating}
            stock={stock}
            warrantyInformation={warrantyInformation}
            shippingInformation={shippingInformation}
            returnPolicy={returnPolicy}
            minimumOrderQuantity={minimumOrderQuantity}
          />
          <ProductActions />
        </div>
      </div>
      <div className=" sm:py-6 py-0">
        <ProductReviews reviews={reviews} />
      </div>
    </>
  );
};

export default ProductDetail;
