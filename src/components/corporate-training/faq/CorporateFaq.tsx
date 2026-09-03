import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./CorporateFaq.module.css";

const corporateFaqs: FaqItem[] = [
  {
    question: "Do you offer tailored placement prep programs for colleges & universities?",
    answer:
      "Yes. We partner directly with university placement cells to deliver customized 30 to 60-hour campus readiness modules covering quantitative aptitude, business reasoning, resume writing, and live mock interview panels.",
  },
  {
    question: "How does MBA Wizards train students for the TCS iON CCQT?",
    answer:
      "Our curriculum includes dedicated proctored online mock simulations, speed math shortcuts, automated grammar diagnostics, and video response critique workshops aligning with both Stage 1 and Stage 2 test parameters.",
  },
  {
    question: "Can individual working professionals enroll for corporate readiness coaching?",
    answer:
      "Yes. We offer 1-on-1 executive communication coaching, career transition mentorship, and senior management case study interview prep for working professionals aiming for top consulting and tech firms.",
  },
  {
    question: "Are mock interview panel sessions recorded for feedback?",
    answer:
      "Yes. All behavioral and domain mock interviews are recorded with time-stamped mentor commentary, giving students clear actionable insights on verbal pacing, posture, and answer structure.",
  },
];

export default function CorporateFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={corporateFaqs}
        pretitle="Training FAQs"
        title="Frequently Asked"
        titleHighlight="Corporate Training Questions"
        subtitle="Key details about our university campus partnerships, TCS-iON training, and interview clinics."
      />
    </div>
  );
}
