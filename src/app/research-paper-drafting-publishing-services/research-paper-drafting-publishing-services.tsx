import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { researchMyths } from "@/data/myths/research-myths";
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
      <WhyMbaWizards exam="Research & Admissions" />
      <MythVsFact exam="Research & Admissions" items={researchMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <ResearchFaq />
      <CtaSection
        pretitle="Publish in Scopus & IEEE Indexed Journals"
        title="Differentiate Your Candidacy With"
        titleHighlight="Published Academic Research"
        description="Strengthen your MS/MBA profile with quantitative and analytical proof. Brainstorm emerging topics in AI, FinTech, Economics, or Supply Chain with our PhD research guides."
        primaryButtonText="Book Free Research Consultation"
        secondaryButtonText="Discuss Research Scope"
      />
    </>
  );
}
