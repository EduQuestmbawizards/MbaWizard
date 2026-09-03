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
    locale: "en_US",
    type: "website",
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
  ],
};
