import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Button } from "@/components";

const ProductActions: React.FC = () => (
  <div className="flex items-center  gap-2">
    <Button
      icon={<FiShoppingCart size={18} />}
      variant="custom"
      label="Add to Cart"
      className="w-40 gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm"
    />
    <Button
      icon={<CiHeart size={20} />}
      variant="custom"
      label="Wishlist"
      className="w-40 gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-indigo-100 text-sm"
    />
  </div>
);

export default ProductActions;
