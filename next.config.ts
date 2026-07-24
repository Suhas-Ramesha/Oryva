import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project (a stray lockfile in the home
    // directory otherwise makes Next infer the wrong root).
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      { source: "/products", destination: "/product", permanent: true },
      { source: "/services", destination: "/how-it-works", permanent: true },
    ];
  },
};

export default nextConfig;
