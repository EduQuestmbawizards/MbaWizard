import type { Metadata } from "next";
import { privacyMetadata, privacyJsonLd } from "./schema";
import PrivacyPolicyContent from "./privacy-policy";

export const metadata: Metadata = privacyMetadata;

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
      />
      <PrivacyPolicyContent />
    </>
  );
}
