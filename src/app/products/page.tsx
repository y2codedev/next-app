import { ErrorAlert } from "@/components/ErrorAlert";
import { EmptyStateNotice } from "@/components/EmptyStateNotice";
import { ProductApiResponse } from "@/types/home";
import { Metadata } from "next";
import ProductListing from "@/components/ProductListing";
import Pagination from "@/components/Pagination";


async function getProductsData(page: number): Promise<ProductApiResponse> {
  const limit = 20;
  const skip = (page - 1) * limit;

  try {

    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const data = await response.json();

    if (!data?.products || !Array.isArray(data.products)) {
      throw new Error("Invalid response format: Expected object with products array");
    }

    return data as ProductApiResponse;
  } catch (error) {
    console.error("getProducts error:", error);
    throw error;
  }
}
export async function generateMetadata(): Promise<Metadata> {
  try {
    const products = await getProductsData(1);
    const seoData = products?.products?.[0];

    return {
      title: seoData?.title || "Browse Our Products | YourStore",
      description: seoData?.description || "Explore a wide range of high-quality products.",
      openGraph: {
        title: seoData?.title || "Browse Our Products | YourStore",
        description: seoData?.description || "Explore a wide range of high-quality products.",
        url: `https://dummyjson.com/products`,
        siteName: "YourStore",
        images: [{ url: seoData?.thumbnail || `https://dummyjson.com/og-image.jpg`, width: 1200, height: 630, alt: "Product listing" }],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Our Products | YourStore",
        description: "Discover top-rated items in our catalog.",
        images: [{ url: seoData?.thumbnail || `https://dummyjson.com/og-image.jpg`, width: 1200, height: 630, alt: "Product listing" }],
      },
    };
  } catch (error) {
    console.error('Failed to generate metadata:', error);
    return {
      title: "Browse Our Products | YourStore",
      description: "Explore a wide range of high-quality products.",
    };
  }
}


export default async function ProductListingPage({ searchParams }: { searchParams?: { page?: number } }) {
  const page = Number(searchParams?.page || 10);
  const errorMessage: string | null = null;
  const data = await getProductsData(page);
  const totalPages = Math.ceil(Number(data?.total) / 20);

  return (
    <main className="min-h-screen py-20 w-full container">
      {errorMessage && <ErrorAlert message={errorMessage} />}
      {!errorMessage && data?.products?.length === 0 && (
        <EmptyStateNotice message="There are currently no products to display." />
      )}
      <ProductListing data={data} />
      <Pagination totalPages={totalPages} currentPage={page} />
    </main>
  );
}