"use client";

import OptimizedImage from '@/components/OptimizedImage';
import { searchDataProps } from '@/types/type';
import React from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const searchData: searchDataProps[] = [
    {
        id: 1,
        title: "Aquaguard Marvel NXT knowledge about the particular.",
        slug: "aquaguard-marvel-nxt",
        description: "knowledge about the particular products a company offers, especially compared to those offered by its competitors about the particular products a company offers, especially compared to those offered by its competitors",
        price: 12999,
        image: "https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330847_640.jpg",
        color: ["#000000", "#ffffff", "#ff5733", "#33ff57", "#3357ff"],
        quantity: 20
    },
];

const ProductDetailPage = () => {
    return (
        <div className="min-h-screen container w-full mt-20">
            <div className="flex flex-col sm:flex-row gap-6">
                {searchData.map((product) => (
                    <div key={product.id} className="flex flex-col sm:flex-row w-full gap-6 overflow-hidden">
                        <div className="w-full sm:w-1/2 h-[200px] sm:h-[500px] flex-shrink-0 overflow-hidden">
                            <OptimizedImage
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                                width={400}
                                height={500}
                            />
                        </div>
                        <div className="sm:w-1/2 p-0 flex flex-col justify-between">
                            <div>
                                <h2 className="sm:text-2xl text-xl font-semibold capitalize mb-2">{product.title}</h2>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <p className="text-lg font-bold text-blue-600 mb-4">₹{product.price}</p>
                                <p className="text-sm text-gray-500 mb-2">Available Quantity: {product.quantity}</p>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm font-medium text-gray-600">Color:</span>
                                    {product.color.map((col, index) => (
                                        <span
                                            key={index}
                                            className="w-5 h-5 rounded-full border"
                                            style={{ backgroundColor: col }}
                                        ></span>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4 ">
                                    <button className="flex items-center text-sm cursor-pointer gap-2 bg-[#1d4ed8] text-white px-4 py-2 rounded">
                                        <FiShoppingCart />
                                        Add to Cart
                                    </button>
                                    <button className="flex items-center cursor-pointer gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                                        <FiHeart />
                                        Wishlist
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetailPage;
