import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  images: {
    unoptimized: true,
    domains: [
      "shopv.swissblu.com",
      "cdn.keepconverting.ai",
      "cdn.dummyjson.com",
      "cdn.pixabay.com",
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
