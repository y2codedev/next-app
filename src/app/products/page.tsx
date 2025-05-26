import { ErrorAlert } from "@/components/ErrorAlert";
import { ProductApiResponse } from "@/types/home";
import { Metadata } from "next";
import ProductListing from "@/components/ProductListing";
import Pagination from "@/components/Pagination";

async function getProductsData(
  page: number,
  query?: string,
  category?: string,
): Promise<ProductApiResponse> {
  const limit = 20;
  const skip = (page - 1) * limit;

  const queryParts = [];

  if (query) queryParts.push(`q=${query}`);
  if (category) queryParts.push(`category=${category}`);

  queryParts.push(`limit=${limit}`);
  queryParts.push(`skip=${skip}`);

  const url =
    category && !query
      ? `https://dummyjson.com/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/products${query || category ? "/search" : ""}?${queryParts.join("&")}`;

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok)
    throw new Error(`Failed to fetch products: ${response.status}`);
  const data = await response.json();

  if (!data?.products || !Array.isArray(data.products))
    throw new Error("Invalid response format");

  return data as ProductApiResponse;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const products = await getProductsData(1);
    const seoData = products?.products?.[0];

    return {
      title: seoData?.title || "Browse Our Products | YourStore",
      description:
        seoData?.description ||
        "Explore a wide range of high-quality products.",
      openGraph: {
        title: seoData?.title || "Browse Our Products | YourStore",
        description:
          seoData?.description ||
          "Explore a wide range of high-quality products.",
        url: `https://dummyjson.com/products`,
        siteName: "YourStore",
        images: [
          {
            url: seoData?.thumbnail || `https://dummyjson.com/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: "Product listing",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Our Products | YourStore",
        description: "Discover top-rated items in our catalog.",
        images: [
          {
            url: seoData?.thumbnail || `https://dummyjson.com/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: "Product listing",
          },
        ],
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "Browse Our Products | YourStore",
      description: "Explore a wide range of high-quality products.",
    };
  }
}

export default async function ProductsPage({ searchParams }: { searchParams?: Record<string, string> }) { 

  const page = Number(searchParams?.page || 1);
  const query = searchParams?.q || "";
  const errorMessage: string | null = null;
  const category = searchParams?.category || "";
  const data = await getProductsData(page, query, category);
  const totalPages = Math.ceil(Number(data?.total) / 20);

  return (
    <main className="min-h-screen py-20 w-full container">
      {errorMessage && <ErrorAlert message={errorMessage} />}
      <ProductListing data={data} />
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} currentPage={page} />
      )}
    </main>
  );
}
