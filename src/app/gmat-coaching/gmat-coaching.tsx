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

const greArticles = [
  { tag: "GRE Tips", emoji: "📖", title: "GRE Verbal 160+: The Complete Text Completion and RC Strategy Guide", excerpt: "Systematic approach to GRE Text Completion, Sentence Equivalence, and Reading Comprehension on the shorter test.", href: "/blogs/gre-verbal-160-strategy" },
  { tag: "Interview Prep", emoji: "🎓", title: "Tell Me About Yourself for MBA & MS Interviews: 2026 Master Guide", excerpt: "The ultimate 4-part framework for answering the most critical interview icebreaker at top global universities.", href: "/blogs/tell-me-about-yourself-for-mba-interviews" },
  { tag: "Dual Prep", emoji: "🎯", title: "GMAT vs GRE for MBA: Which Test Do Top Business Schools Prefer?", excerpt: "A data-driven analysis of GMAT vs GRE preferences at Harvard, Wharton, Booth, INSEAD, and Stanford.", href: "/blogs/mba-interview-questions-and-answers" }
];

const catArticles = [
  { tag: "CAT Strategy", emoji: "🧩", title: "CAT 2025 DILR: How to Crack the Toughest Section with Novel Set Strategies", excerpt: "Deep-dive into the 5 most common CAT DILR set archetypes, with frameworks for solving unconventional puzzles.", href: "/blogs/cat-2025-dilr-strategy" },
  { tag: "PI Preparation", emoji: "🎓", title: "CAT PI Preparation Guide: 30-Day Plan, Top Questions & Evaluation Rubrics", excerpt: "A structured 30-day preparation roadmap to convert IIM Ahmedabad, Bangalore, Calcutta, and Lucknow interview calls.", href: "/blogs/cat-pi-preparation-guide" },
  { tag: "Comparison", emoji: "📊", title: "GMAT vs CAT: Which Exam Should You Take for Your MBA Dream?", excerpt: "A comprehensive comparison of GMAT Focus Edition vs CAT 2025 — scoring, difficulty, and target schools.", href: "/blogs/gmat-vs-cat" }
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
        pretitle="Achieve 705+ on GMAT Focus"
        title="Start With Your Free"
        titleHighlight="GMAT Diagnostic Session"
        description="Experience an interactive live session and receive an individual assessment of your quantitative, verbal, and data insights abilities by IIT Roorkee alumni."
        primaryButtonText="Book Free GMAT Demo"
      />
    </>
  );
}
