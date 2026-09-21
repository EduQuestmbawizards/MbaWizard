const fs = require('fs');
const path = require('path');

const blogs = [
  {
    slug: 'best-gmat-coaching-in-gurgaon',
    badge: '🏆 #1 RANKED IN GURGAON',
    title: 'Best GMAT Coaching in Gurgaon',
    subtitle: 'Comprehensive 2026 Rankings, Faculty Pedigree & 705+ Focus Edition Blueprint',
    gradientStart: '#0f172a',
    gradientEnd: '#1e3a8a',
    accent: '#f59e0b',
    icon: '🏆'
  },
  {
    slug: 'gmat-coaching-in-gurgaon-guide',
    badge: '📘 2026 MASTER BLUEPRINT',
    title: 'GMAT Coaching in Gurgaon',
    subtitle: 'The Ultimate Guide to Syllabus, Scoring Algorithms & Cyber City Mentorship',
    gradientStart: '#091e3a',
    gradientEnd: '#172554',
    accent: '#38bdf8',
    icon: '🎯'
  },
  {
    slug: 'gmat-classes-in-gurgaon',
    badge: '🏛️ CLASSROOM & WEEKEND BATCHES',
    title: 'GMAT Classes in Gurgaon',
    subtitle: 'Weekend Executive Batches, Evening Cohorts & Direct 1-on-1 Faculty Access',
    gradientStart: '#141e30',
    gradientEnd: '#243b55',
    accent: '#10b981',
    icon: '👨‍🏫'
  },
  {
    slug: 'gmat-preparation-in-gurgaon',
    badge: '📅 100-DAY ACTION PLAN',
    title: 'GMAT Preparation in Gurgaon',
    subtitle: 'Diagnostic Roadmaps, Official GMAC Resources & 705+ Score Milestones',
    gradientStart: '#111827',
    gradientEnd: '#312e81',
    accent: '#a855f7',
    icon: '📈'
  },
  {
    slug: 'gmat-coaching-fees-in-gurgaon',
    badge: '💰 TRANSPARENT PRICING',
    title: 'GMAT Coaching Fees in Gurgaon',
    subtitle: 'Complete 2026 Fee Structure, Batch vs 1-on-1 Rates & Scholarship ROI',
    gradientStart: '#064e3b',
    gradientEnd: '#022c22',
    accent: '#34d399',
    icon: '💵'
  },
  {
    slug: 'gmat-course-fees-in-gurgaon',
    badge: '📊 COST & VALUE ANALYSIS',
    title: 'GMAT Course Fees in Gurgaon',
    subtitle: 'Comprehensive Pricing, Mock Exam Packs & GMAC Registration Cost Guide',
    gradientStart: '#1e1b4b',
    gradientEnd: '#3b0764',
    accent: '#f43f5e',
    icon: '🏷️'
  },
  {
    slug: 'gmat-online-coaching-in-gurgaon',
    badge: '💻 LIVE INTERACTIVE COHORTS',
    title: 'GMAT Online Coaching in Gurgaon',
    subtitle: 'Live 2-Way Mentorship, Cloud HD Recordings & AI Error Log Diagnostics',
    gradientStart: '#0f172a',
    gradientEnd: '#0369a1',
    accent: '#06b6d4',
    icon: '🌐'
  },
  {
    slug: 'gmat-offline-coaching-in-gurgaon',
    badge: '🏢 PHYSICAL STUDY CENTRES',
    title: 'GMAT Offline Coaching in Gurgaon',
    subtitle: 'In-Person Learning, Quiet Study Pods & Face-to-Face Mentorship at Cyber City',
    gradientStart: '#1e293b',
    gradientEnd: '#334155',
    accent: '#fbbf24',
    icon: '🏫'
  },
  {
    slug: 'online-vs-offline-gmat-coaching-in-gurgaon',
    badge: '⚖️ DETAILED COMPARISON',
    title: 'Online vs Offline GMAT Coaching',
    subtitle: 'Commute Factors, Pacing Discipline & The Hybrid Flex Model in Gurgaon',
    gradientStart: '#18181b',
    gradientEnd: '#27272a',
    accent: '#eab308',
    icon: '⚡'
  },
  {
    slug: 'gmat-coaching-for-working-professionals-in-gurgaon',
    badge: '👔 EXECUTIVE STUDY ROADMAP',
    title: 'GMAT for Working Professionals',
    subtitle: 'Managing 50+ Hour Work Weeks, Late Shifts & High-Yield Weekend Pacing',
    gradientStart: '#1e3a8a',
    gradientEnd: '#0f172a',
    accent: '#60a5fa',
    icon: '💼'
  },
  {
    slug: 'gmat-coaching-for-college-students-in-gurgaon',
    badge: '🎓 EARLY BIRD ADVANTAGE',
    title: 'GMAT for College Students',
    subtitle: '5-Year Score Validity, Deferred MBA Programs (ISB YLP) & Final Year Prep',
    gradientStart: '#701a75',
    gradientEnd: '#4c0519',
    accent: '#f472b6',
    icon: '🎓'
  },
  {
    slug: 'gmat-coaching-for-fresh-graduates-in-gurgaon',
    badge: '🚀 FAST-TRACK 735+ SCORE',
    title: 'GMAT for Fresh Graduates',
    subtitle: 'Early Career Acceleration, Global MiM / MBA Admissions & Profile Strategy',
    gradientStart: '#134e4a',
    gradientEnd: '#042f2e',
    accent: '#2dd4bf',
    icon: '🌟'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'images', 'blogs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

blogs.forEach(b => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${b.gradientStart}"/>
      <stop offset="100%" stop-color="${b.gradientEnd}"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <!-- Subtle Grid Pattern -->
  <g opacity="0.08" stroke="#ffffff" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="630"/>
    <line x1="200" y1="0" x2="200" y2="630"/>
    <line x1="300" y1="0" x2="300" y2="630"/>
    <line x1="400" y1="0" x2="400" y2="630"/>
    <line x1="500" y1="0" x2="500" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="700" y1="0" x2="700" y2="630"/>
    <line x1="800" y1="0" x2="800" y2="630"/>
    <line x1="900" y1="0" x2="900" y2="630"/>
    <line x1="1000" y1="0" x2="1000" y2="630"/>
    <line x1="1100" y1="0" x2="1100" y2="630"/>
    <line x1="0" y1="100" x2="1200" y2="100"/>
    <line x1="0" y1="200" x2="1200" y2="200"/>
    <line x1="0" y1="300" x2="1200" y2="300"/>
    <line x1="0" y1="400" x2="1200" y2="400"/>
    <line x1="0" y1="500" x2="1200" y2="500"/>
  </g>

  <!-- Brand Bar Top -->
  <rect x="80" y="60" width="1040" height="4" fill="${b.accent}"/>
  
  <!-- Top Brand Info -->
  <text x="80" y="95" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="800" fill="#ffffff" letter-spacing="2">
    MBA WIZARDS &amp; EDUQUEST | GURGAON GMAT PREP
  </text>
  <text x="1120" y="95" text-anchor="end" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="${b.accent}">
    GMAT FOCUS EDITION 2026
  </text>

  <!-- Badge -->
  <rect x="80" y="140" width="340" height="42" rx="21" fill="rgba(255,255,255,0.12)" stroke="${b.accent}" stroke-width="1.5"/>
  <text x="100" y="167" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="${b.accent}" letter-spacing="1">
    ${b.badge}
  </text>

  <!-- Main Title -->
  <text x="80" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-1">
    ${b.title}
  </text>
  <text x="80" y="325" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="800" fill="${b.accent}">
    Gurgaon Master Strategy &amp; Mentorship
  </text>

  <!-- Subtitle -->
  <text x="80" y="390" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="#e2e8f0">
    ${b.subtitle}
  </text>

  <!-- Bottom Details Box -->
  <rect x="80" y="470" width="1040" height="90" rx="14" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.15)"/>
  
  <text x="110" y="510" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="${b.accent}">
    CHIEF ACADEMIC MENTOR
  </text>
  <text x="110" y="538" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" fill="#ffffff">
    Mr. Surinder Gupta (IIT Roorkee Alumnus)
  </text>

  <text x="650" y="510" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="${b.accent}">
    CENTRES IN GURGAON
  </text>
  <text x="650" y="538" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#ffffff">
    DLF Cyber City • Golf Course Rd • MG Rd • Live Online
  </text>

  <!-- Large Icon Watermark Right -->
  <text x="1000" y="320" font-size="120" opacity="0.25" text-anchor="middle">
    ${b.icon}
  </text>
</svg>`;

  fs.writeFileSync(path.join(outputDir, `${b.slug}.svg`), svg);
});

console.log('Successfully generated 12 custom SVG cover images for GMAT Gurgaon blogs!');
