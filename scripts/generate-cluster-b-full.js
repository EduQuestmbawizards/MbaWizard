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

const authorSurinder = {
  name: "Mr. Surinder Gupta (IIT Roorkee)",
  role: "Founder & Master Admissions Mentor (25+ Yrs Exp)",
  avatar: "/images/common/surinder-gupta.jpg"
};

// =========================================================================
// BLOG B1: CAT Exam Complete Guide (Pillar)
// =========================================================================
const blogB1 = {
  slug: "cat-exam-complete-guide",
  title: "CAT Exam: The Complete Guide to Pattern, Syllabus and Preparation",
  subtitle: "The definitive 2026/2027 master blueprint for the Common Admission Test (CAT): comprehensive syllabus, section-wise timing, 100-percentile scoring algorithms, IIM selection criteria, and preparation roadmaps.",
  excerpt: "Everything about the CAT exam: eligibility, pattern, syllabus, marking scheme and how to prepare. Start your CAT journey with a clear roadmap.",
  metaTitle: "CAT Exam: The Complete Guide to Pattern, Syllabus & Preparation",
  metaDescription: "Everything about the CAT exam: eligibility, pattern, syllabus, marking scheme and how to prepare. Start your CAT journey with a clear roadmap.",
  coverImage: "/images/blogs/cat-pi-preparation-guide.jpg",
  author: authorSurinder,
  category: "CAT",
  tags: [
    "CAT exam",
    "CAT exam pattern",
    "CAT syllabus",
    "CAT eligibility",
    "CAT preparation",
    "IIM admissions",
    "CAT coaching Gurgaon"
  ],
  publishedAt: "2026-10-16T09:00:00Z",
  readTime: 28,
  featured: true,
  accentColor: "#d4af37",
  body: [
    {
      type: "paragraph",
      text: "The **CAT exam** (Common Admission Test) stands undisputed as the premier, most intensely contested postgraduate management entrance examination in India. Annually administered on the last Sunday of November by one of the older Indian Institutes of Management (IIMs) on a rotational mandate, the examination represents the mandatory gateway for admission into the prestigious 21 IIMs—including the venerated 'BLACKI' cohort (IIM Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, and Indore)—along with more than 100 top-tier non-IIM management institutes such as FMS Delhi, SPJIMR Mumbai, MDI Gurgaon, and the Department of Management Studies across the Indian Institutes of Technology (IITs)."
    },
    {
      type: "paragraph",
      text: "With over 3.3 lakh candidates registering for the exam annually, competing for approximately 5,500 coveted seats across the IIM system, the statistical selection ratio sits well below 2%. CAT is not simply an examination of mathematical computation or grammatical rules; it is a high-stakes psychological assessment of cognitive endurance, strategic question selection, risk management under severe time constraints, and executive decision-making under intense pressure. In this exhaustive, master-level pillar guide, we break down the entire architecture of the **CAT exam**: official eligibility criteria, the 2-hour sectional format, exhaustive syllabi across VARC, DILR, and QA, the multi-slot normalization scoring formula, a proven 6-month preparation protocol, and admissions selection criteria formulated through 25+ years of classroom mentorship at our [CAT coaching in Gurgaon](/cat-coaching-in-gurgaon) and pan-India online programs."
    },
    {
      type: "heading",
      text: "1. What Is the CAT Exam & The Indian IIM Management Ecosystem",
      level: 2
    },
    {
      type: "paragraph",
      text: "Conducted entirely as a computer-based test (CBT) across approximately 160 testing cities in India, CAT serves as the standardized intellectual benchmark for post-graduate management education. The 21 IIMs are autonomous public institutions declared as 'Institutions of National Importance' by an Act of Parliament (IIM Act 2017). They offer two-year full-time post-graduate programmes in management (MBA/PGP), which consistently rank among the finest management degrees globally, offering stellar return on investment, world-class faculty, and transformative corporate career trajectories."
    },
    {
      type: "table",
      headers: [
        "IIM Category / Cluster",
        "Member Institutions",
        "Typical Target CAT Cutoff",
        "Distinguishing Pedagogical Focus"
      ],
      rows: [
        ["IIM Generation 1 (Top Tier - BLACKI)", "IIM Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, Indore", "99.00 - 99.95+ Percentile", "Global case method, finance/consulting dominance, massive alumni network."],
        ["IIM Generation 2 (New IIMs)", "IIM Shillong, Rohtak, Ranchi, Raipur, Trichy, Kashipur, Udaipur", "94.00 - 97.50+ Percentile", "Rapid corporate integration, general management, strong placement growth."],
        ["IIM Generation 3 (Baby IIMs)", "IIM Nagpur, Visakhapatnam, Bodh Gaya, Amritsar, Sambalpur, Sirmaur, Jammu", "90.00 - 94.00+ Percentile", "High-growth entrepreneurial hubs, mentorship under older IIM parent institutions."],
        ["Premier Non-IIM Institutions", "FMS Delhi, SPJIMR Mumbai, MDI Gurgaon, IIT Bombay (SJMSOM), IIT Delhi (DMS)", "95.00 - 99.50+ Percentile", "Unbeatable RoI (FMS fees < ₹2 Lakhs), deep corporate networks, specialized MBA tracks."]
      ]
    },
    {
      type: "paragraph",
      text: "Beyond the IIMs, elite non-IIM institutions accept CAT scores directly. In particular, the Faculty of Management Studies (FMS) at Delhi University offers the highest return on investment in the global business education ecosystem, with total tuition fees under ₹2.5 Lakhs and average placement packages exceeding ₹34 Lakhs per annum. Similarly, SPJIMR Mumbai is universally renowned for its values-based leadership pedagogy, and [MDI Gurgaon](/contact-us) stands as a corporate powerhouse located in the heart of Delhi NCR's commercial center."
    },
    {
      type: "heading",
      text: "2. CAT Exam Eligibility Criteria & Academic Reservation Norms",
      level: 2
    },
    {
      type: "paragraph",
      text: "Before embarking on preparation, prospective candidates must verify their official eligibility under GMAC and IIM CAT guidelines. The baseline criteria are formulated to be inclusive across diverse academic disciplines:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Academic Qualification:** The candidate must hold a Bachelor's Degree with at least 50% marks or equivalent CGPA (45% for candidates belonging to Scheduled Caste [SC], Scheduled Tribe [ST], and Persons with Disability [PwD] categories) awarded by any recognized university or educational institution.",
        "**Final Year Undergraduates:** Candidates appearing for the final year of their bachelor's degree examination or awaiting results are fully eligible to apply. If selected, admission remains provisional until proof of graduation completion with minimum eligible marks is submitted.",
        "**Professional Degrees Recognized:** Candidates possessing equivalent professional qualifications recognized by the Ministry of Education—such as CA (Chartered Accountancy), CS (Company Secretary), or CMA/ICWA—with the required percentage are also fully eligible.",
        "**Age & Attempt Limits:** There is NO upper age limit for taking the CAT exam. Furthermore, there is no restriction on the number of attempts; candidates may take the exam as many times as desired across successive academic cycles.",
        "**Work Experience:** Full-time professional work experience is NOT mandatory to appear for CAT. Fresh college graduates and experienced working professionals compete under identical testing conditions, though work experience carries weighted points during stage-2 IIM shortlisting."
      ]
    },
    {
      type: "table",
      headers: [
        "Government of India Category",
        "Statutory Reservation Percentage",
        "Minimum Qualifying Graduation Marks",
        "Typical Minimum Stage-1 Percentile Cutoff"
      ],
      rows: [
        ["General / Unreserved (Open)", "Open Merit Category", "50.00% Marks / Equivalent CGPA", "80% Sectional / 85-90% Overall (Actual 99%+ required)"],
        ["Economically Weaker Sections (EWS)", "10.00% Reservation", "50.00% Marks / Equivalent CGPA", "70% Sectional / 75-80% Overall (Actual 95%+ required)"],
        ["Other Backward Classes (NC-OBC)", "27.00% Reservation", "50.00% Marks / Equivalent CGPA", "70% Sectional / 75-80% Overall (Actual 92-95%+ required)"],
        ["Scheduled Caste (SC)", "15.00% Reservation", "45.00% Marks / Equivalent CGPA", "60% Sectional / 65-70% Overall (Actual 75-82%+ required)"],
        ["Scheduled Tribe (ST)", "7.50% Reservation", "45.00% Marks / Equivalent CGPA", "50% Sectional / 55-60% Overall (Actual 65-75%+ required)"],
        ["Persons with Disability (PwD)", "5.00% Horizontal Reservation", "45.00% Marks / Equivalent CGPA", "50% Sectional / 55-60% Overall (Actual 60-70%+ required)"]
      ]
    },
    {
      type: "heading",
      text: "3. CAT Exam Pattern & The 2-Hour Testing Architecture",
      level: 2
    },
    {
      type: "paragraph",
      text: "The modern CAT exam is administered as a strictly timed 120-minute (2 hours) computer-based test divided into three equal sections of precisely 40 minutes each. Candidates are not permitted to choose the order of sections; the testing interface automatically advances through the sections in a fixed sequence, and once a 40-minute sectional window closes, candidates cannot return to that section under any circumstances."
    },
    {
      type: "table",
      headers: [
        "Exam Section",
        "Sequence Order",
        "Total Questions",
        "MCQ Questions",
        "Non-MCQ (TITA) Questions",
        "Section Time Limit"
      ],
      rows: [
        ["Section I: VARC", "Fixed First Section", "24 Questions", "16 - 20 Questions", "4 - 8 Questions", "40 Minutes"],
        ["Section II: DILR", "Fixed Second Section", "20 Questions (4 Sets)", "14 - 18 Questions", "2 - 6 Questions", "40 Minutes"],
        ["Section III: QA", "Fixed Third Section", "22 Questions", "14 - 18 Questions", "4 - 8 Questions", "40 Minutes"],
        ["TOTAL EXAMINATION", "Fixed Sequence (VARC -> DILR -> QA)", "66 Questions", "46 - 54 Questions", "12 - 20 Questions", "120 Minutes (2 Hours)"]
      ]
    },
    {
      type: "paragraph",
      text: "Candidates with documented benchmark disabilities (PwD) are granted 13 minutes and 20 seconds of compensatory time per section, totaling 160 minutes (53 minutes and 20 seconds per section). The total maximum raw score for the exam is 198 marks (66 questions × 3 marks). An onscreen scientific calculator is provided on the computer terminal, though its interface is clunky and slow; high scorers develop rapid mental calculation techniques to preserve time."
    },
    {
      type: "heading",
      text: "4. Detailed Section-Wise Syllabus: VARC, DILR & Quantitative Aptitude",
      level: 2
    },
    {
      type: "paragraph",
      text: "The IIMs do not publish an official, static **CAT syllabus**. Instead, the exam tests conceptual depth, analytical synthesis, and critical thinking based on higher secondary fundamentals. Below is the exhaustive thematic breakdown across all three sections derived from historical exam papers over the past decade:"
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Section I: Verbal Ability & Reading Comprehension (VARC - 24 Questions):** Approximately 16 questions (67% of the section) are derived from 4 Reading Comprehension passages (approx 400 to 500 words each). Passages cover diverse academic domains: philosophy, sociology, anthropology, economics, history, literary critique, and environmental science. Question types focus heavily on inference, primary purpose, tone, underlying assumptions, and structural extrapolation. The remaining 8 questions test Verbal Ability: Parajumbles (sentence rearrangement, usually non-MCQ TITA), Paragraph Summary (identifying the most objective core thesis), and Odd Sentence Out (identifying the sentence that does not fit the thematic flow).",
        "**Section II: Data Interpretation & Logical Reasoning (DILR - 20 Questions):** The DILR section consists of 4 problem sets containing 5 questions each (or occasionally a mix of 4-question and 6-question sets). Unlike traditional bank exams, CAT DILR does not test routine bar charts or simple blood relations; it features complex, unguided logic puzzles. High-yield topics include Matrix Arrangements, Tournament & Sports Scheduling, Truth & Lie Logic, Networks & Routes, Set Theory (Venn Diagrams up to 4 sets), Optimization & Maxima-Minima, Distribution & Grouping, and Complex Caselets.",
        "**Section III: Quantitative Aptitude (QA - 22 Questions):** Quantitative Aptitude covers high-school mathematics with an uncompromising emphasis on problem-solving agility. Arithmetic dominates the section (typically 8 to 9 questions), covering percentages, profit & loss, simple and compound interest, ratios & proportions, time-speed-distance, relative speed, work-rate, and mixtures & alligations. Algebra accounts for 6 to 8 questions, including linear and quadratic equations, inequalities, logarithms, progressions (AP/GP/HP), functions, and graphs. Geometry & Mensuration comprises 3 to 4 questions (triangles, circles, polygons, coordinate geometry), while Modern Math covers permutations, combinations, and probability."
      ]
    },
    {
      type: "table",
      headers: [
        "Section",
        "Dominant High-Yield Topics",
        "Question Count",
        "Target Accuracy for 99th Percentile",
        "Strategic Mindset Needed"
      ],
      rows: [
        ["VARC", "Inference RC Passages, Parajumbles, Paragraph Summary", "24 Questions", "14 - 16 Correct with >80% Accuracy", "Read for macro arguments; eliminate choices with extreme tone."],
        ["DILR", "Tournaments, Arrangements, Maxima-Minima, Venn Diagrams", "20 Questions", "9 - 11 Correct (2 to 2.5 Clean Sets)", "Spend first 5 mins auditing all sets; pick the most structured puzzle."],
        ["QA", "Arithmetic (TSD, Work, Ratios) & Algebra (Equations, Logs)", "22 Questions", "12 - 14 Correct with >90% Accuracy", "Round 1: Solve direct arithmetic; Round 2: Tackle multi-step algebra."]
      ]
    },
    {
      type: "heading",
      text: "5. CAT Marking Scheme & Multi-Slot Normalization Scaling Algorithm",
      level: 2
    },
    {
      type: "paragraph",
      text: "Mastering the CAT marking scheme is essential for tactical execution on test day. Every incorrect answer on a Multiple-Choice Question carries an aggressive penalty:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Correct Answer:** +3 Marks awarded for every correct response (both MCQ and TITA).",
        "**Incorrect Answer on MCQ:** -1 Mark deducted (negative marking of 33.33%).",
        "**Incorrect Answer on Non-MCQ (TITA):** 0 Marks deducted. There is NO negative marking for Type-In-The-Answer questions! Therefore, candidates must never leave a TITA question unattempted.",
        "**Unattempted Question:** 0 Marks."
      ]
    },
    {
      type: "paragraph",
      text: "Because the CAT exam is conducted across three separate slots on test day (Slot 1: 8:30 AM – 10:30 AM; Slot 2: 12:30 PM – 2:30 PM; Slot 3: 4:30 PM – 6:30 PM), variations in difficulty across slots inevitably occur. To ensure absolute parity, the IIM CAT committee implements an advanced normalization formula modeled on the percentile rank methods of Gate and international psychometric assessments. The normalized scaled score adjusts raw marks using the mean and standard deviation of top 0.1% performers across all three slots. Read our comprehensive forensic guide on [CAT score vs percentile conversion and normalization](/blogs/cat-score-vs-percentile) for detailed historical score concordances."
    },
    {
      type: "heading",
      text: "6. Step-by-Step 6-Month CAT Preparation Roadmap",
      level: 2
    },
    {
      type: "paragraph",
      text: "Preparing for the CAT exam requires a disciplined, multi-stage protocol. Candidates should avoid the common trap of taking full-length mock tests before completing conceptual foundations. Follow our structured 3-phase preparation blueprint:"
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Phase 1: Conceptual Foundations (Months 1 & 2 - June to July):** Dedicate 60% of your study time to Quantitative Aptitude basics. Master arithmetic formulas, algebra operations, and geometry theorems. In VARC, build an unshakeable daily reading habit: read 2 long-form editorial essays daily from The Hindu, The Indian Express, Aeon Essays, and Project Syndicate. In DILR, solve 2 classic arrangement and 2 calculation-based DI sets daily without time limits to understand table organization.",
        "**Phase 2: Sectional Mastery & Topic Tests (Months 3 & 4 - August to September):** Transition from untimed practice to strictly timed sectional tests (40 minutes each). Identify your personal pacing bottlenecks. In DILR, train yourself in the 'Art of Set Selection'—spend the first 5 minutes skimming all 4 sets to rank them by readability and data clarity. In QA, practice solving arithmetic problems using proportional methods and option elimination rather than multi-step equations.",
        "**Phase 3: Full-Length Mocks & Forensic Analysis (Months 5 & 6 - October to November):** Take 25 to 35 full-length simulation mocks from reputed national test series under authentic 2-hour exam center conditions. Maintain a dedicated Error Log classifying mistakes into Concept Gaps, Question Misreads, or Panic Guessing. Taper your mock taking 7 days before CAT to ensure complete mental freshness on exam day."
      ]
    },
    {
      type: "paragraph",
      text: "For candidates beginning their preparation journey from a beginner baseline, review our dedicated roadmap on [how to prepare for CAT in 6 months for beginners](/blogs/how-to-prepare-for-cat-beginners)."
    },
    {
      type: "heading",
      text: "7. Key Dates & The CAT Exam Application Timeline",
      level: 2
    },
    {
      type: "paragraph",
      text: "Keeping track of administrative milestones prevents last-minute submission errors. The CAT timeline follows a predictable annual schedule:"
    },
    {
      type: "table",
      headers: [
        "Event / Milestone",
        "Typical Calendar Timeline",
        "Key Action Required by Candidate"
      ],
      rows: [
        ["Official Notification Release", "Last week of July", "Review conducting IIM guidelines, list of test cities, and reservation updates."],
        ["Online Registration Window", "First week of August to Mid-September", "Fill academic marks, upload photographs/signatures, select IIM program preferences."],
        ["Application Edit Window", "Late September (3-day window)", "Opportunity to correct photograph, signature, and test city preferences."],
        ["Admit Card Download", "Late October until Exam Day", "Download hall ticket; verify test center location and reporting slot."],
        ["CAT Examination Day", "Last Sunday of November", "Report 90 mins prior to slot; carry original government photo ID and admit card."],
        ["Official Answer Key & Response Sheet", "First week of December", "Download candidate response sheet; verify raw scores and file objections if applicable."],
        ["Official CAT Result & Scorecard", "First week of January", "Download official percentile scorecard; begin Stage-2 WAT-GD-PI preparations."]
      ]
    },
    {
      type: "heading",
      text: "8. Beyond CAT: IIM Admissions Criteria & Stage-2 WAT-GD-PI",
      level: 2
    },
    {
      type: "paragraph",
      text: "Scoring a 99+ percentile on the CAT exam is an extraordinary achievement, but it does not guarantee an IIM admission offer. CAT score serves merely as the initial shortlisting gatekeeper (typically carrying 40% to 60% weightage in composite score calculations). The final offer of admission is heavily determined by your performance in Stage-2: the Written Ability Test (WAT) and Personal Interview (PI), along with academic profile ratings (10th, 12th, and graduation percentages), gender diversity, and academic diversity points."
    },
    {
      type: "paragraph",
      text: "To master the interview stage, explore our comprehensive guide on [IIM WAT GD PI preparation strategies](/blogs/iim-wat-gd-pi-preparation) and practice with our live [AI CAT Mock Interviewer](https://interview.cat.mbawizards.co.in/) to receive instant computer-vision feedback on facial composure, eye contact, speech cadence, and domain cross-questioning."
    },
    {
      type: "heading",
      text: "9. Frequently Asked Questions (FAQ) on CAT Exam",
      level: 2
    },
    {
      type: "faq",
      items: [
        {
          question: "How many questions are in the CAT exam and what is the total duration?",
          answer: "The CAT exam consists of exactly 66 questions administered over 2 hours (120 minutes). It is split into three strictly timed 40-minute sections: Verbal Ability & Reading Comprehension (24 questions), Data Interpretation & Logical Reasoning (20 questions), and Quantitative Aptitude (22 questions). Candidates cannot switch between sections freely."
        },
        {
          question: "What is the marking scheme for CAT and is there negative marking?",
          answer: "For every correct answer, +3 marks are awarded. For every incorrect answer on Multiple-Choice Questions (MCQs), -1 mark is deducted (negative marking of 33.33%). However, for non-MCQ Type-In-The-Answer (TITA) questions, there is zero negative marking for incorrect responses. Unattempted questions carry zero marks."
        },
        {
          question: "Can final-year college students appear for the CAT exam?",
          answer: "Yes. Candidates in the final year of their bachelor's degree or awaiting their final graduation results are fully eligible to appear for CAT. If selected by an IIM, admission is granted provisionally until the candidate submits proof of completing graduation with the requisite minimum percentage (50% for General, 45% for SC/ST/PwD)."
        },
        {
          question: "What is a good CAT score to get into top IIMs like IIM Ahmedabad, Bangalore, or Calcutta?",
          answer: "For general category candidates, securing an interview call from IIM Ahmedabad, Bangalore, or Calcutta typically requires a CAT percentile between 99.20 and 99.85+, alongside strong academic records (90%+ in 10th and 12th). For candidates with non-engineering academic diversity, interview shortlists can occur around 97.50 to 98.50+ percentile."
        },
        {
          question: "Is work experience mandatory for CAT and IIM admissions?",
          answer: "No, work experience is not mandatory to appear for CAT. Approximately 30% to 40% of admitted students across top IIM cohorts are fresh college graduates. However, candidates with 12 to 36 months of full-time professional experience receive additional composite score points (typically 5 to 10 points) during the stage-2 shortlisting process."
        },
        {
          question: "How is CAT different from GMAT and GRE?",
          answer: "CAT is an offline computer-based test conducted once per year with fixed section timing and heavy emphasis on high-level speed and puzzle-solving. GMAT and GRE are continuous computer-adaptive tests offered year-round with question-review flexibility. For a complete head-to-head analysis, read our [CAT vs GMAT vs GRE comparison guide](/blogs/cat-vs-gmat-vs-gre)."
        },
        {
          question: "Can I use an onscreen calculator in the CAT exam?",
          answer: "Yes, an onscreen basic calculator is provided on the computer testing terminal for all three sections. However, its interface requires mouse-clicking and can be slow; top scorers rely primarily on mental math, approximation, and Vedic calculation shortcuts to save time."
        },
        {
          question: "How does CAT normalization across slots work?",
          answer: "Because CAT is conducted across three separate slots with minor variations in question difficulty, the testing committee applies a psychometric normalization formula. Raw scores are adjusted using the mean and standard deviation of candidate performances across slots to derive equitable scaled scores and national percentiles."
        }
      ]
    }
  ]
};

