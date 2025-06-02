"use client";
import React from "react";
import Slider from "react-slick";
import { OptimizedImage } from "@/components";

type ThumbnailSliderProps = {
  images: string[];
  activeImage?: string;
  onImageClick?: (src: string) => void;
};

const ThumbnailSlider: React.FC<ThumbnailSliderProps> = ({
  images,
  activeImage,
  onImageClick,
}) => {
  const settings = {
    dots: images.length > 1,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: images.length > 1,
        },
      },
    ],
  };

  return (
    <div className="mt-8 w-full ">
      <Slider {...settings}>
        {images &&
          images?.map((imgSrc, idx) => (
            <div
              key={idx}
              className={`px-0 
              }`}
            >
              <div
                onClick={() => onImageClick?.(imgSrc.trim())}
                className={`relative cursor-pointer rounded overflow-hidden border 
      ${activeImage === imgSrc ? "border-indigo-600" : "border-gray-200"} 
      w-14 sm:w-1/3 md:w-28 lg:w-36 
      sm:h-28 md:h-32 lg:h-36 h-14  `}
              >
                <OptimizedImage
                  src={imgSrc}
                  alt={`Preview ${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ThumbnailSlider;
