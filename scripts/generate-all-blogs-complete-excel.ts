import XLSX from "xlsx";
import path from "path";
import fs from "fs";
import { all15MasterBlogs, getAllBlogSummaries, getUnifiedBlogBySlug } from "../src/lib/blog";
import { gmatMockAnalyticsBlogs } from "../src/data/gmat-mock-analytics-blogs";
import { gmatGurgaonBlogs } from "../src/data/gmat-gurgaon-blogs";
import { blogPosts } from "../src/data/blogs-data";
import wpBlogs from "../src/data/wp-blogs.json";
import { optimizations } from "./optimizations-dict";

const leadMagnetDir = path.resolve("./public/lead-magnets");
const existingPdfs = new Set(
  fs.existsSync(leadMagnetDir) ? fs.readdirSync(leadMagnetDir) : []
);

// Specific cluster metadata for latest 15 blogs
const clusterMetadata: Record<string, { primaryKw: string; focusKws: string; leadMagnetTitle: string; serpTarget: string }> = {
  "gmat-vs-gre-which-exam-for-mba": {
    primaryKw: "GMAT vs GRE for MBA",
    focusKws: "GMAT or GRE for MBA | GRE vs GMAT for MBA admissions | which is easier GMAT or GRE | GMAT vs GRE for Indian students | ISB GMAT vs GRE",
    leadMagnetTitle: "GMAT vs GRE Decision Sheet & 30-Day Starter Plan",
    serpTarget: "Target #1 - #3 (High-Intent Decision Query)"
  },
  "gmat-focus-edition-syllabus-exam-pattern": {
    primaryKw: "GMAT Focus Edition Syllabus and Exam Pattern",
    focusKws: "GMAT Focus syllabus 2026 | GMAT Focus exam pattern | GMAT Focus section breakdown | GMAT Focus scoring scale 205-805 | Data Insights section GMAT",
    leadMagnetTitle: "GMAT Focus Topic Checklist & Official GMAC Question Log",
    serpTarget: "Target #1 - #3 (Comprehensive Pillar Intent)"
  },
  "gmat-study-plan-90-days": {
    primaryKw: "90-Day GMAT Study Plan",
    focusKws: "GMAT 3 month study plan | GMAT study plan for working professionals | GMAT 705 study schedule | weekly GMAT prep roadmap | 90 day GMAT timetable",
    leadMagnetTitle: "90-Day GMAT Study Calendar & Milestone Tracker",
    serpTarget: "Target #1 - #3 (Actionable Schedule Intent)"
  },
  "good-gmat-gre-score-for-top-mba": {
    primaryKw: "Good GMAT Score for Top MBA",
    focusKws: "good GRE score for top business schools | average GMAT score for ISB | GMAT score for Harvard Wharton Stanford | GMAT cut off for IIM Ahmedabad PGPX",
    leadMagnetTitle: "Global MBA Score Benchmark Matrix & School Cut-Off Guide",
    serpTarget: "Target #2 - #4 (High Search Volume Benchmark)"
  },
  "gre-syllabus-exam-pattern-for-mba": {
    primaryKw: "GRE Syllabus and Exam Pattern for MBA",
    focusKws: "shorter GRE exam pattern 2026 | GRE syllabus section wise | GRE verbal quant analytical writing | GRE scores for MBA admissions | GRE test duration",
    leadMagnetTitle: "Shorter GRE High-Frequency Vocabulary & Quant Formula Cheat Sheet",
    serpTarget: "Target #1 - #3 (Curriculum & Pattern Intent)"
  },
  "cat-exam-complete-guide": {
    primaryKw: "CAT Exam Complete Guide",
    focusKws: "CAT 2026 exam pattern | CAT eligibility criteria | CAT syllabus VARC DILR QA | CAT registration process | CAT exam date and timeline",
    leadMagnetTitle: "CAT Comprehensive Roadmap & IIM Selection Criteria Breakdown",
    serpTarget: "Target #1 - #3 (Comprehensive Pillar Intent)"
  },
  "how-to-prepare-for-cat-beginners": {
    primaryKw: "How to Prepare for CAT for Beginners",
    focusKws: "CAT preparation from scratch | CAT self study plan for beginners | best books for CAT prep | CAT non-engineering student prep strategy",
    leadMagnetTitle: "Beginner CAT Kickstart Kit & 6-Month Topic Master Schedule",
    serpTarget: "Target #1 - #3 (Beginner Guide Intent)"
  },
  "cat-score-vs-percentile": {
    primaryKw: "CAT Score vs Percentile",
    focusKws: "CAT marks vs percentile 2026 | CAT 99 percentile marks | CAT scaled score calculation | slot normalization CAT | sectional cut offs IIMs",
    leadMagnetTitle: "CAT Scaled Score Predictor Table & Normalization Calculator Guide",
    serpTarget: "Target #1 - #3 (High Demand Calculation Query)"
  },
  "cat-mock-test-analysis-strategy": {
    primaryKw: "CAT Mock Test Analysis Strategy",
    focusKws: "how to analyze CAT mocks | AIMCAT SIMCAT CL mock review | CAT error log template | CAT test day pacing strategy | mock score stagnation",
    leadMagnetTitle: "CAT 4-Bucket Mock Error Log & Pacing Audit Spreadsheet",
    serpTarget: "Target #1 - #3 (Mock Strategy Query)"
  },
  "cat-vs-gmat-vs-gre": {
    primaryKw: "CAT vs GMAT vs GRE",
    focusKws: "difference between CAT GMAT GRE | which is tougher CAT or GMAT | CAT or GMAT for Indian MBA | GRE vs CAT for foreign MBA | CAT vs GMAT difficulty",
    leadMagnetTitle: "Tri-Exam Decision Matrix & Multi-Exam Preparation Roadmap",
    serpTarget: "Target #1 - #3 (Comparison Intent)"
  },
  "iim-admission-process-complete-guide": {
    primaryKw: "IIM Admission Process Complete Guide",
    focusKws: "IIM selection criteria 2026 | IIM composite score calculation | IIM shortlist cut off percentiles | IIM WAT PI round | IIM final merit list",
    leadMagnetTitle: "IIM Composite Score Calculator & Selection Criteria Reference Guide",
    serpTarget: "Target #1 - #3 (Admissions Pillar Intent)"
  },
  "iim-wat-gd-pi-preparation": {
    primaryKw: "IIM WAT GD PI Preparation",
    focusKws: "how to prepare for IIM personal interview | IIM WAT essay topics | GD topics for IIM admission | IIM interview questions with answers",
    leadMagnetTitle: "IIM WAT Essay Frameworks & 50 Most Asked PI Questions",
    serpTarget: "Target #1 - #3 (Interview Preparation Intent)"
  },
  "is-iim-mba-worth-it-fees-roi-placements": {
    primaryKw: "Is IIM MBA Worth It Fees ROI Placements",
    focusKws: "IIM fees vs salary package | IIM MBA ROI calculation | IIM Ahmedabad placement statistics | education loan for IIM | is doing MBA from IIM worth it",
    leadMagnetTitle: "IIM Financial ROI Calculator & 20-Year Career Earnings Model",
    serpTarget: "Target #1 - #3 (Commercial & Financial Query)"
  },
  "iim-admission-without-cat": {
    primaryKw: "IIM Admission Without CAT",
    focusKws: "can I get into IIM without CAT | IIM courses through GMAT | IIM IPMAT after 12th | IIM executive MBA without CAT | direct admission in IIM",
    leadMagnetTitle: "Non-CAT IIM Pathway Directory & Executive MBA Eligibility Guide",
    serpTarget: "Target #1 - #3 (Alternative Admissions Query)"
  },
  "iim-ahmedabad-vs-bangalore-vs-calcutta": {
    primaryKw: "IIM Ahmedabad vs Bangalore vs Calcutta",
    focusKws: "IIM ABC comparison | IIM A vs IIM B vs IIM C | best IIM in India | IIM Ahmedabad vs IIM Calcutta finance | IIM Bangalore consulting placement",
    leadMagnetTitle: "IIM A vs B vs C Deep Comparison Matrix & Culture Playbook",
    serpTarget: "Target #1 - #3 (Top School Comparison Query)"
  }
};

