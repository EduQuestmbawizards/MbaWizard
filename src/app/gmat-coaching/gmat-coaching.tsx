import { gmatTestimonials } from "@/data/testimonials-data";
import GmatHero from "@/components/gmat-coaching/hero/GmatHero";
import GmatCurriculum from "@/components/gmat-coaching/curriculum/GmatCurriculum";
import GmatPricing from "@/components/gmat-coaching/pricing/GmatPricing";
import GmatFaq from "@/components/gmat-coaching/faq/GmatFaq";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { gmatMasteryData } from "@/data/exam-guides/gmat-mastery";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatMyths } from "@/data/myths/gmat-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ExamUpdates from "@/components/shared/exam-updates/ExamUpdates";
import ExamTimetable from "@/components/shared/exam-timetable/ExamTimetable";
import RelatedArticles from "@/components/shared/related-articles/RelatedArticles";
import CtaSection from "@/components/shared/cta-section/CtaSection";







const gmatArticles = [
  { tag: "GMAT Strategy", emoji: "🎯", title: "GMAT Focus Edition vs Classic GMAT: What Changed and What Matters", excerpt: "A comprehensive breakdown of every structural, content, and scoring difference between the old GMAT and the new GMAT Focus Edition.", href: "/blogs/gmat-focus-edition-vs-classic" },
  { tag: "Quant Tips", emoji: "🔢", title: "How to Score 85th+ Percentile in GMAT Quantitative Reasoning", excerpt: "Proven strategies for Problem Solving, Number Properties, and time-saving elimination heuristics on GMAT Quant.", href: "/blogs/gmat-quant-85-percentile" },
  { tag: "Score Analytics", emoji: "📊", title: "GMAT Score Predictor: Accurate GMAT Focus Score & Percentile Calculator (2026)", excerpt: "Understand how the 3 sections of the GMAT Focus Edition combine into your 205–805 total score.", href: "/blogs/gmat-score-predictor" }
];

export default function GmatCoachingContent() {
  return (
    <>
      <GmatHero />
      <ExamMasteryGuide data={gmatMasteryData} />
      <GmatCurriculum />
      <WhyMbaWizards exam="GMAT" />
      <MythVsFact exam="GMAT" items={gmatMyths} />
      <GmatPricing />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Real Students, Real Results"
        titleHighlight="on GMAT Focus"
      />
      <ExamUpdates defaultExam="GMAT" />
      <ExamTimetable defaultExam="GMAT" />
      <RelatedArticles
        articles={gmatArticles}
        title="GMAT Focus Prep Guides"
        titleHighlight="& Articles"
      />
      <GmatFaq />
      <CtaSection
        pretitle="Aiming for 705+ (99th Percentile) on GMAT Focus?"
        title="Master Quantitative, Verbal & Data Insights with"
        titleHighlight="IIT Roorkee Mentors"
        description="Receive an in-depth 3-dimensional audit of your GMAT Focus competencies. Identify pace management flaws, Data Insights pitfalls, and high-difficulty heuristics in small batches of 10–15 students."
        primaryButtonText="Book Free GMAT Focus Demo"
        secondaryButtonText="Chat with GMAT Head"
      />
    </>
  );
}
