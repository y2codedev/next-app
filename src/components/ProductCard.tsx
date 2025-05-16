"use client";

import { searchDataProps } from '@/types/type';
import React from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

interface ProductCardProps {
    product: searchDataProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col">
            <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.description}</p>
            <p className="text-base font-bold text-blue-600 mb-2">₹{product.price}</p>

            <div className="flex items-center gap-2 mb-3">
                {product.color.map((color, idx) => (
                    <span
                        key={idx}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color }}
                    ></span>
                ))}
            </div>

            <div className="flex justify-between mt-auto">
                <button className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    <FiShoppingCart />
                    Add to Cart
                </button>
                <button className="flex items-center gap-1 text-sm border px-3 py-1 rounded hover:bg-gray-100">
                    <FiHeart />
                    Wishlist
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
