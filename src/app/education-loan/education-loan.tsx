import { catTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { loanMyths } from "@/data/myths/loan-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import LoanHero from "@/components/education-loan/hero/LoanHero";
import LoanTypes from "@/components/education-loan/loan-types/LoanTypes";
import LendersTable from "@/components/education-loan/lenders-table/LendersTable";
import LoanFaq from "@/components/education-loan/faq/LoanFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

export default function EducationLoanContent() {
  return (
    <>
      <LoanHero />
      <LoanTypes />
      <LendersTable />
      <WhyMbaWizards exam="Global Education" />
      <MythVsFact exam="Global Education" items={loanMyths} />
      <TestimonialsCarousel
        testimonials={catTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <LoanFaq />
      <CtaSection
        pretitle="Zero Collateral Loans Up To ₹1.5 Crore"
        title="Fast-Track Your Global Education"
        titleHighlight="Funding & Pre-Sanction"
        description="100% tuition + living expenses covered with minimal documentation, preferential interest rates from top banks and NBFCs, and zero service fees through EduQuest."
        primaryButtonText="Check Free Loan Eligibility"
        secondaryButtonText="Chat with Loan Advisor"
      />
    </>
  );
}
