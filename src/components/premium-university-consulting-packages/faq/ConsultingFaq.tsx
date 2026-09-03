import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./ConsultingFaq.module.css";

const consultingFaqs: FaqItem[] = [
  {
    question: "When should I begin working on my business school applications?",
    answer:
      "Ideally, candidates begin 4 to 6 months before the Round 1 deadline (April/May for September deadlines). This allows unhurried profile enhancement, meaningful recommender coordination, and 4–5 rounds of essay refinement.",
  },
  {
    question: "How many universities do students typically apply to?",
    answer:
      "Most candidates target 4 to 6 universities across Dream, Target, and Safe categories (Tiers 3 to 5) to maximize their chances of receiving multiple admits with scholarship awards.",
  },
  {
    question: "Who will actually review my essays and conduct my mock interviews?",
    answer:
      "All consulting is spearheaded by former M7/European B-school alumni and senior admissions editors. You are paired with a dedicated lead mentor throughout the entire cycle.",
  },
  {
    question: "Do you also help with scholarship applications and negotiation?",
    answer:
      "Yes. We identify school-specific fellowship programs, assist in writing scholarship justification essays, and guide you on post-admit scholarship negotiation tactics.",
  },
];

export default function ConsultingFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={consultingFaqs}
        pretitle="Admissions Insights"
        title="Frequently Asked"
        titleHighlight="Consulting Questions"
        subtitle="Key questions about university selection, timelines, mentor pairing, and scholarship guidance."
      />
    </div>
  );
}
