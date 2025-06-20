"use client";

import React, { useEffect, useState } from "react";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { FaRegStar, FaStar } from "react-icons/fa";
import {
  OptimizedImage,
  Button,
  SizeSelector,
  ColorSelector,
  ThumbnailSlider,
  useOutsideClick,
  CloseButton,
  showToast,
} from "@/components";
import { ProductDetail } from "@/types/home";
import { useCartStoreApi } from "@/store/cartStoreApi";

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
  const { loading, error, addCart, } = useCartStoreApi();

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
    if (qty <= stock) {
      setQty((prev) => prev + 1);
    } else {
      showToast.error("Not enough stock");
    }
  };

  const handleDecrement = () => {
    if (qty >= 1) {
      setQty((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const storedQty = localStorage.getItem("qty");
    if (storedQty) {
      const parsedQty = JSON.parse(storedQty);
      console.log("Parsed qty:", parsedQty);
      if (
        typeof parsedQty === "number" &&
        parsedQty > 0 &&
        parsedQty <= stock
      ) {
        setQty(parsedQty);
      } else {
        setQty(1);
      }
    }
  }, [stock]);


  useEffect(() => {
    const storedQty = localStorage.getItem(`qty-${id}`);
    if (storedQty) {
      const parsedQty = Number(storedQty);
      if (parsedQty > 0 && parsedQty <= stock) {
        setQty(parsedQty);
      }
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`qty-${id}`, qty.toString());
  }, [qty, id]);


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
            fixed z-50 inset-0
            flex items-end sm:items-center justify-center
            w-full sm:max-w-5xl
            h-full sm:h-[75%]
            bg-white shadow-lg
            px-4 sm:px-6
            rounded-none sm:rounded-2xl
            overflow-y-auto
            transition-all duration-300 ease-in-out
            ${open
            ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
            : "opacity-0 pointer-events-none translate-y-full sm:translate-y-0 sm:scale-95"}
            sm:inset-auto
            sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2
          `}
      >
         <CloseButton iconColor="#fff" className="bg-indigo-600 hover:bg-indigo-700" onClick={onClose} />
        <div className="relative  flex overflow-y-auto flex-col sm:gap-4 gap-0 sm:flex-row h-full">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto h-full">
            <div className="relative flex flex-col w-full">
              <div className="relative w-full mt-3 h-64 sm:h-[440px] overflow-hidden">
                <OptimizedImage
                  src={mainImage}
                  alt={title}
                  fill
                  className="object-cover rounded-sm "
                />
              </div>
              <div className="">
                <ThumbnailSlider
                  images={images}
                  activeImage={mainImage}
                  onImageClick={setMainImage}
                />
              </div>
            </div>

            <div className="flex flex-col h-full">
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
                    <button
                      onClick={handleDecrement}
                      className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition"
                    >
                      <FiMinus size={12} />
                    </button>
                    <span>{qty}</span>
                    <button
                      onClick={handleIncrement}
                      className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition"
                    >
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
                      <FiMinus size={12} className="text-black" />
                    </button>
                    <span className="text-sm text-black ">{qty}</span>
                    <button
                      onClick={handleIncrement}
                      disabled={qty >= stock}
                      className={`h-6 w-6 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition ${qty >= stock ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <FiPlus size={12} className="text-black" />
                    </button>
                  </div>
                  <Button
                    icon={<FiShoppingCart size={16} />}
                    loading={loading}
                    onClick={() => addCart(id, qty)}
                    label="Add to Cart"
                    variant="custom"
                    className="sm:w-1/2 w-full gap-2 bg-indigo-600 text-white py-3 text-sm rounded-lg hover:bg-indigo-700 transition"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartModal;