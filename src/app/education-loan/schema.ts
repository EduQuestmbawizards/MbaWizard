import type { Metadata } from "next";

export const loanMetadata: Metadata = {
  title: "Education Loans for Study Abroad | Compare SBI, HDFC Credila, MPower — MBA Wizards",
  description:
    "Fast approval education loans for international MBA and Master's programs in USA, UK, Canada & Europe. Secured and unsecured loans from top public and private banks.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/education-loan",
  },
  openGraph: {
    title: "Education Loans for Study Abroad | Compare SBI, HDFC Credila, MPower — MBA Wizards",
    description:
      "Fast approval education loans for international MBA and Master's programs in USA, UK, Canada & Europe. Secured and unsecured loans from top public and private banks.",
    url: "https://www.mbawizards.co.in/education-loan",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Loans for Study Abroad | Compare SBI, HDFC Credila, MPower — MBA Wizards",
    description:
      "Fast approval education loans for international MBA and Master's programs in USA, UK, Canada & Europe. Secured and unsecured loans from top public and private banks.",
  },
};

export const loanJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialProduct",
      name: "Study Abroad Education Loan Advisory",
      description:
        "End-to-end education loan assistance and lender matching for Indian students pursuing overseas higher education.",
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
          name: "Education Loan",
          item: "https://www.mbawizards.co.in/education-loan",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of education loans are available for studying abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students can access both secured education loans (backed by collateral like residential property or fixed deposits with lower interest rates) and unsecured non-collateral loans (from NBFCs like HDFC Credila, Avanse, and international lenders like MPower and Prodigy Finance).",
          },
        },
        {
          "@type": "Question",
          name: "Can I get an education loan without collateral for top business schools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, top global business schools (US top-25, European elite programs) qualify for non-collateral, no-cosigner education loans through lenders like Prodigy Finance and MPower Financing.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are required to apply for a study abroad education loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key documents include the university admission letter, estimated cost of attendance, applicant academic records (10th, 12th, graduation transcripts), standardized test scorecards (GMAT/GRE), KYC documents, and co-applicant income proof.",
          },
        },
        {
          "@type": "Question",
          name: "How does MBA Wizards assist with education loans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MBA Wizards partners with leading banks and NBFCs to provide free loan advisory, comparing interest rates, processing fees, and sanctioning timelines to expedite your visa financial documentation.",
          },
        },
      ],
    },
  ],
};
