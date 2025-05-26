import React from "react";
import Slider from "react-slick";
import { OptimizedImage } from "@/components";

interface Props {
  thumbnail: string;
  images: string[];
  title: string;
}

const settings = {
  dots: true,
  infinite: true,
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
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
      },
    },
  ],
};

const ProductImageGallery: React.FC<Props> = ({ thumbnail, images, title }) => (
  <div className="w-full lg:w-1/2 md:space-y-4">
    <div className="aspect-square rounded overflow-hidden">
      <OptimizedImage
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover"
        width={500}
        height={500}
      />
    </div>

    <div className="slider-container mt-4">
      <Slider {...settings}>
        {images?.map((img, index) => (
          <div key={index} className="px-2">
            <div className="rounded overflow-hidden ">
              <OptimizedImage
                src={img}
                alt={`${title} image ${index}`}
                className={`w-full  object-cover rounded border-[1px] border-gray-200 `}
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default ProductImageGallery;
