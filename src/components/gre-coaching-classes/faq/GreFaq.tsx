import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./GreFaq.module.css";

const greFaqs: FaqItem[] = [
  {
    question: "Do top business schools prefer GMAT over GRE?",
    answer:
      "No. Over 1,300 business schools worldwide, including Harvard, Stanford, Wharton, INSEAD, LBS, and ISB, have stated explicitly that they evaluate GMAT and GRE scores with zero preference. Choose the test that best showcases your individual strengths.",
  },
  {
    question: "How long is the new shorter GRE test?",
    answer:
      "The ETS shorter GRE takes approximately 1 hour and 58 minutes. It contains 27 Quantitative questions (47 mins), 27 Verbal questions (41 mins), and one Analytical Writing essay (30 mins). There is no longer an unscored experimental section.",
  },
  {
    question: "What GRE score is considered competitive for top MBA programs?",
    answer:
      "For top 20 global MBA programs, a score of 325+ (with 165+ in Quantitative and 160+ in Verbal) is generally competitive. Our students consistently achieve 320–335+ with our targeted vocabulary and mental math shortcuts.",
  },
  {
    question: "How does MBA Wizards teach GRE vocabulary without rote memorization?",
    answer:
      "We use contextual grouping, etymology root-word decoding, mnemonic anchors, and active spaced-repetition drills. This allows students to master 1,000+ high-frequency GRE words in weeks with lasting retention.",
  },
];

export default function GreFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={greFaqs}
        pretitle="GRE Queries"
        title="Frequently Asked"
        titleHighlight="GRE Questions"
        subtitle="Key insights about GRE score competitiveness, exam format changes, and admissions recognition."
      />
    </div>
  );
}
