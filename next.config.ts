import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["shopv.swissblu.com", "cdn.keepconverting.ai", "cdn.pixabay.com","fakestoreapi.com"],
  },
  reactStrictMode: false,
  eslint: {
      ignoreDuringBuilds: false
  }
};

export default nextConfig;
