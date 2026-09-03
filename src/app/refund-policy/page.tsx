import type { Metadata } from "next";
import { refundMetadata, refundJsonLd } from "./schema";
import RefundPolicyContent from "./refund-policy";

export const metadata: Metadata = refundMetadata;

export default function RefundPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(refundJsonLd) }}
      />
      <RefundPolicyContent />
    </>
  );
}
