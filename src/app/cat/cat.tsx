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









const catArticles = [
  { tag: "CAT Strategy", emoji: "🧩", title: "CAT DILR: How to Crack the Toughest Section with Novel Set Strategies", excerpt: "Deep-dive into the 5 most common CAT DILR set archetypes, with frameworks for solving unconventional puzzles.", href: "/blogs/cat-2025-dilr-strategy" },
  { tag: "PI Preparation", emoji: "🎓", title: "CAT PI Preparation Guide: 30-Day Plan, Top Questions & Evaluation Rubrics", excerpt: "A structured 30-day preparation roadmap to convert IIM Ahmedabad, Bangalore, Calcutta, and Lucknow interview calls.", href: "/blogs/cat-pi-preparation-guide" },
  { tag: "Comparison", emoji: "📊", title: "GMAT vs CAT: Which Exam Should You Take for Your MBA Dream?", excerpt: "A comprehensive comparison of GMAT Focus Edition vs CAT — scoring, difficulty, and target schools.", href: "/blogs/gmat-vs-cat" }
];

export default function CatContent() {
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
        pretitle="Targeting 99.5+ Percentile in CAT 2026?"
        title="Crack IIM Ahmedabad, Bangalore & Calcutta with"
        titleHighlight="Proven Manthan Pedagogy"
        description="Eliminate time traps across QA, DILR matrix sets, and VARC inferential passages. Experience 1-on-1 Litmus diagnostics and small-cohort coaching (10–15 students) with IIT Roorkee mentors."
        primaryButtonText="Book Free CAT Diagnostic Demo"
        secondaryButtonText="Discuss CAT Study Plan"
      />
    </>
  );
}
