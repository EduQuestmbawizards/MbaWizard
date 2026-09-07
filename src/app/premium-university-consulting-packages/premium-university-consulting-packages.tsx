import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { consultingMyths } from "@/data/myths/consulting-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ConsultingHero from "@/components/premium-university-consulting-packages/hero/ConsultingHero";
import ConsultingPackages from "@/components/premium-university-consulting-packages/packages/ConsultingPackages";
import ConsultingServices from "@/components/premium-university-consulting-packages/services/ConsultingServices";
import ConsultingFaq from "@/components/premium-university-consulting-packages/faq/ConsultingFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

export default function PremiumUniversityConsultingContent() {
  return (
    <>
      <ConsultingHero />
      <ConsultingPackages />
      <ConsultingServices />
      <WhyMbaWizards exam="MBA Admissions" />
      <MythVsFact exam="MBA Admissions" items={consultingMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <ConsultingFaq />
      <CtaSection
        pretitle="Targeting M7, T15, INSEAD, LBS or ISB?"
        title="Claim Your Comprehensive 1-on-1"
        titleHighlight="B-School Profile & Resume Audit"
        description="Have your leadership trajectory, career narrative, and target school list critically audited by former admissions interviewers and elite MBA alumni before submitting."
        primaryButtonText="Book Free 1-on-1 Profile Audit"
        secondaryButtonText="WhatsApp Admissions Strategist"
      />
    </>
  );
}
