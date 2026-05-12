import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // enable Next.js image optimization for production builds
    unoptimized: false,
  },
};

export default nextConfig;
