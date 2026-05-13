import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Portfolio",
  allowedDevOrigins: ["192.168.1.128"],
  output: "export",
  trailingSlash: true,
  images: {
    // enable Next.js image optimization for production builds
    unoptimized: false,
  },
};

export default nextConfig;
