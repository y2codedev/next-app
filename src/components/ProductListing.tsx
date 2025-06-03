"use client";

import React from "react";
import { ProductApiResponse, ProductDetail } from "@/types/home";
import { EmptyStateNotice, ProductCard, Sidebar } from "@/components";

interface ProductListingProps {
  data: ProductApiResponse;
}

const ProductListing = ({ data }: ProductListingProps) => {
  const { products = [], total = 0 } = data || {};

  console.log("ProductListing data:", data);

  return (
    <div className="p-0 m-0 flex flex-col lg:grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3">
        <Sidebar />
      </div>

      <div className="lg:col-span-9">
        {products.length === 0 ? (
          <EmptyStateNotice message="" />
        ) : (
          <>
            <h1 className="sm:text-xl text-xl font-bold sm:mb-8 mb-4">
              {total} Our Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {products?.map((product: ProductDetail) => (
                <ProductCard key={product.id || product.title} {...product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductListing;