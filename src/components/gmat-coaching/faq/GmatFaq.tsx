import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./GmatFaq.module.css";

const gmatFaqs: FaqItem[] = [
  {
    question: "How long does it take to prepare for the GMAT Focus Edition with MBA Wizards?",
    answer:
      "On average, working professionals take between 2.5 to 4 months of structured preparation (10–12 hours per week). With our ability-based diagnostic model, we optimize your schedule so you spend time only where your accuracy or pacing needs improvement.",
  },
  {
    question: "What is the difference between GMAT Focus and the older GMAT version?",
    answer:
      "The GMAT Focus Edition consists of three 45-minute sections: Quantitative Reasoning, Verbal Reasoning, and Data Insights. Sentence Correction and the Analytical Writing Assessment (AWA) have been removed, making Data Insights a critical factor in your total score.",
  },
  {
    question: "What happens if I don't achieve my target GMAT score on the first attempt?",
    answer:
      "Our students benefit from an unlimited doubt support policy and retake analysis. If you need a second attempt, our mentors conduct an in-depth ESR (Official Score Report) audit to fix pacing flaws and provide targeted refresher sessions at no additional fee.",
  },
  {
    question: "Can I switch between online live classes and offline classroom sessions?",
    answer:
      "Yes. Our hybrid flexibility allows students enrolled in offline batches to attend live online classes if traveling, and online students are welcome to attend weekend doubt marathons at our Gurgaon centers.",
  },
];

export default function GmatFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={gmatFaqs}
        pretitle="GMAT Insights"
        title="Frequently Asked"
        titleHighlight="GMAT Questions"
        subtitle="Common queries regarding test format, coaching timeline, and our score improvement guarantees."
      />
    </div>
  );
}
