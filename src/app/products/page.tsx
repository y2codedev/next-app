"use client"

import React from "react";
import { ProductCard } from "@/components";
import { useProducts } from "@/hooks/useProducts";
import Loader from "@/components/Loader";
import { ProductDetailProps } from "@/types/home";

const ProductListingPage: React.FC<ProductDetailProps> = () => {

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined in the environment variables.');
  }
  const { products, loading, error } = useProducts(process.env.NEXT_PUBLIC_BASE_URL);

  if (loading) return <Loader />
  if (error) return <p>Error: {error}</p>;

  if (products.length === 0) return <p>No products found</p>

  return (
    <div className="min-h-screen py-20 w-full container">
      <div className="">
        <h1 className="sm:text-3xl text-xl font-bold sm:mb-8 mb-4">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.map((item: any, index: number) => (
            <ProductCard
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;