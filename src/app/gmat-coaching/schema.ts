import type { Metadata } from "next";

export const gmatMetadata: Metadata = {
  title: "Best GMAT Coaching | Expert Preparation Classes | MBA Wizards",
  description:
    "Transform your GMAT scores with MBA Wizards' proven coaching methodology. Expert faculty, personalized training, and guaranteed results for top MBA admissions.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/gmat-coaching",
  },
  openGraph: {
    title: "Best GMAT Coaching | Expert Preparation Classes | MBA Wizards",
    description:
      "Transform your GMAT scores with MBA Wizards' proven coaching methodology. Expert faculty, personalized training, and guaranteed results for top MBA admissions.",
    url: "https://www.mbawizards.co.in/gmat-coaching",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best GMAT Coaching | Expert Preparation Classes | MBA Wizards",
    description:
      "Transform your GMAT scores with MBA Wizards' proven coaching methodology. Expert faculty, personalized training, and guaranteed results for top MBA admissions.",
  },
};

export const gmatJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "GMAT Prep Coaching — Focus Edition",
      description:
        "Comprehensive, ability-based coaching for the GMAT Focus Edition covering Quantitative Reasoning, Verbal Reasoning, and Data Insights with 1-on-1 strategy sessions.",
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
          name: "GMAT Coaching",
          item: "https://www.mbawizards.co.in/gmat-coaching",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best GMAT coaching program and how does MBA Wizards stand out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MBA Wizards utilizes a proprietary Ability-Based Model with small capped batches led by IIT and IIM alumni mentors, delivering personalized analytics and a 95% success rate in achieving 705+ scores.",
          },
        },
        {
          "@type": "Question",
          name: "How much does GMAT coaching cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GMAT coaching at MBA Wizards ranges from ₹35,000 for comprehensive live online programs to ₹75,000 for intensive 1-on-1 mentorship and 700+ guarantee programs, inclusive of all materials and full-length adaptive mocks.",
          },
        },
        {
          "@type": "Question",
          name: "Is online GMAT coaching effective?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our interactive live online sessions feature real-time doubt clearing, high-definition session recordings, AI-driven performance analytics, and continuous mentor access.",
          },
        },
        {
          "@type": "Question",
          name: "How long should I take GMAT coaching?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A duration of 3 to 4 months of structured preparation is recommended for most students. We also offer 15-day crash courses and customized self-paced schedules based on diagnostic performance.",
          },
        },
        {
          "@type": "Question",
          name: "What should I look for in a GMAT coach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for verified 99th percentile faculty, low student-to-mentor ratios, personalized study roadmaps instead of generic lectures, and a demonstrated track record of admits to M7 and top business schools.",
          },
        },
      ],
    },
  ],
};
