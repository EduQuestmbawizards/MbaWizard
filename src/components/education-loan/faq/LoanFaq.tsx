import FaqAccordion, { type FaqItem } from "@/components/shared/faq-accordion/FaqAccordion";
import styles from "./LoanFaq.module.css";

const loanFaqs: FaqItem[] = [
  {
    question: "When should I begin the education loan application process?",
    answer:
      "Ideally, start 2 to 3 months before your visa interview or tuition payment deadline. Unsecured loans typically take 5 to 7 business days, whereas secured loans with property evaluation require 3 to 4 weeks.",
  },
  {
    question: "What is a moratorium period and how does it benefit students?",
    answer:
      "A moratorium is a grace period where no principal repayment is required during your course duration plus an additional 6 to 12 months post-graduation, allowing you to settle into your job before EMIs begin.",
  },
  {
    question: "Can I claim tax deductions on my education loan interest?",
    answer:
      "Yes. Under Section 80E of the Indian Income Tax Act, the full interest paid on an education loan for higher studies is eligible for tax deduction with no upper monetary cap for up to 8 consecutive assessment years.",
  },
  {
    question: "Can I get an education loan without pledging property or having an Indian co-signer?",
    answer:
      "Yes. International fintech lenders like MPower Financing and Prodigy Finance evaluate your future earning potential and target business school ranking rather than requiring collateral or an Indian co-signer.",
  },
];

export default function LoanFaq() {
  return (
    <div className={styles.wrapper}>
      <FaqAccordion
        items={loanFaqs}
        pretitle="Loan Guidance"
        title="Frequently Asked"
        titleHighlight="Education Loan Questions"
        subtitle="Important answers regarding timelines, Section 80E tax benefits, moratorium, and non-collateral options."
      />
    </div>
  );
}
