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
    locale: "en_US",
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
  ],
};