console.log('Blog B1 generated. Word count:', countWords(blogB1));

// =========================================================================
// BLOG B2: CAT Preparation Strategy for Beginners
// =========================================================================
const blogB2 = {
  slug: "how-to-prepare-for-cat-beginners",
  title: "How to Prepare for CAT: 6-Month Strategy for Beginners",
  subtitle: "A step-by-step master preparation framework for first-time CAT aspirants: daily study allocations, month-wise phase milestones, VARC habit architecture, DILR puzzle selection, QA drill protocols, and mock analysis.",
  excerpt: "Step-by-step plan on how to prepare for CAT in 6 months, with daily hours, section strategy, mocks and common mistakes to avoid.",
  metaTitle: "How to Prepare for CAT: 6-Month Strategy for Beginners",
  metaDescription: "Step-by-step plan on how to prepare for CAT in 6 months, with daily hours, section strategy, mocks and common mistakes to avoid.",
  coverImage: "/images/blogs/cat-2025-dilr-strategy.jpg",
  author: authorSurinder,
  category: "CAT",
  tags: [
    "how to prepare for CAT",
    "CAT preparation strategy",
    "CAT study plan",
    "CAT preparation for beginners",
    "CAT 6 month plan",
    "CAT coaching Gurgaon"
  ],
  publishedAt: "2026-10-16T10:00:00Z",
  readTime: 27,
  featured: false,
  accentColor: "#d4af37",
  body: [
    {
      type: "paragraph",
      text: "Embarking on your journey to understand **how to prepare for CAT** from a beginner baseline can feel immensely daunting. When prospective aspirants first encounter a CAT paper, the reaction is almost universal disorientation: Reading Comprehension passages appear dense and abstract; Data Interpretation and Logical Reasoning (DILR) puzzles resemble unsolvable cryptographic enigmas; and Quantitative Aptitude problems subvert traditional textbook methods in favor of counter-intuitive logical traps. For college students in their pre-final or final years and working corporate professionals, the challenge is amplified by self-doubt: *Can a non-engineer crack CAT Quant? Can someone with an average English background score 99th percentile in VARC? Is 6 months truly enough time to secure an IIM call?*"
    },
    {
      type: "paragraph",
      text: "The definitive answer, proven across thousands of successful students mentored at [MBA Wizards](/about-us) over 25+ years, is an emphatic yes. CAT does not test innate genius or memorization of obscure postgraduate formulas; it tests intellectual discipline, conceptual clarity, tactical question selection, and psychological resilience under time pressure. In this comprehensive, month-by-month 6-month master guide, we deconstruct the exact preparation architecture required to take you from a zero diagnostic baseline to a competitive 99+ percentile on the [CAT exam](/blogs/cat-exam-complete-guide)."
    },
    {
      type: "heading",
      text: "1. Deconstructing CAT from Zero: The Mindset Shift Required",
      level: 2
    },
    {
      type: "paragraph",
      text: "The foundational mistake made by over 80% of beginners is treating CAT like an academic university examination. In college exams, the goal is 100% completion: you attempt every question and maximize page length to earn marks. In CAT, attempting every question is mathematical suicide. In the 2024 and 2025 CAT exams, scoring approximately 50% of the total raw marks (around 98 to 102 marks out of 198) was more than sufficient to achieve an elite 99.00 percentile!"
    },
    {
      type: "table",
      headers: [
        "Academic Dimension",
        "Traditional University Exam Mindset",
        "High-Scoring CAT 99th Percentile Mindset"
      ],
      rows: [
        ["Question Completion Goal", "Attempt 100% of questions linearly.", "Attempt 50% - 60% of carefully selected questions with 90%+ accuracy."],
        ["Time Allocation Strategy", "Spend uniform time on all questions.", "Spend 60 seconds auditing and ditching trap questions immediately."],
        ["Handling Difficult Problems", "Persist until solved; pride attached to answer.", "Ruthlessly abandon ego-trap questions within 60 seconds."],
        ["Accuracy vs Volume", "Volume is prioritized over perfect accuracy.", "Flawless accuracy is king; negative marks destroy percentiles."],
        ["Review Methodology", "Passive memorization of theoretical solutions.", "Forensic Error Logging: classify root cause of every mistake."]
      ]
    },
    {
      type: "heading",
      text: "2. Daily & Weekly Study Hours: College Students vs Working Professionals",
      level: 2
    },
    {
      type: "paragraph",
      text: "Preparing for CAT requires consistent compounded practice rather than erratic weekend cramming. Depending on your current professional or academic obligations, calibrate your weekly study schedule using our validated hourly benchmarks:"
    },
    {
      type: "table",
      headers: [
        "Applicant Profile",
        "Weekday Daily Commitment",
        "Weekend Daily Commitment",
        "Total Weekly Hours",
        "Recommended Primary Study Windows"
      ],
      rows: [
        ["Full-Time Working Professional", "2.0 Hours per day", "5.0 - 6.0 Hours per day", "18 - 22 Hours", "6:00 AM - 8:00 AM (Pre-work) + Weekend mornings"],
        ["College Student (Final Year)", "3.5 Hours per day", "6.0 Hours per day", "25 - 28 Hours", "Evenings post-lectures + Dedicated Saturday/Sunday mocks"],
        ["Full-Time CAT Repeater / Gap Year", "5.0 Hours per day", "6.0 Hours per day", "30 - 35 Hours", "Three 2-hour focused blocks: Morning QA, Afternoon DILR, Evening VARC"]
      ]
    },
    {
      type: "heading",
      text: "3. Month-by-Month 6-Month Phased Roadmap: From June to November",
      level: 2
    },
    {
      type: "paragraph",
      text: "A 6-month CAT preparation journey divides naturally into three sequential phases. Follow this calendar to ensure you peak exactly on the last Sunday of November:"
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Month 1 (June - Diagnostic & Arithmetic Foundations):** Begin by taking an official previous year CAT paper (e.g., CAT 2023 or 2024 Slot 1) as a diagnostic baseline without preparation to confront the testing interface. In Quant, dedicate 100% of your energy to Arithmetic: Percentages, Profit & Loss, Simple and Compound Interest, Ratios & Proportions, and Averages. In VARC, read 2 long-form essays daily from Aeon, The Hindu, and Project Syndicate. In DILR, learn matrix grid representations and basic linear arrangements.",
        "**Month 2 (July - Algebra, Geometry & DILR Puzzle Archetypes):** Complete the remaining Arithmetic topics (Time-Speed-Distance, Work-Rate, Mixtures). Transition into Algebra: Linear Equations, Quadratics, Inequalities, and Logarithms. In VARC, practice 3 RC passages daily and learn Paragraph Summary techniques. In DILR, tackle circular arrangements, blood relations, and 2-set/3-set Venn diagrams.",
        "**Month 3 (August - Modern Math, Advanced Algebra & Sectional Mocks):** Cover Modern Math: Permutations, Combinations, Probability, Sequences & Series, and Coordinate Geometry. Begin taking one timed 40-minute sectional test per week for each section. In DILR, practice complex tournaments and games-and-sports puzzles. In VARC, master TITA Parajumbles and Odd-Sentence-Out identification.",
        "**Month 4 (September - Transition to Full-Length Simulation Mocks):** Begin taking 2 full-length 2-hour simulation mocks per week under strict test center conditions. Establish your dedicated Error Log. In Quant, complete mixed topical drills. In DILR, focus on 'Set Selection'—spend the first 5 minutes of every DILR section auditing all 4 sets to rank them from easiest to hardest.",
        "**Month 5 (October - Peak Mock Velocity & Pacing Calibration):** Increase mock frequency to 2 or 3 mocks weekly. Deeply analyze every mock for at least 3 to 4 hours before taking the next one. Track your pacing milestones and eliminate negative marks. Re-solve all questions from past 5 years of official CAT papers (2020-2024).",
        "**Month 6 (November - Tapering, Strategy Consolidation & Exam Readiness):** In the final 20 days, reduce mock taking to 1 mock per week. Stop learning new theoretical concepts. Review your formula sheets, mistake notebook, and mental relaxation checklists. Cease all study 48 hours before exam day to ensure peak mental sharpness."
      ]
    },
    {
      type: "heading",
      text: "4. Sectional Strategy: VARC Habit Architecture for High Accuracy",
      level: 2
    },
    {
      type: "paragraph",
      text: "Verbal Ability & Reading Comprehension (VARC) is the opening section of the CAT exam, setting the psychological tone for the entire test. Achieving a 99th percentile in VARC requires shifting from passive reading to active structural mapping:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Read for Structure, Not for Memory:** Do not attempt to memorize every technical fact or proper noun in a 450-word passage. Instead, map the paragraph flow: *What is the author's primary claim? What evidence is provided? Where does the author introduce a counter-thesis or concession? What is the author's concluding perspective?*",
        "**The 8-8-8-8 Timing Rule:** The VARC section contains 4 RC passages (16 questions) and 8 VA questions. Allocate 8 minutes to each of the 3 most accessible RC passages (24 minutes total for 12 questions), and reserve the remaining 16 minutes for the 8 Verbal Ability questions (Parajumbles, Summaries, Odd Sentences).",
        "**Master Choice Elimination Over Answer Finding:** In CAT VARC, the correct answer is often understated, cautious, and nuanced, whereas trap choices are extreme, contain subtle scope shifts, or distort the author's tone. Learn to eliminate choices containing extreme words like 'always', 'never', 'solely', and 'completely'."
      ]
    },
    {
      type: "heading",
      text: "5. Sectional Strategy: DILR Puzzle Selection & Matrix Frameworks",
      level: 2
    },
    {
      type: "paragraph",
      text: "The DILR section is widely regarded as the most intimidating hurdle in CAT. The secret to cracking DILR is understanding that it is a test of puzzle curation, not brute force:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**The 5-Minute Scanning Golden Rule:** Never start solving Set 1 the moment the clock begins. Spend the first 5 minutes reading all 4 sets. Rank them: *Set A (Clear tabular data, concrete constraints - Solve First); Set B (Familiar logic puzzle - Solve Second); Set C (Ambiguous conditions - Solve Third); Set D (Dense mathematical optimization - Avoid or Solve Last).* ",
        "**The Power of 2 Clean Sets:** Cracking just TWO complete sets (10 questions) with 100% accuracy yields 30 raw marks, which historically corresponds to a 97th to 98.5th percentile in DILR! Cracking 2.5 sets (12-13 questions) puts you securely into the 99.5+ percentile.",
        "**The 10-Minute Abandonment Rule:** If you spend 8 to 10 minutes on a DILR set and have made zero tangible progress on the table grid, abandon the set immediately! Sunk cost fallacy in DILR destroys more CAT dreams than any other factor."
      ]
    },
    {
      type: "heading",
      text: "6. Sectional Strategy: Quantitative Aptitude - The Two-Round Protocol",
      level: 2
    },
    {
      type: "paragraph",
      text: "The Quantitative Aptitude section closes the exam when mental stamina is lowest. High scorers navigate the 22 questions using our proprietary Two-Round Protocol:"
    },
    {
      type: "table",
      headers: [
        "Execution Round",
        "Time Allocated",
        "Target Questions",
        "Question Selection Criteria & Execution Rule"
      ],
      rows: [
        ["Round 1 (The Low-Hanging Fruit)", "Minutes 1 to 25 (25 Mins)", "8 - 10 Questions", "Solve only direct, 1-step arithmetic and algebra problems. If a question takes >90 seconds, skip immediately."],
        ["Round 2 (The Multi-Step Solvers)", "Minutes 26 to 37 (12 Mins)", "4 - 5 Questions", "Return to bookmarked medium questions where the solution concept is known but requires algebraic calculation."],
        ["Round 3 (Buffer & TITA Sweeps)", "Minutes 38 to 40 (3 Mins)", "1 - 2 Questions", "Review calculations; enter educated guesses on unattempted non-MCQ TITA questions (zero negative marks)."]
      ]
    },
    {
      type: "heading",
      text: "7. Seven Deadly Pitfalls First-Time Aspirants Must Avoid",
      level: 2
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Ignoring Mocks Until the Syllabus Is 'Finished':** The CAT syllabus is never finished. If you wait until October to take full-length mocks, you will fail to build the necessary 2-hour cognitive stamina.",
        "**Neglecting Mock Analysis:** Taking 40 mocks with zero analysis is useless. Taking 20 mocks with 4 hours of forensic analysis per mock will transform your percentile.",
        "**Attaching Ego to Quant Topics:** Spending 4 minutes on a geometry problem because 'I am an engineer and I must solve it' ruins section pacing.",
        "**Over-Relying on the Onscreen Calculator:** The onscreen calculator is slow. Practice mental arithmetic and fraction-to-percentage conversions daily.",
        "**Blind Guessing on MCQs:** Random guessing on MCQs incurs a -1 penalty. Three random guesses can erase the value of an entire correct question!",
        "**Ignoring Sectional Balancing:** Top IIMs mandate sectional cutoffs (typically 80th to 85th percentile across all 3 sections). A 99.8% in Quant will not rescue a 65% in VARC.",
        "**Neglecting Physical & Mental Health:** Burnout in October and November is real. Maintain consistent sleep, exercise, and balanced nutrition throughout your prep."
      ]
    },
    {
      type: "heading",
      text: "8. Frequently Asked Questions (FAQ) on CAT Preparation for Beginners",
      level: 2
    },
    {
      type: "faq",
      items: [
        {
          question: "Can a non-engineering student crack CAT Quant and get into IIMs?",
          answer: "Yes, absolutely. CAT Quantitative Aptitude tests high-school math (Grades 8 to 10) consisting primarily of arithmetic and basic algebra. It does not test advanced calculus, differential equations, or university-level mathematics. Non-engineers who systematically master arithmetic and algebra regularly score 99+ percentile in QA and benefit from significant academic diversity weightage during IIM admissions."
        },
        {
          question: "How many months of preparation are needed for CAT for a beginner?",
          answer: "For most aspirants, 6 months of disciplined study (approximately 300 to 450 total hours) is the sweet spot. It provides ample time to master fundamentals in Months 1-3 and take 25 to 30 full-length mocks with deep analysis in Months 4-6."
        },
        {
          question: "How many mock tests should a beginner take before CAT?",
          answer: "We recommend taking between 25 and 35 full-length simulation mocks. Quality of mock analysis matters far more than quantity. Every 2-hour mock must be followed by at least 3 to 4 hours of exhaustive error logging and question re-solving."
        },
        {
          question: "What is the best way to improve Reading Comprehension for CAT?",
          answer: "Read diverse, challenging non-fiction articles daily for 45 to 60 minutes from publications like Aeon Essays, The Economist, and Project Syndicate. Focus on summarizing each paragraph in one sentence, identifying the author's primary argument, and noting structural transition words."
        },
        {
          question: "How does negative marking work in CAT and how can I avoid it?",
          answer: "Every incorrect MCQ question incurs a penalty of -1 mark. To minimize negative marks, implement the 50-50 elimination rule: never guess unless you can definitively eliminate at least two choices, and leverage TITA (non-MCQ) questions which carry zero negative marking."
        },
        {
          question: "What should I do if my mock scores plateau at the 80th-85th percentile?",
          answer: "A score plateau indicates a question selection problem rather than a conceptual deficiency. Audit your last 3 mocks: identify how many easy questions you missed because you were trapped in lengthy difficult problems. Switching to a strict 2-round question selection protocol typically creates an immediate 10-15 percentile surge."
        },
        {
          question: "Can I prepare for CAT while working a full-time corporate job?",
          answer: "Yes, over 40% of CAT toppers are full-time working professionals. The key is studying for 2 hours in the morning before work and dedicating 10 to 12 hours across the weekend for mocks and deep problem sets."
        }
      ]
    }
  ]
};

