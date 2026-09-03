import { blogPosts, BlogPost } from "@/data/blogs-data";
import { getSortedWPBlogs, WPBlog } from "./wp-blogs";

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
    coverImage: wp.coverImage || "/images/toppers/karan-780.jpeg",
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
 * Get all unified blog summaries (Local Guides + 105 WordPress Posts)
 */
export async function getAllBlogSummaries(): Promise<BlogSummary[]> {
  const localSummaries: BlogSummary[] = blogPosts.map((a: BlogPost) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    metaDescription: a.excerpt,
    coverImage: "/images/toppers/karan-780.jpeg",
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

  for (const item of [...localSummaries, ...wpSummaries]) {
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
 * Get full blog by slug (either local article or WordPress post)
 */
export async function getUnifiedBlogBySlug(slug: string): Promise<Blog | null> {
  // Check local articles first
  const local = blogPosts.find((a: BlogPost) => a.slug === slug);
  if (local) {
    return {
      slug: local.slug,
      title: local.title,
      excerpt: local.excerpt,
      metaTitle: `${local.title} — MBA Wizards`,
      metaDescription: local.excerpt,
      coverImage: "/images/toppers/karan-780.jpeg",
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
      coverImage: wp.coverImage || "/images/toppers/karan-780.jpeg",
      author: { name: wp.authorName || "MBA Wizards Faculty", role: "IIT Alumni Mentorship Team" },
      category: cat,
      tags: wp.tags,
      publishedAt: wp.publishedAt,
      readTime: wp.readTime,
      rawContentHtml: wp.content,
      _wpLink: wp.link,
      isWordPress: true,
    };
  }

  return null;
}
