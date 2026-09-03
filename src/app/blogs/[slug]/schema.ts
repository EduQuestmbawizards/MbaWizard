import type { BlogPost } from "@/data/blogs-data";

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishedDate,
    "dateModified": post.publishedDate,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "MBA Wizards",
      "logo": "https://www.mbawizards.co.in/images/common/mbawizards-logo.png",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.mbawizards.co.in/blogs/${post.slug}`,
    },
  };
}
