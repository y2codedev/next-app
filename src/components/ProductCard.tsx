"use client";

import { searchDataProps } from '@/types/type';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';
import { ColorSwatch, Button, OptimizedImage } from '@/components';

interface ProductCardProps {
    product: searchDataProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    return (
        <div className="w-full h-[400px] bg-white rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col">
            <div className="w-full h-48 mb-4 overflow-hidden relative rounded-t-md ">
                <Link href={`/product/${product.slug}`}>
                    <OptimizedImage
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover overflow-hidden hover:scale-115 transition duration-300"
                        width={400}
                        height={500}
                    />
                </Link>

                <Button label='' variant='custom'
                    icon={<CiHeart
                        strokeWidth={0.5}
                        size={20}
                        className="text-secondary group-hover:text-white group-hover:stroke-white"
                    />
                    }
                    className="absolute top-2 right-2 bg-white p-2 cursor-pointer rounded-full shadow hover:bg-red group transition"
                />
            </div>

            <div className='px-4'>
                <h3 className="text-lg font-semibold mb-1 line-clamp-2">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-4">{product.description}</p>
                <p className="text-base font-bold text-blue-600 mb-2">₹{product.price}</p>
                <div className="flex items-center gap-2 mb-3">
                    <ColorSwatch colors={product.color} />
                </div>
                <div className="flex justify-between mt-auto">
                    <Button
                        icon={<FiShoppingCart size={16} />}
                        variant='custom'
                        label="Add to Cart"
                        className="flex items-center gap-2 cursor-pointer text-[12px] bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;