const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

function createVerbal47Pdf() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const primary = [15, 23, 42]; // Slate / Dark Navy
  const brandBlue = [29, 78, 216]; // Royal Blue
  const accentGold = [212, 175, 55]; // Gold
  const textDark = [30, 41, 59];
  const textMuted = [100, 116, 139];
  const borderLight = [226, 232, 240];
  const TOTAL_PAGES = 4;

  function addHeaderFooter(pageNum, title) {
    // Top Bar
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.rect(0, 0, 210, 14, "F");

    doc.setFillColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.rect(0, 14, 210, 1.2, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text("MBA WIZARDS | GMAT VERBAL 47 MASTERY BLUEPRINT", 14, 9.5);

    doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.text(`Page ${pageNum} of ${TOTAL_PAGES}`, 196, 9.5, { align: "right" });

    // Bottom Bar
    doc.setFillColor(248, 250, 252);
    doc.rect(0, 285, 210, 12, "F");

    doc.setFillColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(0, 285, 210, 0.5, "F");

    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text("MBA Wizards Delhi NCR | Gurgaon • Noida • Delhi | mbawizards.co.in", 14, 292);
    doc.text("Confidential — For GMAT Aspirants Only", 196, 292, { align: "right" });

    // Section banner inside page
    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(title, 14, 23);

    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.setLineWidth(0.4);
    doc.line(14, 25, 196, 25);
  }

  // ==========================================
  // PAGE 1: EXECUTIVE SUMMARY & SENTENCE CORRECTION
  // ==========================================
  addHeaderFooter(1, "How to Conquer Verbal Phobia & Score V47");

  // Hero Box
  doc.setFillColor(240, 249, 255);
  doc.roundedRect(14, 28, 182, 30, 3, 3, "F");
  doc.setDrawColor(186, 230, 253);
  doc.roundedRect(14, 28, 182, 30, 3, 3, "D");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("From Verbal Anxiety to the 99th Percentile: The Methodology", 18, 35);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const heroIntro = "Verbal phobia affects thousands of Indian engineers and analytical professionals who excel at Quant but freeze when facing dense Reading Comprehension passages and nuanced Critical Reasoning arguments. A V47 is not about natural-born English talent; it is about replacing intuitive 'ear-based' guessing with forensic rule-based elimination.";
  doc.text(doc.splitTextToSize(heroIntro, 174), 18, 41);

  // Section 1: The Root Cause of Verbal Anxiety
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("1. Why GMAT Verbal Creates Anxiety (And How to Defuse It)", 14, 66);

  const reasons = [
    { title: "Subjective Ambiguity vs. Quant Certainty", desc: "Quant has single numerical truths. Verbal tests relative best fit among imperfect options. Learn to look for objective grammatical/logical flaws rather than 'perfect' prose." },
    { title: "Tempting Trap Designs", desc: "Wrong choices are meticulously engineered with familiar buzzwords. Unskilled test-takers fall into extreme wording, scope shifts, and reverse causality traps." },
    { title: "Mental Fatigue on Adaptive Exams", desc: "Dense text under ticking clocks triggers cognitive overload. Building paragraph-level mental mapping preserves energy for high-difficulty questions." }
  ];

  let y = 72;
  reasons.forEach(r => {
    doc.setFillColor(248, 250, 252);
    doc.rect(14, y, 182, 14, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, y, 182, 14, "D");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(`• ${r.title}:`, 18, y + 5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(doc.splitTextToSize(r.desc, 172), 18, y + 9.5);
    y += 16;
  });

  // Section 2: Sentence Correction Elimination Hierarchy
  y += 4;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("2. The 5-Step Sentence Correction Elimination Protocol", 14, y);

  y += 5;
  const scSteps = [
    { step: "Step 1: Read for Structural Meaning", act: "Read the original sentence for intended logical meaning before glancing at answer choices." },
    { step: "Step 2: Spot the Initial Splits", act: "Scan the options vertically to identify 2/3 splits (e.g. singular vs plural verbs, which vs -ing)." },
    { step: "Step 3: Filter by Hard Rules First", act: "Eliminate choices with Subject-Verb disagreements, modifier misplacements, or pronoun ambiguity." },
    { step: "Step 4: Verify Parallelism & Tenses", act: "Examine conjunctions (and, but, not only... but also) for strict structural & conceptual parallelism." },
    { step: "Step 5: Confirm Logical Meaning", act: "Check the remaining 1 or 2 options for subtle shifts in distortion, absurdity, or redundant phrasing." }
  ];

  scSteps.forEach((s, idx) => {
    doc.setFillColor(idx % 2 === 1 ? 248 : 255, idx % 2 === 1 ? 250 : 255, idx % 2 === 1 ? 252 : 255);
    doc.rect(14, y, 182, 9, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, y, 182, 9, "D");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(s.step, 18, y + 5.5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.text(s.act, 65, y + 5.5);
    y += 9;
  });

  // ==========================================
  // PAGE 2: CRITICAL REASONING & READING COMPREHENSION
  // ==========================================
  doc.addPage();
  addHeaderFooter(2, "Critical Reasoning & Reading Comprehension Playbooks");

  // Section 3: Critical Reasoning Framework
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("3. Critical Reasoning: Dissecting the Argument Engine", 14, 30);

  const crTableY = 35;
  doc.setFillColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.rect(14, crTableY, 182, 7.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Question Family", 18, crTableY + 5);
  doc.text("Core Tactical Objective", 60, crTableY + 5);
  doc.text("Winning Elimination Filter", 125, crTableY + 5);

  const crFamilies = [
    { fam: "Assumption", obj: "Identify the unstated necessary belief holding premise to conclusion.", filter: "Apply the Negation Technique. If negated answer destroys conclusion, it's correct." },
    { fam: "Strengthen / Weaken", obj: "Validate or expose vulnerabilities in the central causal leap.", filter: "Eliminate answers that attack premises; target the unstated logical gap directly." },
    { fam: "Inference / Must Be True", obj: "Extract 100% provable statement strictly bounded by given facts.", filter: "Instantly eliminate external generalizations, speculations, or extreme language (all, never)." },
    { fam: "Evaluate the Argument", obj: "Find the dual-sided question whose answer either proves or disproves.", filter: "Run Variance Test: 'Yes' strongly strengthens, 'No' strongly weakens." },
    { fam: "Boldface / Method of Reasoning", obj: "Map functional roles of distinct argument components.", filter: "Classify each boldface as Fact, Intermediate Conclusion, Counter-Premise, or Main Thesis." }
  ];

  let cY = crTableY + 7.5;
  crFamilies.forEach((cr, idx) => {
    const isAlt = idx % 2 === 1;
    doc.setFillColor(isAlt ? 248 : 255, isAlt ? 250 : 255, isAlt ? 252 : 255);
    doc.rect(14, cY, 182, 14, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, cY, 182, 14, "D");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(cr.fam, 18, cY + 5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(cr.obj, 60), 60, cY + 4.5);
    doc.text(doc.splitTextToSize(cr.filter, 66), 125, cY + 4.5);
    cY += 14;
  });

  // Section 4: Reading Comprehension Structural Mapping
  cY += 6;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("4. Reading Comprehension: Structural Reading Over Memorization", 14, cY);

  cY += 5;
  const rcPillars = [
    { title: "Read for Structure, Not Encyclopedic Memory", desc: "Do not memorize jargon. Identify the author's primary goal: Are they introducing an anomaly, contrasting two historical theories, or refuting conventional scientific dogma?" },
    { title: "Paragraph-Level Mental Mapping", desc: "After each paragraph, spend 2 seconds noting its function (e.g., Para 1: Context & Problem; Para 2: Critic's Rebuttal; Para 3: Author's Reconciliation). This lets you navigate detail questions in seconds." },
    { title: "Track Pivot Words & Subtle Shifts in Tone", desc: "Pivot markers (However, Nonetheless, Surprisingly, To the contrary) indicate where GMAT test-makers formulate 80% of tricky main idea and inference questions." },
    { title: "Detail Questions: Never Answer from Memory", desc: "Always return to the passage. Verify line citations before confirming answers. 90% of wrong detail choices borrow exact words from the passage in the wrong context." }
  ];

  rcPillars.forEach(rc => {
    doc.setFillColor(248, 250, 252);
    doc.rect(14, cY, 182, 13, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, cY, 182, 13, "D");

    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(`• ${rc.title}:`, 18, cY + 4.5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(rc.desc, 172), 18, cY + 8.5);
    cY += 15;
  });

  // ==========================================
  // PAGE 3: ERROR LOGGING & 5-PHASE STUDY ROADMAP
  // ==========================================
  doc.addPage();
  addHeaderFooter(3, "The Error Log System & 5-Phase Preparation Roadmap");

  // Section 5: The Forensic Error Log
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("5. The 4-Bucket Error Taxonomy That Transformed My Score", 14, 30);

  const errorTableY = 35;
  doc.setFillColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.rect(14, errorTableY, 182, 7.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Error Bucket", 18, errorTableY + 5);
  doc.text("Diagnosis & Behavioral Trigger", 60, errorTableY + 5);
  doc.text("Actionable Corrective Protocol", 125, errorTableY + 5);

  const buckets = [
    { b: "1. Conceptual Gap", d: "Did not recognize the grammar rule or argument structure.", c: "Review theory notes; create dedicated flashcard for the missed rule." },
    { b: "2. Trap Vulnerability", d: "Fell for subtle out-of-scope detail or attractive synonym.", c: "Identify exact word in the incorrect option that makes it fatally flawed." },
    { b: "3. Pacing Panic", d: "Rushed the question due to ticking clock / spent >2.5 mins.", c: "Enforce strict 1:45 minute cut-off drills; guess and move when stuck." },
    { b: "4. Misreading Stem", d: "Answered 'Weaken' when question asked 'Except' / 'Assumption'.", c: "Mandate physically re-reading question stem before confirming answer." }
  ];

  let eY = errorTableY + 7.5;
  buckets.forEach((b, idx) => {
    const isAlt = idx % 2 === 1;
    doc.setFillColor(isAlt ? 248 : 255, isAlt ? 250 : 255, isAlt ? 252 : 255);
    doc.rect(14, eY, 182, 11, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, eY, 182, 11, "D");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(b.b, 18, eY + 5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(b.d, 60), 60, eY + 4.5);
    doc.text(doc.splitTextToSize(b.c, 66), 125, eY + 4.5);
    eY += 11;
  });

  // Section 6: 5-Phase Preparation Roadmap
  eY += 6;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("6. The 5-Phase Roadmap to a V47 Verbal Score", 14, eY);

  const phases = [
    { p: "Phase 1: Diagnostic & Foundation (Weeks 1-3)", act: "Audit verbal baseline; break down core grammar mechanics (Modifiers, Parallelism, Tenses) & CR premise-conclusion diagrams without timer." },
    { p: "Phase 2: Untimed Accuracy Drills (Weeks 4-7)", act: "Solve official GMAT verbal questions in sets of 15; demand 85%+ accuracy before introducing speed; log every error in the 4-bucket taxonomy." },
    { p: "Phase 3: Sectional Pacing & Stamina (Weeks 8-11)", act: "Introduce 23-question sectional blocks (Focus Edition); calibrate 1:45 min average pace; eliminate cognitive fatigue across back-to-back sections." },
    { p: "Phase 4: Adaptive Mock Analytics (Weeks 12-14)", act: "Take official GMAC practice exams under simulated test conditions; conduct deep forensic mock review with MbaWizards mentors." },
    { p: "Phase 5: Peak Mental Calibration (Final 2 Weeks)", act: "Consolidate error logs; simulate test-day sleep & nutrition schedules; protect mental confidence and execute calibrated elimination." }
  ];

  eY += 5;
  phases.forEach(ph => {
    doc.setFillColor(248, 250, 252);
    doc.rect(14, eY, 182, 15, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, eY, 182, 15, "D");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(ph.p, 18, eY + 5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(ph.act, 172), 18, eY + 9.5);
    eY += 17;
  });

  // ==========================================
  // PAGE 4: TEST DAY NERVES & MBAWIZARDS ADVANTAGE
  // ==========================================
  doc.addPage();
  addHeaderFooter(4, "Test-Day Protocol & MbaWizards Delhi NCR Mentorship");

  // Section 7: Test-Day Nervous System Control
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("7. Test-Day Execution: How to Stay Calm Under Pressure", 14, 30);

  const tips = [
    "Treat Question 1 as Question 1, not Question 100: Never carry forward frustration from a difficult question into the next one.",
    "Use the 8-Minute Intermission Strategically: Hydrate, do diaphragmatic breathing, and reset cognitive fatigue before the Verbal section.",
    "The 2.5-Minute Cutoff Rule: If you cannot find a decisive split within 2.5 minutes, guess among remaining choices and protect remaining questions.",
    "Trust the Process Over Your Intuition: When an answer sounds awkward but cleanly satisfies every grammar and logic test, choose it with confidence."
  ];

  let tY = 36;
  doc.setFillColor(240, 253, 244);
  doc.roundedRect(14, tY, 182, 34, 3, 3, "F");
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, tY, 182, 34, 3, 3, "D");

  doc.setTextColor(21, 128, 61);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Proven Test-Day Mindset Habits:", 18, tY + 6);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  let tipItemY = tY + 12;
  tips.forEach(tip => {
    doc.text(`✓  ${tip}`, 18, tipItemY);
    tipItemY += 5.5;
  });

  // Section 8: Why MbaWizards is the #1 GMAT Verbal Destination
  tY += 42;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("8. The MbaWizards Personalised Mentorship Advantage", 14, tY);

  const advs = [
    { title: "IIT & Top B-School Mentors", desc: "Coaching led by master faculty with 25+ years of GMAT mentorship experience, translating intricate verbal nuances into systematic algorithms." },
    { title: "Bespoke 1-on-1 Error Audits", desc: "Private diagnostic reviews that deconstruct exactly how you reason through questions, fixing flawed mental models rather than forcing blind repetition." },
    { title: "AI Diagnostic & Mock Simulators", desc: "Proprietary AI adaptive tools, question-level pacing analytics, and authentic GMAT item-response theory algorithms for score precision." },
    { title: "Centres Across Delhi NCR & Online", desc: "Flexible in-person classrooms in Gurgaon (Sector 14 & Cyber City), Noida, Delhi, plus intensive live interactive online batches nationwide." }
  ];

  tY += 5;
  advs.forEach(adv => {
    doc.setFillColor(248, 250, 252);
    doc.rect(14, tY, 182, 13, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, tY, 182, 13, "D");

    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(`• ${adv.title}:`, 18, tY + 4.5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(adv.desc, 172), 18, tY + 8.5);
    tY += 15;
  });

  // Final Call to Action Box
  tY += 4;
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(14, tY, 182, 40, 3, 3, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Ready to Conquer Verbal Phobia and Score 705+ (V47)?", 18, tY + 9);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const cta = "Book a free 1-on-1 GMAT diagnostic session and demo class with MbaWizards master faculty. We will analyze your error patterns, customize your study plan, and guide you to your dream score for ISB, IIM, Harvard, Stanford, and INSEAD.";
  doc.text(doc.splitTextToSize(cta, 174), 18, tY + 16);

  doc.setFillColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.roundedRect(18, tY + 27, 72, 8, 2, 2, "F");
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Book Free Diagnostic Class ↗", 22, tY + 32);

  doc.setTextColor(203, 213, 225);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text("Call/WhatsApp: +91 98115 66490 | mbawizards.co.in", 96, tY + 32);

  // Save PDF
  const dir = path.join(__dirname, "../public/lead-magnets");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const outPath1 = path.join(dir, "gmat-verbal-47-success-story-mbawizards-guide.pdf");
  const outPath2 = path.join(dir, "gmat-verbal-47-success-story-mbawizards.pdf");

  const pdfData = Buffer.from(doc.output("arraybuffer"));
  fs.writeFileSync(outPath1, pdfData);
  fs.writeFileSync(outPath2, pdfData);
  console.log("Successfully generated Verbal 47 PDFs:", outPath1, outPath2);
}

createVerbal47Pdf();
