"use client";
import React from "react";
import { ProductDetail as ProductDetailType } from "@/types/home";
import ProductImageGallery from "./ProductImageGallery";
import ProductActions from "./ProductActions";
import ProductReviews from "./ProductReviews";
import ProductInfo from "./ProductInfo";


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
  images = [], }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 w-full  ">
        <ProductImageGallery
          thumbnail={thumbnail}
          images={images}
          title={title}
        />
        <div className="flex flex-col justify-between w-full ">
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
      <ProductReviews reviews={reviews} />
    </>
  );
};

export default ProductDetail;