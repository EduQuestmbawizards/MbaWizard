import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./ResearchFaq.module.css";

const researchFaqs: FaqItem[] = [
  {
    question: "Can high school and middle school students genuinely publish research papers?",
    answer:
      "Yes! With rigorous academic mentorship, high school students routinely author literature reviews, computational models, and empirical research accepted by recognized youth platforms and peer-reviewed international journals.",
  },
  {
    question: "How does a published paper benefit my university applications?",
    answer:
      "Admissions committees at Ivy League, Oxbridge, NUS, and top US institutions look for intellectual vitality beyond high test scores. A published paper confirms self-direction, discipline, and authentic passion in your declared major.",
  },
  {
    question: "How long does it take from topic brainstorming to publication?",
    answer:
      "On average, the drafting and refinement process takes 8 to 12 weeks. Journal peer review and final indexing can take an additional 4 to 8 weeks depending on the publishing cycle.",
  },
  {
    question: "Do you assist with formatting and journal peer review revisions?",
    answer:
      "Yes. We support you through the complete submission pipeline, addressing reviewer critique, refining bibliography citations, and securing final acceptance proof.",
  },
];

export default function ResearchFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={researchFaqs}
        pretitle="Research FAQs"
        title="Frequently Asked"
        titleHighlight="Research Paper Questions"
        subtitle="Common questions about age eligibility, journal credibility, timelines, and admissions impact."
      />
    </div>
  );
}
