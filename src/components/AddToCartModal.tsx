"use client";

import React, { useState } from "react";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { FaRegStar, FaStar } from "react-icons/fa";

import { OptimizedImage, Button } from "@/components";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import ThumbnailSlider from "./Slider";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { ProductDetail } from "@/types/home";

interface AddToCartModalProps {
  open: boolean;
  onClose: () => void;
  product: ProductDetail;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  open,
  onClose,
  product,
}) => {
  const {
    title,
    price,
    thumbnail,
    description,
    discountPercentage,
    stock,
    images = [],
    rating,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    minimumOrderQuantity,
  } = product;
  const drawerRef = useOutsideClick<HTMLDivElement>({ handler: onClose, enabled: open });
  const [mainImage, setMainImage] = useState<string>(thumbnail);

  const renderStars = () => {
    const fullStars = Math.floor(Number(rating || 0));
    const emptyStars = 5 - fullStars;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500 text-sm" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-sm" />
        ))}
      </>
    );
  };

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40  transition-opacity  duration-500"
        />
      )}
      <div
        ref={drawerRef}
        className={`
  fixed inset-0 z-50 flex items-center justify-center
  bg-white shadow-lg rounded-2xl
  h-[80%] w-full max-w-5xl mx-auto
  overflow-hidden
  transition-transform duration-500 ease-in-out
  ${open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
          }
`}

      >
        <div className="relative sm:px-2 px-0 flex overflow-y-auto flex-col sm:flex-row h-full sm:h-auto">
          <button
            onClick={onClose}
            className="absolute top-4 cursor-pointer right-4 z-10 text-gray-500 hover:text-black"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>
          <div className="w-full sm:w-1/2 relative flex flex-col ">
            <div className="relative w-full mt-3 h-48 sm:h-[500px] overflow-hidden">
              <OptimizedImage
                src={mainImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            <div className="py-4 px-2 sm:px-0  ">
              <ThumbnailSlider
                images={[thumbnail, ...images]}
                activeImage={mainImage}
                onImageClick={setMainImage}
              />
            </div>
          </div>

          <div className="flex  sm:w-1/2 flex-col h-full">
            <div className="px-4 flex flex-col  flex-grow sm:py-10   sm:pb-0 sm:h-auto">
              <div>
                <h3 className="text-lg font-semibold mt-6 sm:mt-0 line-clamp-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-4">{description}</p>
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
                <SizeSelector />
                <ColorSelector />
                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center gap-1">{renderStars()}</div>
                  <span className={stock < 10 ? "text-red-600" : ""}>
                    {stock < 10 ? `Only ${stock} left!` : `In Stock: ${stock}`}
                  </span>
                </div>

                <div className="flex gap-4 flex-col text-sm text-gray-800 border-t border-gray-300 pt-4 mb-6">
                  <p><strong>Shipping:</strong> {shippingInformation}</p>
                  <p><strong>Warranty:</strong> {warrantyInformation}</p>
                  <p><strong>Return Policy:</strong> {returnPolicy}</p>
                  <p><strong>Min Order:</strong> {minimumOrderQuantity}</p>
                </div>
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-300 sm:static sm:border-none p-4">
              <div className="flex sm:hidden justify-between items-center bg-gray-100 px-4 py-3 rounded-xl text-sm text-secondary mb-2">
                <div className="flex items-center gap-2">
                  <button className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                    <FiMinus size={12} />
                  </button>
                  <span>1</span>
                  <button className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                    <FiPlus size={12} />
                  </button>
                </div>
                <div className="flex flex-col items-end text-[12px] font-semibold">
                  <span>${price.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-2">
                <div className="hidden bg-gray-200  px-6 py-3 rounded-lg text-sm text-secondary sm:flex items-center gap-6">
                  <button className="h-6 w-6 cursor-pointer flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                    <FiMinus size={12} />
                  </button>
                  <span>1</span>
                  <button className="h-6 w-6 flex  cursor-pointer items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition">
                    <FiPlus size={12} />
                  </button>
                </div>
                <Button
                  onClick={() => console.log("Add to Cart Clicked")}
                  label="Add to Cart"
                  variant="custom"
                  className="sm:w-1/2 w-full bg-indigo-600 text-white py-3 text-sm rounded-lg hover:bg-indigo-700 transition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartModal;