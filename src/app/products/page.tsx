import React from "react";
import { ProductCard } from "@/components";
import { ErrorAlert } from "@/components/ErrorAlert";
import { EmptyStateNotice } from "@/components/EmptyStateNotice";
import { ProductDetailProps } from "@/types/home";
import { Metadata } from "next";

async function fetchWithRetry(url: string, options: RequestInit = {}, retries = 3, timeout = 5000): Promise<Response> {
  try {
    // const controller = new AbortController();
    // const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      ...options,
      // signal: controller.signal,
      redirect: "follow",
    });

    // clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response;
  } catch (error) {
    // if (retries > 0) {
      console.warn(`Retrying fetch... ${retries} attempts left`);
      // await new Promise(resolve => setTimeout(resolve, 1000));
      // return fetchWithRetry(url, options, retries - 1, timeout);
    // }
    throw error;
  }
}

async function getProducts(): Promise<ProductDetailProps[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = `${baseUrl}/products`;

  const response = await fetchWithRetry(apiUrl, {
    next: { revalidate: 36000 },
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  if (!Array.isArray(data)) throw new Error("Invalid response format: Expected array");
  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const products = await getProducts();
  const seoData = products?.[0];

  return {
    title: seoData?.title || "Browse Our Products | YourStore",
    description: seoData.description || "Explore a wide range of high-quality products.",
    openGraph: {
      title: seoData?.title || "Browse Our Products | YourStore",
      description: seoData?.description || "Explore a wide range of high-quality products.",
      url: `${baseUrl}/products`,
      siteName: "YourStore",
      images: [{ url: seoData?.image || `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Product listing" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Products | YourStore",
      description: "Discover top-rated items in our catalog.",
      images: [{ url: seoData?.image || `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Product listing" }],
    },
  };
}

export default async function ProductListingPage() {
  let products: ProductDetailProps[] = [];
  let errorMessage: string | null = null;

  try {
    products = await getProducts();
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : 'Failed to load products';
  }

  return (
    <main className="min-h-screen py-20 w-full container">
      <section>
        <h1 className="sm:text-2xl text-xl font-bold sm:mb-8 mb-4">Our Products</h1>
        {errorMessage && <ErrorAlert message={errorMessage} />}
        {!errorMessage && products.length === 0 && (
          <EmptyStateNotice message="There are currently no products to display." />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}