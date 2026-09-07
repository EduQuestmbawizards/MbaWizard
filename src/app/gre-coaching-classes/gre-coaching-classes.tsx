import { greTestimonials } from "@/data/testimonials-data";
import GreHero from "@/components/gre-coaching-classes/hero/GreHero";
import GreStructure from "@/components/gre-coaching-classes/exam-structure/GreStructure";
import GreVsGmat from "@/components/gre-coaching-classes/gre-vs-gmat/GreVsGmat";
import GreFaq from "@/components/gre-coaching-classes/faq/GreFaq";
import ExamMasteryGuide from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";
import { greMasteryData } from "@/data/exam-guides/gre-mastery";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { greMyths } from "@/data/myths/gre-myths";
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



export default function GreCoachingClassesContent() {
  return (
    <>
      <GreHero />
      <ExamMasteryGuide data={greMasteryData} />
      <GreStructure />
      <WhyMbaWizards exam="GRE" />
      <MythVsFact exam="GRE" items={greMyths} />
      <GreVsGmat />
      <TestimonialsCarousel
        testimonials={greTestimonials}
        title="From Classroom to Ivy League"
        titleHighlight="GRE Achievers"
      />
      <ExamUpdates defaultExam="GRE" />
      <ExamTimetable defaultExam="GRE" />
      <RelatedArticles
        articles={greArticles}
        title="GRE Prep Strategies"
        titleHighlight="& Graduate Guides"
      />
      <GreFaq />
      <CtaSection
        pretitle="Targeting 330+ on the Shorter GRE?"
        title="Master Quantitative Precision & Verbal Logic with"
        titleHighlight="IIT Roorkee Mentors"
        description="Book your diagnostic assessment, unlock root-cause vocabulary retention techniques, and learn elimination shortcuts for Quant & Reading Comprehension in cohorts of 10–15."
        primaryButtonText="Claim Free GRE Strategy Demo"
        secondaryButtonText="Discuss GRE Roadmap on WhatsApp"
      />
    </>
  );
}
