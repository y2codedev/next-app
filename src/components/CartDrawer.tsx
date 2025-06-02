"use client";

import React from "react";
import { FiX, FiPlus, FiMinus } from "react-icons/fi";
import { Button, OptimizedImage } from "@/components";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { CartItem } from "@/types/cartStoreType";
import { useRouter } from "next/navigation";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onIncrement: (index: number) => void;
  onDecrement: (index: number) => void;
  note: string;
  setNote: (note: string) => void;
}

const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onIncrement,
  onDecrement,
  note,
  setNote,
}: CartDrawerProps) => {
  const router = useRouter();
  const drawerRef = useOutsideClick<HTMLDivElement>({
    handler: onClose,
    enabled: isOpen,
  });

  const subtotal = cartItems?.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <div
      ref={drawerRef}
      className={`fixed bottom-0 right-0 z-50 bg-white shadow-sm h-full w-full sm:w-[28%] transition-transform duration-300 ${isOpen
        ? "translate-y-0 sm:translate-x-0"
        : "translate-y-full sm:translate-x-full"
        }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 bg-white z-10 rounded-t-2xl sm:rounded-none">
        <h2 className="text-sm font-semibold text-gray-800">Your Cart</h2>
        <button onClick={onClose} aria-label="Close cart">
          <FiX size={18} className="text-sm cursor-pointer" />
        </button>
      </div>

      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex gap-4 mb-4 items-start">
              <OptimizedImage
                src={
                  item.product.images?.[0] ||
                  "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp"
                }
                alt={item.product.title}
                width={80}
                height={80}
              />
              <div className="flex-1">
                <h4 className="text-lg capitalize text-gray-800 line-clamp-2">
                  {item.product.title}
                </h4>
                {item.product.color && (
                  <p className="text-sm text-gray-800 font-semibold mt-1">
                    Color:{" "}
                    <span className="font-normal">{item.product.color}</span>
                  </p>
                )}
                {item.product.fixture && (
                  <p className="text-sm text-gray-800 font-semibold">
                    Fixture:{" "}
                    <span className="font-normal">{item.product.fixture}</span>
                  </p>
                )}
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center border border-gray-300 px-2 py-1 gap-2 rounded">
                    <button
                      onClick={() => onDecrement(index)}
                      disabled={item.quantity <= 1}
                    >
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrement(index)}>
                      <FiPlus />
                    </button>
                  </div>
                  <p className="text-base text-gray-800">
                    ₹{item.product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Order Note
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full border rounded-md p-2 text-sm"
              rows={4}
              placeholder="Add any special instructions..."
            />
          </div>
        </div>

        <div className="p-4 border-t mb-14 border-gray-300 bg-white">
          <div className="flex justify-between bg-gray-100 mx-1 px-4 py-3 rounded-lg text-sm text-gray-800 mb-2">
            <span className="uppercase">Subtotal</span>
            <span>₹{subtotal?.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-1 pt-2">
            <Button
              label="View Cart"
              variant="custom"
              className="border w-full border-gray-300 text-gray-800 py-3 text-sm rounded-lg hover:bg-indigo-100 transition"
            />
            <Button
              onClick={() => {
                onClose();
                router.push("/login");
              }}
              label="Checkout"
              variant="custom"
              className="bg-indigo-600 w-full text-white py-3 text-sm rounded-lg hover:bg-indigo-700 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;