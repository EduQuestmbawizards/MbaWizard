import { gmatTestimonials } from "@/data/testimonials-data";
import Hero from "@/components/home/hero/Hero";
import StatsBar from "@/components/home/stats-bar/StatsBar";
import Programs from "@/components/home/programs/Programs";
import Methodology from "@/components/home/methodology/Methodology";
import ToppersShowcase from "@/components/home/toppers-showcase/ToppersShowcase";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { gmatMyths } from "@/data/myths/gmat-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import ExamUpdates from "@/components/shared/exam-updates/ExamUpdates";
import ExamTimetable from "@/components/shared/exam-timetable/ExamTimetable";
import RelatedArticles from "@/components/shared/related-articles/RelatedArticles";
import HomeFaq from "@/components/home/faq/HomeFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";







const gmatArticles = [
  { tag: "GMAT Strategy", emoji: "🎯", title: "GMAT Focus Edition vs Classic GMAT: What Changed and What Matters", excerpt: "A comprehensive breakdown of every structural, content, and scoring difference between the old GMAT and the new GMAT Focus Edition.", href: "/blogs/gmat-focus-edition-vs-classic" },
  { tag: "Quant Tips", emoji: "🔢", title: "How to Score 85th+ Percentile in GMAT Quantitative Reasoning", excerpt: "Proven strategies for Problem Solving, Number Properties, and time-saving elimination heuristics on GMAT Quant.", href: "/blogs/gmat-quant-85-percentile" },
  { tag: "Score Analytics", emoji: "📊", title: "GMAT Score Predictor: Accurate GMAT Focus Score & Percentile Calculator (2026)", excerpt: "Understand how the 3 sections of the GMAT Focus Edition combine into your 205–805 total score.", href: "/blogs/gmat-score-predictor" }
];

export default function HomeContent() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Programs />
      <Methodology />
      <ToppersShowcase />
      <WhyMbaWizards exam="MBA" />
      <MythVsFact exam="GMAT & CAT" items={gmatMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="What Our Achievers Say"
        titleHighlight="About MBA Wizards"
      />
      <ExamUpdates defaultExam="GMAT" />
      <ExamTimetable defaultExam="GMAT" />
      <RelatedArticles
        articles={gmatArticles}
        title="Study Hub, Guides"
        titleHighlight="& Admission Insights"
      />
      <HomeFaq />
      <CtaSection
        pretitle="IIT Roorkee Alumni Mentorship Since 2010"
        title="Your Dream Business School Admit Begins With"
        titleHighlight="The Right Mentors"
        description="Book a free 1-on-1 diagnostic evaluation with lead mentor Mr. Surinder Gupta. Get an unvarnished audit of your Quant, Verbal, and B-School profile readiness."
        primaryButtonText="Claim Free 1-on-1 Diagnostic"
        secondaryButtonText="Chat with Lead Mentor"
      />
    </>
  );
}
