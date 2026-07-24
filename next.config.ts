import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/product", permanent: true },
      { source: "/services", destination: "/how-it-works", permanent: true },
    ];
  },
};

export default nextConfig;
