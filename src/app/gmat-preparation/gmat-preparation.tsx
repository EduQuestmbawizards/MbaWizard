import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { prepMyths } from "@/data/myths/prep-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import PrepHero from "@/components/gmat-preparation/hero/PrepHero";
import ExamGuide from "@/components/gmat-preparation/exam-guide/ExamGuide";
import PrepFeatures from "@/components/gmat-preparation/features/PrepFeatures";
import PrepFaq from "@/components/gmat-preparation/faq/PrepFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

export default function GmatPreparationContent() {
  return (
    <>
      <PrepHero />
      <ExamGuide />
      <PrepFeatures />
      <WhyMbaWizards exam="GMAT Focus" />
      <MythVsFact exam="GMAT Preparation" items={prepMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <PrepFaq />
      <CtaSection
        pretitle="Build Your Structured 3-Stage Preparation Plan"
        title="Get A Personalized 90-Day"
        titleHighlight="GMAT Focus Study Blueprint"
        description="Stop studying aimlessly. Meet 1-on-1 with senior IIT Roorkee alumni faculty to audit your official GMAC diagnostic performance and map your target score milestones."
        primaryButtonText="Download Custom Study Plan & Demo"
        secondaryButtonText="Discuss Prep Roadmap on WhatsApp"
      />
    </>
  );
}
