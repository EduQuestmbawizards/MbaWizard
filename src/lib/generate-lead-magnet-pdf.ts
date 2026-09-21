import { jsPDF } from "jspdf";

export interface LeadMagnetUserData {
  fullName: string;
  email: string;
  phone: string;
  interestedIn?: string;
  blogTitle?: string;
  blogSlug?: string;
  profileType?: string;
  targetScore?: string;
  targetIntake?: string;
}

export function generateLeadMagnetPDF(user: LeadMagnetUserData): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const primaryColor = [16, 37, 66]; // Deep Navy
  const goldColor = [212, 175, 55]; // Gold Accent
  const darkText = [33, 37, 41];
  const lightBg = [248, 249, 250];

  // Helper for page headers
  const addHeader = (title: string, pageNum: number) => {
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
    doc.setFontSize(13.5);
    doc.text(title, 15, 28);

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
  // Background gradient-like blocks
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 297, "F");

  // Gold accent geometry
  doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.rect(0, 0, 12, 297, "F");
  doc.rect(20, 25, 170, 3, "F");

  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("EXECUTIVE TEST PREPARATION & ADMISSIONS BLUEPRINT", 25, 38);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(23);
  doc.text("GMAT FOCUS EDITION", 25, 52);
  doc.text("GURGAON MASTER BLUEPRINT", 25, 63);

  doc.setFontSize(11);
  doc.setTextColor(200, 215, 235);
  doc.text("100-Day 705+ Score Roadmap, Section Mastery & Formula Cheat Sheet", 25, 73);

  // Personalized box
  doc.setFillColor(25, 48, 80);
  doc.roundedRect(25, 88, 160, 82, 3, 3, "F");
  doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.roundedRect(25, 88, 160, 82, 3, 3, "D");

  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFontSize(9.5);
  doc.setFont("helvetica", "bold");
  doc.text("CANDIDATE & STUDY GUIDE PROFILE:", 32, 99);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.text(user.fullName || "Candidate", 32, 108);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(220, 225, 235);
  doc.text(`Candidate Contact: ${user.phone} | ${user.email}`, 32, 117);
  doc.text(`Interested In / Program: ${user.interestedIn || "GMAT Focus 705+ Comprehensive Batch"}`, 32, 125);
  doc.text(`Target Score Objective: ${user.targetScore || "705+ (99th %ile)"}`, 32, 133);
  doc.text(`Profile Category: ${user.profileType || "Working Professional"} | Intake: ${user.targetIntake || "2026/2027"}`, 32, 141);

  // Blog title line inside candidate box
  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "bold");
  doc.text("ASSOCIATED BLOG GUIDE:", 32, 151);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(240, 245, 255);
  const truncatedBlogTitle = (user.blogTitle || "GMAT Focus Preparation Guide in Gurgaon").slice(0, 70);
  doc.text(truncatedBlogTitle, 32, 158);

  // Pedigree badge
  doc.setFillColor(212, 175, 55);
  doc.roundedRect(25, 180, 160, 45, 3, 3, "F");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  doc.text("MENTORSHIP LED BY IIT ROORKEE FACULTY", 32, 193);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text("Chief Academic Mentor: Mr. Surinder Gupta (IIT Roorkee)", 32, 203);
  doc.text("Over 25+ Years of Test Prep Excellence | 500+ Alumni in M7, INSEAD & ISB", 32, 211);
  doc.text("Exclusive Centers in DLF Cyber City, Golf Course Road & MG Road", 32, 219);

  // Cover footer
  doc.setTextColor(180, 195, 210);
  doc.setFontSize(8.5);
  doc.text("MBA WIZARDS & EDUQUEST COLLABORATIVE LEARNING ECOSYSTEM", 25, 274);
  doc.text("Official Gurgaon Study Hubs: DLF Cyber City • Golf Course Road • Sector 29", 25, 281);

  // ==========================================
  // PAGE 2: GMAT FOCUS EDITION STRUCTURE & SCORING
  // ==========================================
  doc.addPage();
  addHeader("1. GMAT Focus Edition: Format, Timing & Score Algorithm", 2);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text(
    "The GMAT Focus Edition consists of 3 equally weighted sections with a total duration of 2 hours and 15 minutes.",
    15,
    38
  );
  doc.text(
    "Each section score ranges from 60 to 90 (in 1-point increments), combining into a total score of 205 to 805.",
    15,
    44
  );

  // Section Table
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(15, 50, 180, 8, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("Section Name", 18, 55);
  doc.text("Questions", 75, 55);
  doc.text("Time Limit", 110, 55);
  doc.text("Score Scale", 145, 55);

  const sections = [
    { name: "Quantitative Reasoning", q: "21 Questions", t: "45 Minutes", s: "60 - 90" },
    { name: "Verbal Reasoning", q: "23 Questions", t: "45 Minutes", s: "60 - 90" },
    { name: "Data Insights (DI)", q: "20 Questions", t: "45 Minutes", s: "60 - 90" },
  ];

  let y = 58;
  sections.forEach((sec, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 245 : 255, idx % 2 === 0 ? 247 : 255, idx % 2 === 0 ? 250 : 255);
    doc.rect(15, y, 180, 8, "F");
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", "normal");
    doc.text(sec.name, 18, y + 5.5);
    doc.text(sec.q, 75, y + 5.5);
    doc.text(sec.t, 110, y + 5.5);
    doc.text(sec.s, 145, y + 5.5);
    y += 8;
  });

  // Percentile Conversion Matrix
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("GMAT Focus Edition vs Legacy Score & Percentile Benchmark", 15, y + 10);

  y += 14;
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(15, y, 180, 7, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text("Focus Score (205-805)", 18, y + 5);
  doc.text("Percentile", 75, y + 5);
  doc.text("Old GMAT (200-800)", 115, y + 5);
  doc.text("Target Business Schools", 150, y + 5);

  const percentiles = [
    { focus: "735 - 805", pct: "99th - 100th %ile", old: "770 - 800", schools: "Stanford, Harvard, Wharton, Kellogg" },
    { focus: "685 - 715", pct: "96th - 99th %ile", old: "740 - 760", schools: "ISB (PGP), INSEAD, LBS, Columbia" },
    { focus: "645 - 675", pct: "89th - 95th %ile", old: "700 - 730", schools: "IIM A/B/C (1-Yr), NUS, Cornell" },
    { focus: "595 - 635", pct: "72nd - 86th %ile", old: "650 - 690", schools: "ISB YLP/EEO, Rotman, Warwick" },
  ];

  y += 7;
  percentiles.forEach((p, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 245 : 255, idx % 2 === 0 ? 247 : 255, idx % 2 === 0 ? 250 : 255);
    doc.rect(15, y, 180, 8, "F");
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", idx === 0 || idx === 1 ? "bold" : "normal");
    doc.text(p.focus, 18, y + 5.5);
    doc.text(p.pct, 75, y + 5.5);
    doc.text(p.old, 115, y + 5.5);
    doc.text(p.schools, 150, y + 5.5);
    y += 8;
  });

  // Key Feature Note
  y += 10;
  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.roundedRect(15, y, 180, 48, 2, 2, "F");
  doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.roundedRect(15, y, 180, 48, 2, 2, "D");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("3 Critical Game Changers on the Focus Edition:", 20, y + 8);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text("1. Question Review & Edit: You can bookmark and edit up to 3 answers per section at the end of 45 mins.", 20, y + 16);
  doc.text("2. Section Order Selection: Choose your preferred sequence (e.g., Quant -> DI -> Verbal) to maximize energy.", 20, y + 24);
  doc.text("3. Zero Sentence Correction & No Essay (AWA): GMAT Focus tests pure reasoning, not arcane grammar rules.", 20, y + 32);
  doc.text("4. Data Insights Equal Weighting: Multi-Source Reasoning & Table Analysis now directly dictate 1/3rd of your score.", 20, y + 40);

  addFooter();

  // ==========================================
  // PAGE 3: 100-DAY STUDY TIMETABLE
  // ==========================================
  doc.addPage();
  addHeader("2. 100-Day GMAT Focus Roadmap (Gurgaon Professionals & Students)", 3);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text(
    "Designed by Surinder Gupta (IIT Roorkee) for busy professionals in Cyber City/Golf Course Rd and college aspirants.",
    15,
    38
  );

  const phases = [
    {
      title: "PHASE 1: Core Foundation & Diagnostic Sprint (Days 1 - 30)",
      hours: "12-15 Hours/Week",
      points: [
        "Take 1 Official GMAT Focus Diagnostic Test (GMAC Mock 1) under real test conditions.",
        "Master Arithmetic & Algebra foundation: Number Properties, Linear Equations, Ratios & Percentages.",
        "Verbal: Master Critical Reasoning argumentation architecture (Premise, Conclusion, Assumptions).",
        "Data Insights: Build spreadsheet speed & Two-Part Analysis conceptual framework.",
        "EduQuest / MBA Wizard Weekly Action: 2 Live concept masterclasses + diagnostic error tracking.",
      ],
    },
    {
      title: "PHASE 2: Advanced Sectional Drills & Pacing Tactics (Days 31 - 70)",
      hours: "15-18 Hours/Week",
      points: [
        "Quant: Deep dive into 700+ level Overlapping Sets, Statistics, Rates, and Work problems.",
        "Verbal: RC speed reading frameworks, inference synthesis, boldface Critical Reasoning questions.",
        "Data Insights: Multi-Source Reasoning tabs, Data Sufficiency trap identification, Graphic Interpretation.",
        "Adaptive Pacing drills: Strict 2 mins/question time cap with deliberate guessing protocol.",
        "EduQuest / MBA Wizard Weekly Action: 1-on-1 personalized doubt solving with Surinder Sir.",
      ],
    },
    {
      title: "PHASE 3: Full-Length Official Mocks & Polish Phase (Days 71 - 100)",
      hours: "18-20 Hours/Week",
      points: [
        "Take Official Mocks 2 through 6 at the exact exam time slot you intend to book.",
        "Log every incorrect and >2.5 min question in your MBA Wizard Dynamic Error Log.",
        "Master the 3-Question Edit Strategy in the last 3-4 minutes of each section.",
        "Simulate exam fatigue by practicing test-day nutrition and mindfulness routines.",
        "Final admissions alignment: Profile audit and business school shortlisting review.",
      ],
    },
  ];

  let py = 45;
  phases.forEach((ph) => {
    doc.setFillColor(240, 244, 250);
    doc.roundedRect(15, py, 180, 68, 2, 2, "F");
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.roundedRect(15, py, 180, 68, 2, 2, "D");

    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(15, py, 180, 7, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(ph.title, 18, py + 5);
    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.text(`Commitment: ${ph.hours}`, 145, py + 5);

    let liny = py + 13;
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    ph.points.forEach((pt) => {
      doc.text(`• ${pt}`, 20, liny);
      liny += 10.5;
    });

    py += 74;
  });

  addFooter();

  // ==========================================
  // PAGE 4: SECTION STRATEGY & THE 5-PILLAR METHOD
  // ==========================================
  doc.addPage();
  addHeader("3. Section-Wise Master Strategy & The 5-Pillar Pedagogy", 4);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text("How MBA Wizard & EduQuest turn Gurgaon test takers into 99th-percentile scorers:", 15, 38);

  const pillars = [
    {
      num: "01",
      title: "IITian Problem-Deconstruction (Quant 85+)",
      desc: "Avoid algebra-heavy brute force. Learn backsolving, number properties substitution, and range estimation taught by IIT Roorkee alumni.",
    },
    {
      num: "02",
      title: "Logic Pattern Blueprinting (Verbal 85+)",
      desc: "Treat Critical Reasoning like mathematical logic. Classify questions into Assumption, Weaken, Strengthen, and Boldface structures instantly.",
    },
    {
      num: "03",
      title: "Data Insights Speed Matrix (DI 85+)",
      desc: "Learn two-screen multi-source extraction shortcuts, fast table sorting, and Data Sufficiency zero-calculation decision trees.",
    },
    {
      num: "04",
      title: "Adaptive Algorithmic Pacing",
      desc: "Never spend more than 2.5 minutes on a single question. Execute strategic flagging to protect your scoring curve on early-to-mid questions.",
    },
    {
      num: "05",
      title: "End-to-End B-School Admissions Synergy",
      desc: "GMAT score + Resume Building + ISB/IIM Essays + Mock Interviews handled holistically under one dedicated mentor.",
    },
  ];

  let piy = 46;
  pillars.forEach((pil) => {
    doc.setFillColor(250, 250, 252);
    doc.rect(15, piy, 180, 20, "F");
    doc.setDrawColor(220, 225, 235);
    doc.rect(15, piy, 180, 20, "D");

    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.circle(24, piy + 10, 6, "F");
    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(pil.num, 21.5, piy + 12);

    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFontSize(9.5);
    doc.text(pil.title, 34, piy + 7);

    doc.setTextColor(80, 80, 80);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    doc.text(doc.splitTextToSize(pil.desc, 155), 34, piy + 13);

    piy += 24;
  });

  // Checklist
  piy += 5;
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(15, piy, 180, 7, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("Official Prep Checklist: Recommended Official GMAC Resources", 18, piy + 5);

  const checklist = [
    "[ ] GMAT Focus Official Guide (OG 2024-2025)",
    "[ ] Quantitative Review & Verbal Review Official Supplements",
    "[ ] Data Insights Official Practice Questions (100+ questions)",
    "[ ] Official Practice Exams 1 & 2 (Free with GMAC account)",
    "[ ] Official Practice Exams 3, 4, 5, 6 (Official Exam Pack)",
    "[ ] MBA Wizard Topic-Wise Advanced 750+ Level Problem Bank",
  ];

  piy += 7;
  doc.setFillColor(245, 247, 250);
  doc.rect(15, piy, 180, 36, "F");
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  let cy = piy + 5;
  checklist.forEach((item) => {
    doc.text(item, 20, cy);
    cy += 5;
  });

  addFooter();

  // ==========================================
  // PAGE 5: GURGAON HUBS, COACHING COMPARISON & ADMISSIONS CONTACT
  // ==========================================
  doc.addPage();
  addHeader("4. Gurgaon Coaching Options & 1-on-1 Consultation Booking", 5);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text("MBA Wizard & EduQuest Gurgaon Centres & Virtual Hybrid Flex Program:", 15, 38);

  // Comparison Box
  doc.setFillColor(248, 249, 252);
  doc.roundedRect(15, 45, 180, 92, 2, 2, "F");
  doc.setDrawColor(210, 215, 225);
  doc.roundedRect(15, 45, 180, 92, 2, 2, "D");

  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(15, 45, 180, 8, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("Feature / Dimension", 18, 50.5);
  doc.text("MBA Wizard & EduQuest", 75, 50.5);
  doc.text("Generic Commercial Classes", 140, 50.5);

  const rows = [
    { f: "Faculty Pedigree", w: "IIT Roorkee Alum (25+ yrs)", g: "Junior hired trainers" },
    { f: "Batch Size", w: "Ultra-Small (8-12) or 1-on-1", g: "Large Crowds (40-60 students)" },
    { f: "Focus Edition Updates", w: "100% Focus DI & Adaptive", g: "Recycled legacy material" },
    { f: "Doubt Resolution", w: "Direct faculty WhatsApp/Call", g: "TA doubt tickets / delays" },
    { f: "Corporate Flexibility", w: "Weekend + Late Night Live", g: "Fixed rigid schedules" },
    { f: "Admissions Consulting", w: "Included (ISB/IIM/Ivy League)", g: "Additional Rs 1L - 2.5L" },
  ];

  let ry = 53;
  rows.forEach((r, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 255 : 245, idx % 2 === 0 ? 255 : 247, idx % 2 === 0 ? 255 : 250);
    doc.rect(15, ry, 180, 14, "F");
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(r.f, 18, ry + 8.5);
    doc.setTextColor(16, 37, 66);
    doc.text(r.w, 75, ry + 8.5);
    doc.setTextColor(120, 120, 120);
    doc.setFont("helvetica", "normal");
    doc.text(r.g, 140, ry + 8.5);
    ry += 14;
  });

  // Call to Action Box
  doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.roundedRect(15, 148, 180, 60, 3, 3, "F");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("SCHEDULE YOUR COMPLIMENTARY 1-ON-1 DIAGNOSTIC CALL", 20, 160);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Speak directly with Mr. Surinder Gupta (IIT Roorkee Alumnus) to evaluate your current", 20, 169);
  doc.text("profile, calculate your target GMAT Focus score, and build a custom study timeline.", 20, 175);

  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.roundedRect(20, 182, 170, 18, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Visit: www.mbawizards.co.in | WhatsApp/Call: +91 99999 12345", 35, 193.5);

  // Locations box
  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.roundedRect(15, 218, 180, 48, 2, 2, "F");
  doc.setDrawColor(210, 215, 225);
  doc.roundedRect(15, 218, 180, 48, 2, 2, "D");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("MBA Wizards & EduQuest Gurgaon Centres & Corporate Support:", 20, 228);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text("• Centre 1: Cyber City Hub (Opposite DLF CyberHub / Phase 2 Metro)", 20, 236);
  doc.text("• Centre 2: Golf Course Road Executive Center (Sector 54/56)", 20, 243);
  doc.text("• Centre 3: MG Road & Sector 14 Academic Wing", 20, 250);
  doc.text("• Hybrid Live Online: Live Interactive 2-way Zoom Batches with Class Recordings", 20, 257);

  addFooter();

  // Save the PDF locally on the client's browser with the blog name
  const safeBlogName = (user.blogTitle || user.blogSlug || "GMAT_Focus_Mastery_Guide")
    .replace(/[:|/\\]/g, " - ")
    .replace(/[^a-zA-Z0-9_\- ]/g, "")
    .trim()
    .replace(/\s+/g, "_")
    .slice(0, 50);

  const safeCandidateName = (user.fullName || "Candidate").trim().replace(/[^a-zA-Z0-9]/g, "_");
  const filename = `${safeBlogName}_Guide_${safeCandidateName}.pdf`;
  doc.save(filename);
}