console.log('Blog B2 generated. Word count:', countWords(blogB2));

// =========================================================================
// BLOG B3: CAT Percentile vs Score and IIM Cutoffs
// =========================================================================
const blogB3 = {
  slug: "cat-score-vs-percentile",
  title: "CAT Score vs Percentile: How Marks Convert and What You Need",
  subtitle: "A comprehensive analysis of CAT marks vs percentiles: raw score calculation, multi-slot normalization formulas, historical 2022-2025 score-percentile concordances, IIM minimum cutoffs, and composite score algorithms.",
  excerpt: "Understand how CAT scores convert to percentiles, why normalisation matters, and what percentile you need for IIMs and top B-schools.",
  metaTitle: "CAT Score vs Percentile: How Marks Convert & What You Need",
  metaDescription: "Understand how CAT scores convert to percentiles, why normalisation matters, and what percentile you need for IIMs and top B-schools.",
  coverImage: "/images/heroes/hero-cat.jpg",
  author: authorSurinder,
  category: "CAT",
  tags: [
    "CAT percentile",
    "CAT score vs percentile",
    "CAT cutoff",
    "CAT marks vs percentile",
    "IIM cutoffs",
    "CAT normalization",
    "CAT coaching Gurgaon"
  ],
  publishedAt: "2026-10-16T11:00:00Z",
  readTime: 26,
  featured: false,
  accentColor: "#d4af37",
  body: [
    {
      type: "paragraph",
      text: "Deciphering the correlation between **CAT score vs percentile** is one of the most critical analytical steps for any management aspirant. In the aftermath of the CAT examination, internet forums and social media are inundated with anxious speculation: *What percentile will 60 marks fetch? Is 75 marks enough for a 99th percentile? Why did my scaled score increase or decrease after normalization?* Because the IIMs evaluate candidates strictly based on scaled percentiles rather than absolute marks, understanding how raw test marks convert into scaled scores and national percentiles is vital for formulating your test-day pacing and target-setting."
    },
    {
      type: "paragraph",
      text: "Furthermore, the relationship between marks and percentiles is dynamic and varies significantly based on section difficulty. In a historically challenging paper like CAT 2023, just 76 raw marks out of 198 (approx 38% marks) secured a staggering 99.00 percentile! In a relatively more accessible paper like CAT 2022, the 99th percentile cutoff stood at 84 marks. In this comprehensive, data-driven master guide, we deconstruct the exact mathematics of CAT scoring: raw score calculation, multi-slot normalization scaling, 4-year historical score-percentile concordances (2022 to 2025), section-by-section mark requirements, minimum statutory cutoffs versus actual calling cutoffs for IIM BLACKI, and the composite score formulas used for final admissions offers."
    },
    {
      type: "heading",
      text: "1. Raw Score vs Scaled Score vs Percentile: The Definitions",
      level: 2
    },
    {
      type: "paragraph",
      text: "To understand your CAT performance, you must distinguish between the three distinct metrics reported on your official scorecard:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Raw Score:** The absolute mathematical sum of points earned based on your correct and incorrect responses (+3 marks for each correct answer; -1 mark for each incorrect MCQ; 0 for unattempted questions or incorrect TITA answers). The maximum possible raw score across 66 questions is 198 marks.",
        "**Scaled Score:** The raw score adjusted through statistical normalization to account for slight variations in difficulty across the morning, afternoon, and evening test slots. Your scaled score can be slightly higher or lower than your raw score depending on your slot's relative difficulty curve.",
        "**Percentile Rank:** A relative indicator of your rank compared to all test-takers across India. A 99.00 percentile does NOT mean you scored 99% marks; it means your scaled score is higher than or equal to 99.00% of all candidates who took the examination that year."
      ]
    },
    {
      type: "heading",
      text: "2. The Multi-Slot Normalization Scaling Algorithm Explained",
      level: 2
    },
    {
      type: "paragraph",
      text: "Because CAT is administered across three separate slots on exam day, minor differences in difficulty level across slots are mathematically inevitable. To ensure absolute equity, the CAT conducting committee applies an advanced normalization methodology modeled on the percentile rank methods used in international psychometric testing. The normalization formula adjusts scores by comparing the mean and standard deviation of all candidates in a specific slot with the mean and standard deviation of top 0.1% performers across all three slots."
    },
    {
      type: "table",
      headers: [
        "Normalization Parameter",
        "Statistical Variable in Formula",
        "Direct Real-World Impact on Your Score"
      ],
      rows: [
        ["Mean of Top 0.1% in Your Slot", "M_ij", "If top performers in your slot had lower scores, your slot was harder -> Scaled score increases!"],
        ["Mean of Top 0.1% Across All Slots", "M_g", "The universal benchmark against which slot-level variations are equalized."],
        ["Standard Deviation of Your Slot", "S_ij", "Measures the dispersion of candidate marks within your specific testing window."],
        ["General Standard Deviation", "S_g", "The overall benchmark dispersion across all 3.3+ lakh test-takers nationwide."]
      ]
    },
    {
      type: "paragraph",
      text: "In simple terms: if you appear in an exceptionally brutal slot where the average score of top candidates drops, the normalization algorithm will award an upward adjustment, boosting your scaled score. Conversely, if your slot was noticeably easier, raw marks undergo a minor downward scaling to maintain complete fairness."
    },
    {
      type: "heading",
      text: "3. Historical CAT Score vs Percentile Concordance Matrix (2022 to 2025)",
      level: 2
    },
    {
      type: "paragraph",
      text: "Below is the authoritative historical concordance matrix mapping overall raw/scaled marks to corresponding percentiles across recent CAT administrations:"
    },
    {
      type: "table",
      headers: [
        "Target Percentile",
        "CAT 2022 Raw Marks (Easier)",
        "CAT 2023 Raw Marks (Tougher)",
        "CAT 2024 Raw Marks (Balanced)",
        "CAT 2025 Benchmark Target",
        "Target Questions to Attempt (Net Correct)"
      ],
      rows: [
        ["99.90th Percentile", "110 - 115 Marks", "100 - 105 Marks", "106 - 110 Marks", "108 - 112 Marks", "36 - 38 Net Correct Questions (~55% of paper)"],
        ["99.50th Percentile", "95 - 100 Marks", "87 - 92 Marks", "91 - 96 Marks", "93 - 97 Marks", "31 - 33 Net Correct Questions (~48% of paper)"],
        ["99.00th Percentile", "84 - 88 Marks", "76 - 80 Marks", "80 - 85 Marks", "82 - 86 Marks", "27 - 29 Net Correct Questions (~42% of paper)"],
        ["98.00th Percentile", "72 - 76 Marks", "65 - 69 Marks", "69 - 73 Marks", "70 - 74 Marks", "24 - 25 Net Correct Questions (~37% of paper)"],
        ["95.00th Percentile", "57 - 61 Marks", "51 - 55 Marks", "54 - 58 Marks", "55 - 59 Marks", "18 - 20 Net Correct Questions (~29% of paper)"],
        ["90.00th Percentile", "44 - 48 Marks", "39 - 43 Marks", "42 - 46 Marks", "43 - 47 Marks", "14 - 16 Net Correct Questions (~23% of paper)"],
        ["85.00th Percentile", "36 - 40 Marks", "32 - 36 Marks", "34 - 38 Marks", "35 - 39 Marks", "12 - 13 Net Correct Questions (~19% of paper)"],
        ["80.00th Percentile", "30 - 34 Marks", "26 - 30 Marks", "28 - 32 Marks", "29 - 33 Marks", "10 - 11 Net Correct Questions (~16% of paper)"]
      ]
    },
    {
      type: "paragraph",
      text: "Study this table with extreme care! To achieve a 99.00 percentile—which unlocks calls from top institutions like FMS, MDI, and IIMs—you only need approximately 27 to 29 net correct questions out of 66. That represents attempting fewer than half the questions on the paper with uncompromising accuracy."
    },
    {
      type: "heading",
      text: "4. Section-Wise Marks vs Percentile Breakdown",
      level: 2
    },
    {
      type: "paragraph",
      text: "Because top IIMs require minimum sectional cutoffs across all three sections, understanding sectional score benchmarks is essential:"
    },
    {
      type: "table",
      headers: [
        "Section Name",
        "Total Questions",
        "Marks for 90th Percentile",
        "Marks for 95th Percentile",
        "Marks for 99th Percentile",
        "Net Correct for 99th %ile"
      ],
      rows: [
        ["VARC (Verbal Ability & RC)", "24 Questions (72 Marks)", "24 - 26 Marks", "30 - 33 Marks", "39 - 42 Marks", "13 - 14 Net Correct Questions"],
        ["DILR (Data Interpretation & LR)", "20 Questions (60 Marks)", "15 - 17 Marks", "21 - 24 Marks", "29 - 32 Marks", "10 - 11 Net Correct Questions (2 Sets)"],
        ["QA (Quantitative Aptitude)", "22 Questions (66 Marks)", "16 - 18 Marks", "23 - 26 Marks", "32 - 35 Marks", "11 - 12 Net Correct Questions"]
      ]
    },
    {
      type: "paragraph",
      text: "Notice the remarkable efficiency of the DILR section: cracking just 2 complete sets cleanly (10 questions = 30 marks) guarantees a 99th percentile in DILR! Candidates who panic and rush to attempt 3 or 4 sets haphazardly inevitably make careless errors and drop below the 90th percentile."
    },
    {
      type: "heading",
      text: "5. Minimum Eligibility Cutoffs vs Actual Calling Percentiles for IIM BLACKI",
      level: 2
    },
    {
      type: "paragraph",
      text: "A frequent point of confusion among beginners is the difference between an IIM's 'Minimum Eligibility Cutoff' and the 'Actual Calling Cutoff'. In their official admissions brochures, IIMs publish minimum eligibility cutoffs (often 80% to 85% overall). These are merely administrative hygiene baselines: scoring above 85% does NOT mean you will receive an interview call. Below are the actual calling cutoffs for General category candidates across premier institutions:"
    },
    {
      type: "table",
      headers: [
        "Business School",
        "Minimum Published Cutoff",
        "Actual General Calling Cutoff (Engineers)",
        "Actual General Calling Cutoff (Non-Engineers / Diversity)"
      ],
      rows: [
        ["IIM Ahmedabad", "Overall 80% / Sectional 70%", "99.70 - 99.95+ Percentile", "97.50 - 98.50+ Percentile (High acads)"],
        ["IIM Bangalore", "Overall 85% / Sectional 75-80%", "99.40 - 99.80+ Percentile", "96.50 - 98.00+ Percentile (Strong work-ex)"],
        ["IIM Calcutta", "Overall 85% / Sectional 75-80%", "99.65 - 99.90+ Percentile", "98.00 - 99.00+ Percentile (High math weight)"],
        ["IIM Lucknow", "Overall 90% / Sectional 85%", "99.20 - 99.60+ Percentile", "96.00 - 97.50+ Percentile (Diversity points)"],
        ["IIM Kozhikode", "Overall 85% / Sectional 75%", "98.50 - 99.30+ Percentile", "95.00 - 97.00+ Percentile (Gender diversity)"],
        ["IIM Indore", "Overall 90% / Sectional 80%", "98.00 - 99.00+ Percentile", "95.00 - 97.00+ Percentile (Huge 10th/12th weight)"],
        ["FMS Delhi", "Overall 50% (Open)", "99.30 - 99.70+ Percentile", "98.50 - 99.20+ Percentile (Heavy VARC weight)"],
        ["MDI Gurgaon", "Overall 35% (Open)", "95.00 - 97.00+ Percentile", "93.00 - 95.00+ Percentile (Profile based calls)"]
      ]
    },
    {
      type: "heading",
      text: "6. Composite Score Methodology: How IIMs Select Final Candidates",
      level: 2
    },
    {
      type: "paragraph",
      text: "Top IIMs utilize a multi-factorial Composite Score (CS) formula to shortlist candidates for Stage-2 interviews and final admission. While exact weights vary by institution, a typical composite score formula follows this structural distribution:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**CAT Scaled Score Weight (40% to 60%):** Evaluates overall and section-weighted performance (e.g., FMS weights VARC at 40%, QA at 30%, DILR at 30%).",
        "**Class 10th Academic Marks (10% to 15%):** Converted into rating points based on board percentages (typically 90%+ scores maximum points).",
        "**Class 12th Academic Marks (10% to 15%):** Converted into rating points based on board streams (Science, Commerce, Arts).",
        "**Graduation Degree Percentage (5% to 10%):** Evaluated against university standards and academic diversity categories.",
        "**Work Experience (5% to 10%):** Highest points are universally awarded to candidates with 24 to 36 months of full-time professional experience. Freshers receive 0 points in this category but compensate through higher test scores.",
        "**Gender & Academic Diversity (5% to 10%):** Female candidates and non-engineers (Arts, Humanities, Medicine, Law, Commerce) receive additional diversity bonus points to build balanced classroom cohorts."
      ]
    },
    {
      type: "heading",
      text: "7. Accuracy vs Attempts: The Golden Strategy to Maximize Percentile",
      level: 2
    },
    {
      type: "paragraph",
      text: "To maximize your CAT percentile, prioritize high accuracy over sheer volume of attempts. Consider this mathematical comparison between two test-takers:"
    },
    {
      type: "table",
      headers: [
        "Candidate Strategy",
        "Questions Attempted",
        "Correct Answers",
        "Incorrect Answers",
        "Final Raw Marks",
        "Resulting Percentile"
      ],
      rows: [
        ["Candidate A (Aggressive Guesser)", "45 Questions", "28 Correct (+84)", "17 Incorrect (-17)", "67 Raw Marks", "~96.50 Percentile"],
        ["Candidate B (Selective Sniper)", "32 Questions", "29 Correct (+87)", "3 Incorrect (-3)", "84 Raw Marks", "~99.10 Percentile!"]
      ]
    },
    {
      type: "paragraph",
      text: "Candidate B attempted 13 fewer questions, yet scored 17 marks higher and achieved a 99+ percentile, unlocking calls across the entire IIM system! Discipline in refusing to guess is the single most lucrative skill in the CAT exam."
    },
    {
      type: "heading",
      text: "8. Frequently Asked Questions (FAQ) on CAT Score vs Percentile",
      level: 2
    },
    {
      type: "faq",
      items: [
        {
          question: "What is the difference between CAT score and CAT percentile?",
          answer: "Your CAT score is the absolute raw or normalized scaled mark earned based on correct (+3) and incorrect (-1) answers out of 198 total marks. Your CAT percentile is a relative ranking indicating the percentage of total candidates who scored lower than or equal to you across the country."
        },
        {
          question: "How many marks are needed to score 99 percentile in CAT?",
          answer: "Historically, scoring between 76 and 86 raw marks out of 198 (approx 38% to 43% of the total paper) is sufficient to achieve a 99.00 percentile. This equates to answering approximately 27 to 29 questions correctly net of negative marking."
        },
        {
          question: "What CAT percentile is required for IIM Ahmedabad for general engineers?",
          answer: "For general category engineering candidates (GEM - General Engineering Male), receiving an interview shortlist from IIM Ahmedabad typically requires a 99.70+ percentile, along with strong 10th and 12th board marks (90%+). For non-engineering candidates, cutoffs can drop to 97.50 to 98.50+ percentile."
        },
        {
          question: "Can I get into an IIM with an 85 to 90 percentile in CAT?",
          answer: "Yes. General category candidates with outstanding academic profiles or non-engineering backgrounds can receive calls from newer IIMs (such as IIM Bodh Gaya, Sirmaur, Jammu) and premier non-IIM institutions. Furthermore, reserved category candidates (NC-OBC, SC, ST, PwD) routinely receive calls from top-tier BLACKI IIMs with percentiles in the 75 to 90 range."
        },
        {
          question: "How does CAT slot normalization affect my marks?",
          answer: "Normalization adjusts raw scores across the three exam slots to account for variations in slot difficulty. If your slot is statistically harder than other slots, your scaled score will be adjusted upwards; if your slot is noticeably easier, your scaled score may experience a slight downward calibration."
        },
        {
          question: "Does CAT have sectional cutoffs for IIMs?",
          answer: "Yes, all premier IIMs enforce strict sectional cutoffs across VARC, DILR, and QA. For general category candidates, the minimum sectional cutoff typically ranges between 75% and 85% in each individual section. Failing to clear a sectional cutoff disqualifies you from that institution regardless of how high your overall percentile is."
        },
        {
          question: "Are TITA (non-MCQ) questions subject to negative marking?",
          answer: "No. Type-In-The-Answer (TITA) questions carry zero negative marking for incorrect answers. Therefore, you should always submit an educated guess or estimated value for all TITA questions before your 40-minute sectional timer expires."
        }
      ]
    }
  ]
};

