import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./ToppersFaq.module.css";

const toppersFaqs: FaqItem[] = [
  {
    question: "What is the secret behind MBA Wizards students scoring 750+ to 780?",
    answer:
      "Our ability-based methodology focuses on question selection efficiency, eradicating trap options, and timed sectional test analytics. We don't just teach formulas; we train your instinct for adaptive algorithm pacing.",
  },
  {
    question: "Can working professionals achieve a 700+ score in 2–3 months?",
    answer:
      "Yes. Over 75% of our 700+ scorers are full-time working consultants, engineers, and analysts. Our flexible weekend batches, evening doubt sessions, and focused weekly study plans ensure you peak without burnout.",
  },
  {
    question: "What is the Toppers Club at MBA Wizards?",
    answer:
      "The Toppers Club is an exclusive cohort for students aiming for 740+ and top 10 global MBA programs. It features direct 1-on-1 coaching with our founder, unlimited official mock reviews, and profile packaging for Harvard, Stanford, and Wharton.",
  },
  {
    question: "Do you connect new students with past toppers for guidance?",
    answer:
      "Yes. We regularly host alumni webinars, 1-on-1 peer mentorship calls, and video walkthroughs where past toppers share their exact revision strategies and interview experiences.",
  },
];

export default function ToppersFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={toppersFaqs}
        pretitle="Topper Insights"
        title="Frequently Asked"
        titleHighlight="High-Scorer Questions"
        subtitle="Learn how ordinary test takers reached the 99th percentile and secured M7 business school admissions."
      />
    </div>
  );
}
