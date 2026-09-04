import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join, relative } from "path";
import * as XLSX from "xlsx";

const ROOT = process.cwd();
const APP_DIR = join(ROOT, "src", "app");
const BASE_URL = "https://www.mbawizards.co.in";

function getAllPageFiles(dir, files = []) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) getAllPageFiles(full, files);
    else if (entry === "page.tsx") files.push(full);
  }
  return files;
}

function extractStringValue(text, key) {
  const re = new RegExp(`${key}\\s*:\\s*["'\`]([^"'\`\\n]{1,400})["'\`]`);
  const m = text.match(re);
  return m ? m[1].trim() : "";
}

function extractArrayValue(text, key) {
  const re = new RegExp(`${key}\\s*:\\s*\\[([^\\]]{1,600})\\]`);
  const m = text.match(re);
  if (!m) return "";
  return m[1].replace(/["'\`\n\r]/g, "").replace(/,\s*/g, ", ").trim();
}

function extractH1(text) {
  const m = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (m) return m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().slice(0, 120);
  return "";
}

function extractH2s(text) {
  const re = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
  const results = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    const clean = m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (clean && clean.length > 1 && results.length < 8) results.push(clean);
  }
  return results.join(" | ");
}

function slugToUrl(filePath) {
  let rel = relative(APP_DIR, filePath).replace(/\\/g, "/");
  rel = rel.replace(/\/page\.tsx$/, "").replace(/^page\.tsx$/, "");
  rel = rel.replace(/^\(home\)\/?/, "");
  if (!rel) return BASE_URL + "/";
  return `${BASE_URL}/${rel}`;
}

function slugToPageName(filePath) {
  let rel = relative(APP_DIR, filePath).replace(/\\/g, "/");
  rel = rel.replace(/\/page\.tsx$/, "").replace(/^page\.tsx$/, "");
  rel = rel.replace(/^\(home\)\/?/, "");
  if (!rel) return "Home";
  return rel.split("/").pop().replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const recommendedSEO = {
  "/": { metaTitle: "Best GMAT Coaching in India | #1 MBA Admissions Prep | MBA Wizards", metaDesc: "MBA Wizards offers India's top GMAT, GRE & CAT coaching with IIT alumni mentors. 700+ GMAT scorers, personalized plans & real results. Book free session today!", focusKeyword: "GMAT coaching India", h1: "India's #1 GMAT, GRE & MBA Admissions Coaching" },
  "/about-us": { metaTitle: "About MBA Wizards | IIT Alumni GMAT & MBA Mentors", metaDesc: "Meet the team behind MBA Wizards – IIT Roorkee alumni and top-rated mentors with 15+ years helping students crack GMAT 700+, IIM interviews & global MBA admissions.", focusKeyword: "MBA Wizards about us", h1: "About MBA Wizards – Mentors Who've Been There" },
  "/blogs": { metaTitle: "MBA & GMAT Blog | Expert Tips, Guides & Interview Prep | MBA Wizards", metaDesc: "Read expert articles on GMAT prep, MBA interviews, IIM admissions & test strategies from MBA Wizards faculty. 100+ guides updated for 2025-26.", focusKeyword: "GMAT MBA blog", h1: "GMAT & MBA Preparation Blog" },
  "/blog": { metaTitle: "GMAT & MBA Blog | MBA Wizards", metaDesc: "Expert GMAT, GRE, CAT and MBA admissions articles by MBA Wizards faculty.", focusKeyword: "GMAT blog", h1: "MBA Wizards Blog" },
  "/gmat-coaching": { metaTitle: "Best GMAT Coaching Classes 2025 | Expert Mentors | MBA Wizards", metaDesc: "Join MBA Wizards GMAT coaching with IIT alumni mentors. 700+ target scores, flexible online & offline batches, personalized study plans. Free demo!", focusKeyword: "GMAT coaching classes", h1: "Expert GMAT Coaching – Score 700+ with MBA Wizards" },
  "/gre-coaching-classes": { metaTitle: "Best GRE Coaching Classes 2025 | Online & Offline | MBA Wizards", metaDesc: "Crack GRE with MBA Wizards' expert coaching – personalized plans, live doubt sessions & proven strategies for 320+ scores. Online & offline batches.", focusKeyword: "GRE coaching classes", h1: "Expert GRE Coaching – Score 320+ with MBA Wizards" },
  "/cat-2025": { metaTitle: "CAT 2025 Coaching | IIM Preparation | MBA Wizards", metaDesc: "Prepare for CAT 2025 with MBA Wizards. Expert faculty, mock tests & personalized mentoring to help you crack IIMs. Start your CAT journey today!", focusKeyword: "CAT 2025 coaching", h1: "CAT 2025 Coaching – Your Path to IIM" },
  "/gmat-preparation": { metaTitle: "GMAT Preparation Guide 2025 | Study Plan & Strategy | MBA Wizards", metaDesc: "Complete GMAT preparation guide by MBA Wizards – study plans, section strategies, practice tests & expert tips for GMAT Focus Edition 2025.", focusKeyword: "GMAT preparation 2025", h1: "GMAT Preparation – Complete Strategy Guide 2025" },
  "/gmat-toppers": { metaTitle: "GMAT Toppers & Success Stories 2025 | MBA Wizards", metaDesc: "Hear from 700+ GMAT scorers trained by MBA Wizards. Read real success stories, scores achieved & how our mentors helped them crack top MBA programs.", focusKeyword: "GMAT toppers", h1: "GMAT Toppers – Real Students, Real Results" },
  "/contact-us": { metaTitle: "Contact MBA Wizards | Free GMAT & MBA Counselling", metaDesc: "Get in touch with MBA Wizards for GMAT, GRE, CAT coaching and MBA admissions counselling. Free strategy session available. Call or WhatsApp us today!", focusKeyword: "contact MBA Wizards", h1: "Contact MBA Wizards – Free Counselling Session" },
  "/corporate-training": { metaTitle: "Corporate GMAT & MBA Training Programs | MBA Wizards", metaDesc: "MBA Wizards offers corporate GMAT and leadership training programs. Customized batch solutions for companies. Enquire now!", focusKeyword: "corporate GMAT training", h1: "Corporate Training – GMAT & MBA Programs" },
  "/education-loan": { metaTitle: "MBA Education Loan Guide 2025 | MBA Wizards", metaDesc: "Explore education loan options for MBA programs in India and abroad. MBA Wizards guides you through top banks, NBFCs and scholarship options.", focusKeyword: "MBA education loan", h1: "MBA Education Loan – Complete Guide 2025" },
  "/mba-wizards-methodology": { metaTitle: "MBA Wizards Teaching Methodology | How We Help You Score 700+", metaDesc: "Discover the proven MBA Wizards methodology – IIT alumni-designed framework for GMAT, GRE and MBA admissions that delivers 700+ scores consistently.", focusKeyword: "MBA Wizards methodology", h1: "Our Methodology – How MBA Wizards Gets You 700+" },
  "/premium-university-consulting-packages": { metaTitle: "Premium MBA University Consulting Packages | MBA Wizards", metaDesc: "End-to-end MBA university consulting by MBA Wizards – school selection, essay writing, interview prep & visa guidance for top global programs.", focusKeyword: "MBA university consulting", h1: "Premium University Consulting Packages" },
  "/research-paper-drafting-publishing-services": { metaTitle: "Research Paper Drafting & Publishing Services | MBA Wizards", metaDesc: "Professional academic research paper drafting and publishing services by MBA Wizards. Expert guidance for journal submissions and conference papers.", focusKeyword: "research paper drafting services", h1: "Research Paper Drafting & Publishing Services" },
  "/privacy-policy": { metaTitle: "Privacy Policy | MBA Wizards", metaDesc: "Read MBA Wizards' privacy policy to understand how we collect, use and protect your personal information.", focusKeyword: "privacy policy", h1: "Privacy Policy" },
  "/refund-policy": { metaTitle: "Refund Policy | MBA Wizards", metaDesc: "Understand MBA Wizards' refund and cancellation policy for all coaching programs and consulting packages.", focusKeyword: "refund policy", h1: "Refund Policy" },
  "/gmat-gre-coaching": { metaTitle: "GMAT & GRE Coaching 2025 | IIT Alumni Mentors | MBA Wizards", metaDesc: "MBA Wizards provides expert GMAT and GRE coaching with IIT alumni mentors. 700+ GMAT & 320+ GRE targets. Flexible schedules. Book free demo!", focusKeyword: "GMAT GRE coaching", h1: "Best GMAT & GRE Coaching in India" },
  "/gmat-gre-coaching-in-gurgaon": { metaTitle: "Best GMAT & GRE Coaching in Gurgaon 2025 | MBA Wizards", metaDesc: "Join MBA Wizards' GMAT & GRE coaching in Gurgaon. IIT alumni mentors, 700+ GMAT targets, personalized plans. Free demo class available!", focusKeyword: "GMAT GRE coaching in Gurgaon", h1: "Best GMAT & GRE Coaching in Gurgaon" },
  "/gmat-cat-coaching": { metaTitle: "GMAT & CAT Coaching 2025 | MBA Wizards", metaDesc: "Score 700+ on GMAT and 99th %ile on CAT with MBA Wizards' integrated coaching. IIT alumni mentors, personalized plans & proven results.", focusKeyword: "GMAT CAT coaching", h1: "GMAT & CAT Coaching – Dual Exam Mastery" },
};

function getCityRec(urlPath) {
  const cityMatch = urlPath.match(/^\/(.+?)-coaching(?:-in-(.+))?$/);
  if (cityMatch) {
    const examRaw = cityMatch[1];
    const cityRaw = cityMatch[2] || "";
    const exam = examRaw.toUpperCase().replace(/-/g, " & ").replace("GMATGRE", "GMAT & GRE").replace("GMAT CAT", "GMAT & CAT");
    const city = cityRaw ? cityRaw.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "";
    if (city) {
      return {
        metaTitle: `Best ${exam} Coaching in ${city} 2025 | MBA Wizards`,
        metaDesc: `Join MBA Wizards' ${exam} coaching in ${city}. IIT alumni mentors, flexible batch timings, high score targets & personalized study plans. Free demo!`,
        focusKeyword: `${exam} coaching in ${city}`,
        h1: `Best ${exam} Coaching in ${city} – MBA Wizards`,
      };
    }
  }
  return null;
}

const pageFiles = getAllPageFiles(APP_DIR);
const rows = [];

for (const file of pageFiles) {
  const content = readFileSync(file, "utf-8");
  const url = slugToUrl(file);
  const pageName = slugToPageName(file);
  const urlPath = url.replace(BASE_URL, "");

  const metaBlockStart = content.indexOf("export const metadata");
  const metaBlock = metaBlockStart >= 0 ? content.slice(metaBlockStart, metaBlockStart + 2000) : "";

  const curTitle = extractStringValue(metaBlock, "title");
  const curDesc = extractStringValue(metaBlock, "description");
  const curKeywords = extractArrayValue(metaBlock, "keywords") || extractStringValue(metaBlock, "keywords");
  const canonical = extractStringValue(metaBlock, "canonical") || url;
  const h1 = extractH1(content);
  const h2s = extractH2s(content);

  const rec = recommendedSEO[urlPath] || getCityRec(urlPath) || null;

  const seoIssues = [];
  if (!curTitle) seoIssues.push("❌ No Meta Title");
  if (!curDesc) seoIssues.push("❌ No Meta Description");
  if (curTitle && curTitle.length > 65) seoIssues.push("⚠️ Title Too Long");
  if (curTitle && curTitle.length < 30) seoIssues.push("⚠️ Title Too Short");
  if (curDesc && curDesc.length > 165) seoIssues.push("⚠️ Desc Too Long");
  if (curDesc && curDesc.length < 70 && curDesc.length > 0) seoIssues.push("⚠️ Desc Too Short");
  if (!h1) seoIssues.push("⚠️ No H1 Found");
  if (!curKeywords) seoIssues.push("⚠️ No Keywords");

  rows.push({
    "#": rows.length + 1,
    "Page Name": pageName,
    "Full URL": url,
    "SEO Issues": seoIssues.join(", "),
    "SEO Score": `${Math.round(((8 - seoIssues.length) / 8) * 100)}%`,
    // Current
    "Current Meta Title": curTitle,
    "Title Length": curTitle.length,
    "Current Meta Description": curDesc,
    "Desc Length": curDesc.length,
    "Current Keywords": curKeywords,
    "Current H1": h1,
    "Current H2 Tags": h2s,
    "Canonical URL": canonical,
    "Has Metadata": metaBlock.length > 20 ? "✅ YES" : "❌ NO",
    // Recommended
    "Recommended Meta Title": rec?.metaTitle || curTitle,
    "Rec Title Length": (rec?.metaTitle || curTitle).length,
    "Recommended Meta Description": rec?.metaDesc || curDesc,
    "Rec Desc Length": (rec?.metaDesc || curDesc).length,
    "Focus Keyword": rec?.focusKeyword || curKeywords.split(",")[0]?.trim() || "",
    "Recommended H1": rec?.h1 || h1,
    "File Path": file.replace(ROOT, "").replace(/\\/g, "/"),
  });
}

// Create workbook
const wb = XLSX.utils.book_new();

// ── Sheet 1: Full SEO Audit ──────────────────────────────────────
const ws1 = XLSX.utils.json_to_sheet(rows);

// Column widths
ws1["!cols"] = [
  { wch: 4 },   // #
  { wch: 32 },  // Page Name
  { wch: 60 },  // URL
  { wch: 50 },  // Issues
  { wch: 10 },  // Score
  { wch: 70 },  // Current Title
  { wch: 10 },  // Title Length
  { wch: 170 }, // Current Desc
  { wch: 10 },  // Desc Length
  { wch: 50 },  // Keywords
  { wch: 60 },  // H1
  { wch: 100 }, // H2s
  { wch: 60 },  // Canonical
  { wch: 10 },  // Has Meta
  { wch: 70 },  // Rec Title
  { wch: 10 },  // Rec Title Len
  { wch: 170 }, // Rec Desc
  { wch: 10 },  // Rec Desc Len
  { wch: 40 },  // Focus KW
  { wch: 60 },  // Rec H1
  { wch: 55 },  // File Path
];

XLSX.utils.book_append_sheet(wb, ws1, "SEO Audit - All Pages");

// ── Sheet 2: Issues Only ─────────────────────────────────────────
const issueRows = rows.filter((r) => r["SEO Issues"].length > 0);
const ws2 = XLSX.utils.json_to_sheet(issueRows);
ws2["!cols"] = ws1["!cols"];
XLSX.utils.book_append_sheet(wb, ws2, "Pages With Issues");

// ── Sheet 3: Recommended Actions ────────────────────────────────
const actionRows = rows.map((r) => ({
  "#": r["#"],
  "Page Name": r["Page Name"],
  "URL": r["Full URL"],
  "SEO Score": r["SEO Score"],
  "Action Needed": r["SEO Issues"] || "✅ Looks good",
  "ADD This Meta Title": r["Recommended Meta Title"],
  "ADD This Meta Description": r["Recommended Meta Description"],
  "ADD This Focus Keyword": r["Focus Keyword"],
  "ADD This H1": r["Recommended H1"],
}));
const ws3 = XLSX.utils.json_to_sheet(actionRows);
ws3["!cols"] = [
  { wch: 4 }, { wch: 32 }, { wch: 60 }, { wch: 10 }, { wch: 50 },
  { wch: 70 }, { wch: 170 }, { wch: 40 }, { wch: 60 },
];
XLSX.utils.book_append_sheet(wb, ws3, "Action Plan");

// Write file
const outXlsx = join(ROOT, "scripts", "MBA_Wizards_SEO_Audit.xlsx");
XLSX.writeFile(wb, outXlsx);

// Also copy to Desktop
const desktopPath = join(process.env.USERPROFILE || ROOT, "OneDrive", "Desktop", "MBA_Wizards_SEO_Audit.xlsx");
try {
  const buf = readFileSync(outXlsx);
  writeFileSync(desktopPath, buf);
  console.log(`\n✅ Excel saved to Desktop: ${desktopPath}`);
} catch(e) {
  console.log(`\n✅ Excel saved to: ${outXlsx}`);
}

console.log(`📊 Total Pages: ${rows.length}`);
console.log(`⚠️  Pages with SEO issues: ${issueRows.length}`);
console.log(`✅ Pages with full metadata: ${rows.filter(r => r["Has Metadata"] === "✅ YES").length}`);
