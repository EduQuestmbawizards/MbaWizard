import type { BlogPost } from "@/data/blogs-data";
import type { Blog } from "@/lib/blog";

export function generateBlogPostSchema(post: BlogPost | Blog) {
  const title = post.title;
  const description =
    "metaDescription" in post && post.metaDescription
      ? post.metaDescription
      : post.excerpt || post.title;
  const datePublished = "publishedDate" in post ? post.publishedDate : post.publishedAt;
  const authorName =
    typeof post.author === "string" ? post.author : post.author?.name || "Surinder Gupta";
  const coverImage =
    "coverImage" in post && post.coverImage
      ? post.coverImage
      : "https://www.mbawizards.co.in/wp-content/uploads/2025/08/cropped-cropped-Logo.jpg";

  const graph: any[] = [
    {
      "@type": ["Article", "BlogPosting"],
      "@id": `https://www.mbawizards.co.in/blogs/${post.slug}#article`,
      headline: title,
      description: description,
      image: coverImage ? [coverImage] : undefined,
      datePublished: datePublished,
      dateModified: datePublished,
      author: {
        "@type": "Person",
        name: authorName,
        jobTitle: "Senior Mentor",
        worksFor: {
          "@type": "EducationalOrganization",
          name: "MBA Wizards",
        },
      },
      publisher: {
        "@type": "EducationalOrganization",
        name: "MBA Wizards",
        url: "https://www.mbawizards.co.in",
        logo: {
          "@type": "ImageObject",
          url: "https://www.mbawizards.co.in/wp-content/uploads/2025/08/cropped-cropped-Logo.jpg",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.mbawizards.co.in/blogs/${post.slug}`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.mbawizards.co.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.mbawizards.co.in/blogs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: `https://www.mbawizards.co.in/blogs/${post.slug}`,
        },
      ],
    },
  ];

  // If blog has visible FAQ items, add FAQPage schema
  if ("body" in post && Array.isArray(post.body)) {
    const faqBlock = post.body.find((b) => b.type === "faq");
    if (faqBlock && faqBlock.type === "faq" && Array.isArray(faqBlock.items) && faqBlock.items.length > 0) {
      graph.push({
        "@type": "FAQPage",
        "@id": `https://www.mbawizards.co.in/blogs/${post.slug}#faq`,
        mainEntity: faqBlock.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      });
    }
  }

  // If blog has HowTo steps, add HowTo schema
  if ("howToSteps" in post && Array.isArray(post.howToSteps) && post.howToSteps.length > 0) {
    graph.push({
      "@type": "HowTo",
      "@id": `https://www.mbawizards.co.in/blogs/${post.slug}#howto`,
      name: post.title,
      description: description,
      step: post.howToSteps.map((step: { name: string; text: string }, idx: number) => ({
        "@type": "HowToStep",
        position: idx + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
