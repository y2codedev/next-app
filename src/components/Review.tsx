"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { Button, OptimizedImage } from "@/components";

const TOTAL_REVIEWS = 10318;
const RATING = 4.8;
const MAX_STARS = 5;

const Review: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <OptimizedImage
          src="https://cdn.pixabay.com/photo/2024/06/26/11/31/ai-generated-8854776_1280.jpg"
          alt="Happy customer background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 " />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{RATING.toFixed(1)}</span>
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: MAX_STARS }).map((_, idx) => (
              <FaStar
                key={idx}
                className="w-5 h-5 text-yellow-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="text-sm text-gray-200 mt-1">
            Based on{" "}
            <span className="underline cursor-pointer hover:text-yellow-300 transition-colors">
              {TOTAL_REVIEWS.toLocaleString()}
            </span>{" "}
            Customer Reviews
          </p>
        </div>

        <div className="mt-8 max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Amazing Product</h2>
          <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
            Customers highly praise the Blu shower filter for its easy installation,
            noticeable water quality improvements, reduced hair fall, and softer skin.
          </p>
        </div>

        <Button
          type="button"
          label="Read Reviews"
          variant="custom"
          className="mt-6 bg-white text-black px-6 py-2 rounded-md text-sm sm:text-base font-semibold hover:bg-gray-200 transition-colors"
        />
      </div>
    </section>
  );
};

export default Review;