import type { Metadata } from "next";
import { homeMetadata, homeJsonLd } from "./schema";
import HomeContent from "./home";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
