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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Paper Drafting & Publishing Services for Students — MBA Wizards",
    description:
      "Expert mentorship for high school & middle school students to draft, edit, and publish original research papers in indexed journals. Enhance your Ivy League profile.",
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why should students publish research papers before applying abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Publishing peer-reviewed research demonstrates intellectual curiosity, academic rigor, and specialized subject mastery, significantly strengthening applications to Ivy League and top global universities.",
          },
        },
        {
          "@type": "Question",
          name: "What does the research paper mentorship program entail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our mentors guide students 1-on-1 through topic ideation, literature review, methodology design, data collection and analysis, manuscript drafting, and submission to peer-reviewed indexed journals.",
          },
        },
        {
          "@type": "Question",
          name: "Who mentors the students in this program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students are guided by PhD researchers, IIT and IIM alumni, and published academic scholars across economics, computer science, public policy, and business disciplines.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to draft and publish a paper?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A typical research paper mentorship spans 8 to 16 weeks, depending on the research scope, topic complexity, and targeted journal review cycles.",
          },
        },
      ],
    },
  ],
};
