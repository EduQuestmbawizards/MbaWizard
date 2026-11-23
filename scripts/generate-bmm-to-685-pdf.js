const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

function createBmmTo685Pdf() {
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
    doc.text("MBA WIZARDS | GMAT 685 CREATIVE & NON-ENGINEER BLUEPRINT", 14, 9.5);

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
    doc.text("MBA Wizards Online & Delhi NCR | Mumbai • Delhi • Gurgaon • Noida | mbawizards.in", 14, 292);
    doc.text("Confidential — For Non-Engineers & Creative Professionals", 196, 292, { align: "right" });

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
  // PAGE 1: CREATIVE PROFESSIONAL TO GMAT 685
  // ==========================================
  addHeaderFooter(1, "1. Executive Summary: The Non-Engineer Transformation");

  // Hero Card
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, 28, 182, 34, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("From BMM & Advertising to GMAT Focus 685 (97th %ile)", 20, 37);

  doc.setTextColor(241, 245, 249);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(
    "How a self-proclaimed 'Maths noob' brand strategist conquered quantitative anxiety,\nleveraged creative storytelling strengths, and secured top global MBA admission into the tech sector.",
    20,
    44
  );

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("SCORE ACHIEVED: 685 Focus Edition | 3rd Attempt Triumph | Pivot: Advertising to Tech MBA", 20, 56);

  // Pillar 1: Why B-Schools Crave Creative Professionals
  let y = 68;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Why Top Business Schools Want Creative & Non-Engineer Talent", 14, y);

  y += 5;
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const p1 =
    "Business school adcoms actively reject homogenous cohorts. While thousands of engineers apply with high quant scores, candidates with Mass Media (BMM), advertising, design, and humanities backgrounds bring authentic consumer empathy, brand positioning intuition, and persuasive communication to the classroom. Scoring 685 (97th percentile) proves academic rigour, turning non-traditional backgrounds into immense competitive advantages.";
  const splitP1 = doc.splitTextToSize(p1, 182);
  doc.text(splitP1, 14, y);

  // Creative Superpowers Box
  y += splitP1.length * 4.2 + 6;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 100, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("The Creative Professional's Unique MBA Superpowers", 20, y + 8);

  const superpowers = [
    {
      title: "1. Brand Positioning & Narrative Architecture:",
      desc: "Creative professionals naturally excel at essay writing and interview storytelling. They know how to define their personal brand and communicate differentiated value.",
    },
    {
      title: "2. Consumer Behaviour & Market Empathy:",
      desc: "Understanding why consumers click, buy, and recommend products is the exact skillset taught in top MBA marketing and tech product management courses.",
    },
    {
      title: "3. Non-Linear Problem Solving:",
      desc: "Unlike rule-bound thinkers, creative strategists approach ambiguity comfortably. They uncover lateral solutions that conventional frameworks overlook.",
    },
    {
      title: "4. Verbal Reasoning Affinity:",
      desc: "Years of reading scripts, analysing pitches, and crafting campaign briefs translate into effortless comprehension in Critical Reasoning and Reading Comprehension.",
    },
    {
      title: "5. High-Impact Presentation Presence:",
      desc: "Pitching to corporate executives and clients builds unshakeable poise for b-school group case competitions and C-suite interviews.",
    },
  ];

  let py = y + 16;
  superpowers.forEach((sp) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(sp.title, 20, py);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const descText = doc.splitTextToSize(sp.desc, 170);
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
  doc.text("THE NON-TRADITIONAL APPLICANT'S GOLDEN RULE:", 20, y + 8);

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  const quoteText =
    '"I used to call myself a Maths noob and feared that an MBA wasn\'t for people like me. But the GMAT does not measure your degree — it measures how cleanly you reason. Once MbaWizards deconstructed math into logic puzzles, my creative instincts became an unfair advantage."';
  doc.text(doc.splitTextToSize(quoteText, 170), 20, y + 14);

  doc.setFont("helvetica", "bold");
  doc.text("— Brand Strategist & GMAT Focus 685 Achiever", 20, y + 31);

  // ==========================================
  // PAGE 2: 3-ATTEMPT RETAKE STRATEGY & AGENCY BALANCING
  // ==========================================
  doc.addPage();
  addHeaderFooter(2, "2. The 3-Attempt Retake Strategy & Agency Routine");

  y = 30;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Deconstructing the 3-Attempt Progression: Persistence Over Perfection", 14, y);

  // Attempt progression
  y += 6;
  const attempts = [
    {
      num: "ATTEMPT 1",
      title: "The Diagnostic Reality Check",
      desc: "Revealed severe math rustiness, slow calculations, and complete unfamiliarity with GMAT trap answer design. Taught the vital lesson that unstructured self-study leads nowhere.",
      color: [239, 68, 68],
    },
    {
      num: "ATTEMPT 2",
      title: "Building Foundation & Pacing Adjustments",
      desc: "Enrolled in MbaWizards; rebuilt arithmetic and algebra from first principles. Achieved solid gains, but test-day anxiety and speed pressure prevented breaking the 650 barrier.",
      color: [245, 158, 11],
    },
    {
      num: "ATTEMPT 3",
      title: "Peak Calm & 685 Triumph (97th Percentile)",
      desc: "Mastered Data Insights, executed the 4-bucket error log, and managed stress. Balanced Quant precision with high-scoring Verbal reasoning to secure 685.",
      color: [16, 185, 129],
    },
  ];

  attempts.forEach((att) => {
    doc.setFillColor(att.color[0], att.color[1], att.color[2]);
    doc.roundedRect(14, y, 24, 6.5, 1.5, 1.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text(att.num, 26, y + 4.5, { align: "center" });

    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(att.title, 42, y + 4.8);

    y += 8;
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.roundedRect(14, y, 182, 13, 1.2, 1.2, "FD");

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(doc.splitTextToSize(att.desc, 174), 18, y + 5);

    y += 17;
  });

  // Balancing Unpredictable Work (Agency Life)
  y += 2;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 60, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("How to Study with an Unpredictable Creative Agency Calendar", 20, y + 8);

  const agencyTips = [
    "• Morning Sanctuary (7:00 AM – 8:15 AM): Agency client emergencies always happen in the late afternoon. Protect 75 minutes of uninterrupted morning study before Slack messages begin.",
    "• Micro-Review Pockets (20 Mins): Use commute or lunchtime to review 5 Critical Reasoning questions or flashcards of prime factors and percentage conversions.",
    "• Dynamic Weekly Quotas Instead of Daily Guilt: If a pitch deck requires late nights on Tuesday, bank hours on Wednesday and Saturday rather than feeling defeated.",
    "• Weekend Heavy-Lifting: Reserve Saturday for full-length adaptive mocks and Sunday for deep error analysis with MbaWizards mentors.",
    "• Guard Your Sleep: Creative professionals often burn out. Deep cognitive problem-solving requires rested synapses; never study while sleep-deprived.",
  ];

  let aty = y + 14;
  agencyTips.forEach((at) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitAt = doc.splitTextToSize(at, 170);
    doc.text(splitAt, 20, aty);
    aty += splitAt.length * 4.2 + 2;
  });

  // Bottom Callout
  y = 222;
  doc.setFillColor(240, 253, 244);
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, y, 182, 34, 2, 2, "FD");

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("THE RETAKE MINDSET TRUTH:", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  doc.text("• Business schools do not penalize retakes; they evaluate your highest verified score.", 20, y + 14);
  doc.text("• Multiple attempts demonstrate grit, intellectual humility, and relentless commitment to goals.", 20, y + 20);
  doc.text("• Every attempt provides official performance data to calibrate your final breakthrough.", 20, y + 26);

  // ==========================================
  // PAGE 3: CONQUERING QUANT FOR NON-MATH STUDENTS
  // ==========================================
  doc.addPage();
  addHeaderFooter(3, "3. Conquering Quant for Non-Math Students & DI");

  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("How an Arts Student Transformed Quant Fear into Consistent Accuracy", 14, y);

  // Quant Rebuilding
  y += 6;
  doc.setFillColor(239, 246, 255);
  doc.setDrawColor(191, 219, 254);
  doc.roundedRect(14, y, 182, 54, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("THE 4-STEP MATH REBUILD FOR CREATIVE GRADUATES", 20, y + 7);

  const qSteps = [
    "Step 1: Erase Identity Labels — Stop telling yourself 'I am not a math person'. The GMAT does not test advanced calculus; it tests elementary arithmetic and basic algebra.",
    "Step 2: Translate Word Problems into Equations — Treat word problems like creative translation briefs. Turn 'x is 20% more than y' into a clean mathematical sentence.",
    "Step 3: Concrete Number Substitution — When abstract variables feel overwhelming, plug in clean, easy numbers (e.g., 100, 2, 3) to test the underlying relationship.",
    "Step 4: Scratchwork Discipline — Always write variable labels and intermediate steps clearly. Creative minds tend to skip steps in their head; writing them down stops careless traps.",
  ];

  let qsy = y + 13;
  qSteps.forEach((qs) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("•", 20, qsy);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitQs = doc.splitTextToSize(qs, 168);
    doc.text(splitQs, 24, qsy);
    qsy += splitQs.length * 4.2 + 2;
  });

  // Verbal Synergy
  y = 96;
  doc.setFillColor(240, 253, 244);
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, y, 182, 44, 2, 2, "FD");

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("TURNING CREATIVE INTUITION INTO 90+ VERBAL REASONING", 20, y + 7);

  const vSteps = [
    "Critical Reasoning Pre-Thinking: Anticipate the author's logical flaw before examining answer options.",
    "RC Structural Scanning: Read for author purpose and tone shift words ('Nonetheless', 'In contrast') instead of memorizing trivia.",
    "Ruthless Elimination: Discard answer choices that feature extreme language or out-of-scope shifts.",
  ];
  let vsy = y + 13;
  vSteps.forEach((vs) => {
    doc.text(`• ${vs}`, 20, vsy);
    vsy += 6.5;
  });

  // Data Insights
  y = 148;
  doc.setFillColor(254, 243, 199);
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(14, y, 182, 44, 2, 2, "FD");

  doc.setTextColor(180, 83, 9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("DATA INSIGHTS: MASTERING SPREADSHEETS & LOGIC", 20, y + 7);

  const diSteps = [
    "Table Sorting Mechanics: Utilize column sort filters to quickly isolate median and percentile benchmarks.",
    "Data Sufficiency Logic: Test each statement independently. Focus on whether information is sufficient, not calculating values.",
    "Multi-Source Synthesis: Read the tabs' context first before reading the questions to avoid repetitive reading loops.",
  ];
  let dsy = y + 13;
  diSteps.forEach((ds) => {
    doc.text(`• ${ds}`, 20, dsy);
    dsy += 6.5;
  });

  // The Creative Error Log
  y = 200;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 54, 2, 2, "FD");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("The Creative Error Log Framework", 20, y + 7);

  const errRules = [
    "1. Categorize Error Type: Conceptual gap vs process failure vs distractor trap vs timing panic.",
    "2. Identify the Test-Maker's Hook: Why did the incorrect choice feel seductive?",
    "3. Write the 2-Sentence Fix: Exactly what step-by-step logic should have been followed.",
    "4. Review Weekly: Re-solve flagged questions before opening new practice material.",
  ];
  let ery = y + 13;
  errRules.forEach((er) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.text(`• ${er}`, 20, ery);
    ery += 6;
  });

  // ==========================================
  // PAGE 4: BRANDING YOUR MBA APPLICATION & MENTORSHIP
  // ==========================================
  doc.addPage();
  addHeaderFooter(4, "4. Branding Your MBA Candidacy & Mentorship");

  // Application Branding
  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Branding Your MBA Application as a Creative Professional", 14, y);

  y += 5;
  const brandPillars = [
    "• Unique Positioning: Define your differentiated value proposition — e.g., 'A brand strategist who bridges consumer psychology with technology product architecture'.",
    "• Narrative Coherence: Connect past advertising agency accomplishments directly to your short-term post-MBA product marketing or tech strategy goals.",
    "• Academic Credibility: Use your 685 GMAT score to conclusively eliminate any concerns regarding your undergraduate BMM coursework.",
    "• Proof of Impact: Quantify campaign metrics (reach, revenue growth, engagement) rather than speaking only about creative concepts.",
  ];

  brandPillars.forEach((bp) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitBp = doc.splitTextToSize(bp, 180);
    doc.text(splitBp, 16, y);
    y += splitBp.length * 4.2 + 2;
  });

  // Top 8 Tips
  y += 2;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Top 8 Quick Tips for Arts & Creative Aspirants", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  const quickTips = [
    "1. Start with arithmetic basics; never jump straight to advanced 705+ questions.",
    "2. Celebrate small conceptual breakthroughs in math to rebuild academic self-efficacy.",
    "3. Keep an error journal and review it weekly before touching new mock tests.",
    "4. Protect 7-8 hours of sleep; creative and analytical brains require recovery.",
  ];
  let qty = y + 13;
  quickTips.forEach((qt) => {
    doc.text(qt, 20, qty);
    qty += 5.2;
  });

  // Mentorship Callout
  y = 114;
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, y, 182, 160, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Pivot from Creativity to Tech Leadership with MbaWizards", 20, y + 12);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const mwBrandDesc =
    "Whether you come from advertising, media, fashion, law, or design, MbaWizards delivers personalized 1-on-1 mentorship, first-principles Quant training, and end-to-end MBA admissions consulting to help non-traditional candidates crack top business schools.";
  doc.text(doc.splitTextToSize(mwBrandDesc, 170), 20, y + 20);

  // Pillars Grid
  const mwBrandGrid = [
    { title: "First-Principles Quant Foundations", desc: "Step-by-step math instruction designed specifically for non-engineering and arts students." },
    { title: "Verbal Logic Precision", desc: "Scientific argument mapping, pre-thinking in CR, and structural reading comprehension." },
    { title: "Live Online & Delhi NCR Centers", desc: "Flexible cohorts across Mumbai, Delhi, Gurgaon, and Noida tailored for busy agency schedules." },
    { title: "Admissions & Storytelling Mentorship", desc: "Crafting differentiated MBA resumes, positioning essays, and mock interview preparation." },
  ];

  let bgY = y + 36;
  mwBrandGrid.forEach((bmg) => {
    doc.setFillColor(30, 41, 59);
    doc.roundedRect(20, bgY, 170, 16, 1.5, 1.5, "F");

    doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(bmg.title, 24, bgY + 6);

    doc.setTextColor(226, 232, 240);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(bmg.desc, 24, bgY + 11.5);
    bgY += 19;
  });

  // Contact Info
  doc.setDrawColor(51, 65, 85);
  doc.line(20, bgY + 4, 190, bgY + 4);

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Schedule Your Free Diagnostic & Strategy Session Today:", 20, bgY + 11);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Website: https://mbawizards.in", 20, bgY + 18);
  doc.text("• Locations: Online India | Sector 14 Gurgaon | Delhi (CP & Dwarka) | Noida Sector 62", 20, bgY + 24);
  doc.text("• Cohorts: Weekend Non-Engineer Batches | Live Evening Online | 1-on-1 Mentorship", 20, bgY + 30);

  // Output paths
  const outputDir = path.join(__dirname, "../public/lead-magnets");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const p1Path = path.join(outputDir, "bmm-advertising-to-mba-gmat-685-story-mbawizards-guide.pdf");
  const p2Path = path.join(outputDir, "bmm-advertising-to-mba-gmat-685-story-mbawizards.pdf");

  const pdfData = doc.output();
  fs.writeFileSync(p1Path, Buffer.from(pdfData, "binary"));
  fs.writeFileSync(p2Path, Buffer.from(pdfData, "binary"));

  console.log("Generated BMM to 685 PDFs successfully:");
  console.log(" - " + p1Path);
  console.log(" - " + p2Path);
}

createBmmTo685Pdf();
