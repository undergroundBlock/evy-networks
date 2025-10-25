import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // enables static export
  basePath: '/evy-networks', // 👈 replace with your GitHub repo name
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Next Image Optimization
  },
  assetPrefix: '/evy-networks/', // ensures static assets load correctly
};

export default nextConfig;
