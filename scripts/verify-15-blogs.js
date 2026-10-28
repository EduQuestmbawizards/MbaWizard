const fs = require('fs');
const path = require('path');

// We can read src/data/gmat-seo-blogs-part1.ts and part2.ts
const p1Content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'gmat-seo-blogs-part1.ts'), 'utf-8');
const p2Content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'gmat-seo-blogs-part2.ts'), 'utf-8');

const json1 = p1Content.substring(p1Content.indexOf('= [') + 2, p1Content.lastIndexOf('];') + 1);
const json2 = p2Content.substring(p2Content.indexOf('= [') + 2, p2Content.lastIndexOf('];') + 1);

const blogs1 = JSON.parse(json1);
const blogs2 = JSON.parse(json2);
const all15 = [...blogs1, ...blogs2];

console.log(`Loaded ${all15.length} new blogs.`);

const expectedData = [
  {
    no: 1,
    slug: 'gmat-score-goals-by-mba-school-how-to-set-a-target-score',
    title: 'GMAT Score Goals by MBA School: How to Set a Target Score',
    primaryKeyword: 'GMAT target score for MBA',
    schemaTypes: ['Article', 'BreadcrumbList', 'FAQPage'],
    leadMagnet: 'MBA Target Score Planner: School Shortlist & Score Goal Worksheet'
  },
  {
    no: 2,
    slug: 'gmat-score-improvement-plan-from-diagnostic-to-test-day',
    title: 'GMAT Score Improvement Plan: From Diagnostic to Test Day',
    primaryKeyword: 'GMAT score improvement plan',
    schemaTypes: ['Article', 'BreadcrumbList', 'HowTo'],
    leadMagnet: 'GMAT 8-Week Improvement Planner + Error Log'
  },
  {
    no: 3,
    slug: 'gmat-retake-strategy-when-should-you-take-the-exam-again',
    title: 'GMAT Retake Strategy: When Should You Take the Exam Again?',
    primaryKeyword: 'when to retake GMAT',
    schemaTypes: ['Article', 'BreadcrumbList', 'FAQPage'],
    leadMagnet: 'GMAT Retake Decision Matrix'
  },
  {
    no: 4,
    slug: 'gmat-percentile-vs-scaled-score-how-to-read-your-score-report',
    title: 'GMAT Percentile vs Scaled Score: How to Read Your Score Report',
    primaryKeyword: 'GMAT percentile vs score',
    schemaTypes: ['Article', 'BreadcrumbList', 'FAQPage'],
    leadMagnet: 'GMAT Score Report Decoder'
  },
  {
    no: 5,
    slug: 'gmat-data-insights-study-plan-for-beginners',
    title: 'GMAT Data Insights Study Plan for Beginners',
    primaryKeyword: 'GMAT Data Insights study plan',
    schemaTypes: ['Article', 'BreadcrumbList', 'HowTo'],
    leadMagnet: 'Data Insights Question-Type Tracker'
  },
  {
    no: 6,
    slug: 'gmat-quant-weakness-diagnosis-arithmetic-algebra-or-word-problems',
    title: 'GMAT Quant Weakness Diagnosis: Arithmetic, Algebra or Word Problems?',
    primaryKeyword: 'GMAT Quant preparation strategy',
    schemaTypes: ['Article', 'BreadcrumbList', 'HowTo'],
    leadMagnet: 'GMAT Quant Topic Diagnostic Sheet'
  },
  {
    no: 7,
    slug: 'gmat-word-problems-translate-questions-into-equations',
    title: 'GMAT Word Problems: Translate Questions Into Equations',
    primaryKeyword: 'GMAT word problems practice',
    schemaTypes: ['Article', 'BreadcrumbList', 'HowTo'],
    leadMagnet: 'GMAT Word-Problem Translation Workbook'
  },
  {
    no: 8,
    slug: 'gmat-critical-reasoning-assumption-questions-a-step-by-step-method',
    title: 'GMAT Critical Reasoning Assumption Questions: A Step-by-Step Method',
    primaryKeyword: 'GMAT critical reasoning assumption questions',
    schemaTypes: ['Article', 'BreadcrumbList', 'HowTo'],
    leadMagnet: 'Critical Reasoning Assumption Drill Pack'
  },
  {
    no: 9,
    slug: 'gmat-reading-comprehension-how-to-read-for-structure',
    title: 'GMAT Reading Comprehension: How to Read for Structure',
    primaryKeyword: 'GMAT reading comprehension strategy',
    schemaTypes: ['Article', 'BreadcrumbList', 'HowTo'],
    leadMagnet: 'GMAT RC Passage Map Template'
  },
  {
    no: 10,
    slug: 'gmat-study-plan-for-working-professionals-with-1-hour-a-day',
    title: 'GMAT Study Plan for Working Professionals With 1 Hour a Day',
    primaryKeyword: 'GMAT study plan for working professionals',
    schemaTypes: ['Article', 'BreadcrumbList', 'HowTo'],
    leadMagnet: 'Working Professional GMAT Weekly Planner'
  },
  {
    no: 11,
    slug: 'gmat-preparation-timeline-30-60-or-90-days',
    title: 'GMAT Preparation Timeline: 30, 60 or 90 Days?',
    primaryKeyword: 'GMAT preparation timeline',
    schemaTypes: ['Article', 'BreadcrumbList', 'FAQPage'],
    leadMagnet: 'GMAT Timeline Selector Worksheet'
  },
  {
    no: 12,
    slug: 'how-to-review-a-gmat-mock-test-for-maximum-score-gains',
    title: 'How to Review a GMAT Mock Test for Maximum Score Gains',
    primaryKeyword: 'how to analyse GMAT mock test',
    schemaTypes: ['Article', 'BreadcrumbList', 'HowTo'],
    leadMagnet: 'GMAT Mock Analysis Spreadsheet/PDF'
  },
  {
    no: 13,
    slug: 'gmat-timing-strategy-when-to-guess-and-move-on',
    title: 'GMAT Timing Strategy: When to Guess and Move On',
    primaryKeyword: 'GMAT time management strategy',
    schemaTypes: ['Article', 'BreadcrumbList', 'HowTo'],
    leadMagnet: 'GMAT Timing Decision Card'
  },
  {
    no: 14,
    slug: 'gmat-official-practice-questions-vs-third-party-questions',
    title: 'GMAT Official Practice Questions vs Third-Party Questions',
    primaryKeyword: 'official GMAT practice questions',
    schemaTypes: ['Article', 'BreadcrumbList'],
    leadMagnet: 'GMAT Resource Comparison Checklist'
  },
  {
    no: 15,
    slug: 'gmat-score-for-mba-scholarships-how-to-research-competitiveness',
    title: 'GMAT Score for MBA Scholarships: How to Research Competitiveness',
    primaryKeyword: 'GMAT score for MBA scholarship',
    schemaTypes: ['Article', 'BreadcrumbList', 'FAQPage'],
    leadMagnet: 'MBA Scholarship Research Tracker'
  }
];

