import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getUnifiedBlogBySlug, getAllBlogSummaries } from "@/lib/blog";
import BlogDetail from "@/components/blog/BlogDetail";

export const dynamicParams = true;

export async function generateStaticParams() {
  const blogs = await getAllBlogSummaries();
  // Pre-generate top 40 posts at build time, remainder generated on-demand
  return blogs.slice(0, 40).map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getUnifiedBlogBySlug(slug);

  if (!blog) {
    return { title: "Article Not Found | MBA Wizards" };
  }

  const pageTitle = blog.metaTitle || `${blog.title} | MBA Wizards`;
  const desc = blog.metaDescription || blog.excerpt;

  return {
    title: pageTitle,
    description: desc,
    keywords: blog.tags,
    alternates: {
      canonical: `https://www.mbawizards.co.in/blogs/${blog.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: desc,
      images: [{ url: blog.coverImage, width: 1200, height: 630, alt: blog.title }],
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author.name],
      siteName: "MBA Wizards",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: desc,
      images: [blog.coverImage],
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getUnifiedBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = await getAllBlogSummaries();
  const related = allBlogs
    .filter((b) => b.slug !== blog.slug && (b.category === blog.category || b.category.includes("GMAT")))
    .slice(0, 3);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: [blog.coverImage],
    datePublished: blog.publishedAt,
    author: {
      "@type": "Person",
      name: blog.author.name,
      jobTitle: blog.author.role || "Senior Mentor",
    },
    publisher: {
      "@type": "Organization",
      name: "MBA Wizards",
      url: "https://www.mbawizards.co.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mbawizards.co.in/images/common/mbawizards-logo.svg",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <BlogDetail blog={blog} relatedBlogs={related} />
    </>
  );
}
