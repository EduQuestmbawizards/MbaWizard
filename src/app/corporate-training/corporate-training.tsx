import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { corporateMyths } from "@/data/myths/corporate-myths";
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
      <WhyMbaWizards exam="Corporate Aptitude" />
      <MythVsFact exam="Corporate Aptitude" items={corporateMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <CorporateFaq />
      <CtaSection
        pretitle="Campus Placements & Corporate CCQT Readiness"
        title="Partner with MBA Wizards for"
        titleHighlight="High-Impact Institutional Bootcamps"
        description="Equip your students or corporate trainees with speed aptitude heuristics, STAR interview mastery, and TCS iON CCQT cracking frameworks delivered by IIT Roorkee alumni."
        primaryButtonText="Request Institutional Training Proposal"
        secondaryButtonText="Connect with Corporate Training Head"
      />
    </>
  );
}
