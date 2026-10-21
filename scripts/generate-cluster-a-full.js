const fs = require('fs');
const path = require('path');

function extractAllText(obj) {
  if (typeof obj === 'string') return ' ' + obj;
  if (Array.isArray(obj)) return obj.map(extractAllText).join(' ');
  if (obj && typeof obj === 'object') {
    return Object.keys(obj)
      .filter(k => k !== 'src' && k !== 'coverImage' && k !== 'avatar' && k !== 'slug')
      .map(k => extractAllText(obj[k]))
      .join(' ');
  }
  return '';
}

function countWords(obj) {
  return extractAllText(obj).trim().split(/\s+/).filter(Boolean).length;
}

const { clusterABlogs } = require('./build-cluster-a');
const blogA1 = clusterABlogs[0];

console.log('Blog A1 loaded. Word count:', countWords(blogA1));

// Now construct Blogs A2, A3, A4, A5 with rich, comprehensive, authoritative prose:
const authorSurinder = {
  name: "Mr. Surinder Gupta (IIT Roorkee)",
  role: "Founder & Master Admissions Mentor (25+ Yrs Exp)",
  avatar: "/images/common/surinder-gupta.jpg"
};

// We will construct the full cluster A blogs
const blogsA = [
  blogA1,
  // A2: GMAT Focus Edition Syllabus and Exam Pattern
  {
    slug: "gmat-focus-edition-syllabus-exam-pattern",
    title: "GMAT Focus Edition Syllabus & Exam Pattern Explained",
    subtitle: "The definitive guide to the 2026/2027 GMAT Focus Edition: comprehensive syllabus, section question types, timing rules, 205-805 scoring, and preparation strategy.",
    excerpt: "Complete GMAT Focus Edition syllabus: 3 sections, question types, timing, scoring and how to prepare for Quant, Verbal and Data Insights.",
    metaTitle: "GMAT Focus Edition Syllabus & Exam Pattern Explained",
    metaDescription: "Complete GMAT Focus Edition syllabus: 3 sections, question types, timing, scoring and how to prepare for Quant, Verbal and Data Insights.",
    coverImage: "/images/blogs/gmat-syllabus-2026.jpg",
    author: authorSurinder,
    category: "GMAT Focus",
    tags: [
      "GMAT Focus Edition syllabus",
      "GMAT exam pattern",
      "GMAT sections",
      "GMAT Data Insights",
      "GMAT syllabus for Indian students",
      "GMAT 2026"
    ],
    publishedAt: "2026-10-15T09:30:00Z",
    readTime: 24,
    featured: false,
    accentColor: "#d4af37",
    body: [
      {
        type: "paragraph",
        text: "Understanding the **GMAT Focus Edition syllabus** and exam pattern is the essential first step for any candidate aspiring to gain admission to elite business schools in 2026 and 2027. When the Graduate Management Admission Council (GMAC) officially transitioned from the classic GMAT to the Focus Edition, it executed the most significant restructuring in the examination's 70-year history. This transition was not merely a cosmetic reduction in test time; it represented a complete philosophical overhaul of how managerial aptitude is measured in an era dominated by artificial intelligence, big data analytics, and digital business models."
      },
      {
        type: "paragraph",
        text: "The legacy GMAT was frequently criticized for testing outdated skills—such as memorizing obscure grammatical rules for Sentence Correction and solving complex geometric coordinate geometry proofs that bear little relevance to modern corporate boardroom decision-making. In response, GMAC streamlined the test into a compact 2-hour-and-15-minute exam comprising three equally weighted sections: Quantitative Reasoning, Verbal Reasoning, and an entirely new section named Data Insights. In this comprehensive, authoritative guide, we provide an exhaustive, section-by-section breakdown of the **GMAT Focus Edition syllabus**, question types, timing constraints, adaptive scoring mechanics, and proven preparation blueprints based on over two decades of coaching 700+ scorers at our [GMAT coaching center in Gurgaon](/gmat-coaching-in-gurgaon) and online batches across India."
      },
      {
        type: "heading",
        text: "1. What Changed in the GMAT Focus Edition: The 2026 Structural Evolution",
        level: 2
      },
      {
        type: "paragraph",
        text: "To approach the **GMAT Focus Edition syllabus** strategically, candidates must first appreciate what has been removed, what has been retained, and what has been innovated. GMAC collaborated with leading global business school deans and corporate recruiters to design an exam that measures 'future-ready business skills.' Here is a summary of the seismic structural shifts:"
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Elimination of Analytical Writing Assessment (AWA):** The 30-minute essay has been permanently discarded. Business schools now evaluate an applicant's writing skills through application essays, SOPs, and video interviews rather than a standardized testing terminal.",
          "**Elimination of Sentence Correction (SC):** Idiom memorization and obscure grammar rules are gone. Verbal Reasoning now focuses 100% on analytical reading comprehension and critical logic.",
          "**Removal of Geometry from Quant:** Pure geometric proofs, circle theorems, coordinate geometry, and 3D mensuration have been eliminated from Quantitative Reasoning. The section now focuses entirely on high-yield arithmetic and algebra.",
          "**Integration of Data Insights (DI):** Formerly known as Integrated Reasoning (which was previously unscaled and largely ignored by many candidates), Data Insights is now an official, fully scaled, one-third contributor to your total score.",
          "**Question Review & Edit Functionality:** Candidates can now bookmark questions within each section and return to review and edit up to three responses at the end of the section, provided time remains.",
          "**Section Order Freedom:** You may choose any of the six possible permutations of section orders to suit your individual mental stamina."
        ]
      },
      {
        type: "table",
        headers: [
          "Exam Feature",
          "Classic GMAT (Retired)",
          "GMAT Focus Edition (Current 2026 Standard)",
          "Strategic Implication for Aspirants"
        ],
        rows: [
          ["Total Testing Time", "3 Hours 7 Minutes (excluding breaks)", "2 Hours 15 Minutes (pure testing time)", "Significantly reduced mental fatigue and stamina burnout."],
          ["Total Sections", "4 Sections (Quant, Verbal, IR, AWA)", "3 Sections (Quant, Verbal, Data Insights)", "Cleaner, highly structured preparation agenda."],
          ["Total Question Count", "80 Questions Total", "64 Questions Total (21 Quant, 23 Verbal, 20 DI)", "Fewer questions allows greater focus per problem."],
          ["Total Score Range", "200 to 800 (10-pt intervals, 0-ending)", "205 to 805 (10-pt intervals, 5-ending)", "Unique 5-ending scale prevents confusion with old scores."],
          ["Section Weighting", "Quant & Verbal 100%; IR & AWA separate", "Quant, Verbal, DI equally weighted (1/3 each)", "Data Insights can no longer be ignored or treated lightly."],
          ["Sentence Correction", "Tested heavily (~12-14 questions)", "COMPLETELY REMOVED from the exam", "No need to memorize thousands of grammar rules or idioms."],
          ["Geometry Syllabus", "Tested heavily (~6-8 questions)", "COMPLETELY REMOVED from the exam", "Freed up preparation hours redirected to core arithmetic."],
          ["Answer Review/Edit", "Strictly prohibited; forward-only lock", "Permitted; can edit up to 3 answers per section", "Enables tactical flagging of tough questions for later review."],
          ["Score Reporting", "Send scores BEFORE seeing unofficial results", "View official score first; 48 hours to send 5 free reports", "Complete peace of mind; send only scores you are proud of."]
        ]
      },
      {
        type: "paragraph",
        text: "This evolution represents a dramatic upgrade for candidates who are strong in data interpretation and commercial reasoning. By linking your prep to our [GMAT coaching](/gmat-coaching) methodology, you will quickly master how to convert these structural advantages into a competitive 99th percentile score."
      },
      {
        type: "heading",
        text: "2. Section-Wise Detailed Syllabus: Quant, Verbal, and Data Insights",
        level: 2
      },
      {
        type: "paragraph",
        text: "Let us examine the exact academic syllabus for each of the three sections tested on the GMAT Focus Edition."
      },
      {
        type: "heading",
        text: "Section 1: Quantitative Reasoning (21 Questions, 45 Minutes)",
        level: 3
      },
      {
        type: "paragraph",
        text: "The Quantitative Reasoning section contains 21 Problem Solving questions. You have exactly 45 minutes, allowing an average of 2 minutes and 8 seconds per question. Onscreen calculators are strictly prohibited. The math is roughly equivalent to high-school algebra and arithmetic, but the questions are designed to test deep numerical intuition, estimation shortcuts, and multi-step reasoning."
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Arithmetic Foundations:** High-yield percentage calculations, successive percentage changes, profit and loss statements, simple and compound interest, discount mechanisms, and ratio-proportion-variation problems.",
          "**Number Properties:** Prime factorization, unique factor counts, divisibility algorithms, remainder theorems, units digit patterns, even/odd parity rules, positive/negative operations, and absolute value inequalities.",
          "**Algebra & Equations:** Linear equations in one and two variables, quadratic equations and factoring, simultaneous equations, operational functions and custom symbols, roots and radical simplification, and exponential laws.",
          "**Word Problems & Applied Mathematics:** Work-rate and pipe-cistern problems, time-speed-distance, relative speed and circular tracks, mixture alligations and weighted averages, overlapping sets and 2-way / 3-way Venn diagrams.",
          "**Modern Mathematics & Statistics:** Fundamental counting principle, permutations and combinations with restrictions, basic and conditional probability, and statistical measures (arithmetic mean, median, mode, range, and standard deviation variance)."
        ]
      },
      {
        type: "heading",
        text: "Section 2: Verbal Reasoning (23 Questions, 45 Minutes)",
        level: 3
      },
      {
        type: "paragraph",
        text: "The Verbal Reasoning section contains 23 questions in 45 minutes, giving you an average of 1 minute and 57 seconds per question. Because Sentence Correction has been permanently removed, the section tests only two domains:"
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Critical Reasoning (Approximately 9 to 11 Questions):** You are given short argumentative stimulus passages (typically 50 to 100 words) from business, public policy, science, or sociology. You must analyze the author's logic and solve specific question stems: Assumption (identifying the unstated premise required for the conclusion to hold), Strengthen (finding evidence that reinforces the argument), Weaken (identifying information that undermines the author's claim), Evaluate (determining what question must be answered to test the validity), Boldface (identifying the structural role played by bolded phrases), and Flaw in the Reasoning.",
          "**Reading Comprehension (Approximately 12 to 14 Questions across 3-4 Passages):** You will encounter 3 to 4 dense passages ranging from 250 to 450 words. Passages are drawn from diverse academic fields including microeconomics, corporate history, biophysics, evolutionary biology, and art history. Question types test Main Idea / Primary Purpose, Specific Detail (factual retrieval), Inference (drawing unstated conclusions that must be true based on the text), Author's Tone and Attitude, and Extrapolation (applying the passage logic to an analogous external scenario)."
        ]
      },
      {
        type: "heading",
        text: "Section 3: Data Insights (20 Questions, 45 Minutes)",
        level: 3
      },
      {
        type: "paragraph",
        text: "The Data Insights section is where many candidates make or break their GMAT Focus scores. Consisting of 20 multi-part questions in 45 minutes (average 2 minutes and 15 seconds per question), it tests your ability to synthesize information across visual, quantitative, and textual data sources. An onscreen basic four-function calculator is provided exclusively in this section. The five question formats are:"
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Data Sufficiency (DS):** A question is presented along with two statements labeled (1) and (2). You must evaluate whether statement (1) alone is sufficient, statement (2) alone is sufficient, both statements together are sufficient, or neither statement is sufficient. Note that DS in Focus now tests both mathematical problem sufficiency and business/logic sufficiency.",
          "**Multi-Source Reasoning (MSR):** Presents two or three tabbed documents containing emails, boardroom memoranda, financial balance sheets, and regulatory texts. You must toggle between tabs to evaluate complex scenarios and answer multiple True/False or Yes/No statements.",
          "**Table Analysis:** Features a dynamic, sortable spreadsheet table with up to 20 rows and 6 columns. You can sort by any column to analyze percentiles, medians, and correlations, answering three binary statements per question.",
          "**Graphics Interpretation:** Presents complex visual charts—such as scatter plots with regression trendlines, bubble graphs, dual-axis bar charts, or cumulative frequency ogives—with two dropdown fill-in-the-blank statements.",
          "**Two-Part Analysis:** A versatile format presenting a short problem scenario with two columns of answer choices where you must solve for two interdependent variables simultaneously (e.g., finding the cost of Product X and Product Y)."
        ]
      },
      {
        type: "heading",
        text: "3. Exam Timing, Section Order Freedom, and the Question Review Feature",
        level: 2
      },
      {
        type: "paragraph",
        text: "The GMAT Focus Edition introduces unprecedented test-day ergonomics designed to eliminate unnecessary anxiety and reward genuine strategic competence. Understanding how to leverage these features is an enormous tactical advantage."
      },
      {
        type: "heading",
        text: "Customizable Section Ordering",
        level: 3
      },
      {
        type: "paragraph",
        text: "At the start of your examination, the computer displays a screen offering six distinct section order combinations. Selecting the right sequence depends on your cognitive stamina:"
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Order A (Quant -> Verbal -> Data Insights):** Highly popular among engineers and math-strong applicants who want to lock in a stellar Quant performance before their brain encounters verbal fatigue.",
          "**Order B (Verbal -> Quant -> Data Insights):** Ideal for candidates who find Reading Comprehension mentally draining and need maximum cognitive sharpness for dense text in the opening 45 minutes.",
          "**Order C (Data Insights -> Quant -> Verbal):** Recommended for analytical thinkers who want to tackle the multi-tabbed MSR questions while feeling 100% refreshed.",
          "**Optional 10-Minute Break:** You are granted one optional 10-minute break between Section 1 and Section 2, or between Section 2 and Section 3. Most candidates choose to take this break after Section 2 to hydrate, have a light snack, and reset their mental focus."
        ]
      },
      {
        type: "heading",
        text: "The Question Review and Edit Feature",
        level: 3
      },
      {
        type: "paragraph",
        text: "In the legacy GMAT, candidates were strictly prohibited from returning to previous questions. Once you submitted an answer, it was locked permanently. On the GMAT Focus Edition, GMAC permits you to bookmark as many questions as you wish as you progress through each section. Once you reach the end of the section, if you have time remaining on the 45-minute clock, a 'Review Screen' appears displaying all questions in that section with bookmarks clearly highlighted. You may click on any question to review your work and change your submitted answer—subject to a maximum of three answer changes per section."
      },
      {
        type: "highlight",
        text: "Expert Tactical Advice: Never leave questions blank during your first pass! Because unfinished questions incur severe penalty penalties on the GMAT Focus IRT algorithm, always input an educated guess, bookmark the question, and move on. If you finish the 21 Quant questions with 4 minutes remaining, you can return to your bookmarked questions and resolve them with fresh eyes."
      },
      {
        type: "heading",
        text: "4. The 205–805 Scoring Scale & Percentile Distribution",
        level: 2
      },
      {
        type: "paragraph",
        text: "The GMAT Focus Edition total score scale ranges from 205 to 805, always ending in a digit of 5. Each of the three sections—Quantitative Reasoning, Verbal Reasoning, and Data Insights—is scored on a scale of 60 to 90 in one-point increments. All three sections carry equal weighting in the total score calculation."
      },
      {
        type: "paragraph",
        text: "Because of significant percentile shifts on the Focus Edition, a score of 655 or 705 carries substantially more prestige than the corresponding numbers on the old 800-point scale. The table below outlines the official percentile mapping across the GMAT Focus spectrum:"
      },
      {
        type: "table",
        headers: [
          "GMAT Focus Total Score",
          "Official Percentile Rank",
          "Quant / Verbal / DI Scaled Equivalent",
          "Competitive Admissions Landscape"
        ],
        rows: [
          ["735 - 805", "99.9th Percentile", "Q88+, V86+, DI86+", "Stanford GSB, Harvard, Wharton; Top Merit Fellowships"],
          ["715 - 725", "99.0th - 99.4th %ile", "Q86, V85, DI84", "M7 Business Schools (Columbia, Booth, Kellogg), INSEAD, LBS"],
          ["685 - 705", "96.4th - 98.6th %ile", "Q84, V83, DI82", "ISB Top 5%, Yale SOM, Tuck, MIT Sloan, Berkeley Haas"],
          ["655 - 675", "88.6th - 93.4th %ile", "Q81, V80, DI80", "ISB Median, NYU Stern, Duke Fuqua, UCLA Anderson, Oxford"],
          ["625 - 645", "74.8th - 83.6th %ile", "Q78, V78, DI78", "Top 30 Global Programs, NUS Singapore, Georgetown, Rotman"],
          ["595 - 615", "57.0th - 70.1st %ile", "Q75, V75, DI75", "Tier 2 Business Schools; Specialized MS Programs"],
          ["555 - 585", "42.0th - 52.4th %ile", "Q72, V72, DI72", "Below Competitive Median for Top 50; Retake Recommended"]
        ]
      },
      {
        type: "paragraph",
        text: "Notice that a score of 705 on GMAT Focus puts you in the 98.6th percentile—a level of competitiveness that required a 760 on the classic GMAT! For a deeper understanding of target scores by school, read our analysis on [what is a good GMAT score for top MBA programs](/blogs/good-gmat-gre-score-for-top-mba)."
      },
      {
        type: "heading",
        text: "5. Data Insights Deep Dive: Question Types & High-Yield Tactics",
        level: 2
      },
      {
        type: "paragraph",
        text: "Because Data Insights represents one-third of your entire GMAT Focus score, mastering its unique cognitive demands is non-negotiable. Candidates who treat Data Insights as an afterthought invariably suffer score suppression. Let us examine the high-yield tactics for each format:"
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Data Sufficiency (DS):** Stop calculating exact numerical answers! In Data Insights DS, your goal is solely to determine whether the given statements provide sufficient information to reach a unique answer. Train yourself to use the standard AD/BCE decision tree. If Statement (1) alone is sufficient, eliminate choices B, C, and E; your answer is either A or D. If Statement (1) is not sufficient, eliminate choices A and D; your answer is B, C, or E. Beware of common traps such as assuming variables must be integers or carrying over information from Statement (1) into Statement (2).",
          "**Multi-Source Reasoning (MSR):** Do not read every word of all three tabs before looking at the questions! Read the introductory background paragraph carefully to understand the context. Then read the question stem first to identify which specific tabs contain the required information. Synthesize only the relevant data. MSR questions often test whether a proposed boardroom policy complies with all constraints mentioned across multiple documents.",
          "**Table Analysis:** Use the interactive 'Sort by' dropdown feature relentlessly. If a question asks about the median salary of companies with over 500 employees, sort by employee count first, isolate the relevant cohort, and then inspect the median. Never calculate by hand when sorting accomplishes the task in two seconds.",
          "**Graphics Interpretation:** Pay close attention to axes labels, origin points, units of measurement (e.g., thousands versus millions), and non-linear scales (such as logarithmic grids). Always look at the dropdown options before performing calculations, as the options often indicate how roughly you can estimate.",
          "**Two-Part Analysis:** Treat Two-Part Analysis questions like a system of two simultaneous equations or a paired logic game. Ensure that your chosen answers for Column 1 and Column 2 do not violate shared constraints."
        ]
      },
      {
        type: "heading",
        text: "6. How to Prepare: Study Frameworks & Recommended Official Resources",
        level: 2
      },
      {
        type: "paragraph",
        text: "Achieving a 705+ score on the GMAT Focus Edition requires a structured, multi-phase preparation strategy. Relying on random question practice without a rigorous framework inevitably leads to score plateaus. Follow our four-stage preparation protocol:"
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Phase 1: Conceptual Foundations (Weeks 1 to 4):** Begin by taking the free Official GMAT Focus Practice Exam 1 on [mba.com](https://www.mba.com) to establish your baseline score. Review core arithmetic, algebra, and number properties rules. In Verbal, master the components of Critical Reasoning arguments (Premise, Conclusion, Assumption). In Data Insights, learn the fundamental logic of Data Sufficiency.",
          "**Phase 2: Targeted Topical Practice (Weeks 5 to 8):** Solve official practice questions grouped by topic using the *GMAT Official Guide (OG 2024–2025)*. Maintain an uncompromising Error Log. For every question you answer incorrectly or guess on, classify the root cause into one of four buckets: 1) Concept Gap, 2) Trap/Fallacy Misidentification, 3) Misreading the Question Stem, or 4) Time Pressure Panic.",
          "**Phase 3: Timed Mixed Sets & Data Insights Mastery (Weeks 9 to 11):** Transition from untimed practice to strictly timed sets of 15 to 20 questions across mixed topics. Dedicate 33% of your weekly study hours exclusively to Data Insights using the official GMAC Data Insights Online Question Bank.",
          "**Phase 4: Full Simulation Mocks & Pacing Calibration (Weeks 12 to 14):** Take Official Practice Exams 2 through 6 under strict test center conditions. Analyze every mock test forensically for at least 3 hours before taking the next one. Practice your bookmarking and answer-edit strategy so that it operates automatically on test day."
        ]
      },
      {
        type: "paragraph",
        text: "For a detailed day-by-day timetable tailored specifically for working professionals, download our [GMAT 90-day study plan](/blogs/gmat-study-plan-90-days)."
      },
      {
        type: "heading",
        text: "7. Frequently Asked Questions (FAQ) on GMAT Focus Edition Syllabus",
        level: 2
      },
      {
        type: "faq",
        items: [
          {
            question: "How many questions are on the GMAT Focus Edition and what is the timing?",
            answer: "The GMAT Focus Edition consists of exactly 64 questions administered over 2 hours and 15 minutes of testing time. It is divided into three 45-minute sections: Quantitative Reasoning (21 questions), Verbal Reasoning (23 questions), and Data Insights (20 questions). Candidates also receive one optional 10-minute break between sections."
          },
          {
            question: "Is Sentence Correction really removed from the GMAT Focus Edition?",
            answer: "Yes, Sentence Correction has been permanently removed from the GMAT Focus Edition. The Verbal Reasoning section now contains only Critical Reasoning and Reading Comprehension questions. You no longer need to memorize idiom lists or obscure grammatical rules."
          },
          {
            question: "What math topics are tested on the GMAT Focus Quant section?",
            answer: "The GMAT Focus Quantitative section tests arithmetic and algebra. High-yield topics include number properties, percentages, ratios and proportions, word problems (work-rate, time-speed-distance), linear and quadratic equations, inequalities, powers and roots, permutations, combinations, and statistics. Geometry has been completely removed from the Quant section."
          },
          {
            question: "Is a calculator allowed on the GMAT Focus Edition?",
            answer: "An onscreen basic calculator is permitted ONLY in the Data Insights section. A calculator is STRICTLY PROHIBITED in the Quantitative Reasoning section. Therefore, building mental calculation agility, estimation skills, and number sense is critical for Quant success."
          },
          {
            question: "How does the Question Review and Edit feature work?",
            answer: "Throughout each 45-minute section, you can bookmark as many questions as you wish. When you reach the end of the section, if you have time remaining on the clock, a Review Screen appears allowing you to revisit any question. You are permitted to change your submitted answer on up to three questions per section."
          },
          {
            question: "How is the GMAT Focus Edition scored?",
            answer: "The GMAT Focus Edition is scored on a total scale from 205 to 805 in 10-point increments, with all valid scores ending in a digit of 5. Each of the three sections (Quant, Verbal, and Data Insights) is scored on a scale from 60 to 90, and all three sections contribute equally (one-third each) to your total composite score."
          },
          {
            question: "What is a good GMAT Focus score for Indian business schools like ISB?",
            answer: "For the Indian School of Business (ISB PGP), a competitive GMAT Focus score typically falls between 645 and 705. The median GMAT Focus score for ISB is approximately 665, which corresponds to the 89th percentile and equates to roughly a 710 to 720 score on the legacy GMAT exam."
          }
        ]
      }
    ]
  }
];

module.exports = { blogA2: blogsA[1] };
