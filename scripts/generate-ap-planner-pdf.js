const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

function createApPlannerPdf() {
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
  const TOTAL_PAGES = 5;

  function addHeaderFooter(pageNum, title) {
    // Top Bar
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.rect(0, 0, 210, 14, "F");

    doc.setFillColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.rect(0, 14, 210, 1.2, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text("EDUQUEST & MBA WIZARDS | 2027 AP EXAM PLANNER BLUEPRINT", 14, 9.5);

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
    doc.text("EduQuest Global Admissions & Test Prep Mentorship | eduquest.org.in | mbawizards.co.in", 14, 292);
    doc.text("Confidential — For Registered Aspirant Use Only", 196, 292, { align: "right" });

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
  // PAGE 1: TITLE & CORE GRADE-WISE ROADMAP
  // ==========================================
  addHeaderFooter(1, "Grade-by-Grade AP Subjects Plan (Grades 9 to 12)");

  // Hero Card
  doc.setFillColor(240, 249, 255);
  doc.roundedRect(14, 28, 182, 30, 3, 3, "F");
  doc.setDrawColor(186, 230, 253);
  doc.roundedRect(14, 28, 182, 30, 3, 3, "D");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Strategic Academic Storytelling for US, UK, Canada & Global Admissions", 18, 35);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const heroIntro = "An AP exam planner is a year-by-year map that tells a student which Advanced Placement (AP) subjects to take in Grade 9, 10, 11 and 12, and when to sit each exam. AP subjects chosen at random create an unfocused transcript; AP subjects chosen with a plan build an authentic academic narrative that selective admissions officers recognise immediately.";
  doc.text(doc.splitTextToSize(heroIntro, 174), 18, 41);

  // Table: Grade-by-Grade Planner
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("1. Core 4-Year AP Subjects Master Table", 14, 65);

  const tableStartY = 70;
  // Header
  doc.setFillColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.rect(14, tableStartY, 182, 8, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("Grade", 18, tableStartY + 5.5);
  doc.text("Recommended AP Subjects", 42, tableStartY + 5.5);
  doc.text("Strategic Purpose & Objective", 125, tableStartY + 5.5);

  const rows = [
    {
      grade: "Grade 9",
      subjects: "AP Biology, AP Psychology, or\nAP Human Geography (1-2 subjects)",
      purpose: "Learn AP style reading, data analysis and timed free-response questions with manageable starting coursework."
    },
    {
      grade: "Grade 10",
      subjects: "AP Chemistry, AP English Language,\nAP Seminar (Capstone Year 1)",
      purpose: "Build rigorous lab science foundations, argument synthesis, and independent research habits."
    },
    {
      grade: "Grade 11",
      subjects: "AP Calculus AB/BC, AP Physics 1/2,\nAP Research, AP Statistics (optional)",
      purpose: "Demonstrate maximum quantitative rigor and complete an original 4,000-5,000 word defended research paper."
    },
    {
      grade: "Grade 12",
      subjects: "Remaining APs (Micro/Macro Econ,\nPhysics C, Calc BC) + SAT/UCAT essays",
      purpose: "Close specific subject gaps, finalize test scores, and focus 100% on high-stakes university application essays."
    }
  ];

  let currentY = tableStartY + 8;
  rows.forEach((r, idx) => {
    const isAlt = idx % 2 === 1;
    doc.setFillColor(isAlt ? 248 : 255, isAlt ? 250 : 255, isAlt ? 252 : 255);
    doc.rect(14, currentY, 182, 16, "F");

    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, currentY, 182, 16, "D");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(r.grade, 18, currentY + 6);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(r.subjects, 42, currentY + 5.5);
    doc.text(doc.splitTextToSize(r.purpose, 66), 125, currentY + 5.5);

    currentY += 16;
  });

  // Important Rules Box
  currentY += 8;
  doc.setFillColor(254, 242, 242);
  doc.roundedRect(14, currentY, 182, 42, 3, 3, "F");
  doc.setDrawColor(254, 202, 202);
  doc.roundedRect(14, currentY, 182, 42, 3, 3, "D");

  doc.setTextColor(185, 28, 28);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Essential Rules Every Indian Family Must Know:", 18, currentY + 7);

  const rulesList = [
    "Score Scale: APs are scored from 1 to 5. Selective universities look for scores of 4 or 5 in subjects tied to your major.",
    "Exam Timing: Official AP Exams take place globally during May 3 to 14, 2027. Late testing window: May 17 to 21, 2027.",
    "Registration Deadlines: Standard ordering closes by mid-November 2026. Late orders incur a $40 penalty fee per exam.",
    "AP Capstone Policy: AP Seminar and AP Research cannot be self-studied. They must be registered through an authorised school.",
    "Grade 12 APs vs Decisions: Regular decision results arrive before May exams. Grades 9-11 AP scores matter most for offers."
  ];

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  let ruleY = currentY + 13;
  rulesList.forEach(rule => {
    doc.text(`•  ${rule}`, 18, ruleY);
    ruleY += 5.5;
  });

  // ==========================================
  // PAGE 2: CAREER-SPECIFIC AP PATHWAYS
  // ==========================================
  doc.addPage();
  addHeaderFooter(2, "Tailored AP Pathways by Career Goal");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("2. Major-Wise Four-Year Subject Sequences", 14, 30);

  const pathways = [
    {
      title: "Pathway A: Medicine & Life Sciences (Pre-Med / BioTech)",
      color: [14, 116, 144], // Cyan/Teal
      g9: "AP Biology or AP Psychology",
      g10: "AP Chemistry, AP English Language, AP Seminar",
      g11: "AP Calculus AB, AP Physics 1/2, AP Research, AP Statistics (opt)",
      g12: "Remaining APs (Micro/Bio), UCAT/BMAT / SAT prep, Hospital Internships",
      logic: "Biology and Chemistry anchor the academic profile. Calculus and Physics confirm quantitative lab competencies. Seminar & Research provide a published clinical paper."
    },
    {
      title: "Pathway B: Economics, Finance & Management",
      color: [161, 98, 7], // Amber
      g9: "AP Human Geography or AP Microeconomics",
      g10: "AP Macroeconomics, AP Statistics",
      g11: "AP Calculus AB/BC, AP Psychology, AP Seminar / Research",
      g12: "AP Calculus BC (if math focus), AP US/Comparative Govt, Case Competitions",
      logic: "Micro & Macroeconomics build foundational literacy. Calculus and Statistics satisfy mathematical economics criteria. Psychology explains behavioral decision models."
    },
    {
      title: "Pathway C: Computer Science, AI & Engineering",
      color: [79, 70, 229], // Indigo
      g9: "AP Computer Science Principles (CSP) or AP Human Geography",
      g10: "AP Computer Science A (Java), AP Statistics",
      g11: "AP Calculus BC, AP Physics 1 or Physics C: Mechanics",
      g12: "AP Physics C: E&M, Advanced Machine Learning Capstone, GitHub Portfolio",
      logic: "CS Principles introduces systemic logic. CS A teaches OOP in Java. Calculus BC and Physics C: Mechanics are gold standards for MIT, Stanford, CMU and Waterloo."
    }
  ];

  let pY = 35;
  pathways.forEach(p => {
    doc.setFillColor(p.color[0], p.color[1], p.color[2]);
    doc.rect(14, pY, 182, 7, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(p.title, 18, pY + 5);

    doc.setFillColor(255, 255, 255);
    doc.rect(14, pY + 7, 182, 38, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, pY + 7, 182, 38, "D");

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("Grade 9:", 18, pY + 13);
    doc.text("Grade 10:", 18, pY + 18);
    doc.text("Grade 11:", 18, pY + 23);
    doc.text("Grade 12:", 18, pY + 28);
    doc.text("Admissions Rationale:", 18, pY + 34);

    doc.setFont("helvetica", "normal");
    doc.text(p.g9, 36, pY + 13);
    doc.text(p.g10, 36, pY + 18);
    doc.text(p.g11, 36, pY + 23);
    doc.text(p.g12, 36, pY + 28);
    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.text(doc.splitTextToSize(p.logic, 140), 54, pY + 34);

    pY += 48;
  });

  // Callout Box
  doc.setFillColor(240, 253, 244);
  doc.roundedRect(14, pY, 182, 28, 3, 3, "F");
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(14, pY, 182, 28, 3, 3, "D");

  doc.setTextColor(21, 128, 61);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Golden Rule of AP Course Selection:", 18, pY + 6);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const goldenRuleText = "Never select an AP simply because peers are enrolled. Every subject on your transcript must answer: 'How does this deepen this student's narrative?' One 5 in a relevant AP subject (e.g., AP Biology for Medicine) carries far greater weight than three 3s in non-major areas.";
  doc.text(doc.splitTextToSize(goldenRuleText, 174), 18, pY + 12);

  // ==========================================
  // PAGE 3: 4 REAL EDUQUEST STUDENT STORIES
  // ==========================================
  doc.addPage();
  addHeaderFooter(3, "Student Stories: Four Real AP Calendars from Grade 8");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("3. Case Studies: Early Planning Paths Followed by EduQuest Students", 14, 30);

  const studentStories = [
    {
      title: "Story 1: The Economics Student Who Built Maths First",
      detail: "G8: AP Human Geography | G9: AP Microecon & Stats | G10: AP Macroecon | G11: AP Calc AB & Psych | G12: AP Calc BC & Research.",
      takeaway: "Economics & Stats came early so Calc in G11 sat on strong data foundations. G12 Research gave an independent policy paper."
    },
    {
      title: "Story 2: The Economics Student Who Started from History & Policy",
      detail: "G8: AP Human Geography | G9: AP US History | G10: AP Statistics | G11: AP Microeconomics | G12: AP Calc AB, Macroecon & Govt.",
      takeaway: "Moved from history to statistics to core economics, keeping Calculus for G12 so the quantitative load built step-by-step."
    },
    {
      title: "Story 3: The Computer Science Student Who Built Code, Then Maths",
      detail: "G8: AP Human Geo | G9: AP US History | G10: AP CSP & Stats | G11: AP CSA & Calc AB/BC | G12: AP Physics C & CS Capstone.",
      takeaway: "Coding in two clear steps: CSP in G10, CSA in G11. Calculus BC and Physics C followed for AI and robotics portfolio."
    },
    {
      title: "Story 4: The Finance Student Who Put Numbers First",
      detail: "G8: AP Human Geo | G9: AP US History | G10: AP Statistics | G11: AP Microecon & Calc AB/BC | G12: AP Macroecon & Research.",
      takeaway: "Statistics first as the bedrock of financial modelling. Micro/Macro gave the market view, and AP Research probed finance theory."
    }
  ];

  let sY = 36;
  studentStories.forEach(s => {
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(14, sY, 182, 28, 2.5, 2.5, "F");
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(14, sY, 182, 28, 2.5, 2.5, "D");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(s.title, 18, sY + 6);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text("Pathway:", 18, sY + 12);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(s.detail, 155), 32, sY + 12);

    doc.setFont("helvetica", "bold");
    doc.text("Admissions Rationale:", 18, sY + 20);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text(doc.splitTextToSize(s.takeaway, 142), 52, sY + 20);

    sY += 33;
  });

  // What These Four Stories Have in Common
  sY += 2;
  doc.setFillColor(239, 246, 255);
  doc.roundedRect(14, sY, 182, 40, 3, 3, "F");
  doc.setDrawColor(191, 219, 254);
  doc.roundedRect(14, sY, 182, 40, 3, 3, "D");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("What These Four Early-Starter Stories Have in Common:", 18, sY + 7);

  const storyCommon = [
    "Flexibility: Each plan was customized to individual student strengths, interests and school offerings.",
    "Maths with Purpose: Calculus and Statistics appear in all four, as quantitative depth is paramount.",
    "Research at the End: AP Research or an independent published paper provided a tangible portfolio piece.",
    "A Steady Build: Every plan moves from broad context to core foundations to rigorous depth."
  ];

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  let scY = sY + 13;
  storyCommon.forEach(item => {
    doc.text(`✓  ${item}`, 18, scY);
    scY += 6;
  });

  // ==========================================
  // PAGE 4: 2026-2027 EXAM CALENDAR & SYLLABUS OVERLAP
  // ==========================================
  doc.addPage();
  addHeaderFooter(4, "2027 AP Exam Calendar & Board Integration");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("4. College Board 2026-2027 Official Timeline", 14, 30);

  const calStartY = 35;
  doc.setFillColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.rect(14, calStartY, 182, 7.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Milestone Window", 18, calStartY + 5);
  doc.text("Critical Action Item & Registration Requirement", 70, calStartY + 5);

  const calRows = [
    { time: "June to August", act: "Select 1-2 AP courses; confirm test centre approval; commence light summer foundational readings." },
    { time: "By 2 October 2026", act: "Preferred deadline for school AP coordinators to submit exam orders and complete student joins." },
    { time: "By 13 November 2026", act: "FINAL standard ordering deadline for full-year courses. Orders after this incur a $40 late fee." },
    { time: "December to February", act: "Complete 75%+ syllabus units; take first full-length diagnostic mock under timed conditions." },
    { time: "By 12 March 2027", act: "Final deadline for spring course registrations and fall order adjustments." },
    { time: "March to April 2027", act: "Take 4-6 timed full-length mock exams; rigorously practice free-response questions (FRQs)." },
    { time: "3 to 14 May 2027", act: "Official AP Exam Administration across registered test centres globally (Week 1 & Week 2)." },
    { time: "17 to 21 May 2027", act: "Late-testing window for pre-approved emergency conflicts." },
    { time: "July 2027", act: "Official College Board scores released online to students and nominated universities." }
  ];

  let cY = calStartY + 7.5;
  calRows.forEach((c, idx) => {
    const isAlt = idx % 2 === 1;
    doc.setFillColor(isAlt ? 248 : 255, isAlt ? 250 : 255, isAlt ? 252 : 255);
    doc.rect(14, cY, 182, 9, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, cY, 182, 9, "D");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(c.time, 18, cY + 5.5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(c.act, 120), 70, cY + 4.5);
    cY += 9;
  });

  // Board Overlap Breakdown
  cY += 6;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("5. CBSE, ICSE & IB Overlap Optimization Strategy", 14, cY);

  cY += 5;
  const boardPillars = [
    {
      title: "CBSE & ICSE Students",
      desc: "Class 11 & 12 Science and Math share significant content with AP Calculus, AP Chemistry, AP Physics and AP Biology. The key difference lies in application: Indian boards reward rote memorisation and procedural derivation, whereas AP tests data analysis, experiment design, and multi-concept synthesis."
    },
    {
      title: "IB Diploma Programme Students",
      desc: "IB students already undergo intense rigour (HL & SL courses plus EE and TOK). Taking 4-6 APs is redundant and risks burnout. IB students should only take 1-2 APs if their school lacks specific desired coursework (e.g. AP Macroeconomics or AP Computer Science A)."
    },
    {
      title: "Workload Calibration",
      desc: "Budget 3 to 5 hours per week per AP subject during term time, scaling to 8-10 hours during the final 6-week sprint. Two APs alongside Class 11 board exams and SAT prep represents a full, healthy maximum."
    }
  ];

  boardPillars.forEach(bp => {
    doc.setFillColor(248, 250, 252);
    doc.rect(14, cY, 182, 17, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, cY, 182, 17, "D");

    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(`• ${bp.title}:`, 18, cY + 5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(bp.desc, 172), 18, cY + 9.5);

    cY += 19;
  });

  // ==========================================
  // PAGE 5: PSAT, SAT, PROFILE INTEGRATION & MENTORSHIP
  // ==========================================
  doc.addPage();
  addHeaderFooter(5, "Test Prep, Profile Building & Mentorship Support");

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("6. Coordinating APs with SAT, PSAT & Profile Milestones", 14, 30);

  const integStartY = 35;
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.rect(14, integStartY, 182, 7.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Grade", 18, integStartY + 5);
  doc.text("Standardised Testing Focus", 48, integStartY + 5);
  doc.text("Profile & Extracurricular Deliverable", 112, integStartY + 5);

  const integRows = [
    { g: "Grade 9", test: "PSAT 8/9 & PSAT 10 diagnostic baseline", prof: "Clubs, reading habits, early Olympiad foundations." },
    { g: "Grade 10", test: "SAT formal preparation (Math & Reading-Writing)", prof: "First research mentor project or science fair entry." },
    { g: "Grade 11", test: "Official SAT target (1500+) or ACT (34+)", prof: "AP Research paper, national competitions, leadership roles." },
    { g: "Grade 12", test: "UCAT / BMAT (UK) & final SAT retake if needed", prof: "College shortlisting, SOPs, LORs, scholarship submissions." }
  ];

  let iY = integStartY + 7.5;
  integRows.forEach((ir, idx) => {
    const isAlt = idx % 2 === 1;
    doc.setFillColor(isAlt ? 248 : 255, isAlt ? 250 : 255, isAlt ? 252 : 255);
    doc.rect(14, iY, 182, 8, "F");
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(14, iY, 182, 8, "D");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.text(ir.g, 18, iY + 5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.text(ir.test, 48, iY + 5);
    doc.text(ir.prof, 112, iY + 5);
    iY += 8;
  });

  // Top Mistakes Callout
  iY += 6;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("7. Common AP Mistakes to Avoid", 14, iY);

  iY += 5;
  const mistakes = [
    "Mistake 1: Stacking too many APs in Grade 9 (leads to low GPA and burnout).",
    "Mistake 2: Missing the November College Board registration deadline ($40 penalty).",
    "Mistake 3: Relying on self-study for AP Seminar/Research (explicitly prohibited by College Board).",
    "Mistake 4: Taking APs in silos without matching extracurricular profile depth."
  ];

  doc.setFillColor(254, 242, 242);
  doc.roundedRect(14, iY, 182, 26, 3, 3, "F");
  doc.setDrawColor(254, 202, 202);
  doc.roundedRect(14, iY, 182, 26, 3, 3, "D");

  doc.setTextColor(185, 28, 28);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  let misY = iY + 6;
  mistakes.forEach(m => {
    doc.text(`✗  ${m}`, 18, misY);
    misY += 5;
  });

  // EduQuest Advisory Call to Action
  iY += 32;
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(14, iY, 182, 42, 3, 3, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Personalised 1-on-1 AP & Global Admissions Mentorship", 18, iY + 9);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const ctaText = "EduQuest works with ambitious students across India to architect bespoke AP course schedules, SAT/PSAT score breakthroughs (1550+), peer-reviewed research publications, and Tier-1 university applications for Ivy League, Oxbridge, Stanford, and top global colleges.";
  doc.text(doc.splitTextToSize(ctaText, 174), 18, iY + 16);

  doc.setFillColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.roundedRect(18, iY + 28, 70, 8, 2, 2, "F");
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Schedule Strategy Consultation ↗", 22, iY + 33);

  doc.setTextColor(203, 213, 225);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text("Website: eduquest.org.in | mbawizards.co.in", 95, iY + 33);

  // Save PDF
  const dir = path.join(__dirname, "../public/lead-magnets");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const outPath1 = path.join(dir, "ap-exam-planner-guide.pdf");
  const outPath2 = path.join(dir, "ap-exam-planner.pdf");

  const pdfData = Buffer.from(doc.output("arraybuffer"));
  fs.writeFileSync(outPath1, pdfData);
  fs.writeFileSync(outPath2, pdfData);
  console.log("Successfully generated AP Exam Planner 5-Page PDFs:", outPath1, outPath2);
}

createApPlannerPdf();
