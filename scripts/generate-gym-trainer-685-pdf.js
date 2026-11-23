const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

function createGymTrainer685Pdf() {
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
    doc.text("MBA WIZARDS | GMAT FOCUS 685 CAREER-SWITCHER BLUEPRINT", 14, 9.5);

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
    doc.text("Confidential — For GMAT Aspirants & Career Switchers", 196, 292, { align: "right" });

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
  // PAGE 1: BLUEPRINT OVERVIEW & DISCIPLINE
  // ==========================================
  addHeaderFooter(1, "1. Executive Summary & The Career-Switcher Mindset");

  // Hero Card
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, 28, 182, 34, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("From the Gym Floor to GMAT Focus 685 (97th Percentile)", 20, 37);

  doc.setTextColor(241, 245, 249);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(
    "How disciplined physical habits, structured online live coaching, and personalized mentoring\nhelped a fitness trainer conquer Quant, Verbal, and Data Insights to secure elite MBA admissions.",
    20,
    44
  );

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("SCORE ACHIEVED: 685 Focus Edition (Q85 | V83 | DI82) | 97th Percentile Global", 20, 56);

  // Pillar 1: Why the GMAT Does Not Test Your Job Title
  let y = 68;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("The Core Truth: The GMAT Tests Reasoning, Not Your Resume", 14, y);

  y += 5;
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const p1 =
    "Career switchers often suffer from impostor syndrome, fearing they cannot compete with engineers, investment bankers, or management consultants. But the GMAT does not ask for your job title or university pedigree. It is a standardized assessment of executive problem-solving, cognitive flexibility, and stress regulation. With structured guidance, any dedicated professional can rebuild their academic muscles and achieve top 3% results.";
  const splitP1 = doc.splitTextToSize(p1, 182);
  doc.text(splitP1, 14, y);

  // Comparison Box: Gym Training Principles vs GMAT Prep
  y += splitP1.length * 4.2 + 6;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 100, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Gym Principles Translated to GMAT Prep Discipline", 20, y + 8);

  const parallels = [
    {
      title: "1. Progressive Overload:",
      gym: "Gradually increasing weights to stimulate continuous hypertrophy.",
      gmat: "Progressing from sub-605 fundamentals to 655-705 trap questions. Rushing too fast causes cognitive breakdown; small daily increments build enduring mastery.",
    },
    {
      title: "2. Form Over Weight (Process Over Speed):",
      gym: "Lifting with bad technique causes injury and stalls real strength.",
      gmat: "Solving questions quickly using intuition creates careless traps. Focus on strict step-by-step methodologies in Quant and structured argument mapping in Verbal.",
    },
    {
      title: "3. Consistency Beats Intensity:",
      gym: "A heroic 4-hour workout once a week leads to soreness, not fitness.",
      gmat: "Two focused hours every single morning beats an exhausting 10-hour weekend binge. Steady repetition reinforces cognitive retention.",
    },
    {
      title: "4. Rest & Cognitive Recovery:",
      gym: "Muscles do not grow during the workout; they grow during sleep and recovery.",
      gmat: "The brain consolidates neural pathways during sleep. High-stakes reasoning requires 7-8 hours of quality rest and structured non-screen intervals.",
    },
    {
      title: "5. Mental Fortitude on the 'Final Rep':",
      gym: "The rep that changes your body is the one you feel like quitting on.",
      gmat: "When question 18 feels overwhelming in Data Insights, mental conditioning prevents panic and preserves accuracy across the entire section.",
    },
  ];

  let py = y + 16;
  parallels.forEach((item) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(item.title, 20, py);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const gymText = `• Fitness: ${item.gym}`;
    const gmatText = `• GMAT: ${item.gmat}`;
    doc.text(doc.splitTextToSize(gymText, 170), 24, py + 4.2);
    doc.text(doc.splitTextToSize(gmatText, 170), 24, py + 8.2);
    py += 16.5;
  });

  // Callout Quote
  y = 222;
  doc.setFillColor(238, 242, 255);
  doc.setDrawColor(199, 210, 254);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("THE GOLDEN RULE OF CAREER-SWITCH PREP:", 20, y + 8);

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.2);
  const quoteText =
    '"I stopped thinking of myself as a gym trainer trying to pass a corporate exam, and started thinking of myself as someone training their reasoning muscle. Training was something I understood. Once I applied workout discipline to question analysis, everything clicked."';
  doc.text(doc.splitTextToSize(quoteText, 170), 20, y + 15);

  doc.setFont("helvetica", "bold");
  doc.text("— 685 Focus Achiever & MbaWizards Alumnus", 20, y + 31);

  // ==========================================
  // PAGE 2: 5-PHASE PREPARATION ROADMAP
  // ==========================================
  doc.addPage();
  addHeaderFooter(2, "2. The 5-Phase Preparation Roadmap for Working Switchers");

  y = 30;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("How to Transition from Zero Academic Routine to a 97th Percentile Score", 14, y);

  y += 7;
  const phases = [
    {
      num: "PHASE 1",
      title: "Foundation & Diagnostic Baseline (Weeks 1–3)",
      color: [59, 130, 246],
      points: [
        "Take an official adaptive diagnostic to establish baseline scores across Quant, Verbal, and DI.",
        "Rebuild elementary arithmetic (fractions, ratios, percentages) and foundational algebra without calculator.",
        "Understand the Focus Edition scoring algorithm (205 to 805) and section navigation features.",
      ],
    },
    {
      num: "PHASE 2",
      title: "Systematic Concept Mastery & Skill Acquisition (Weeks 4–9)",
      color: [16, 185, 129],
      points: [
        "Quant: Master Number Properties, Word Problems, Rates/Work, and Statistics under untimed conditions.",
        "Verbal: Learn Critical Reasoning argument anatomy (Premise vs Conclusion) and RC structural scanning.",
        "Data Insights: Build familiarity with Table Analysis, Graphics Interpretation, and Multi-Source Reasoning.",
        "Attend interactive live online classes; clarify doubts instantly rather than letting confusion accumulate.",
      ],
    },
    {
      num: "PHASE 3",
      title: "Targeted Weakness Elimination & Error Logging (Weeks 10–13)",
      color: [245, 158, 11],
      points: [
        "Implement the 4-Bucket Error Log: Conceptual Gap vs Process Failure vs Trap Answer vs Pacing Rush.",
        "Solve curated 605–685 level sets. Spend 3x more time analyzing explanations than doing questions.",
        "Attend 1-on-1 mentor reviews to break entrenched bad cognitive habits and elimination traps.",
      ],
    },
    {
      num: "PHASE 4",
      title: "Timed Sectionals & Full-Length Adaptive Mocks (Weeks 14–17)",
      color: [139, 92, 246],
      points: [
        "Take full-length Official Practice Exams (1 to 6) in simulated test conditions with official breaks.",
        "Calibrate section pacing: 45 minutes for 21 Quant questions, 45 mins for 23 Verbal, 45 mins for 20 DI.",
        "Learn strategic abandonment: when to flag, make an educated guess, and move on to protect score integrity.",
      ],
    },
    {
      num: "PHASE 5",
      title: "Peak Performance Calibration & Test-Day Protocol (Weeks 18–19)",
      color: [239, 68, 68],
      points: [
        "Taper practice volume 4 days before exam. Review error log takeaways and high-frequency formulas.",
        "Synchronize circadian rhythm with exact test slot timing (sleep, breakfast, and mental warmup).",
        "Maintain absolute emotional neutrality on test day: treat every question as an isolated 2-minute project.",
      ],
    },
  ];

  phases.forEach((phase) => {
    doc.setFillColor(phase.color[0], phase.color[1], phase.color[2]);
    doc.roundedRect(14, y, 22, 7, 1.5, 1.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(phase.num, 25, y + 4.8, { align: "center" });

    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text(phase.title, 40, y + 5);

    y += 9;
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.roundedRect(14, y, 182, phase.points.length * 6.2 + 4, 1.5, 1.5, "FD");

    let pty = y + 5;
    phase.points.forEach((pt) => {
      doc.setTextColor(primary[0], primary[1], primary[2]);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.text("•", 18, pty);

      doc.setTextColor(textDark[0], textDark[1], textDark[2]);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.8);
      const splitPt = doc.splitTextToSize(pt, 168);
      doc.text(splitPt, 22, pty);
      pty += splitPt.length * 4.2 + 2;
    });

    y = pty + 4;
  });

  // ==========================================
  // PAGE 3: SECTION STRATEGIES & ERROR LOGGING
  // ==========================================
  doc.addPage();
  addHeaderFooter(3, "3. Section-by-Section Playbook for Non-Engineers");

  // Section 1: Quant
  y = 28;
  doc.setFillColor(239, 246, 255);
  doc.setDrawColor(191, 219, 254);
  doc.roundedRect(14, y, 182, 42, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("QUANTITATIVE REASONING (21 Questions | 45 Minutes)", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const quantTips = [
    "No Geometry on Focus: Focus exclusively on Arithmetic, Algebra, Word Problems, and Number Properties.",
    "Avoid Calculator Dependency: Cultivate mental math agility for prime factorization, percentages, and approximations.",
    "Algebraic Hygiene: Write down clean variable definitions. Never do multi-step algebraic operations in your head.",
    "Trap Detection: The GMAT rarely tests complex calculation; it tests clever constraints (e.g., 'x is an integer').",
  ];
  let qty = y + 13;
  quantTips.forEach((t) => {
    doc.text(`• ${t}`, 20, qty);
    qty += 6.5;
  });

  // Section 2: Verbal
  y = 74;
  doc.setFillColor(240, 253, 244);
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, y, 182, 42, 2, 2, "FD");

  doc.setTextColor(16, 185, 129);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("VERBAL REASONING (23 Questions | 45 Minutes)", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const verbalTips = [
    "No Sentence Correction: Focus completely on Critical Reasoning (CR) and Reading Comprehension (RC).",
    "Argument Blueprinting (CR): Identify conclusion and premise immediately. Formulate pre-thinking before reading options.",
    "Structural Mapping (RC): Don't memorize trivia; map the author's tone, transition words ('However', 'Moreover'), and purpose.",
    "Elimination Discipline: Cross out out-of-scope, extreme language, and opposite answers before choosing.",
  ];
  let vty = y + 13;
  verbalTips.forEach((t) => {
    doc.text(`• ${t}`, 20, vty);
    vty += 6.5;
  });

  // Section 3: Data Insights
  y = 120;
  doc.setFillColor(254, 243, 199);
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(14, y, 182, 42, 2, 2, "FD");

  doc.setTextColor(180, 83, 9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("DATA INSIGHTS (20 Questions | 45 Minutes)", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const diTips = [
    "Data Sufficiency (Pure Logic): Evaluate statements independently before combining. Never compute the final value.",
    "Multi-Source Reasoning (MSR): Read tab headers first; synthesize information across tabs rather than re-reading.",
    "Table & Graphics Interpretation: Leverage column sorting and examine axis units, scales, and trends carefully.",
    "Two-Part Analysis: Treat as coupled equations or logic games; solve the more constrained variable first.",
  ];
  let dty = y + 13;
  diTips.forEach((t) => {
    doc.text(`• ${t}`, 20, dty);
    dty += 6.5;
  });

  // The 4-Bucket Error Taxonomy
  y = 166;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("The 4-Bucket Error Taxonomy (Why Top Scorers Keep an Error Log)", 14, y);

  y += 5;
  const errorBuckets = [
    {
      type: "Bucket 1: Conceptual Deficit",
      why: "Didn't know the mathematical formula, constraint rule, or grammatical structure.",
      fix: "Return to basic curriculum; do 15 drill questions until the concept is second nature.",
    },
    {
      type: "Bucket 2: Process Breakdown",
      why: "Knew the concept, but took shortcuts, rushed algebra, or didn't write clean notes.",
      fix: "Enforce strict scratchwork etiquette. Never solve complex reasoning in your head.",
    },
    {
      type: "Bucket 3: Trap Susceptibility",
      why: "Fell for the test-maker's distractor (e.g., solved for x instead of 2x, or selected extreme RC tone).",
      fix: "Document the trap pattern in your logbook. Pre-think answers before checking choices.",
    },
    {
      type: "Bucket 4: Time Pressure Panic",
      why: "Spent 4+ minutes stubborn on an early question, forcing panicked guesses later.",
      fix: "Execute the 2-minute decision rule: if no clean path by 90s, make educated guess and move.",
    },
  ];

  let by = y;
  errorBuckets.forEach((b) => {
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.roundedRect(14, by, 182, 19, 1.5, 1.5, "FD");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(b.type, 18, by + 5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(`• Cause: ${b.why}`, 18, by + 10);
    doc.text(`• Remedy: ${b.fix}`, 18, by + 15);
    by += 22;
  });

  // ==========================================
  // PAGE 4: TOP TIPS, TEST DAY & MENTORSHIP
  // ==========================================
  doc.addPage();
  addHeaderFooter(4, "4. Practical Tips, Test Day Routine & Mentorship");

  // 8 Practical Rules
  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Top 8 Practical Rules for Non-Traditional Aspirants", 14, y);

  y += 5;
  const rules = [
    "1. Treat Your Non-Traditional Background as an Asset: Business schools crave diverse, unique viewpoints.",
    "2. Quality Over Quantity: 30 deeply analyzed questions generate more score gains than 150 skimmed problems.",
    "3. Master the Section Adaptivity: Early and mid-section accuracy anchors your scoring range significantly.",
    "4. Exploit the Focus Edit Feature: You can bookmark questions and modify up to 3 answers per section.",
    "5. Guard Your Energy Reservoirs: Intense study while physically or mentally drained cements erroneous habits.",
    "6. Build a Daily Non-Negotiable Routine: Even on 12-hour workdays, complete a 45-minute verbal or quant sprint.",
    "7. Never Study in Isolation: Engage with mentor feedback and peers to challenge cognitive blind spots.",
    "8. Maintain Emotional Equanimity: One disappointing mock exam is feedback data, not a character judgment.",
  ];

  rules.forEach((r) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.text(r, 16, y);
    y += 5.5;
  });

  // Test-Day Protocol
  y += 2;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 40, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Test-Day Peak Performance Protocol", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.8);
  const testDay = [
    "• Night Before: Cease all studying by 5 PM. Eat a low-inflammatory dinner and sleep 8 full hours.",
    "• Morning Nutrition: Complex carbs, clean protein, and moderate hydration (avoid caffeine spikes).",
    "• Arrival: Arrive 45 minutes prior at the Pearson VUE center to eliminate commute cortisol spikes.",
    "• Mid-Test Break: Use the 10-minute break to hydrate, stretch shoulders/hips, and perform box breathing.",
    "• Micro-Reset: If a question rattles you, take 3 deep diaphragmatic breaths before clicking 'Next'.",
  ];
  let tdy = y + 13;
  testDay.forEach((td) => {
    doc.text(td, 20, tdy);
    tdy += 5.2;
  });

  // Mentorship Callout Card
  y = 126;
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, y, 182, 148, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Ready to Transform Your Career with MbaWizards?", 20, y + 12);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const ctaDesc =
    "Whether you are a fitness coach, doctor, marketer, defense officer, or engineer, MbaWizards delivers the personalized mentoring, interactive live pedagogy, and rigorous analytics required to achieve 685+ on the GMAT Focus Edition.";
  doc.text(doc.splitTextToSize(ctaDesc, 170), 20, y + 20);

  // Pillars Grid
  const ctaPillars = [
    { title: "Live Online Classes", desc: "Interactive, dynamic, evening/weekend batches designed for working professionals." },
    { title: "IIT/IIM Senior Mentors", desc: "Individualized 1-on-1 feedback, error analysis, and customized pacing strategies." },
    { title: "Focus Edition Curriculum", desc: "Comprehensive coverage of Quant, Verbal, and Data Insights with 5000+ questions." },
    { title: "Proven Track Record", desc: "98% of students achieve 60-120 point score improvements within 12 weeks." },
  ];

  let cty = y + 36;
  ctaPillars.forEach((cp) => {
    doc.setFillColor(30, 41, 59);
    doc.roundedRect(20, cty, 170, 16, 1.5, 1.5, "F");

    doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(cp.title, 24, cty + 6);

    doc.setTextColor(226, 232, 240);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(cp.desc, 24, cty + 11.5);
    cty += 19;
  });

  // Contact Info
  doc.setDrawColor(51, 65, 85);
  doc.line(20, cty + 4, 190, cty + 4);

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Connect with MbaWizards Today for a Free Diagnostic & Demo:", 20, cty + 11);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Website: https://mbawizards.in", 20, cty + 18);
  doc.text("• Centers: Delhi NCR | Sector 14 Gurgaon | Sector 62 Noida | Connaught Place Delhi", 20, cty + 24);
  doc.text("• Programs: GMAT Focus Live Online Batch | 1-on-1 Executive Mentorship | MBA Admissions Consulting", 20, cty + 30);

  // Output paths
  const outputDir = path.join(__dirname, "../public/lead-magnets");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const p1Path = path.join(outputDir, "gym-trainer-to-gmat-685-focus-success-story-guide.pdf");
  const p2Path = path.join(outputDir, "gym-trainer-to-gmat-685-focus-success-story.pdf");

  const pdfData = doc.output();
  fs.writeFileSync(p1Path, Buffer.from(pdfData, "binary"));
  fs.writeFileSync(p2Path, Buffer.from(pdfData, "binary"));

  console.log("Generated PDFs successfully:");
  console.log(" - " + p1Path);
  console.log(" - " + p2Path);
}

createGymTrainer685Pdf();
