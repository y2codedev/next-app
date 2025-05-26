import { useEffect, useState } from "react";

export const useCategories = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products/category-list", { cache: "no-store" });
                if (!res.ok) {
                    throw new Error("Failed to fetch categories");
                }
                const data = await res.json();
                setCategories(["All", ...data]);
            } catch (err: any) {
                setError(err.message || "An unexpected error occurred");
            }
        };

        fetchCategories();
    }, []);

    return { categories, error };
};
