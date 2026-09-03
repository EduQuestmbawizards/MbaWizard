import type { Metadata } from "next";
import { gmatMetadata, gmatJsonLd } from "./schema";
import GmatCoachingContent from "./gmat-coaching";

export const metadata: Metadata = gmatMetadata;

export default function GmatCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gmatJsonLd) }}
      />
      <GmatCoachingContent />
    </>
  );
}
