const fs = require('fs');
const path = require('path');

// Load all 50 topics
const rawTopics = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_50_topics.json'), 'utf8'));
const outputDir = path.join(__dirname, '../public/images/blogs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Color palettes for sleek modern cards
const palettes = [
  { start: '#0f172a', end: '#1e3a8a', accent: '#f59e0b', icon: '🏆' },
  { start: '#091e3a', end: '#172554', accent: '#38bdf8', icon: '🎯' },
  { start: '#141e30', end: '#243b55', accent: '#10b981', icon: '👨‍🏫' },
  { start: '#111827', end: '#312e81', accent: '#a855f7', icon: '📈' },
  { start: '#064e3b', end: '#022c22', accent: '#34d399', icon: '💵' },
  { start: '#1e1b4b', end: '#3b0764', accent: '#f43f5e', icon: '🏷️' },
  { start: '#0f172a', end: '#0369a1', accent: '#06b6d4', icon: '🌐' },
  { start: '#1e293b', end: '#334155', accent: '#fbbf24', icon: '🏫' },
  { start: '#18181b', end: '#27272a', accent: '#eab308', icon: '⚡' },
  { start: '#1e3a8a', end: '#1e1b4b', accent: '#60a5fa', icon: '👔' },
  { start: '#1e293b', end: '#0f766e', accent: '#2dd4bf', icon: '🎓' },
  { start: '#1c1917', end: '#44403c', accent: '#fb923c', icon: '🚀' },
  { start: '#311042', end: '#180728', accent: '#e879f9', icon: '🔥' },
  { start: '#450a0a', end: '#1c0505', accent: '#f87171', icon: '👑' },
  { start: '#042f2e', end: '#134e4a', accent: '#5eead4', icon: '📅' },
  { start: '#431407', end: '#7c2d12', accent: '#fb923c', icon: '⚡' },
  { start: '#0c4a6e', end: '#075985', accent: '#38bdf8', icon: '🎯' },
  { start: '#1e1b4b', end: '#4338ca', accent: '#818cf8', icon: '🧭' },
  { start: '#052e16', end: '#166534', accent: '#4ade80', icon: '🌱' },
  { start: '#1e293b', end: '#0f172a', accent: '#38bdf8', icon: '📊' }
];

function generateSvgCard(topic, index) {
  const pal = palettes[index % palettes.length];
  const slug = topic["Suggested Slug"].trim();
  const title = (topic["Suggested H1"] || topic["Topic"]).trim();
  const pk = (topic["Primary Keyword"] || "GMAT Coaching").trim();
  
  // Clean title for display
  let displayTitle = title;
  if (displayTitle.length > 48) {
    displayTitle = displayTitle.slice(0, 45) + "...";
  }

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${pal.start}"/>
      <stop offset="100%" stop-color="${pal.end}"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#FFF2A3"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Decorative Accent Glows -->
  <circle cx="1100" cy="100" r="300" fill="${pal.accent}" opacity="0.15" filter="blur(80px)"/>
  <circle cx="100" cy="550" r="250" fill="#D4AF37" opacity="0.1" filter="blur(60px)"/>

  <!-- Top Accent Bar -->
  <rect x="0" y="0" width="1200" height="8" fill="url(#goldGrad)"/>

  <!-- Brand Watermark / Tag -->
  <g transform="translate(80, 80)">
    <rect x="0" y="0" width="360" height="44" rx="22" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5"/>
    <text x="24" y="28" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" letter-spacing="1.5">
      MBA WIZARDS &amp; EDUQUEST
    </text>
  </g>

  <!-- Badge / Category -->
  <g transform="translate(80, 150)">
    <rect x="0" y="0" width="280" height="36" rx="8" fill="${pal.accent}" opacity="0.2"/>
    <rect x="0" y="0" width="280" height="36" rx="8" fill="none" stroke="${pal.accent}" stroke-width="1.5"/>
    <text x="18" y="23" fill="${pal.accent}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" letter-spacing="1">
      ${pal.icon} 2026 GURGAON MASTER GUIDE
    </text>
  </g>

  <!-- Main Title -->
  <g transform="translate(80, 240)">
    <text x="0" y="45" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" letter-spacing="-0.5">
      ${displayTitle.replace(/&/g, '&amp;')}
    </text>
  </g>

  <!-- Subtitle / Focus Keyword -->
  <g transform="translate(80, 340)">
    <text x="0" y="30" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="500">
      ${pk.replace(/&/g, '&amp;')} • 705+ GMAT Focus Blueprint
    </text>
    <text x="0" y="65" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400">
      DLF Cyber City • Golf Course Road • Sector 14 • MG Road Gurugram
    </text>
  </g>

  <!-- Bottom Metric Pills -->
  <g transform="translate(80, 480)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="220" height="70" rx="12" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)"/>
    <text x="20" y="32" fill="#D4AF37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">IIT ROORKEE</text>
    <text x="20" y="54" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">Founder Mentorship</text>

    <!-- Pill 2 -->
    <rect x="240" y="0" width="220" height="70" rx="12" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)"/>
    <text x="260" y="32" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">8–12 BATCH</text>
    <text x="260" y="54" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">Strict Cohort Size</text>

    <!-- Pill 3 -->
    <rect x="480" y="0" width="220" height="70" rx="12" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)"/>
    <text x="500" y="32" fill="#34D399" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">99th %ILE</text>
    <text x="500" y="54" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">705+ Score Track</text>
  </g>
</svg>`;

  return svgContent;
}

// Fallback high-res JPG base
const sampleJpgPath = path.join(outputDir, 'best-gmat-coaching-in-gurgaon.jpg');
let fallbackJpgBuffer = null;
if (fs.existsSync(sampleJpgPath)) {
  fallbackJpgBuffer = fs.readFileSync(sampleJpgPath);
}

rawTopics.forEach((topic, idx) => {
  const slug = topic["Suggested Slug"].trim();
  const svgPath = path.join(outputDir, `${slug}.svg`);
  const jpgPath = path.join(outputDir, `${slug}.jpg`);

  const svgContent = generateSvgCard(topic, idx);
  fs.writeFileSync(svgPath, svgContent, 'utf8');

  // If JPG doesn't exist, create it using fallback JPG or copy
  if (!fs.existsSync(jpgPath) && fallbackJpgBuffer) {
    fs.writeFileSync(jpgPath, fallbackJpgBuffer);
  }
});

console.log(`Generated SVG cards and image references for all ${rawTopics.length} blogs!`);
