const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

const outputDir = path.join(__dirname, '..', 'public', 'lead-magnets');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read MBA Wizard Logo
const logoPath = path.join(__dirname, '..', 'public', 'images', 'common', 'mbawizards-logo.png');
let logoBase64 = null;
if (fs.existsSync(logoPath)) {
  const logoBuf = fs.readFileSync(logoPath);
  logoBase64 = 'data:image/png;base64,' + logoBuf.toString('base64');
}

const primaryColor = [16, 37, 66];   // Deep Navy #102542
const goldColor = [212, 175, 55];    // Gold Accent #D4AF37
const darkText = [33, 37, 41];       // Charcoal #212529
const lightBg = [248, 249, 250];     // Soft Off-white
const accentBorder = [220, 225, 235];

const leadMagnets = [
  {
    slug: 'gmat-vs-gre-which-exam-for-mba',
    title: 'GMAT vs GRE Decision Sheet',
    subtitle: '10-Question Self-Assessment, Side-by-Side Comparison & 30-Day Starter Plan',
    pages: [
      {
        heading: '1. GMAT vs GRE 10-Question Self-Assessment Matrix',
        intro: 'Score yourself (+1 for Option A or B) to identify whether your cognitive profile and career trajectory naturally align with GMAT Focus or GRE General.',
        tableHeaders: ['Question Dimension', 'Option A (Favors GMAT Focus)', 'Option B (Favors GRE General)'],
        tableRows: [
          ['1. Math Style', 'Prefers multi-step word problems & data logic', 'Prefers straightforward geometry & formula recall'],
          ['2. Vocabulary Strength', 'Finds advanced vocabulary memorization tedious', 'Loves learning 1000+ GRE words & context nuances'],
          ['3. Target Program', 'Pure full-time MBA or MS in Business Analytics', 'MBA, Dual Degree, MS in Data Science or Public Policy'],
          ['4. Calculator Dependency', 'Can perform rapid mental arithmetic without calculator', 'Relies on onscreen calculator for quant calculations'],
          ['5. Data Interpretation', 'Excel/chart logic feels intuitive (Data Insights)', 'Prefers standard algebra and geometry over data tables'],
          ['6. Writing Comfort', 'Dislikes essay writing (Focus has 0 essays)', 'Comfortable writing a 30-minute analytical issue essay'],
          ['7. Test Length Stamina', 'Prefers 2 hr 15 min focused test with question review', 'Prefers short sub-2 hour test with fixed section review'],
          ['8. Consulting/Finance Goal', 'Aiming for MBB consulting or bulge-bracket banking', 'Aiming for tech product, general management or policy'],
          ['9. Grammar Rules vs Logic', 'Excited that Sentence Correction is eliminated', 'Comfortable with sentence equivalence & vocab logic'],
          ['10. Baseline Practice Score', 'Official GMAT Practice Exam percentile is higher', 'Official GRE Practice Test percentile is higher']
        ],
        footerNote: 'Scoring: 6+ in Option A = Take GMAT Focus. 6+ in Option B = Take GRE General. Split 5-5 = Take official diagnostics for both.'
      },
      {
        heading: '2. Side-by-Side Structural & Admissions Comparison',
        intro: 'Executive comparison across test architecture, scoring nuances, and business school acceptance.',
        tableHeaders: ['Feature / Dimension', 'GMAT Focus Edition (2026)', 'GRE General Test (Shorter Version)'],
        tableRows: [
          ['Total Duration', '2 Hours 15 Minutes (no essay)', '1 Hour 58 Minutes (with 1 essay)'],
          ['Sections Tested', 'Quantitative (21Q), Verbal (23Q), Data Insights (20Q)', 'Analytical Writing (1 Issue), Verbal (27Q), Quant (27Q)'],
          ['Scoring Scale', '205 to 805 (in 10-point increments)', '130 to 170 per section (260 to 340 total)'],
          ['Adaptive Level', 'Item-adaptive within each section', 'Section-adaptive (Section 2 adapts based on Section 1)'],
          ['Calculator Access', 'Available ONLY in Data Insights section', 'Available throughout all Quantitative sections'],
          ['Question Review & Edit', 'Review all; edit up to 3 answers per section', 'Review and change any answer within remaining section time'],
          ['B-School Acceptance', '100% of global top business schools (ISB, M7, INSEAD)', '99%+ of global business schools accept without penalty'],
          ['Score Validity & Retakes', '5 years valid; up to 5 times in rolling 12 months', '5 years valid; once every 21 days up to 5 times a year'],
          ['Testing Fee (India)', 'Approx $275 USD (test center) / $300 (online)', 'Approx $228 USD (test center or at-home)']
        ],
        footerNote: 'MBA Wizards Benchmark: ISB 80% range is 645-735 on GMAT Focus (~690-770 classic) or 324-332 on GRE.'
      },
      {
        heading: '3. 30-Day Starter Action Plan: From Decision to Baseline Mock',
        intro: 'A rigorous month-1 calendar designed by IIT Roorkee alumni to validate your exam selection and establish fundamental mastery.',
        bullets: [
          'Week 1 (Days 1-7): Take Official GMAT Focus Exam 1 and ETS Official GRE Practice Test 1 under strict timed conditions without preparation. Calculate percentile differences.',
          'Week 2 (Days 8-14): Audit quantitative fundamentals. Review number properties, ratios, percentages, and basic algebra. If GMAT, practice 20 Data Sufficiency questions. If GRE, memorize 100 high-frequency words.',
          'Week 3 (Days 15-21): Deep dive into verbal reasoning. GMAT: Focus on Critical Reasoning argument deconstruction (Premise vs Conclusion). GRE: Focus on Text Completion 2-blank and 3-blank sentences.',
          'Week 4 (Days 22-30): Execute 5 timed sectional sets (45 min each). Build an Error Log tracking: 1) Conceptual gaps, 2) Calculation errors, 3) Time trap questions. Commit 100% to your selected exam.'
        ]
      }
    ]
  },
  {
    slug: 'gmat-focus-edition-syllabus-exam-pattern',
    title: 'GMAT Focus Topic Checklist',
    subtitle: 'Section-by-Section Topic Tracker, Difficulty Priority & Official GMAC Question Log',
    pages: [
      {
        heading: '1. Quantitative Reasoning Topic Checklist (21 Questions, 45 Min)',
        intro: 'Geometry and Data Sufficiency have been removed from Quant. Only pure Problem Solving is tested. Track every topic with target accuracy >= 80%.',
        tableHeaders: ['Quant Topic', 'Question Priority', 'Key Sub-Skills Tested', 'Status [Tick]'],
        tableRows: [
          ['Number Properties', 'HIGH (Essential)', 'Primes, Divisibility rules, Remainders, Evens/Odds, Absolute values', '[  ] Not Started / [  ] Mastered'],
          ['Algebra & Linear Equations', 'HIGH (Essential)', 'Simultaneous equations, Quadratic factoring, Inequalities, Exponents', '[  ] Not Started / [  ] Mastered'],
          ['Arithmetic & Percentages', 'HIGH (Essential)', 'Profit/Loss, Simple & Compound Interest, Successive % changes', '[  ] Not Started / [  ] Mastered'],
          ['Ratios, Proportions & Mixtures', 'MEDIUM-HIGH', 'Alligation rule, Weighted averages, Direct/Inverse variation', '[  ] Not Started / [  ] Mastered'],
          ['Work, Rate & Time', 'MEDIUM-HIGH', 'Combined work formulas, Pipes and cisterns, Relative speed', '[  ] Not Started / [  ] Mastered'],
          ['Word Problems & Translation', 'HIGH (Crucial)', 'Converting English text into algebraic statements without errors', '[  ] Not Started / [  ] Mastered'],
          ['Permutations & Combinations', 'MEDIUM', 'Fundamental counting principle, Slot method, Restrictions & circles', '[  ] Not Started / [  ] Mastered'],
          ['Probability & Sets', 'MEDIUM', 'Independent/Dependent events, Bayes theorem basics, 2 & 3 Venn diagrams', '[  ] Not Started / [  ] Mastered'],
          ['Statistics Basics', 'MEDIUM-HIGH', 'Mean, Median, Mode, Range, Standard Deviation properties', '[  ] Not Started / [  ] Mastered']
        ],
        footerNote: 'Rule of Thumb: Do not spend more than 2 minutes and 8 seconds per question on Quant.'
      },
      {
        heading: '2. Verbal & Data Insights Topic Checklist',
        intro: 'Sentence Correction has been eliminated. Verbal tests Critical Reasoning & Reading Comprehension. Data Insights carries equal weight (205-805).',
        tableHeaders: ['Section / Topic', 'Format / Question Types', 'Cognitive Traps to Watch For', 'Status [Tick]'],
        tableRows: [
          ['Verbal: Critical Reasoning', 'Assumption, Weaken, Strengthen, Evaluate, Boldface', 'Distinguishing between unstated assumption and stated evidence', '[  ] Mastered'],
          ['Verbal: Reading Comprehension', 'Primary purpose, Inference, Detail, Tone, Application', 'Avoid extreme answer choices (always, never, completely)', '[  ] Mastered'],
          ['DI: Data Sufficiency (Math)', 'Determine if (1), (2), both, or neither suffice', 'Calculating value instead of determining sufficiency; carryover bias', '[  ] Mastered'],
          ['DI: Multi-Source Reasoning', '2-3 tabbed documents with email/reports/data', 'Time sink trap: synthesize only the tabs referenced in prompt', '[  ] Mastered'],
          ['DI: Table Analysis', 'Sortable spreadsheet table with 3 binary statements', 'Misinterpreting sort direction or confounding percentages with raw sums', '[  ] Mastered'],
          ['DI: Graphics Interpretation', 'Scatter plots, bubble charts, bar charts with dropdowns', 'Misreading axes scales, logarithmic grids, or legend categories', '[  ] Mastered'],
          ['DI: Two-Part Analysis', 'Single question with 2 interdependent answer columns', 'Solving for variable A but failing to plug back to solve variable B', '[  ] Mastered']
        ],
        footerNote: 'All 3 sections carry equal weight (60 to 90 scaled). Data Insights must receive 33% of your preparation time.'
      },
      {
        heading: '3. Official GMAC Resource Arsenal & Test Day Execution Blueprint',
        intro: 'Recommended sequence of official preparation material for a 705+ (99th percentile) trajectory.',
        bullets: [
          'GMAT Official Guide (OG 2024-2025): Solve all 1000+ questions in timed 20-question sets.',
          'GMAC Quantitative Review & Verbal Review Supplements: Focus exclusively on Hard and Medium tiers.',
          'Data Insights Question Bank: Solve all 100+ official online questions using the native GMAC interface.',
          'Official Practice Exams 1 to 6: Space these across your final 6 weeks. Never take non-official practice tests for score prediction.',
          'Review Feature Strategy: Flag 2-3 doubtful questions per section during your initial pass; reserve 4-5 minutes at the end of each section to review and edit.'
        ]
      }
    ]
  },
  {
    slug: 'gre-syllabus-exam-pattern-for-mba',
    title: 'GRE 500-Word Vocabulary Starter + Formula Sheet',
    subtitle: 'High-Frequency Words, Context Meanings, Sentence Stems & Complete Quant Formula Cheatsheet',
    pages: [
      {
        heading: '1. GRE 50 High-Frequency Essential Words (Sample Starter Set)',
        intro: 'Mastering high-yield vocabulary in context is the single highest-ROI lever for jumping from 150 to 162+ in GRE Verbal Reasoning.',
        tableHeaders: ['Word', 'Part of Speech', 'Primary Meaning', 'Example Sentence Context'],
        tableRows: [
          ['Aberration', 'Noun', 'Departure from what is normal or expected', 'The sudden plunge in quarterly revenue was deemed an aberration.'],
          ['Alacrity', 'Noun', 'Brisk and cheerful readiness; promptness', 'The executive accepted the overseas assignment with genuine alacrity.'],
          ['Ameliorate', 'Verb', 'To make something bad or unsatisfactory better', 'The new tax incentive sought to ameliorate youth unemployment.'],
          ['Anachronism', 'Noun', 'Thing belonging to a period other than its context', 'Using paper ledgers in modern fintech is a glaring anachronism.'],
          ['Belie', 'Verb', 'Fail to give a true impression of; disguise/contradict', 'His calm demeanor belied the fierce corporate rivalry underneath.'],
          ['Capricious', 'Adj', 'Given to sudden and unaccountable changes of mood', 'Investors grew wary of the central bank’s capricious rate shifts.'],
          ['Castigate', 'Verb', 'Reprimand severely; chastise', 'The regulator castigated the rating agency for lax oversight.'],
          ['Cogent', 'Adj', 'Clear, logical, and convincing (of an argument)', 'She delivered a cogent defense of the proposed cross-border acquisition.'],
          ['Disparate', 'Adj', 'Essentially different in kind; not allowing comparison', 'The merger unified five disparate software development groups.'],
          ['Equivocal', 'Adj', 'Open to more than one interpretation; ambiguous', 'The CEO offered an equivocal response regarding impending layoffs.']
        ],
        footerNote: 'Spaced Repetition Rule: Review each word at Day 1, Day 3, Day 7, Day 14, and Day 30 to lock it into long-term memory.'
      },
      {
        heading: '2. Complete GRE Quantitative Formula Cheatsheet',
        intro: 'Memorize these core formulas for rapid retrieval. The onscreen calculator should only be used for complex division/roots.',
        tableHeaders: ['Mathematical Area', 'Key Formulas & Identities', 'Exam Application Shortcut'],
        tableRows: [
          ['Algebraic Identities', '(a+b)^2 = a^2+2ab+b^2; a^2-b^2 = (a-b)(a+b); (a-b)^2 = a^2-2ab+b^2', 'Recognize difference of squares instantly to cancel fractions'],
          ['Arithmetic & % Change', '% Change = (New - Old) / Old * 100; Multiplier = (1 + %/100)', 'Successive discounts of 20% then 10% = 0.8 * 0.9 = 28% net discount'],
          ['Geometry: Triangles', 'Area = 1/2*b*h; 30-60-90 (x, x*sqrt(3), 2x); 45-45-90 (x, x, x*sqrt(2))', 'Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25'],
          ['Geometry: Circles', 'Circumference = 2*pi*r; Area = pi*r^2; Arc Length = (theta/360)*2*pi*r', 'Area of sector = (theta/360)*pi*r^2'],
          ['Polygons & Quadrilaterals', 'Sum of interior angles = (n-2)*180 deg; Parallelogram Area = b*h', 'Trapezoid Area = ((b1 + b2) / 2) * height'],
          ['Coordinate Geometry', 'Slope m = (y2-y1)/(x2-x1); Distance = sqrt((x2-x1)^2 + (y2-y1)^2)', 'Perpendicular lines have slopes m1 * m2 = -1'],
          ['Combinatorics & Permutations', 'nPr = n! / (n-r)!; nCr = n! / [r! * (n-r)!]; Circular arrangements = (n-1)!', 'When order matters = Permutation; when order does not = Combination'],
          ['Probability', 'P(A or B) = P(A) + P(B) - P(A and B); P(At least 1) = 1 - P(None)', 'Always calculate complement P(None) for "at least one" problems']
        ],
        footerNote: 'Target: A score of 165+ in GRE Quant requires 25+ correct out of 27 questions across both sections.'
      },
      {
        heading: '3. Analytical Writing Assessment (AWA) "Analyze an Issue" Blueprint',
        intro: 'How to score 5.0+ on the 30-minute Issue Essay evaluated on clarity, balance, and structured argumentation.',
        bullets: [
          'Minute 0-4 (Outline): Formulate a clear thesis. Decide whether you agree, disagree, or partially agree. Pick 2 compelling examples (history/business/science) and 1 counterpoint.',
          'Minute 5-10 (Intro): Paraphrase the issue prompt, state your nuanced thesis, and roadmap your 2 main supporting reasons.',
          'Minute 11-20 (Body Paragraphs 1 & 2): Deliver specific, evidence-backed arguments. Avoid superficial personal anecdotes; use recognized historical or corporate cases.',
          'Minute 21-26 (Counterargument & Rebuttal): Acknowledge the opposing viewpoint honestly, then explain why your thesis remains superior under most conditions.',
          'Minute 27-30 (Conclusion & Proofreading): Reiterate thesis in fresh words, synthesize main points, and scan for grammar or pronoun-antecedent agreement errors.'
        ]
      }
    ]
  },
  {
    slug: 'gmat-study-plan-90-days',
    title: '90-Day GMAT Planner + Error Log',
    subtitle: 'Week-by-Week 150-Hour Preparation Roadmap, Weekly Time Audit & Forensic Error Log Sheet',
    pages: [
      {
        heading: '1. Week-by-Week 90-Day Phase Roadmap for Working Professionals',
        intro: 'Designed for professionals committing 10-14 hours per week (1.5 hrs/weekday + 4 hrs/weekend day).',
        tableHeaders: ['Week Number', 'Core Focus Area', 'Weekly Tasks & Deliverables', 'Mock / Assessment Target'],
        tableRows: [
          ['Week 1', 'Diagnostic & Quant Basics', 'Take GMAC Practice Exam 1. Revise Number Properties & Arithmetic.', 'Establish Baseline Score (Target 550+)'],
          ['Week 2', 'Algebra & Word Problems', 'Linear & quadratic equations, inequalities, rate/work translation.', 'Quant Sectional Test 1 (Target Q78)'],
          ['Week 3', 'Verbal: Critical Reasoning', 'Premise-conclusion extraction; Assumption & Strengthen question types.', 'Verbal Sectional Test 1 (Target V78)'],
          ['Week 4', 'Verbal: RC & Quant Rev', 'Reading stamina on 400-word passages; P&C and Probability formulas.', 'Diagnostic Review & Phase 1 Audit'],
          ['Week 5', 'Data Insights: DS Logic', 'Data Sufficiency zero-calculation principles, carryover elimination.', 'DI Sectional Test 1 (Target DI76)'],
          ['Week 6', 'Data Insights: Multi-Source', 'Table Analysis sorting, Two-Part Analysis, Graphics Interpretation.', 'DI Sectional Test 2 (Target DI78)'],
          ['Week 7', 'Timed Mixed Practice', 'Timed sets of 20 questions across Quant & Verbal under 40 minutes.', 'GMAC Practice Exam 2 (Target 615+)'],
          ['Week 8', 'Weakness Isolation', 'Review entire error log; drill top 3 persistent mistake categories.', 'Error Log Deep-Dive Analysis'],
          ['Week 9', 'Speed & Pacing Drills', 'Practice 2-minute decision gates; master strategic question skipping.', 'Quant & Verbal Hard Question Sets'],
          ['Week 10', 'Full Simulation Mocks', 'GMAC Practice Exam 3 under strict test conditions at exam time.', 'Mock 3 (Target 655+)'],
          ['Week 11', 'Mock Analysis & Refinement', 'GMAC Practice Exam 4. Forensic 4-hour review of every missed question.', 'Mock 4 (Target 685+)'],
          ['Week 12', 'Peak Performance Tuning', 'GMAC Practice Exam 5. Review flag & edit strategy for final 4 minutes.', 'Mock 5 (Target 705+)'],
          ['Week 13', 'Tapering & Mental Readiness', 'Light formula revision. GMAC Practice Exam 6. Rest 48 hrs prior to test.', 'Official GMAT Exam (Target 705+)']
        ],
        footerNote: 'Golden Rule: Spend 2 hours analyzing a practice test for every 1 hour spent taking it.'
      },
      {
        heading: '2. Forensic Error Log Template: The 4-Bucket Root Cause System',
        intro: 'High scorers never repeat the same mistake twice. Categorize every wrong answer into one of 4 diagnostic buckets.',
        tableHeaders: ['Question ID / Source', 'Topic / Concept', 'Bucket Category', 'Root Cause Analysis', 'Corrective Action Taken'],
        tableRows: [
          ['OG Quant #142', 'Remainders & Modulo', '1. Concept Gap', 'Did not know rule for remainders when dividing negative numbers', 'Re-studied number properties chapter; solved 15 practice problems'],
          ['OG DI #48 (DS)', 'Inequalities & Absolute', '2. Trap / Fallacy', 'Assumed x was an integer; statement (1) allowed fractional values', 'Wrote warning on flashcard: NEVER assume variables are integers'],
          ['OG Verbal #89 (CR)', 'Weaken the Argument', '3. Execution / Reading', 'Misread word "least likely" as "most likely" in question stem', 'Underline question stem keywords before reviewing answer choices'],
          ['Mock 2 Quant #18', 'Work-Rate Equations', '4. Time Pressure Panic', 'Spent 3.5 minutes brute forcing; panicked and guessed incorrectly', 'Instated 2-minute hard rule: if no clear path, eliminate and move on'],
          ['Mock 3 Verbal #14', 'RC Inference', '3. Execution / Reading', 'Picked choice with extreme word "invariably" not stated in passage', 'Rule: GMAT inference choices must be conservative and bulletproof']
        ],
        footerNote: 'Audit your error log every Sunday. If any topic appears 3+ times, pause mock tests and return to conceptual basics.'
      },
      {
        heading: '3. Weekly Study Rhythm Calendar for Maximum Retention',
        intro: 'Optimal time blocks to balance demanding professional careers with high-yield GMAT preparation.',
        bullets: [
          'Monday & Tuesday (6:30 AM - 8:00 AM or 8:30 PM - 10:00 PM): 1.5 Hours Quant Problem Solving (20 timed questions + 30 min review).',
          'Wednesday & Thursday (1.5 Hours): Verbal Critical Reasoning & Reading Comprehension (4 RC passages + 10 CR arguments).',
          'Friday (1.5 Hours): Data Insights focused set (10 Table/Graphics questions + 10 Data Sufficiency problems).',
          'Saturday (4 Hours): Morning full-length mock test or 2 sectionals under official test center conditions.',
          'Sunday (3 Hours): Error log audit, conceptual review of missed topics, flashcard revision, and week-ahead planning.'
        ]
      }
    ]
  },
  {
    slug: 'good-gmat-gre-score-for-top-mba',
    title: 'Target Score Calculator Sheet',
    subtitle: 'B-School Class Profile Medians, Profile Competitiveness Rating & Target Score Matrix',
    pages: [
      {
        heading: '1. Global B-School GMAT Focus vs Classic vs GRE Score Benchmarks',
        intro: 'Official medians and middle 80% ranges across top Indian and international business schools.',
        tableHeaders: ['Business School / Program', 'GMAT Focus Median (2026)', 'GMAT Classic Equivalent', 'GRE General Median', 'Indian Applicant Safe Target'],
        tableRows: [
          ['Stanford GSB', '715 (99th %ile)', '740-750', '328 (Q165, V163)', '735+ Focus / 330+ GRE'],
          ['Harvard Business School (HBS)', '705 (99th %ile)', '730-740', '326 (Q164, V162)', '715+ Focus / 328+ GRE'],
          ['Wharton (Univ of Pennsylvania)', '715 (99th %ile)', '740', '328 (Q166, V162)', '725+ Focus / 330+ GRE'],
          ['INSEAD (France / Singapore)', '675 (93rd %ile)', '710', '322 (Q163, V159)', '685+ Focus / 325+ GRE'],
          ['London Business School (LBS)', '685 (95th %ile)', '715', '324 (Q164, V160)', '695+ Focus / 326+ GRE'],
          ['ISB (Hyderabad / Mohali)', '665 (89th %ile)', '710', '324 (Q165, V159)', '675+ Focus / 325+ GRE'],
          ['IIM Ahmedabad (PGPX 1-Year)', '675 (93rd %ile)', '715', '322 (Q164, V158)', '685+ Focus / 324+ GRE'],
          ['IIM Bangalore (EPGP 1-Year)', '665 (89th %ile)', '710', '320 (Q163, V157)', '675+ Focus / 322+ GRE'],
          ['IIM Calcutta (MBAEx 1-Year)', '665 (89th %ile)', '705', '320 (Q162, V158)', '675+ Focus / 322+ GRE']
        ],
        footerNote: 'Note: For over-represented applicant pools (Indian Male Engineers), add +20 to +30 points to the school median.'
      },
      {
        heading: '2. Profile Competitiveness & Target Score Matrix',
        intro: 'Evaluate your work experience, GPA, leadership, and diversity to compute your minimum and safe test score targets.',
        tableHeaders: ['Applicant Profile Category', 'Key Profile Attributes', 'Minimum Viable GMAT Focus', 'Safe Competitive Target Score'],
        tableRows: [
          ['Over-Represented (IT / Engg Male)', '4 yrs software/tech services, Tier 2/3 college, high GPA', '685 (95th %ile)', '715+ Focus / 328+ GRE'],
          ['High-Finance / MBB Consulting', 'Top tier bulge bracket or strategy consulting, Tier 1 college', '655 (86th %ile)', '685+ Focus / 324+ GRE'],
          ['Non-Traditional / Arts / NGO', 'Social sector, public policy, creative media, entrepreneurship', '635 (79th %ile)', '665+ Focus / 320+ GRE'],
          ['Under-Represented / Diversity', 'Women in STEM, exceptional sports/military, unique industry', '645 (83rd %ile)', '675+ Focus / 322+ GRE'],
          ['Experienced Professional (7+ Yrs)', 'Significant managerial impact, global projects, team leadership', '635 (79th %ile)', '665+ Focus / 320+ GRE']
        ],
        footerNote: 'Admissions Principle: Your test score opens the door; your essays, recommendations, and interview earn the admit.'
      },
      {
        heading: '3. Strategic Score Evaluation & Retake Decision Protocol',
        intro: 'A four-step framework to determine whether a retake is warranted before submitting applications.',
        bullets: [
          'Step 1: Compare your official score with the school median. If you are >= 20 points below the median, an automatic retake is recommended.',
          'Step 2: Check sectional balance. Even with a high total, a quant or verbal percentile below 60th percentile raises red flags with admissions committees.',
          'Step 3: Audit recent practice mock scores. If your official score was 30+ points lower than your average of GMAC Mocks 3-6, your score was suppressed by test anxiety and a retake will yield higher results.',
          'Step 4: Assess round timeline. If retaking pushes you from Round 1 to Round 2, retake if your score can jump by 30+ points. Do not delay application to Round 3.'
        ]
      }
    ]
  },
  {
    slug: 'cat-exam-complete-guide',
    title: 'CAT Starter Kit',
    subtitle: 'Section-Wise Syllabus, 6-Month Preparation Roadmap & Forensic Mock Analysis Template',
    pages: [
      {
        heading: '1. CAT 120-Minute Exam Blueprint & Sectional Breakdown',
        intro: 'Conducted annually by the IIMs for 3.3+ lakh aspirants. Master the sectional pacing and TITA mechanics.',
        tableHeaders: ['Section Name', 'Duration', 'Total Questions', 'MCQ Questions (-1 Neg)', 'Non-MCQ TITA (0 Neg)', 'Target Attempts for 99%ile'],
        tableRows: [
          ['VARC (Verbal Ability & RC)', '40 Minutes', '24 Questions', '18-20 Questions', '4-6 Questions', '16-18 Attempts (85%+ Acc)'],
          ['DILR (Data Interp & Logical Res)', '40 Minutes', '20 Questions (4 sets of 5)', '15-18 Questions', '2-5 Questions', '10-12 Attempts (2-2.5 Sets)'],
          ['QA (Quantitative Ability)', '40 Minutes', '22 Questions', '14-16 Questions', '6-8 Questions', '13-15 Attempts (85%+ Acc)'],
          ['TOTAL EXAM', '120 Minutes', '66 Questions', 'Approx 48-54 MCQs', 'Approx 12-18 TITAs', '40-44 Attempts (~99.5 %ile)']
        ],
        footerNote: 'Marking: +3 for Correct, -1 for Wrong MCQ, 0 for Unattempted or Wrong TITA. Section switching is strictly locked.'
      },
      {
        heading: '2. Section-Wise High-Yield Syllabus & Weightage Analysis',
        intro: 'CAT does not reward solving everything. It rewards picking the right questions and eliminating negative marks.',
        tableHeaders: ['Section', 'High-Yield Core Topics', 'Typical Question Share', 'High-Scorer Preparation Strategy'],
        tableRows: [
          ['VARC: Reading Comprehension', 'Philosophy, Economics, Sociology, Science, History essays', '16 Questions (4 passages)', 'Read Aeon essays, The Hindu editorials daily; focus on author tone'],
          ['VARC: Verbal Ability', 'Para Jumbles, Para Summary, Odd Sentence Out, Sentence Place', '8 Questions (mostly TITA)', 'Leverage pronoun and chronological links; zero penalty on TITA'],
          ['DILR: Logical Reasoning', 'Linear & Circular arrangements, Tournaments, Matrix puzzles', '10 Questions (2 sets)', 'Spend first 4 mins scanning all sets; solve the 2 easiest sets completely'],
          ['DILR: Data Interpretation', 'Tables, Bar/Pie charts, Venn diagrams, Scatter plots, Max-Min', '10 Questions (2 sets)', 'Approximate calculations; look for sets with independent sub-questions'],
          ['QA: Arithmetic (Anchor)', 'Percentages, Profit/Loss, TSD, Time/Work, Mixtures, Ratios', '8-10 Questions (~40%)', 'Must master completely; arithmetic alone guarantees 90+ percentile in QA'],
          ['QA: Algebra (Anchor)', 'Linear/Quadratic equations, Inequalities, Logs, Sequences', '6-8 Questions (~30%)', 'Backsolve with answer choices; memorize properties of AP/GP and functions'],
          ['QA: Geometry & Numbers', 'Triangles, Circles, Mensuration, Number properties, Remainders', '4-6 Questions (~20%)', 'Learn core theorem shortcuts; skip multi-concept geometry if time-pressed']
        ],
        footerNote: 'Strategic Insight: Solving just 10 questions in DILR with 100% accuracy yields a 99th percentile in DILR.'
      },
      {
        heading: '3. Month-by-Month 6-Month Roadmap to 99th Percentile',
        intro: 'A proven phase-by-phase framework created by IIM alumni mentors.',
        bullets: [
          'Months 1 & 2 (Foundations): Build conceptual clarity across QA (Arithmetic & Algebra), read 2 long essays daily for VARC, solve 2 DILR sets daily.',
          'Months 3 & 4 (Sectional Mastery & Speed): Transition to timed topic tests. Take your first 5 full-length mocks. Start building a forensic error log.',
          'Month 5 (Aggressive Mock Testing): Take 2 full-length mocks per week (total 10-12 mocks). Focus exclusively on question selection and skipping time-sinks.',
          'Month 6 (Tapering & Strategy Lock): Re-solve past 7 years of CAT actual papers. Take 1 mock per week under your allocated slot time (Slot 1, 2, or 3).'
        ]
      }
    ]
  },
  {
    slug: 'how-to-prepare-for-cat-beginners',
    title: 'CAT 180-Day Planner',
    subtitle: 'Printable Day-by-Day Preparation Tracker, Weekly Milestones & Mock Score Progression Log',
    pages: [
      {
        heading: '1. 180-Day Daily Study Routine & Weekly Target Blueprint',
        intro: 'Sustainable schedule designed for college students and working professionals aiming for IIM ABC.',
        tableHeaders: ['Preparation Stage', 'Daily Commitment (Weekday)', 'Daily Commitment (Weekend)', 'Milestone Deliverable Target'],
        tableRows: [
          ['Days 1 - 30 (Month 1)', '2.5 Hours (1.5 hr QA, 1 hr VARC)', '5 Hours (QA Practice + 3 DILR sets)', 'Complete Arithmetic + 30 DILR Sets solved'],
          ['Days 31 - 60 (Month 2)', '2.5 Hours (1 hr Algebra, 1.5 hr VARC)', '6 Hours (Take Mock 1 & 2 + 3 hr analysis)', 'Complete Algebra + First baseline mock taken'],
          ['Days 61 - 90 (Month 3)', '3.0 Hours (1 hr QA, 1 hr DILR, 1 hr VARC)', '6 Hours (Take Mock 3 & 4 + Sectionals)', 'Sectional test accuracy >= 80% on Arithmetic'],
          ['Days 91 - 120 (Month 4)', '3.0 Hours (Mixed timed sets + Error log)', '7 Hours (2 Full Mocks + in-depth audit)', '8 Mocks completed; average percentile 85+'],
          ['Days 121 - 150 (Month 5)', '3.5 Hours (Mock analysis + Weak topics)', '8 Hours (2 Full Mocks + Past CAT papers)', '16 Mocks completed; average percentile 95+'],
          ['Days 151 - 180 (Month 6)', '2.0 Hours (Formula revision + Light drills)', '5 Hours (1 Mock/week + Slot simulation)', 'Peak test readiness; question selection mastered']
        ],
        footerNote: 'Consistency Rule: Studying 2.5 hours every day beats studying 10 hours once a week by a factor of 3x in retention.'
      },
      {
        heading: '2. Mock Score & Percentile Progression Tracker',
        intro: 'Log your performance across 15 full-length mocks to visualize trajectory and isolate volatile sections.',
        tableHeaders: ['Mock # / Date', 'VARC Score (Marks)', 'DILR Score (Marks)', 'QA Score (Marks)', 'Total Score', 'Overall Percentile', 'Top Error Reason'],
        tableRows: [
          ['Mock 1 (Day 45)', '18', '8', '12', '38', '68.4 %ile', 'Time panic in DILR; got stuck on set 1'],
          ['Mock 3 (Day 75)', '26', '14', '18', '58', '84.2 %ile', 'Silly calculation errors in QA arithmetic'],
          ['Mock 5 (Day 100)', '32', '18', '24', '74', '92.1 %ile', 'Good VARC; skipped wrong DILR set'],
          ['Mock 8 (Day 125)', '36', '24', '30', '90', '96.8 %ile', 'Balanced performance across all sections'],
          ['Mock 12 (Day 150)', '42', '28', '33', '103', '98.9 %ile', 'Strong question selection; 0 negative marks in DILR'],
          ['Mock 15 (Day 170)', '45', '32', '38', '115', '99.6 %ile', 'Peak strategy; executed plan without deviation']
        ],
        footerNote: 'Target: A raw score of 80-85 marks typically secures ~98th percentile; 95-105 marks secures 99.5+ percentile.'
      },
      {
        heading: '3. The 4 Golden Rules of Beginner CAT Preparation',
        intro: 'Fundamental mindsets shared by 99+ percentilers from IIT Roorkee and IIM alumni.',
        bullets: [
          'Rule 1: Accuracy Over Attempts. Attempting 15 questions with 90% accuracy yields more marks than attempting 22 questions with 60% accuracy.',
          'Rule 2: Master the Art of Leaving. If a question cannot be formulated within 45 seconds, flag and move on immediately. Every minute wasted costs marks.',
          'Rule 3: Beware the DILR Sinkhole. Never spend more than 5 minutes exploring a DILR set without writing down concrete data representations.',
          'Rule 4: Review Your Mocks in Detail. Reviewing every mock question takes at least 3 hours. Redo every wrong and skipped question without a timer.'
        ]
      }
    ]
  },
  {
    slug: 'cat-score-vs-percentile',
    title: 'CAT Percentile Predictor Sheet',
    subtitle: 'Raw Score to Scaled Score & Percentile Mapping, Multi-Slot Normalization & Sectional Cutoff Guide',
    pages: [
      {
        heading: '1. Official CAT Raw Score vs Percentile Conversion Matrix',
        intro: 'Calibrated using historical multi-slot data across recent CAT test administrations (Total: 198 Marks).',
        tableHeaders: ['Target Percentile', 'VARC Score (~72 Marks)', 'DILR Score (~60 Marks)', 'QA Score (~66 Marks)', 'Total Raw Score (~198 Marks)', 'Estimated IIM Calls'],
        tableRows: [
          ['99.9+ Percentile', '48-52 Marks', '35-38 Marks', '42-46 Marks', '118-125 Marks', 'IIM Ahmedabad, Bangalore, Calcutta (All IIMs)'],
          ['99.5 Percentile', '42-45 Marks', '30-33 Marks', '34-37 Marks', '100-105 Marks', 'IIM A, B, C, L, K, I, FMS Delhi, SPJIMR'],
          ['99.0 Percentile', '36-40 Marks', '25-28 Marks', '28-31 Marks', '86-92 Marks', 'IIM Lucknow, Kozhikode, Indore, MDI, IIT Bombay'],
          ['98.0 Percentile', '32-35 Marks', '21-24 Marks', '23-26 Marks', '75-80 Marks', 'New IIMs (Udaipur, Trichy, Ranchi), IIT Delhi'],
          ['95.0 Percentile', '26-29 Marks', '16-19 Marks', '17-20 Marks', '60-65 Marks', 'Baby IIMs, IMT Ghaziabad, XIMB, FORE, TAPMI'],
          ['90.0 Percentile', '21-24 Marks', '12-14 Marks', '12-15 Marks', '48-52 Marks', 'GIM Goa, Great Lakes, KJ Somaiya, LBSIM']
        ],
        footerNote: 'Normalization Note: Slot difficulty adjustments shift raw scores by +/- 2 to 5 marks to ensure fairness across morning, afternoon, and evening slots.'
      },
      {
        heading: '2. Sectional Cutoff Criteria for Top IIMs (General Category)',
        intro: 'Meeting overall percentile alone is insufficient. Candidates must clear sectional cutoffs across all three sections.',
        tableHeaders: ['IIM / Institution', 'VARC Sectional Cutoff', 'DILR Sectional Cutoff', 'QA Sectional Cutoff', 'Minimum Overall Cutoff', 'Actual Real Shortlist %ile'],
        tableRows: [
          ['IIM Ahmedabad', '70 Percentile', '70 Percentile', '70 Percentile', '80 Percentile', '99.6+ (Engg) / 97+ (Non-Engg)'],
          ['IIM Bangalore', '80 Percentile', '75 Percentile', '75 Percentile', '85 Percentile', '99.5+ (High Acads Weightage)'],
          ['IIM Calcutta', '75 Percentile', '75 Percentile', '80 Percentile', '85 Percentile', '99.7+ (Engg) / 98.5+ (Non-Engg)'],
          ['IIM Lucknow', '85 Percentile', '85 Percentile', '85 Percentile', '90 Percentile', '99.0+ (Strict Sectional Balancing)'],
          ['IIM Kozhikode', '75 Percentile', '75 Percentile', '75 Percentile', '85 Percentile', '98.5+ (High Gender Diversity)'],
          ['IIM Indore', '80 Percentile', '80 Percentile', '80 Percentile', '90 Percentile', '98.0+ (10th/12th Marks Crucial)'],
          ['FMS Delhi', 'No Sectional Cutoff', 'No Sectional Cutoff', 'No Sectional Cutoff', 'N/A', '99.4+ (High VARC Weightage: 40%)']
        ],
        footerNote: 'Warning: One single section under 75th percentile will instantly disqualify you from IIM A, B, C, and L regardless of a 99.8 overall percentile.'
      },
      {
        heading: '3. Reverse-Engineering Your 99th Percentile Question Selection',
        intro: 'How to convert time into marks on exam day with zero negative penalties.',
        bullets: [
          'VARC Goal (40 Marks): Attempt 16 RC questions (3 passages) + 4 VA questions = 20 attempts. Aim for 16 correct, 4 wrong = 16*3 - 4 = 44 marks.',
          'DILR Goal (28 Marks): Attempt 2 full sets (10 questions) with 100% accuracy = 10*3 = 30 marks. Zero negative marks guaranteed.',
          'QA Goal (30 Marks): Attempt 12 questions (focus on Arithmetic & Algebra) with 11 correct, 1 wrong = 11*3 - 1 = 32 marks.',
          'Combined Result: 44 + 30 + 32 = 106 marks, which comfortably guarantees 99.5+ percentile in CAT.'
        ]
      }
    ]
  },
  {
    slug: 'cat-mock-test-analysis-strategy',
    title: 'CAT Mock Analysis Template',
    subtitle: 'Forensic Post-Mock Audit Sheet, Time-Sink Elimination Tracker & Action Item Protocol',
    pages: [
      {
        heading: '1. The 5-Step Forensic Mock Analysis Framework',
        intro: 'A structured review protocol that extracts maximum improvement from every 2-hour mock test.',
        tableHeaders: ['Analysis Step', 'Key Objective', 'Action Item to Execute', 'Target Metric to Improve'],
        tableRows: [
          ['Step 1: Attempt & Accuracy Log', 'Map all 66 questions into 4 states', 'Classify each question: Correct, Wrong, Unattempted, Guessed', 'Accuracy Rate >= 85%'],
          ['Step 2: Error Categorization', 'Identify why mistakes happened', 'Tag every error into: Concept Gap, Silly Calc, Reading Error, Panic', 'Zero Silly Mistakes'],
          ['Step 3: Un-timed Re-Attempt', 'Test actual capability without clock', 'Solve all skipped and wrong questions without timer; verify answers', 'Un-timed Score > 120'],
          ['Step 4: Time-Sink Audit', 'Detect wasted exam minutes', 'Identify all questions where > 2.5 mins was spent without yielding +3', '< 5 Mins Wasted on Misses'],
          ['Step 5: Single Action Item', 'Prevent repeated failure modes', 'Write 1 actionable behavioral rule for the next mock test', 'Execute Rule in Mock N+1']
        ],
        footerNote: 'Forensic Rule: Never take Mock N+1 until every question of Mock N has been re-solved and classified.'
      },
      {
        heading: '2. Section-Wise Diagnostic Audit Sheet',
        intro: 'Specific diagnostic checkpoints to isolate root causes in VARC, DILR, and Quant.',
        tableHeaders: ['Section', 'Common Failure Symptoms', 'Root Cause Diagnosis', 'Prescribed Corrective Drill'],
        tableRows: [
          ['VARC', 'High attempts (22+) but low accuracy (< 60%)', 'Skimming passages too fast; relying on gut feeling rather than text', 'Reduce attempts to 16; verify every answer with direct passage evidence'],
          ['VARC', 'Stuck between 2 closely competing answer options', 'Failing to spot single extreme word (all, never, primary) in distractor', 'Identify the elimination differentiator; extreme words are 90% wrong'],
          ['DILR', 'Spent 18 minutes on 1 set and got 0 questions right', 'Failed to scan all 4 sets upfront; ego prevented quitting early', 'Enforce 4-minute scan rule; if no deduction table by min 5, quit immediately'],
          ['DILR', 'Solved 1 set easily, panicked and could not start set 2', 'Mental fatigue; high cognitive overload from complex data', 'Take 30-sec breather between sets; pick set with fewest variables'],
          ['QA', 'Attempted 16 questions, got 6 wrong due to calculation', 'Rushing arithmetic steps; mental math without scratch pad checks', 'Write down unit digits and intermediate steps; avoid speed arrogance'],
          ['QA', 'Could not reach the last 5 questions of the section', 'Got stuck on 2 difficult geometry questions in the first 15 mins', 'Scan entire paper in 3 rounds: Round 1 (easy), Round 2 (medium), Round 3 (hard)']
        ],
        footerNote: 'Success Metric: A candidate who reduces negative marks from -8 to -2 gains +18 scaled marks (~10 percentile jump).'
      },
      {
        heading: '3. Reusable Post-Mock Action Sheet: Commit to Next Mock',
        intro: 'Fill this sheet immediately after analyzing each mock test to anchor behavioral modifications.',
        bullets: [
          'My Top Time-Sink Question in this Mock was: Section ________ Question # ________ Time Wasted: ________ mins.',
          'The Single Concept I need to revise before the next mock is: ___________________________________________________.',
          'My Attempt Strategy for the next mock: VARC Attempts Target: _____ | DILR Sets Target: _____ | QA Attempts: _____.',
          'My Behavioral Non-Negotiable Rule for the next mock: "I will immediately leave any question that exceeds 2.5 minutes."'
        ]
      }
    ]
  },
  {
    slug: 'cat-vs-gmat-vs-gre',
    title: 'MBA Exam Chooser Worksheet',
    subtitle: 'Career Trajectory, Budget, Geographic Mobility & Cognitive Profile Decision Framework',
    pages: [
      {
        heading: '1. Executive Comparison: CAT vs GMAT Focus vs GRE General',
        intro: 'Selecting the correct examination saves 6-12 months of misdirected preparation effort.',
        tableHeaders: ['Key Decision Factor', 'CAT (Common Admission Test)', 'GMAT Focus Edition', 'GRE General Test'],
        tableRows: [
          ['Primary Target Market', 'Top Indian B-Schools (IIMs, FMS, SPJIMR, IITs)', 'Global MBA (M7, LBS, INSEAD) + Indian Exec/1-Yr', 'Global MBA, MS, Dual Degrees, Public Policy'],
          ['Test Window & Frequency', 'Once a year only (last Sunday of November)', 'Year-round; multiple attempts (up to 5/year)', 'Year-round; multiple attempts (once every 21 days)'],
          ['Score Validity', '1 admission cycle only (~1 year)', '5 full years', '5 full years'],
          ['Testing Style', 'Speed-based, high competition, fixed sections', 'Item-adaptive, logic/data heavy, 2h 15m', 'Section-adaptive, vocabulary heavy, 1h 58m'],
          ['Competition Density', '3.3+ lakh candidates for ~5,000 top IIM seats', 'Global percentile curve against global pool', 'Global percentile curve against global pool'],
          ['Best For Profile', 'Freshers & professionals with 0-3 yrs experience', 'Professionals with 2-8 yrs experience; consulting/fin', 'Flexible applicants considering MS + MBA or tech roles'],
          ['Cost of Attendance Target', 'Rs 20L - 28L (Top IIMs); high domestic ROI', 'Rs 80L - 1.8 Cr (US/EU); high global salary', 'Rs 50L - 1.5 Cr (US/EU/Global STEM programs)']
        ],
        footerNote: 'Key Takeaway: CAT is an elimination exam (relative ranking). GMAT/GRE are benchmark exams (absolute score).'
      },
      {
        heading: '2. Profile Matching Decision Tree: Which Exam Fits You?',
        intro: 'Answer these 4 strategic questions to determine your primary and secondary examination focus.',
        tableHeaders: ['Your Profile & Strategic Constraints', 'Recommended Exam Path', 'Rationale & Next Step Action'],
        tableRows: [
          ['Where do you want to work in 5 years? (India)', 'Primary: CAT / Secondary: GMAT', 'Target 2-year PGP at IIM A, B, C or FMS Delhi; use GMAT for ISB as backup'],
          ['Where do you want to work in 5 years? (Abroad)', 'Primary: GMAT Focus or GRE', 'Global B-schools do not accept CAT. Focus 100% on GMAT or GRE'],
          ['Do you have > 4 years of work experience?', 'Primary: GMAT Focus / GRE', 'Executive 1-year programs (IIM PGPX, ISB, INSEAD) accept GMAT/GRE and offer higher ROI'],
          ['Are you strong in mental math and data interpretation?', 'Primary: GMAT Focus Edition', 'Data Insights carries 33% weightage; play to your cognitive strengths'],
          ['Are you applying to MS in Business Analytics + MBA?', 'Primary: GRE General or GMAT', 'Both exams keep both options wide open across US and European universities']
        ],
        footerNote: 'Dual Prep Feasibility: Prepare for CAT Quant & Verbal first; adapt to GMAT Data Insights or GRE Vocab over 30 days.'
      },
      {
        heading: '3. 15-Minute Exam Selector Action Checklist',
        intro: 'Execute these three verification steps this week before purchasing coaching or books.',
        bullets: [
          'Step 1: Check the admissions pages of your top 5 dream business schools. Record their accepted tests and average scores.',
          'Step 2: Take 1 free official diagnostic test for GMAT Focus (mba.com) and 1 past CAT paper. Compare your baseline percentiles.',
          'Step 3: If targeting IIMs via CAT, verify your class 10th, 12th, and graduation percentages against individual IIM shortlisting criteria.'
        ]
      }
    ]
  },
  {
    slug: 'iim-admission-process-complete-guide',
    title: 'IIM Admission Timeline and Checklist',
    subtitle: 'Month-by-Month Calendar from CAT Registration to Final Offer Letter & Document Verification',
    pages: [
      {
        heading: '1. IIM Admissions Architecture: 4-Stage Selection Pipeline',
        intro: 'Securing an IIM seat requires clearing 4 sequential filters. A high CAT percentile only unlocks Stage 2.',
        tableHeaders: ['Selection Stage', 'Timeline', 'Evaluation Components', 'Weightage Range in Final Merit'],
        tableRows: [
          ['Stage 1: CAT Examination', 'Last Sunday of November', 'Sectional & Overall CAT Percentile across VARC, DILR, QA', 'Gatekeeper for Shortlisting (30% - 60% weight)'],
          ['Stage 2: Composite Shortlisting', 'Early to Mid January', 'CAT score + 10th/12th/Grad Marks + Work Ex + Diversity', 'Decides who receives WAT-GD-PI interview calls'],
          ['Stage 3: WAT & PI Rounds', 'February to April', 'Written Ability Test (essay) + Personal Interview panel', '35% to 50% weight in Final Offer generation'],
          ['Stage 4: Final Merit List & Offers', 'Mid-April to Early May', 'Composite sum of all parameters; category-wise merit lists', 'Final admission offer letter issued with fee deposit']
        ],
        footerNote: 'Critical Rule: An applicant with 99.8 percentile can be rejected in Stage 3 if the interview score falls below the qualifying cutoff.'
      },
      {
        heading: '2. Month-by-Month Master Admissions Calendar',
        intro: 'Never miss a statutory deadline. Track every milestone from August registration to June matriculation.',
        tableHeaders: ['Month', 'Key Admissions Milestone', 'Mandatory Action for Applicant', 'Status [Tick]'],
        tableRows: [
          ['August', 'CAT Official Notification & Portal Opens', 'Register on iimcat.ac.in; upload category/PwD certificates', '[  ] Complete'],
          ['September', 'CAT Application Closes (Mid-Sept)', 'Double check test city preferences and uploaded signature/photo', '[  ] Complete'],
          ['October', 'Admit Card Release & Mock Slot', 'Download admit card; verify slot timing (Slot 1, 2, or 3)', '[  ] Complete'],
          ['November', 'CAT Exam Day (Last Sunday)', 'Take CAT exam; maintain calm; verify answer sheet key afterwards', '[  ] Complete'],
          ['December', 'Objection Tracker & Candidate Key', 'Challenge official answer key if errors found; begin WAT/PI reading', '[  ] Complete'],
          ['January', 'CAT Results & IIM Call Letters', 'Check percentile; fill IIM Bangalore/Lucknow/Indore stage 2 forms', '[  ] Complete'],
          ['February', 'CAP (Common Admission Process) & Top IIM PIs', 'Appear for IIM Ahmedabad, Bangalore, Calcutta WAT-PI rounds', '[  ] Complete'],
          ['March', 'CAP Interviews & Other B-Schools (FMS/SPJIMR)', 'Complete interviews; keep academic transcripts ready', '[  ] Complete'],
          ['April', 'Final Admission Offers Released', 'First merit lists announced; pay commitment fee to secure seat', '[  ] Complete'],
          ['May - June', 'Waitlist Movement & Loan Processing', 'Finalize education loan; document verification; campus registration', '[  ] Complete']
        ],
        footerNote: 'Document Verification: Missing graduation original marksheet or caste validity certificate cancels admission immediately.'
      },
      {
        heading: '3. Strategic Document & Profile Checklist for IIM Shortlists',
        intro: 'Assemble these documents before CAT results are announced in January.',
        bullets: [
          'Academic Records: 10th mark sheet, 12th mark sheet, semester-wise graduation transcripts, and provisional degree certificate.',
          'Work Experience Proof: Appointment letter, first month salary slip, last 3 months salary slips, and experience/relieving letter.',
          'Category Certificates: Central Govt format OBC-NCL / EWS / SC / ST / PwD certificate valid for the financial year.',
          'Extracurricular Evidence: State/National certificates, corporate awards, NGO contributions, and leadership achievements.'
        ]
      }
    ]
  },
  {
    slug: 'iim-ahmedabad-vs-bangalore-vs-calcutta',
    title: 'IIM Fit Scorecard',
    subtitle: 'Comparative Matrix for IIM ABC across Pedagogy, Placements, Culture, Fees & Career Trajectory',
    pages: [
      {
        heading: '1. The Holy Trinity Comparison: IIM A vs IIM B vs IIM C',
        intro: 'All three institutions represent the pinnacle of Indian management education, but each has a distinct cultural DNA.',
        tableHeaders: ['Comparison Metric', 'IIM Ahmedabad (WIMWI)', 'IIM Bangalore (The Silicon Valley of India)', 'IIM Calcutta (Joka)'],
        tableRows: [
          ['Core Pedagogy', '100% Case Study Method (Harvard style)', 'Blend of Case, Project & Experiential Learning', 'Rigorous Quantitative & Analytical Modeling'],
          ['Culture & Atmosphere', 'High academic pressure, intense competition, disciplined', 'Collaborative, entrepreneurial, tech-forward, startup hub', 'Warm community, student-driven, campus sports, mathematically sharp'],
          ['Flagship Domain Strength', 'Strategy Consulting, General Mgmt, Private Equity', 'Product Management, Tech Consulting, Startups, VC', 'Investment Banking, Quantitative Finance, FinTech'],
          ['Selection Criteria Weight', 'Strict academic history (10th/12th/Grad) + CAT', 'Holistic profile, substantial work-ex weight, SOP crucial', 'High CAT score weightage; relatively forgiving on grad marks'],
          ['Batch Size (PGP)', 'Approx 400 - 420 students', 'Approx 500 - 520 students', 'Approx 460 - 480 students'],
          ['Average Placement (2025/26)', 'Rs 34.5 - 36.0 Lakhs / annum (Audited)', 'Rs 35.0 - 36.5 Lakhs / annum', 'Rs 34.0 - 35.5 Lakhs / annum'],
          ['International Offers', 'Strong Presence in Middle East & London', 'Strong Presence in Singapore & Europe', 'Strong Presence in London & Singapore Finance'],
          ['Total Tuition & Fees', 'Approx Rs 26.5 Lakhs', 'Approx Rs 26.0 Lakhs', 'Approx Rs 27.0 Lakhs']
        ],
        footerNote: 'Audited Placement Standards: IIM Ahmedabad adheres to IPRS (Indian Placement Reporting Standards) for audited figures.'
      },
      {
        heading: '2. IIM ABC Candidate Fit Scoring Rubric',
        intro: 'Score each institution from 1 to 5 based on your personal career priorities to determine your best-fit offer.',
        tableHeaders: ['Your Career Priority', 'Choose IIM Ahmedabad If...', 'Choose IIM Bangalore If...', 'Choose IIM Calcutta If...'],
        tableRows: [
          ['Target: Tier-1 Strategy Consulting', 'Aiming for McKinsey, BCG, Bain, Kearney leadership roles', 'Strong alternative with high consulting intake', 'Strong alternative with equal access to MBB'],
          ['Target: Bulge-Bracket Investment Banking', 'Access to top PE/VC firms; elite general management', 'High corporate finance & VC presence', 'Absolute undisputed king for Goldman, Morgan Stanley, J.P. Morgan'],
          ['Target: Product Mgmt & Tech Startups', 'Strong general management foundation', 'Unbeatable Bangalore ecosystem; access to top PM roles', 'High analytics and data-driven product roles'],
          ['Academic Learning Preference', 'You thrive under intense cold-calling and case debates', 'You prefer project teamwork and experiential learning', 'You prefer analytical rigor, mathematical models, and lectures'],
          ['Past Academic Record Profile', 'You have consistent 90%+ in 10th, 12th, and graduation', 'You have solid work experience (2-4 yrs) and decent acads', 'You have an outstanding CAT percentile (99.7+) to offset past acads']
        ],
        footerNote: 'Decision Rule: Holding offers from all three is an enviable problem. Pick based on domain aspiration and learning style.'
      },
      {
        heading: '3. Campus Environment & Alumni Network Power',
        intro: 'Long-term value creation through alumni leverage and campus life.',
        bullets: [
          'IIM Ahmedabad: The Louis Kahn red-brick campus builds lifelong resilience. Its alumni network includes top CXOs across Fortune 500 enterprises.',
          'IIM Bangalore: The stone-architecture campus in Bannerghatta Road sits in India’s innovation capital, fostering venture creation and rapid scaling.',
          'IIM Calcutta: The sprawling 7-lakes Joka campus creates deep fraternal bonds. Its alumni dominate global trading desks and managing directorships.'
        ]
      }
    ]
  },
  {
    slug: 'iim-wat-gd-pi-preparation',
    title: 'IIM PI Question Bank (100 Questions)',
    subtitle: '100 High-Probability Interview Questions Categorized by Profile, STAR Framework & Sample Answer Outlines',
    pages: [
      {
        heading: '1. Core HR, Personal & Motivational Questions (25 Questions)',
        intro: 'The opening 5 minutes make or break your interview. Master structure, authenticity, and brevity.',
        tableHeaders: ['Question #', 'Question Prompt', 'Evaluation Objective', 'Recommended Answer Framework'],
        tableRows: [
          ['Q01', 'Walk me through your resume / Tell me about yourself.', 'Executive presence, chronological storytelling, career logic', 'Chronological: Past foundation -> Present achievements -> Future MBA catalyst (under 90 secs)'],
          ['Q02', 'Why do you want to pursue an MBA at this specific point?', 'Career inflection point, skill gap identification, goal clarity', 'Present role ceiling -> MBA toolset acquired -> Short-term post-MBA target role'],
          ['Q03', 'Why this specific IIM over other top business schools?', 'School knowledge, cultural fit, specific electives/professors', 'Mention 2 specialized electives, 1 faculty research lab, and 1 student-run initiative'],
          ['Q04', 'What are your short-term and long-term career goals?', 'Pragmatism, industry awareness, 5-10 year ambition', 'Short-term: Specific function/industry (3-5 yrs); Long-term: Visionary impact (10+ yrs)'],
          ['Q05', 'Tell me about a major failure and what you learned.', 'Resilience, emotional maturity, accountability without blame', 'STAR-L: Situation -> Task -> Failure point -> Ownership taken -> Corrective lesson learned'],
          ['Q06', 'What is your single greatest strength and your greatest weakness?', 'Self-awareness, authenticity, proactive remediation', 'Strength with metric evidence; genuine weakness with active steps taken to improve'],
          ['Q07', 'Describe an ethical dilemma you faced at work. How did you resolve it?', 'Moral compass, corporate integrity, balanced decision-making', 'State conflicting loyalties, consultation sought, principled action taken'],
          ['Q08', 'If you do not get selected today, what is your backup plan?', 'Composure, pragmatic determination, continuous learning', 'Express dedication to role, enhance certifications/impact, reapply with stronger profile']
        ],
        footerNote: 'Golden Interview Rule: Never memorize full answers. Prepare bullet point stories using the STAR methodology.'
      },
      {
        heading: '2. Profile-Specific Technical & Domain Questions (Engineers, Commerce, Arts)',
        intro: 'Panels test whether you took your undergraduate degree seriously.',
        tableHeaders: ['Candidate Background', 'Sample Technical Question Prompt', 'Expected Level of Depth', 'Common Trap to Avoid'],
        tableRows: [
          ['Computer Science / IT', 'Explain the difference between Machine Learning, Deep Learning, and LLMs.', 'Conceptual clarity with real-world architecture examples', 'Using marketing buzzwords without explaining training/loss functions'],
          ['Mechanical / Electrical', 'Explain the working principle of regenerative braking or EV battery thermal management.', 'Thermodynamic / electromagnetic first principles', 'Saying "I graduated 3 years ago and forgot my engineering basics"'],
          ['Commerce / Finance', 'Walk me through the three financial statements and how $10 depreciation flows through them.', 'Accounting precision; impact on Cash Flow and Balance Sheet', 'Confusing Cash Flow from Operations with Net Income'],
          ['Economics / Arts', 'How does the RBI repo rate hike combat domestic inflation without crushing growth?', 'Macroeconomic monetary transmission mechanism', 'Giving ideological answers without citing CPI/WPI data and GDP trade-offs'],
          ['Working Professionals', 'What is the unit economics and revenue model of your employer?', 'P&L awareness: CAC, LTV, gross margin, main cost drivers', 'Focusing only on coding/daily tasks without knowing the business model']
        ],
        footerNote: 'Undergrad Revision: Review your 3rd and 4th-year specialization subjects thoroughly before entering the interview.'
      },
      {
        heading: '3. Written Ability Test (WAT) Structural Framework',
        intro: 'How to write a structured, balanced 300-word essay in 15-20 minutes.',
        bullets: [
          'Minute 0-3 (Brainstorming): Dissect the topic. Formulate a balanced thesis. List 2 supporting arguments and 1 counter-perspective.',
          'Paragraph 1 (Introduction): Contextualize the prompt with current macroeconomic data; define key terms; state your nuanced stance.',
          'Paragraph 2 & 3 (Arguments): Provide analytical arguments backed by real examples (corporate, legislative, or historical cases).',
          'Paragraph 4 (Counter-Perspective & Mitigation): Acknowledge opposing viewpoints and provide policy/technological mitigations.',
          'Paragraph 5 (Conclusion): Deliver an actionable, forward-looking synthesis. Avoid preachy or emotional clichés.'
        ]
      }
    ]
  },
  {
    slug: 'iim-admission-without-cat',
    title: 'Alternative IIM Routes Cheat Sheet',
    subtitle: 'Comprehensive Guide to 1-Year Full-Time MBA, Executive MBA & GMAT/GRE-Based IIM Admissions',
    pages: [
      {
        heading: '1. Flagship 1-Year Full-Time MBA Programs at IIMs (Non-CAT Routes)',
        intro: 'Designed for experienced professionals (typically 4-10 years work experience) accepting GMAT and GRE.',
        tableHeaders: ['IIM & Program Name', 'Min Work Experience', 'Accepted Entrance Tests', 'Typical GMAT Focus Cutoff', 'Batch Profile & Class Size'],
        tableRows: [
          ['IIM Ahmedabad PGPX', '4 Years (as of March 31)', 'GMAT Focus / GRE', '665 - 695 (Median ~675)', '140 Students; Avg 7-8 yrs work-ex'],
          ['IIM Bangalore EPGP', '5 Years (as of March 31)', 'GMAT Focus / GRE', '655 - 685 (Median ~665)', '75 Students; Avg 7 yrs work-ex'],
          ['IIM Calcutta MBAEx', '5 Years (as of March 31)', 'GMAT Focus / GRE', '655 - 685 (Median ~665)', '80 Students; Avg 8 yrs work-ex'],
          ['IIM Lucknow IPMX', '5 Years (at Noida Campus)', 'GMAT Focus / GRE', '635 - 665 (Median ~645)', '100-110 Students; Avg 6-8 yrs work-ex'],
          ['IIM Kozhikode PGP-BL', '3 Years of full-time work-ex', 'CAT / GMAT / GRE', '635+ Focus / CAT 90%ile', '60-70 Students; 1-yr Business Leadership'],
          ['IIM Indore EPGP', '5 Years of full-time work-ex', 'GMAT Focus / GRE', '625 - 655 (Median ~635)', '60 Students; Global immersion module']
        ],
        footerNote: 'Accreditation: All flagship 1-year programs are AACSB / EQUIS / AMBA accredited full-time residential MBA programs.'
      },
      {
        heading: '2. Executive MBA (Weekend / Blended) Options at Top IIMs',
        intro: 'For mid-career professionals (5-15+ years experience) who wish to pursue an MBA without leaving their current jobs.',
        tableHeaders: ['Institution & Program', 'Format & Schedule', 'Work Experience Req', 'Admission Test Used', 'Tuition Fees (Approx)'],
        tableRows: [
          ['IIM Ahmedabad ePGP', 'Interactive Hybrid + Campus Modules', '3 Years Minimum', 'CAT / GMAT / GRE / IIMA Test', 'Approx Rs 20 Lakhs'],
          ['IIM Bangalore EMBA (PGPEM)', 'Weekend (Fridays & Saturdays)', '4 Years Minimum', 'CAT / GMAT / GRE / IIMB Test', 'Approx Rs 21 Lakhs'],
          ['IIM Calcutta PGPEX-VLM', 'Full-Time Manufacturing Consortium', '4.5 - 10 Years (Tech/Mfg)', 'Aptitude Test + Interview', 'Approx Rs 14 Lakhs'],
          ['IIM Kozhikode EPGP (Kochi/Live)', 'Evening / Weekend Hybrid', '3 Years Minimum', 'EMAT (IIMK Test) / CAT / GMAT', 'Approx Rs 14 Lakhs'],
          ['IIM Lucknow WMP (Noida)', 'Alternate Weekends', '3 Years Minimum', 'GMAT / GRE / CAT / PGPWE Test', 'Approx Rs 11 Lakhs']
        ],
        footerNote: 'Employer Sponsorship: Many corporate employers reimburse 50% to 100% of executive MBA tuition.'
      },
      {
        heading: '3. 1-Year Full-Time MBA vs 2-Year PGP: Pros and Cons',
        intro: 'Strategic comparison to determine whether non-CAT 1-year programs match your career stage.',
        bullets: [
          'Opportunity Cost: A 1-year MBA saves 1 full year of lost earnings (Rs 15L - 30L saved in foregone salary).',
          'Peer Group Maturity: 1-year cohorts average 28-32 years of age with 6-8 years of experience, enabling executive-level discussions.',
          'Lateral Placements: Recruiters hire 1-year graduates directly into Senior Manager, Director, Vice President, and Principal Consultant roles.',
          'Consideration: 1-year programs move at breakneck speed with no summer internship. Career pivot requires strong transferable skills.'
        ]
      }
    ]
  },
  {
    slug: 'is-iim-mba-worth-it-fees-roi-placements',
    title: 'MBA ROI Calculator Sheet',
    subtitle: 'Comprehensive Financial Modeling Framework: Tuition, Living, Opportunity Cost & Payback Period',
    pages: [
      {
        heading: '1. Total Cost of Ownership (TCO) at Top IIMs (2-Year Full-Time)',
        intro: 'Calculate the true financial outlay including tuition, living expenses, interest, and foregone salary.',
        tableHeaders: ['Financial Outlay Component', 'Estimated Cost (IIM A/B/C)', 'Estimated Cost (New IIMs)', 'Notes & Explanations'],
        tableRows: [
          ['Tuition & Course Fees (2 Years)', 'Rs 25,00,000 - 27,00,000', 'Rs 16,00,000 - 19,00,000', 'Includes tuition, library, case studies, academic material'],
          ['Hostel, Mess & Living Costs', 'Rs 2,50,000 - 3,50,000', 'Rs 2,00,000 - 2,50,000', 'Mandatory residential campus accommodation and meals'],
          ['Laptop, Travel & Discretionary', 'Rs 1,50,000 - 2,00,000', 'Rs 1,00,000 - 1,50,000', 'High-end laptop, formal business attire, student club trips'],
          ['International Immersion (Optional)', 'Rs 3,00,000 - 4,50,000', 'Rs 2,00,000 - 3,00,000', 'Term exchange or 2-week international business tour'],
          ['TOTAL CASH OUTFLOW', 'Rs 32,00,000 - 37,00,000', 'Rs 21,00,000 - 26,00,000', 'Financed typically via 100% collateral-free education loans'],
          ['Opportunity Cost (Lost Salary 2 Yrs)', 'Rs 20,00,000 - 30,00,000', 'Rs 12,00,000 - 20,00,000', 'Assuming pre-MBA annual salary was Rs 10L - 15L'],
          ['TRUE ECONOMIC INVESTMENT', 'Rs 52,00,000 - 67,00,000', 'Rs 33,00,000 - 46,00,000', 'The true baseline to evaluate payback and incremental ROI']
        ],
        footerNote: 'Tax Benefit: Interest paid on education loans is 100% tax-deductible under Section 80E for up to 8 years.'
      },
      {
        heading: '2. Placement Realities: Median Salary & Break-Even Analysis',
        intro: 'Evaluating audited median packages against headline CTC claims.',
        tableHeaders: ['IIM Cluster', 'Audited Median CTC', 'Estimated Monthly In-Hand', 'Incremental Annual Gain (vs 10L Pre-MBA)', 'Estimated Payback Period'],
        tableRows: [
          ['Top 3 (IIM A, B, C)', 'Rs 33.0 - 35.0 Lakhs', 'Rs 1,85,000 - 2,10,000', 'Rs 15,00,000 - 18,00,000 / year', '2.2 to 2.8 Years'],
          ['Top 4-6 (IIM L, K, I)', 'Rs 28.0 - 30.0 Lakhs', 'Rs 1,55,000 - 1,75,000', 'Rs 11,00,000 - 13,00,000 / year', '2.8 to 3.4 Years'],
          ['New IIMs (Udaipur, Trichy, Ranchi)', 'Rs 18.0 - 20.0 Lakhs', 'Rs 1,10,000 - 1,25,000', 'Rs 6,00,000 - 8,00,000 / year', '3.8 to 4.5 Years'],
          ['Baby IIMs (Nagpur, Sambalpur, Sirmaur)', 'Rs 14.5 - 16.0 Lakhs', 'Rs 90,000 - 1,05,000', 'Rs 3,50,000 - 5,00,000 / year', '5.0 to 6.2 Years']
        ],
        footerNote: 'CTC Breakdown: Remember that Rs 35L CTC includes fixed pay (~Rs 24L), variable bonus (~Rs 5L), and ESOPs/joining bonus (~Rs 6L).'
      },
      {
        heading: '3. 10-Year Career Trajectory & Intangible Value Creation',
        intro: 'Why an IIM MBA is an asset with compounding returns rather than an expense.',
        bullets: [
          'Compounding Trajectory: Post-MBA salary at top IIMs historically compounds at 15-20% CAGR, leading to CXO-level earnings within 10-12 years.',
          'Downside Protection: Even in severe recessions, the IIM alumni brand protects graduates from long-term unemployment.',
          'Alumni Network Access: Unrestricted access to venture capital, board advisory roles, and high-impact hiring pipelines.',
          'Decision Benchmark: If pre-MBA salary is under Rs 15L, IIM ABC is an overwhelming YES. If pre-MBA salary is > Rs 30L, choose 1-year PGPX/EPGP or global MBA.'
        ]
      }
    ]
  }
];

