import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "shopv.swissblu.com",
      "cdn.keepconverting.ai",
      "cdn.dummyjson.com",
      'cdn.pixabay.com',
    ],
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
