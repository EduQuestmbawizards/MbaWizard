const fs = require('fs');
const path = require('path');

const BASE_URL = "https://www.mbawizards.co.in";

function parseTsArray(filePath, varName) {
  if (!fs.existsSync(filePath)) return [];
  const code = fs.readFileSync(filePath, 'utf8');
  const idx = code.indexOf(`export const ${varName}`);
  if (idx === -1) return [];
  const equalIdx = code.indexOf('=', idx);
  const startBracket = code.indexOf('[', equalIdx);
  let depth = 0;
  let endBracket = -1;
  for (let i = startBracket; i < code.length; i++) {
    if (code[i] === '[') depth++;
    else if (code[i] === ']') {
      depth--;
      if (depth === 0) {
        endBracket = i;
        break;
      }
    }
  }
  if (endBracket !== -1) {
    const arrayCode = code.slice(startBracket, endBracket + 1);
    try {
      return (new Function('return ' + arrayCode))();
    } catch (e) {
      console.error(`Error executing function for ${varName}:`, e);
    }
  }
  return [];
}

// 1. School & Video (26-40)
const schoolVideo = parseTsArray(path.join(__dirname, '../src/data/mba-interview-school-video-blogs.ts'), 'mbaInterviewSchoolVideoBlogs');

// 2. Interview Mastery (21-25)
const interviewMastery = parseTsArray(path.join(__dirname, '../src/data/mba-interview-mastery-blogs.ts'), 'mbaInterviewMasteryBlogs');

// 3. Interview Strategy (16-20)
const interviewStrategy = parseTsArray(path.join(__dirname, '../src/data/mba-interview-strategy-blogs.ts'), 'mbaInterviewStrategyBlogs');

// 4. Score Improvement (11-15)
const scoreImprovement = parseTsArray(path.join(__dirname, '../src/data/gmat-score-improvement-blogs.ts'), 'gmatScoreImprovementBlogs');

// 5. Mock Analytics (6-10)
const mockAnalytics = parseTsArray(path.join(__dirname, '../src/data/gmat-mock-analytics-blogs.ts'), 'gmatMockAnalyticsBlogs');

// 6. Gurgaon 50 Pillars (1-50)
const gurgaonBlogs = parseTsArray(path.join(__dirname, '../src/data/gmat-gurgaon-blogs.ts'), 'gmatGurgaonBlogs');

// Load topics JSON
const topicsJsonPath = path.join(__dirname, 'all_50_topics.json');
let rawTopics = [];
if (fs.existsSync(topicsJsonPath)) {
  rawTopics = JSON.parse(fs.readFileSync(topicsJsonPath, 'utf8'));
}
const topicsBySlug = {};
rawTopics.forEach(t => {
  topicsBySlug[(t["Suggested Slug"] || "").trim()] = t;
});

// 7. Local Blogs
const localBlogs = parseTsArray(path.join(__dirname, '../src/data/blogs-data.ts'), 'blogPosts');

// 8. WordPress Blogs
const wpPath = path.join(__dirname, '../src/data/wp-blogs.json');
let wpBlogs = [];
if (fs.existsSync(wpPath)) {
  wpBlogs = JSON.parse(fs.readFileSync(wpPath, 'utf8'));
}

console.log(`Extracted:
- School & Video (26-40): ${schoolVideo.length}
- Interview Mastery (21-25): ${interviewMastery.length}
- Interview Strategy (16-20): ${interviewStrategy.length}
- Score Improvement (11-15): ${scoreImprovement.length}
- Mock Analytics (6-10): ${mockAnalytics.length}
- Gurgaon 50 Pillars (1-50): ${gurgaonBlogs.length}
- Local Blogs: ${localBlogs.length}
- WordPress Blogs: ${wpBlogs.length}
`);

