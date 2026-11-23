const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

function createUnderdog440To685Pdf() {
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
  const bgLight = [248, 250, 252];
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
    doc.text("MBA WIZARDS | GMAT 440 TO 685 FOCUS (Q90 V80 DI82) PLAYBOOK", 14, 9.5);

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
    doc.text("MBA Wizards Gurgaon & Delhi NCR | Sector 14 Gurgaon • Delhi • Noida | mbawizards.in", 14, 292);
    doc.text("Confidential — For GMAT Aspirants & Retakers", 196, 292, { align: "right" });

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
  // PAGE 1: EXECUTIVE SUMMARY & UNDERDOG TRANSFORMATION
  // ==========================================
  addHeaderFooter(1, "1. Executive Summary & The Underdog Transformation");

  // Hero Card
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, 28, 182, 34, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("From 440 Mock & 640 Setback to Focus 685 (Q90 V80 DI82)", 20, 37);

  doc.setTextColor(241, 245, 249);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(
    "How a corporate consultant conquered severe math aversion, rebuilt his lifestyle in Gurgaon,\nand bounced back from real-exam disappointment to achieve 97th percentile mastery (~740 Classic).",
    20,
    44
  );

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("OFFICIAL BREAKDOWN: Focus 685 | Quant: 90 (100%ile) | Verbal: 80 | Data Insights: 82", 20, 56);

  // Pillar 1: The Patchwork Trap
  let y = 68;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("The Patchwork Preparation Trap vs Structured Mentorship", 14, y);

  y += 5;
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const p1 =
    "Self-study often lures busy working professionals into the 'Patchwork Trap' — collecting fragmented tips from Reddit, YouTube videos, and peer notes without an overarching curriculum. Five months of scattered effort rarely produces more than a 440 to 600 plateau. Investing in a structured course provides sequential concept mastery, strict elimination frameworks, and immediate error accountability.";
  const splitP1 = doc.splitTextToSize(p1, 182);
  doc.text(splitP1, 14, y);

  // Transformation Milestones Box
  y += splitP1.length * 4.2 + 6;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 100, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("The Underdog's 4-Stage Score Journey", 20, y + 8);

  const stages = [
    {
      title: "Stage 1: The Wake-Up Call (Score: 440 Baseline)",
      desc: "First official mock after 2 years away from academics. Exposed rusty basic math, lack of pacing strategy, and immediate need for a complete life overhaul.",
    },
    {
      title: "Stage 2: The Patchwork Phase (Stagnant 5 Months)",
      desc: "Assembling study resources from multiple websites without a cohesive framework. Jumping between methods caused decision fatigue and zero score growth.",
    },
    {
      title: "Stage 3: The 640 Setback (710 Mock vs 640 Official)",
      desc: "Real exam anxiety, mental exhaustion from corporate workload, and physical relocation to Gurgaon caused an acute score drop on attempt two.",
    },
    {
      title: "Stage 4: Focus Edition Rebirth (Score: 685 | Q90 V80 DI82)",
      desc: "Specialized Focus orientation at MbaWizards, study groups, tailored Quant drill sessions, and mastering Data Insights unlocked the 97th percentile (~740 Classic).",
    },
  ];

  let py = y + 16;
  stages.forEach((stg) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(stg.title, 20, py);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const descText = doc.splitTextToSize(stg.desc, 170);
    doc.text(descText, 20, py + 4.2);
    py += descText.length * 4.2 + 5;
  });

  // Callout Quote
  y = 222;
  doc.setFillColor(238, 242, 255);
  doc.setDrawColor(199, 210, 254);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("THE UNDERDOG'S CREED:", 20, y + 8);

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  const quoteText =
    '"The resilience of an underdog lies in a simple idea: you do not have to be the smartest person in the room, you only have to refuse to quit. Giving up after a 640 setback was tempting, but choosing to rebuild with MbaWizards turned that lowest point into my biggest win."';
  doc.text(doc.splitTextToSize(quoteText, 170), 20, y + 14);

  doc.setFont("helvetica", "bold");
  doc.text("— Management Consultant & 685 Focus Achiever", 20, y + 31);

  // ==========================================
  // PAGE 2: TIMELINES, RETAKES & ADAPTABILITY
  // ==========================================
  doc.addPage();
  addHeaderFooter(2, "2. Retakes, Deadlines & Balancing Corporate Demands");

  y = 30;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Strategic Decisions: Missing Round 1 & Relocating to Gurgaon", 14, y);

  // Pillar: Missing Round 1
  y += 6;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 52, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Why Intentionally Delaying for Round 2 Was the Smartest Move", 20, y + 8);

  const r1Points = [
    "• Quality Over Rushing: Submitting in Round 1 with an unstable 620-640 score burns your application with top business schools. Schools evaluate candidates within their score range; a high GMAT in Round 2 far outperforms a mediocre score in Round 1.",
    "• Building an Unshakeable Foundation: Taking an extra 10 weeks allowed for rigorous error logging, completing 4 adaptive mocks, and overcoming deep-rooted algebra gaps.",
    "• Relieving Timeline Pressure: Decoupling test prep from frantic essay drafting restored mental bandwidth and prevented burnout during critical study phases.",
  ];
  let r1y = y + 14;
  r1Points.forEach((pt) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitPt = doc.splitTextToSize(pt, 170);
    doc.text(splitPt, 20, r1y);
    r1y += splitPt.length * 4.2 + 2;
  });

  // Why Real Scores Differ from Mocks
  y = 96;
  doc.setFillColor(254, 243, 199);
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(14, y, 182, 56, 2, 2, "FD");

  doc.setTextColor(180, 83, 9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Deconstructing the Mock vs Real Score Gap (710 Mock -> 640 Real)", 20, y + 8);

  const gapReasons = [
    "Adrenaline & Cortisol Spikes: Test-center pressure triggers tunnel vision, making test-takers abandon careful step-by-step scratchwork in favor of panicked speed.",
    "Cumulative Corporate Fatigue: Working 55+ hours weekly at a consulting firm depletes executive cognitive reserves. Without adequate rest 48 hours prior, analytical stamina drops.",
    "The 'One Hard Question' Spiral: Spending 4+ minutes stubborn on question 8 in Quant precipitates time shortages, forcing blind guesses on the final 5 questions.",
    "The Solution: Structured mental reset techniques (box breathing), strict 2-minute question exit protocols, and simulating full exam fatigue during practice.",
  ];

  let gy = y + 14;
  gapReasons.forEach((gr) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("•", 20, gy);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitGr = doc.splitTextToSize(gr, 168);
    doc.text(splitGr, 24, gy);
    gy += splitGr.length * 4.2 + 2;
  });

  // Transitioning to Focus Edition
  y = 160;
  doc.setFillColor(240, 253, 244);
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, y, 182, 54, 2, 2, "FD");

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Adapting to the Focus Edition (Scoring Scale: 205 to 805)", 20, y + 8);

  const focusPoints = [
    "Elimination of Geometry & Sentence Correction: Shifting energy completely toward Critical Reasoning, Reading Comprehension, and Data Insights.",
    "Section Weight Concordance: On Focus, Quantitative Reasoning, Verbal, and Data Insights carry equal mathematical weight toward the composite score.",
    "Question Review & Edit Feature: Utilizing the ability to bookmark questions and edit up to 3 responses per section after completing the 45-minute block.",
    "685 Focus Concordance: According to GMAC concordance tables, a 685 Focus score equates to approximately a 740 on the Classic GMAT (96.9th percentile).",
  ];

  let fy = y + 14;
  focusPoints.forEach((fp) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("•", 20, fy);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitFp = doc.splitTextToSize(fp, 168);
    doc.text(splitFp, 24, fy);
    fy += splitFp.length * 4.2 + 2;
  });

  // Bottom Note
  y = 222;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 34, 2, 2, "FD");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("GURGAON CONSULTANT STUDY ROUTINE (Non-Negotiable):", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  doc.text("• 6:45 AM – 8:00 AM: 75 mins Quant drill before office commute.", 20, y + 14);
  doc.text("• 8:30 PM – 10:15 PM: Class review, Verbal logic mapping, and doubt submission to mentors.", 20, y + 20);
  doc.text("• Weekend: Saturday full-length mock simulation + Sunday study group error dissection.", 20, y + 26);

  // ==========================================
  // PAGE 3: CONQUERING MATH & SECTION PLAYBOOK
  // ==========================================
  doc.addPage();
  addHeaderFooter(3, "3. Conquering Math Aversion: How to Score Q90");

  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("The Playbook: How a Math-Phobic Student Achieved Quant 90 (100th %ile)", 14, y);

  // Quant Blueprint
  y += 6;
  doc.setFillColor(239, 246, 255);
  doc.setDrawColor(191, 219, 254);
  doc.roundedRect(14, y, 182, 54, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("QUANT 90 MASTERY PROTOCOL", 20, y + 7);

  const qRules = [
    "Deconstruct Formulas into First Principles: Never memorize mechanical algorithms. Understand the underlying ratios, prime structures, and rate relationships.",
    "Eradicate Mental Algebra: Write every equation explicitly on the scratchpad. 80% of math errors for non-engineers are careless mental arithmetic slips.",
    "Constraint Highlighting: Before writing a single calculation, identify constraints ('x is a negative even integer', 'p and q are distinct primes').",
    "Study Group Synergies: Explaining mathematical solutions to peers reveals hidden logical assumptions and permanently cements correct problem architectures.",
  ];

  let qy = y + 13;
  qRules.forEach((qr) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("•", 20, qy);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitQr = doc.splitTextToSize(qr, 168);
    doc.text(splitQr, 24, qy);
    qy += splitQr.length * 4.2 + 2;
  });

  // Verbal V80
  y = 96;
  doc.setFillColor(240, 253, 244);
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, y, 182, 44, 2, 2, "FD");

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("VERBAL V80: Systematic Reasoning & Structure", 20, y + 7);

  const vRules = [
    "Critical Reasoning Pre-Thinking: Determine the conclusion and uncover the missing premise before reading answer choices.",
    "Reading Comprehension Structural Mapping: Focus on author purpose, pivot transitions, and paragraph function rather than rote facts.",
    "Rule-Based Elimination: Discard answers with extreme language, unstated scope shifts, or reverse causal directions.",
  ];
  let vy = y + 13;
  vRules.forEach((vr) => {
    doc.text(`• ${vr}`, 20, vy);
    vy += 6.5;
  });

  // DI 82
  y = 148;
  doc.setFillColor(254, 243, 199);
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(14, y, 182, 44, 2, 2, "FD");

  doc.setTextColor(180, 83, 9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("DATA INSIGHTS DI82: Fast Synthesis & Logic", 20, y + 7);

  const diRules = [
    "Data Sufficiency Discipline: Evaluate statements independently; never compute numerical answers when testing sufficiency.",
    "Table Analysis Sorting Filters: Use dropdown sorting to isolate percentiles, medians, and threshold criteria in under 35 seconds.",
    "Multi-Source Reasoning (MSR): Read all tab headings first; synthesize cross-tab constraints rather than re-reading text blocks.",
  ];
  let dy = y + 13;
  diRules.forEach((dr) => {
    doc.text(`• ${dr}`, 20, dy);
    dy += 6.5;
  });

  // The 5-Point Error Review Cycle
  y = 200;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 54, 2, 2, "FD");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("The 5-Point Error Review That Turned 640 into 685", 20, y + 7);

  const reviewPoints = [
    "1. Did I miss this due to conceptual ignorance or process failure?",
    "2. What specific phrase in the question stem tricked my intuition?",
    "3. Why was the correct answer choice initially counter-intuitive?",
    "4. What is the clean 2-step algebraic or logical proof for this question?",
    "5. What personal preventive rule will I log in my notebook?",
  ];

  let ry = y + 13;
  reviewPoints.forEach((rp) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.text(`• ${rp}`, 20, ry);
    ry += 5.5;
  });

  // ==========================================
  // PAGE 4: PRACTICAL TIPS, TEST DAY & MENTORSHIP
  // ==========================================
  doc.addPage();
  addHeaderFooter(4, "4. Underdog Lessons, Test Day Routine & Mentorship");

  // Top 8 Lessons
  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Top 8 Lessons for Every Underdog GMAT Aspirant", 14, y);

  y += 5;
  const underdogLessons = [
    "1. Your Starting Point Does Not Define Your Ceiling: A 440 diagnostic is merely raw data, not a permanent diagnosis.",
    "2. Scattered Prep Burns Energy: Invest in an organized, expert-led curriculum to eliminate guesswork.",
    "3. Study Groups Multiply Retention: Peer discussions expose hidden blind spots and build shared accountability.",
    "4. Retakes Require Diagnostics, Not More Volume: Fix the root behavioral cause of your score drop.",
    "5. Missing an Application Deadline Is Fine: Submitting a 685 in Round 2 beats rushing with a 620 in Round 1.",
    "6. Math Anxiety Is Solved Through First Principles: Rebuild algebra from the ground up without shortcuts.",
    "7. Protect Your Cognitive Health: Sleep, light exercise, and stress regulation are essential study pillars.",
    "8. The Test Rewards Persistence: When you refuse to quit, the GMAT algorithm will eventually reward your effort.",
  ];

  underdogLessons.forEach((l) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.text(l, 16, y);
    y += 5.5;
  });

  // Test-Day Protocol
  y += 2;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Test-Day Peak Focus Protocol (How to Avoid the 640 Drop)", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const tProtocols = [
    "• 48-Hour Study Blackout: Stop solving hard problems 2 days prior to allow cognitive neural recovery.",
    "• The Reset Breath: If a question rattles you, look away from the monitor, take 3 deep diaphragmatic breaths, and reset.",
    "• Strict 2-Minute Boundaries: Never allow an intractable question to steal 4 minutes and poison your section timing.",
  ];
  let tpy = y + 13;
  tProtocols.forEach((tp) => {
    doc.text(tp, 20, tpy);
    tpy += 5.5;
  });

  // Mentorship CTA
  y = 114;
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, y, 182, 160, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Turn Your Setback into a 685+ Comeback with MbaWizards", 20, y + 12);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const mwStoryDesc =
    "Whether your diagnostic began at 440, you suffered an unexpected real-exam score drop, or you are balancing a consulting career in Gurgaon, MbaWizards provides the structured curriculum and dedicated faculty to make your breakthrough happen.";
  doc.text(doc.splitTextToSize(mwStoryDesc, 170), 20, y + 20);

  // Pillars Grid
  const mwOfferGrid = [
    { title: "Structured Focus Curriculum", desc: "Covers Quant first principles, Verbal logical deduction, and Data Insights masterclasses." },
    { title: "Retake Diagnostic Audits", desc: "Microscopic analysis of prior score reports to isolate pacing panic and conceptual blind spots." },
    { title: "Gurgaon Classroom & Live Online", desc: "Flexible evening & weekend cohorts tailored for working corporate consultants and professionals." },
    { title: "Round 1 / Round 2 Admissions Support", desc: "Profile building, essay guidance, and mock interviews for ISB, INSEAD, NUS, and global top-20 B-schools." },
  ];

  let mogY = y + 36;
  mwOfferGrid.forEach((mog) => {
    doc.setFillColor(30, 41, 59);
    doc.roundedRect(20, mogY, 170, 16, 1.5, 1.5, "F");

    doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(mog.title, 24, mogY + 6);

    doc.setTextColor(226, 232, 240);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(mog.desc, 24, mogY + 11.5);
    mogY += 19;
  });

  // Contact Info
  doc.setDrawColor(51, 65, 85);
  doc.line(20, mogY + 4, 190, mogY + 4);

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Start Your GMAT Transformation with MbaWizards Gurgaon:", 20, mogY + 11);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Website: https://mbawizards.in", 20, mogY + 18);
  doc.text("• Gurgaon Centres: Sector 14 Gurgaon | DLF Phase 4 / Cyber City | Delhi | Noida", 20, mogY + 24);
  doc.text("• Programs: GMAT Focus Classroom Batches | Live Interactive Online | 1-on-1 Mentorship", 20, mogY + 30);

  // Output paths
  const outputDir = path.join(__dirname, "../public/lead-magnets");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const p1Path = path.join(outputDir, "gmat-440-to-685-focus-underdog-debrief-mbawizards-guide.pdf");
  const p2Path = path.join(outputDir, "gmat-440-to-685-focus-underdog-debrief-mbawizards.pdf");

  const pdfData = doc.output();
  fs.writeFileSync(p1Path, Buffer.from(pdfData, "binary"));
  fs.writeFileSync(p2Path, Buffer.from(pdfData, "binary"));

  console.log("Generated Underdog 440 to 685 PDFs successfully:");
  console.log(" - " + p1Path);
  console.log(" - " + p2Path);
}

createUnderdog440To685Pdf();
