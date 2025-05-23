"use client";

import React, { useEffect, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { OptimizedImage } from "@/components";
import { useRouter } from "next/navigation";
import { ProductDetailProps } from "@/types/home";
import { useDebounce } from "use-debounce";

interface SearchProps {
  onClose: () => void;
  isOpen: boolean;
}

const SearchBar = ({ isOpen, onClose }: SearchProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<{ products: ProductDetailProps[] }>({ products: [] });

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedValue] = useDebounce(searchTerm, 1000);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${baseUrl}/products/search?q=${debouncedValue}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const products = await response.json();
        setData(products);

      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load products");
        console.error("Search fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (debouncedValue) {
      fetchProducts();
    } else {
      setData({ products: [] });
    }

  }, [debouncedValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleProductClick = () => {
    router.push(`/products`);
    onClose();
  };


  return (
    <div
      className={`
        fixed inset-0 z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative top-16 mx-auto w-full max-w-4xl px-4">
        <div className="rounded-4xl bg-white ">
          <div className="flex items-center justify-between py-2 px-3 sm:py-3 sm:px-4">
            <div className="flex items-center gap-1 sm:gap-2 flex-1">
              <FiSearch
                size={20}
                color="#888"
                className="pointer-events-none"
              />
              <input
                value={searchTerm}
                onChange={handleInputChange}
                type="text"
                placeholder="Search products..."
                className="w-full flex-grow outline-none px-2 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-gray-800"
              />
            </div>
            {loading ? (
              <div className="w-6 h-6 border-1  border-gray-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <button
                onClick={onClose}
                className="text-xl sm:text-2xl text-secondary  cursor-pointer"
                aria-label="Close search"
              >
                <FiX color="#888" className="pointer-events-none" />
              </button>
            )}
          </div>
        </div>
        {error && (
          <div className="p-4 text-red-500 text-center text-sm">
            {error}
          </div>
        )}

        <div className="bg-white shadow-sm w-full rounded-md mt-2">
          {searchTerm && (
            <ul className="max-h-100 overflow-y-auto">
              {data?.products?.length > 0 && searchTerm ? (
                data?.products?.map((item: ProductDetailProps, index: number) => (
                  <div
                    key={index}
                    onClick={handleProductClick}
                  >
                    <li
                      key={index}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <OptimizedImage
                        src={item?.thumbnail}
                        alt={item?.title}
                        className="w-16 h-16 "
                      />
                      <p className="text-sm font-medium text-gray-800">
                        {item?.title}
                      </p>
                    </li>
                  </div>
                ))
              ) : (
                <p className="p-4 text-sm text-gray-500 text-center">
                  No results found
                </p>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;