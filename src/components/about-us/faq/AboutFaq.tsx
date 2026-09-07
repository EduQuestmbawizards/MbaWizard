import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./AboutFaq.module.css";

const aboutFaqs: FaqItem[] = [
  {
    question: "What is the relationship between MBA Wizards and EduQuest?",
    answer:
      "MBA Wizards is an initiative managed and powered by EduQuest — empowering future leaders since 2010. While EduQuest brings over 15 years of educational legacy, corporate training pedigree, and institutional networks, MBA Wizards specializes in elite personalized coaching for GMAT, GRE, CAT, and global admissions counseling.",
  },
  {
    question: "Who leads the academic mentorship at MBA Wizards?",
    answer:
      "Our curriculum and pedagogy are founded and directed by Mr. Surinder Gupta, an esteemed IIT Roorkee graduate with decades of mentoring experience. Every faculty member is a 99th percentile scorer or premier institution alumnus dedicated to small-cohort teaching.",
  },
  {
    question: "Why does MBA Wizards strictly cap batch sizes to 10–15 students?",
    answer:
      "Unlike mass commercial institutes that pack 100+ students into lecture halls, we believe transformative score improvement requires personal attention. Small cohorts enable our mentors to track your individual error logs, review your weekly pacing metrics, and conduct 1-on-1 doubt clearing.",
  },
  {
    question: "Where are MBA Wizards centers located, and can I study online?",
    answer:
      "We operate two flagship classroom centers in Gurgaon: Office 1212 & 1212A, Galleria Boulevard, DLF Phase 4 (Sector 28) and F-45, South City 2, Sector 50. For students across Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, and globally, we provide interactive live online batches with identical curriculum and recorded session archives.",
  },
];

export default function AboutFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={aboutFaqs}
        pretitle="About MBA Wizards"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Learn about our 15-year legacy, IIT Roorkee mentorship framework, and educational philosophy."
      />
    </div>
  );
}
