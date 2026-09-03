import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./GmatGreFaq.module.css";

const gmatGreFaqs: FaqItem[] = [
  {
    question: "Can I prepare for both GMAT and GRE simultaneously without getting overwhelmed?",
    answer:
      "Yes. Because 75–80% of math foundations and reading logic overlap, we teach the core fundamentals jointly. You then split into specialized modules for GRE vocabulary drills or GMAT Data Insights logic in the final 4 weeks.",
  },
  {
    question: "Which test should I take first if preparing for both?",
    answer:
      "Most students find it beneficial to tackle the GMAT Focus first to master rigorous argument deconstruction and advanced quant reasoning. Transitioning to the GRE afterward takes only 2–3 weeks to master GRE vocabulary mnemonics and test pacing.",
  },
  {
    question: "Are both test prep materials provided in the dual coaching package?",
    answer:
      "Yes. You receive full access to both MBA Wizards GMAT Focus edition question banks and comprehensive GRE vocabulary flashcards, mock tests, and faculty doubt marathons.",
  },
];

export default function GmatGreFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={gmatGreFaqs}
        pretitle="Dual Prep FAQs"
        title="Common Questions About"
        titleHighlight="Dual GMAT & GRE Prep"
        subtitle="Clarify your study strategy, exam order, and timeline before getting started."
      />
    </div>
  );
}
