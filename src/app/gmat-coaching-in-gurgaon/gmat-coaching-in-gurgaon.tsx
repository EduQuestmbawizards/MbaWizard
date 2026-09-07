import { gmatTestimonials } from "@/data/testimonials-data";
import { gmatCitiesData } from "@/data/gmat-city-copy";
import GmatCityHero from "@/components/gmat-coaching-city/hero/GmatCityHero";
import GmatCityExamGuide from "@/components/gmat-coaching-city/exam-guide/GmatCityExamGuide";
import GmatCityEligibilityReg from "@/components/gmat-coaching-city/eligibility-reg/GmatCityEligibilityReg";
import GmatCityPedagogy from "@/components/gmat-coaching-city/pedagogy/GmatCityPedagogy";
import GmatCityCourseFeatures from "@/components/gmat-coaching-city/course-features/GmatCityCourseFeatures";
import GmatCityFeatures from "@/components/gmat-coaching-city/features/GmatCityFeatures";
import GmatCityBatches from "@/components/gmat-coaching-city/batch-pricing/GmatCityBatches";
import GmatCityAdmissions from "@/components/gmat-coaching-city/admissions-support/GmatCityAdmissions";
import GmatCityCenter from "@/components/gmat-coaching-city/center-info/GmatCityCenter";
import GmatCityFaq from "@/components/gmat-coaching-city/faq/GmatCityFaq";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatMyths } from "@/data/myths/gmat-myths";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { gmatMasteryData } from "@/data/exam-guides/gmat-mastery";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ExamUpdates from "@/components/shared/exam-updates/ExamUpdates";
import ExamTimetable from "@/components/shared/exam-timetable/ExamTimetable";
import RelatedArticles from "@/components/shared/related-articles/RelatedArticles";
import CtaSection from "@/components/shared/cta-section/CtaSection";

const data = gmatCitiesData.gurgaon;



const articles = [
  { tag: "GMAT Strategy", emoji: "🎯", title: "GMAT Focus Edition vs Classic GMAT: What Changed and What Matters", excerpt: "A comprehensive breakdown of every structural, content, and scoring difference between the old GMAT and the new GMAT Focus Edition launched in 2023.", href: "/blogs/gmat-focus-edition-vs-classic" },
  { tag: "Quant Tips", emoji: "🔢", title: "How to Score 85th+ Percentile in GMAT Quantitative Reasoning", excerpt: "Proven strategies for Data Sufficiency, Problem Solving, and the new Data Insights section — all tested with 700+ scorers at MBA Wizards.", href: "/blogs/gmat-quant-85-percentile" },
  { tag: "Study Plan", emoji: "📅", title: "The 90-Day GMAT Focus Edition Study Plan for Working Professionals", excerpt: "A day-by-day structured plan balancing office hours with rigorous GMAT preparation, designed for students with 2–3 hours daily availability.", href: "/blogs/gmat-90-day-study-plan" }
];

export default function GmatGurgaonContent() {
  return (
    <>
      <GmatCityHero preTitle={data.heroPreTitle} title={data.heroTitle} titleHighlight={data.heroTitleHighlight} subtitle={data.heroSubtitle} city={data.city} />
      <GmatCityExamGuide city={data.city} />
      <WhyMbaWizards exam="GMAT" />
      <ExamMasteryGuide data={gmatMasteryData} city={data.city} />
      <MythVsFact exam="GMAT" items={gmatMyths} />
      <GmatCityEligibilityReg city={data.city} />
      <GmatCityPedagogy city={data.city} />
      <GmatCityCourseFeatures city={data.city} />
      <GmatCityFeatures city={data.city} features={data.features} />
      <GmatCityBatches city={data.city} />
      <GmatCityAdmissions city={data.city} />
      <TestimonialsCarousel testimonials={gmatTestimonials} title="Real Students, Real Results" titleHighlight="on GMAT" />
      <ExamUpdates defaultExam="GMAT" />
      <ExamTimetable defaultExam="GMAT" />
      <RelatedArticles articles={articles} title="GMAT Tips, Guides" titleHighlight="& Resources" />
      <GmatCityCenter city={data.city} centerType={data.centerType} address={data.address} phone={data.phone} email={data.email} />
      <GmatCityFaq city={data.city} faqs={data.faqs} />
      <CtaSection
        pretitle="Gurgaon's Leading GMAT Focus Classroom & Online Center"
        title="Target 705+ on GMAT Focus with IIT Mentors in"
        titleHighlight="Gurgaon (DLF & Sec 50)"
        description="Attend an in-person diagnostic at our DLF Galleria or Sector 50 classrooms or join live online sessions. Small cohorts of 10–15 students with 1-on-1 faculty clinic support."
        primaryButtonText="Book In-Person / Live GMAT Demo in Gurgaon"
        secondaryButtonText="WhatsApp Gurgaon GMAT Head"
      />
    </>
  );
}
