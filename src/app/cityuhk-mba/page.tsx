import type { Metadata } from "next";
import JsonLd from "@/components/shared/json-ld/JsonLd";
import CityUhkMbaPage from "./CityUhkMbaPage";
import { cityUMbaSchema } from "./schema";

export const metadata: Metadata = {
  title: "CityUHK MBA - Explore City University of Hong Kong MBA Programme | MBA Wizards",
  description:
    "Explore CityUHK MBA: Ranked #86 globally & #14 in Asia. Discover programme structure, 1-year accelerated full-time track, STEM-enriched curriculum, FinTech & Accounting concentrations, and Hong Kong admissions.",
  keywords: [
    "CityUHK MBA",
    "City University of Hong Kong MBA",
    "Why CityUHK MBA",
    "Hong Kong MBA",
    "Top Asian MBA",
    "1 year MBA Asia",
    "AACSB EQUIS MBA Hong Kong",
    "CityU College of Business MBA",
    "FinTech MBA Asia",
  ],
  alternates: {
    canonical: "https://www.mbawizards.co.in/cityuhk-mba",
  },
  openGraph: {
    title: "CityUHK MBA - Explore City University of Hong Kong MBA | MBA Wizards",
    description:
      "Explore CityUHK MBA: AACSB & EQUIS accredited, QS #86 global ranking. 1-Year accelerated STEM curriculum in Hong Kong with top ROI.",
    url: "https://www.mbawizards.co.in/cityuhk-mba",
    siteName: "MBA Wizards",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/common/mba-wizards-og-banner.png",
        width: 1200,
        height: 630,
        alt: "CityUHK MBA - City University of Hong Kong Programme Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CityUHK MBA - Explore City University of Hong Kong MBA",
    description:
      "QS #86 Globally, #14 in Asia. 1-Year Accelerated STEM MBA in Hong Kong. Profile assessment & admissions mentorship with MBA Wizards.",
    images: ["/images/common/mba-wizards-og-banner.png"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={cityUMbaSchema} />
      <CityUhkMbaPage />
    </>
  );
}
