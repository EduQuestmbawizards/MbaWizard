import type { Metadata } from "next";
import AiStudyPlannerPage from "./AiStudyPlannerPage";

export const metadata: Metadata = {
  title: "AI Career & Study Planner | Autonomous Scheduling & AI Mentorship | MBA Wizards",
  description:
    "Production-ready AI Career & Study Planner platform by MBA Wizards built with FastAPI, React 18, Supabase, and GPT-4o-mini. Topological prerequisite scheduling, capacity validation, Pomodoro tracking, and dynamic auto-rescheduling.",
  keywords: [
    "AI Career and Study Planner",
    "MBA Wizards study planner",
    "CAT AI study planner",
    "GMAT study timetable",
    "GRE daily study schedule",
    "SAT adaptive planner",
    "autonomous educational scheduler",
    "dynamic auto-rescheduling",
    "Pomodoro study timer",
    "GPT-4o-mini AI tutor",
  ],
  alternates: {
    canonical: "/ai-study-planner",
  },
  openGraph: {
    title: "AI Career & Study Planner | Autonomous Scheduling & AI Mentorship | MBA Wizards",
    description:
      "Full-stack educational web application by MBA Wizards for ambitious test takers and students. Deterministic capacity validation, daily task tracking, context-locked AI tutor, and dynamic catch-up rescheduling.",
    url: "https://www.mbawizards.co.in/ai-study-planner",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/ai-study-planner/ai-career-study-planner-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "AI Career and Study Planner - MBA Wizards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Career & Study Planner | MBA Wizards",
    description:
      "Production-ready educational architecture: FastAPI, React 18, Supabase, and GPT-4o-mini for autonomous study planning and feasibility validation by MBA Wizards.",
    images: ["/images/ai-study-planner/ai-career-study-planner-social-share.jpg"],
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "AI Career & Study Planner",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web, Windows, macOS, Linux, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
      },
      "url": "http://ai-planner.mbawizards.co.in/login",
      "image": "https://www.mbawizards.co.in/images/ai-study-planner/ai-career-study-planner-social-share.jpg",
      "author": {
        "@type": "Organization",
        "name": "MBA Wizards",
        "url": "https://www.mbawizards.co.in",
      },
      "description":
        "A full-stack, production-grade AI career and study planning system engineered by MBA Wizards featuring deterministic feasibility validation, topological prerequisite ordering, Pomodoro time logging, and a syllabus-locked GPT-4o-mini learning assistant.",
      "featureList": [
        "Personalized AI Study Timetable Generation",
        "Deterministic Capacity & Feasibility Validator",
        "Daily Tasks & Pomodoro Stopwatch Timer",
        "Dynamic Auto-Rescheduling for Missed Sessions",
        "Context-Aware GPT-4o-mini AI Curriculum Tutor",
        "Real-time Burndown Analytics & Learning Velocity",
        "Institutional Batch Attendance & Audit Logs",
        "Admin AI Token Consumption & USD Cost Auditing",
        "Enterprise Security with Argon2id & JWT Role Guards",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.mbawizards.co.in/ai-study-planner#webpage",
      "url": "https://www.mbawizards.co.in/ai-study-planner",
      "name": "AI Career & Study Planner | Platform Architecture & Live Portal | MBA Wizards",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.mbawizards.co.in/#website",
        "name": "MBA Wizards",
        "url": "https://www.mbawizards.co.in",
      },
      "inLanguage": "en-IN",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mbawizards.co.in",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Career & Study Planner",
            "item": "https://www.mbawizards.co.in/ai-study-planner",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the AI Career & Study Planner by MBA Wizards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The AI Career & Study Planner is a production-ready, full-stack educational web application designed by MBA Wizards to solve student inconsistency and syllabus abandonment in long-duration technical and entrance preparation courses. It creates mathematically validated daily timetables, tracks progress with a Pomodoro timer, dynamically reschedules missed work, and provides 24/7 syllabus-locked AI tutoring via GPT-4o-mini.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the capacity and feasibility validation engine work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The capacity validator calculates the total required syllabus hours (e.g., 400 hours for full-stack engineering or 72 hours for Digital SAT / GMAT prep) and compares them against the student's available daily hours and target completion date. If the schedule requires unrealistic study volume (e.g., 14 hours per day), the system alerts the student with actionable suggestions: extend the target completion date, increase daily study hours, or include weekends.",
          },
        },
        {
          "@type": "Question",
          "name": "How does dynamic rescheduling handle missed study sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a student misses study sessions due to college, work, or personal commitments, the topological scheduler automatically reallocates incomplete topics into upcoming open study days. Crucially, it preserves already completed work, respects prerequisite topic dependencies, and recalculates the updated target completion date without administrative intervention.",
          },
        },
        {
          "@type": "Question",
          "name": "Why is the AI Tutor restricted to official syllabus context?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generic AI chatbots frequently hallucinate or suggest out-of-syllabus programming libraries that confuse students. The AI Tutor injects the exact module, topic, and domain learning objectives into each OpenAI GPT-4o-mini prompt, ensuring answers, code debugging, and sample questions align 100% with accredited course materials.",
          },
        },
        {
          "@type": "Question",
          "name": "Where can students and administrators access the live platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The live application is accessible via the official portal at http://ai-planner.mbawizards.co.in/login. Accounts are provisioned through verified institutional admission invitations or automated EduQuest HMAC-SHA256 webhooks.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <AiStudyPlannerPage />
    </>
  );
}
