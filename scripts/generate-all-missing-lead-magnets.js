const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

const LEAD_DIR = path.join(__dirname, "../public/lead-magnets");
if (!fs.existsSync(LEAD_DIR)) {
  fs.mkdirSync(LEAD_DIR, { recursive: true });
}

// 1. Load Slugs and Sources
const allSlugs = JSON.parse(fs.readFileSync(path.join(__dirname, "../src/data/all-blog-slugs.json"), "utf8"));
const wpBlogs = JSON.parse(fs.readFileSync(path.join(__dirname, "../src/data/wp-blogs.json"), "utf8"));
const wpMap = new Map(wpBlogs.map((b) => [b.slug, b]));

const blogsDataContent = fs.readFileSync(path.join(__dirname, "../src/data/blogs-data.ts"), "utf8");
const localBlogs = [];
const blogBlocks = blogsDataContent.split(/\{\s*slug:\s*["']/);
for (let i = 1; i < blogBlocks.length; i++) {
  const block = blogBlocks[i];
  const slug = block.slice(0, block.indexOf('"'));
  const titleMatch = block.match(/title:\s*["']([^"']+)["']/);
  const categoryMatch = block.match(/category:\s*["']([^"']+)["']/);
  const excerptMatch = block.match(/excerpt:\s*["']([^"']+)["']/);
  localBlogs.push({
    slug,
    title: titleMatch ? titleMatch[1] : slug,
    category: categoryMatch ? categoryMatch[1] : "MBA Prep",
    excerpt: excerptMatch ? excerptMatch[1] : "",
  });
}
const localMap = new Map(localBlogs.map((b) => [b.slug, b]));

// Helper to sanitize HTML tags and clean up string
function cleanText(str) {
  if (!str) return "";
  return str
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

// 2. Sync existing single-file pairs
console.log("=== Step 1: Syncing existing single-file lead magnets ===");
let syncedCount = 0;
const currentFiles = new Set(fs.readdirSync(LEAD_DIR));

for (const slug of allSlugs) {
  const guidePath = path.join(LEAD_DIR, `${slug}-guide.pdf`);
  const directPath = path.join(LEAD_DIR, `${slug}.pdf`);

  const hasGuide = currentFiles.has(`${slug}-guide.pdf`);
  const hasDirect = currentFiles.has(`${slug}.pdf`);

  if (hasGuide && !hasDirect) {
    fs.copyFileSync(guidePath, directPath);
    currentFiles.add(`${slug}.pdf`);
    syncedCount++;
  } else if (!hasGuide && hasDirect) {
    fs.copyFileSync(directPath, guidePath);
    currentFiles.add(`${slug}-guide.pdf`);
    syncedCount++;
  }
}
console.log(`Synced ${syncedCount} twin PDF files.`);

// 3. Identify completely missing slugs
const missingSlugs = [];
for (const slug of allSlugs) {
  const hasGuide = currentFiles.has(`${slug}-guide.pdf`);
  const hasDirect = currentFiles.has(`${slug}.pdf`);
  if (!hasGuide || !hasDirect) {
    missingSlugs.push(slug);
  }
}
console.log(`=== Step 2: Generating PDFs for ${missingSlugs.length} missing slugs ===`);

// Generator function for standard MbaWizards Playbook PDF
function generatePlaybookPdf(item) {
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
  const TOTAL_PAGES = 3;

  function addHeaderFooter(pageNum, sectionTitle) {
    // Top Bar
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.rect(0, 0, 210, 14, "F");

    doc.setFillColor(accentGold[0], accentGold[1], accentGold[2]);
    doc.rect(0, 14, 210, 1.2, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    const catUpper = (item.category || "MBA ADMISSIONS").toUpperCase();
    doc.text(`MBA WIZARDS | ${catUpper} STRATEGIC BLUEPRINT`, 14, 9.5);

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
    doc.text("Confidential — For MBA & Management Aspirants Only", 196, 292, { align: "right" });

    // Section title
    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12.5);
    doc.text(sectionTitle, 14, 23);

    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.setLineWidth(0.4);
    doc.line(14, 25, 196, 25);
  }

  // Determine domain characteristics based on slug & title
  const isInterview = /interview|pi-|questions-and-answers|tell-me-about|kira/i.test(item.slug + " " + item.title);
  const isGmat = /gmat|focus|verbal|quant|data-insights/i.test(item.slug + " " + item.title);
  const isCat = /cat|iim|varc|dilr/i.test(item.slug + " " + item.title);
  const isGre = /gre|verbal-160|quantitative/i.test(item.slug + " " + item.title);

  // ----------------------------------------------------
  // PAGE 1: EXECUTIVE OVERVIEW & FOUNDATIONAL PRINCIPLES
  // ----------------------------------------------------
  addHeaderFooter(1, "1. Executive Summary & Strategic Foundation");

  // Hero Card
  doc.setFillColor(primary[0], primary[1], primary[2]);
  doc.roundedRect(14, 28, 182, 38, 2.5, 2.5, "F");

  doc.setTextColor(accentGold[0], accentGold[1], accentGold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  const titleSplit = doc.splitTextToSize(item.title, 172);
  doc.text(titleSplit.slice(0, 2), 20, 37);

  doc.setTextColor(241, 245, 249);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.2);
  const subtext = item.excerpt || "Comprehensive master guide, proven frameworks, and actionable execution blueprint by MbaWizards' IIT & IIM alumni faculty team.";
  const subSplit = doc.splitTextToSize(cleanText(subtext), 172);
  doc.text(subSplit.slice(0, 2), 20, 48);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("CORE PILLAR: MbaWizards Proven 99th Percentile Pedagogy & Admissions Framework", 20, 60);

  // Pillar 1: Why This Domain Matters
  let y = 72;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("The Strategic Baseline: What Separates Top 1% Candidates", 14, y);

  y += 5;
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.3);
  let domainRationale = "";
  if (isInterview) {
    domainRationale = "Business school admissions interviews are not casual resume recaps; they are high-stakes evaluations of executive leadership potential, emotional intelligence, and authentic institutional fit. Top business schools like IIMs, ISB, Harvard, and INSEAD look for structured thinking under pressure, concise articulation, and clear career vision alignment.";
  } else if (isGmat) {
    domainRationale = "The GMAT is not a test of memorized formulas or innate math talent; it is a standardized assessment of executive decision-making, cognitive stamina, and constraint management. To achieve a 97th+ percentile score, candidates must transition from unstructured volume practicing to rigorous error taxonomy and first-principles mastery.";
  } else if (isCat) {
    domainRationale = "The CAT exam tests cognitive speed, strategic question selection, and psychological resilience under severe time pressure. Success across VARC, DILR, and QA depends on knowing which sets to attack, which problems to abandon immediately, and maintaining unwavering accuracy on easy-to-medium questions.";
  } else if (isGre) {
    domainRationale = "The GRE demands scientific vocabulary retention, precision in sentence equivalence, and clean mathematical reasoning without calculator over-reliance. Scoring 325+ requires eliminating extreme-tone options, mastering root words, and building rock-solid quantitative comparison habits.";
  } else {
    domainRationale = "Securing admission into premier global and Indian MBA programs requires a coherent personal narrative, verified academic aptitude, and differentiated positioning. Adcoms seek high-impact professionals whose past achievements naturally align with their future industry goals.";
  }
  const splitRat = doc.splitTextToSize(domainRationale, 182);
  doc.text(splitRat, 14, y);

  // Framework Card
  y += splitRat.length * 4.2 + 6;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 94, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("The MbaWizards 4-Point Strategic Execution Framework", 20, y + 8);

  const pillars = [
    {
      title: "1. Diagnostic Baseline & Blind-Spot Identification:",
      desc: "Begin with a rigorous, untimed and timed diagnostic to categorize mistakes into conceptual gaps, pacing failures, and trap susceptibility.",
    },
    {
      title: "2. First-Principles Methodology (No Robotic Tricks):",
      desc: "Master the underlying logical architecture of arguments, questions, and narrative points. Understand why strategies work so you can adapt instantly.",
    },
    {
      title: "3. Microscopic Error Logging & Review Cycles:",
      desc: "Spend 3x more time analyzing missed questions and interview responses than doing new ones. Document the test-maker's bait and your preventive takeaway.",
    },
    {
      title: "4. Stress Regulation & Pacing Calibration:",
      desc: "Train under simulated test conditions with strict 2-minute decision boundaries to build unflappable test-day composure and cognitive stamina.",
    },
  ];

  let py = y + 16;
  pillars.forEach((p) => {
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(p.title, 20, py);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.8);
    const splitDesc = doc.splitTextToSize(p.desc, 170);
    doc.text(splitDesc, 20, py + 4.2);
    py += splitDesc.length * 4.2 + 5;
  });

  // Callout Quote
  y = 222;
  doc.setFillColor(238, 242, 255);
  doc.setDrawColor(199, 210, 254);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("THE CORE MBAWIZARDS PHILOSOPHY:", 20, y + 8);

  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  const qText =
    '"Excellence in standardized tests and MBA admissions is not an accident of talent — it is the inevitable outcome of structured habits, candid diagnostic feedback, and refusing to settle for mediocrity."';
  doc.text(doc.splitTextToSize(qText, 170), 20, y + 14);

  doc.setFont("helvetica", "bold");
  doc.text("— Surinder Gupta (IIT Roorkee) & The MbaWizards Senior Mentorship Board", 20, y + 31);

  // ----------------------------------------------------
  // PAGE 2: DEEP DIVE METHODOLOGY & ACTION PLAYBOOK
  // ----------------------------------------------------
  doc.addPage();
  addHeaderFooter(2, "2. Tactical Playbook: Frameworks, Pacing & Error Analysis");

  y = 30;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Step-by-Step Tactical Execution System", 14, y);

  y += 6;
  const tactics = [
    {
      title: "Step 1: Deconstruct the Prompt / Question Stem First",
      text: "Never read answer choices or formulate answers blindly. Pinpoint the exact question type (assumption, weaken, inference, quantitative constraint, or behavioral interview angle).",
    },
    {
      title: "Step 2: Pre-Thinking & Structural Mapping",
      text: "Formulate your own solution or answer hypothesis in 5 to 10 words before evaluating options. This creates a powerful filter against seductive distractor choices.",
    },
    {
      title: "Step 3: Systematic Elimination of Traps",
      text: "Actively hunt for known distractor archetypes: extreme qualifiers ('always', 'never'), scope shifts, reverse logic, and out-of-context facts.",
    },
    {
      title: "Step 4: Pacing & Strategic Abandonment",
      text: "Enforce a strict decision boundary: if no clean solution path emerges within 90 seconds, make an educated elimination, execute a strategic guess, and move forward.",
    },
  ];

  tactics.forEach((t) => {
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.roundedRect(14, y, 182, 19, 1.5, 1.5, "FD");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(t.title, 18, y + 5.5);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.6);
    doc.text(doc.splitTextToSize(t.text, 172), 18, y + 10.5);

    y += 22;
  });

  // The 4-Bucket Error Taxonomy
  y += 2;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("The 4-Bucket Error Taxonomy (Why Top Performers Keep an Error Log)", 14, y);

  y += 5;
  const errorBuckets = [
    {
      type: "Bucket 1: Conceptual Deficit",
      cause: "Didn't know the core mathematical theorem, grammar rule, or interview framework.",
      fix: "Return to foundational curriculum; complete 15 untimed drill sets until concept is second nature.",
    },
    {
      type: "Bucket 2: Process Breakdown",
      cause: "Knew the concept, but rushed scratchwork, skipped steps, or didn't write clean notes.",
      fix: "Enforce strict scratchpad hygiene. Never solve multi-step problems or arguments in your head.",
    },
    {
      type: "Bucket 3: Trap Answer Susceptibility",
      cause: "Fell for the test-maker's distractor (e.g. solved for x instead of 2x, or picked extreme RC tone).",
      fix: "Document the trap pattern in your logbook. Pre-think answers before checking choices.",
    },
    {
      type: "Bucket 4: Time Pressure Panic",
      cause: "Spent 4+ minutes stubborn on an early question, forcing panicked guesses on remaining items.",
      fix: "Execute the 2-minute decision rule: if no clean path by 90s, make educated guess and move.",
    },
  ];

  errorBuckets.forEach((b) => {
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.roundedRect(14, y, 182, 18, 1.2, 1.2, "FD");

    doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(b.type, 18, y + 4.8);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.4);
    doc.text(`• Cause: ${b.cause}`, 18, y + 9.5);
    doc.text(`• Remedy: ${b.fix}`, 18, y + 14);
    y += 21;
  });

  // ----------------------------------------------------
  // PAGE 3: ADMISSIONS POSITIONING, TEST DAY & MENTORSHIP
  // ----------------------------------------------------
  doc.addPage();
  addHeaderFooter(3, "3. Admissions Edge, Test-Day Protocol & Mentorship");

  // Top Practical Rules
  y = 28;
  doc.setTextColor(primary[0], primary[1], primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("Top 8 Practical Rules for Serious Aspirants", 14, y);

  y += 5;
  const rules = [
    "1. Consistency Over Intensity: Two focused hours daily beats an exhausting ten-hour weekend marathon.",
    "2. Quality of Review Beats Quantity: Analyzing 20 questions deeply yields more score gains than skimming 100.",
    "3. Master the Start of Every Section: Early accuracy establishes your scoring range on computer-adaptive exams.",
    "4. Protect Your Physical & Mental Energy: Sleep deprivation reduces analytical reasoning speed by over 30%.",
    "5. Leverage Peer Discussions: Explaining solutions to study partners cements understanding twice as fast.",
    "6. Never Study Without a Timer: Untimed comfort creates test-day panic; build pacing instincts early.",
    "7. Autopsy Every Mock Test: A mock score is just data; the post-mock audit is where real improvement happens.",
    "8. Maintain Emotional Equanimity: One difficult set is feedback, not a verdict on your intelligence.",
  ];

  rules.forEach((r) => {
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.6);
    doc.text(r, 16, y);
    y += 5.2;
  });

  // Test-Day / Interview-Day Protocol
  y += 2;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.roundedRect(14, y, 182, 38, 2, 2, "FD");

  doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Test-Day & Interview Peak Performance Protocol", 20, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.6);
  const protocols = [
    "• 48-Hour Study Blackout: Stop solving hard problems 2 days prior to allow cognitive neural recovery.",
    "• The Reset Breath: If an unexpected question rattles you, look away, take 3 deep diaphragmatic breaths, and reset.",
    "• Strict 2-Minute Boundaries: Never allow an intractable question to steal 4 minutes and poison section timing.",
  ];
  let pty = y + 13;
  protocols.forEach((pr) => {
    doc.text(pr, 20, pty);
    pty += 5.2;
  });

  // Mentorship Callout Card
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
  const ctaDesc =
    "Whether targeting 705+ on GMAT Focus, 99%ile on CAT, 325+ on GRE, or securing interviews at top global B-schools, MbaWizards delivers personalized mentorship, accessible faculty, and relentless rigor to get you there.";
  doc.text(doc.splitTextToSize(ctaDesc, 170), 20, y + 20);

  // Pillars Grid
  const mwPillars = [
    { title: "Personalized 1-on-1 Mentorship", desc: "Diagnostic audits and customized roadmaps with IIT & IIM alumni faculty." },
    { title: "24/7 Extended Doubt Resolution", desc: "Doubts resolved via chat or voice notes when you study — day or night." },
    { title: "Full Sectional & Mock Analytics", desc: "Computer-adaptive testing platforms with question-level timing audits." },
    { title: "End-to-End Admissions Consulting", desc: "Winning essays, CV building, and AI-powered mock interview practice." },
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
  doc.text("Connect with MbaWizards Today for a Free Diagnostic & Demo:", 20, mpy + 11);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Website: https://mbawizards.in", 20, mpy + 18);
  doc.text("• Centers: Delhi NCR | Sector 14 Gurgaon | Sector 62 Noida | Connaught Place & Dwarka Delhi", 20, mpy + 24);
  doc.text("• Batches: Live Interactive Online | Weekend Working Professional Cohorts | 1-on-1 Mentoring", 20, mpy + 30);

  // Output paths
  const p1Path = path.join(LEAD_DIR, `${item.slug}-guide.pdf`);
  const p2Path = path.join(LEAD_DIR, `${item.slug}.pdf`);

  const pdfData = doc.output();
  fs.writeFileSync(p1Path, Buffer.from(pdfData, "binary"));
  fs.writeFileSync(p2Path, Buffer.from(pdfData, "binary"));
}

// Generate for all missing slugs
let generatedCount = 0;
for (const slug of missingSlugs) {
  const wp = wpMap.get(slug);
  const local = localMap.get(slug);
  let title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  let category = "MBA Admissions & Test Prep";
  let excerpt = "";

  if (wp) {
    title = cleanText(wp.title) || title;
    category = wp.categories && wp.categories[0] && wp.categories[0] !== "Uncategorized" ? wp.categories[0] : "MBA Admissions";
    excerpt = cleanText(wp.excerpt);
  } else if (local) {
    title = cleanText(local.title) || title;
    category = local.category || category;
    excerpt = cleanText(local.excerpt);
  }

  generatePlaybookPdf({ slug, title, category, excerpt });
  generatedCount++;
}

console.log(`Generated ${generatedCount} new lead magnet PDF sets (both -guide.pdf and .pdf).`);

// Final audit
const finalFiles = new Set(fs.readdirSync(LEAD_DIR));
let finalMissing = 0;
for (const slug of allSlugs) {
  if (!finalFiles.has(`${slug}-guide.pdf`) || !finalFiles.has(`${slug}.pdf`)) {
    finalMissing++;
    console.error(`Still missing: ${slug}`);
  }
}
console.log(`=== Final Audit: Total missing lead magnets out of ${allSlugs.length} slugs: ${finalMissing} ===`);
