"use client";

import React from "react";
import { ProductDetail } from "@/components";
import Loader from "@/components/Loader";
import { useParams } from "next/navigation";
import { useProduct } from "@/hooks/useProducts";


const ProductDetailPage = () => {
  const { slug: id } = useParams();

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
  }

  const { product, loading, error } = useProduct(`${process.env.NEXT_PUBLIC_BASE_URL}${id}`);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="min-h-screen container py-20">
      <ProductDetail {...product} />
    </div>
  );
};

export default ProductDetailPage;
