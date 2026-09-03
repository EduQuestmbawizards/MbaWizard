import type { Metadata } from "next";

export const aboutMetadata: Metadata = {
  title: "About Us | Top MBA Entrance Coaching & Admissions Counseling",
  description:
    "Learn about MBA Wizards, founded in 1995 by IIT Roorkee alumni. Discover our proprietary Ability-Based Model, Manthan Methodology, and track record of 22,400+ students mentored.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/about-us",
  },
  openGraph: {
    title: "About Us | Top MBA Entrance Coaching & Admissions Counseling",
    description:
      "Learn about MBA Wizards, founded in 1995 by IIT Roorkee alumni. Discover our proprietary Ability-Based Model, Manthan Methodology, and track record of 22,400+ students mentored.",
    url: "https://www.mbawizards.co.in/about-us",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "MBA Wizards",
    foundingDate: "1995",
    founder: {
      "@type": "Person",
      name: "Surinder Gupta",
      alumniOf: "IIT Roorkee",
    },
    description:
      "Personalized GMAT, GRE, and CAT Coaching and Global MBA Admissions Consulting with Ability-Based Modeling.",
    url: "https://www.mbawizards.co.in",
  },
};
