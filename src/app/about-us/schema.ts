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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Top MBA Entrance Coaching & Admissions Counseling",
    description:
      "Learn about MBA Wizards, founded in 1995 by IIT Roorkee alumni. Discover our proprietary Ability-Based Model, Manthan Methodology, and track record of 22,400+ students mentored.",
  },
};

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.mbawizards.co.in/about-us#webpage",
      url: "https://www.mbawizards.co.in/about-us",
      name: "About MBA Wizards",
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
        logo: "https://www.mbawizards.co.in/wp-content/uploads/2025/08/cropped-cropped-Logo.jpg",
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
          name: "About Us",
          item: "https://www.mbawizards.co.in/about-us",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who founded MBA Wizards and when?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MBA Wizards was founded in 1995 by Surinder Gupta, an alumnus of IIT Roorkee, with the vision of delivering personalized, ability-based coaching for top management entrance exams.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Manthan Methodology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Manthan Methodology is our proprietary ability-based pedagogy that diagnoses each student's foundational strengths, personalizes learning trajectories, and focuses on high-yield cognitive test strategies rather than rote memorization.",
          },
        },
        {
          "@type": "Question",
          name: "How many students has MBA Wizards mentored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Over the past 28+ years, MBA Wizards has mentored more than 22,400 students, helping them gain admission to prestigious institutions such as IIM Ahmedabad, Bangalore, Calcutta, ISB, Harvard, Stanford, and INSEAD.",
          },
        },
        {
          "@type": "Question",
          name: "What programs does MBA Wizards offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer comprehensive coaching for GMAT Focus Edition, GRE, and CAT, alongside premium end-to-end college consulting, essay editing, resume building, and interview preparation.",
          },
        },
      ],
    },
  ],
};