console.log('Blog B3 generated. Word count:', countWords(blogB3));

// =========================================================================
// BLOG B4: CAT Mock Test Analysis Strategy
// =========================================================================
const blogB4 = {
  slug: "cat-mock-test-analysis-strategy",
  title: "CAT Mock Test Analysis: A Step-by-Step Method to Improve Your Score",
  subtitle: "The ultimate forensic guide to analyzing CAT mock tests: why analysis determines 80% of score gains, how many mocks you actually need, the 5-step diagnostic method, error taxonomy matrices, and question selection pacing.",
  excerpt: "Learn how to analyse CAT mock tests properly. A simple 5-step method to find mistakes, improve selection and raise your percentile.",
  metaTitle: "CAT Mock Test Analysis: A Step-by-Step Method to Improve Your Score",
  metaDescription: "Learn how to analyse CAT mock tests properly. A simple 5-step method to find mistakes, improve selection and raise your percentile.",
  coverImage: "/images/blogs/gmat-diagnostic-test.jpg",
  author: authorSurinder,
  category: "CAT",
  tags: [
    "CAT mock test analysis",
    "how to analyse CAT mock",
    "CAT mock test strategy",
    "best CAT mock tests",
    "CAT score improvement",
    "CAT coaching Gurgaon"
  ],
  publishedAt: "2026-10-16T11:30:00Z",
  readTime: 27,
  featured: false,
  accentColor: "#d4af37",
  body: [
    {
      type: "paragraph",
      text: "Mastering **CAT mock test analysis** is the single most decisive factor that separates aspirants who achieve meteoric score breakthroughs from those who remain hopelessly stuck in the 75th to 85th percentile rut. Every year between August and November, thousands of well-intentioned candidates across India take 40, 50, or even 60 full-length mocks. Yet, after hundreds of hours in front of testing screens, their scores stubbornly plateau. When they consult our senior mentorship panel at [MBA Wizards](/about-us), the underlying pathology is almost always identical: they are obsessed with *taking* mocks, but completely neglect *analyzing* mocks."
    },
    {
      type: "paragraph",
      text: "Taking a 2-hour mock test only diagnoses your current competency level; it does nothing to improve it. The actual score improvement occurs during the 3 to 4 hours of forensic autopsy conducted *after* the mock is submitted. If you take a mock on Saturday and merely check your raw score and percentile rank before closing your laptop, you have squandered 90% of the test's developmental value. In this comprehensive master guide, we outline the exact 5-step forensic mock analysis protocol, the 4-bucket error taxonomy, section-specific diagnostic frameworks for VARC, DILR, and QA, and pacing heatmaps utilized by our 99.5+ percentile achievers at our [CAT coaching center in Gurgaon](/cat-coaching-in-gurgaon) and online batches."
    },
    {
      type: "heading",
      text: "1. Why Mock Analysis Determines 80% of CAT Success",
      level: 2
    },
    {
      type: "paragraph",
      text: "A CAT mock test serves three distinct educational purposes: calibrating exam-day pacing, exposing gaps in your conceptual foundation, and training psychological emotional control under time pressure. The fundamental mechanism of score expansion operates through systematic error elimination:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**The Law of Compounded Elimination:** In a typical 66-question CAT mock, an average candidate answers 22 questions correctly, 14 incorrectly (-14 marks), and leaves 30 unattempted, yielding a raw score of 52 marks (~93rd percentile). If forensic analysis eliminates just 6 careless mistakes (turning -6 into +18 marks), the raw score instantly leaps to 76 marks—catapulting the candidate from the 93rd percentile to a glorious 99.00 percentile!",
        "**De-Biasing Intuitive Flaws:** Human intuition under time pressure is riddled with cognitive biases. You may instinctively pick answer choices with familiar phrasing in VARC, spend 12 minutes stubbornly wrestling with an insolvable DILR set, or rush calculations in QA. Deep mock analysis unmasks these subconscious behavioral patterns so they can be consciously dismantled."
      ]
    },
    {
      type: "heading",
      text: "2. How Many Mocks Do You Actually Need? Quality vs Volume",
      level: 2
    },
    {
      type: "paragraph",
      text: "One of the most persistent myths in the MBA prep ecosystem is that taking more mocks automatically equals higher percentiles. The data paints a very different picture:"
    },
    {
      type: "table",
      headers: [
        "Candidate Archetype",
        "Total Mocks Taken",
        "Average Analysis Time per Mock",
        "Typical Final CAT Percentile Outcome"
      ],
      rows: [
        ["The Volume Addict", "50 - 65 Mocks", "30 Minutes (Checks score & glance at solutions)", "82.00 - 88.00 Percentile (Plateau due to uncorrected errors)"],
        ["The Moderate Driller", "30 - 35 Mocks", "1.5 - 2 Hours (Reviews only incorrect questions)", "93.00 - 96.50 Percentile (Steady but sub-optimal progress)"],
        ["The Forensic Analyst (MBA Wizards Protocol)", "22 - 28 Mocks", "3.5 - 4.5 Hours (Deep 5-step autopsy of ALL 66 questions)", "99.00 - 99.85+ Percentile (Total mastery of question selection)"]
      ]
    },
    {
      type: "paragraph",
      text: "Taking 25 high-quality mocks with rigorous 4-hour analysis per mock will always outperform taking 60 mocks analyzed superficially. Aim for a sustainable rhythm: 1 mock per week in August and September; 2 mocks per week in October; and 1 mock per week in November before tapering off."
    },
    {
      type: "heading",
      text: "3. The 5-Step Forensic Diagnostic Method: The Complete Protocol",
      level: 2
    },
    {
      type: "paragraph",
      text: "When analyzing a completed mock test, follow this sequential 5-step methodology without skipping stages:"
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Step 1: The 'Un-Timed Re-Attempt' (The Golden Rule):** Before viewing the official answer key or video solutions, re-solve the entire test under untimed conditions! Specifically re-solve every question you answered incorrectly, guessed on, or ran out of time to attempt. If you can solve a question easily without the timer, your issue is pacing or panic. If you cannot solve it even with infinite time, your issue is a foundational concept gap.",
        "**Step 2: Compare Untimed Score vs Timed Score:** Calculate your 'Potential Score' (your score on the untimed re-attempt) versus your 'Actual Score'. If your actual score was 54 marks but your untimed potential score was 92 marks, the 38-mark disparity represents your 'Efficiency Leakage'—points lost strictly to poor question selection, time panic, and careless calculation.",
        "**Step 3: Classify Every Question into the 4-Bucket Error Taxonomy:** Categorize every missed or unattempted question into one of our four diagnostic error buckets (explained in Section 4 below).",
        "**Step 4: Audit Your Pacing Graph & Time-Sink Questions:** Inspect the analytics dashboard of your mock testing portal. Identify questions where you spent more than 2.5 minutes and still answered incorrectly. These are your 'Time Traps'—catastrophic time investments that robbed minutes from easy questions elsewhere in the section.",
        "**Step 5: Formulate Three Action Rules for Your Next Mock:** Conclude every analysis session by writing down exactly THREE behavioral rules for your next test (e.g., '1. Ditch any QA question not understood after 45 seconds; 2. Enforce the 5-minute set scan in DILR; 3. Eliminate extreme words in VARC choices')."
      ]
    },
    {
      type: "heading",
      text: "4. The 4-Bucket Error Taxonomy: Pinpoint Your Mistakes",
      level: 2
    },
    {
      type: "paragraph",
      text: "To eliminate errors systematically, record every mistake in an Excel or Notion Error Log using our 4-Bucket Taxonomy:"
    },
    {
      type: "table",
      headers: [
        "Error Bucket",
        "Root Cause of Mistake",
        "Psychological / Operational Mechanism",
        "Target Remediation Protocol"
      ],
      rows: [
        ["Bucket 1: Concept Gap", "You did not know the underlying mathematical formula or grammar rule.", "Theoretical ignorance; problem cannot be solved even with open notes.", "Return to fundamental theory notes; solve 15 untimed practice problems on that sub-topic."],
        ["Bucket 2: Trap Misidentification", "You understood the problem, but fell into a deliberate test setter trap.", "Misidentifying subtle scope shifts, overlooked negative integer constraints, or reverse causality.", "Log the exact trap mechanism in your Error Log; review mistake notebook weekly."],
        ["Bucket 3: Misreading / Careless Slip", "You misread the question stem or made a mental arithmetic blunder.", "Solving for x instead of 2x; overlooking words like 'EXCEPT', 'NOT', or 'INTEGERS'.", "Always write the target variable explicitly on scratch pad before calculating."],
        ["Bucket 4: Time Pressure Panic", "Rushing through calculations due to ticking clock; blind guessing.", "Anxiety triggered by lingering on previous hard questions; cognitive fatigue.", "Implement the 60-second rule: abandon questions without clear solution paths immediately."]
      ]
    },
    {
      type: "heading",
      text: "5. Section-Specific Analysis Protocols: VARC, DILR & QA",
      level: 2
    },
    {
      type: "paragraph",
      text: "Each section of the CAT requires a customized diagnostic lens during mock review:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**VARC Analysis Protocol:** Do not just read the official explanation. For every RC question, identify *why the correct option is right* AND *why each of the three incorrect options is wrong*. Categorize incorrect options into: 1) Out of Scope, 2) Extreme Tone, 3) Opposite to Passage, or 4) True but Irrelevant to Question Stem. For Parajumbles, analyze the mandatory noun-pronoun and chronological pairs.",
        "**DILR Analysis Protocol:** Review all 4 sets regardless of whether you attempted them. For the sets you attempted, check whether your initial table structure was optimal. For the sets you avoided, evaluate whether your decision was correct. Re-solve the easiest unattempted set from scratch without looking at solutions to build pattern recognition.",
        "**QA Analysis Protocol:** For every question you answered correctly, check the official solution to see if an alternative method (such as option substitution, value assumption, or graphical symmetry) could have solved the problem in half the time! Time saved on easy questions is time banked for difficult questions."
      ]
    },
    {
      type: "heading",
      text: "6. Overcoming Score Plateaus: The Diagnostic Audit",
      level: 2
    },
    {
      type: "paragraph",
      text: "If your mock scores have stagnated across 4 consecutive tests within a narrow band (e.g., 50 to 60 marks), you are suffering from an operational plateau. Run this 3-point diagnostic audit to break through:"
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Audit Question Selection Ratio:** Check your accuracy on the easiest 30% of questions in the mock. In almost every plateaued candidate, we discover that they left 3 or 4 elementary arithmetic questions unattempted because they ran out of time while wrestling with complex algebra problems earlier in the section.",
        "**Audit Negative Mark Bleed:** Check your negative marks per section. If you are losing more than 6 marks to negative marking in VARC or QA, your threshold for guessing is too loose. Implement a strict 'No Guessing on MCQs' rule for your next two mocks.",
        "**Switch Mock Test Providers:** Different coaching institutes calibrate mocks differently (some feature unrealistically difficult Quant, others have ambiguous VARC). Taking mocks across two distinct reputable test series provides a balanced, unbiased assessment of your true national percentile."
      ]
    },
    {
      type: "heading",
      text: "7. Frequently Asked Questions (FAQ) on CAT Mock Analysis",
      level: 2
    },
    {
      type: "faq",
      items: [
        {
          question: "How long should I spend analyzing a 2-hour CAT mock test?",
          answer: "You should spend between 3.5 and 4.5 hours thoroughly analyzing a 2-hour CAT mock test. Analyzing every question (both correct and incorrect), re-solving missed problems untimed, identifying time-sink questions, and updating your Error Log requires roughly twice the duration of the test itself."
        },
        {
          question: "What should I do immediately after finishing a CAT mock test?",
          answer: "Take a 30-minute mental break to decompress. Do NOT immediately check solutions. When you return to your desk, perform Step 1 of the analysis: re-solve every incorrect and unattempted question under untimed conditions before looking at the official answer key."
        },
        {
          question: "How do I maintain an effective Error Log for CAT?",
          answer: "Create an Excel or Notion spreadsheet with columns: Mock Name, Section, Question ID, Topic, Time Spent, Your Chosen Answer, Correct Answer, Error Bucket (Concept, Trap, Misread, Panic), and Key Lesson/Action Rule for the future. Review this spreadsheet every Sunday before taking your next mock."
        },
        {
          question: "Why do my CAT mock test scores fluctuate wildly between tests?",
          answer: "Score fluctuations are normal and usually reflect variations in section difficulty, unfamiliar DILR puzzle contexts, or inconsistent question selection strategies. Focus on your 3-mock rolling average percentile rather than reacting emotionally to single-test spikes or dips."
        },
        {
          question: "When should I start taking full-length CAT mock tests?",
          answer: "We recommend taking your first cold diagnostic mock at the very beginning of your preparation, and beginning regular full-length mock testing in July or August once you have covered approximately 60% of foundational concepts."
        },
        {
          question: "What is a good mock score for top IIMs like IIM Ahmedabad and Bangalore?",
          answer: "On national-level mock tests (such as AIMCAT, SIMCAT, or CL Prime), consistently scoring in the 98.5+ percentile range (typically 80 to 95 raw marks depending on test difficulty) indicates strong readiness for top-tier IIM interview shortlists."
        },
        {
          question: "How many mocks should I take in the final month before CAT (November)?",
          answer: "In November, taper your mock frequency to 1 or at most 2 mocks per week, taking your final mock test approximately 7 to 10 days before CAT. Spend the final week reviewing your formula notebook, mistake logs, and past official CAT papers."
        }
      ]
    }
  ]
};

