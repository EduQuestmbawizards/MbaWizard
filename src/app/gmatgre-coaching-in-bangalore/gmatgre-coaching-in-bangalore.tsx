import { dualTestimonials } from "@/data/testimonials-data";
import { gmatGreCitiesData } from "@/data/gmatgre-city-copy";
import GmatGreCityHero from "@/components/gmat-gre-coaching-city/hero/GmatGreCityHero";
import GmatGreDualPrep from "@/components/gmat-gre-coaching-city/dual-prep/GmatGreDualPrep";
import GmatGreBatches from "@/components/gmat-gre-coaching-city/batches/GmatGreBatches";
import GmatGreCityFeatures from "@/components/gmat-gre-coaching-city/features/GmatGreCityFeatures";
import GmatGreCityCenter from "@/components/gmat-gre-coaching-city/center-info/GmatGreCityCenter";
import GmatGreCityFaq from "@/components/gmat-gre-coaching-city/faq/GmatGreCityFaq";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatGreMyths } from "@/data/myths/gmatgre-myths";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { gmatMasteryData } from "@/data/exam-guides/gmat-mastery";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ExamUpdates from "@/components/shared/exam-updates/ExamUpdates";
import ExamTimetable from "@/components/shared/exam-timetable/ExamTimetable";
import RelatedArticles from "@/components/shared/related-articles/RelatedArticles";
import CtaSection from "@/components/shared/cta-section/CtaSection";

const data = gmatGreCitiesData.bangalore;



const articles = [
  { tag: "Comparison", emoji: "🎯", title: "GMAT vs GRE for MBA: Which Test Do Top Business Schools Prefer?", excerpt: "A data-driven analysis of GMAT vs GRE preferences at Harvard, Wharton, Booth, INSEAD, and LBS — with acceptance rate comparisons.", href: "/blogs/gmat-vs-gre-for-mba" },
  { tag: "Dual Strategy", emoji: "📊", title: "How to Prepare for GMAT and GRE Simultaneously: The Complete Dual Prep Guide", excerpt: "Proven dual preparation strategies that leverage overlapping content between GMAT Focus Edition and GRE General Test.", href: "/blogs/gmat-gre-dual-prep" },
  { tag: "Resources", emoji: "🌍", title: "Top Global MBA Programs That Accept Both GMAT and GRE in 2025", excerpt: "A curated list of 100+ programs at Harvard, MIT Sloan, Wharton, INSEAD, and London Business School with score cutoffs.", href: "/blogs/mba-programs-gmat-gre-2025" }
];

export default function GmatGreBangaloreContent() {
  return (
    <>
      <GmatGreCityHero
        preTitle={data.heroPreTitle}
        title={data.heroTitle}
        titleHighlight={data.heroTitleHighlight}
        subtitle={data.heroSubtitle}
        city={data.city}
      />
      <GmatGreDualPrep city={data.city} />
      <WhyMbaWizards exam="GMAT+GRE" />
      <ExamMasteryGuide data={gmatMasteryData} city={data.city} />
      <MythVsFact exam="GMAT+GRE" items={gmatGreMyths} />
      <GmatGreCityFeatures city={data.city} features={data.features} />
      <GmatGreBatches city={data.city} />
      <TestimonialsCarousel testimonials={dualTestimonials} title="Dual Achievers from" titleHighlight={data.city} />
      <ExamUpdates defaultExam="GMAT" />
      <ExamTimetable defaultExam="GMAT" />
      <RelatedArticles articles={articles} title="GMAT+GRE Strategy Guides" titleHighlight="& Resources" />
      <GmatGreCityCenter
        city={data.city}
        centerType={data.centerType}
        address={data.address}
        phone={data.phone}
        email={data.email}
      />
      <GmatGreCityFaq city={data.city} faqs={data.faqs} />
      <CtaSection
        pretitle={`Global B-School & MS Admissions from ${data.city}`}
        title="Conquer Both GMAT & GRE from"
        titleHighlight={data.city}
        description={`Cover 70% shared quantitative and reading foundations with IIT Roorkee alumni mentors in small batches of 10–15 students, then take specialized clinics for Data Insights and advanced vocabulary.`}
        primaryButtonText={`Book Free GMAT+GRE Demo in ${data.city}`}
        secondaryButtonText={`Speak with ${data.city} Dual Prep Mentor`}
      />
    </>
  );
}
