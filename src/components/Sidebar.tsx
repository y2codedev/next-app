"use client";

import React, { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiX,
  FiArrowDown,
  FiChevronRight,
} from "react-icons/fi";

const categories = [
  "All",
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
];

const sortFields = [
  { value: "price", label: "Price" },
  { value: "rating", label: "Rating" },
  { value: "stock", label: "Stock" },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("price");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const toggleOrder = () => {
    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const renderSidebar = () => (
    <div className="w-full min-h-screen rounded-md  p-4 bg-white shadow-sm animate-fade-in space-y-6">
      <h3 className="text-xl font-semibold">Search & Filters</h3>

      {/* Search */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 pr-10"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>
      </div>

        {/* Sort Options */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Sort By</h4>
        <div className="flex gap-2 items-center">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
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

      {/* Categories List */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Categories</h4>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-3 py-2 rounded transition flex items-center justify-between ${
                selectedCategory === cat
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              {cat}
              {selectedCategory === cat && <FiChevronRight className="text-blue-500" />}
            </li>
          ))}
        </ul>
      </div>

    
    </div>
  );

  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-4 ">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
        >
          <FiFilter /> Filters
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block px-4 min-w-[250px]">{renderSidebar()}</aside>

      {/* Mobile drawer */}
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
