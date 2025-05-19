"use client";

import React from "react";
import { ProductDetail } from "@/components";
import { useProducts } from "@/hooks/useProducts";
import Loader from "@/components/Loader";
import { useParams } from "next/navigation";

const ProductDetailPage = () => {
  const { slug: id } = useParams();

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined in the environment variables.');
  }

  const { products, loading, error } = useProducts(`${process.env.NEXT_PUBLIC_BASE_URL}${id}`);
  console.log(products, "products");


  if (loading) return <Loader />
  if (error) return <p>Error: {error}</p>;

  if (!products) return <p>Product not found</p>;

  return (
    <div className="min-h-screen container py-20">
      <div className="min-h-screen container py-20">
        <ProductDetail
          id={products.id}
          title={products.title}
          description={products.description}
          price={products.price}
          image={products.image}
        />
      </div>
    </div>
  );
};

export default ProductDetailPage;
