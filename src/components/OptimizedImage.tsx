"use client";

import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: "lazy" | "eager";
  fill?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  width = 50,
  height = 30,
  priority = false,
  loading,
  fill = false,
  ...rest
}: OptimizedImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      {...(fill ? { fill: true } : { width, height })}
      priority={priority}
      loading={priority ? undefined : (loading ?? "eager")}
      quality={100}
      sizes={fill ? "100vw" : undefined}
      className={`object-cover ${fill ? "w-full h-full" : ""}`}
      {...(fill ? { style: { objectFit: "cover" } } : {})}
      placeholder="blur"
      blurDataURL="https://cdn.pixabay.com/photo/2016/04/13/16/21/watch-1327169_1280.jpg"
      {...rest}
    />
  );
};

export default OptimizedImage;