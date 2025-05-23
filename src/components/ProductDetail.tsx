"use client";

import React from "react";
import { Button, OptimizedImage } from "@/components";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FaStar, FaRegStar } from "react-icons/fa";
import { ProductDetailProps } from "@/types/home";

const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  description,
  price,
  thumbnail,
  rating,
  discountPercentage,
  stock,
}) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar size={18} key={`full-${i}`} className="text-yellow-400 text-sm" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar size={18} key={`empty-${i}`} className="text-yellow-400 text-sm" />
        ))}
      </>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full overflow-hidden">
      <div className="w-full sm:w-1/2 h-[200px] sm:h-[500px] overflow-hidden">
        <OptimizedImage
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover overflow-hidden"
          width={500}
          height={500}
        />
      </div>

      <div className="sm:w-1/2 mt-10 flex flex-col justify-between">
        <div>
          <h1 className="sm:text-2xl text-xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>

          {/* Price + Discount */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex flex-col">
              <p className="text-md font-bold text-blue-700">₹ {price}</p>
              <span className="text-sm text-gray-500 line-through mt-1">
                ₹ {(price / (1 - discountPercentage / 100)).toFixed(0)}
              </span>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
              {discountPercentage}% OFF
            </span>
          </div>

          {/* Rating + Stock */}
          <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              {renderStars()}
              <span className="text-gray-700 text-sm ml-1">({rating.toFixed(1)})</span>
            </div>
            <span className={`text-xs font-medium ${stock < 10 ? 'text-red-600' : 'text-gray-600'}`}>
              {stock < 10 ? `Only ${stock} left!` : `In Stock: ${stock}`}
            </span>
          </div>

          {/* Buttons */}
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