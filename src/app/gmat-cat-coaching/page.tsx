import type { Metadata } from "next";
import { gmatCatMetadata, gmatCatJsonLd } from "./schema";
import GmatCatCoachingContent from "./gmat-cat-coaching";

export const metadata: Metadata = gmatCatMetadata;

export default function GmatCatCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gmatCatJsonLd) }}
      />
      <GmatCatCoachingContent />
    </>
  );
}
