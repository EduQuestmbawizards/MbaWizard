import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatMyths } from "@/data/myths/gmat-myths";
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
      <PrepFaq />
            <WhyMbaWizards exam="GMAT Focus" />
      <MythVsFact exam="GMAT Focus" items={gmatMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <CtaSection
        pretitle="Start Ahead of the Curve"
        title="Map Your Personal"
        titleHighlight="GMAT Prep Strategy"
        description="Connect with our lead GMAT instructor for a personalized study blueprint and baseline assessment."
        primaryButtonText="Book Strategy Session"
      />
    </>
  );
}
