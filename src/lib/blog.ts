import { blogPosts, BlogPost } from "@/data/blogs-data";
import { gmatGurgaonBlogs, GurgaonBlogPost } from "@/data/gmat-gurgaon-blogs";
import { getSortedWPBlogs, WPBlog } from "./wp-blogs";
import { sanitizeWpHtml } from "@/lib/sanitize-wp-html";

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
 * Get all unified blog summaries (GMAT Gurgaon Pillar Guides + Local Guides + 105 WordPress Posts)
 */
export async function getAllBlogSummaries(): Promise<BlogSummary[]> {
  const gurgaonSummaries: BlogSummary[] = gmatGurgaonBlogs.map((g: GurgaonBlogPost) => ({
    slug: g.slug,
    title: g.title,
    subtitle: g.subtitle,
    excerpt: g.excerpt,
    metaDescription: g.metaDescription || g.excerpt,
    coverImage: g.coverImage || "/images/toppers/karan-780.jpeg",
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

  for (const item of [...gurgaonSummaries, ...localSummaries, ...wpSummaries]) {
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
 * Get full blog by slug (either GMAT Gurgaon article, local article or WordPress post)
 */
export async function getUnifiedBlogBySlug(slug: string): Promise<Blog | null> {
  // Check GMAT Gurgaon Pillar Articles first
  const gurgaon = gmatGurgaonBlogs.find((g: GurgaonBlogPost) => g.slug === slug);
  if (gurgaon) {
    return {
      slug: gurgaon.slug,
      title: gurgaon.title,
      subtitle: gurgaon.subtitle,
      excerpt: gurgaon.excerpt,
      metaTitle: gurgaon.metaTitle || `${gurgaon.title} — MBA Wizards`,
      metaDescription: gurgaon.metaDescription || gurgaon.excerpt,
      coverImage: gurgaon.coverImage,
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

  // Check local articles second
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
      rawContentHtml: wp.content ? sanitizeWpHtml(wp.content) : undefined,
      _wpLink: wp.link,
      isWordPress: true,
    };
  }

  return null;
}
