import type { Metadata } from "next";

export const contactMetadata: Metadata = {
  title: "Contact Us | MBA Wizards Coaching & Admissions Centers",
  description:
    "Get in touch with MBA Wizards. Visit our centers in Galleria DLF Phase 4 & South City 2 Gurgaon, or call +91-9958041888 for expert GMAT, GRE & CAT counseling.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/contact-us",
  },
  openGraph: {
    title: "Contact Us | MBA Wizards Coaching & Admissions Centers",
    description:
      "Get in touch with MBA Wizards. Visit our centers in Galleria DLF Phase 4 & South City 2 Gurgaon, or call +91-9958041888 for expert GMAT, GRE & CAT counseling.",
    url: "https://www.mbawizards.co.in/contact-us",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | MBA Wizards Coaching & Admissions Centers",
    description:
      "Get in touch with MBA Wizards. Visit our centers in Galleria DLF Phase 4 & South City 2 Gurgaon, or call +91-9958041888 for expert GMAT, GRE & CAT counseling.",
  },
};

export const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.mbawizards.co.in/contact-us#webpage",
      url: "https://www.mbawizards.co.in/contact-us",
      name: "Contact MBA Wizards",
      description: "Connect with MBA Wizards test prep and admissions consulting experts.",
      mainEntity: {
        "@type": "EducationalOrganization",
        name: "MBA Wizards",
        url: "https://www.mbawizards.co.in",
        logo: "https://www.mbawizards.co.in/wp-content/uploads/2025/08/cropped-cropped-Logo.jpg",
        telephone: "+91-9958041888",
        email: "info@mbawizards.co.in",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "20:00",
          },
        ],
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
          name: "Contact Us",
          item: "https://www.mbawizards.co.in/contact-us",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where are the MBA Wizards centers located in Gurgaon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MBA Wizards operates two premier centers in Gurgaon: Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4 (Sector 28), and F-45, South City 2, Sector 50.",
          },
        },
        {
          "@type": "Question",
          name: "What are the center operating hours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our centers are open Monday through Sunday from 9:00 AM to 8:00 PM. In-person counseling and diagnostic testing sessions can be scheduled seven days a week.",
          },
        },
        {
          "@type": "Question",
          name: "How can I book a free counseling or diagnostic session?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can call or WhatsApp us at +91-9958041888, email info@mbawizards.co.in, or submit the contact form on this page to schedule an immediate consultation.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer online counseling for students outside Gurgaon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we conduct comprehensive 1-on-1 virtual counseling, diagnostic evaluations, and live classes for students across India and internationally via Zoom/Google Meet.",
          },
        },
      ],
    },
  ],
};
