import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./CatFaq.module.css";

const catFaqs: FaqItem[] = [
  {
    question: "When should I begin CAT 2025/2026 preparation with MBA Wizards?",
    answer:
      "Most serious aspirants start between 8 to 12 months prior to the exam (typically starting January–March for the November test). This allows 5 months of comprehensive concept building, followed by 3 months of mock marathons and DILR caselet mastery.",
  },
  {
    question: "What is the Manthan Methodology used by MBA Wizards for CAT?",
    answer:
      "The Manthan Methodology is an ability-based model founded by IIT Roorkee alumni. It identifies individual baseline strengths across QA, VARC, and DILR, pacing your sessions to eliminate negative marking and build time-efficient shortcut frameworks.",
  },
  {
    question: "Does MBA Wizards offer non-engineer math workshops for CAT?",
    answer:
      "Yes. We conduct dedicated 'Quant Foundation' bridge modules specifically for commerce, humanities, and medical background students to build strong mental math, algebra, and geometry fundamentals before advanced level testing.",
  },
  {
    question: "Are GD/PI and WAT (Written Ability Test) preparation included?",
    answer:
      "Yes. Once CAT scores are announced, students receive complete WAT-GD-PI mentorship, mock interview panels with IIM alumni, and SOP drafting assistance for premier business schools.",
  },
];

export default function CatFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={catFaqs}
        pretitle="CAT Preparation FAQs"
        title="Frequently Asked"
        titleHighlight="CAT Questions"
        subtitle="Common questions regarding CAT test preparation timelines, non-engineer quant, and IIM interview guidance."
      />
    </div>
  );
}
