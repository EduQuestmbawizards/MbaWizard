import type { Metadata } from "next";
import { consultingMetadata, consultingJsonLd } from "./schema";
import PremiumUniversityConsultingContent from "./premium-university-consulting-packages";

export const metadata: Metadata = consultingMetadata;

export default function PremiumUniversityConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingJsonLd) }}
      />
      <PremiumUniversityConsultingContent />
    </>
  );
}
