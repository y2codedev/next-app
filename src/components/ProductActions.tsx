import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Button } from "@/components";

const ProductActions: React.FC = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    <Button
      icon={<FiShoppingCart size={18} />}
      variant="custom"
      label="Add to Cart"
      className="flex-1 gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
    />
    <Button
      icon={<CiHeart size={20} />}
      variant="custom"
      label="Wishlist"
      className="flex-1 gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 text-sm"
    />
  </div>
);

export default ProductActions;
