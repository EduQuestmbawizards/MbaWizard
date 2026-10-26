import type { Metadata } from "next";
import CareerIntelligencePage from "./CareerIntelligencePage";

export const metadata: Metadata = {
  title: "Graduate Admissions & Career Intelligence Platform | MBA Wizards",
  description:
    "AI-Powered MBA and Master's admissions strategy platform. Diagnostic evaluation, GMAT vs CAT vs GRE exam decision engine, course prescription, university matching, and milestone execution roadmap.",
  alternates: {
    canonical: "/career-intelligence",
  },
  openGraph: {
    title: "Graduate Admissions & Career Intelligence Platform | MBA Wizards",
    description:
      "Personalized course recommendations, GMAT vs CAT vs GRE diagnostic decisioning, and elite business school roadmaps engineered for MBA and Master’s candidates.",
    url: "https://www.mbawizards.co.in/career-intelligence",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/career-intelligence/platform-pillars-header.png",
        width: 1200,
        height: 630,
        alt: "Graduate Admissions & Career Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graduate Admissions & Career Intelligence Platform | MBA Wizards",
    description:
      "AI-Powered MBA & Master's Admissions Strategy Platform. Diagnostic evaluation, GMAT vs CAT vs GRE decision engine, and university matching.",
    images: ["/images/career-intelligence/platform-pillars-header.png"],
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Graduate Admissions & Career Intelligence Platform",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
      },
      "url": "https://carrer.analysis.ai.mbawizards.co.in/",
      "author": {
        "@type": "Organization",
        "name": "MBA Wizards",
        "url": "https://www.mbawizards.co.in",
      },
      "description":
        "Personalized course recommendations, GMAT vs CAT vs GRE diagnostic decisioning, and elite business school roadmaps engineered for MBA and Master’s candidates.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.mbawizards.co.in/career-intelligence#webpage",
      "url": "https://www.mbawizards.co.in/career-intelligence",
      "name": "Graduate Admissions & Career Intelligence Platform | MBA Wizards",
      "description":
        "AI-Powered MBA and Master's admissions strategy platform. Diagnostic evaluation, GMAT vs CAT vs GRE exam decision engine, course prescription, and university matching.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mbawizards.co.in",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Career Intelligence Platform",
            "item": "https://www.mbawizards.co.in/career-intelligence",
          },
        ],
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <CareerIntelligencePage />
    </>
  );
}
