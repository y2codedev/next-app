"use client";

import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { Button, OptimizedImage } from "@/components";
import { ProductDetailProps } from "@/types/home";

const ProductCard = ({ id, title, description, price, image }: ProductDetailProps) => {
  return (
    <div className="w-full h-[440px] bg-white rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col">
      <div className="w-full h-48 mb-4 overflow-hidden relative rounded-t-md ">
        <Link href={`/product/${id}`}>
          <OptimizedImage
            src={image}
            alt={title}
            className="w-full h-full object-contain overflow-hidden hover:scale-115 transition duration-300"
            width={400}
            height={500}
          />
        </Link>

        <Button
          label=""
          variant="custom"
          icon={
            <CiHeart
              strokeWidth={0.5}
              size={20}
              className="text-secondary group-hover:text-white group-hover:stroke-white"
            />
          }
          className="absolute top-2 right-2 bg-white p-2 cursor-pointer rounded-full shadow hover:bg-red group transition"
        />
      </div>

      <div className="px-4">
        <h3 className="text-lg font-semibold mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-4">
          {description}
        </p>
        <p className="text-base font-bold text-blue-600 mb-2">
          ₹{price}
        </p>
        <div className="flex justify-between mt-auto">
          <Button
            icon={<FiShoppingCart size={16} />}
            variant="custom"
            label="Add to Cart"
            className="flex items-center gap-2 cursor-pointer text-[12px] bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;