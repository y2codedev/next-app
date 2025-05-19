
import { useEffect, useState } from "react";
import { ProductDetailProps } from "@/types/home";

export function useProduct(url: string) {
  const [product, setProduct] = useState<ProductDetailProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data: ProductDetailProps = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [url]);

  return { product, loading, error };
}
