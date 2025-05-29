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

  if (query) queryParts.push(`q=${encodeURIComponent(query)}`);
  if (category) queryParts.push(`category=${encodeURIComponent(category)}`);

  queryParts.push(`limit=${limit}`);
  queryParts.push(`skip=${skip}`);

  const url =
    category && !query
      ? `https://dummyjson.com/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/products${query || category ? "/search" : ""}?${queryParts.join("&")}`;

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    const data = await response.json();

    if (!data?.products || !Array.isArray(data.products)) {
      throw new Error("Invalid response format: products missing or not an array");
    }
    return {
      products: data.products,
      total: Number(data.total) || 0,
    } as ProductApiResponse;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], total: 0 } as ProductApiResponse;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const products = await getProductsData(1);
    const seoData = products?.products?.[0];

    if (!seoData) {
      return {
        title: "Browse Our Products | YourStore",
        description: "Explore a wide range of high-quality products.",
        openGraph: {
          title: "Browse Our Products | YourStore",
          description: "Explore a wide range of high-quality products.",
          url: `https://dummyjson.com/products`,
          siteName: "YourStore",
          images: [
            {
              url: `https://dummyjson.com/og-image.jpg`,
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
              url: `https://dummyjson.com/og-image.jpg`,
              width: 1200,
              height: 630,
              alt: "Product listing",
            },
          ],
        },
      };
    }

    return {
      title: seoData.title || "Browse Our Products | YourStore",
      description: seoData.description || "Explore a wide range of high-quality products.",
      openGraph: {
        title: seoData.title || "Browse Our Products | YourStore",
        description: seoData.description || "Explore a wide range of high-quality products.",
        url: `https://dummyjson.com/products`,
        siteName: "YourStore",
        images: [
          {
            url: seoData.thumbnail || `https://dummyjson.com/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: "Product listing",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: seoData.title || "Our Products | YourStore",
        description: seoData.description || "Discover top-rated items in our catalog.",
        images: [
          {
            url: seoData.thumbnail || `https://dummyjson.com/og-image.jpg`,
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

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page || 1);
  const query = resolvedSearchParams?.q || "";
  const category = resolvedSearchParams?.category || "";

  let data: ProductApiResponse;
  let errorMessage: string | null = null;

  try {
    data = await getProductsData(page, query, category);
  } catch (error) {
    console.error("Error in ProductsPage:", error);
    data = { products: [], total: 0 };
    errorMessage = "Failed to load products. Please try again later.";
  }

  const totalPages = Math.ceil(Number(data.total || 0) / 20);

  return (
    <main className="min-h-screen py-28 w-full container">
      {errorMessage && <ErrorAlert message={errorMessage} />}
      <ProductListing data={data} />
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} currentPage={page} />
      )}
    </main>
  );
}