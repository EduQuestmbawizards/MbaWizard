import { dualTestimonials } from "@/data/testimonials-data";
import GmatCatHero from "@/components/gmat-cat-coaching/hero/GmatCatHero";
import GmatCatOverview from "@/components/gmat-cat-coaching/overview/GmatCatOverview";
import GmatCatComparison from "@/components/gmat-cat-coaching/comparison-table/GmatCatComparison";
import GmatCatFaq from "@/components/gmat-cat-coaching/faq/GmatCatFaq";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { gmatMasteryData } from "@/data/exam-guides/gmat-mastery";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatCatMyths } from "@/data/myths/gmatcat-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ExamUpdates from "@/components/shared/exam-updates/ExamUpdates";
import ExamTimetable from "@/components/shared/exam-timetable/ExamTimetable";
import RelatedArticles from "@/components/shared/related-articles/RelatedArticles";
import CtaSection from "@/components/shared/cta-section/CtaSection";









const catArticles = [
  { tag: "CAT Strategy", emoji: "🧩", title: "CAT 2025 DILR: How to Crack the Toughest Section with Novel Set Strategies", excerpt: "Deep-dive into the 5 most common CAT DILR set archetypes, with frameworks for solving unconventional puzzles.", href: "/blogs/cat-2025-dilr-strategy" },
  { tag: "PI Preparation", emoji: "🎓", title: "CAT PI Preparation Guide: 30-Day Plan, Top Questions & Evaluation Rubrics", excerpt: "A structured 30-day preparation roadmap to convert IIM Ahmedabad, Bangalore, Calcutta, and Lucknow interview calls.", href: "/blogs/cat-pi-preparation-guide" },
  { tag: "Comparison", emoji: "📊", title: "GMAT vs CAT: Which Exam Should You Take for Your MBA Dream?", excerpt: "A comprehensive comparison of GMAT Focus Edition vs CAT 2025 — scoring, difficulty, and target schools.", href: "/blogs/gmat-vs-cat" }
];

export default function GmatCatCoachingContent() {
  return (
    <>
      <GmatCatHero />
      <ExamMasteryGuide data={gmatMasteryData} />
      <GmatCatOverview />
      <WhyMbaWizards exam="GMAT+CAT" />
      <MythVsFact exam="GMAT+CAT" items={gmatCatMyths} />
      <GmatCatComparison />
      <TestimonialsCarousel
        testimonials={dualTestimonials}
        title="Dual Achievers"
        titleHighlight="on GMAT & CAT"
      />
      <ExamUpdates defaultExam="GMAT" />
      <ExamTimetable defaultExam="GMAT" />
      <RelatedArticles
        articles={catArticles}
        title="Dual Exam Strategy"
        titleHighlight="& Admissions Guides"
      />
      <GmatCatFaq />
      <CtaSection
        pretitle="Maximize Global & Indian B-School Options"
        title="Prepare for GMAT & CAT Simultaneously with"
        titleHighlight="A Synchronized Dual Roadmap"
        description="Leverage 80% Quant and Critical Reasoning syllabus overlap. Prepare for IIMs in November and ISB or global business schools with zero duplicated effort in cohorts of 10–15 students."
        primaryButtonText="Book Free GMAT+CAT Dual Demo"
        secondaryButtonText="Consult Dual Exam Specialist"
      />
    </>
  );
}
