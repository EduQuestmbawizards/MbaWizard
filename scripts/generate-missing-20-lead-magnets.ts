import fs from "fs";
import path from "path";
import { jsPDF } from "jspdf";
import { all15MasterBlogs } from "../src/lib/blog";

const lmDir = path.join(__dirname, "..", "public", "lead-magnets");
if (!fs.existsSync(lmDir)) {
  fs.mkdirSync(lmDir, { recursive: true });
}

// Find the 20 blogs without PDFs
const missingBlogs = all15MasterBlogs.filter(b => {
  const pdfPath = path.join(lmDir, `${b.slug}-guide.pdf`);
  return !fs.existsSync(pdfPath);
});

console.log(`Generating PDFs for ${missingBlogs.length} missing blogs...`);

const primaryColor = [16, 37, 66];   // Navy
const goldColor = [212, 175, 55];    // Gold
const darkText = [33, 37, 41];

missingBlogs.forEach((b, idx) => {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  
  // Header Banner
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 32, "F");

  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("MBA WIZARDS", 15, 14);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("IIT Roorkee Alum Mentorship | 25+ Years Test Prep & Admissions", 15, 22);

  // Gold accent bar
  doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.rect(0, 32, 210, 2, "F");

  // Title
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  const titleLines = doc.splitTextToSize(b.title, 180);
  doc.text(titleLines.slice(0, 2), 15, 45);

  // Subtitle / Lead Magnet Badge
  doc.setTextColor(100, 100, 100);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.text("Official Executive Strategy & Diagnostic Lead Magnet Guide", 15, 58);

  // Section 1: Executive Overview & Key Insights
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(15, 65, 180, 45, 3, 3, "F");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("1. Executive Summary & Diagnostic Blueprint", 20, 75);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const excerptLines = doc.splitTextToSize(b.excerpt || b.metaDescription || "Comprehensive strategy guide by MBA Wizards faculty.", 170);
  doc.text(excerptLines.slice(0, 4), 20, 83);

  // Section 2: Core Headings / Strategic Framework
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("2. Key Pillars Analyzed in This Master Guide", 15, 122);

  const h2s = b.body ? b.body.filter((x: any) => x.type === "heading" && x.level === 2).map((x: any) => x.text) : [];
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  let yPos = 130;
  h2s.slice(0, 5).forEach((h, hIdx) => {
    doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.circle(18, yPos - 1, 1.2, "F");
    const hText = doc.splitTextToSize(`${hIdx + 1}. ${h}`, 168);
    doc.text(hText.slice(0, 2), 22, yPos);
    yPos += hText.length > 1 ? 10 : 7;
  });

  // Section 3: 5-Step Action Checklist
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(15, yPos + 4, 180, 52, 3, 3, "F");

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("3. Actionable Preparation Checklist", 20, yPos + 14);

  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const checklist = [
    "[  ] Step 1: Benchmark baseline performance using official diagnostic test algorithms.",
    "[  ] Step 2: Categorize error patterns into conceptual, pacing, and executive stamina traps.",
    "[  ] Step 3: Implement 4-bucket review matrix on every missed or time-pressured question.",
    "[  ] Step 4: Schedule live simulated test sessions matching exact exam-day fatigue conditions.",
    "[  ] Step 5: Consult with senior IIT Roorkee alumni faculty for personalized trajectory calibration."
  ];
  checklist.forEach((item, cIdx) => {
    doc.text(item, 22, yPos + 22 + (cIdx * 6));
  });

  // Footer & Call to Action
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 268, 210, 29, "F");

  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("BOOK YOUR FREE 1-ON-1 MBA & TEST PREP STRATEGY CONSULTATION", 15, 276);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Website: https://www.mbawizards.co.in | Lead Mentor: Surinder Gupta (IIT Roorkee)", 15, 283);
  doc.text("Hub: Sector 14 & DLF Phase 4, Gurgaon, NCR | Admissions Hotline: contact@mbawizards.co.in", 15, 289);

  const outputPath = path.join(lmDir, `${b.slug}-guide.pdf`);
  doc.save(outputPath);
  console.log(`[${idx + 1}/${missingBlogs.length}] Created: ${b.slug}-guide.pdf`);
});

console.log("Successfully generated all missing lead magnet PDFs!");
