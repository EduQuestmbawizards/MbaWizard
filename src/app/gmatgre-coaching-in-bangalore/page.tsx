import type { Metadata } from "next";
import { cityMetadata, cityJsonLd } from "./schema";
import GmatGreBangaloreContent from "./gmatgre-coaching-in-bangalore";

export const metadata: Metadata = cityMetadata;

export default function GmatGreBangalorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <GmatGreBangaloreContent />
    </>
  );
}
