import { blogPosts, BlogPost } from "@/data/blogs-data";
import { gmatGurgaonBlogs, GurgaonBlogPost } from "@/data/gmat-gurgaon-blogs";
import { gmatMockAnalyticsBlogs, MockAnalyticsBlogPost } from "@/data/gmat-mock-analytics-blogs";
import { gmatScoreImprovementBlogs, MasterBlogPost } from "@/data/gmat-score-improvement-blogs";
import { mbaInterviewStrategyBlogs } from "@/data/mba-interview-strategy-blogs";
import { mbaInterviewMasteryBlogs } from "@/data/mba-interview-mastery-blogs";
import { mbaInterviewSchoolVideoBlogs } from "@/data/mba-interview-school-video-blogs";
import { catIimInterviewBlogs } from "@/data/cat-iim-interview-blogs";
import { aiInterviewsComparisonBlogs } from "@/data/ai-interviews-comparison-blogs";
import { problemAwarePrepBlogs } from "@/data/problem-aware-prep-blogs";
import { getSortedWPBlogs, WPBlog } from "./wp-blogs";
import { sanitizeWpHtml } from "@/lib/sanitize-wp-html";

export const all15MasterBlogs: MasterBlogPost[] = [
  ...catIimInterviewBlogs,
  ...mbaInterviewSchoolVideoBlogs,
  ...mbaInterviewMasteryBlogs,
  ...mbaInterviewStrategyBlogs,
  ...gmatScoreImprovementBlogs,
  ...aiInterviewsComparisonBlogs,
  ...problemAwarePrepBlogs,
];

export interface BlogAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[]; ordered: boolean }
  | { type: "divider" }
  | { type: "highlight"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { question: string; answer: string }[] }
  | { type: "cta"; heading: string; subtext?: string; primaryLabel: string; primaryHref: string; secondaryLabel?: string; secondaryHref?: string };

export interface Blog {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  coverImage: string;
  author: BlogAuthor;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  accentColor?: string;
  body?: ContentBlock[];
  rawContentHtml?: string;
  _wpLink?: string;
  isWordPress?: boolean;
}

export interface BlogSummary {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  metaDescription?: string;
  coverImage: string;
  author: BlogAuthor;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  accentColor?: string;
  _wpLink?: string;
  isWordPress?: boolean;
}

/**
 * Normalise a WPBlog into the unified BlogSummary shape
 */
export function wpToBlogSummary(wp: WPBlog): BlogSummary {
  const cat = wp.categories && wp.categories.length > 0 ? wp.categories[0] : "GMAT Focus";
  return {
    slug: wp.slug,
    title: wp.title,
    excerpt: wp.excerpt,
    metaDescription: wp.excerpt,
    coverImage: wp.coverImage || `/images/blogs/${wp.slug}.jpg`,
    author: { name: wp.authorName || "Surinder Gupta (IIT Roorkee)" },
    category: cat,
    tags: wp.tags || [],
    publishedAt: wp.publishedAt,
    readTime: wp.readTime || 5,
    featured: false,
    accentColor: "#d4af37",
    _wpLink: wp.link,
    isWordPress: true,
  };
}

/**
 * Get all unified blog summaries (15 Master Blogs + GMAT Mock Analytics + GMAT Gurgaon Pillar Guides + Local Guides + 105 WordPress Posts)
 */
export async function getAllBlogSummaries(): Promise<BlogSummary[]> {
  const master15Summaries: BlogSummary[] = all15MasterBlogs.map((m: MasterBlogPost) => ({
    slug: m.slug,
    title: m.title,
    subtitle: m.subtitle,
    excerpt: m.excerpt,
    metaDescription: m.metaDescription || m.excerpt,
    coverImage: m.coverImage || `/images/blogs/${m.slug}.jpg`,
    author: m.author,
    category: m.category,
    tags: m.tags,
    publishedAt: m.publishedAt,
    readTime: m.readTime,
    featured: m.featured || false,
    accentColor: m.accentColor || "#d4af37",
    isWordPress: false,
  }));

  const mockAnalyticsSummaries: BlogSummary[] = gmatMockAnalyticsBlogs.map((m: MockAnalyticsBlogPost) => ({
    slug: m.slug,
    title: m.title,
    subtitle: m.subtitle,
    excerpt: m.excerpt,
    metaDescription: m.metaDescription || m.excerpt,
    coverImage: m.coverImage || `/images/blogs/${m.slug}.jpg`,
    author: m.author,
    category: m.category,
    tags: m.tags,
    publishedAt: m.publishedAt,
    readTime: m.readTime,
    featured: m.featured || false,
    accentColor: m.accentColor || "#d4af37",
    isWordPress: false,
  }));

  const gurgaonSummaries: BlogSummary[] = gmatGurgaonBlogs.map((g: GurgaonBlogPost) => ({
    slug: g.slug,
    title: g.title,
    subtitle: g.subtitle,
    excerpt: g.excerpt,
    metaDescription: g.metaDescription || g.excerpt,
    coverImage: g.coverImage || `/images/blogs/${g.slug}.jpg`,
    author: g.author,
    category: g.category,
    tags: g.tags,
    publishedAt: g.publishedAt,
    readTime: g.readTime,
    featured: g.featured || false,
    accentColor: g.accentColor || "#d4af37",
    isWordPress: false,
  }));

  const localSummaries: BlogSummary[] = blogPosts.map((a: BlogPost) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    metaDescription: a.excerpt,
    coverImage: `/images/blogs/${a.slug}.jpg`,
    author: { name: a.author },
    category: a.category,
    tags: [a.category, a.tag || "Test Prep"],
    publishedAt: a.publishedDate,
    readTime: parseInt(a.readTime.replace(/\D/g, ""), 10) || 5,
    featured: false,
    accentColor: "#d4af37",
    isWordPress: false,
  }));

  const wpPosts = await getSortedWPBlogs();
  const wpSummaries = wpPosts.map(wpToBlogSummary);

  const seen = new Set<string>();
  const uniqueSummaries: BlogSummary[] = [];

  for (const item of [...master15Summaries, ...mockAnalyticsSummaries, ...gurgaonSummaries, ...localSummaries, ...wpSummaries]) {
    if (!seen.has(item.slug)) {
      seen.add(item.slug);
      uniqueSummaries.push(item);
    }
  }

  return uniqueSummaries.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Get full blog by slug (either 15 Master Blogs, GMAT Mock Analytics, GMAT Gurgaon article, local article or WordPress post)
 */
