"use client";

import React from "react";
import { Button, OptimizedImage } from "@/components";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { ProductDetailProps } from "@/types/home";

const ProductDetail = ({ title, description, price, image }: ProductDetailProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full overflow-hidden">
      <div className="w-full sm:w-1/2 h-[200px] sm:h-[500px] overflow-hidden">
        <OptimizedImage
          src={image}
          alt={title}
          className="w-full h-full object-contain overflow-hidden "
          width={400}
          height={500}
        />
      </div>

      <div className="sm:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="sm:text-2xl text-xl font-semibold mb-2">
            {title}
          </h1>
          <p className="text-gray-600  mb-4 ">
            {description}
          </p>
          <p className="text-lg font-bold text-blue-600 mb-4">
            ₹{price}
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              icon={<FiShoppingCart size={16} />}
              variant="custom"
              label="Add to Cart"
              className="gap-2 text-[14px] bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            />
            <Button
              icon={<CiHeart size={20} strokeWidth={0.5} />}
              variant="custom"
              label="Wishlist"
              className="gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
