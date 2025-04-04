import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'http',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],  
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
