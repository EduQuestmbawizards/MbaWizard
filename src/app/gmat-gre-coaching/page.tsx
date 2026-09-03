import type { Metadata } from "next";
import { gmatGreMetadata, gmatGreJsonLd } from "./schema";
import GmatGreCoachingContent from "./gmat-gre-coaching";

export const metadata: Metadata = gmatGreMetadata;

export default function GmatGreCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gmatGreJsonLd) }}
      />
      <GmatGreCoachingContent />
    </>
  );
}
