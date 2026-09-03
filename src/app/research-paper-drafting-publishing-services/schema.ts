import type { Metadata } from "next";

export const researchMetadata: Metadata = {
  title: "Research Paper Drafting & Publishing Services for Students — MBA Wizards",
  description:
    "Expert mentorship for high school & middle school students to draft, edit, and publish original research papers in indexed journals. Enhance your Ivy League profile.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/research-paper-drafting-publishing-services",
  },
  openGraph: {
    title: "Research Paper Drafting & Publishing Services for Students — MBA Wizards",
    description:
      "Expert mentorship for high school & middle school students to draft, edit, and publish original research papers in indexed journals. Enhance your Ivy League profile.",
    url: "https://www.mbawizards.co.in/research-paper-drafting-publishing-services",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const researchJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Research Paper Drafting & Publishing Mentorship",
      description:
        "Scholarly research mentoring service guiding students through topic selection, literature review, drafting, editing, and journal publication.",
      provider: {
        "@type": "Organization",
        name: "MBA Wizards",
        sameAs: "https://www.mbawizards.co.in",
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
          name: "Research Paper Services",
          item: "https://www.mbawizards.co.in/research-paper-drafting-publishing-services",
        },
      ],
    },
  ],
};
