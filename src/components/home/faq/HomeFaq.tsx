import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./HomeFaq.module.css";

const homeFaqItems: FaqItem[] = [
  {
    question: "Why should I choose MBA Wizards over traditional test prep companies?",
    answer:
      "Unlike large commercial institutes with 100+ student batches, MBA Wizards operates on an ability-based model with ultra-small cohorts and 1-on-1 mentor access. Every student receives a custom diagnostic roadmap, direct doubt-clearing sessions with 99th percentile faculty, and end-to-end guidance extending beyond the exam to profile evaluation and B-school admissions.",
  },
  {
    question: "Do you offer both classroom and online live coaching?",
    answer:
      "Yes. We offer classroom batches across our state-of-the-art centers in Gurgaon, as well as interactive live online coaching accessible from Delhi, Noida, Mumbai, Bangalore, Hyderabad, Pune, Chandigarh, and globally. All live sessions are recorded for 24/7 student revision.",
  },
  {
    question: "What is the typical batch size at MBA Wizards?",
    answer:
      "We strictly cap our classroom and live online batches to 10–15 students. This ensures that every aspirant gets personal attention, active participation, and tailored feedback on homework and mock analysis.",
  },
  {
    question: "Can I attend a free demo session before making a decision?",
    answer:
      "Absolutely. We offer a comprehensive Free Trial Demo session and a 1-on-1 Profile Evaluation so you can experience our teaching methodology, inspect our study materials, and receive an honest diagnostic assessment of your MBA candidacy.",
  },
  {
    question: "Do you offer university admissions consulting along with test prep?",
    answer:
      "Yes. Our Premium University Consulting covers university shortlisting, story-boarding, resume restructuring, essay drafting and line-by-line editing, letter of recommendation strategy, and blind mock interviews with alumni from top business schools like INSEAD, ISB, Harvard, and LBS.",
  },
];

export default function HomeFaq() {
  return (
    <div className={styles.faqWrapper}>
      <FaqAccordion
        items={homeFaqItems}
        pretitle="Got Questions?"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Everything you need to know about our coaching programs, methodology, and admissions support."
      />
    </div>
  );
}
