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
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductDetailProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedValue] = useDebounce(searchTerm, 1000);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {

      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://fakestoreapi.com/products');
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
      setData([]);
    }
  }, [debouncedValue]);

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleProductClick = () => {
    router.push(`/products`);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative top-20 mx-auto w-full max-w-3xl px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex items-center p-3 border-b">
            <div className="flex items-center flex-1">
              <FiSearch className="text-gray-500 mr-2" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search products..."
                className="w-full outline-none text-gray-800 placeholder-gray-400"
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="ml-2 text-gray-500 hover:text-gray-700"
              aria-label="Close search"
            >
              <FiX size={24} />
            </button>
          </div>

          {loading && (
            <div className="p-4 flex justify-center">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="p-4 text-red-500 text-center">
              {error}
            </div>
          )}

          {!loading && !error && searchTerm && (
            <div className="max-h-[60vh] overflow-y-auto">
              {filteredData?.length > 0 ? (
                <ul>
                  {filteredData.map((product) => (
                    <li
                      key={product.id}
                      className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                      onClick={() => handleProductClick()}
                    >
                      <div className="flex items-center gap-4">
                        <OptimizedImage
                          src={product.image}
                          alt={product.title}
                          width={60}
                          height={60}
                          className="rounded-md object-contain"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900 line-clamp-1">
                            {product.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  {searchTerm ? "No products found" : "Start typing to search"}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;