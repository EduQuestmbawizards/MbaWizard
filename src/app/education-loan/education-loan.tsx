import { catTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { admissionsMyths } from "@/data/myths/admissions-myths";
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
      <LoanFaq />
            <WhyMbaWizards exam="Global Education" />
      <MythVsFact exam="Global Education" items={admissionsMyths} />
      <TestimonialsCarousel
        testimonials={catTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <CtaSection
        pretitle="Fast-Track Your Funding"
        title="Get An Instant Education"
        titleHighlight="Loan Sanction"
        description="Our financial counselors will evaluate your profile and match you with lenders offering the lowest interest rate and maximum disbursement."
        primaryButtonText="Check My Loan Eligibility"
      />
    </>
  );
}
