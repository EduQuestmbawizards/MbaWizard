const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  WidthType,
  ShadingType,
  Header,
  Footer,
  PageNumber,
  convertInchesToTwip
} = require('docx');

// Load blog data
const blogsFilePath = path.join(__dirname, '../src/data/gmat-gurgaon-blogs.ts');
const fileContent = fs.readFileSync(blogsFilePath, 'utf8');

const match = fileContent.match(/export const gmatGurgaonBlogs: GurgaonBlogPost\[\] = (\[[\s\S]*\]);\s*$/);
if (!match) {
  console.error("Could not parse gmatGurgaonBlogs");
  process.exit(1);
}

const blogs = JSON.parse(match[1]);
const rawTopics = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_50_topics.json'), 'utf8'));

const topicsBySlug = {};
rawTopics.forEach(t => {
  topicsBySlug[t["Suggested Slug"].trim()] = t;
});

// Color Scheme Constants
const NAVY = "0F172A";
const GOLD = "D4AF37";
const DARK_SLATE = "1E293B";
const LIGHT_BG = "F8FAFC";
const BORDER_COLOR = "CBD5E1";
const ACCENT_BLUE = "0284C7";

const createHeading1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 450, after: 200 },
  children: [
    new TextRun({
      text,
      bold: true,
      size: 30, // 15pt
      color: NAVY,
      font: "Calibri"
    })
  ]
});

const createHeading2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 280, after: 140 },
  children: [
    new TextRun({
      text,
      bold: true,
      size: 24, // 12pt
      color: GOLD,
      font: "Calibri"
    })
  ]
});

const createHeading3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  spacing: { before: 180, after: 90 },
  children: [
    new TextRun({
      text,
      bold: true,
      size: 21, // 10.5pt
      color: ACCENT_BLUE,
      font: "Calibri"
    })
  ]
});

const createParagraph = (text, bold = false, italic = false, color = DARK_SLATE) => new Paragraph({
  spacing: { before: 70, after: 70, line: 260 },
  children: [
    new TextRun({
      text,
      bold,
      italics: italic,
      size: 19, // 9.5pt
      color,
      font: "Calibri"
    })
  ]
});

const createBullet = (label, text) => new Paragraph({
  bullet: { level: 0 },
  spacing: { before: 50, after: 50, line: 250 },
  children: [
    new TextRun({
      text: label ? `${label}: ` : "",
      bold: !!label,
      size: 19,
      color: NAVY,
      font: "Calibri"
    }),
    new TextRun({
      text,
      size: 19,
      color: DARK_SLATE,
      font: "Calibri"
    })
  ]
});

const createCalloutBox = (title, text) => new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          shading: { fill: "F1F5F9", type: ShadingType.CLEAR },
          margins: { top: convertInchesToTwip(0.12), bottom: convertInchesToTwip(0.12), left: convertInchesToTwip(0.15), right: convertInchesToTwip(0.15) },
          borders: {
            left: { style: BorderStyle.SINGLE, size: 24, color: GOLD },
            top: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
          },
          children: [
            new Paragraph({
              spacing: { after: 50 },
              children: [
                new TextRun({ text: `📌 ${title}`, bold: true, size: 20, color: NAVY, font: "Calibri" })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({ text, size: 19, color: "334155", font: "Calibri" })
              ]
            })
          ]
        })
      ]
    })
  ]
});

function createDetailTable(rowsData) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: rowsData.map(([label, val], idx) => new TableRow({
      children: [
        new TableCell({
          width: { size: 28, type: WidthType.PERCENTAGE },
          shading: { fill: idx % 2 === 0 ? "F8FAFC" : "FFFFFF", type: ShadingType.CLEAR },
          margins: { top: convertInchesToTwip(0.06), bottom: convertInchesToTwip(0.06), left: convertInchesToTwip(0.09), right: convertInchesToTwip(0.09) },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
            bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
            left: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
            right: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR }
          },
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: label, bold: true, size: 18, color: NAVY, font: "Calibri" })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 72, type: WidthType.PERCENTAGE },
          shading: { fill: idx % 2 === 0 ? "F8FAFC" : "FFFFFF", type: ShadingType.CLEAR },
          margins: { top: convertInchesToTwip(0.06), bottom: convertInchesToTwip(0.06), left: convertInchesToTwip(0.09), right: convertInchesToTwip(0.09) },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
            bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
            left: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
            right: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR }
          },
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: val || "N/A", size: 18, color: DARK_SLATE, font: "Calibri" })
              ]
            })
          ]
        })
      ]
    }))
  });
}

const docChildren = [];

