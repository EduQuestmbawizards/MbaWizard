const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

function createIpUniversity675Pdf() {
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
    doc.text("MBA WIZARDS | ISB YLP & PGP YL GMAT 675 PLAYBOOK", 14, 9.5);

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
    doc.text("MBA Wizards Dwarka & Delhi NCR | Connaught Place • Gurgaon • Noida | mbawizards.in", 14, 292);
    doc.text("Confidential — For Final-Year Students & YLP / Early Career Aspirants", 196, 292, { align: "right" });

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
  // PAGE 1: YLP/PGP YL & COLLEGE BALANCING BLUEPRINT
  // ==========================================
  addHeaderFooter(1, "1. Executive Summary: College Final-Year to GMAT 675");

  // Hero Card
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, 28, 182, 34, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("From IP University to GMAT Focus 675 (96th Percentile)", 20, 37);

  doc.setTextColor(241, 245, 249);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(
    "How a final-year undergrad balanced university semesters, college exams, and GMAT prep\nto unlock deferred MBA admissions (ISB YLP / PGP YL) with expert Verbal & Quant mentorship.",
    20,
    44
  );

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("SCORE ACHIEVED: 675 Focus Edition | 96th Percentile | Target: ISB & Top Early MBAs", 20, 56);

  // Pillar 1: Why Final Year is the Golden Window
  let y = 68;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Why Undergrad Final Year is the Ideal GMAT Testing Window", 14, y);

  y += 5;
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const p1 =
    "Final-year college students often delay GMAT preparation until after joining the corporate workforce, only to encounter grueling 60-hour workweeks that stifle study routines. Preparing in college allows you to leverage academic momentum, utilize 5-year GMAT score validity, and qualify for premier early-career deferred MBA programs like ISB's PGP YL (formerly YLP), Harvard 2+2, Stanford MSx deferred, and IIM Young Leaders programs.";
  const splitP1 = doc.splitTextToSize(p1, 182);
  doc.text(splitP1, 14, y);

  // Framework Card: Balancing College + GMAT
  y += splitP1.length * 4.2 + 6;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 102, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("The Final-Year High-Impact Dual Schedule Framework", 20, y + 8);

  const pillars = [
    {
      title: "1. Dedicated Fixed Daily Slots (Non-Negotiable):",
      desc: "Block 2 hours every morning before college lectures start. Brainpower is fresh, and unforeseen campus demands cannot derail morning prep.",
    },
    {
      title: "2. The Micro-Interval Strategy (Campus Pockets):",
      desc: "Use 20-30 minute gaps between lectures to review 5 Critical Reasoning questions or read 1 GMAT-level article (The Economist, Scientific American).",
    },
    {
      title: "3. Semester Exam Buffer Planning:",
      desc: "Frontload GMAT concept phases. During midterm or semester exam weeks, switch to maintenance mode (30 mins error review daily) rather than going dark.",
    },
    {
      title: "4. Weekend Mock Simulation Rhythm:",
      desc: "Reserve Saturday mornings (9:00 AM) for timed sectionals or full-length computer-adaptive mocks. Dedicate Sunday to line-by-line error analysis.",
    },
    {
      title: "5. Peer Study Accountability:",
      desc: "Form or join small study circles at MbaWizards. Explaining tricky concepts to fellow aspirants cements comprehension twice as fast.",
    },
  ];

  let py = y + 15;
  pillars.forEach((item) => {
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
  y = 224;
  doc.setFillColor(238, 242, 255);
  doc.setDrawColor(199, 210, 254);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("NOTE ON ISB YLP vs PGP YL:", 20, y + 8);

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  const noteText =
    '"ISB has transitioned its legacy Young Leaders Programme (YLP) into the Post Graduate Programme in Management for Young Leaders (PGP YL), specifically designed for high-potential candidates with 0 to 24 months of work experience. A 675+ GMAT Focus score anchors your candidacy at the top 4% tier across all applicant pools."';
  doc.text(doc.splitTextToSize(noteText, 170), 20, y + 14);

  doc.setFont("helvetica", "bold");
  doc.text("— MbaWizards Admissions Advisory Panel", 20, y + 31);

  // ==========================================
  // PAGE 2: PEDAGOGY BLUEPRINT (REEMA MA'AM & AKHIL SIR)
  // ==========================================
  doc.addPage();
  addHeaderFooter(2, "2. Masterclass Pedagogy: Verbal Logic & Quant Clarity");

  y = 30;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("The Core Teaching Methodologies that Turned Good Students into 96th Percentile Scorers", 14, y);

  // Reema Ma'am's Verbal Framework
  y += 7;
  doc.setFillColor(240, 253, 244);
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, y, 182, 54, 2, 2, "FD");

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Reema Ma'am's Verbal Precision Methodology", 20, y + 8);

  const verbalRules = [
    "From Intuition to Evidence: Eliminate 'sounds right' guesswork. Every correct answer has a non-debatable structural justification.",
    "Critical Reasoning Argument Dissection: Unpack the stimulus into Premise -> Unstated Assumption -> Conclusion before scanning answer choices.",
    "Pre-Thinking Discipline: Formulate your anticipated answer in 5-10 words; verify which option mirrors your logical deduction.",
    "Reading Comprehension Structural Mapping: Focus on author purpose, pivot transitions ('Nonetheless', 'In contrast'), and primary thesis rather than rote memorization.",
  ];

  let vry = y + 14;
  verbalRules.forEach((vr) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("•", 20, vry);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitVr = doc.splitTextToSize(vr, 168);
    doc.text(splitVr, 24, vry);
    vry += splitVr.length * 4.2 + 2;
  });

  // Akhil Sir's Quant Framework
  y = 96;
  doc.setFillColor(239, 246, 255);
  doc.setDrawColor(191, 219, 254);
  doc.roundedRect(14, y, 182, 54, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Akhil Sir's Quant Problem-Solving Engine", 20, y + 8);

  const quantRules = [
    "First Principles Over Formulas: Understand why algebraic manipulations work rather than memorizing robotic shortcuts.",
    "Constraint Architecture: Highlight hidden constraints in the stem ('positive even integer', 'distinct primes') before solving.",
    "Number Sense & Estimation: Utilize prime factorization trees, unit digit patterns, and smart approximations to bypass brute calculations.",
    "Step-by-Step Scratchwork Protocol: Label variables cleanly on the pad; avoid combining multiple algebraic operations mentally to eradicate careless arithmetic slips.",
  ];

  let qry = y + 14;
  quantRules.forEach((qr) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("•", 20, qry);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitQr = doc.splitTextToSize(qr, 168);
    doc.text(splitQr, 24, qry);
    qry += splitQr.length * 4.2 + 2;
  });

  // Data Insights Bridge
  y = 158;
  doc.setFillColor(254, 243, 199);
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(14, y, 182, 48, 2, 2, "FD");

  doc.setTextColor(180, 83, 9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Data Insights: The Corporate Simulation Section", 20, y + 8);

  const diRules = [
    "Bridging Classroom to Boardroom: DI questions mirror authentic business case studies, spreadsheet analytics, and multi-tab executive memos.",
    "Data Sufficiency Logic: Never calculate numerical values when testing sufficiency. Determine determinism, not calculation.",
    "Multi-Source Reasoning (MSR): Read the narrative context across all tabs first; recognize which tab holds the relevant quantitative constraint.",
    "Table Analysis Sorting: Utilize interactive ascending/descending sort filters to isolate median and percentile conditions in under 40 seconds.",
  ];

  let dry = y + 14;
  diRules.forEach((dr) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("•", 20, dry);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitDr = doc.splitTextToSize(dr, 168);
    doc.text(splitDr, 24, dry);
    dry += splitDr.length * 4.2 + 2;
  });

  // Bottom Stats Callout
  y = 214;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("GMAT FOCUS SCORING DISTRIBUTION (Scale: 205 to 805):", 20, y + 8);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  doc.text("• Quantitative Reasoning: 21 Questions | 45 Minutes (Scored 60–90)", 20, y + 16);
  doc.text("• Verbal Reasoning: 23 Questions | 45 Minutes (Scored 60–90)", 20, y + 22);
  doc.text("• Data Insights: 20 Questions | 45 Minutes (Scored 60–90)", 20, y + 28);
  doc.text("• Overall Score: Standardized aggregate (675 represents ~96th percentile globally).", 20, y + 34);

  // ==========================================
  // PAGE 3: 5-STAGE PREPARATION ROADMAP & ERROR LOGGING
  // ==========================================
  doc.addPage();
  addHeaderFooter(3, "3. The 5-Stage Roadmap & The Error Log Engine");

  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Structured 5-Stage Preparation Roadmap for College Seniors", 14, y);

  y += 7;
  const stages = [
    {
      num: "STAGE 1",
      title: "Foundation & Diagnostic Baseline (Month 1)",
      desc: "Comprehensive diagnostic test; master elementary algebra, arithmetic properties, sentence logic, and Focus interface navigation.",
    },
    {
      num: "STAGE 2",
      title: "Guided Concept Deep Dives (Month 2)",
      desc: "Attend structured live classes with Reema Ma'am and Akhil Sir. Complete sub-topic drills with 100% conceptual mastery before timed sets.",
    },
    {
      num: "STAGE 3",
      title: "Targeted Weakness Elimination & Error Tracking (Month 3)",
      desc: "Implement the MbaWizards 4-step error log. Turn each mistake into a permanent conceptual milestone.",
    },
    {
      num: "STAGE 4",
      title: "Timed Sectionals & Full Adaptive Mocks (Month 4)",
      desc: "Simulate test day every Saturday morning. Perfect the 2-minute question exit strategy and the bookmark/edit feature.",
    },
    {
      num: "STAGE 5",
      title: "Final Polish, Stamina & Peak Calm (Final 2 Weeks)",
      desc: "Review error logs, solidify high-yield formulas, taper question volume, and align sleep schedule with exam appointment.",
    },
  ];

  stages.forEach((stg) => {
    doc.setFillColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.roundedRect(14, y, 22, 6.5, 1.5, 1.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text(stg.num, 25, y + 4.5, { align: "center" });

    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(stg.title, 40, y + 4.8);

    y += 8;
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.roundedRect(14, y, 182, 12, 1.5, 1.5, "FD");

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(doc.splitTextToSize(stg.desc, 174), 18, y + 5);

    y += 16;
  });

  // The Error Log Engine
  y = 154;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("The Anatomy of a High-Yield Error Log", 14, y);

  y += 5;
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(
    "Never just record the right answer. Top scorers log every missed question across these five dimensions:",
    14,
    y
  );

  y += 5;
  const errorColumns = [
    { name: "1. Question ID & Section", desc: "Source test name, section, difficulty tier, and question number." },
    { name: "2. The Flawed Thinking", desc: "What made me choose the wrong option? (e.g., misread constraint, assumed unstated fact)." },
    { name: "3. The Test-Maker's Trap", desc: "Was it an extreme tone trap, a 180-degree reversal, or a scope shift?" },
    { name: "4. Correct Solution Path", desc: "What step-by-step logic solves this in under 100 seconds cleanly?" },
    { name: "5. Preventive Takeaway", desc: "What single rule will I recite next time I see this question pattern?" },
  ];

  errorColumns.forEach((col) => {
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.roundedRect(14, y, 182, 11, 1.2, 1.2, "FD");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(col.name, 18, y + 4.5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(col.desc, 18, y + 8.5);

    y += 13.5;
  });

  // ==========================================
  // PAGE 4: BEYOND THE SCORE - YLP ESSAYS, INTERVIEWS & ENROLMENT
  // ==========================================
  doc.addPage();
  addHeaderFooter(4, "4. Beyond the GMAT: Admissions, Essays & Mentorship");

  // YLP Profile Building Section
  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Translating a 675 GMAT into an Elite MBA Offer", 14, y);

  y += 5;
  const appPillars = [
    {
      title: "1. Academic Readiness Verification:",
      text: "A 675 Focus score completely neutralizes concerns regarding undergraduate tier or GPA variances, proving you can excel in graduate-level finance and analytics courses.",
    },
    {
      title: "2. Authentic Leadership Narrative:",
      text: "Highlight college club leadership, initiative in technical fests, community projects, or entrepreneurial experiments. Show evidence of impact over passive participation.",
    },
    {
      title: "3. Clear Career Vision & School Fit:",
      text: "Articulate why an MBA is essential to bridge your current skills with your 5-year post-MBA trajectory. Detail specific professors, research centers, and clubs you will contribute to.",
    },
    {
      title: "4. Structured Interview Preparation:",
      text: "Prepare concise behavioral answers (using the STAR framework). Be ready to discuss your undergraduate thesis, current industry trends, and business challenges.",
    },
  ];

  appPillars.forEach((ap) => {
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.roundedRect(14, y, 182, 17, 1.5, 1.5, "FD");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(ap.title, 18, y + 5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(doc.splitTextToSize(ap.text, 172), 18, y + 9.5);
    y += 19.5;
  });

  // MbaWizards Mentorship Offer
  y += 2;
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, y, 182, 142, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Launch Your MBA Journey with MbaWizards", 20, y + 12);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const mwText =
    "Join hundreds of successful alumni from IP University, Delhi University, IITs, NITs, and top institutions across India who scored 675–735 on the GMAT Focus Edition with MbaWizards.";
  doc.text(doc.splitTextToSize(mwText, 170), 20, y + 20);

  // Pillars Grid
  const mwGrid = [
    { title: "Verbal Mastery with Reema Ma'am", desc: "Scientific argument dissection, RC structural mapping, and logic-backed elimination." },
    { title: "Quant Problem Solving with Akhil Sir", desc: "First-principles clarity, algebraic shortcuts, and trap avoidance protocols." },
    { title: "Data Insights Masterclasses", desc: "Comprehensive mastery of Multi-Source Reasoning, Tables, and Data Sufficiency." },
    { title: "End-to-End Admissions Mentoring", desc: "Profile building, CV polishing, essay review, and mock interview coaching for ISB & top B-schools." },
  ];

  let mwy = y + 36;
  mwGrid.forEach((mg) => {
    doc.setFillColor(30, 41, 59);
    doc.roundedRect(20, mwy, 170, 16, 1.5, 1.5, "F");

    doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(mg.title, 24, mwy + 6);

    doc.setTextColor(226, 232, 240);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(mg.desc, 24, mwy + 11.5);
    mwy += 19;
  });

  // Contact Info
  doc.setDrawColor(51, 65, 85);
  doc.line(20, mwy + 3, 190, mwy + 3);

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Schedule Your Free Diagnostic & Demo Class Today:", 20, mwy + 9);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Website: https://mbawizards.in", 20, mwy + 16);
  doc.text("• Centres: Dwarka Centre (Near IP Univ) | Connaught Place Delhi | Gurgaon | Noida", 20, mwy + 21);
  doc.text("• Batches: Weekend College Cohorts | Live Online Evening Batches | 1-on-1 Mentoring", 20, mwy + 26);

  // Output paths
  const outputDir = path.join(__dirname, "../public/lead-magnets");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const p1Path = path.join(outputDir, "ip-university-ylp-gmat-675-focus-success-story-guide.pdf");
  const p2Path = path.join(outputDir, "ip-university-ylp-gmat-675-focus-success-story.pdf");

  const pdfData = doc.output();
  fs.writeFileSync(p1Path, Buffer.from(pdfData, "binary"));
  fs.writeFileSync(p2Path, Buffer.from(pdfData, "binary"));

  console.log("Generated IP University PDFs successfully:");
  console.log(" - " + p1Path);
  console.log(" - " + p2Path);
}

createIpUniversity675Pdf();
