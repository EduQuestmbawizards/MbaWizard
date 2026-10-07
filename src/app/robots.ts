import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/*feed*",
          "/wp-includes/",
          "/wp-content/",
          "/wp-admin/",
          "/tag/",
          "/category/",
          "/comments/",
          "/product/",
          "/product-category/",
          "/shop/",
          "/*YOUR_PILLAR_PAGE_URL*",
          "/*?ver=*",
        ],
      },
    ],
    sitemap: "https://www.mbawizards.co.in/sitemap.xml",
  };
}

