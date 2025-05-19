'use client';

import React from 'react';
import { searchDataProps } from '@/types/type';
import { ColorSwatch, Button, OptimizedImage } from '@/components';
import { FiShoppingCart } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';

interface ProductDetailProps {
  product: searchDataProps;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full overflow-hidden">
      <div className="w-full sm:w-1/2 h-[200px] sm:h-[500px] overflow-hidden">
        <OptimizedImage
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          width={400}
          height={500}
        />
      </div>

      <div className="sm:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
          <p className="text-gray-600  mb-4 line-clamp-4">{product.description}</p>
          <p className="text-lg font-bold text-blue-600 mb-4">₹{product.price}</p>
          <p className="text-sm text-gray-500 mb-2">Available Quantity: {product.quantity}</p>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-gray-600">Color :</span>
            <ColorSwatch colors={product.color} size={20} />
          </div>

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