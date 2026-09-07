import { dualTestimonials } from "@/data/testimonials-data";
import GmatGreHero from "@/components/gmat-gre-coaching/hero/GmatGreHero";
import DualBenefits from "@/components/gmat-gre-coaching/dual-benefits/DualBenefits";
import ComparisonTable from "@/components/gmat-gre-coaching/comparison-table/ComparisonTable";
import GmatGreFaq from "@/components/gmat-gre-coaching/faq/GmatGreFaq";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { gmatMasteryData } from "@/data/exam-guides/gmat-mastery";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatGreMyths } from "@/data/myths/gmatgre-myths";
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



export default function GmatGreCoachingContent() {
  return (
    <>
      <GmatGreHero />
      <ExamMasteryGuide data={gmatMasteryData} />
      <DualBenefits />
      <WhyMbaWizards exam="GMAT+GRE" />
      <MythVsFact exam="GMAT+GRE" items={gmatGreMyths} />
      <ComparisonTable />
      <TestimonialsCarousel
        testimonials={dualTestimonials}
        title="Dual Achievers"
        titleHighlight="on GMAT & GRE"
      />
      <ExamUpdates defaultExam="GMAT" />
      <ExamTimetable defaultExam="GMAT" />
      <RelatedArticles
        articles={greArticles}
        title="Dual Strategy"
        titleHighlight="& Global Admit Guides"
      />
      <GmatGreFaq />
      <CtaSection
        pretitle="Double Your Global MS & MBA Opportunities"
        title="Prepare for GMAT & GRE with"
        titleHighlight="One Integrated Syllabus"
        description="Master 70% common Quant and Reading foundations together, then switch into precision clinics for GMAT Data Insights and GRE advanced vocabulary. Mentored by IIT Roorkee alumni."
        primaryButtonText="Book Free GMAT+GRE Evaluation"
        secondaryButtonText="Chat with Dual Exam Mentor"
      />
    </>
  );
}
