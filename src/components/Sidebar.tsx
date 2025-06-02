"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiX,
  FiArrowDown,
  FiChevronRight,
} from "react-icons/fi";
import { Button } from "@/components";
import { useFetchData } from "@/hooks/useFetchData";

const sortFields = [{ value: "price", label: "Price" }];

const Sidebar = () => {
  const { data } = useFetchData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/category-list`,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    return localStorage.getItem("selectedCategory") || "";
  });

  const [sortBy, setSortBy] = useState("price");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const searchParams = useSearchParams();
  const router = useRouter();

  const toggleOrder = () => {
    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const applyFliters = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search.trim()) {
      params.set("q", search.trim());
    } else {
      params.delete("q");
    }

    if (selectedCategory && selectedCategory !== "All") {
      params.set("category", selectedCategory);
    } else {
      params.delete("category", selectedCategory);
    }

    router.push(`?${params.toString()}`);
  };

  const resetFilters = () => {
    router.push(`/products`);
    setSearch("");
    setSelectedCategory("");
  };

  useEffect(() => {
    if (!selectedCategory && data?.length) {
      setSelectedCategory(data[0]);
    }
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    }
  }, [selectedCategory]);

  const renderSidebar = () => (
    <div className="w-full min-h-screen rounded-md  p-4 bg-white shadow-sm animate-fade-in space-y-6">
      <h3 className="text-xl font-semibold">Search & Filters</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 focus:outline-none border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 pr-10"
          />
          <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Sort By</h4>
        <div className="flex gap-2 items-center">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 focus:outline-none rounded focus:ring-blue-500 focus:border-blue-500"
          >
            {sortFields.map((field) => (
              <option key={field.value} value={field.value}>
                {field.label}
              </option>
            ))}
          </select>
          <button
            onClick={toggleOrder}
            className="p-3 border cursor-pointer border-gray-300 rounded hover:bg-gray-100 transition"
            title={`Order: ${order.toUpperCase()}`}
          >
            <FiArrowDown
              className={`transform transition-transform ${
                order === "desc" ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          All Categories
        </h4>
        <ul className="space-y-2">
          {data?.map((cat: string, index: number) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-3 py-2 rounded capitalize transition flex items-center justify-between ${
                selectedCategory === cat
                  ? "bg-blue-100 text-indigo-600 font-medium"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              {cat}
              {selectedCategory === cat && (
                <FiChevronRight className="text-indigo-600" />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2 pt-4">
        <Button
          label="Apply Filters"
          variant="custom"
          onClick={() => {
            applyFliters();
            setMobileOpen(false);
          }}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm transition-all duration-200"
        />
        <Button
          label="Reset"
          variant="custom"
          onClick={() => {
            resetFilters();
            setMobileOpen(false);
          }}
          className="flex-1 border gap-2 border-gray-300 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm transition-all duration-200"
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="lg:hidden mb-4 ">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
        >
          <FiFilter /> Filters
        </button>
      </div>

      <aside className="hidden lg:block  min-w-[250px]">
        {renderSidebar()}
      </aside>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="relative w-full bg-white h-full shadow-lg p-4 overflow-y-auto animate-slide-in-left">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button onClick={() => setMobileOpen(false)}>
                <FiX size={24} />
              </button>
            </div>
            {renderSidebar()}
          </div>
          <div
            className="flex-grow bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
