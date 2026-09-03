import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatMyths } from "@/data/myths/gmat-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import { gmatTestimonials } from "@/data/testimonials-data";
import ToppersHero from "@/components/gmat-toppers/hero/ToppersHero";
import HallOfFame from "@/components/gmat-toppers/hall-of-fame/HallOfFame";
import ToppersFaq from "@/components/gmat-toppers/faq/ToppersFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

export default function GmatToppersContent() {
  return (
    <>
      <ToppersHero />
      <HallOfFame />
      <ToppersFaq />
      <WhyMbaWizards exam="GMAT" />
      <MythVsFact exam="GMAT" items={gmatMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <CtaSection
        pretitle="Be The Next Topper"
        title="Ready to Write Your Own"
        titleHighlight="Success Story?"
        description="Book a 1-on-1 strategy call with our senior mentors and start your journey towards a 700+ GMAT score."
        primaryButtonText="Join The Toppers Club"
      />
    </>
  );
}
