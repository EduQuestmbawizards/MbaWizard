import type { ExamMasteryData } from "@/components/shared/exam-mastery-guide/ExamMasteryGuide";

export const catMasteryData: ExamMasteryData = {
  examName: "CAT (Common Admission Test)",
  tagline: "India's premier gateway to the 21 Indian Institutes of Management (IIMs) and 100+ top business schools. 3 non-switchable sectional slots of 40 minutes each.",
  duration: "2 Hours (120 Minutes)",
  totalQuestions: "66 Questions (MCQs + Non-MCQ TITA questions)",
  scoreRange: "0 – 198 Raw Score (Mapped to 0.00 – 100.00 Percentile)",
  markingScheme: "+3 for Correct, -1 for Incorrect MCQ, 0 for TITA (Type In The Answer) questions",
  structure: [
    {
      section: "VARC (Verbal Ability & Reading Comp)",
      questions: 24,
      timeLimit: "40 Minutes",
      avgTimePerQ: "1 min 40 sec",
      scoring: "+3 / -1 (TITA 0)",
      focus: "16 RC questions (4 passages of 4 Qs each) + 8 VA questions (Para-jumbles, Para-summary, Odd-sentence-out)."
    },
    {
      section: "DILR (Data Interpretation & Logical Reasoning)",
      questions: 20,
      timeLimit: "40 Minutes",
      avgTimePerQ: "2 min 00 sec",
      scoring: "+3 / -1 (TITA 0)",
      focus: "4 problem sets of 5 questions each. Arrangements, Games & Tournaments, Matrix puzzles, Networks, Multi-chart DI."
    },
    {
      section: "QA (Quantitative Aptitude)",
      questions: 22,
      timeLimit: "40 Minutes",
      avgTimePerQ: "1 min 49 sec",
      scoring: "+3 / -1 (TITA 0)",
      focus: "Arithmetic (Percentages, Profit/Loss, TSD, Work, Averages), Algebra (Equations, Logarithms, Functions), Geometry, Modern Math."
    }
  ],
  roadmap: [
    {
      stage: "Stage 1",
      duration: "Months 1–2",
      title: "Arithmetic & Algebra Conceptual Foundations",
      description: "Build ironclad conceptual command over arithmetic and algebra — which collectively represent 70%+ of CAT QA.",
      wizardsSupport: "IIT Roorkee alumni faculty lectures, Class 8-10 fundamental reset, and daily 20-question practice modules."
    },
    {
      stage: "Stage 2",
      duration: "Months 3–4",
      title: "DILR Frameworks & Academic Speed Reading",
      description: "Deconstruct the 6 major DILR set archetypes while developing speed-reading techniques for dense Aeon and Economist RC passages.",
      wizardsSupport: "DILR Masterclass series, speed-reading labs, and weekly mentor clinics with previous year CAT toppers."
    },
    {
      stage: "Stage 3",
      duration: "Months 5–6",
      title: "Question Selection & Negative Mark Elimination",
      description: "Master the art of leaving questions: train the mental discipline to abandon a stubborn problem within 45 seconds to protect stamina.",
      wizardsSupport: "Sectional testing suites with AI performance analytics calculating your exact Net Attempt Efficiency (NAE)."
    },
    {
      stage: "Stage 4",
      duration: "Months 7–8",
      title: "All-India Full-Length CAT Mock Season",
      description: "Take 15+ proctored full-length mocks matching CAT slots (Morning, Afternoon, Evening) to condition physical and psychological endurance.",
      wizardsSupport: "National percentile benchmarking, slot adaptation strategies, and personalized 1-on-1 gap-filling mentorship."
    },
    {
      stage: "Stage 5",
      duration: "Post-CAT",
      title: "IIM WAT-PI & SOP Mentorship",
      description: "Convert your IIM shortlist through intensive mock interviews, Written Ability Test (WAT) essay drills, and CV defense.",
      wizardsSupport: "Mock PI panels with IIM alumni, domain-specific interview guides, and current affairs analysis dossiers."
    }
  ],
  scoringBenchmarks: [
    {
      score: "99.5+ Percentile (~95+ Raw Score)",
      percentile: "Top 0.5% Nationally",
      targetSchools: "IIM Ahmedabad, IIM Bangalore, IIM Calcutta (general category call threshold for top 3 IIMs)"
    },
    {
      score: "98.0 – 99.4 Percentile (~80-94 Raw Score)",
      percentile: "Top 2% Nationally",
      targetSchools: "IIM Lucknow, IIM Kozhikode, IIM Indore, FMS Delhi, SPJIMR Mumbai, XLRI (via XAT)"
    },
    {
      score: "95.0 – 97.9 Percentile (~65-79 Raw Score)",
      percentile: "Top 5% Nationally",
      targetSchools: "IIM Shillong, MDI Gurgaon, IIM Mumbai, New IIMs (Ranchi, Raipur, Trichy, Udaipur, Kashipur)"
    },
    {
      score: "90.0 – 94.9 Percentile (~52-64 Raw Score)",
      percentile: "Top 10% Nationally",
      targetSchools: "Baby IIMs (Bodhgaya, Sirmaur, Sambalpur, Vizag, Jammu), IIT Bombay/Delhi DoMS, IMT Ghaziabad"
    }
  ],
  referenceMaterials: [
    {
      title: "MBA Wizards CAT Quant & DILR Compendium",
      type: "Proprietary Textbook",
      desc: "Over 2,500 categorized questions with shortcut formulas, non-traditional solutions, and error-prevention checklists."
    },
    {
      title: "Past 25 Years CAT Actual Papers Archive",
      type: "Official Exam Archive",
      desc: "Fully solved solutions and video explanations for actual CAT papers from 2000 to 2024 across all exam slots."
    },
    {
      title: "Aeon & Academic Philosophy Reading Dossier",
      type: "Reading Collection",
      desc: "150 curated long-form essays matching the exact prose complexity, rhetorical tone, and vocabulary of CAT VARC."
    },
    {
      title: "15 Proctored All-India CAT Simulation Mocks",
      type: "Computer Mock Series",
      desc: "Actual CAT user interface with slotted time counters, virtual calculator, question status palettes, and national percentiles."
    }
  ]
};
