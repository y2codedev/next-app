"use client";

import ProductCard from '@/components/ProductCard';
import { searchData } from '@/data/navData';
import Link from 'next/link';
import React from 'react';


const ProductListingPage: React.FC = () => {
    return (
        <div className="min-h-screen  py-20">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {searchData.map((product) => (
                        <Link  key={product.id} href={`/product/${product.slug}`}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;
