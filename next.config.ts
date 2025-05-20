import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["shopv.swissblu.com", "cdn.keepconverting.ai", "cdn.pixabay.com","fakestoreapi.com"],
  },
  reactStrictMode: false,
  ignoreDuringBuilds: true
};

export default nextConfig;
