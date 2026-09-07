import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { toppersMyths } from "@/data/myths/toppers-myths";
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
      <WhyMbaWizards exam="GMAT Toppers" />
      <MythVsFact exam="GMAT Toppers" items={toppersMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <ToppersFaq />
      <CtaSection
        pretitle="Join The 700+ / 99th Percentile Hall of Fame"
        title="Turn Your Ambition into an"
        titleHighlight="ISB & Top B-School Reality"
        description="Access the exact 3-angle error logs, pace-management heuristics, and daily study blueprints used by our 760 & 780 scorers. Learn directly from their mentors."
        primaryButtonText="Apply for Toppers Mastermind Cohort"
        secondaryButtonText="Speak with Toppers' Mentor"
      />
    </>
  );
}