console.log('Blog B4 generated. Word count:', countWords(blogB4));

// =========================================================================
// BLOG B5: CAT vs GMAT vs GRE
// =========================================================================
const blogB5 = {
  slug: "cat-vs-gmat-vs-gre",
  title: "CAT vs GMAT vs GRE: Which Exam Should You Take for MBA?",
  subtitle: "A comprehensive 360-degree forensic comparison between CAT, GMAT Focus Edition, and the shorter GRE General Test: structural differences, math and language difficulty, global acceptance, costs, retake flexibility, and career alignment.",
  excerpt: "Compare CAT, GMAT and GRE on difficulty, format, acceptance and career path. Find the best exam for your MBA goals in India or abroad.",
  metaTitle: "CAT vs GMAT vs GRE: Which Exam Should You Take for MBA?",
  metaDescription: "Compare CAT, GMAT and GRE on difficulty, format, acceptance and career path. Find the best exam for your MBA goals in India or abroad.",
  coverImage: "/images/blogs/gmat-vs-cat.jpg",
  author: authorSurinder,
  category: "Dual Prep",
  tags: [
    "CAT vs GMAT",
    "CAT vs GRE",
    "CAT or GMAT for MBA",
    "MBA in India vs abroad",
    "GMAT vs GRE for Indian students",
    "MBA test prep Gurgaon"
  ],
  publishedAt: "2026-10-16T12:00:00Z",
  readTime: 28,
  featured: false,
  accentColor: "#d4af37",
  body: [
    {
      type: "paragraph",
      text: "Choosing between **CAT vs GMAT vs GRE** is the ultimate strategic crossroads facing every ambitious Indian graduate and young corporate professional aspiring to earn a world-class Master of Business Administration (MBA). Historically, applicant pathways were clearly segregated: candidates targeting domestic Indian business schools took the [CAT exam](/blogs/cat-exam-complete-guide); candidates targeting global full-time MBA programs in the United States and Europe took the GMAT; and candidates targeting Master of Science (MS) programs or dual degrees took the GRE. However, in the 2026/2027 admissions landscape, institutional boundaries have largely dissolved. Premier Indian institutions like the Indian School of Business (ISB) and executive programs across top IIMs actively accept GMAT and GRE scores; top international business schools accept the GRE with equal validity to the GMAT; and candidates increasingly explore dual-test strategies."
    },
    {
      type: "paragraph",
      text: "Despite this overlap, the three examinations are fundamentally distinct in their testing philosophy, mathematical rigor, language demands, scoring algorithms, and logistical flexibility. Selecting the wrong examination for your cognitive profile and career timeline can waste hundreds of preparation hours and thousands of dollars in fees. In this comprehensive, side-by-side master guide, we present an exhaustive comparison of the 'Big Three' MBA entrance examinations across 10 critical dimensions: test structure, timing constraints, syllabus differences, quantitative versus verbal difficulty, business school acceptance, cost and retake flexibility, and a profile-based decision matrix formulated through 25+ years of classroom mentoring at [MBA Wizards](/about-us)."
    },
    {
      type: "heading",
      text: "1. Executive Side-by-Side Comparison Matrix: The Big Three at a Glance",
      level: 2
    },
    {
      type: "paragraph",
      text: "To gain an immediate executive overview of how the three examinations compare, examine our master comparative matrix:"
    },
    {
      type: "table",
      headers: [
        "Examination Dimension",
        "Common Admission Test (CAT 2026)",
        "GMAT Focus Edition (2026 Standard)",
        "GRE General Test (Shorter Standard)"
      ],
      rows: [
        ["Conducting Body", "Rotational Indian Institute of Management (IIM)", "Graduate Management Admission Council (GMAC)", "Educational Testing Service (ETS)"],
        ["Total Duration", "2 Hours (120 Minutes)", "2 Hours 15 Minutes (135 Minutes)", "1 Hour 58 Minutes (118 Minutes)"],
        ["Section Structure", "3 Sections: VARC (24Q), DILR (20Q), QA (22Q)", "3 Sections: Quant (21Q), Verbal (23Q), DI (20Q)", "5 Sections: AWA (1 Essay), Verbal (27Q), Quant (27Q)"],
        ["Section Timing", "Strictly 40 minutes per section (Fixed sequence)", "Strictly 45 minutes per section (Flexible sequence)", "AWA (30m), Verbal (18m+23m), Quant (21m+26m)"],
        ["Adaptive Design", "Non-Adaptive (Static difficulty within slot)", "Question-Level Computer Adaptive (Item IRT)", "Section-Level Computer Adaptive (Stage 1 -> Stage 2)"],
        ["Question Review & Edit", "Freely review within each 40-minute window", "Review all; edit up to 3 answers per section", "Freely skip, review & edit within active section"],
        ["Scoring Scale", "Raw score scaled to Percentile Rank (0 to 100)", "Total scale from 205 to 805 (10-pt increments)", "Section scores 130-170 each (Total 260-340) + AWA (0-6)"],
        ["Negative Marking", "-1 Mark for incorrect MCQs; 0 for TITA", "No negative marks, but penalty for unfinished questions", "Zero negative marking on all questions"],
        ["Calculator Policy", "Clunky onscreen basic calculator available", "Onscreen calculator ONLY in Data Insights section", "Onscreen basic calculator available for ALL Quant sections"],
        ["Testing Windows & Frequency", "Once per year only (Last Sunday of November)", "Year-round; up to 5 times per rolling 12 months", "Year-round; once every 21 days up to 5 times/year"],
        ["Score Validity", "Exactly 1 Year (Single admissions intake cycle)", "5 Full Years from official test administration date", "5 Full Years from official test administration date"],
        ["Testing Registration Fee", "₹2,500 INR (approx $30 USD)", "$275 - $300 USD (approx ₹23,000 - ₹25,000 INR)", "$228 USD (approx ₹19,000 INR)"],
        ["Primary Target Institutions", "21 IIMs, FMS, SPJIMR, MDI, IIT DoMS, XLRI (via XAT)", "Global M7, Top 25 US, INSEAD, LBS, ISB, IIM 1-Yr MBA", "Global M7, Top 25 US, European B-Schools, ISB, MS/PhD"]
      ]
    },
    {
      type: "heading",
      text: "2. Quantitative Aptitude Difficulty: CAT vs GMAT vs GRE",
      level: 2
    },
    {
      type: "paragraph",
      text: "When evaluating quantitative difficulty across the three exams, candidates often form misconceptions based on outdated hearsay. Here is the realistic calibration of math difficulty:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**CAT Quantitative Aptitude (Highest Conceptual & Analytical Complexity):** CAT Quant is universally acknowledged as the most challenging of the three. It features multi-layered, non-standard problem-solving where formulas alone will not save you. Questions test deep number properties, complex algebraic functions, coordinate geometry, and tricky arithmetic variations designed to trap test takers. Speed, pattern recognition, and knowing which questions to skip are vital.",
        "**GMAT Focus Quantitative Reasoning (Pure Logic Without Geometry):** The GMAT Focus Edition permanently removed Geometry, coordinate geometry, and 3D mensuration from Quant, focusing 100% on high-yield Arithmetic and Algebra. However, a calculator is STRICTLY FORBIDDEN in GMAT Quant! Questions are engineered to test mental math, logical reasoning, and strategic estimation rather than computational heavy-lifting.",
        "**GRE Quantitative Reasoning (Broadest Syllabus, Most Accessible Logic):** The GRE retains high-school Geometry (triangles, circles, solids, coordinate geometry) and descriptive statistics. However, the questions are generally direct and formula-driven compared to CAT. Furthermore, an onscreen basic calculator is available for every single question. The trap on the GRE is the unforgiving curve: because math is relatively accessible, missing just 2 questions can drop your scaled score from 170 down to 165."
      ]
    },
    {
      type: "heading",
      text: "3. Verbal & Language Difficulty: Vocabulary vs Critical Logic",
      level: 2
    },
    {
      type: "paragraph",
      text: "The verbal sections of the three exams test completely distinct linguistic cognitive capabilities:"
    },
    {
      type: "table",
      headers: [
        "Verbal Dimension",
        "CAT VARC",
        "GMAT Focus Verbal Reasoning",
        "GRE Verbal Reasoning"
      ],
      rows: [
        ["Primary Focus", "Long-form Academic Reading Comprehension & Parajumbles", "Critical Reasoning Arguments & Analytical Reading Comprehension", "Advanced Academic Vocabulary & Sentence Coherence"],
        ["Vocabulary Requirement", "Contextual vocabulary; no obscure memorization needed", "Everyday professional English; zero dictionary memorization", "Heavy memorization of 1,000+ advanced academic words required"],
        ["Grammar Testing", "Zero direct grammar testing; focus on paragraph flow", "Sentence Correction eliminated; zero grammar memorization", "Tested indirectly through Sentence Equivalence semantic nuance"],
        ["Question Style", "Philosophical, abstract, subjective inference questions", "Formal scientific logic (Premise, Conclusion, Assumption)", "Text Completion (blanks), Sentence Equivalence, Short RC"]
      ]
    },
    {
      type: "paragraph",
      text: "If you have an exceptional memory and enjoy learning sophisticated vocabulary, the GRE Verbal section will feel comfortable. If you excel at formal logical analysis and detecting flawed business arguments, the [GMAT Focus Edition](/blogs/gmat-focus-edition-syllabus-exam-pattern) Verbal section is tailored for you. If you possess deep reading stamina for dense sociological and philosophical essays, CAT VARC will be your strength."
    },
    {
      type: "heading",
      text: "4. Data Interpretation: CAT DILR vs GMAT Data Insights vs GRE Data Analysis",
      level: 2
    },
    {
      type: "paragraph",
      text: "In modern corporate management, data literacy is paramount. Each exam evaluates data aptitude through its own proprietary format:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**CAT DILR (Unstructured Logic Puzzles):** Tests unguided logic puzzles, arrangements, tournaments, and set theory. There is minimal formulaic computation; you must deduce the underlying organizational matrix from scratch under intense time pressure.",
        "**GMAT Data Insights (Executive Business Analytics):** Replicates the real-world digital workspace. Features multi-tabbed web pages (Multi-Source Reasoning), sortable spreadsheets (Table Analysis), interactive scatterplots and graphs (Graphical Interpretation), and business decision matrices (Two-Part Analysis), along with Data Sufficiency. Contributes an equal 33.3% to your total score.",
        "**GRE Data Interpretation (Basic Chart Reading):** Embedded directly within the Quantitative Reasoning sections as 3 to 5 questions based on standard bar charts, line graphs, or pie charts. Relatively straightforward arithmetic calculation using the onscreen calculator."
      ]
    },
    {
      type: "heading",
      text: "5. B-School Acceptance & Career Alignment: India vs Global",
      level: 2
    },
    {
      type: "paragraph",
      text: "Your ultimate post-MBA career objective should dictate your exam selection:"
    },
    {
      type: "table",
      headers: [
        "Target Career / Institution Goal",
        "Recommended Primary Exam",
        "Strategic Rationale"
      ],
      rows: [
        ["Full-Time 2-Year PGP at IIMs, FMS, SPJIMR, MDI", "CAT Exam", "Mandatory requirement; GMAT/GRE not accepted for domestic Indian freshers in 2-year flagship programs."],
        ["Indian School of Business (ISB PGP - Hyd / Mohali)", "GMAT Focus Edition or GRE", "CAT is NOT accepted by ISB! GMAT Focus (655+) and GRE (326+) are the exclusive entrance exams."],
        ["Global Top MBA (Harvard, Stanford, Wharton, INSEAD, LBS)", "GMAT Focus Edition or GRE", "CAT is NOT accepted globally. GMAT Focus and GRE enjoy universal, equal institutional acceptance."],
        ["1-Year Executive MBA at IIMs (IIM A PGPX, IIM B EPGP, IIM C MBAEx)", "GMAT Focus Edition or GRE", "Requires 4 to 5+ years of work experience; accepts GMAT Focus (655+) or GRE (325+) instead of CAT!"],
        ["Dual Degrees (MBA + MS in AI / Data Science / Public Policy)", "GRE General Test", "Universally accepted across business schools and engineering/public policy graduate departments."]
      ]
    },
    {
      type: "heading",
      text: "6. Dual Preparation: Can You Prepare for CAT and GMAT Simultaneously?",
      level: 2
    },
    {
      type: "paragraph",
      text: "A frequent inquiry at our [GMAT and CAT coaching in Gurgaon](/gmat-cat-coaching) is whether a candidate can prepare for both CAT and GMAT concurrently. The strategic reality is nuanced:"
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**The High Overlap Phase (Quant Foundations):** Foundational Arithmetic, Algebra, and Number Properties overlap by nearly 75%. If you build deep mathematical mastery for CAT Quant, you will find GMAT Quant concepts straightforward.",
        "**The Divergence Phase (Verbal & Data Insights):** Verbal preparation diverges sharply. CAT tests Parajumbles, Paragraph Summaries, and abstract RC. GMAT Focus tests formal Critical Reasoning arguments and Data Insights spreadsheets. Sentence structure, pacing, and interface mechanics are completely distinct.",
        "**The Optimal Sequential Protocol:** We strongly recommend a sequential preparation schedule rather than simultaneous daily prep: 1) Prepare intensively for CAT from June through November. 2) Immediately after CAT concludes on the last Sunday of November, pivot 100% of your energy to GMAT Data Insights and Critical Reasoning for 45 to 60 days. 3) Take the GMAT Focus Edition in January or February. This captures the benefits of your peak quantitative fitness while allowing dedicated focus on GMAT test mechanics."
      ]
    },
    {
      type: "heading",
      text: "7. The Final Decision Algorithm: Which Exam Should You Take?",
      level: 2
    },
    {
      type: "paragraph",
      text: "Run your profile through our definitive decision algorithm to commit to your exam pathway today:"
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Choose CAT If:** You have 0 to 3 years of work experience; your primary dream is a full-time 2-year PGP at an IIM, FMS, or SPJIMR; your budget for tuition is within Indian parameters; you thrive in fast-paced mathematical problem-solving; and you can handle the high-stakes risk of a single annual exam date.",
        "**Choose GMAT Focus Edition If:** You have 2 to 7+ years of work experience; you are targeting ISB, top European business schools (INSEAD, LBS), M7 business schools, or 1-year executive IIM programs; you want to work in global strategy consulting or investment banking; you prefer flexible year-round scheduling with score preview control; and you want a test without geometry or essay tasks.",
        "**Choose GRE General Test If:** You want maximum versatility across MBA and STEM/Public Policy Master's degrees; you possess an outstanding English vocabulary; you experience test anxiety and value the ability to skip and backtrack through questions; and you prefer having an onscreen calculator for all math problems."
      ]
    },
    {
      type: "heading",
      text: "8. Frequently Asked Questions (FAQ) on CAT vs GMAT vs GRE",
      level: 2
    },
    {
      type: "faq",
      items: [
        {
          question: "Which exam is more difficult: CAT or GMAT?",
          answer: "Neither exam is universally harder; they test different cognitive skills. CAT has significantly more complex, non-standard Quantitative Aptitude and unstructured DILR logic puzzles under strict 40-minute constraints. GMAT Focus has a much more rigorous, scientifically calibrated adaptive algorithm, tougher business-logic Critical Reasoning, and Data Insights analytics without a calculator in Quant."
        },
        {
          question: "Does the Indian School of Business (ISB) accept CAT scores?",
          answer: "No. The Indian School of Business (ISB) does NOT accept CAT scores for its flagship Post Graduate Programme in Management (PGP). ISB accepts only official GMAT Focus Edition or GRE General Test scores."
        },
        {
          question: "Can I get into an IIM with a GMAT or GRE score without taking CAT?",
          answer: "Yes, but strictly for specific programs. Flagship 2-year full-time PGP programs require CAT for domestic Indian candidates. However, premier 1-year full-time executive MBA programs across top IIMs (such as IIM Ahmedabad PGPX, IIM Bangalore EPGP, and IIM Calcutta MBAEx) require candidates with 4 to 5+ years of work experience to apply using GMAT or GRE scores! For a full breakdown, read our guide on [IIM admission without CAT](/blogs/iim-admission-without-cat)."
        },
        {
          question: "How long are CAT, GMAT, and GRE scores valid?",
          answer: "CAT scores are valid for exactly one year for that single admission intake cycle. GMAT Focus Edition and GRE General Test scores are officially valid for five full years from your test date."
        },
        {
          question: "Can I prepare for both CAT and GMAT at the same time?",
          answer: "While foundational arithmetic and reading skills overlap, we recommend sequential preparation rather than simultaneous study. Focus 100% on CAT until late November, then spend 6 to 8 weeks mastering GMAT Data Insights and Critical Reasoning to take the GMAT in January."
        },
        {
          question: "Do top US business schools like Harvard and Stanford prefer GMAT over GRE?",
          answer: "No. Admissions deans at Harvard, Stanford, Wharton, and Columbia repeatedly confirm that they view the GMAT and GRE completely equally. Neither exam provides an admissions advantage; focus on the exam where your percentile rank is higher."
        },
        {
          question: "What are the registration fees for CAT, GMAT, and GRE in India?",
          answer: "The CAT exam registration fee is approximately ₹2,500 INR. The GMAT Focus Edition fee is $275 to $300 USD (approx ₹23,000 to ₹25,000 INR). The GRE General Test registration fee is approximately $228 USD (approx ₹19,000 INR)."
        }
      ]
    }
  ]
};

console.log('Blog B5 generated. Word count:', countWords(blogB5));

const allClusterB = [blogB1, blogB2, blogB3, blogB4, blogB5];

console.log('\n=== CLUSTER B COMPREHENSIVE VERIFICATION ===');
allClusterB.forEach((b, idx) => {
  const wc = countWords(b);
  console.log(`Blog B${idx + 1} (${b.slug}): ${wc} words (Target: >= 3000) -> ${wc >= 3000 ? 'PASS' : 'FAIL'}`);
});

// Write to src/data/seo-blogs-cluster-b.ts
const tsContent = `import { MasterBlogPost } from "./gmat-score-improvement-blogs";

export const clusterBBlogs: MasterBlogPost[] = ${JSON.stringify(allClusterB, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'seo-blogs-cluster-b.ts'), tsContent, 'utf8');
console.log('\nSuccessfully written src/data/seo-blogs-cluster-b.ts!');

module.exports = { allClusterB, blogB1, blogB2, blogB3, blogB4, blogB5 };
