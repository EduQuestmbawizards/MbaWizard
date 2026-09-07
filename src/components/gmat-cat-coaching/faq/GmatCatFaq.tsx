import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./GmatCatFaq.module.css";

const gmatCatFaqs: FaqItem[] = [
  {
    question: "Is preparing for both CAT and GMAT realistic alongside a full-time job?",
    answer:
      "Yes, because approximately 75% of the foundational syllabus (Arithmetic, Algebra, Reading Comprehension, and Data Interpretation) is shared. MBA Wizards & EduQuest guide you through a phased roadmap: mastering core mathematical and verbal reasoning first, taking CAT in late November, and completing GMAT-specific Data Insights pacing shortly thereafter.",
  },
  {
    question: "Can I use GMAT scores for admissions in top Indian business schools?",
    answer:
      "Yes. The Indian School of Business (ISB), SPJIMR, XLRI (GMP), and the premier 1-year MBA programs at IIM Ahmedabad (PGPX), IIM Bangalore (EPGP), and IIM Calcutta (MBAEx) accept GMAT scores. Preparing for both gives you shots at both 2-year IIM programs and 1-year executive programs.",
  },
  {
    question: "How does MBA Wizards structure batch timing for working professionals?",
    answer:
      "We offer dedicated Saturday-Sunday weekend batches as well as weekday evening live online cohorts capped at 10–15 students. All sessions include 24/7 video recordings, adaptive analytics dashboards, and on-demand 1-on-1 doubt mentoring sessions with IIT Roorkee alumni faculty.",
  },
  {
    question: "What is the fee advantage of enrolling in MBA Wizards' dual GMAT+CAT program?",
    answer:
      "Our integrated dual preparation package saves over ₹15,000 compared to enrolling in individual courses. It includes comprehensive study kits for both exams, full-length official mock series, AI-driven performance tracking, and complete WAT-PI and interview preparation until your final admission.",
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
        subtitle="Answers to help you plan your dual strategy and admissions targets with MBA Wizards & EduQuest."
      />
    </div>
  );
}
