import { catTestimonials } from "@/data/testimonials-data";
import CatHero from "@/components/cat-2025/hero/CatHero";
import CatSyllabus from "@/components/cat-2025/syllabus/CatSyllabus";
import CatColleges from "@/components/cat-2025/colleges/CatColleges";
import CatFaq from "@/components/cat-2025/faq/CatFaq";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { catMasteryData } from "@/data/exam-guides/cat-mastery";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { catMyths } from "@/data/myths/cat-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ExamUpdates from "@/components/shared/exam-updates/ExamUpdates";
import ExamTimetable from "@/components/shared/exam-timetable/ExamTimetable";
import RelatedArticles from "@/components/shared/related-articles/RelatedArticles";
import CtaSection from "@/components/shared/cta-section/CtaSection";







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

export default function Cat2025Content() {
  return (
    <>
      <CatHero />
      <ExamMasteryGuide data={catMasteryData} />
      <CatSyllabus />
      <WhyMbaWizards exam="CAT" />
      <MythVsFact exam="CAT" items={catMyths} />
      <CatColleges />
      <TestimonialsCarousel
        testimonials={catTestimonials}
        title="IIM Call Achievers"
        titleHighlight="From MBA Wizards"
      />
      <ExamUpdates defaultExam="CAT" />
      <ExamTimetable defaultExam="CAT" />
      <RelatedArticles
        articles={catArticles}
        title="CAT Strategy Hub"
        titleHighlight="& IIM Conversion Guides"
      />
      <CatFaq />
      <CtaSection
        pretitle="Targeting 99+ Percentile in CAT 2026?"
        title="Experience The Proprietary"
        titleHighlight="Manthan Pedagogy"
        description="Book your diagnostic assessment session, identify your weak areas across QA, DILR, and VARC, and build your personalized path to top IIMs."
        primaryButtonText="Book Free CAT Demo"
      />
    </>
  );
}
