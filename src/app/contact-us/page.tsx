import type { Metadata } from "next";
import { contactMetadata, contactJsonLd } from "./schema";
import ContactUsContent from "./contact-us";

export const metadata: Metadata = contactMetadata;

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactUsContent />
    </>
  );
}