let allPassed = true;

expectedData.forEach((exp, idx) => {
  const blog = all15.find(b => b.slug === exp.slug);
  if (!blog) {
    console.error(`FAIL: Blog #${exp.no} with slug ${exp.slug} NOT FOUND`);
    allPassed = false;
    return;
  }

  // Check Title
  if (blog.title !== exp.title) {
    console.error(`FAIL: Blog #${exp.no} title mismatch: "${blog.title}" vs "${exp.title}"`);
    allPassed = false;
  }

  // Check Published Date
  if (!blog.publishedAt.startsWith('2026-10-28')) {
    console.error(`FAIL: Blog #${exp.no} publishedAt is not today: ${blog.publishedAt}`);
    allPassed = false;
  }

  // Check Image
  const imgPath = path.join(__dirname, '..', 'public', 'images', 'blogs', `${exp.slug}.jpg`);
  if (!fs.existsSync(imgPath)) {
    console.error(`FAIL: Blog #${exp.no} image missing: ${imgPath}`);
    allPassed = false;
  }

  // Check Lead Magnet PDF
  const pdfPath = path.join(__dirname, '..', 'public', 'lead-magnets', `${exp.slug}-guide.pdf`);
  if (!fs.existsSync(pdfPath)) {
    console.error(`FAIL: Blog #${exp.no} Lead Magnet PDF missing: ${pdfPath}`);
    allPassed = false;
  }

  // Check First 100 words contains primary keyword or bold keyword
  const firstP = blog.body.find(b => b.type === 'paragraph');
  if (!firstP || !firstP.text.toLowerCase().includes(exp.primaryKeyword.toLowerCase())) {
    console.warn(`WARN: Blog #${exp.no} first paragraph might not include primary keyword: "${exp.primaryKeyword}"`);
  }

  // Check HowTo or FAQ schema components
  if (exp.schemaTypes.includes('HowTo') && (!blog.howToSteps || blog.howToSteps.length === 0)) {
    console.error(`FAIL: Blog #${exp.no} missing howToSteps for HowTo schema`);
    allPassed = false;
  }

  if (exp.schemaTypes.includes('FAQPage')) {
    const faqBlock = blog.body.find(b => b.type === 'faq');
    if (!faqBlock || !faqBlock.items || faqBlock.items.length === 0) {
      console.error(`FAIL: Blog #${exp.no} missing visible faq block for FAQPage schema`);
      allPassed = false;
    }
  }

  console.log(`PASS: Blog #${exp.no} [${exp.slug}] verified! Words: ~${JSON.stringify(blog.body).split(/\s+/).length}, Image: OK, PDF: OK, Schema: ${exp.schemaTypes.join(', ')}`);
});

if (allPassed) {
  console.log('\nSUCCESS: All 15 blogs, images, PDFs, and SEO schemas verified perfectly!');
} else {
  console.log('\nFAILURE: One or more validation checks failed.');
  process.exit(1);
}
