import { dualTestimonials } from "@/data/testimonials-data";
import { gmatCatCitiesData } from "@/data/gmatcat-city-copy";
import GmatCatCityHero from "@/components/gmat-cat-coaching-city/hero/GmatCatCityHero";
import GmatCatCityPedagogy from "@/components/gmat-cat-coaching-city/pedagogy/GmatCatCityPedagogy";
import GmatCatCityFeatures from "@/components/gmat-cat-coaching-city/features/GmatCatCityFeatures";
import GmatCatCityBatches from "@/components/gmat-cat-coaching-city/batches/GmatCatCityBatches";
import GmatCatCityCenter from "@/components/gmat-cat-coaching-city/center-info/GmatCatCityCenter";
import GmatCatCityFaq from "@/components/gmat-cat-coaching-city/faq/GmatCatCityFaq";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatCatMyths } from "@/data/myths/gmatcat-myths";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { gmatMasteryData } from "@/data/exam-guides/gmat-mastery";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ExamUpdates from "@/components/shared/exam-updates/ExamUpdates";
import ExamTimetable from "@/components/shared/exam-timetable/ExamTimetable";
import RelatedArticles from "@/components/shared/related-articles/RelatedArticles";
import CtaSection from "@/components/shared/cta-section/CtaSection";

const data = gmatCatCitiesData.bangalore;



const articles = [
  { tag: "Dual Prep", emoji: "🎯", title: "GMAT vs CAT: Which Exam Should You Take for Your MBA Dream?", excerpt: "A comprehensive comparison of GMAT Focus Edition vs CAT 2025 — scoring, difficulty, B-school preferences, and why dual preparation maximizes your chances.", href: "/blogs/gmat-vs-cat" },
  { tag: "Strategy", emoji: "📊", title: "75% Syllabus Overlap: How to Prepare for GMAT and CAT Simultaneously", excerpt: "Discover the exact topic intersections between GMAT Quant and CAT QA, GMAT Verbal and CAT VARC — and how to build one unified study plan.", href: "/blogs/gmat-cat-dual-prep-strategy" },
  { tag: "B-Schools", emoji: "🏫", title: "ISB vs IIM: Which MBA Program Suits Your Goals?", excerpt: "A detailed comparison of ISB Hyderabad, IIM Ahmedabad, IIM Bangalore, and IIM Calcutta — culture, placement, fees, and the ideal candidate profile.", href: "/blogs/isb-vs-iim-comparison" }
];

export default function GmatCatBangaloreContent() {
  return (
    <>
      <GmatCatCityHero
        preTitle={data.heroPreTitle}
        title={data.heroTitle}
        titleHighlight={data.heroTitleHighlight}
        subtitle={data.heroSubtitle}
        city={data.city}
      />
      <GmatCatCityPedagogy city={data.city} />
      <WhyMbaWizards exam="GMAT+CAT" />
      <ExamMasteryGuide data={gmatMasteryData} city={data.city} />
      <MythVsFact exam="GMAT+CAT" items={gmatCatMyths} />
      <GmatCatCityFeatures city={data.city} features={data.features} />
      <GmatCatCityBatches city={data.city} />
      <TestimonialsCarousel testimonials={dualTestimonials} title="Dual Achievers from" titleHighlight={data.city} />
      <ExamUpdates defaultExam="GMAT" />
      <ExamTimetable defaultExam="GMAT" />
      <RelatedArticles articles={articles} title="GMAT+CAT Strategy Guides" titleHighlight="& Resources" />
      <GmatCatCityCenter
        city={data.city}
        centerType={data.centerType}
        address={data.address}
        phone={data.phone}
        email={data.email}
      />
      <GmatCatCityFaq city={data.city} faqs={data.faqs} />
      <CtaSection
        pretitle={`Dual Exam Excellence for ${data.city} Aspirants`}
        title="Master Both GMAT & CAT Simultaneously from"
        titleHighlight={data.city}
        description={`Leverage 80% syllabus synergy to target both top IIMs and global business schools/ISB. Personalized study calendar and small batches of 10–15 students for ${data.city} candidates.`}
        primaryButtonText={`Book Free Dual Prep Demo in ${data.city}`}
        secondaryButtonText={`Chat with ${data.city} Dual Prep Advisor`}
      />
    </>
  );
}
