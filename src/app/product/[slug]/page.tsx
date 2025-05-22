import { notFound } from 'next/navigation';
import { ProductDetail } from "@/components";
import { ProductDetailProps } from "@/types/home";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: {
        index: false,
        follow: false
      }
    };
  }

  return {
    title: `${product?.title} | YourStore`,
    description: product?.description,
    openGraph: {
      title: product?.title || "Browse Our Products | YourStore",
      description: product?.description || "Explore a wide range of high-quality products.",
      url: `${baseUrl}/products`,
      siteName: "YourStore",
      images: [{ url: product?.image || `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Product listing" }],
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title: product?.title,
      description: product?.description,
      images: [product?.image],
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

async function getProduct(id: string): Promise<ProductDetailProps | null> {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}products/${id}`, {
      next: { revalidate: 36000 }
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  let product;
  try {
    product = await getProduct(slug);
  } catch (error) {
    console.error('Error fetching data in /products:', error);
    throw error;
  }
  console.log(product, 'product')
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen container py-20">
      <ProductDetail
        title={product?.title}
        id={product?.id}
        description={product?.description}
        price={product?.price}
        image={product?.image}
      />
    </div>
  );
}