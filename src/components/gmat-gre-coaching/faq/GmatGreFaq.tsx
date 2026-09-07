import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./GmatGreFaq.module.css";

const gmatGreFaqs: FaqItem[] = [
  {
    question: "Can I prepare for both GMAT and GRE simultaneously without getting overwhelmed?",
    answer:
      "Yes. Because 75–80% of math foundations and reading logic overlap, MBA Wizards & EduQuest teach the core quantitative and analytical fundamentals jointly. You then transition into dedicated weekend clinics for GRE vocabulary mnemonics and GMAT Data Insights multi-source reasoning.",
  },
  {
    question: "Which test should I take first if preparing for both?",
    answer:
      "Most students benefit from taking the GMAT Focus first to master rigorous argument deconstruction and advanced quant reasoning. Transitioning to the GRE afterward takes only 2–3 weeks of targeted Text Completion drills and pacing practice with our faculty.",
  },
  {
    question: "Are both test prep materials provided in the dual coaching package?",
    answer:
      "Yes. You receive full access to both MBA Wizards' proprietary GMAT Focus question banks and comprehensive GRE vocabulary flashcards, sectional test series, AI analytics dashboards, and unlimited 1-on-1 doubt marathons with IIT Roorkee alumni.",
  },
  {
    question: "How does having both scores enhance my global university applications?",
    answer:
      "Holding both competitive scores gives you maximum leverage when applying to top dual-degree programs (such as Harvard MS/MBA, Stanford MBA/MS in Computer Science, and MIT Sloan LGO), allowing you to submit the exact score profile each specific department prefers.",
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
        subtitle="Clarify your study strategy, exam order, and timeline before getting started with MBA Wizards & EduQuest."
      />
    </div>
  );
}
