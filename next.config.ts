import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // For local images in the /public directory, no special configuration is typically needed
    // But we can define remote patterns if we ever add remote images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com', // Discord CDN
        pathname: '/attachments/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Placeholder images
      },
      // Add other domains as needed
    ],
  },
};

export default nextConfig;
