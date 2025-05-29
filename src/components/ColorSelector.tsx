"use client";

import React, { useState } from "react";

interface ColorOption {
  name: string;
  value: string;
  hex: string;
}

const colors: ColorOption[] = [
  { name: "Red", value: "10", hex: "#E84C3D" },
  { name: "Orange", value: "13", hex: "#F39C11" },
  { name: "Blue", value: "14", hex: "#5D9CEC" },
];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("14");

  return (
    <div className="mb-4">
      <span className="block font-semibold text-sm mb-2 text-gray-700">
        Color:{" "}
        <span className="">
          {colors.find((c) => c.value === selectedColor)?.name}
        </span>
      </span>

      <ul className="flex gap-3 flex-wrap" id="group_2">
        {colors.map((color) => (
          <li key={color.value}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelectedColor(color.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && setSelectedColor(color.value)
              }
              className={`
                w-8 h-8 rounded-full border-1 transition 
                cursor-pointer focus:outline-none
                ${
                  selectedColor === color.value
                    ? "border-indigo-600 "
                    : "border-indigo-300 hover:border-indigo-600"
                }
              `}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            >
              <span className="sr-only">{color.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorSelector;
