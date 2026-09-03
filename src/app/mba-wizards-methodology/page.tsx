import type { Metadata } from "next";
import { methodologyMetadata, methodologyJsonLd } from "./schema";
import MethodologyContent from "./mba-wizards-methodology";

export const metadata: Metadata = methodologyMetadata;

export default function MethodologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }}
      />
      <MethodologyContent />
    </>
  );
}
