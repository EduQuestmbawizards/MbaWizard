import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatBangaloreContent from "./gmat-coaching-in-bangalore";

export const metadata: Metadata = cityMetadata;

export default function GmatBangalorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatBangaloreContent />
    </>
  );
}
