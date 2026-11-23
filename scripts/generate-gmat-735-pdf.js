const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

function createGmat735Pdf() {
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
    doc.text("MBA WIZARDS | GMAT 735 WORKING PROFESSIONAL MASTER GUIDE", 14, 9.5);

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
    doc.text("MBA Wizards Delhi NCR | Gurgaon • Noida • Delhi | mbawizards.in", 14, 292);
    doc.text("Confidential — For Working Professionals & Plateaud Test-Takers", 196, 292, { align: "right" });

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
  // PAGE 1: BREAKING THE PLATEAU & EXECUTIVE SUMMARY
  // ==========================================
  addHeaderFooter(1, "1. Executive Summary & Breaking the GMAT Plateau");

  // Hero Card
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, 28, 182, 34, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("From Frustration & Plateau to a GMAT 735 (99th Percentile)", 20, 37);

  doc.setTextColor(241, 245, 249);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(
    "How a seasoned working professional broke through months of stagnant mock scores\nusing MbaWizards' 24/7 accessible mentor support, candid diagnostics, and rigorous error analysis.",
    20,
    44
  );

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("SCORE ACHIEVED: 735 | 99th Percentile Global | Target: Top Global & Indian MBA Programs", 20, 56);

  // Pillar 1: The Psychology of the Plateau
  let y = 68;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Why Working Professionals Hit a Score Plateau", 14, y);

  y += 5;
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const p1 =
    "Working professionals bring high executive competence from their jobs, but the GMAT requires a fundamentally different cognitive posture. When scores plateau between 620 and 660, brute-force practice ('doing more questions') only ingrains flawed heuristics. To break into the 735+ echelon (99th percentile), candidates must transition from question volume to microscopic diagnostic precision.";
  const splitP1 = doc.splitTextToSize(p1, 182);
  doc.text(splitP1, 14, y);

  // The 5 Reasons for the Corporate GMAT Plateau
  y += splitP1.length * 4.2 + 6;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 100, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("The 5 Core Traps That Keep Professionals Stuck", 20, y + 8);

  const traps = [
    {
      title: "1. Studying Without Root-Cause Diagnosis:",
      desc: "Practicing 50 questions a day without categorizing errors leads to solving the same conceptual trap incorrectly over and over again.",
    },
    {
      title: "2. The Comfort-Zone Practice Reflex:",
      desc: "Spending hours reviewing familiar Quant topics because it feels rewarding, while avoiding dense RC or tricky CR arguments that actually dictate the score.",
    },
    {
      title: "3. Untimed Accuracy vs Timed Panic:",
      desc: "Solving questions cleanly in 3.5 minutes at home, then suffering severe time-shortage and reckless blind guessing under strict official exam conditions.",
    },
    {
      title: "4. The Isolation Trap & Delayed Doubt Resolution:",
      desc: "Getting stuck on a question at 10 PM after work, waiting days for the next class, and losing conceptual momentum entirely.",
    },
    {
      title: "5. Chronic Fatigue & Diminishing Cognitive Returns:",
      desc: "Attempting high-stakes analytical reasoning while mentally drained after 9 hours of corporate meetings. Cognitive retention drops to near zero.",
    },
  ];

  let py = y + 15;
  traps.forEach((item) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(item.title, 20, py);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const descText = doc.splitTextToSize(item.desc, 170);
    doc.text(descText, 20, py + 4.2);
    py += descText.length * 4.2 + 4.5;
  });

  // Callout Quote
  y = 222;
  doc.setFillColor(238, 242, 255);
  doc.setDrawColor(199, 210, 254);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("WELLBEING & MINDSET PRINCIPLE:", 20, y + 8);

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  const quoteText =
    '"A plateau is not a verdict on your intellect — it is a signal that your method has exhausted its utility. When you shift your focus from the final score to the daily process, and have mentors who answer your doubts in real-time, the mental heaviness lifts and breakthrough scores follow."';
  doc.text(doc.splitTextToSize(quoteText, 170), 20, y + 14);

  doc.setFont("helvetica", "bold");
  doc.text("— 735 Scorer & Senior Working Professional", 20, y + 31);

  // ==========================================
  // PAGE 2: THE WORKING PROFESSIONAL BLUEPRINT
  // ==========================================
  doc.addPage();
  addHeaderFooter(2, "2. The Working Professional High-Efficiency Study System");

  y = 30;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("How to Score 735 While Balancing a Demanding Corporate Career", 14, y);

  // Schedule Grid
  y += 6;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 54, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("The 15-Hour Weekly Architecture for Working Professionals", 20, y + 8);

  const sched = [
    "• Morning Slot (6:30 AM – 7:45 AM, 75 Mins): High-focus analytical work (fresh mind). Solve 15 untimed high-difficulty questions or dissect 2 RC passages.",
    "• Lunch / Midday Micro-Sprint (1:30 PM, 20 Mins): Flashcard review, formula checking, or error log recap. Zero new problem sets.",
    "• Evening Slot (8:30 PM – 9:45 PM, 75 Mins): Attend live class or complete drill sets. Immediately send doubts to MbaWizards mentors for same-night resolution.",
    "• Saturday (3.5 Hours): Timed sectionals or full-length computer-adaptive mock exam under strict official testing constraints.",
    "• Sunday (3 Hours): Microscopic line-by-line review of every Saturday question. Update error log; rest completely on Sunday evening.",
  ];

  let sy = y + 14;
  sched.forEach((sc) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitSc = doc.splitTextToSize(sc, 170);
    doc.text(splitSc, 20, sy);
    sy += splitSc.length * 4.2 + 2;
  });

  // Mentorship & Real-time Doubt Support
  y = 96;
  doc.setFillColor(240, 253, 244);
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, y, 182, 54, 2, 2, "FD");

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Why 24/7 Mentor Accessibility Changes the Game", 20, y + 8);

  const doubtBenefits = [
    "Eliminates Dead-End Frustration: When an explanation in a book feels cryptic, an instant voice note or annotated screenshot from a mentor unblocks your thinking immediately.",
    "Prevents Misconception Cementing: When working professionals learn an incorrect shortcut, practicing 30 more questions reinforces the error. Immediate feedback halts bad habits.",
    "Respects Unpredictable Work Calendars: When late client calls conflict with classes, asynchronous 1-on-1 mentor guidance ensures preparation never loses momentum.",
    "Psychological Anchor: Knowing top IIT/IIM mentors are in your corner removes the acute isolation typical of adult standardized test preparation.",
  ];

  let dby = y + 14;
  doubtBenefits.forEach((db) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("•", 20, dby);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitDb = doc.splitTextToSize(db, 168);
    doc.text(splitDb, 24, dby);
    dby += splitDb.length * 4.2 + 2;
  });

  // Honest Constructive Feedback
  y = 158;
  doc.setFillColor(254, 243, 199);
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(14, y, 182, 52, 2, 2, "FD");

  doc.setTextColor(180, 83, 9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("The Value of Candid, Data-Driven Mentor Feedback", 20, y + 8);

  const feedbackPoints = [
    "No False Reassurance: Generic coaching praises effort; elite mentorship points directly to the cognitive flaw causing you to drop 40 marks.",
    "Pattern Recognition: Mentors detect behavioral vulnerabilities (e.g., rushing question 14, over-investing 4 mins in rate problems, picking extreme RC tone).",
    "Tailored Strategy pivots: Reallocating prep hours away from Quant strengths into Critical Reasoning assumptions to maximize net score velocity.",
    "Strategic Abandonment Training: Learning to recognize an unwinnable question at 90 seconds, guess cleanly, and preserve mental bandwidth for subsequent items.",
  ];

  let fby = y + 14;
  feedbackPoints.forEach((fp) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("•", 20, fby);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitFp = doc.splitTextToSize(fp, 168);
    doc.text(splitFp, 24, fby);
    fby += splitFp.length * 4.2 + 2;
  });

  // Bottom Note
  y = 216;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 36, 2, 2, "FD");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("GMAT 735 SCORE PROFILE (99th Percentile Benchmark):", 20, y + 8);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  doc.text("• Quantitative Reasoning: 88–90 (Near-flawless arithmetic, algebra, and number constraint execution)", 20, y + 16);
  doc.text("• Verbal Reasoning: 84–86 (High-speed structural mapping, zero trap vulnerability in CR assumptions)", 20, y + 22);
  doc.text("• Data Insights: 84–85 (Fast multi-source filtering, clean Data Sufficiency logic without over-calculating)", 20, y + 28);

  // ==========================================
  // PAGE 3: THE 735 TACTICAL MASTERY ENGINE
  // ==========================================
  doc.addPage();
  addHeaderFooter(3, "3. Section-by-Section Tactical Mastery for 735+");

  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Tactical Shifts: Moving from Competent (650) to Elite (735)", 14, y);

  // Quant
  y += 6;
  doc.setFillColor(239, 246, 255);
  doc.setDrawColor(191, 219, 254);
  doc.roundedRect(14, y, 182, 42, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("QUANTITATIVE REASONING: First Principles & Algebraic Cleanliness", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const qTactics = [
    "Never solve mental algebra: Elite test-takers write down variables explicitly. Careless slips happen in mental arithmetic.",
    "Constraint Hunting: Circle words like 'distinct', 'prime', 'non-negative integer' before starting any mathematical operation.",
    "Prime Factorization as Universal Weapon: Convert complex divisibility, GCD/LCM, and exponents into prime factor trees instantly.",
    "Benchmark Timing: 21 questions in 45 minutes = 2 mins 8 secs per problem. If no pathway appears by 90s, execute strategic guess.",
  ];
  let qty = y + 13;
  qTactics.forEach((t) => {
    doc.text(`• ${t}`, 20, qty);
    qty += 6.5;
  });

  // Verbal
  y = 78;
  doc.setFillColor(240, 253, 244);
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, y, 182, 42, 2, 2, "FD");

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("VERBAL REASONING: Forensic Argument Dissection & Structural RC", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const vTactics = [
    "Pre-Thinking in Critical Reasoning: Predict the assumption or flaw in your own words before looking at answer options.",
    "The 4 Elimination Traps: Reject answers with Extreme Language (always, never), Scope Shifts, Reverse Logic, or Irrelevant Comparisons.",
    "RC Paragraph Summaries: Note down 4-5 words per paragraph describing function (e.g., 'Author introduces counter-theory').",
    "Rule-Based Certainty: Disregard 'how a sentence sounds'; demand hard structural and logical evidence for every elimination.",
  ];
  let vty = y + 13;
  vTactics.forEach((t) => {
    doc.text(`• ${t}`, 20, vty);
    vty += 6.5;
  });

  // DI
  y = 126;
  doc.setFillColor(254, 243, 199);
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(14, y, 182, 42, 2, 2, "FD");

  doc.setTextColor(180, 83, 9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("DATA INSIGHTS: The Corporate Analytics & Logic Crucible", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const diTactics = [
    "Data Sufficiency (DS) Neutrality: Never compute the answer. Test each statement in isolation before considering them together.",
    "Multi-Source Reasoning (MSR): Read the contextual problem stem first. Cross-reference specific constraints across tabs cleanly.",
    "Table Analysis Sorting: Always sort columns by the variable in question (e.g., median, maximum value) to solve in under 45 seconds.",
    "Graphics Interpretation: Examine axis labels, percentage bases, and legends first before reading question statements.",
  ];
  let dty = y + 13;
  diTactics.forEach((t) => {
    doc.text(`• ${t}`, 20, dty);
    dty += 6.5;
  });

  // The 735 Error Log Protocol
  y = 174;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 78, 2, 2, "FD");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("The 5-Point Error Log Protocol That Unlocked 735", 20, y + 8);

  const elPoints = [
    { label: "1. The Specific Trigger:", desc: "What precise phrasing in the question led me to assume an incorrect constraint?" },
    { label: "2. The Test-Maker's Bait:", desc: "Why did option (C) look so attractive? What psychological trick was the author using?" },
    { label: "3. The 30-Second Rule:", desc: "What early clue should have alerted me that this was a trap answer?" },
    { label: "4. The Clean Path:", desc: "What is the simplest, most elegant 3-step proof that leads to the correct option?" },
    { label: "5. The Personal Mantra:", desc: "The exact sentence I must recite whenever I encounter this sub-topic in the future." },
  ];

  let ely = y + 16;
  elPoints.forEach((ep) => {
    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(ep.label, 20, ely);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(ep.desc, 55, ely);
    ely += 11.5;
  });

  // ==========================================
  // PAGE 4: BEYOND 735 - ADMISSIONS & MENTORSHIP
  // ==========================================
  doc.addPage();
  addHeaderFooter(4, "4. Maximizing 735 for MBA Admissions & Mentorship");

  // MBA Admissions Impact
  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("What a 735 Score Means for Your Global MBA Candidacy", 14, y);

  y += 5;
  const admissionsPoints = [
    "• Top-Tier Competitiveness: A 735 represents the 99th percentile, placing you well above the median score at INSEAD, ISB, LBS, Wharton, and Stanford GSB.",
    "• Significant Merit Scholarships: Top business schools frequently award 25% to 100% tuition scholarships to applicants with 99th percentile GMAT scores.",
    "• Overcoming Academic Flaws: Completely neutralizes low undergraduate GPAs or non-technical backgrounds by conclusively proving analytical aptitude.",
    "• Strategic Confidence: Frees 100% of your remaining mental energy to craft authentic, compelling admissions essays and prepare for executive interviews.",
  ];

  admissionsPoints.forEach((ap) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitAp = doc.splitTextToSize(ap, 180);
    doc.text(splitAp, 16, y);
    y += splitAp.length * 4.2 + 2;
  });

  // Test Day Ritual
  y += 2;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Test-Day Peak Focus Ritual for Working Professionals", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const rituals = [
    "• Take a Day Off from Work: Never take the GMAT the morning after a grueling 12-hour workday. Schedule 1 full rest day before.",
    "• No Late-Night Practice: Cease solving problems 36 hours prior. Sleep 8 solid hours; your brain needs glycogen and rested neurotransmitters.",
    "• The Reset Breath: If an unexpected hard question rattles you, look away from the monitor, inhale deeply for 4 seconds, exhale for 6, and proceed.",
  ];
  let ry = y + 13;
  rituals.forEach((r) => {
    doc.text(r, 20, ry);
    ry += 5.5;
  });

  // MbaWizards Mentorship Offer
  y = 114;
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, y, 182, 160, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Choose MbaWizards When Winning Is the Only Option", 20, y + 12);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const mwDesc =
    "Whether you are currently stuck at 620, balancing an overwhelming corporate job, or aiming for an elite 735+ score, MbaWizards provides the personalized mentorship, accessible faculty, and relentless rigor to get you there.";
  doc.text(doc.splitTextToSize(mwDesc, 170), 20, y + 20);

  // Pillars Grid
  const mwPillars = [
    { title: "24/7 Extended Mentor Accessibility", desc: "Doubts resolved when you study — whether at 6:30 AM or 10:30 PM after your office shifts." },
    { title: "Candid 1-on-1 Diagnostic Audits", desc: "Pinpointing the exact cognitive traps and pacing failures causing your score plateau." },
    { title: "Complete Focus Edition Mastery", desc: "Integrated curriculum covering Quant first-principles, Verbal forensic logic, and Data Insights." },
    { title: "End-to-End MBA Admissions Support", desc: "Crafting winning essays, profile positioning, and interview mastery for top global B-schools." },
  ];

  let mpy = y + 36;
  mwPillars.forEach((mp) => {
    doc.setFillColor(30, 41, 59);
    doc.roundedRect(20, mpy, 170, 16, 1.5, 1.5, "F");

    doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(mp.title, 24, mpy + 6);

    doc.setTextColor(226, 232, 240);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(mp.desc, 24, mpy + 11.5);
    mpy += 19;
  });

  // Contact Info
  doc.setDrawColor(51, 65, 85);
  doc.line(20, mpy + 4, 190, mpy + 4);

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Break Your Score Plateau — Connect with MbaWizards Today:", 20, mpy + 11);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Website: https://mbawizards.in", 20, mpy + 18);
  doc.text("• Centers: Delhi NCR | Sector 14 Gurgaon | Sector 62 Noida | Connaught Place & Dwarka Delhi", 20, mpy + 24);
  doc.text("• Flexible Options: Executive Weekend Batches | Live Interactive Online | 1-on-1 Mentorship", 20, mpy + 30);

  // Output paths
  const outputDir = path.join(__dirname, "../public/lead-magnets");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const p1Path = path.join(outputDir, "gmat-735-success-story-working-professional-mbawizards-guide.pdf");
  const p2Path = path.join(outputDir, "gmat-735-success-story-working-professional-mbawizards.pdf");

  const pdfData = doc.output();
  fs.writeFileSync(p1Path, Buffer.from(pdfData, "binary"));
  fs.writeFileSync(p2Path, Buffer.from(pdfData, "binary"));

  console.log("Generated GMAT 735 PDFs successfully:");
  console.log(" - " + p1Path);
  console.log(" - " + p2Path);
}

createGmat735Pdf();
