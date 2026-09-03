import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { admissionsMyths } from "@/data/myths/admissions-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";




import CorporateHero from "@/components/corporate-training/hero/CorporateHero";
import PlacementPrep from "@/components/corporate-training/placement-prep/PlacementPrep";
import CcqtGuide from "@/components/corporate-training/ccqt-guide/CcqtGuide";
import CorporateFaq from "@/components/corporate-training/faq/CorporateFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

export default function CorporateTrainingContent() {
  return (
    <>
      <CorporateHero />
      <PlacementPrep />
      <CcqtGuide />
      <CorporateFaq />
            <WhyMbaWizards exam="Corporate Aptitude" />
      <MythVsFact exam="Corporate Aptitude" items={admissionsMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <CtaSection
        pretitle="Partner With Us"
        title="Empower Your Students With"
        titleHighlight="Corporate Excellence"
        description="Connect with our institutional training team to design a campus placement bootcamp or corporate readiness workshop."
        primaryButtonText="Contact Training Head"
      />
    </>
  );
}
