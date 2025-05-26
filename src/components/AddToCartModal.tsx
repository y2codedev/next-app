"use client";

import React from "react";
import { Dialog } from "@headlessui/react";
import { FiShoppingCart } from "react-icons/fi";
import { ProductDetailProps } from "@/types/home";
import { OptimizedImage, Button } from "@/components";

interface AddToCartModalProps {
  open: boolean;
  onClose: () => void;
  product: ProductDetailProps;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  open,
  onClose,
  product,
}) => {
  const { title, price, thumbnail, stock, discountPercentage } = product;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-xs "
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-0 transition-all duration-300">
        <Dialog.Panel className="relative w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden sm:my-10">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6">
            <div className="w-full md:w-1/3">
              <OptimizedImage
                src={thumbnail}
                alt={title}
                className="w-full h-36 object-contain"
                width={200}
                height={200}
              />
            </div>

            <div className="w-full md:w-2/3 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

              <div className="flex items-center gap-2">
                <p className="text-blue-600 font-bold text-lg">
                  ₹ {price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-400 line-through">
                  ₹ {(price / (1 - discountPercentage / 100)).toFixed(0)}
                </p>
              </div>

              <p
                className={`text-sm ${stock < 10 ? "text-red-500" : "text-green-600"}`}
              >
                {stock < 10 ? `Only ${stock} left!` : `In Stock: ${stock}`}
              </p>

              <div className="flex gap-3 pt-4">
                <Button
                  icon={<FiShoppingCart />}
                  label="Confirm"
                  variant="custom"
                  className="flex-1 bg-blue-600 gap-2 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition"
                />
                <Button
                  label="Cancel"
                  onClick={onClose}
                  variant="custom"
                  className="sm:flex-1  border border-gray-300 px-4 py-2 text-sm rounded-lg hover:bg-gray-100 transition"
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AddToCartModal;
