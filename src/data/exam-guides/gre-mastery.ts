import type { ExamMasteryData } from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";

export const greMasteryData: ExamMasteryData = {
  examName: "GRE General Test (Shorter Format)",
  tagline: "The world's most versatile graduate & business school admissions exam. Under 2 hours total time, section-level adaptation, and 5-year score validity.",
  duration: "1 Hour 58 Minutes",
  totalQuestions: "54 Questions + 1 Analytical Writing Essay",
  scoreRange: "260 – 340 Scale (Quant: 130-170, Verbal: 130-170, AWA: 0-6)",
  markingScheme: "Section-Level Adaptive (No penalty for incorrect guesses; attempt every question)",
  structure: [
    {
      section: "Analytical Writing (AWA)",
      questions: 1,
      timeLimit: "30 Minutes",
      avgTimePerQ: "30 minutes total",
      scoring: "0.0 – 6.0 (0.5 increments)",
      focus: "One 'Analyze an Issue' task. Evaluates critical thinking, reasoned argument construction, and persuasive English prose."
    },
    {
      section: "Verbal Reasoning (2 Sections)",
      questions: 27,
      timeLimit: "41 Minutes (18m + 23m)",
      avgTimePerQ: "1 min 31 sec",
      scoring: "130 – 170",
      focus: "Section 1: 12 Qs in 18 min. Section 2: 15 Qs in 23 min. Text Completion, Sentence Equivalence, and Reading Comprehension."
    },
    {
      section: "Quantitative Reasoning (2 Sections)",
      questions: 27,
      timeLimit: "47 Minutes (21m + 26m)",
      avgTimePerQ: "1 min 44 sec",
      scoring: "130 – 170",
      focus: "Section 1: 12 Qs in 21 min. Section 2: 15 Qs in 26 min. Quantitative Comparison, Problem Solving, and Data Interpretation. On-screen calculator available."
    }
  ],
  roadmap: [
    {
      stage: "Stage 1",
      duration: "Weeks 1–2",
      title: "Diagnostic & High-Frequency Roots Mapping",
      description: "Establish baseline Quantitative and Verbal scores. Begin root-word and contextual vocabulary acquisition in thematic clusters.",
      wizardsSupport: "1-on-1 profile debrief, personalized target score roadmapping, and curated 800 high-frequency GRE vocabulary lists."
    },
    {
      stage: "Stage 2",
      duration: "Weeks 3–6",
      title: "Quantitative Comparison & Sentence Equivalence Mastery",
      description: "Master QC strategies: plugging smart numbers, recognizing hidden negative/fraction constraints, and identifying SE synonym pairs.",
      wizardsSupport: "IIT faculty-led Quant masterclasses, RC speed-reading heuristics, and weekly individual checkpoint evaluations."
    },
    {
      stage: "Stage 3",
      duration: "Weeks 7–9",
      title: "Timed Sectional Conditioning",
      description: "Train under strict sectional limits (18-26 min windows) to build rapid question classification and prevent time entrapment.",
      wizardsSupport: "Sectional simulation tests with question-by-question timing heatmaps and speed optimization clinics."
    },
    {
      stage: "Stage 4",
      duration: "Weeks 10–12",
      title: "Full-Length Mocks & AWA Writing Clinics",
      description: "Complete 8 full-length simulated GRE tests with human-graded AWA essays and section adaptation analysis.",
      wizardsSupport: "Detailed AWA template feedback, score guarantee clinics for retakers, and university shortlisting advisory."
    }
  ],
  scoringBenchmarks: [
    {
      score: "330 – 340 (Q168+, V162+)",
      percentile: "96th – 99th Percentile",
      targetSchools: "Stanford MS/CS, MIT EECS, Harvard, Wharton, Carnegie Mellon, UC Berkeley, Columbia"
    },
    {
      score: "320 – 329 (Q165+, V155+)",
      percentile: "85th – 95th Percentile",
      targetSchools: "Georgia Tech, UCLA, Cornell, Michigan Ann Arbor, NYU Courant, UT Austin, Duke"
    },
    {
      score: "310 – 319 (Q160+, V150+)",
      percentile: "65th – 80th Percentile",
      targetSchools: "Top 50 US & European MS/MBA programs, Purdue, USC, Washington, Northwestern"
    }
  ],
  referenceMaterials: [
    {
      title: "The Official Guide to the GRE General Test (ETS)",
      type: "Official Textbook",
      desc: "Official practice tests and actual retired test questions with scoring rubrics directly from ETS."
    },
    {
      title: "MBA Wizards Vocabulary Cluster Vault",
      type: "Proprietary Flashcards",
      desc: "800 high-frequency GRE words arranged in logical semantic families with sentence context and mnemonic memory anchors."
    },
    {
      title: "Quantitative Comparison Trap Buster Compendium",
      type: "Formula & Concept Guide",
      desc: "Over 300 curated QC problems testing tricky zero, fraction, and inequality edge cases that frequently trip up test-takers."
    },
    {
      title: "8 Full-Length Section-Adaptive GRE Mocks",
      type: "Computer Mock Series",
      desc: "Simulates the exact 1h 58m interface, on-screen calculator behavior, and second-section difficulty adaptation algorithm."
    }
  ]
};