// ==========================================
// 1. COVER PAGE
// ==========================================
docChildren.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 800, after: 150 },
    children: [
      new TextRun({
        text: "MBA WIZARDS & EDUQUEST GURGAON",
        bold: true,
        size: 34,
        color: GOLD,
        font: "Calibri"
      })
    ]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [
      new TextRun({
        text: "50 GMAT GURGAON SEO BLOGS & LEAD MAGNETS",
        bold: true,
        size: 44,
        color: NAVY,
        font: "Calibri"
      })
    ]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 500 },
    children: [
      new TextRun({
        text: "Master Technical SEO Documentation, Live URLs, H1/H2 Heading Architectures, Meta Data, Primary & Long-Tail Keywords, and Lead Magnet PDF Catalog",
        italics: true,
        size: 22,
        color: DARK_SLATE,
        font: "Calibri"
      })
    ]
  }),
  createCalloutBox(
    "Executive Overview",
    "This document covers all 50 high-ranking GMAT Gurgaon SEO blog posts published on www.mbawizards.co.in. For every blog post, this document provides the exact Live URL, H1 Title, Meta Title, Meta Description, Primary Keyword, Long-Tail Keywords, H2 Subheadings, Search Intent, Word Count, and Tailored Lead Magnet PDF details."
  ),
  new Paragraph({
    pageBreakBefore: true,
    children: []
  })
);

// ==========================================
// 2. MASTER DIRECTORY SUMMARY TABLE
// ==========================================
docChildren.push(
  createHeading1("Master Directory Table: All 50 GMAT Gurgaon Blogs"),
  createParagraph("Quick index mapping each blog's S.No, Topic Name, Live URL, Primary Keyword, and Lead Magnet PDF:")
);

const summaryTableRows = [
  new TableRow({
    children: ["#", "Blog Topic", "Live URL", "Primary Keyword", "Lead Magnet PDF File"].map(h => new TableCell({
      shading: { fill: NAVY, type: ShadingType.CLEAR },
      margins: { top: convertInchesToTwip(0.08), bottom: convertInchesToTwip(0.08), left: convertInchesToTwip(0.08), right: convertInchesToTwip(0.08) },
      children: [
        new Paragraph({
          children: [new TextRun({ text: h, bold: true, color: "FFFFFF", size: 17, font: "Calibri" })]
        })
      ]
    }))
  })
];

blogs.forEach((b, idx) => {
  const raw = topicsBySlug[b.slug] || {};
  const pk = raw["Primary Keyword"] || b.tags[0] || "";
  const leadPdf = `${b.slug}-guide.pdf`;
  const url = `https://www.mbawizards.co.in/blogs/${b.slug}`;

  summaryTableRows.push(
    new TableRow({
      children: [
        String(idx + 1),
        b.title.split(':')[0],
        url,
        pk,
        leadPdf
      ].map((val, cIdx) => new TableCell({
        width: cIdx === 0 ? { size: 6, type: WidthType.PERCENTAGE } : cIdx === 1 ? { size: 28, type: WidthType.PERCENTAGE } : cIdx === 2 ? { size: 26, type: WidthType.PERCENTAGE } : cIdx === 3 ? { size: 22, type: WidthType.PERCENTAGE } : { size: 18, type: WidthType.PERCENTAGE },
        shading: { fill: idx % 2 === 0 ? "F8FAFC" : "FFFFFF", type: ShadingType.CLEAR },
        margins: { top: convertInchesToTwip(0.05), bottom: convertInchesToTwip(0.05), left: convertInchesToTwip(0.07), right: convertInchesToTwip(0.07) },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
          left: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
          right: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR }
        },
        children: [
          new Paragraph({
            children: [new TextRun({ text: val, size: 15, color: cIdx === 2 ? ACCENT_BLUE : DARK_SLATE, font: "Calibri" })]
          })
        ]
      }))
    })
  );
});

docChildren.push(
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: summaryTableRows
  }),
  new Paragraph({
    pageBreakBefore: true,
    children: []
  })
);

