import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Core legacy routes
      {
        source: "/cat-2025",
        destination: "/cat",
        permanent: true,
      },
      {
        source: "/cat-2026-preparation-guide",
        destination: "/blogs/cat-exam-2026-preparation-guide",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/gmat",
        destination: "/gmat-coaching",
        permanent: true,
      },
      {
        source: "/gre",
        destination: "/gre-coaching-classes",
        permanent: true,
      },
      {
        source: "/gmat-toppers-hall",
        destination: "/gmat-toppers",
        permanent: true,
      },
      {
        source: "/gmat-blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/thank-you",
        destination: "/contact-us",
        permanent: true,
      },

      // Legacy WordPress Taxonomies & Archives
      {
        source: "/tag/:path*",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/page/:page*",
        destination: "/blogs",
        permanent: true,
      },

      // Legacy Products & Shop
      {
        source: "/shop/:path*",
        destination: "/gmat-cat-coaching",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/gmat-cat-coaching",
        permanent: true,
      },
      {
        source: "/product/:path*",
        destination: "/gmat-cat-coaching",
        permanent: true,
      },
      {
        source: "/product-category/:path*",
        destination: "/gmat-cat-coaching",
        permanent: true,
      },

      // Legacy WordPress Feeds & Comments
      {
        source: "/comments/:path*",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/:path*/feed/:sub*",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/:path*/feed",
        destination: "/blogs",
        permanent: true,
      },

      // Legacy Date Archives (e.g. /2025/10/28/)
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})*",
        destination: "/blogs",
        permanent: true,
      },

      // Specific known old slug variations
      {
        source: "/how-to-crack-iim-bangalore-interview-the-ultimate-pi-preparation-guide",
        destination: "/blogs/iim-bangalore-interview-preparation",
        permanent: true,
      },
      {
        source: "/gmat-syllabus-breakdown-2026",
        destination: "/blogs/gmat-syllabus-breakdown-2026-and-score",
        permanent: true,
      },
      {
        source: "/how-to-start-gmat-preparation-from-scratch-2026",
        destination: "/blogs/how-to-start-gmat-preparation-from-2026",
        permanent: true,
      },
      {
        source: "/ai-cat-mock-interview",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/ai-cat-mock-interview-2",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/107882-2",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/17-exclusive-tricks-tips-to-score-700-in-gmat-2",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/how-long-does-it-take-to-prepare-for-gmat-2",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/gmat-superscore-2026-2",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/gmat-superscore-2026",
        destination: "/blogs",
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
