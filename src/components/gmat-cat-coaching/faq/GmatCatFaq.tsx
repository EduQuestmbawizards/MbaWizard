import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./GmatCatFaq.module.css";

const gmatCatFaqs: FaqItem[] = [
  {
    question: "Is preparing for both CAT and GMAT realistic alongside a full-time job?",
    answer:
      "Yes, because approximately 70% of the foundational syllabus (Arithmetic, Algebra, Reading Comprehension, and Data Interpretation) is shared. We guide you through a phased roadmap: mastering core topics first, taking CAT in late November, and completing GMAT specific pacing shortly thereafter.",
  },
  {
    question: "Can I use GMAT scores for admissions in top Indian business schools?",
    answer:
      "Yes. The Indian School of Business (ISB), SPJIMR, XLRI (GMP), and the 1-year executive MBA programs at IIM Ahmedabad (PGPX), IIM Bangalore (EPGP), and IIM Calcutta (MBAEx) primarily accept GMAT scores.",
  },
  {
    question: "How does MBA Wizards structure the batch timing for dual aspirants?",
    answer:
      "We offer flexible weekend batches as well as weekday evening live online cohorts, complete with video session archives and on-demand 1-on-1 doubt mentoring sessions.",
  },
];

export default function GmatCatFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={gmatCatFaqs}
        pretitle="Dual Prep FAQs"
        title="Common Queries About"
        titleHighlight="GMAT & CAT Prep"
        subtitle="Answers to help you plan your dual strategy and admissions targets."
      />
    </div>
  );
}