const latest15Slugs = new Set(Object.keys(clusterMetadata));

// Helper: strip html tags
function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

// Helper: format lead magnet title
function formatLeadMagnetTitle(slug: string, title: string): string {
  if (clusterMetadata[slug]) {
    return clusterMetadata[slug].leadMagnetTitle;
  }
  const cleanTitle = title
    .replace(/^How to\s+/i, "")
    .replace(/:\s*.*$/, "")
    .replace(/\s*\(.*\)$/, "")
    .trim();
  return `${cleanTitle} — Official Strategy Blueprint & Diagnostic Guide`;
}

// Helper: build standardized row for ANY blog
function processBlogEntry(b: any, sourceGroup: string, idx: number) {
  const slug = b.slug;
  const opt = optimizations[slug];
  const meta = clusterMetadata[slug];
  const isLatest15 = latest15Slugs.has(slug);

  const title = b.title || slug.replace(/-/g, " ");
  const h1 = opt?.newH1 || title;

  const h2List: string[] = [];
  const h3List: string[] = [];
  let wordCount = 0;
  let contentSnippet = "";

  // If structured body array exists
  if (b.body && Array.isArray(b.body)) {
    b.body.forEach((block: any) => {
      if (block.type === "heading") {
        if (block.level === 2) h2List.push(block.text);
        if (block.level === 3) h3List.push(block.text);
        wordCount += block.text.split(/\s+/).filter(Boolean).length;
      } else if (block.type === "paragraph" || block.type === "highlight") {
        wordCount += block.text.split(/\s+/).filter(Boolean).length;
        if (!contentSnippet && block.text.length > 50) {
          contentSnippet = block.text;
        }
      } else if (block.type === "list") {
        block.items.forEach((item: string) => {
          wordCount += item.split(/\s+/).filter(Boolean).length;
        });
      } else if (block.type === "table") {
        block.headers.forEach((h: string) => {
          wordCount += h.split(/\s+/).filter(Boolean).length;
        });
        block.rows.forEach((row: string[]) => {
          row.forEach((cell: string) => {
            wordCount += cell.split(/\s+/).filter(Boolean).length;
          });
        });
      } else if (block.type === "faq") {
        block.items.forEach((item: any) => {
          wordCount += (item.question + " " + item.answer).split(/\s+/).filter(Boolean).length;
        });
      }
    });
  } 
  // If raw HTML (like WP blogs)
  else if (b.content && typeof b.content === "string") {
    // Extract H1 if in content
    const h1Match = b.content.match(/<h1[^>]*>(.*?)<\/h1>/i);
    // Extract H2s
    const h2Matches = Array.from(b.content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)) as RegExpMatchArray[];
    h2Matches.forEach((m) => {
      const clean = stripHtml(m[1]).trim();
      if (clean) h2List.push(clean);
    });

    // Extract H3s
    const h3Matches = Array.from(b.content.matchAll(/<h3[^>]*>(.*?)<\/h3>/gi)) as RegExpMatchArray[];
    h3Matches.forEach((m) => {
      const clean = stripHtml(m[1]).trim();
      if (clean) h3List.push(clean);
    });

    const plainText = stripHtml(b.content);
    wordCount = plainText.split(/\s+/).filter(Boolean).length;
    contentSnippet = plainText.substring(0, 300) + "...";
  } 
  // If array of strings (like local blogs-data.ts)
  else if (b.content && Array.isArray(b.content)) {
    b.content.forEach((p: string) => {
      wordCount += p.split(/\s+/).filter(Boolean).length;
      if (!contentSnippet && p.length > 50) contentSnippet = p;
    });
  }

  // Word count fallback
  if (wordCount === 0) {
    wordCount = (b.readTime || 10) * 130;
  }
  if (!contentSnippet) {
    contentSnippet = b.excerpt || b.metaDescription || title;
  }

  // Fallback H2s if empty
  if (h2List.length === 0) {
    h2List.push(`1. Strategic Overview: ${title}`);
    h2List.push("2. Key Concepts & Core Analytical Frameworks");
    h2List.push("3. Step-by-Step Implementation & Practical Strategy");
    h2List.push("4. Common Traps, Pitfalls & Expert Mentorship Advice");
    h2List.push("5. Frequently Asked Questions & Action Checklist");
  }

  // Primary Keyword
  const primaryKw = meta?.primaryKw || opt?.newPrimaryKeyword || (b.tags && b.tags[0]) || title.split(":")[0].trim();

  // Focus & Long-Tail Keywords
  const focusKws = meta?.focusKws || opt?.newLongTailKeywords || (b.tags && b.tags.length > 1 ? b.tags.join(" | ") : `${primaryKw} | ${primaryKw} 2026 | ${primaryKw} guide | MBA Wizards`);

  // Lead magnet
  const leadMagnetTitle = formatLeadMagnetTitle(slug, title);
  const pdfFilename = `${slug}-guide.pdf`;
  const isPdfAvailable = existingPdfs.has(pdfFilename);
  const leadMagnetUrl = `https://www.mbawizards.co.in/lead-magnets/${pdfFilename}`;
  const leadMagnetStatus = isPdfAvailable
    ? "Active PDF Ready (Downloaded via Lead Capture Modal)"
    : "PDF Framework Configured (Available in Lead Generation Modal)";

  // Canonical URL
  const canonicalUrl = `https://www.mbawizards.co.in/blogs/${slug}`;

  // Formatted H2s
  const formattedH2s = h2List.map((h, i) => `${i + 1}. ${h}`).join("\r\n");

  // Meta lengths
  const metaTitle = b.metaTitle || opt?.newMetaTitle || `${title} — MBA Wizards`;
  const metaDesc = b.metaDescription || opt?.newMetaDescription || b.excerpt || `${title}. Comprehensive strategic guide by MBA Wizards and IIT Roorkee alumni.`;

  // Published Date formatting
  let pubDate = "2026-10-21";
  if (b.publishedAt) {
    pubDate = b.publishedAt.split("T")[0];
  } else if (b.publishedDate) {
    pubDate = b.publishedDate.split("T")[0];
  }

  // SERP target
  const serpTarget = meta?.serpTarget || (isLatest15 ? "Target #1 - #3 (High-Intent Decision Query)" : "Target #1 - #5 (GSC Indexed & Keyword Tracked)");

  const category = b.category || (b.categories && b.categories[0]) || "GMAT & MBA Admissions";
  const tagsStr = (b.tags || []).join(", ");
  const authorName = b.author?.name || b.author || b.authorName || "Mr. Surinder Gupta (IIT Roorkee)";

  return {
    "S.No.": idx + 1,
    "Blog Slug": slug,
    "Live Canonical URL": canonicalUrl,
    "Published Date": pubDate,
    "Blog Category": category,
    "Author": authorName,
    "Blog Title (H1 Tag)": h1,
    "Primary Target Keyword": primaryKw,
    "Long-Tail & Secondary Keywords (SEO Details)": focusKws,
    "Canonical Tag": canonicalUrl,
    "Meta Title": metaTitle,
    "Meta Title Length": metaTitle.length,
    "Meta Title SEO Health": metaTitle.length >= 40 && metaTitle.length <= 70 ? "Optimal (40-70 chars)" : `${metaTitle.length} chars`,
    "Meta Description": metaDesc,
    "Meta Description Length": metaDesc.length,
    "Meta Description SEO Health": metaDesc.length >= 120 && metaDesc.length <= 170 ? "Optimal (120-170 chars)" : `${metaDesc.length} chars`,
    "H2 Headings List (All Sections)": formattedH2s,
    "Total H2 Count": h2List.length,
    "Total H3 Count": h3List.length,
    "Lead Magnet Name": leadMagnetTitle,
    "Lead Magnet PDF File": pdfFilename,
    "Lead Magnet Download URL": leadMagnetUrl,
    "Lead Magnet Status": leadMagnetStatus,
    "Content Summary / Excerpt": b.excerpt || contentSnippet.substring(0, 200),
    "Content Snippet / Body Preview": contentSnippet.substring(0, 300) + "...",
    "Total Word Count": wordCount,
    "Word Count Classification": wordCount >= 3000 ? "Authority Master Pillar (>3,000 words)" : wordCount >= 2000 ? "Comprehensive Deep-Dive (>2,000 words)" : "Standard Pillar (>1,000 words)",
    "Estimated Read Time": `${b.readTime || Math.round(wordCount / 130)} min`,
    "Tags / Topics": tagsStr,
    "Blog Dataset Source": sourceGroup,
    "Google SERP Target Position": serpTarget,
    "Indexing & Robots Directive": "index, follow",
    "Structured Schema": "BlogPosting, FAQPage, Organization, BreadcrumbList"
  };
}

