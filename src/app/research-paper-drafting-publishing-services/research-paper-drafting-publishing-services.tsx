import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { admissionsMyths } from "@/data/myths/admissions-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";




import ResearchHero from "@/components/research-paper-drafting-publishing-services/hero/ResearchHero";
import ResearchProcess from "@/components/research-paper-drafting-publishing-services/process/ResearchProcess";
import ResearchPricing from "@/components/research-paper-drafting-publishing-services/pricing/ResearchPricing";
import ResearchFaq from "@/components/research-paper-drafting-publishing-services/faq/ResearchFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

export default function ResearchPaperContent() {
  return (
    <>
      <ResearchHero />
      <ResearchProcess />
      <ResearchPricing />
      <ResearchFaq />
            <WhyMbaWizards exam="Research & Admissions" />
      <MythVsFact exam="Research & Admissions" items={admissionsMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <CtaSection
        pretitle="Author Your First Paper"
        title="Schedule A Topic"
        titleHighlight="Brainstorming Call"
        description="Discuss your favorite subject, career goals, and publication target with our PhD mentors and research leads."
        primaryButtonText="Book Topic Consultation"
      />
    </>
  );
}
