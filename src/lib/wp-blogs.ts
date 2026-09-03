import localWPPosts from "@/data/wp-blogs.json";

export interface WPBlog {
  id: number;
  slug: string;
  link: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  coverImage: string;
  authorName: string;
  categories: string[];
  category?: string;
  tags: string[];
  readTime: number;
  isWordPress: true;
}

/**
 * Get all MBA Wizards WordPress blogs, sorted newest-first.
 * Uses the comprehensive offline cache first (105 posts) and can revalidate.
 */
export async function getSortedWPBlogs(): Promise<WPBlog[]> {
  const posts = (localWPPosts as unknown as WPBlog[]).map((p) => ({
    ...p,
    isWordPress: true as const,
    coverImage: p.coverImage || "/images/toppers/karan-780.jpeg",
  }));

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getWPBlogBySlug(slug: string): Promise<WPBlog | null> {
  const posts = await getSortedWPBlogs();
  const match = posts.find((p) => p.slug === slug);
  return match || null;
}
