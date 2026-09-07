import { greTestimonials } from "@/data/testimonials-data";
import { greCitiesData } from "@/data/gre-city-copy";
import GreCityHero from "@/components/gre-coaching-city/hero/GreCityHero";
import GreCityCurriculum from "@/components/gre-coaching-city/curriculum/GreCityCurriculum";
import GreCityFeatures from "@/components/gre-coaching-city/features/GreCityFeatures";
import GreCityBatches from "@/components/gre-coaching-city/batches/GreCityBatches";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { greMyths } from "@/data/myths/gre-myths";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { greMasteryData } from "@/data/exam-guides/gre-mastery";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ExamUpdates from "@/components/shared/exam-updates/ExamUpdates";
import ExamTimetable from "@/components/shared/exam-timetable/ExamTimetable";
import RelatedArticles from "@/components/shared/related-articles/RelatedArticles";
import GreCityCenter from "@/components/gre-coaching-city/center-info/GreCityCenter";
import GreCityFaq from "@/components/gre-coaching-city/faq/GreCityFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

const data = greCitiesData.delhi;



const articles = [
  { tag: "GRE Tips", emoji: "📖", title: "GRE Verbal 160+: The Complete Text Completion and RC Strategy Guide", excerpt: "Systematic approach to GRE Text Completion, Sentence Equivalence, and Reading Comprehension — with practice sets and time-management heuristics.", href: "/blogs/gre-verbal-160-strategy" },
  { tag: "Quant Guide", emoji: "🔢", title: "GRE Quant 166+: Quantitative Comparison Mastery and Mental Math Tricks", excerpt: "Advanced strategies for Quantitative Comparison questions that account for the most difficult problems at the 90th+ percentile GRE level.", href: "/blogs/gre-quant-166-strategy" },
  { tag: "Universities", emoji: "🌍", title: "Top MS Programs in the USA That Accept GRE Scores in 2025–26", excerpt: "A curated list of 50+ top MS programs at MIT, Stanford, Carnegie Mellon, and other elite universities with GRE cutoffs and application timelines.", href: "/blogs/top-ms-programs-gre-2025" }
];

export default function GreDelhiContent() {
  return (
    <>
      <GreCityHero preTitle={data.heroPreTitle} title={data.heroTitle} titleHighlight={data.heroTitleHighlight} subtitle={data.heroSubtitle} city={data.city} />
      <GreCityCurriculum city={data.city} />
      <WhyMbaWizards exam="GRE" />
      <ExamMasteryGuide data={greMasteryData} city={data.city} />
      <MythVsFact exam="GRE" items={greMyths} />
      <GreCityFeatures city={data.city} features={data.features} />
      <GreCityBatches city={data.city} />
      <TestimonialsCarousel testimonials={greTestimonials} title="From ${data.city} to World-Class Universities" titleHighlight="GRE Success Stories" />
      <ExamUpdates defaultExam="GRE" />
      <ExamTimetable defaultExam="GRE" />
      <RelatedArticles articles={articles} title="GRE Tips, Guides" titleHighlight="& Resources" />
      <GreCityCenter city={data.city} centerType={data.centerType} address={data.address} phone={data.phone} email={data.email} />
      <GreCityFaq city={data.city} faqs={data.faqs} />
      <CtaSection
        pretitle={`Top-Ranked GRE Coaching for ${data.city} Aspirants`}
        title="Aiming for 330+ on the Shorter GRE from"
        titleHighlight={data.city}
        description={`Master high-frequency vocabulary retention, quantitative precision, and 1-on-1 Litmus diagnostics with IIT Roorkee mentors in cohorts capped at 10–15 students across ${data.city}.`}
        primaryButtonText={`Book Free GRE Demo in ${data.city}`}
        secondaryButtonText={`Speak with ${data.city} GRE Mentor`}
      />
    </>
  );
}
