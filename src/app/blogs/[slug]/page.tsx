import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs-data";
import { generateBlogPostSchema } from "./schema";
import BlogPostContent from "./blog-post";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found — MBA Wizards" };
  }

  return {
    title: `${post.title} — MBA Wizards`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const schema = generateBlogPostSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}