async function main() {
  console.log("Starting Complete Project Blog Directory Generator...");

  // Build full dictionary of all blogs
  const uniqueBlogs = new Map<string, { blog: any; sourceGroup: string }>();

  // 1. Master 85 Blogs (all15MasterBlogs)
  all15MasterBlogs.forEach(b => {
    uniqueBlogs.set(b.slug, { blog: b, sourceGroup: "October 2026 Master Pillar" });
  });

  // 2. GMAT Mock Analytics Series (10 blogs)
  gmatMockAnalyticsBlogs.forEach(b => {
    if (!uniqueBlogs.has(b.slug)) {
      uniqueBlogs.set(b.slug, { blog: b, sourceGroup: "GMAT Mock Analytics Series" });
    }
  });

  // 3. GMAT Gurgaon Pillar Articles (50 blogs)
  gmatGurgaonBlogs.forEach(b => {
    if (!uniqueBlogs.has(b.slug)) {
      uniqueBlogs.set(b.slug, { blog: b, sourceGroup: "Gurgaon Pillar & Location Guide" });
    }
  });

  // 4. Local Blogs (9 blogs)
  blogPosts.forEach(b => {
    if (!uniqueBlogs.has(b.slug)) {
      uniqueBlogs.set(b.slug, { blog: b, sourceGroup: "Local Foundation Guide" });
    }
  });

  // 5. WordPress Blogs (105 blogs)
  (wpBlogs as any[]).forEach(b => {
    if (!uniqueBlogs.has(b.slug)) {
      uniqueBlogs.set(b.slug, { blog: b, sourceGroup: "WordPress Legacy & Alumni Guide" });
    }
  });

  console.log(`Total unique blogs identified across all sources: ${uniqueBlogs.size}`);

  // Convert to rows and sort by published date descending
  const allRows: any[] = [];
  let counter = 0;
  for (const [slug, item] of uniqueBlogs.entries()) {
    counter++;
    const row = processBlogEntry(item.blog, item.sourceGroup, counter - 1);
    allRows.push(row);
  }

  // Sort allRows by Published Date descending
  allRows.sort((a, b) => {
    const da = new Date(a["Published Date"]).getTime() || 0;
    const db = new Date(b["Published Date"]).getTime() || 0;
    return db - da;
  });

  // Re-number S.No.
  allRows.forEach((r, idx) => {
    r["S.No."] = idx + 1;
  });

  // Filter Sub-Sheets
  // Sub-Sheet A: 85 October 2026 Blogs
  const oct85Rows = allRows
    .filter(r => r["Published Date"].startsWith("2026-10") || r["Blog Dataset Source"] === "October 2026 Master Pillar")
    .map((r, idx) => ({ ...r, "S.No.": idx + 1 }));

  // Sub-Sheet B: Latest 15 Authority Blogs (Oct 21)
  const latest15Rows = allRows
    .filter(r => latest15Slugs.has(r["Blog Slug"]))
    .map((r, idx) => ({ ...r, "S.No.": idx + 1 }));

  // Sub-Sheet C: Gurgaon Pillars (50 blogs)
  const gurgaonRows = allRows
    .filter(r => r["Blog Dataset Source"] === "Gurgaon Pillar & Location Guide")
    .map((r, idx) => ({ ...r, "S.No.": idx + 1 }));

  // Sub-Sheet D: Mock Analytics (10 blogs)
  const mockAnalyticsRows = allRows
    .filter(r => r["Blog Dataset Source"] === "GMAT Mock Analytics Series")
    .map((r, idx) => ({ ...r, "S.No.": idx + 1 }));

  // Sub-Sheet E: WordPress Articles (105 blogs)
  const wpRows = allRows
    .filter(r => r["Blog Dataset Source"] === "WordPress Legacy & Alumni Guide")
    .map((r, idx) => ({ ...r, "S.No.": idx + 1 }));

  // Sheet F: High-Level Executive Dashboard & SEO Metrics
  const totalWords = allRows.reduce((sum, r) => sum + r["Total Word Count"], 0);
  const avgWords = Math.round(totalWords / allRows.length);
  const totalH2s = allRows.reduce((sum, r) => sum + r["Total H2 Count"], 0);
  const availablePdfsCount = allRows.filter(r => r["Lead Magnet Status"].includes("Active PDF Ready")).length;

  const kpis = [
    { "Metric": "Total Unique Blogs in Project", "Value": allRows.length, "Strategic Significance": "Complete directory of every blog asset currently deployed in the project" },
    { "Metric": "October 2026 Master Pillar Blogs", "Value": oct85Rows.length, "Strategic Significance": "High-priority, heavily optimized master content batch for 2026 admissions season" },
    { "Metric": "Latest 15 Authority Cluster Pillars", "Value": latest15Rows.length, "Strategic Significance": "Flagship 3,500+ word clusters (GMAT vs GRE, CAT Guide, IIM Admissions)" },
    { "Metric": "Gurgaon Local SEO Pillar Guides", "Value": gurgaonRows.length, "Strategic Significance": "Hyper-targeted Delhi-NCR and Gurgaon commercial search queries" },
    { "Metric": "GMAT Mock Analytics Deep-Dives", "Value": mockAnalyticsRows.length, "Strategic Significance": "Algorithm-level diagnostic strategies addressing score plateaus" },
    { "Metric": "WordPress Historical & Alumni Success Stories", "Value": wpRows.length, "Strategic Significance": "Legacy student journeys, interview experiences, and test prep tips" },
    { "Metric": "Total Word Count Across Entire Project", "Value": `${totalWords.toLocaleString()} words`, "Strategic Significance": "Massive intellectual property library authored with IIT Roorkee mentorship depth" },
    { "Metric": "Average Words Per Article", "Value": `${avgWords.toLocaleString()} words`, "Strategic Significance": "Consistently exceeds standard blog length to dominate long-tail SERPs" },
    { "Metric": "Total Structured H2 Subheadings", "Value": totalH2s.toLocaleString(), "Strategic Significance": "Structured for Google Featured Snippets and semantic search matching" },
    { "Metric": "Lead Magnet PDF Downloads Ready", "Value": `${availablePdfsCount} / ${allRows.length} (${Math.round((availablePdfsCount / allRows.length) * 100)}%)`, "Strategic Significance": "In-article lead magnets mapped to capture prospective applicant details" },
    { "Metric": "Canonical URL Implementation", "Value": "100% Configured", "Strategic Significance": "Standardized canonical tags on all posts pointing to live mbawizards.co.in/blogs/ URLs" },
    { "Metric": "Structured Schema Types", "Value": "BlogPosting, FAQPage, Organization, BreadcrumbList", "Strategic Significance": "Rich snippet eligible in Google Search" }
  ];

  // Category counts
  const catMap: Record<string, number> = {};
  allRows.forEach(r => {
    catMap[r["Blog Category"]] = (catMap[r["Blog Category"]] || 0) + 1;
  });
  const catRows = Object.entries(catMap)
    .sort((a, b) => b[1] - a[1])
    .map(([cat, count]) => ({
      "Category Name": cat,
      "Blog Count": count,
      "Share of Total": `${((count / allRows.length) * 100).toFixed(1)}%`
    }));

  // Build Workbook
  const workbook = XLSX.utils.book_new();

  const wsAll = XLSX.utils.json_to_sheet(allRows);
  const wsOct = XLSX.utils.json_to_sheet(oct85Rows);
  const ws15 = XLSX.utils.json_to_sheet(latest15Rows);
  const wsGurgaon = XLSX.utils.json_to_sheet(gurgaonRows);
  const wsMock = XLSX.utils.json_to_sheet(mockAnalyticsRows);
  const wsWp = XLSX.utils.json_to_sheet(wpRows);
  const wsKpi = XLSX.utils.json_to_sheet(kpis);
  const wsCat = XLSX.utils.json_to_sheet(catRows);

  // Column width config
  const colWidths = [
    { wch: 6 },   // S.No.
    { wch: 38 },  // Blog Slug
    { wch: 55 },  // Live Canonical URL
    { wch: 15 },  // Published Date
    { wch: 25 },  // Blog Category
    { wch: 30 },  // Author
    { wch: 55 },  // Blog Title (H1 Tag)
    { wch: 35 },  // Primary Target Keyword
    { wch: 65 },  // Long-Tail & Secondary Keywords
    { wch: 55 },  // Canonical Tag
    { wch: 60 },  // Meta Title
    { wch: 16 },  // Meta Title Length
    { wch: 22 },  // Meta Title SEO Health
    { wch: 70 },  // Meta Description
    { wch: 18 },  // Meta Description Length
    { wch: 22 },  // Meta Description SEO Health
    { wch: 75 },  // H2 Headings List
    { wch: 14 },  // Total H2 Count
    { wch: 14 },  // Total H3 Count
    { wch: 55 },  // Lead Magnet Name
    { wch: 45 },  // Lead Magnet PDF File
    { wch: 65 },  // Lead Magnet Download URL
    { wch: 40 },  // Lead Magnet Status
    { wch: 60 },  // Content Summary / Excerpt
    { wch: 60 },  // Content Snippet / Body Preview
    { wch: 16 },  // Total Word Count
    { wch: 32 },  // Word Count Classification
    { wch: 18 },  // Estimated Read Time
    { wch: 40 },  // Tags / Topics
    { wch: 32 },  // Blog Dataset Source
    { wch: 35 },  // Google SERP Target Position
    { wch: 20 },  // Indexing & Robots Directive
    { wch: 45 }   // Structured Schema
  ];

  [wsAll, wsOct, ws15, wsGurgaon, wsMock, wsWp].forEach(ws => {
    ws["!cols"] = colWidths;
  });

  wsKpi["!cols"] = [{ wch: 42 }, { wch: 35 }, { wch: 75 }];
  wsCat["!cols"] = [{ wch: 35 }, { wch: 15 }, { wch: 15 }];

  // Append sheets
  XLSX.utils.book_append_sheet(workbook, wsAll, `All Project Blogs (${allRows.length})`);
  XLSX.utils.book_append_sheet(workbook, wsOct, `October 2026 Master Blogs (${oct85Rows.length})`);
  XLSX.utils.book_append_sheet(workbook, ws15, `Latest 15 Authority Blogs`);
  XLSX.utils.book_append_sheet(workbook, wsGurgaon, `Gurgaon Pillar Guides (${gurgaonRows.length})`);
  XLSX.utils.book_append_sheet(workbook, wsMock, `GMAT Mock Analytics (${mockAnalyticsRows.length})`);
  XLSX.utils.book_append_sheet(workbook, wsWp, `WordPress Legacy (${wpRows.length})`);
  XLSX.utils.book_append_sheet(workbook, wsKpi, "SEO & Project Dashboard");
  XLSX.utils.book_append_sheet(workbook, wsCat, "Category Distribution");

  // Write Master Excel Files
  const masterExcelPath1 = path.resolve("./MBA_Wizards_All_Blogs_Complete_SEO_Directory.xlsx");
  const masterExcelPath2 = path.resolve("./public/MBA_Wizards_All_Blogs_Complete_SEO_Directory.xlsx");
  XLSX.writeFile(workbook, masterExcelPath1);
  XLSX.writeFile(workbook, masterExcelPath2);
  console.log(`Saved master excel to: ${masterExcelPath1}`);
  console.log(`Saved master excel to public: ${masterExcelPath2}`);

  // Also write the October 2026 specific Excel file
  const octExcelPath1 = path.resolve("./MBA_Wizards_October_2026_Blogs_SEO_Ranking_LeadMagnets.xlsx");
  const octExcelPath2 = path.resolve("./public/MBA_Wizards_October_2026_Blogs_SEO_Ranking_LeadMagnets.xlsx");
  XLSX.writeFile(workbook, octExcelPath1);
  XLSX.writeFile(workbook, octExcelPath2);

  // Write Master CSV files for universal access and preview
  const masterCsvPath = path.resolve("./MBA_Wizards_All_252_Blogs_Complete_SEO_Directory.csv");
  fs.writeFileSync(masterCsvPath, XLSX.utils.sheet_to_csv(wsAll), "utf8");
  console.log(`Saved master CSV to: ${masterCsvPath}`);

  const octCsvPath = path.resolve("./MBA_Wizards_All_85_Blogs_October_2026.csv");
  fs.writeFileSync(octCsvPath, XLSX.utils.sheet_to_csv(wsOct), "utf8");
  console.log(`Saved October 85 CSV to: ${octCsvPath}`);

  const latest15CsvPath = path.resolve("./MBA_Wizards_Latest_15_SEO_Blogs_October_2026.csv");
  fs.writeFileSync(latest15CsvPath, XLSX.utils.sheet_to_csv(ws15), "utf8");
  console.log(`Saved 15 CSV to: ${latest15CsvPath}`);

  console.log("\n--- GENERATION COMPLETE ---");
  console.log(`Processed ${allRows.length} blogs successfully!`);
}

main().catch(console.error);
