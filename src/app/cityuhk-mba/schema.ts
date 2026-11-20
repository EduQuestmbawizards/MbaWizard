import { CITYU_FAQ, CITYU_MBA_CONFIG } from "@/data/cityu-mba-data";

export const cityUMbaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollegeOrUniversity",
      "@id": "https://www.cityu.edu.hk/#organization",
      name: "City University of Hong Kong",
      alternateName: ["CityUHK", "CityU Hong Kong", "City University of HK College of Business"],
      url: "https://www.cityu.edu.hk/",
      logo: "https://mba.cb.cityu.edu.hk/en/images/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tat Chee Avenue",
        addressLocality: "Kowloon Tong",
        addressRegion: "Kowloon",
        addressCountry: "HK",
      },
      sameAs: [
        "https://mba.cb.cityu.edu.hk/en/about-us/why-cityuhk-mba",
        "https://www.linkedin.com/school/city-university-of-hong-kong-college-of-business/",
        "https://www.youtube.com/@CityUHongKong",
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      "@id": "https://www.mbawizards.co.in/cityuhk-mba#program",
      name: "CityUHK Master of Business Administration (MBA)",
      description:
        "Accelerated 1-Year STEM-enriched MBA programme at City University of Hong Kong College of Business. AACSB & EQUIS accredited, QS #86 globally and #14 in Asia with specialisations in FinTech, Accounting, and Business Analytics.",
      provider: {
        "@id": "https://www.cityu.edu.hk/#organization",
      },
      educationalProgramMode: "Full-Time or Part-Time",
      timeToComplete: "P1Y",
      occupationalCategory: "Executive Management, Investment Banking, FinTech Leadership, Strategy Consulting",
      programPrerequisites: [
        "Recognised Bachelor's degree",
        "Minimum 2 years of post-qualification professional experience",
        "Competitive GMAT / GRE score or holistic managerial assessment",
        "English proficiency (TOEFL/IELTS if required)",
      ],
      offers: {
        "@type": "Offer",
        category: "Tuition Fee & Scholarships Available",
        url: CITYU_MBA_CONFIG.officialUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.mbawizards.co.in/cityuhk-mba#breadcrumb",
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
          name: "Global MBA Hub",
          item: "https://www.mbawizards.co.in/premium-university-consulting-packages",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "CityUHK MBA",
          item: "https://www.mbawizards.co.in/cityuhk-mba",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.mbawizards.co.in/cityuhk-mba#faq",
      mainEntity: CITYU_FAQ.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};
