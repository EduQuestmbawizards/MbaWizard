import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cat-2025",
        destination: "/cat",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
