import type { Metadata } from "next";

export const corporateMetadata: Metadata = {
  title: "Corporate Training & Campus Placement Preparation | MBA Wizards",
  description:
    "Comprehensive corporate training, campus placement aptitude modules, and TCS-iON CCQT preparation by MBA Wizards. University partnerships and executive coaching.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/corporate-training",
  },
  openGraph: {
    title: "Corporate Training & Campus Placement Preparation | MBA Wizards",
    description:
      "Comprehensive corporate training, campus placement aptitude modules, and TCS-iON CCQT preparation by MBA Wizards. University partnerships and executive coaching.",
    url: "https://www.mbawizards.co.in/corporate-training",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Training & Campus Placement Preparation | MBA Wizards",
    description:
      "Comprehensive corporate training, campus placement aptitude modules, and TCS-iON CCQT preparation by MBA Wizards. University partnerships and executive coaching.",
  },
};

export const corporateJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Corporate Training & Campus Placement Preparation",
      description:
        "Institutional placement training and corporate qualification courses covering aptitude, GDs, technical and HR interviews, and TCS-iON CCQT.",
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
          name: "Corporate Training",
          item: "https://www.mbawizards.co.in/corporate-training",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What corporate training modules does MBA Wizards deliver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide comprehensive modules in quantitative reasoning, logical aptitude, verbal business communication, group discussion techniques, case interviews, and TCS-iON CCQT preparation.",
          },
        },
        {
          "@type": "Question",
          name: "Can programs be customized for universities and institutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we collaborate directly with colleges and engineering universities to design semester-long or bootcamp placement acceleration modules based on past recruiter hiring patterns.",
          },
        },
        {
          "@type": "Question",
          name: "Who conducts the corporate training sessions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sessions are delivered by seasoned industry professionals, IIT and IIM alumni, and corporate communication specialists with extensive campus placement experience.",
          },
        },
        {
          "@type": "Question",
          name: "How are batch progress and results measured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use diagnostic benchmarks, simulated recruitment aptitude assessments, timed test analytics, and personalized feedback reports for institutional placement cells.",
          },
        },
      ],
    },
  ],
};
