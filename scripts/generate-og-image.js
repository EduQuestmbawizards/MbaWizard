const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createMasterOgImage() {
  const width = 1200;
  const height = 630;

  // Use clean text-free photograph of executive B-school amphitheater
  const bgImagePath = path.resolve('./public/images/blogs/scenery/b-school-amphitheater.jpg');

  // Create SVG overlay with crisp typography and branding
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Deep Blue to transparent gradient overlay -->
      <linearGradient id="bgScrim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#051336" stop-opacity="0.94"/>
        <stop offset="45%" stop-color="#071b4a" stop-opacity="0.88"/>
        <stop offset="100%" stop-color="#020a1f" stop-opacity="0.96"/>
      </linearGradient>

      <!-- Gold gradient -->
      <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFF0A0"/>
        <stop offset="40%" stop-color="#E5C05B"/>
        <stop offset="70%" stop-color="#D4AF37"/>
        <stop offset="100%" stop-color="#B8860B"/>
      </linearGradient>

      <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#8B6914" stop-opacity="0.3"/>
      </linearGradient>

      <!-- Pill Card Gradient -->
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c2464" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#051644" stop-opacity="0.95"/>
      </linearGradient>

      <!-- Glow filter -->
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    <!-- Scrim overlay on top of photo -->
    <rect width="${width}" height="${height}" fill="url(#bgScrim)"/>

    <!-- Decorative Top & Bottom Gold Accent Lines -->
    <rect x="0" y="0" width="${width}" height="5" fill="url(#goldText)"/>
    <rect x="0" y="${height - 5}" width="${width}" height="5" fill="url(#goldText)"/>

    <!-- Corner Decorative Accents -->
    <path d="M 30,30 L 70,30 M 30,30 L 30,70" stroke="#D4AF37" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M ${width - 30},30 L ${width - 70},30 M ${width - 30},30 L ${width - 30},70" stroke="#D4AF37" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M 30,${height - 30} L 70,${height - 30} M 30,${height - 30} L 30,${height - 70}" stroke="#D4AF37" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M ${width - 30},${height - 30} L ${width - 70},${height - 30} M ${width - 30},${height - 30} L ${width - 30},${height - 70}" stroke="#D4AF37" stroke-width="2" fill="none" opacity="0.6"/>

    <!-- TOP BAR: Brand Header & Mentorship Badge -->
    <g transform="translate(60, 42)">
      <!-- Graduation Cap Icon in Gold -->
      <g transform="translate(0, 0) scale(0.48)">
        <polygon points="50,6 92,26 50,46 8,26" fill="url(#goldText)" stroke="#B8860B" stroke-width="1.5"/>
        <polygon points="50,12 82,26 50,40 18,26" fill="#FFF0A0" opacity="0.7"/>
        <path d="M 25,34 L 25,52 Q 50,65 75,52 L 75,34 Q 50,48 25,34 Z" fill="url(#goldText)"/>
        <path d="M 50,26 Q 32,34 28,54" fill="none" stroke="url(#goldText)" stroke-width="2.5"/>
        <circle cx="27" cy="58" r="4.5" fill="url(#goldText)"/>
      </g>

      <!-- Brand Name -->
      <text x="56" y="27" font-family="'Cinzel', 'Georgia', 'Times New Roman', serif" font-size="34" font-weight="700" letter-spacing="4" fill="url(#goldText)">
        MBA WIZARDS
      </text>

      <!-- Brand Subtext -->
      <text x="58" y="47" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="600" letter-spacing="3" fill="#D4AF37" opacity="0.9">
        ASPIRE. ADVANCE. ACHIEVE.
      </text>

      <!-- Authority Credential Badge (Right Aligned in Top Bar) -->
      <rect x="580" y="2" width="500" height="42" rx="21" fill="#0b225c" stroke="url(#goldBorder)" stroke-width="1.2"/>
      <text x="830" y="28" text-anchor="middle" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">
        🎓 <tspan fill="#FFD54F">IIT Roorkee Alum Mentorship</tspan> | 25+ Yrs Elite Admissions Legacy
      </text>
    </g>

    <!-- MAIN HERO SECTION -->
    <g transform="translate(60, 140)">
      <!-- Sub-headline Tag -->
      <rect x="0" y="0" width="310" height="28" rx="6" fill="#1e3a78" opacity="0.8"/>
      <text x="15" y="19" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5" fill="#FFD54F">
        PREMIER MBA ENTRANCE &amp; CONSULTING
      </text>

      <!-- Main Catchy Title -->
      <text x="0" y="65" font-family="'Cinzel', 'Georgia', serif" font-size="44" font-weight="700" fill="#FFFFFF" letter-spacing="0.5">
        Target 705+ GMAT | 99%ile CAT
      </text>
      <text x="0" y="112" font-family="'Cinzel', 'Georgia', serif" font-size="44" font-weight="700" fill="url(#goldText)" letter-spacing="0.5">
        &amp; Elite Global MBA Admissions
      </text>

      <!-- Value Proposition / Subtitle -->
      <text x="0" y="146" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="17" font-weight="400" fill="#C5D3E8">
        Personalized 1-on-1 Ability-Based Coaching, AI Mock Analytics &amp; End-to-End Interview Mastery
      </text>
    </g>

    <!-- 3 CORE PILLAR CARDS -->
    <g transform="translate(60, 320)">
      <!-- Card 1: GMAT Focus Edition -->
      <g transform="translate(0, 0)">
        <rect width="345" height="135" rx="14" fill="url(#cardGrad)" stroke="url(#goldBorder)" stroke-width="1.2"/>
        <rect x="18" y="16" width="36" height="36" rx="8" fill="#15367e"/>
        <text x="36" y="41" text-anchor="middle" font-size="20">🎯</text>
        
        <text x="66" y="34" font-family="'Segoe UI', Arial, sans-serif" font-size="17" font-weight="700" fill="#FFD54F">GMAT Focus Edition</text>
        <text x="66" y="52" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="600" fill="#A0B8D8">Score Breakthrough Blueprint</text>
        
        <text x="20" y="82" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="#E8EEF8">• Quant, Verbal &amp; Data Insights Mastery</text>
        <text x="20" y="103" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="#E8EEF8">• AI-Driven Diagnostic Error Taxonomy</text>
        <text x="20" y="123" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="700" fill="#4BB543">✓ Proven 705+ (99%ile) Track Record</text>
      </g>

      <!-- Card 2: CAT & IIM Admissions -->
      <g transform="translate(365, 0)">
        <rect width="345" height="135" rx="14" fill="url(#cardGrad)" stroke="url(#goldBorder)" stroke-width="1.2"/>
        <rect x="18" y="16" width="36" height="36" rx="8" fill="#15367e"/>
        <text x="36" y="41" text-anchor="middle" font-size="20">🏆</text>
        
        <text x="66" y="34" font-family="'Segoe UI', Arial, sans-serif" font-size="17" font-weight="700" fill="#FFD54F">CAT &amp; IIM Admissions</text>
        <text x="66" y="52" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="600" fill="#A0B8D8">Complete A-to-Z Roadmap</text>
        
        <text x="20" y="82" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="#E8EEF8">• VARC, DILR &amp; QA Strategic Hacks</text>
        <text x="20" y="103" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="#E8EEF8">• IIM Ahmedabad, Bangalore, Calcutta Prep</text>
        <text x="20" y="123" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="700" fill="#4BB543">✓ IIM WAT, GD &amp; AI Mock Interviews</text>
      </g>

      <!-- Card 3: Global Admissions & GRE -->
      <g transform="translate(730, 0)">
        <rect width="350" height="135" rx="14" fill="url(#cardGrad)" stroke="url(#goldBorder)" stroke-width="1.2"/>
        <rect x="18" y="16" width="36" height="36" rx="8" fill="#15367e"/>
        <text x="36" y="41" text-anchor="middle" font-size="20">🌍</text>
        
        <text x="66" y="34" font-family="'Segoe UI', Arial, sans-serif" font-size="17" font-weight="700" fill="#FFD54F">Global Admissions &amp; GRE</text>
        <text x="66" y="52" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="600" fill="#A0B8D8">ISB, INSEAD, Harvard &amp; M7</text>
        
        <text x="20" y="82" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="#E8EEF8">• Profile Building &amp; Winning Essays</text>
        <text x="20" y="103" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="#E8EEF8">• Shorter GRE Fast-Track (325+ Target)</text>
        <text x="20" y="123" font-family="'Segoe UI', Arial, sans-serif" font-size="12" font-weight="700" fill="#4BB543">✓ 100% Comprehensive Scholarship Support</text>
      </g>
    </g>

    <!-- TRUST METRICS STRIP -->
    <g transform="translate(60, 480)">
      <rect width="1080" height="42" rx="10" fill="#0a1f4e" stroke="#1d4085" stroke-width="1"/>
      <g transform="translate(30, 26)">
        <text font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">
          <tspan fill="#FFD54F">★ 25+ Years</tspan> Mentorship Experience  |  
          <tspan fill="#FFD54F">★ 1-on-1</tspan> Ability-Based Model  |  
          <tspan fill="#FFD54F">★ Small Batch</tspan> Sizes  |  
          <tspan fill="#FFD54F">★ AI Interview</tspan> Simulator  |  
          <tspan fill="#FFD54F">★ Top 10 B-School</tspan> Converts
        </text>
      </g>
    </g>

    <!-- FOOTER / CONTACT & LOCATION BAR -->
    <g transform="translate(60, 545)">
      <!-- Left: Locations -->
      <g transform="translate(0, 0)">
        <text y="20" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="700" fill="#FFD54F">
          📍 CENTRES IN GURGAON:
        </text>
        <text x="170" y="20" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="#D8E2F0">
          South City 2 (Sec-50) &amp; DLF Phase 4 (Galleria) | Online Classes Worldwide
        </text>
      </g>

      <g transform="translate(0, 44)">
        <!-- Call / WhatsApp -->
        <text y="16" font-family="'Segoe UI', Arial, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">
          📞 Call / WhatsApp: <tspan fill="#FFD54F" font-weight="800">+91-9958041888</tspan>
        </text>
        
        <!-- Email -->
        <text x="350" y="16" font-family="'Segoe UI', Arial, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">
          ✉️ info@mbawizards.co.in
        </text>

        <!-- Website Badge -->
        <rect x="740" y="-8" width="340" height="34" rx="8" fill="url(#goldText)"/>
        <text x="910" y="14" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="16" font-weight="800" letter-spacing="1" fill="#051336">
          🌐 WWW.MBAWIZARDS.CO.IN
        </text>
      </g>
    </g>
  </svg>
  `;

  console.log("Generating OpenGraph master social share images...");

  // 1. Resize background image and composite SVG overlay
  const baseImage = sharp(bgImagePath)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .blur(2);

  const finalPngBuffer = await baseImage
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0
      }
    ])
    .png({ quality: 95 })
    .toBuffer();

  // Save to multiple standard target paths
  const targets = [
    path.resolve('./public/images/common/mba-wizards-og-banner.png'),
    path.resolve('./public/images/common/mba-wizards-og-banner.jpg'),
    path.resolve('./public/og-image.png'),
    path.resolve('./public/og-image.jpg'),
    path.resolve('./src/app/opengraph-image.png'),
    path.resolve('./src/app/twitter-image.png'),
  ];

  for (const target of targets) {
    const dir = path.dirname(target);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (target.endsWith('.jpg') || target.endsWith('.jpeg')) {
      await sharp(finalPngBuffer).jpeg({ quality: 92 }).toFile(target);
    } else {
      await sharp(finalPngBuffer).png().toFile(target);
    }
    console.log(`Saved: ${target}`);
  }

  console.log('Master OpenGraph & Twitter Card images successfully generated!');
}

createMasterOgImage().catch(console.error);
