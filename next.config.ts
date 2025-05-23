import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ["shopv.swissblu.com", "cdn.keepconverting.ai", "cdn.dummyjson.com"],
  },
  reactStrictMode: false,
  
};

export default nextConfig;
