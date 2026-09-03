import type { ExamMasteryData } from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";

export const gmatMasteryData: ExamMasteryData = {
  examName: "GMAT Focus Edition",
  tagline: "The modern, streamlined business school entrance exam. 3 equal-weighted sections, Question Review & Edit flexibility, and 2 hours 15 minutes test duration.",
  duration: "2 Hours 15 Minutes",
  totalQuestions: "64 Questions",
  scoreRange: "205 – 805 Scale",
  markingScheme: "Computer-Adaptive (No penalty for skipped unanswered questions, but time penalty applies)",
  structure: [
    {
      section: "Quantitative Reasoning",
      questions: 21,
      timeLimit: "45 Minutes",
      avgTimePerQ: "2 min 08 sec",
      scoring: "60 – 90",
      focus: "Problem Solving, Arithmetic (Percentages, Ratios, Number Properties), Algebra (Linear/Quadratic, Functions). No traditional geometry."
    },
    {
      section: "Verbal Reasoning",
      questions: 23,
      timeLimit: "45 Minutes",
      avgTimePerQ: "1 min 57 sec",
      scoring: "60 – 90",
      focus: "Reading Comprehension (Passage analysis, inference, author tone) & Critical Reasoning (Assumption, weaken, strengthen, paradox). No Sentence Correction."
    },
    {
      section: "Data Insights",
      questions: 20,
      timeLimit: "45 Minutes",
      avgTimePerQ: "2 min 15 sec",
      scoring: "60 – 90",
      focus: "Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, Two-Part Analysis. Calculator allowed only in this section."
    }
  ],
  roadmap: [
    {
      stage: "Stage 1",
      duration: "Weeks 1–3",
      title: "Diagnostic & Manthan Profile Mapping",
      description: "Administer the proprietary Litmus Diagnostic Test across Quant, Verbal, and Data Insights to calculate your baseline cognitive code and identify hidden accuracy leaks.",
      wizardsSupport: "1-on-1 diagnostic debrief with IIT alumni mentor, student code assignment, and customized milestone planner for 705+ target."
    },
    {
      stage: "Stage 2",
      duration: "Weeks 4–7",
      title: "Concept Rigor & Module Mastery",
      description: "Build deep structural foundations in high-yield arithmetic, algebraic heuristics, critical reasoning patterns, and data sufficiency frameworks.",
      wizardsSupport: "Topic-wise drills from Beginner to Advanced, Hard Math clinics, and dedicated doubt-clearing sessions."
    },
    {
      stage: "Stage 3",
      duration: "Weeks 8–10",
      title: "Accuracy Conditioning & Error Dissection",
      description: "Double question volume while maintaining an error log analyzing every incorrect choice: conceptual slip, trap question, or pacing panic.",
      wizardsSupport: "AI test generator creates tailored practice sets targeting your specific error patterns with real-time accuracy tracking."
    },
    {
      stage: "Stage 4",
      duration: "Weeks 11–13",
      title: "Pacing & 3-Answer Edit Strategy",
      description: "Train under timed conditions to optimize time-per-question and master strategic bookmarking for the 3-answer Question Review & Edit phase.",
      wizardsSupport: "Timed sectional mocks with AI heatmaps revealing exactly which questions cost you excessive time without yielding accuracy."
    },
    {
      stage: "Stage 5",
      duration: "Weeks 14–16",
      title: "Full-Length Adaptive Simulations & Mental Stamina",
      description: "Complete 10 full-length computer-adaptive mock tests replicating official GMAC testing conditions, pacing pressure, and section transitions.",
      wizardsSupport: "Comprehensive score projection debriefs, test-day psychological conditioning, and application submission counseling."
    }
  ],
  scoringBenchmarks: [
    {
      score: "705 – 805",
      percentile: "99th Percentile",
      targetSchools: "Harvard Business School, Stanford GSB, Wharton, Columbia, Chicago Booth, MIT Sloan (eligible for full merit fellowships)"
    },
    {
      score: "665 – 695",
      percentile: "93rd – 98th Percentile",
      targetSchools: "INSEAD, LBS, Kellogg, Berkeley Haas, Yale SOM, ISB (Hyderabad/Mohali), SPJIMR"
    },
    {
      score: "625 – 655",
      percentile: "83rd – 91st Percentile",
      targetSchools: "NYU Stern, Duke Fuqua, UVA Darden, Cornell Johnson, Oxford Saïd, Cambridge Judge"
    },
    {
      score: "565 – 615",
      percentile: "60th – 80th Percentile",
      targetSchools: "Top 30-50 global MBA programs, specialized MS in Finance, Business Analytics, and Master in Management (MiM)"
    }
  ],
  referenceMaterials: [
    {
      title: "GMAT Official Guide (OG) 2024–2025 Focus Edition",
      type: "Official Textbook",
      desc: "Contains over 800 real retired questions from GMAC. The gold standard for calibrating against official question style."
    },
    {
      title: "MBA Wizards Manthan Module Sets",
      type: "Proprietary Material",
      desc: "Five tiered modules from Level 1 (Fundamentals) to Level 5 (750+ Elite), with mental math shortcuts and CR logic templates."
    },
    {
      title: "AI Adaptive Test Engine & Question Generator",
      type: "Software Platform",
      desc: "Dynamic practice engine that calibrates question difficulty to your real-time responses, tracking error patterns by sub-topic."
    },
    {
      title: "10 Full-Length Computer Adaptive Mocks (CAT)",
      type: "Mock Test Series",
      desc: "Simulates the exact GMAT Focus interface, pacing timer, review & edit screen, and official scoring algorithm."
    }
  ]
};
