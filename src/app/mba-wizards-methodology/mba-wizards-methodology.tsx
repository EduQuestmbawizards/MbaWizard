import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatMyths } from "@/data/myths/gmat-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";




import MethodologyHero from "@/components/mba-wizards-methodology/hero/MethodologyHero";
import MethodologySteps from "@/components/mba-wizards-methodology/steps/MethodologySteps";
import MethodologyPillars from "@/components/mba-wizards-methodology/pillars/MethodologyPillars";
import MethodologyFaq from "@/components/mba-wizards-methodology/faq/MethodologyFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

export default function MethodologyContent() {
  return (
    <>
      <MethodologyHero />
      <MethodologySteps />
      <MethodologyPillars />
      <MethodologyFaq />
            <WhyMbaWizards exam="Manthan Pedagogy" />
      <MythVsFact exam="Manthan Pedagogy" items={gmatMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <CtaSection
        pretitle="Experience The Difference"
        title="Witness Our Pedagogy"
        titleHighlight="In Action"
        description="Book a live demonstration session and see how our Manthan framework transforms problem solving in under 60 minutes."
        primaryButtonText="Book Methodology Demo"
      />
    </>
  );
}