// ==========================================
// 3. COMPLETE DETAILS FOR ALL 50 BLOGS
// ==========================================
blogs.forEach((blog, bIdx) => {
  const raw = topicsBySlug[blog.slug] || {};
  const pk = raw["Primary Keyword"] || blog.tags[0] || "";
  const longTails = raw["Long-Tail Keywords"] || "N/A";
  const semKw = raw["Secondary / Semantic Keywords"] || "N/A";
  const intent = raw["Search Intent"] || "Commercial / Informational";
  const stratNote = raw["Content Strategy Note"] || "Pillar / Cluster SEO Content";
  const h1Tag = raw["Suggested H1"] || blog.title.split(':')[0];
  const url = `https://www.mbawizards.co.in/blogs/${blog.slug}`;
  const pdfFilename = `${blog.slug}-guide.pdf`;
  const pdfUrl = `https://www.mbawizards.co.in/lead-magnets/${pdfFilename}`;

  // Extract all H2 headings from blog body
  const h2List = [];
  const faqList = [];
  blog.body.forEach(block => {
    if (block.type === "heading") {
      h2List.push(block.text);
    } else if (block.type === "faq") {
      block.items.forEach(f => faqList.push(f));
    }
  });

  const metadataRows = [
    ["Blog S.No & Topic Name", `#${bIdx + 1} — ${raw["Topic"] || h1Tag}`],
    ["Live Blog URL", url],
    ["Main Article Title", blog.title],
    ["H1 Tag (Used in Page)", h1Tag],
    ["Meta Title (SEO)", blog.metaTitle],
    ["Meta Description (SEO)", blog.metaDescription],
    ["Primary / Focus Keyword", pk],
    ["Long-Tail Keywords Used", longTails],
    ["Secondary / LSI Keywords", semKw],
    ["Search Intent & Target Audience", intent],
    ["SEO Content Strategy Note", stratNote],
    ["Word Count & Sections Count", `3,000+ Words | ${h2List.length} Headings & Structured Modules`],
    ["Category & Tags", `${blog.category} | Tags: ${blog.tags.join(', ')}`],
    ["Author & Credentials", `${blog.author.name} — ${blog.author.role}`],
    ["Lead Magnet PDF Title", `Download Free ${h1Tag} Blueprint (PDF)`],
    ["Lead Magnet PDF File Name", pdfFilename],
    ["Lead Magnet Download Link", pdfUrl],
    ["Lead Magnet Modules Included", "Personalized Profile Cover, 2026 Focus Score Architecture, 100-Day Roadmap, Formula Cheat Sheet, 4 Pillars of Prep, Official Resource Checklist, and Gurgaon 1-on-1 Consultation Booking with Surinder Gupta"],
    ["Primary Internal Links", "/gmat-coaching, /gmat-preparation, /gmat-classes, /contact-us"]
  ];

  docChildren.push(
    createHeading1(`Blog #${bIdx + 1}: ${h1Tag}`),
    createHeading2("1. SEO Strategy & Master Metadata Details"),
    createDetailTable(metadataRows),
    new Paragraph({ spacing: { before: 180 }, children: [] }),
    createHeading2("2. H2 Subheadings Used (Complete Structural Breakdown)"),
    createParagraph(`The following ${h2List.length} distinct H2 section headings structure the 3,000+ word deep-dive content:`)
  );

  h2List.forEach((h2Text, h2Idx) => {
    docChildren.push(createBullet(`Section ${h2Idx + 1}`, h2Text));
  });

  if (faqList.length > 0) {
    docChildren.push(
      new Paragraph({ spacing: { before: 150 }, children: [] }),
      createHeading3(`Frequently Asked Questions (FAQs) Included (${faqList.length} Q&As)`)
    );
    faqList.forEach(faq => {
      docChildren.push(createBullet(`Q: ${faq.question}`, `A: ${faq.answer}`));
    });
  }

  docChildren.push(
    new Paragraph({ spacing: { before: 180 }, children: [] }),
    createCalloutBox(
      `Lead Magnet PDF Summary for Blog #${bIdx + 1}`,
      `• PDF File: ${pdfFilename}\n• Web Location: ${pdfUrl}\n• Client Generation: Triggered via LeadMagnetModal upon form submit with candidate's details (${pk}).`
    ),
    new Paragraph({
      pageBreakBefore: true,
      children: []
    })
  );
});

// Construct Document
const doc = new Document({
  styles: {
    default: {
      document: {
        run: {
          font: "Calibri",
          size: 19
        }
      }
    }
  },
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(0.75),
            bottom: convertInchesToTwip(0.75),
            left: convertInchesToTwip(0.75),
            right: convertInchesToTwip(0.75)
          }
        }
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "MBA Wizards & EduQuest | 50 GMAT Gurgaon SEO Blogs Complete Documentation",
                  size: 15,
                  color: "94A3B8",
                  font: "Calibri"
                })
              ]
            })
          ]
        })
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Page ",
                  size: 15,
                  color: "94A3B8",
                  font: "Calibri"
                }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  size: 15,
                  color: "94A3B8",
                  font: "Calibri"
                }),
                new TextRun({
                  text: " of ",
                  size: 15,
                  color: "94A3B8",
                  font: "Calibri"
                }),
                new TextRun({
                  children: [PageNumber.TOTAL_PAGES],
                  size: 15,
                  color: "94A3B8",
                  font: "Calibri"
                })
              ]
            })
          ]
        })
      },
      children: docChildren
    }
  ]
});

const outputPath1 = path.join(__dirname, '../GMAT_Gurgaon_50_Blogs_Complete_SEO_Documentation.docx');
const outputPath2 = path.join(__dirname, '../public/GMAT_Gurgaon_50_Blogs_Complete_SEO_Documentation.docx');
const desktopPath = path.join('C:/Users/priya/OneDrive/Desktop', 'GMAT_Gurgaon_50_Blogs_Complete_SEO_Documentation.docx');

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath1, buffer);
  fs.writeFileSync(outputPath2, buffer);
  try {
    fs.writeFileSync(desktopPath, buffer);
    console.log(`Saved copy directly to Desktop: ${desktopPath}`);
  } catch (err) {
    console.log(`Could not write directly to desktop: ${err.message}`);
  }
  console.log(`Successfully generated Complete SEO Word Documentation!`);
  console.log(`Main file: ${outputPath1} (${(buffer.length / 1024).toFixed(1)} KB)`);
});
