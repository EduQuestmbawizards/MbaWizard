import type { Metadata } from "next";

export const contactMetadata: Metadata = {
  title: "Contact Us | MBA Wizards Coaching & Admissions Centers",
  description:
    "Get in touch with MBA Wizards. Visit our centers in Gurgaon, DLF Phase 4, or call +91-9958041888 for GMAT, GRE, and CAT counseling.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/contact-us",
  },
  openGraph: {
    title: "Contact Us | MBA Wizards Coaching & Admissions Centers",
    description:
      "Get in touch with MBA Wizards. Visit our centers in Gurgaon, DLF Phase 4, or call +91-9958041888 for GMAT, GRE, and CAT counseling.",
    url: "https://www.mbawizards.co.in/contact-us",
    siteName: "MBA Wizards",
    locale: "en_US",
    type: "website",
  },
};

export const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "MBA Wizards",
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
  },
};
