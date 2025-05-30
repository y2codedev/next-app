"use client";

import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { SizeSelector, ColorSelector } from "@/components";

interface Props {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number | undefined;
  stock: number;
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
  minimumOrderQuantity?: number;
}

const ProductInfo: React.FC<Props> = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  warrantyInformation,
  shippingInformation,
  returnPolicy,
  minimumOrderQuantity,
}) => {
  const fullStars = Math.floor(Number(rating || 0));
  const emptyStars = 5 - fullStars;

  return (
    <div className="w-full ">
      <h1 className="sm:text-2xl text-xl  font-semibold mb-3">{title}</h1>
      <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-2xl font-bold text-blue-700">
            ₹ {price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 line-through">
            ₹ {(price / (1 - discountPercentage / 100)).toFixed(2)}
          </p>
        </div>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded">
          {discountPercentage}% OFF
        </span>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
        <div className="flex items-center gap-2">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-400" />
          ))}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
          ))}
          <span className="ml-1">({rating?.toFixed(1)})</span>
        </div>
        <span className={stock < 10 ? "text-red-600" : ""}>
          {stock < 10 ? `Only ${stock} left!` : `In Stock: ${stock}`}
        </span>
      </div>

      <div className="flex flex-col space-y-3 text-sm text-gray-800 border-t border-gray-300 pt-4 mb-6">
        <p>
          <strong>Shipping:</strong> {shippingInformation}
        </p>
        <p>
          <strong>Warranty:</strong> {warrantyInformation}
        </p>
        <p>
          <strong>Return Policy:</strong> {returnPolicy}
        </p>
        <p>
          <strong>Min Order:</strong> {minimumOrderQuantity}
        </p>
      </div>
      <div>
        <SizeSelector />
      </div>
      <div>
        <ColorSelector />
      </div>
    </div>
  );
};

export default ProductInfo;