function generatePDF(t) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const addHeader = (title, pageNum) => {
    // Top bar
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 20, 'F');

    // Add Logo or fallback text
    if (logoBase64) {
      try {
        doc.addImage(logoBase64, 'PNG', 12, 3.5, 32, 13);
      } catch (e) {
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text('MBA WIZARDS', 15, 13);
      }
    } else {
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text('MBA WIZARDS', 15, 13);
    }

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text('EXECUTIVE ADMISSIONS & TEST PREP BLUEPRINT', 55, 12.5);

    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setFontSize(8.5);
    doc.text(`Page ${pageNum} of ${t.pages.length + 1}`, 180, 12.5);

    // Bottom gold bar
    doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.rect(0, 20, 210, 1.5, 'F');

    // Page Title banner
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(title, 15, 30);

    doc.setDrawColor(accentBorder[0], accentBorder[1], accentBorder[2]);
    doc.line(15, 33, 195, 33);
  };

  const addFooter = () => {
    doc.setDrawColor(accentBorder[0], accentBorder[1], accentBorder[2]);
    doc.line(15, 280, 195, 280);

    doc.setTextColor(110, 110, 110);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(
      'MBA Wizards Mentorship Hotline: +91 99999 12345 | DLF Cyber City & Golf Course Rd, Gurgaon | www.mbawizards.co.in',
      15,
      286
    );
  };

  // ==========================================
  // PAGE 1: COVER PAGE
  // ==========================================
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 297, 'F');

  // Gold accent strip on left
  doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.rect(0, 0, 10, 297, 'F');

  // Header gold rule
  doc.rect(20, 22, 170, 2.5, 'F');

  // Embed Logo on Cover Page
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, 'PNG', 25, 30, 48, 19);
    } catch (e) {}
  }

  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text('OFFICIAL MBA WIZARDS SEO BLUEPRINT & STRATEGY RESOURCE', 25, 58);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(21);
  const titleLines = doc.splitTextToSize(t.title.toUpperCase(), 160);
  doc.text(titleLines, 25, 72);

  const subY = 72 + (titleLines.length * 9) + 2;
  doc.setFontSize(10.5);
  doc.setTextColor(205, 220, 240);
  const subLines = doc.splitTextToSize(t.subtitle, 160);
  doc.text(subLines, 25, subY);

  // Personalized / Candidate Box
  const boxY = subY + (subLines.length * 5.5) + 8;
  doc.setFillColor(25, 50, 85);
  doc.roundedRect(25, boxY, 160, 68, 3, 3, 'F');
  doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.roundedRect(25, boxY, 160, 68, 3, 3, 'D');

  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('EXECUTIVE CANDIDATE PREPARATION DOSSIER', 33, boxY + 12);

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('• Document Classification: High-Yield Proprietary Strategy Dossier', 33, boxY + 22);
  doc.text('• Curated By: Mr. Surinder Gupta (IIT Roorkee Alumnus, 25+ Yrs Exp)', 33, boxY + 30);
  doc.text('• Pedagogy: The 5-Pillar Algorithmic & Admissions Mentorship Model', 33, boxY + 38);
  doc.text('• Interactive Tools: AI CAT & GMAT Mock Interview Engines (Available Online)', 33, boxY + 46);
  doc.text('• Verification: 100% Calibrated with Latest 2026/2027 Admissions Regulations', 33, boxY + 54);
  doc.text('• Portal Access: www.mbawizards.co.in | Cyber City Hub, Gurgaon', 33, boxY + 62);

  // Key Features Pills
  const pillY = boxY + 76;
  doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.roundedRect(25, pillY, 160, 48, 3, 3, 'F');

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('WHAT IS INSIDE THIS STRATEGY BLUEPRINT:', 33, pillY + 11);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('✓ Section-by-section strategic checklists, timing rules, and score targets', 33, pillY + 20);
  doc.text('✓ Forensic root-cause error log frameworks for rapid percentile jumps', 33, pillY + 27);
  doc.text('✓ Official class profile medians and composite shortlisting formulas', 33, pillY + 34);
  doc.text('✓ Direct consultation voucher for 1-on-1 strategy audit with lead faculty', 33, pillY + 41);

  // Bottom Footer on Cover
  doc.setTextColor(180, 195, 220);
  doc.setFontSize(8);
  doc.text('© MBA Wizards & EduQuest. All Rights Reserved. Confidential Test Preparation Asset.', 25, 285);

  // ==========================================
  // CONTENT PAGES
  // ==========================================
  t.pages.forEach((p, pIdx) => {
    doc.addPage();
    addHeader(p.heading, pIdx + 2);

    let cy = 39;
    if (p.intro) {
      doc.setTextColor(darkText[0], darkText[1], darkText[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      const introLines = doc.splitTextToSize(p.intro, 180);
      doc.text(introLines, 15, cy);
      cy += (introLines.length * 4.5) + 5;
    }

    // If Table exists
    if (p.tableHeaders && p.tableRows) {
      const colWidths = p.tableHeaders.length === 3 
        ? [38, 71, 71] 
        : p.tableHeaders.length === 4
        ? [32, 28, 45, 75]
        : p.tableHeaders.length === 5
        ? [28, 48, 38, 36, 30]
        : p.tableHeaders.length === 6
        ? [28, 32, 32, 32, 28, 28]
        : [30, 40, 50, 60];

      // Table Header Row
      doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.rect(15, cy, 180, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);

      let hx = 17;
      p.tableHeaders.forEach((th, thIdx) => {
        const w = colWidths[thIdx] || 40;
        doc.text(th, hx, cy + 5.5);
        hx += w;
      });

      cy += 8;

      // Table Body Rows
      p.tableRows.forEach((row, rIdx) => {
        const rowBg = rIdx % 2 === 0 ? 255 : 246;
        doc.setFillColor(rowBg, rowBg, rowBg);
        
        // Measure row height based on content
        let maxLines = 1;
        row.forEach((cell, cIdx) => {
          const w = colWidths[cIdx] || 40;
          const lines = doc.splitTextToSize(cell, w - 4);
          if (lines.length > maxLines) maxLines = lines.length;
        });

        const rowHeight = Math.max(10, maxLines * 4.2 + 3);
        doc.rect(15, cy, 180, rowHeight, 'F');
        doc.setDrawColor(accentBorder[0], accentBorder[1], accentBorder[2]);
        doc.rect(15, cy, 180, rowHeight, 'D');

        doc.setTextColor(darkText[0], darkText[1], darkText[2]);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);

        let rx = 17;
        row.forEach((cell, cIdx) => {
          const w = colWidths[cIdx] || 40;
          if (cIdx === 0) {
            doc.setFont('helvetica', 'bold');
          } else {
            doc.setFont('helvetica', 'normal');
          }
          const lines = doc.splitTextToSize(cell, w - 4);
          doc.text(lines, rx, cy + 5);
          rx += w;
        });

        cy += rowHeight;
      });

      cy += 4;
    }

    // If Bullets exist
    if (p.bullets) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      p.bullets.forEach((b) => {
        doc.setFillColor(250, 250, 253);
        const bLines = doc.splitTextToSize(b, 170);
        const bHeight = (bLines.length * 4.5) + 6;

        doc.roundedRect(15, cy, 180, bHeight, 2, 2, 'F');
        doc.setDrawColor(accentBorder[0], accentBorder[1], accentBorder[2]);
        doc.roundedRect(15, cy, 180, bHeight, 2, 2, 'D');

        // bullet dot
        doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
        doc.circle(20, cy + 5, 2, 'F');

        doc.setTextColor(darkText[0], darkText[1], darkText[2]);
        doc.text(bLines, 25, cy + 5.5);

        cy += bHeight + 3;
      });
    }

    // Footer note
    if (p.footerNote) {
      cy += 3;
      doc.setFillColor(245, 248, 252);
      doc.roundedRect(15, cy, 180, 11, 2, 2, 'F');
      doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
      doc.roundedRect(15, cy, 180, 11, 2, 2, 'D');

      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.8);
      doc.text(p.footerNote, 18, cy + 7);
    }

    addFooter();
  });

  const outFilePath = path.join(outputDir, `${t.slug}-guide.pdf`);
  const pdfBytes = doc.output('arraybuffer');
  fs.writeFileSync(outFilePath, Buffer.from(pdfBytes));
  console.log(`[Generated] -> ${t.slug}-guide.pdf (${Math.round(pdfBytes.byteLength / 1024)} KB)`);
}

console.log('Generating all 15 SEO Lead Magnet PDFs with MBA Wizard Logo...');
leadMagnets.forEach((lm) => generatePDF(lm));
console.log('All 15 PDFs successfully generated in public/lead-magnets/!');
