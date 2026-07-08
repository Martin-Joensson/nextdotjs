import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nasa.gov",
      },

      {
        protocol: "https",
        hostname: "futuramaapi.com",
      },

      {
        protocol: "https",
        hostname: "placehold.net",
      },
    ],
  },
};

export default nextConfig;
