import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import blogSlugs from "@/data/all-blog-slugs.json";

const knownAppRoutes = new Set([
  "",
  "about-us",
  "blog",
  "blogs",
  "cat",
  "contact-us",
  "corporate-training",
  "education-loan",
  "gmat-cat-coaching",
  "gmat-coaching",
  "gmat-gre-coaching",
  "gmat-preparation",
  "gmat-toppers",
  "gre-coaching-classes",
  "mba-wizards-methodology",
  "premium-university-consulting-packages",
  "privacy-policy",
  "refund-policy",
  "research-paper-drafting-publishing-services",
  // City-specific landing pages
  "gmat-coaching-in-gurgaon",
  "gmat-coaching-in-noida",
  "gmat-coaching-in-delhi",
  "gmat-coaching-in-chandigarh",
  "gmat-coaching-in-mumbai",
  "gmat-coaching-in-hyderabad",
  "gmat-coaching-in-bangalore",
  "gmat-coaching-in-pune",
  "gre-coaching-in-gurgaon",
  "gre-coaching-in-noida",
  "gre-coaching-in-delhi",
  "gre-coaching-in-chandigarh",
  "gre-coaching-in-mumbai",
  "gre-coaching-in-hyderabad",
  "gre-coaching-in-bangalore",
  "gre-coaching-in-pune",
  "gmat-gre-coaching-in-gurgaon",
  "gmatgre-coaching-in-noida",
  "gmatgre-coaching-in-delhi",
  "gmatgre-coaching-in-chandigarh",
  "gmatgre-coaching-in-mumbai",
  "gmatgre-coaching-in-hyderabad",
  "gmatgre-coaching-in-bangalore",
  "gmatgre-coaching-in-pune",
  "gmat-cat-coaching-in-gurgaon",
  "gmat-cat-coaching-in-delhi",
  "gmat-cat-coaching-in-noida",
  "gmat-cat-coaching-in-pune",
  "gmat-cat-coaching-in-chandigarh",
  "gmat-cat-coaching-in-mumbai",
  "gmat-cat-coaching-in-bangalore",
  "gmat-cat-coaching-in-hyderabad",
  "gmat-cat-coaching-in-chennai",
  "cat-coaching-in-gurgaon",
  "cat-coaching-in-noida",
  "cat-coaching-in-delhi",
  "cat-coaching-in-chandigarh",
  "cat-coaching-in-pune",
  "cat-coaching-in-mumbai",
  "cat-coaching-in-hyderabad",
]);

const blogSlugSet = new Set(blogSlugs);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle broken anchor placeholders (e.g. /slug/YOUR_PILLAR_PAGE_URL)
  if (pathname.includes("YOUR_PILLAR_PAGE_URL")) {
    const cleanPath = pathname.replace(/\/YOUR_PILLAR_PAGE_URL.*$/, "");
    const baseSlug = cleanPath.replace(/^\//, "").split("/")[0];
    if (blogSlugSet.has(baseSlug)) {
      return NextResponse.redirect(new URL(`/blogs/${baseSlug}`, request.url), 301);
    }
    return NextResponse.redirect(new URL("/blogs", request.url), 301);
  }

  // Handle old WordPress scripts or endpoints
  if (pathname.startsWith("/wp-") || pathname.endsWith(".php")) {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // Strip leading and trailing slashes to isolate root slug
  const trimmed = pathname.replace(/^\/+|\/+$/g, "");
  const segments = trimmed.split("/");

  // If this is a single segment path (e.g. /chintan-thakurs-gmat-725-customizing-prep)
  if (segments.length === 1 && segments[0]) {
    const slug = segments[0];

    // If it's a known top-level page or landing page, let Next.js handle it
    if (knownAppRoutes.has(slug)) {
      return NextResponse.next();
    }

    // If it matches a blog slug, 301 redirect to /blogs/{slug}
    if (blogSlugSet.has(slug)) {
      return NextResponse.redirect(new URL(`/blogs/${slug}`, request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images, lead-magnets, fonts (public assets)
     * - favicon.ico, robots.txt, sitemap.xml
     */
    "/((?!api|_next/static|_next/image|images|lead-magnets|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
