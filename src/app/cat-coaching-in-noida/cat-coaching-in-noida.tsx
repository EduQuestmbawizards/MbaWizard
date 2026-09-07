import { catTestimonials } from "@/data/testimonials-data";
import { catCitiesData } from "@/data/cat-city-copy";
import CatCityHero from "@/components/cat-coaching-city/hero/CatCityHero";
import CatCityCurriculum from "@/components/cat-coaching-city/curriculum/CatCityCurriculum";
import CatCityFeatures from "@/components/cat-coaching-city/features/CatCityFeatures";
import CatCityBatches from "@/components/cat-coaching-city/batches/CatCityBatches";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { catMyths } from "@/data/myths/cat-myths";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { catMasteryData } from "@/data/exam-guides/cat-mastery";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ExamUpdates from "@/components/shared/exam-updates/ExamUpdates";
import ExamTimetable from "@/components/shared/exam-timetable/ExamTimetable";
import RelatedArticles from "@/components/shared/related-articles/RelatedArticles";
import CatCityCenter from "@/components/cat-coaching-city/center-info/CatCityCenter";
import CatCityFaq from "@/components/cat-coaching-city/faq/CatCityFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

const data = catCitiesData.noida;



const articles = [
  { tag: "CAT Strategy", emoji: "🧩", title: "CAT 2025 DILR: How to Crack the Toughest Section with Novel Set Strategies", excerpt: "Deep-dive into the 5 most common CAT DILR set types, with frameworks for solving unconventional puzzles under 2-minute time pressure.", href: "/blogs/cat-2025-dilr-strategy" },
  { tag: "VARC Tips", emoji: "📖", title: "CAT VARC 99 Percentile: Speed Reading Techniques for IIM Aspirants", excerpt: "Proven reading comprehension strategies that allow you to process a 600-word passage in under 60 seconds without losing accuracy.", href: "/blogs/cat-varc-99-percentile" },
  { tag: "IIM Prep", emoji: "🎓", title: "IIM WAT-PI Preparation: The Complete Guide from Shortlist to Final Admit", excerpt: "Everything from writing a compelling Written Ability Test response to cracking the IIM Ahmedabad panel interview with confidence.", href: "/blogs/iim-wat-pi-preparation" }
];

export default function CatNoidaContent() {
  return (
    <>
      <CatCityHero preTitle={data.heroPreTitle} title={data.heroTitle} titleHighlight={data.heroTitleHighlight} subtitle={data.heroSubtitle} city={data.city} />
      <CatCityCurriculum city={data.city} />
      <WhyMbaWizards exam="CAT" />
      <ExamMasteryGuide data={catMasteryData} city={data.city} />
      <MythVsFact exam="CAT" items={catMyths} />
      <CatCityFeatures city={data.city} features={data.features} />
      <CatCityBatches city={data.city} />
      <TestimonialsCarousel testimonials={catTestimonials} title="IIM Admits from" titleHighlight={`${data.city}`} />
      <ExamUpdates defaultExam="CAT" />
      <ExamTimetable defaultExam="CAT" />
      <RelatedArticles articles={articles} title="CAT Tips, Guides" titleHighlight="& Resources" />
      <CatCityCenter city={data.city} centerType={data.centerType} address={data.address} phone={data.phone} email={data.email} />
      <CatCityFaq city={data.city} faqs={data.faqs} />
      <CtaSection
        pretitle={`Top-Rated CAT Coaching for ${data.city} Aspirants`}
        title="Target 99.5+ Percentile in CAT 2026 from"
        titleHighlight={data.city}
        description={`Master QA, DILR matrix sets, and VARC with IIT Roorkee alumni mentors in interactive live classes and small batches of 10–15 students tailored for ${data.city} candidates.`}
        primaryButtonText={`Book Free CAT Demo in ${data.city}`}
        secondaryButtonText={`Chat with ${data.city} CAT Mentor`}
      />
    </>
  );
}
