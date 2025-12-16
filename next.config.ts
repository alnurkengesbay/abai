import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Fix for Next.js Turbopack incorrectly inferring a higher-level workspace root
  // when multiple lockfiles exist on disk (can cause wrong .env to be loaded).
  turbopack: {
    root: __dirname,
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'models.readyplayer.me',
      },
    ],
  },
};

export default nextConfig;
