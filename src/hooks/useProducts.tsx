import { ProductDetailProps } from '@/types/home';
import { useEffect, useState, useCallback } from 'react';

export function useProducts(url: string) {
 const [products, setProducts] = useState<ProductDetailProps[] | any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unknown error');
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
}
