"use client";
import { useEffect, useState } from "react";

export const useFetchData = (url: string) => {
  const [data, setData] = useState<string[] | any>([]);
  const [loading, setLoading] = useState<boolean | any>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        const res = await fetch(url, { cache: "no-store" });
        const json = await res.json();
        setData(json);
      } catch (err: unknown) {
        const error = err as Error;
        setError(error.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