function normalize(b, cluster, isWp = false, isLocal = false) {
  const slug = (b.slug || "").trim();
  const title = (b.title || "").trim();
  const subtitle = (b.subtitle || "").trim();
  const excerpt = (b.excerpt || "").trim();
  const metaTitle = (b.metaTitle || `${title} — MBA Wizards`).trim();
  const metaDesc = (b.metaDescription || excerpt).trim();
  const canonicalUrl = `${BASE_URL}/blogs/${slug}`;
  const coverImage = (b.coverImage || `/images/blogs/${slug}.svg`).trim();

  let authorName = "Mr. Surinder Gupta (IIT Roorkee)";
  if (b.author) {
    if (typeof b.author === "string") authorName = b.author;
    else if (b.author.name) authorName = b.author.name;
  } else if (b.authorName) {
    authorName = b.authorName;
  }

  let category = b.category || cluster;
  if (Array.isArray(b.categories) && b.categories.length > 0) {
    category = b.categories[0];
  }

  let tagsList = b.tags || [];
  let tagsStr = Array.isArray(tagsList) ? tagsList.join(", ") : String(tagsList);
  let primaryKw = Array.isArray(tagsList) && tagsList.length > 0 ? tagsList[0] : category;

  const publishedAt = b.publishedAt || b.publishedDate || "2026-10-02";
  let readTime = b.readTime || 10;
  if (typeof readTime === "string") {
    const nums = readTime.match(/\d+/);
    readTime = nums ? parseInt(nums[0], 10) : 10;
  }

  let h1 = title;
  const h2List = [];
  const h3List = [];
  let totalSections = 0;

  if (Array.isArray(b.body)) {
    b.body.forEach(block => {
      if (block && typeof block === "object") {
        if (block.type === "heading") {
          const level = block.level || 2;
          const text = (block.text || "").trim();
          if (level === 2) {
            h2List.push(text);
            totalSections++;
          } else if (level === 3) {
            h3List.push(text);
          }
        } else if (["table", "faq", "cta", "quote"].includes(block.type)) {
          totalSections++;
        }
      }
    });
  }

  if (isLocal && Array.isArray(b.content)) {
    totalSections = b.content.length;
    b.content.forEach((p, idx) => {
      const firstLine = p.split("\n")[0];
      if (firstLine.length < 80) {
        h2List.push(`${idx + 1}. ${firstLine}`);
      }
    });
  }

  if (isWp && typeof b.content === "string") {
    const html = b.content;
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) h1 = h1Match[1].replace(/<[^>]+>/g, "").trim();

    const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
    h2Matches.forEach(m => {
      const cleanH = m[1].replace(/<[^>]+>/g, "").trim();
      if (cleanH) h2List.push(cleanH);
    });

    const h3Matches = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)];
    h3Matches.forEach(m => {
      const cleanH = m[1].replace(/<[^>]+>/g, "").trim();
      if (cleanH) h3List.push(cleanH);
    });
    totalSections = Math.max(h2List.length, 1);
  }

  if (topicsBySlug[slug]) {
    const tInfo = topicsBySlug[slug];
    if (tInfo["Primary Keyword"]) primaryKw = tInfo["Primary Keyword"].trim();
    if (tInfo["Suggested H1"]) h1 = tInfo["Suggested H1"].trim();
  }

  const h2Formatted = h2List.length > 0 ? h2List.map((h, i) => (/^\d+\./.test(h) ? h : `${i + 1}. ${h}`)).join("\n") : title;
  const h3Formatted = h3List.length > 0 ? h3List.map(h => `• ${h}`).join("\n") : "N/A";

  const leadMagnetPdf = `/lead-magnets/${slug}-guide.pdf`;

  return {
    slug,
    title,
    subtitle,
    cluster,
    category,
    h1,
    h2_headings: h2Formatted,
    h3_headings: h3Formatted,
    primary_keyword: primaryKw,
    secondary_keywords: tagsStr,
    meta_title: metaTitle,
    meta_description: metaDesc,
    canonical_tag: canonicalUrl,
    lead_magnet_pdf: leadMagnetPdf,
    cover_image: coverImage,
    author: authorName,
    published_at: String(publishedAt).slice(0, 10),
    read_time_mins: readTime,
    total_sections_count: Math.max(h2List.length, totalSections, 1),
    live_url: canonicalUrl
  };
}

const allCatalog = [];

// 1. School & Video (26-40)
schoolVideo.forEach(b => allCatalog.push(normalize(b, "MBA Admissions & Interviews (26-40)")));

// 2. Mastery (21-25)
interviewMastery.forEach(b => allCatalog.push(normalize(b, "MBA Interview Mastery (21-25)")));

// 3. Strategy (16-20)
interviewStrategy.forEach(b => allCatalog.push(normalize(b, "MBA Interview Strategy (16-20)")));

// 4. Score Improvement (11-15)
scoreImprovement.forEach(b => allCatalog.push(normalize(b, "GMAT Score Improvement (11-15)")));

// 5. Mock Analytics (6-10)
mockAnalytics.forEach(b => allCatalog.push(normalize(b, "GMAT Mock Analytics (6-10)")));

// 6. Gurgaon 50 Pillars (1-50)
gurgaonBlogs.forEach(b => allCatalog.push(normalize(b, "GMAT Gurgaon 50 Pillars (1-50)")));

// 7. Local Blogs
localBlogs.forEach(b => allCatalog.push(normalize(b, "Core Editorial Blogs", false, true)));

// 8. WordPress Archive
const seenSlugs = new Set(allCatalog.map(i => i.slug));
wpBlogs.forEach(b => {
  if (b.slug && !seenSlugs.has(b.slug)) {
    seenSlugs.add(b.slug);
    allCatalog.push(normalize(b, "WordPress Archive", true, false));
  }
});

console.log(`Total Master Unified Catalog Articles: ${allCatalog.length}`);

const outJsonPath = path.join(__dirname, 'all_blogs_data_unified.json');
fs.writeFileSync(outJsonPath, JSON.stringify(allCatalog, null, 2), 'utf8');
console.log(`Saved unified data to ${outJsonPath}`);
