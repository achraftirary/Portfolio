import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Portfolio",
  output: "export",
  trailingSlash: true,
  images: {
    // enable Next.js image optimization for production builds
    unoptimized: false,
  },
};

export default nextConfig;
