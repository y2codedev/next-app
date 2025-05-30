"use client";

import React, { useEffect, useState } from "react";
import { FiMinus, FiPlus, FiShoppingCart, FiX } from "react-icons/fi";
import { FaRegStar, FaStar } from "react-icons/fa";
import { OptimizedImage, Button, SizeSelector, ColorSelector, ThumbnailSlider } from "@/components";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { ProductDetail } from "@/types/home";
import useAddToCart from "@/hooks/useAddToCart";

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
    id,
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
  const drawerRef = useOutsideClick<HTMLDivElement>({
    handler: onClose,
    enabled: open,
  });
  const [mainImage, setMainImage] = useState<string>(thumbnail);
  const [qty, setQty] = useState<number>(1);
  const { addToCart, loading } = useAddToCart()

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

  const handleIncrement = () => {
    if (qty < stock) {
      setQty((prevQty) => prevQty + 1);
    }
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  useEffect(() => {
    const storedQty = localStorage.getItem("qty");
    if (storedQty) {
      const parsedQty = JSON.parse(storedQty);
      if (typeof parsedQty === "number" && parsedQty > 0 && parsedQty <= stock) {
        setQty(parsedQty);
      }
    }
  }, [stock]);

  useEffect(() => {
    localStorage.setItem("qty", JSON.stringify(qty));
  }, [qty]);

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-50  transition-opacity  duration-500"
        />
      )}
      <div
        ref={drawerRef}
        className={`
    fixed z-50
    inset-0 sm:inset-auto
    bottom-0 sm:bottom-auto
    sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2
    flex items-end sm:items-center justify-center  
    w-full sm:max-w-5xl
    h-[100%] sm:h-[75%]
    bg-white shadow-lg
    rounded-none sm:rounded-2xl
    overflow-y-auto
    transition-all duration-300 ease-in-out
    py-2
    container
    ${open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-full sm:translate-y-0 scale-95 pointer-events-none"
          }
  `}
      >
        <div className="relative  flex overflow-y-auto flex-col sm:flex-row h-full">
          <button
            onClick={onClose}
            className="absolute h-6 w-6 flex items-center justify-center rounded-full bg-indigo-600 top-2 cursor-pointer right-0 z-10 text-white hover:bg-indigo-700"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
          <div className="w-full sm:w-1/2 relative flex flex-col ">
            <div className="relative w-full mt-3 h-64 sm:h-[440px] overflow-hidden">
              <OptimizedImage
                src={mainImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div className="py-4  sm:px-0  ">
              <ThumbnailSlider
                images={[thumbnail, ...images]}
                activeImage={mainImage}
                onImageClick={setMainImage}
              />
            </div>
          </div>

          <div className="flex  sm:w-1/2 flex-col h-full">
            <div className=" flex flex-col  flex-grow sm:py-10   sm:pb-0 sm:h-auto">
              <div>
                <h3 className="text-lg font-semibold mt-2 sm:mt-0 line-clamp-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-4">
                  {description}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex flex-col">
                    <p className="text-md font-semibold text-indigo-600">
                      ₹ {price}
                    </p>
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
              </div>
            </div>

            <div className="sticky bottom-0 bg-white sm:border-t border-none border-gray-300 sm:static sm:border-none">
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
                  <span>₹{(price * qty).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 sm:pb-6 pb-2">
                <div className="hidden bg-gray-200  px-6 py-3 rounded-lg text-sm text-secondary sm:flex items-center gap-6">
                  <button
                    onClick={handleDecrement}
                    className={`h-6 w-6 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition ${qty <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <FiMinus size={12} />
                  </button>
                  <span className="text-sm ">{qty}</span>
                  <button
                    onClick={handleIncrement}
                    disabled={qty >= stock}
                    className={`h-6 w-6 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition ${qty >= stock ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <FiPlus size={12} />
                  </button>
                </div>
                <Button
                  icon={<FiShoppingCart size={16} />}
                  loading={loading}
                  onClick={() => addToCart(id, qty)}
                  label="Add to Cart"
                  variant="custom"
                  className="sm:w-1/2 w-full gap-2 bg-indigo-600 text-white py-3 text-sm rounded-lg hover:bg-indigo-700 transition"
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