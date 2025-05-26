import React from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  reviewerName: string;
  rating: number;
  comment: string;
}

const ProductReviews: React.FC<{ reviews?: Review[] }> = ({ reviews = [] }) => (
  <div className="w-full   mt-14">
    <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
    {reviews.length > 0 ? (
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white border border-gray-200 p-4 rounded-md ">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">{review.reviewerName}</div>
              <div className="flex text-yellow-400">
                {Array.from({ length: review.rating }, (_, i) => <FaStar key={i} size={14} />)}
              </div>
            </div>
            <p className="text-gray-700 italic text-sm">"{review.comment}"</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No reviews yet.</p>
    )}
  </div>
);

export default ProductReviews;
