import type { MetadataRoute } from "next";
import { getAllBlogSummaries } from "@/lib/blog";

const BASE_URL = "https://www.mbawizards.co.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // Core high-priority pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/gmat-coaching`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gre-coaching-classes`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gmat-gre-coaching`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gmat-cat-coaching`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cat`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/premium-university-consulting-packages`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gmat-toppers`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mba-wizards-methodology`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gmat-preparation`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/corporate-training`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/education-loan`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/research-paper-drafting-publishing-services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // City-specific landing pages
  const citySlugs = [
    // GMAT Cities
    "gmat-coaching-in-gurgaon",
    "gmat-coaching-in-noida",
    "gmat-coaching-in-delhi",
    "gmat-coaching-in-chandigarh",
    "gmat-coaching-in-mumbai",
    "gmat-coaching-in-hyderabad",
    "gmat-coaching-in-bangalore",
    "gmat-coaching-in-pune",
    // GRE Cities
    "gre-coaching-in-gurgaon",
    "gre-coaching-in-noida",
    "gre-coaching-in-delhi",
    "gre-coaching-in-chandigarh",
    "gre-coaching-in-mumbai",
    "gre-coaching-in-hyderabad",
    "gre-coaching-in-bangalore",
    "gre-coaching-in-pune",
    // GMAT+GRE Cities
    "gmat-gre-coaching-in-gurgaon",
    "gmatgre-coaching-in-noida",
    "gmatgre-coaching-in-delhi",
    "gmatgre-coaching-in-chandigarh",
    "gmatgre-coaching-in-mumbai",
    "gmatgre-coaching-in-hyderabad",
    "gmatgre-coaching-in-bangalore",
    "gmatgre-coaching-in-pune",
    // GMAT+CAT Cities
    "gmat-cat-coaching-in-gurgaon",
    "gmat-cat-coaching-in-delhi",
    "gmat-cat-coaching-in-noida",
    "gmat-cat-coaching-in-pune",
    "gmat-cat-coaching-in-chandigarh",
    "gmat-cat-coaching-in-mumbai",
    "gmat-cat-coaching-in-bangalore",
    "gmat-cat-coaching-in-hyderabad",
    "gmat-cat-coaching-in-chennai",
    // CAT Cities
    "cat-coaching-in-gurgaon",
    "cat-coaching-in-noida",
    "cat-coaching-in-delhi",
    "cat-coaching-in-chandigarh",
    "cat-coaching-in-pune",
    "cat-coaching-in-mumbai",
    "cat-coaching-in-hyderabad",
  ];

  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Dynamic Blog Posts
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getAllBlogSummaries();
    blogPages = blogs.map((post) => ({
      url: `${BASE_URL}/blogs/${post.slug}`,
      lastModified: post.publishedAt || currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating blog sitemap entries:", error);
  }

  return [...corePages, ...cityPages, ...blogPages];
}
