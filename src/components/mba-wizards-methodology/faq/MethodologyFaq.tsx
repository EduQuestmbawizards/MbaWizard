import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./MethodologyFaq.module.css";

const methodologyFaqs: FaqItem[] = [
  {
    question: "How is the Manthan Methodology different from traditional coaching?",
    answer:
      "Traditional coaching follows a rigid, one-size-fits-all syllabus. The Manthan Methodology begins with EQ/IQ self-assessment, creates an individualized student code, and dynamically adapts difficulty, practice problem sets, and review clinics to your personal learning curve.",
  },
  {
    question: "What is the Litmus Test?",
    answer:
      "The Litmus Test is a proprietary diagnostic tool designed to uncover micro-gaps in fundamental reasoning and conceptual application rather than just tallying correct and incorrect answers.",
  },
  {
    question: "Can I generate custom practice tests by topic and difficulty?",
    answer:
      "Yes. Students have access to our 50,000+ question bank and can configure on-demand custom drills selecting specific sub-topics, timing restrictions, and difficulty tiers.",
  },
  {
    question: "Is the Manthan Methodology effective for students weak in math?",
    answer:
      "Absolutely. Our foundational bridge modules break down complex math into logical, intuitive steps and mental estimation techniques, eliminating math anxiety before tackling advanced GMAT/CAT problems.",
  },
];

export default function MethodologyFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={methodologyFaqs}
        pretitle="Pedagogy Questions"
        title="Frequently Asked"
        titleHighlight="Methodology Questions"
        subtitle="Understand how our scientific coaching framework delivers consistent 700+ outcomes."
      />
    </div>
  );
}
