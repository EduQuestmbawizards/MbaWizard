import type { Metadata } from "next";

export const blogsMetadata: Metadata = {
  title: "MBA Preparation Blog & Admissions Insights | MBA Wizards",
  description:
    "Explore 100+ expert guides on GMAT Focus Edition, GRE strategies, CAT preparation, top MBA interview questions, application essays, and success stories by IIT Roorkee alumni.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/blogs",
  },
  openGraph: {
    title: "MBA Preparation Blog & Admissions Insights | MBA Wizards",
    description:
      "Master GMAT Focus, CAT, GRE, and M7/IIM admissions with proven frameworks, test debriefs, and study plans.",
    url: "https://www.mbawizards.co.in/blogs",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Preparation Blog & Admissions Insights | MBA Wizards",
    description:
      "Master GMAT Focus, CAT, GRE, and M7/IIM admissions with proven frameworks, test debriefs, and study plans.",
  },
};

export const blogsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://www.mbawizards.co.in/blogs#blog",
      name: "MBA Wizards Study Hub & Blog",
      description:
        "Expert strategy guides, interview frameworks, exam updates, and score improvement tips for GMAT Focus, GRE, CAT, and top MBA admissions.",
      url: "https://www.mbawizards.co.in/blogs",
      publisher: {
        "@type": "EducationalOrganization",
        name: "MBA Wizards",
        url: "https://www.mbawizards.co.in",
        logo: "https://www.mbawizards.co.in/wp-content/uploads/2025/08/cropped-cropped-Logo.jpg",
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
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What topics are covered in the MBA Wizards blog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Detailed breakdowns of GMAT Focus edition quant and verbal strategies, CAT sectional preparation tactics, GRE score boosting, business school essay tips, interview frameworks, and global MBA admissions guides.",
          },
        },
        {
          "@type": "Question",
          name: "Who writes the MBA Wizards articles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Articles and test debriefs are authored by verified 99th percentile test takers, IIT Roorkee alumni mentors, and senior MBA admissions consultants.",
          },
        },
        {
          "@type": "Question",
          name: "Are GMAT Focus Edition updates covered in the blog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all recent updates regarding GMAT Focus format nuances, scoring algorithms, section ordering tactics, and prep resources are analyzed with data-driven insights.",
          },
        },
        {
          "@type": "Question",
          name: "Can I request profile guidance after reading an article?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, readers can book a complimentary 1-on-1 profile evaluation and strategy consultation with our mentors directly through any article on the site.",
          },
        },
      ],
    },
  ],
};

// Backwards compatibility if any import used generateBlogsSchema
export function generateBlogsSchema() {
  return blogsJsonLd;
}
