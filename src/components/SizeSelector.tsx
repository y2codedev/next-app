"use client";

import React, { useState } from "react";

interface SizeOption {
  label: string;
  value: string;
}

const sizes: SizeOption[] = [
  { label: "Medium", value: "2" },
  { label: "Large", value: "3" },
  { label: "XXL", value: "26" },
];

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("2");

  return (
    <div className="mb-4">
      <span className="block font-semibold text-sm mb-2 text-secondary">
        Size: <span>{sizes.find((s) => s.value === selectedSize)?.label}</span>
      </span>

      <ul className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <li key={size.value}>
            <div
              onClick={() => setSelectedSize(size.value)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && setSelectedSize(size.value)
              }
              className={`
                px-4 py-2  border-[1px] text-sm cursor-pointer 
                transition-all 
                ${
                  selectedSize === size.value
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "text-gray-700 border-gray-300"
                }
              `}
            >
              {size.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeSelector;