// hooks/useProducts.ts
import { useEffect, useState } from "react";
import { ProductDetailProps } from "@/types/home";

export function useProducts(url: string) {
  const [products, setProducts] = useState<ProductDetailProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data: ProductDetailProps[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  return { products, loading, error };
}

export default useProducts