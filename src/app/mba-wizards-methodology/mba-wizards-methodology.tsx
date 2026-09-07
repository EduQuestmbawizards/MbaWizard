import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { methodologyMyths } from "@/data/myths/methodology-myths";
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
      <WhyMbaWizards exam="Manthan Pedagogy" />
      <MythVsFact exam="Manthan Pedagogy" items={methodologyMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <MethodologyFaq />
      <CtaSection
        pretitle="Move Beyond Rote Memorization"
        title="Experience the Proprietary"
        titleHighlight="Ability-Based Manthan Framework"
        description="See why 99th percentile performance is not about memorizing 1,000 shortcuts, but diagnosing root-cause cognitive blocks. Attend an exclusive live methodology masterclass with IIT Roorkee alumni."
        primaryButtonText="Attend Live Manthan Masterclass"
        secondaryButtonText="Discuss Pedagogy with Mentors"
      />
    </>
  );
}
