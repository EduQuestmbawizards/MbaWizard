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
  async rewrites() {
    return [
      {
        source: "/product-sitemap.xml",
        destination: "/sitemap.xml",
      },
      {
        source: "/product_sitemap.xml",
        destination: "/sitemap.xml",
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
      },
      {
        source: "/post-sitemap.xml",
        destination: "/sitemap.xml",
      },
      {
        source: "/page-sitemap.xml",
        destination: "/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
