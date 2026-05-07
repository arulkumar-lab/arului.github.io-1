import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // next/image optimisation is disabled in static export mode.
    // Remote images from arului.github.io are still rendered via <img> unoptimised.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arului.github.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
