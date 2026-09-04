import type { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Personalized GMAT, GRE & CAT Coaching for Top MBA Admissions",
  description:
    "Achieve your MBA dream with MBA Wizards. Expert coaching for GMAT, GRE, CAT, and admissions counseling. Personalized study plans, AI-based analytics, and proven success for Indian aspirants.",
  alternates: {
    canonical: "https://www.mbawizards.co.in",
  },
  openGraph: {
    title: "Personalized GMAT, GRE & CAT Coaching for Top MBA Admissions",
    description:
      "Achieve your MBA dream with MBA Wizards. Expert coaching for GMAT, GRE, CAT, and admissions counseling. Personalized study plans, AI-based analytics, and proven success for Indian aspirants.",
    url: "https://www.mbawizards.co.in",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personalized GMAT, GRE & CAT Coaching for Top MBA Admissions",
    description:
      "Achieve your MBA dream with MBA Wizards. Expert coaching for GMAT, GRE, CAT, and admissions counseling. Personalized study plans, AI-based analytics, and proven success for Indian aspirants.",
  },
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.mbawizards.co.in/#organization",
      name: "MBA Wizards",
      url: "https://www.mbawizards.co.in",
      logo: "https://www.mbawizards.co.in/wp-content/uploads/2025/08/cropped-cropped-Logo.jpg",
      description:
        "Achieve your dream MBA with MBA Wizards. Expert coaching for GMAT, GRE, CAT, and admissions counseling. Personalized study plans, AI-based analytics, and proven success for Indian aspirants.",
      telephone: "+91-9958041888",
      email: "info@mbawizards.co.in",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "F-45, South City 2, Sector-50",
          addressLocality: "Gurgaon",
          addressRegion: "Haryana",
          postalCode: "122018",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Office No. 1212 and 1212A, Galleria Boulevard, DLF Phase 4, Sector 28",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122001",
          addressCountry: "IN",
        },
      ],
      sameAs: [
        "https://www.facebook.com/mbawizardsgurgaon/",
        "https://www.youtube.com/@gmatcoachingcatcoachingmba8637",
        "https://in.linkedin.com/company/mba-wizards",
        "https://www.instagram.com/mbawizards/?hl=en",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mbawizards.co.in/#website",
      url: "https://www.mbawizards.co.in",
      name: "MBA Wizards",
      publisher: {
        "@id": "https://www.mbawizards.co.in/#organization",
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
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is GMAT or GRE better for MBA abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both GMAT and GRE are widely accepted by business schools globally. GMAT is specifically designed for business schools and tends to have a slight edge for top finance and consulting programs, while GRE offers greater flexibility if you are considering non-business master's degrees.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get MBA admission with a low GMAT score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, admissions committees evaluate candidates holistically. A strong professional background, impactful essays, leadership evidence, and stellar recommendations can compensate for an average GMAT score.",
          },
        },
        {
          "@type": "Question",
          name: "Is CAT enough for MBA abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CAT is exclusively accepted by Indian business schools such as IIMs, FMS, and XLRI. For international MBA programs in the US, Europe, and Asia, you must submit a valid GMAT or GRE score.",
          },
        },
        {
          "@type": "Question",
          name: "When should I start MBA applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should ideally begin preparation 12 to 18 months before your intended intake. This allows ample time for GMAT/GRE prep, school shortlisting, essay writing, and securing recommendations before Round 1 or Round 2 deadlines.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between an SOP and an MBA essay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An SOP is a comprehensive statement covering your academic background, career trajectory, and future goals, whereas MBA essays are highly targeted responses to specific prompts regarding leadership, failure, teamwork, or contribution to the community.",
          },
        },
        {
          "@type": "Question",
          name: "How much can I save through MBA scholarships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Competitive applicants with high GMAT/GRE scores and exceptional profiles can secure merit-based scholarships covering 20% to 80%, and sometimes up to 100%, of tuition costs.",
          },
        },
        {
          "@type": "Question",
          name: "Does MBA Wizards offer only MBA consulting or also GMAT/GRE/CAT coaching?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MBA Wizards provides an integrated end-to-end ecosystem: top-tier test prep for GMAT, GRE, and CAT alongside comprehensive admissions consulting, essay editing, and interview preparation.",
          },
        },
      ],
    },
  ],
};
