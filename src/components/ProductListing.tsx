import React from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import { ProductApiResponse, ProductDetailProps } from "@/types/home";
import { EmptyStateNotice } from "./EmptyStateNotice";

interface ProductListingProps {
  data: ProductApiResponse;
}

const ProductListing = ({ data }: ProductListingProps) => {
  const { products, total } = data;

  return (
    <div className="p-0 m-0 flex flex-col lg:grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3">
        <Sidebar />
      </div>

      <div className="lg:col-span-9">
        {products?.length === 0 ? (
          <EmptyStateNotice message="" />
        ) : (
          <>
            <h1 className="sm:text-xl text-xl font-bold sm:mb-8 mb-4">
              {total} Our Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {products?.map((product: ProductDetailProps) => (
                <ProductCard key={product?.id} {...product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