export async function getUnifiedBlogBySlug(slug: string): Promise<Blog | null> {
  // Check 15 Master Blogs first
  const masterBlog = all15MasterBlogs.find((m: MasterBlogPost) => m.slug === slug);
  if (masterBlog) {
    return {
      slug: masterBlog.slug,
      title: masterBlog.title,
      subtitle: masterBlog.subtitle,
      excerpt: masterBlog.excerpt,
      metaTitle: masterBlog.metaTitle || `${masterBlog.title} — MBA Wizards`,
      metaDescription: masterBlog.metaDescription || masterBlog.excerpt,
      coverImage: masterBlog.coverImage || `/images/blogs/${masterBlog.slug}.jpg`,
      author: masterBlog.author,
      category: masterBlog.category,
      tags: masterBlog.tags,
      publishedAt: masterBlog.publishedAt,
      readTime: masterBlog.readTime,
      featured: masterBlog.featured,
      accentColor: masterBlog.accentColor,
      body: masterBlog.body as ContentBlock[],
      isWordPress: false,
    };
  }

  // Check GMAT Mock Analytics second
  const mockBlog = gmatMockAnalyticsBlogs.find((m: MockAnalyticsBlogPost) => m.slug === slug);
  if (mockBlog) {
    return {
      slug: mockBlog.slug,
      title: mockBlog.title,
      subtitle: mockBlog.subtitle,
      excerpt: mockBlog.excerpt,
      metaTitle: mockBlog.metaTitle || `${mockBlog.title} — MBA Wizards`,
      metaDescription: mockBlog.metaDescription || mockBlog.excerpt,
      coverImage: mockBlog.coverImage || `/images/blogs/${mockBlog.slug}.jpg`,
      author: mockBlog.author,
      category: mockBlog.category,
      tags: mockBlog.tags,
      publishedAt: mockBlog.publishedAt,
      readTime: mockBlog.readTime,
      featured: mockBlog.featured,
      accentColor: mockBlog.accentColor,
      body: mockBlog.body as ContentBlock[],
      isWordPress: false,
    };
  }

  // Check GMAT Gurgaon Pillar Articles third
  const gurgaon = gmatGurgaonBlogs.find((g: GurgaonBlogPost) => g.slug === slug);
  if (gurgaon) {
    return {
      slug: gurgaon.slug,
      title: gurgaon.title,
      subtitle: gurgaon.subtitle,
      excerpt: gurgaon.excerpt,
      metaTitle: gurgaon.metaTitle || `${gurgaon.title} — MBA Wizards`,
      metaDescription: gurgaon.metaDescription || gurgaon.excerpt,
      coverImage: gurgaon.coverImage || `/images/blogs/${gurgaon.slug}.jpg`,
      author: gurgaon.author,
      category: gurgaon.category,
      tags: gurgaon.tags,
      publishedAt: gurgaon.publishedAt,
      readTime: gurgaon.readTime,
      featured: gurgaon.featured,
      accentColor: gurgaon.accentColor,
      body: gurgaon.body as ContentBlock[],
      isWordPress: false,
    };
  }

  // Check local articles fourth
  const local = blogPosts.find((a: BlogPost) => a.slug === slug);
  if (local) {
    return {
      slug: local.slug,
      title: local.title,
      excerpt: local.excerpt,
      metaTitle: `${local.title} — MBA Wizards`,
      metaDescription: local.excerpt,
      coverImage: `/images/blogs/${local.slug}.jpg`,
      author: { name: local.author, role: "Senior Faculty & Admissions Mentor" },
      category: local.category,
      tags: [local.category, local.tag, "Admissions Strategy"],
      publishedAt: local.publishedDate,
      readTime: parseInt(local.readTime.replace(/\D/g, ""), 10) || 5,
      featured: false,
      body: local.content.map((p: string) => ({ type: "paragraph", text: p })),
    };
  }

  // Check WordPress posts
  const wpPosts = await getSortedWPBlogs();
  const wp = wpPosts.find((p: WPBlog) => p.slug === slug);
  if (wp) {
    const cat = wp.categories && wp.categories.length > 0 ? wp.categories[0] : "MBA Prep";
    return {
      slug: wp.slug,
      title: wp.title,
      excerpt: wp.excerpt,
      metaTitle: `${wp.title} — MBA Wizards`,
      metaDescription: wp.excerpt,
      coverImage: wp.coverImage || `/images/blogs/${wp.slug}.jpg`,
      author: { name: wp.authorName || "MBA Wizards Faculty", role: "IIT Alumni Mentorship Team" },
      category: cat,
      tags: wp.tags,
      publishedAt: wp.publishedAt,
      readTime: wp.readTime,
      rawContentHtml: wp.content ? sanitizeWpHtml(wp.content) : undefined,
      _wpLink: wp.link,
      isWordPress: true,
    };
  }

  return null;
}


