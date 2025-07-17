import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // 👇 Disables Next.js Image Optimization
    unoptimized: true,
    domains: ["skgpsd.com"], // Optional: still allows domain checking
  },
};

export default nextConfig;
