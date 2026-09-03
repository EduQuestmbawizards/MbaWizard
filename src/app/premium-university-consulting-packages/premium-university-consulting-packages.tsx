import { gmatTestimonials } from "@/data/testimonials-data";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { admissionsMyths } from "@/data/myths/admissions-myths";
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
      <ConsultingFaq />
            <WhyMbaWizards exam="MBA Admissions" />
      <MythVsFact exam="MBA Admissions" items={admissionsMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Student Success Stories"
        titleHighlight="From MBA Wizards"
      />
      <CtaSection
        pretitle="Turn Dreams into Admits"
        title="Claim Your Free 1-on-1"
        titleHighlight="Profile Assessment"
        description="Our senior admissions strategists will review your current GMAT/GRE score, undergraduate GPA, and work experience to curate your optimal school list."
        primaryButtonText="Book Profile Assessment"
      />
    </>
  );
}
