import { gmatTestimonials } from "@/data/testimonials-data";
import Story from "@/components/about-us/story/Story";
import VisionMission from "@/components/about-us/vision-mission/VisionMission";
import Goals from "@/components/about-us/goals/Goals";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { admissionsMyths } from "@/data/myths/admissions-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
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

export default function AboutUsContent() {
  return (
    <>
      <Story />
      <VisionMission />
      <Goals />
      <WhyMbaWizards exam="Global MBA" />
      <MythVsFact exam="MBA Admissions" items={admissionsMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Voices of Excellence"
        titleHighlight="From Our Alumni"
      />
      <CtaSection
        pretitle="Join The 30-Year Legacy"
        title="Experience The"
        titleHighlight="Ability-Based Advantage"
        description="Book your one-on-one session with our senior faculty and take the first step toward an elite business school admit."
        primaryButtonText="Book Free Trial Demo"
      />
    </>
  );
}
