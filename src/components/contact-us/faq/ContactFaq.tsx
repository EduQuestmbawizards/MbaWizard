import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./ContactFaq.module.css";

const contactFaqs: FaqItem[] = [
  {
    question: "What should I expect during my Free Trial Demo session?",
    answer:
      "Your free trial demo includes a comprehensive 1-on-1 profile evaluation with our senior faculty, an overview of our ability-based Manthan methodology, inspection of official question banks, and an honest diagnostic appraisal of your score potential.",
  },
  {
    question: "How do I schedule an in-person visit to your Gurgaon centers?",
    answer:
      "You can visit our flagship centers at DLF Phase 4 (Galleria Boulevard) or Sector 50 (South City 2) between 10:00 AM and 7:00 PM Monday through Sunday. We recommend calling us at +91-9958041888 or submitting the contact form to reserve dedicated faculty time.",
  },
  {
    question: "Can I take a diagnostic evaluation online if I don't live in Gurgaon?",
    answer:
      "Yes. Over 50% of our students prepare online from cities like Mumbai, Bangalore, Pune, Hyderabad, and overseas. We conduct live digital 1-on-1 diagnostic sessions via Google Meet / Zoom with full screen sharing and performance analytics.",
  },
  {
    question: "How quickly will an academic mentor get back to me after I submit an inquiry?",
    answer:
      "Our counseling desk responds within 15 to 30 minutes during normal operating hours. For immediate assistance, you can click the official WhatsApp button on our website to chat directly with our admissions counselor.",
  },
];

export default function ContactFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={contactFaqs}
        pretitle="Have Questions?"
        title="Contact & Admissions"
        titleHighlight="FAQs"
        subtitle="Quick answers about center visits, demo bookings, online diagnostic tests, and counselor response times."
      />
    </div>
  );
}
