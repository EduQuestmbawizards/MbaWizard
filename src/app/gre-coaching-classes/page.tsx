import type { Metadata } from "next";
import { greMetadata, greJsonLd } from "./schema";
import GreCoachingContent from "./gre-coaching-classes";

export const metadata: Metadata = greMetadata;

export default function GreCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(greJsonLd) }}
      />
      <GreCoachingContent />
    </>
  );
}
