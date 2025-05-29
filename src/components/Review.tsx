"use client";

import { FaStar } from "react-icons/fa";
import React from "react";
import { Button, OptimizedImage } from "@/components";

const Review = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://cdn.pixabay.com/photo/2024/06/26/11/31/ai-generated-8854776_1280.jpg"
          alt="Review Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="flex flex-col items-center ">
          <div className="text-3xl font-bold">4.8</div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="w-6 h-6 text-yellow-500" />
            ))}
          </div>
          <div className="text-sm text-gray-200">
            Based on{" "}
            <span className="underline hover:text-yellow-300 transition">
              10,318
            </span>{" "}
            Customer Reviews
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Amazing Product
          </h2>
          <p className="text-sm sm:text-base max-w-md">
            Customers highly praise the blu shower filter for its easy
            installation, improved water quality, reduced hair fall, and softer
            skin.
          </p>
        </div>

        <Button
          type="button"
          label="Read Review"
          variant="custom"
          className="mt-6 bg-white text-black px-4 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-gray-100 transition"
        />
      </div>
    </div>
  );
};

export default Review;
