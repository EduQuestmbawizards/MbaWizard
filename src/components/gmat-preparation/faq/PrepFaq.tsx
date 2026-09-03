import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./PrepFaq.module.css";

const prepFaqs: FaqItem[] = [
  {
    question: "How long does a student typically need to prepare for GMAT?",
    answer:
      "On average, students need 2.5 to 3.5 months with 10–12 hours of weekly study. We offer accelerated 6-week fast-track bootcamps as well as comprehensive 4-month weekend tracks.",
  },
  {
    question: "What happens if I miss a scheduled class session?",
    answer:
      "All live sessions are recorded in HD and available in your student portal. Additionally, you can attend repeat live classes or makeup doubt clinics with instructors at no added charge.",
  },
  {
    question: "Is GMAT Focus Edition different in scoring from the classic GMAT?",
    answer:
      "Yes. The GMAT Focus Edition is scored on a 205–805 scale. A score of 655 roughly corresponds to the old 710 (93rd percentile), and 705 corresponds to the classic 760 (99th percentile). Our curriculum is 100% updated for Focus Edition algorithms.",
  },
  {
    question: "Does MBA Wizards offer study material and official practice books?",
    answer:
      "Yes. Enrolled students receive curated modular study workbooks, official guide question banks, sectional diagnostics, and full access to our 50,000+ question portal.",
  },
];

export default function PrepFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={prepFaqs}
        pretitle="Preparation FAQs"
        title="Frequently Asked"
        titleHighlight="Preparation Questions"
        subtitle="Common questions about batch formats, study duration, missed classes, and official course materials."
      />
    </div>
  );
}
