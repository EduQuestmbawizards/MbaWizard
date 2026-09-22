const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

const outputDir = path.join(__dirname, '../public/lead-magnets');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Load all 50 topics
const rawTopics = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_50_topics.json'), 'utf8'));

console.log(`Generating physical static PDFs for all ${rawTopics.length} topics into public/lead-magnets/...`);

function createPdfForTopic(topic, index) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const slug = topic["Suggested Slug"].trim();
  const title = (topic["Suggested H1"] || topic["Topic"]).trim();
  const pk = (topic["Primary Keyword"] || "GMAT Coaching Gurgaon").trim();

  const primaryColor = [16, 37, 66]; // Deep Navy
  const goldColor = [212, 175, 55]; // Gold Accent
  const darkText = [33, 37, 41];
  const lightBg = [248, 249, 250];

  // Helper for page headers
  const addHeader = (headerTitle, pageNum) => {
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 18, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text("MBA WIZARDS & EDUQUEST | GMAT FOCUS GURGAON BLUEPRINT", 15, 12);

    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setFontSize(9);
    doc.text(`Page ${pageNum} of 5`, 180, 12);

    // Bottom gold bar
    doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.rect(0, 18, 210, 1.5, "F");

    // Title banner
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(headerTitle, 15, 28);

    doc.setDrawColor(220, 220, 220);
    doc.line(15, 31, 195, 31);
  };

  // Helper for page footers
  const addFooter = () => {
    doc.setDrawColor(220, 220, 220);
    doc.line(15, 280, 195, 280);

    doc.setTextColor(120, 120, 120);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(
      "Mentorship Hotline: +91 99999 12345 | Cyber City & Golf Course Road, Gurgaon | www.mbawizards.co.in",
      15,
      286
    );
  };

  // ==========================================
  // PAGE 1: COVER PAGE
  // ==========================================
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 297, "F");

  doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.rect(0, 0, 12, 297, "F");
  doc.rect(20, 25, 170, 3, "F");

  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("EXECUTIVE TEST PREPARATION & ADMISSIONS BLUEPRINT", 25, 38);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text("GMAT FOCUS EDITION 2026", 25, 52);
  doc.setFontSize(16);
  doc.text("GURGAON MASTER BLUEPRINT & FORMULA VAULT", 25, 62);

  doc.setFontSize(10.5);
  doc.setTextColor(200, 215, 235);
  doc.text("100-Day 705+ Score Roadmap, Section Mastery & Official Resource Checklist", 25, 72);

  // Personalized box
  doc.setFillColor(25, 48, 80);
  doc.roundedRect(25, 84, 160, 84, 3, 3, "F");
  doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.roundedRect(25, 84, 160, 84, 3, 3, "D");

  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFontSize(9.5);
  doc.setFont("helvetica", "bold");
  doc.text("STUDY GUIDE & BLUEPRINT PROFILE:", 32, 95);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.text("GMAT Focus Aspirant / Candidate Guide", 32, 104);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(220, 225, 235);
  doc.text(`Primary Domain: ${pk}`, 32, 113);
  doc.text(`Target Score Objective: 705+ Focus Edition (99th Percentile Track)`, 32, 121);
  doc.text(`Target Intake: 2026 / 2027 Admissions (ISB, INSEAD, M7 US, IIM Exec)`, 32, 129);
  doc.text(`Curriculum: Quant Logic • Verbal Reasoning • Data Insights (Equal 33.3%)`, 32, 137);

  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "bold");
  doc.text("ASSOCIATED MASTER GUIDE TOPIC:", 32, 147);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(240, 245, 255);
  const truncatedBlogTitle = (title || "GMAT Focus Preparation Guide in Gurgaon").slice(0, 68);
  doc.text(truncatedBlogTitle, 32, 155);

  // Pedigree badge
  doc.setFillColor(212, 175, 55);
  doc.roundedRect(25, 176, 160, 44, 3, 3, "F");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("MENTORSHIP LED BY IIT ROORKEE FACULTY", 32, 188);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Chief Academic Mentor: Mr. Surinder Gupta (IIT Roorkee Alumnus)", 32, 197);
  doc.text("Over 25+ Years of Test Prep Excellence | 500+ Alumni in M7, INSEAD & ISB", 32, 205);
  doc.text("Exclusive Centers in DLF Cyber City, Golf Course Road & MG Road Gurgaon", 32, 213);

  // Cover footer
  doc.setTextColor(180, 195, 210);
  doc.setFontSize(8.5);
  doc.text("MBA WIZARDS & EDUQUEST COLLABORATIVE LEARNING ECOSYSTEM", 25, 274);
  doc.text("Official Gurgaon Study Hubs: DLF Cyber City • Golf Course Road • Sector 14", 25, 281);

  // ==========================================
  // PAGE 2: GMAT FOCUS EDITION STRUCTURE & SCORING
  // ==========================================
  doc.addPage();
  addHeader("1. GMAT Focus Edition: Format, Timing & Score Algorithm", 2);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(
    "The GMAT Focus Edition features an equal 3-way score weighting across all three 45-minute sections:",
    15,
    38
  );

  // Section Table
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(15, 43, 180, 52, 2, 2, "F");
  doc.setDrawColor(210, 215, 225);
  doc.roundedRect(15, 43, 180, 52, 2, 2, "D");

  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(15, 43, 180, 7, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Section Name", 18, 48);
  doc.text("Questions", 75, 48);
  doc.text("Duration", 108, 48);
  doc.text("Avg / Q", 135, 48);
  doc.text("Score Scale", 162, 48);

  const sectionDetails = [
    { name: "Quantitative Reasoning", q: "21 Questions", t: "45 Mins", avg: "2m 08s", s: "60 - 90" },
    { name: "Verbal Reasoning (CR & RC)", q: "23 Questions", t: "45 Mins", avg: "1m 57s", s: "60 - 90" },
    { name: "Data Insights (DI & DS)", q: "20 Questions", t: "45 Mins", avg: "2m 15s", s: "60 - 90" },
    { name: "Total GMAT Focus Exam", q: "64 Questions", t: "135 Mins", avg: "2m 06s", s: "205 - 805" },
  ];

  let ty = 50;
  sectionDetails.forEach((sec, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 249, idx % 2 === 0 ? 255 : 252);
    doc.rect(15, ty, 180, 11, "F");
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", idx === 3 ? "bold" : "normal");
    doc.setFontSize(8);
    doc.text(sec.name, 18, ty + 7);
    doc.text(sec.q, 75, ty + 7);
    doc.text(sec.t, 108, ty + 7);
    doc.text(sec.avg, 135, ty + 7);
    doc.text(sec.s, 162, ty + 7);
    ty += 11;
  });

  // Score Matrix Box
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("2026 Focus Score & Percentile Conversion Matrix:", 15, 104);

  const scoreRows = [
    { f: "805", l: "800", p: "100th %ile", i: "Top 0.01% Worldwide | Stanford GSB & Harvard Top Fellowship" },
    { f: "755", l: "780", p: "99.9th %ile", i: "Wharton, Columbia, MIT Sloan Full Scholarships" },
    { f: "705", l: "760", p: "99th %ile", i: "M7 Elite Threshold | ISB Torchbearer & Dean's Merit Award" },
    { f: "665", l: "720", p: "93rd %ile", i: "INSEAD, LBS, Oxford Said, HEC Paris Competitive Baseline" },
    { f: "645", l: "700", p: "89th %ile", i: "Classic 700 Barrier | IIM Ahmedabad/Bangalore/Calcutta PGPX" },
    { f: "595", l: "650", p: "72nd %ile", i: "Top 30 US & European Tier-1 B-Schools Standard Pool" },
  ];

  let sy = 108;
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(15, sy, 180, 6, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("Focus Score", 18, sy + 4.5);
  doc.text("Legacy Equiv", 45, sy + 4.5);
  doc.text("Percentile", 75, sy + 4.5);
  doc.text("Admissions Competitiveness & B-School Target", 102, sy + 4.5);

  sy += 6;
  scoreRows.forEach((sr, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 255 : 246, idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 252);
    doc.rect(15, sy, 180, 8.5, "F");
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(sr.f, 18, sy + 5.5);
    doc.setFont("helvetica", "normal");
    doc.text(sr.l, 45, sy + 5.5);
    doc.setTextColor(16, 37, 66);
    doc.text(sr.p, 75, sy + 5.5);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(sr.i, 102, sy + 5.5);
    sy += 8.5;
  });

  // Algorithm Rules Callout Box
  doc.setFillColor(240, 244, 250);
  doc.roundedRect(15, 172, 180, 48, 2, 2, "F");
  doc.setDrawColor(200, 210, 225);
  doc.roundedRect(15, 172, 180, 48, 2, 2, "D");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Key Algorithm & Test Strategy Rules:", 20, 180);

  const rules = [
    "• Item-Adaptive Algorithm: The exam adapts question difficulty within each individual section.",
    "• Equal Sectional Impact: Quant, Verbal, and Data Insights each contribute exactly 33.33% to total score.",
    "• Question Review & Edit: You can bookmark any question and edit up to 3 answers per section.",
    "• Zero Penalty for Review: Strategic guessing and bookmarking ensures you never leave questions unattempted.",
    "• Section Order Freedom: Choose any of the 6 possible section sequences at test center start.",
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  let ry = 186;
  rules.forEach((r) => {
    doc.text(r, 20, ry);
    ry += 6.5;
  });

  addFooter();

  // ==========================================
  // PAGE 3: 100-DAY STUDY ROADMAP & FORMULA CHEAT SHEET
  // ==========================================
  doc.addPage();
  addHeader("2. 100-Day Executive Roadmap & Core Formula Vault", 3);

  // 100-Day Roadmap Box
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Structured 100-Day Study Calendar (12-15 Hours / Week):", 15, 37);

  const phases = [
    { p: "Phase 1: Foundation (Days 1 - 25)", d: "Diagnostic mock test, arithmetic roots, CR argument anatomy, and DI basic tables." },
    { p: "Phase 2: Section Mastery (Days 26 - 60)", d: "Number properties, algebra inequalities, RC passage speed-mapping, Data Sufficiency drills." },
    { p: "Phase 3: Timed CATs (Days 61 - 85)", d: "Official Practice Exams 1-4, error log audit, section pacing triage, trap avoidance." },
    { p: "Phase 4: Peak Readiness (Days 86 - 100)", d: "Official Exams 5-6, mock debriefs, question review discipline, test center rehearsal." },
  ];

  let py = 41;
  phases.forEach((ph) => {
    doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
    doc.roundedRect(15, py, 180, 12, 1.5, 1.5, "F");
    doc.setDrawColor(215, 220, 230);
    doc.roundedRect(15, py, 180, 12, 1.5, 1.5, "D");

    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(ph.p, 18, py + 5);

    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(ph.d, 18, py + 9.5);

    py += 14;
  });

  // Formula Cheat Sheet
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Executive Formula & Logic Cheat Sheet:", 15, 103);

  const formulas = [
    { t: "Arithmetic & Number Properties", f: "Divisibility, LCM/HCF relations, Unit Digit Cycles (2: 4, 3: 4, 7: 4, 8: 4), Even/Odd Parity." },
    { t: "Work-Rate & Harmonic Mean", f: "Combined Rate: 1/T = 1/A + 1/B | Average Speed = (2 * S1 * S2) / (S1 + S2)." },
    { t: "Overlapping Sets (3 Sets)", f: "Total = A + B + C - (sum of 2-sets) + (All Three) + (Neither)." },
    { t: "Permutations & Combinations", f: "nPr = n! / (n - r)! | nCr = n! / [r! * (n - r)!] | Circular Permutation = (n - 1)!." },
    { t: "Critical Reasoning Negation Rule", f: "Negate assumption: If argument conclusion falls apart completely, choice is 100% correct." },
    { t: "Data Insights Estimation", f: "Sort columns immediately; round decimals to 10% / 5% / 1% benchmarks before computing." },
  ];

  let fy = 107;
  formulas.forEach((fm, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 255 : 246, idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 252);
    doc.rect(15, fy, 180, 11, "F");
    doc.setDrawColor(220, 225, 235);
    doc.rect(15, fy, 180, 11, "D");

    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(`• ${fm.t}:`, 18, fy + 4.5);

    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(fm.f, 18, fy + 8.5);

    fy += 12;
  });

  addFooter();

  // ==========================================
  // PAGE 4: 4 CORE PILLARS & OFFICIAL CHECKLIST
  // ==========================================
  doc.addPage();
  addHeader("3. The 4 Pillars of 705+ Score Acceleration", 4);

  const pillars = [
    { n: "1. Cognitive Trap Deconstruction", desc: "GMAC tests reasoning traps rather than calculation difficulty. Learn to identify boundary condition traps in inequalities and causal flaws in Critical Reasoning in under 30 seconds." },
    { n: "2. The 1-on-1 Digital Error Log", desc: "Categorize every mistake into: (a) Conceptual Gap, (b) Pacing Panic, (c) Trap Susceptibility, or (d) Calculation Slip. Review weekly with IIT Roorkee faculty to permanently plug score leaks." },
    { n: "3. Precision Pacing Benchmarks", desc: "Target 2:08 per Quant problem, 1:57 per Verbal question, and 2:15 per Data Insights question. Never spend over 2.5 minutes on a single problem—guess, bookmark, and move on." },
    { n: "4. Official GMAC Resource Fidelity", desc: "Train exclusively on official questions produced by actual GMAT question writers. Third-party synthetic questions often test flawed logic and unrepresentative arithmetic." },
  ];

  let piy = 36;
  pillars.forEach((pil, idx) => {
    doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
    doc.roundedRect(15, piy, 180, 20, 2, 2, "F");
    doc.setDrawColor(215, 220, 230);
    doc.roundedRect(15, piy, 180, 20, 2, 2, "D");

    doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.circle(24, piy + 10, 4.5, "F");
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(String(idx + 1), 22.8, piy + 11.2);

    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFontSize(9);
    doc.text(pil.n, 34, piy + 7);

    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(doc.splitTextToSize(pil.desc, 155), 34, piy + 12);

    piy += 23;
  });

  // Checklist
  piy += 2;
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(15, piy, 180, 6.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Official Prep Checklist: Recommended Official GMAC Resources", 18, piy + 4.5);

  const checklist = [
    "[ ] GMAT Focus Official Guide (OG 2024-2025)",
    "[ ] Quantitative Review & Verbal Review Official Supplements",
    "[ ] Data Insights Official Practice Questions (100+ questions)",
    "[ ] Official Practice Exams 1 & 2 (Free with GMAC account)",
    "[ ] Official Practice Exams 3, 4, 5, 6 (Official Exam Pack)",
    "[ ] MBA Wizard Topic-Wise Advanced 750+ Level Problem Bank",
  ];

  piy += 6.5;
  doc.setFillColor(245, 247, 250);
  doc.rect(15, piy, 180, 32, "F");
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  let cy = piy + 5;
  checklist.forEach((item) => {
    doc.text(item, 20, cy);
    cy += 4.5;
  });

  addFooter();

  // ==========================================
  // PAGE 5: GURGAON HUBS, COACHING COMPARISON & ADMISSIONS CONTACT
  // ==========================================
  doc.addPage();
  addHeader("4. Gurgaon Coaching Options & 1-on-1 Consultation Booking", 5);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text("MBA Wizard & EduQuest Gurgaon Centres & Virtual Hybrid Flex Program:", 15, 37);

  // Comparison Box
  doc.setFillColor(248, 249, 252);
  doc.roundedRect(15, 42, 180, 84, 2, 2, "F");
  doc.setDrawColor(210, 215, 225);
  doc.roundedRect(15, 42, 180, 84, 2, 2, "D");

  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(15, 42, 180, 7, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Feature / Dimension", 18, 47);
  doc.text("MBA Wizard & EduQuest", 75, 47);
  doc.text("Generic Commercial Classes", 140, 47);

  const rows = [
    { f: "Faculty Pedigree", w: "IIT Roorkee Alum (25+ yrs)", g: "Junior hired trainers" },
    { f: "Batch Size", w: "Ultra-Small (8-12) or 1-on-1", g: "Large Crowds (40-60 students)" },
    { f: "Focus Edition Updates", w: "100% Focus DI & Adaptive", g: "Recycled legacy material" },
    { f: "Doubt Resolution", w: "Direct faculty WhatsApp/Call", g: "TA doubt tickets / delays" },
    { f: "Corporate Flexibility", w: "Weekend + Late Night Live", g: "Fixed rigid schedules" },
    { f: "Admissions Consulting", w: "Included (ISB/IIM/Ivy League)", g: "Additional Rs 1L - 2.5L" },
  ];

  let ry5 = 49;
  rows.forEach((r, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 255 : 245, idx % 2 === 0 ? 255 : 247, idx % 2 === 0 ? 255 : 250);
    doc.rect(15, ry5, 180, 12, "F");
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(r.f, 18, ry5 + 7.5);
    doc.setTextColor(16, 37, 66);
    doc.text(r.w, 75, ry5 + 7.5);
    doc.setTextColor(120, 120, 120);
    doc.setFont("helvetica", "normal");
    doc.text(r.g, 140, ry5 + 7.5);
    ry5 += 12;
  });

  // Call to Action Box
  doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.roundedRect(15, 134, 180, 54, 3, 3, "F");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  doc.text("SCHEDULE YOUR COMPLIMENTARY 1-ON-1 DIAGNOSTIC CALL", 20, 145);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Speak directly with Mr. Surinder Gupta (IIT Roorkee Alumnus) to evaluate your profile,", 20, 153);
  doc.text("calculate your target GMAT Focus score, and build a custom 100-day study timeline.", 20, 158);

  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.roundedRect(20, 164, 170, 16, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Visit: www.mbawizards.co.in | WhatsApp/Call: +91 99999 12345", 38, 174);

  // Locations box
  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.roundedRect(15, 196, 180, 44, 2, 2, "F");
  doc.setDrawColor(210, 215, 225);
  doc.roundedRect(15, 196, 180, 44, 2, 2, "D");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("MBA Wizards & EduQuest Gurgaon Centres & Corporate Support:", 20, 205);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text("• Centre 1: Cyber City Hub (Opposite DLF CyberHub / Phase 2 Metro)", 20, 212);
  doc.text("• Centre 2: Golf Course Road Executive Center (Sector 54/56)", 20, 218);
  doc.text("• Centre 3: MG Road & Sector 14 Academic Wing", 20, 224);
  doc.text("• Hybrid Live Online: Live Interactive 2-way Zoom Batches with HD Recordings", 20, 230);

  addFooter();

  // Save the PDF file
  const pdfFilename = `${slug}-guide.pdf`;
  const pdfPath = path.join(outputDir, pdfFilename);
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(pdfPath, pdfBuffer);
}

rawTopics.forEach((topic, idx) => {
  createPdfForTopic(topic, idx);
});

console.log(`Successfully generated all ${rawTopics.length} static PDF files in public/lead-magnets/!`);
