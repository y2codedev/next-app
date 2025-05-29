"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      const isHidden =
        totalPages > 7 &&
        Math.abs(currentPage - i) > 2 &&
        i !== 1 &&
        i !== totalPages;

      if (isHidden) {
        if (
          (i === currentPage - 3 && i > 1) ||
          (i === currentPage + 3 && i < totalPages)
        ) {
          pages.push(
            <span
              key={`ellipsis-${i}`}
              className="px-2 py-2 text-gray-500 text-sm hidden sm:inline"
            >
              ...
            </span>,
          );
        }
        continue;
      }

      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-2 border cursor-pointer text-sm font-medium hidden sm:inline ${
            currentPage === i
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-8">
      <nav
        className="flex flex-wrap justify-center items-center gap-2 sm:gap-1"
        aria-label="Pagination"
      >
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 border text-sm cursor-pointer font-medium rounded-md ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        {renderPageNumbers()}

        <span className="block sm:hidden text-sm px-3 py-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 border text-sm cursor-pointer font-medium rounded-md ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
