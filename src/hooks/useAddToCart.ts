import showToast from "@/lib/toast";
import { useState, useCallback } from "react";

const useAddToCart = () => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const addToCart = useCallback(async (id: number, qty: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/carts/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: id,
          products: [
            {
              id,
              quantity: qty,
            },
          ],
        }),
        cache: "no-store",
      });

      const response = await res.json();
      if (res?.status === 201) {
        showToast.success("Added to cart successfully 🎉");
        setResponse(response);
      } else {
        showToast.error(response.message || "Failed to add to cart");
        setError(response.message || "Failed to add to cart");
      }
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Failed to add to cart");
    } finally {
      setLoading(false);
    }
  }, []);
  return { addToCart, response, error, loading };
};

export default useAddToCart;
