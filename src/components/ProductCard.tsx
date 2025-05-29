"use client";

import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { Button, OptimizedImage } from "@/components";
import { ProductDetailProps } from "@/types/home";
import { FaStar, FaRegStar } from "react-icons/fa";
import AddToCartModal from "./AddToCartModal";

const ProductCard = (product: ProductDetailProps) => {
  const {
    id,
    title,
    description,
    price,
    thumbnail,
    rating,
    discountPercentage,
    stock,
  } = product;
  const [modalOpen, setModalOpen] = useState(false);

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500 text-sm" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="w-full h-[460px] bg-white rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col">
        <div className="w-full h-48 mb-4 overflow-hidden relative rounded-t-md ">
          <Link href={`/product/${id}`}>
            <OptimizedImage
              src={thumbnail}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              width={400}
              height={500}
            />
          </Link>

          <Button
            label=""
            variant="custom"
            onClick={() => alert("Added to Wishlist!")}
            icon={
              <CiHeart
                strokeWidth={0.5}
                size={20}
                className="text-secondary transition-colors duration-300 hover:text-white"
              />
            }
            className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer shadow hover:bg-red-500 transition-colors duration-300"
          />

        </div>

        <div className="px-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-2 line-clamp-4">
            {description}
          </p>

          <div className="flex justify-between items-center mb-2">
            <div className="flex flex-col">
              <p className="text-md font-semibold text-indigo-600">₹ {price}</p>
              <span className="text-xs text-gray-500 line-through mt-1">
                ₹ {(price / (1 - discountPercentage / 100)).toFixed(0)}
              </span>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
              {discountPercentage}% OFF
            </span>
          </div>

          <div className="flex justify-between items-center text-sm mb-2">
            <div className="flex items-center gap-1">{renderStars()}</div>
            <span
              className={`text-xs font-medium ${stock < 10 ? "text-red-600" : "text-gray-600"}`}
            >
              {stock < 10 ? `Only ${stock} left!` : `In Stock: ${stock}`}
            </span>
          </div>

          <div className="mt-auto mb-5">
            <Button
              icon={<FiShoppingCart size={16} />}
              variant="custom"
              label="Add to Cart"
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 text-[12px] bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <AddToCartModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
