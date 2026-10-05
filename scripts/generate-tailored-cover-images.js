const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '../public/images/blogs');

const titleDesigns = [
  {
    slug: "top-cat-personal-interview-questions",
    categoryBadge: "🎯 CAT & IIM INTERVIEW VAULT",
    mainTitle: "Top CAT Personal Interview Questions",
    subtitle: "Most Common Questions, Behavioral STAR Models & Verbatim Model Answers",
    theme: {
      bg1: "#0f172a", bg2: "#1e3a8a", accent: "#fbbf24", badgeBg: "#d97706",
      icon: "🎯",
      tag1: "100+ Curated PI Questions", tag2: "STAR/CAR Answering Logic", tag3: "IIM BLACKI Panels"
    },
    visualGraphic: `
      <!-- Target & Dialogue Graphics -->
      <g transform="translate(860, 220)">
        <circle cx="100" cy="100" r="90" fill="#1e293b" stroke="#fbbf24" stroke-width="4" stroke-dasharray="8 6"/>
        <circle cx="100" cy="100" r="65" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
        <circle cx="100" cy="100" r="40" fill="#fbbf24" fill-opacity="0.2" stroke="#fbbf24" stroke-width="3"/>
        <circle cx="100" cy="100" r="15" fill="#fbbf24"/>
        <path d="M40 100 L160 100 M100 40 L100 160" stroke="#fbbf24" stroke-width="2" opacity="0.6"/>
        <text x="100" y="220" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#fbbf24">99th %ile Conversion</text>
      </g>
    `
  },
  {
    slug: "iim-interview-questions-and-answers",
    categoryBadge: "📚 MASTER ANSWER PLAYBOOK",
    mainTitle: "IIM Interview Questions & Answers",
    subtitle: "Complete Guide to Academics, Work Experience, Current Affairs & Extempore",
    theme: {
      bg1: "#0a0f1d", bg2: "#164e63", accent: "#38bdf8", badgeBg: "#0284c7",
      icon: "📋",
      tag1: "4 Core Pillars Covered", tag2: "Engineering & Commerce Grilling", tag3: "Verbatim Sample Scripts"
    },
    visualGraphic: `
      <!-- Open Book & Logic Nodes -->
      <g transform="translate(860, 210)">
        <rect x="0" y="0" width="200" height="150" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
        <line x1="20" y1="35" x2="180" y2="35" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
        <line x1="20" y1="60" x2="150" y2="60" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <line x1="20" y1="85" x2="170" y2="85" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <line x1="20" y1="110" x2="120" y2="110" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
        <circle cx="170" cy="115" r="16" fill="#22c55e"/>
        <text x="170" y="120" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff">✓</text>
        <text x="100" y="190" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#38bdf8">AdCom Grilling Defense</text>
      </g>
    `
  },
  {
    slug: "why-cat-toppers-get-rejected-in-interviews",
    categoryBadge: "⚠️ SELECTION COMMITTEE PSYCHOLOGY",
    mainTitle: "Why CAT Toppers Get Rejected",
    subtitle: "99.9+ Percentile Traps, Arrogance Red Flags & Selection Panel Psychology",
    theme: {
      bg1: "#2d0606", bg2: "#450a0a", accent: "#f87171", badgeBg: "#dc2626",
      icon: "🚨",
      tag1: "99.9%ile Failure Audit", tag2: "Intellectual Humility Test", tag3: "Coachability Rubric"
    },
    visualGraphic: `
      <!-- Warning Badge & Trap Dissector -->
      <g transform="translate(860, 210)">
        <polygon points="100,20 190,170 10,170" fill="#7f1d1d" stroke="#f87171" stroke-width="4"/>
        <text x="100" y="125" text-anchor="middle" font-family="sans-serif" font-size="64" font-weight="900" fill="#ffffff">!</text>
        <rect x="25" y="190" width="150" height="30" rx="6" fill="#991b1b"/>
        <text x="100" y="210" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fecaca">Avoiding Fatal PI Flags</text>
      </g>
    `
  },
  {
    slug: "personal-interview-vs-cat-score-which-matters-more",
    categoryBadge: "📊 COMPOSITE SCORE BREAKDOWN",
    mainTitle: "PI vs CAT Score: Which Matters More?",
    subtitle: "Composite Score Modeling & Final Merit Weightage for IIM A, B, C & L",
    theme: {
      bg1: "#1e1b4b", bg2: "#312e81", accent: "#818cf8", badgeBg: "#4f46e5",
      icon: "⚖️",
      tag1: "IIM Merit Calculations", tag2: "50% PI Weightage Decoded", tag3: "CAT Percentile Overturn"
    },
    visualGraphic: `
      <!-- Scale Balance Graphic -->
      <g transform="translate(860, 220)">
        <rect x="95" y="30" width="10" height="120" fill="#818cf8"/>
        <line x1="20" y1="40" x2="180" y2="40" stroke="#818cf8" stroke-width="6" stroke-linecap="round"/>
        <!-- Left Pan (CAT 99.8%) -->
        <polygon points="20,40 5,90 65,90" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
        <text x="35" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c7d2fe">CAT (30%)</text>
        <!-- Right Pan (PI Score) heavier -->
        <polygon points="180,40 135,110 215,110" fill="#4338ca" stroke="#fbbf24" stroke-width="2"/>
        <text x="175" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fbbf24">PI (50%)</text>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#a5b4fc">PI Dominates Final Rank</text>
      </g>
    `
  },
  {
    slug: "the-biggest-pi-mistakes-iim-aspirants-make",
    categoryBadge: "🛑 INTERVIEW RECOVERY PLAYBOOK",
    mainTitle: "The Biggest PI Mistakes IIM Aspirants Make",
    subtitle: "Body Language Fails, Bluffing Traps & Stress Interview Recovery Tactics",
    theme: {
      bg1: "#1f1305", bg2: "#7c2d12", accent: "#fb923c", badgeBg: "#ea580c",
      icon: "⚡",
      tag1: "25 Deadly Interview Flaws", tag2: "Stress Panel De-escalation", tag3: "Non-Verbal Mastery"
    },
    visualGraphic: `
      <!-- Shield & Hazard Recovery -->
      <g transform="translate(860, 210)">
        <path d="M100 20 L170 50 L170 120 C170 160 100 190 100 190 C100 190 30 160 30 120 L30 50 Z" fill="#9a3412" stroke="#fb923c" stroke-width="4"/>
        <text x="100" y="125" text-anchor="middle" font-family="sans-serif" font-size="48" font-weight="900" fill="#ffffff">🛡️</text>
        <text x="100" y="220" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#fdba74">Bulletproof Defense</text>
      </g>
    `
  },
  {
    slug: "ai-based-cat-interview-preparation",
    categoryBadge: "🤖 ADMISSIONS TECH & AI TOOLS",
    mainTitle: "AI-Based CAT Interview Preparation",
    subtitle: "Speech Modulation, Lexical Variety & Automated Mock Feedback Systems",
    theme: {
      bg1: "#042f2e", bg2: "#115e59", accent: "#2dd4bf", badgeBg: "#0d9488",
      icon: "🎙️",
      tag1: "Filler Word Speech Analytics", tag2: "NLP Transcript Breakdown", tag3: "Simulated AI Prompts"
    },
    visualGraphic: `
      <!-- AI Waveform & Brain Graph -->
      <g transform="translate(860, 210)">
        <circle cx="100" cy="90" r="70" fill="#134e4a" stroke="#2dd4bf" stroke-width="3"/>
        <path d="M50 90 Q75 40 100 90 T150 90" fill="none" stroke="#2dd4bf" stroke-width="4"/>
        <path d="M60 90 Q80 130 100 90 T140 90" fill="none" stroke="#5eead4" stroke-width="3" stroke-dasharray="4 4"/>
        <circle cx="100" cy="90" r="10" fill="#2dd4bf"/>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#2dd4bf">AI Cadence Analytics</text>
      </g>
    `
  },
  {
    slug: "how-to-prepare-for-iim-interviews-without-coaching",
    categoryBadge: "📖 INDEPENDENT SELF-STUDY PLAN",
    mainTitle: "Prepare for IIM Interviews Without Coaching",
    subtitle: "60-Day Self-Study Roadmap, Peer Mock Frameworks & Free Master Resources",
    theme: {
      bg1: "#052e16", bg2: "#166534", accent: "#4ade80", badgeBg: "#15803d",
      icon: "🌱",
      tag1: "60-Day Self-Prep Schedule", tag2: "Peer Mock Frameworks", tag3: "Free Academic Question Banks"
    },
    visualGraphic: `
      <!-- Self-Growth Roadmap Nodes -->
      <g transform="translate(860, 210)">
        <circle cx="40" cy="140" r="22" fill="#166534" stroke="#4ade80" stroke-width="3"/>
        <text x="40" y="146" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">1</text>
        <line x1="58" y1="126" x2="92" y2="94" stroke="#4ade80" stroke-width="3"/>
        <circle cx="110" cy="80" r="24" fill="#15803d" stroke="#4ade80" stroke-width="3"/>
        <text x="110" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">2</text>
        <line x1="130" y1="68" x2="162" y2="42" stroke="#4ade80" stroke-width="3"/>
        <circle cx="175" cy="30" r="26" fill="#4ade80" stroke="#ffffff" stroke-width="3"/>
        <text x="175" y="37" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#052e16">★</text>
        <text x="105" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#86efac">Disciplined Self-Mastery</text>
      </g>
    `
  },
  {
    slug: "current-affairs-questions-asked-in-iim-interviews",
    categoryBadge: "🌐 MACROECONOMICS & POLICY",
    mainTitle: "Current Affairs in IIM Interviews",
    subtitle: "Geopolitical Economics, Union Budget, RBI Policies & Tech Disruptions",
    theme: {
      bg1: "#0c2a4d", bg2: "#1e40af", accent: "#60a5fa", badgeBg: "#2563eb",
      icon: "📰",
      tag1: "Union Budget & GDP Trends", tag2: "Geopolitical Neutrality", tag3: "Multi-Stakeholder Frameworks"
    },
    visualGraphic: `
      <!-- Global Grid & Finance Chart -->
      <g transform="translate(860, 210)">
        <circle cx="100" cy="90" r="75" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3"/>
        <ellipse cx="100" cy="90" rx="75" ry="30" fill="none" stroke="#93c5fd" stroke-width="2"/>
        <line x1="100" y1="15" x2="100" y2="165" stroke="#93c5fd" stroke-width="2"/>
        <polyline points="40,110 80,80 120,95 160,50" fill="none" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#93c5fd">Macroeconomic Mastery</text>
      </g>
    `
  },
  {
    slug: "tell-me-about-yourself-iim-interview-guide",
    categoryBadge: "🎤 90-SECOND OPENING PITCH",
    mainTitle: "Tell Me About Yourself: IIM Interview Guide",
    subtitle: "Narrative Architecture, Opening Hook Frameworks & Flawless Sample Scripts",
    theme: {
      bg1: "#2e1065", bg2: "#5b21b6", accent: "#c084fc", badgeBg: "#7c3aed",
      icon: "💬",
      tag1: "90-Second Story Arc", tag2: "Engineers, Commerce & Freshers", tag3: "Setting the Panel Trajectory"
    },
    visualGraphic: `
      <!-- Executive Microphone & Speech Bubble -->
      <g transform="translate(860, 210)">
        <rect x="20" y="30" width="160" height="110" rx="16" fill="#4c1d95" stroke="#c084fc" stroke-width="3"/>
        <polygon points="120,140 140,165 155,140" fill="#4c1d95"/>
        <circle cx="60" cy="85" r="10" fill="#c084fc"/>
        <circle cx="100" cy="85" r="10" fill="#c084fc"/>
        <circle cx="140" cy="85" r="10" fill="#c084fc"/>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#e9d5ff">Executive Opening Hook</text>
      </g>
    `
  },
  {
    slug: "mock-interviews-for-iim-admissions",
    categoryBadge: "🔍 STRESS SIMULATION & RUBRICS",
    mainTitle: "Mock Interviews for IIM Admissions",
    subtitle: "How to Maximize Simulation Value, Stress Testing & Alumni Panel Feedback",
    theme: {
      bg1: "#3b0764", bg2: "#831843", accent: "#f472b6", badgeBg: "#db2777",
      icon: "👥",
      tag1: "Full Stress Simulation", tag2: "IIM Alumni Review Scorecard", tag3: "Transcript Diagnostic Audit"
    },
    visualGraphic: `
      <!-- Dual Panel & Candidate Avatar -->
      <g transform="translate(860, 210)">
        <rect x="15" y="30" width="170" height="120" rx="12" fill="#701a75" stroke="#f472b6" stroke-width="3"/>
        <circle cx="65" cy="75" r="22" fill="#f472b6"/>
        <circle cx="135" cy="75" r="22" fill="#d946ef"/>
        <rect x="40" y="108" width="50" height="24" rx="6" fill="#fbcfe8"/>
        <rect x="110" y="108" width="50" height="24" rx="6" fill="#fbcfe8"/>
        <text x="100" y="190" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#fbcfe8">Alumni Simulation Board</text>
      </g>
    `
  },
  // School-Specific (51-60)
  {
    slug: "iim-ahmedabad-interview-experience",
    categoryBadge: "🏛️ IIM AHMEDABAD (WIMWI)",
    mainTitle: "IIM Ahmedabad Interview Experience",
    subtitle: "Real Transcripts, AWT Essay Analysis, Academic Grilling & Selection Secrets",
    theme: {
      bg1: "#450a0a", bg2: "#7f1d1d", accent: "#fbbf24", badgeBg: "#991b1b",
      icon: "🏛️",
      tag1: "WIMWI Iconic Red Brick Rigor", tag2: "Analytical Writing Test (AWT)", tag3: "Academic Scrutiny Transcripts"
    },
    visualGraphic: `
      <!-- IIMA Red Brick Arch Vector -->
      <g transform="translate(860, 210)">
        <rect x="15" y="20" width="170" height="140" fill="#991b1b" stroke="#fbbf24" stroke-width="3"/>
        <!-- Louis Kahn Iconic Circular Aperture -->
        <circle cx="100" cy="80" r="45" fill="#450a0a" stroke="#fbbf24" stroke-width="3"/>
        <rect x="75" y="80" width="50" height="80" fill="#450a0a"/>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="800" fill="#fbbf24">WIMWI Louis Kahn Rigor</text>
      </g>
    `
  },
  {
    slug: "iim-bangalore-interview-questions",
    categoryBadge: "🌲 IIM BANGALORE (IIMB)",
    mainTitle: "IIM Bangalore Interview Questions",
    subtitle: "SOP Defense Blueprint, Work Experience Scrutiny & Leadership Depth",
    theme: {
      bg1: "#022c22", bg2: "#065f46", accent: "#34d399", badgeBg: "#059669",
      icon: "🌲",
      tag1: "Statement of Purpose (SOP)", tag2: "Operational Work-Ex Grilling", tag3: "Social & Leadership Impact"
    },
    visualGraphic: `
      <!-- IIMB Stone Architecture & Foliage -->
      <g transform="translate(860, 210)">
        <rect x="20" y="30" width="160" height="130" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
        <line x1="20" y1="70" x2="180" y2="70" stroke="#34d399" stroke-width="2"/>
        <line x1="20" y1="110" x2="180" y2="110" stroke="#34d399" stroke-width="2"/>
        <line x1="70" y1="30" x2="70" y2="160" stroke="#34d399" stroke-width="2"/>
        <line x1="130" y1="30" x2="130" y2="160" stroke="#34d399" stroke-width="2"/>
        <circle cx="100" cy="100" r="20" fill="#34d399"/>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#a7f3d0">Bannerghatta Stone Rigor</text>
      </g>
    `
  },
  {
    slug: "iim-calcutta-interview-questions",
    title: "IIM Calcutta Interview Questions",
    categoryBadge: "📊 IIM CALCUTTA (JOKA)",
    mainTitle: "IIM Calcutta Interview Questions",
    subtitle: "Quantitative Grilling, Mathematics Theorems, Calculus & Economic Logic",
    theme: {
      bg1: "#0f172a", bg2: "#1e3a8a", accent: "#60a5fa", badgeBg: "#2563eb",
      icon: "📐",
      tag1: "Calculus & Probability Sets", tag2: "Financial & Quantitative Logic", tag3: "Joka Economics Puzzles"
    },
    visualGraphic: `
      <!-- Math Formula & Quant Curves -->
      <g transform="translate(860, 210)">
        <rect x="15" y="25" width="170" height="130" rx="10" fill="#172554" stroke="#60a5fa" stroke-width="3"/>
        <text x="100" y="70" text-anchor="middle" font-family="serif" font-size="28" font-style="italic" fill="#60a5fa">∫ f(x)dx = ∑ P(X)</text>
        <line x1="30" y1="110" x2="170" y2="110" stroke="#3b82f6" stroke-width="2"/>
        <polyline points="40,135 70,115 100,125 130,95 160,80" fill="none" stroke="#fbbf24" stroke-width="3"/>
        <text x="100" y="190" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#93c5fd">Joka Quantitative Brain</text>
      </g>
    `
  },
  {
    slug: "iim-lucknow-interview-questions",
    categoryBadge: "⚡ IIM LUCKNOW (HelL)",
    mainTitle: "IIM Lucknow Interview Questions",
    subtitle: "Academic Rigor, Rapid-Fire Questioning, WAT Prompts & Stress Management",
    theme: {
      bg1: "#451a03", bg2: "#9a3412", accent: "#f59e0b", badgeBg: "#d97706",
      icon: "🏛️",
      tag1: "Academic Grilling Mastery", tag2: "HelL Rapid-Fire Velocity", tag3: "WAT Synthesis Prompts"
    },
    visualGraphic: `
      <!-- Flash & Speed Clock -->
      <g transform="translate(860, 210)">
        <circle cx="100" cy="90" r="70" fill="#78350f" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="105,35 75,95 100,95 90,145 130,85 105,85" fill="#f59e0b"/>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#fde68a">HelL Academic Speed</text>
      </g>
    `
  },
  {
    slug: "iim-kozhikode-interview-questions",
    categoryBadge: "🌴 IIM KOZHIKODE (KAMPUS)",
    mainTitle: "IIM Kozhikode Interview Questions",
    subtitle: "Holistic Profile Evaluation, Live Extempore Mastery & Ethical Caselets",
    theme: {
      bg1: "#082f49", bg2: "#0369a1", accent: "#38bdf8", badgeBg: "#0284c7",
      icon: "🌊",
      tag1: "Mandatory Live Extempore", tag2: "Global & Diversity Evaluation", tag3: "Ethical Decision Frameworks"
    },
    visualGraphic: `
      <!-- Hilltop Campus & Sun Vector -->
      <g transform="translate(860, 210)">
        <rect x="15" y="25" width="170" height="130" rx="10" fill="#0c4a6e" stroke="#38bdf8" stroke-width="3"/>
        <circle cx="100" cy="70" r="30" fill="#fbbf24"/>
        <path d="M20 135 Q70 85 100 115 T180 100 L180 150 L20 150 Z" fill="#0284c7"/>
        <text x="100" y="190" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7dd3fc">God's Own Campus Rigor</text>
      </g>
    `
  },
  {
    slug: "spjimr-interview-questions",
    categoryBadge: "🤝 SPJIMR MUMBAI",
    mainTitle: "SPJIMR Interview Questions (GI-1 & GI-2)",
    subtitle: "Group Interview Rounds, Specialization Deep Dives & Values-Based Leadership",
    theme: {
      bg1: "#3b0764", bg2: "#6b21a8", accent: "#c084fc", badgeBg: "#9333ea",
      icon: "🤝",
      tag1: "GI-1 Psychometric Round", tag2: "GI-2 Specialization Defense", tag3: "Values & Ethical Alignment"
    },
    visualGraphic: `
      <!-- Circular Group Interview Table -->
      <g transform="translate(860, 210)">
        <ellipse cx="100" cy="90" rx="70" ry="40" fill="#581c87" stroke="#c084fc" stroke-width="3"/>
        <circle cx="45" cy="70" r="12" fill="#c084fc"/>
        <circle cx="155" cy="70" r="12" fill="#c084fc"/>
        <circle cx="70" cy="115" r="12" fill="#e9d5ff"/>
        <circle cx="130" cy="115" r="12" fill="#e9d5ff"/>
        <circle cx="100" cy="50" r="14" fill="#fbbf24"/>
        <text x="100" y="190" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#e9d5ff">Group Dynamics Matrix</text>
      </g>
    `
  },
  {
    slug: "mdi-gurgaon-interview-questions",
    categoryBadge: "🏢 MDI GURGAON",
    mainTitle: "MDI Gurgaon Interview Questions",
    subtitle: "Corporate Readiness, GD/WAT Dynamics, Macro Business & Work-Ex Scrutiny",
    theme: {
      bg1: "#1f2937", bg2: "#991b1b", accent: "#f87171", badgeBg: "#dc2626",
      icon: "🏙️",
      tag1: "Group Discussion Mastery", tag2: "Corporate Readiness Evaluation", tag3: "Gurgaon Industry Alignment"
    },
    visualGraphic: `
      <!-- Corporate Skyline & Briefcase -->
      <g transform="translate(860, 210)">
        <rect x="25" y="45" width="40" height="105" fill="#374151" stroke="#f87171" stroke-width="2"/>
        <rect x="75" y="25" width="45" height="125" fill="#4b5563" stroke="#f87171" stroke-width="2"/>
        <rect x="130" y="55" width="40" height="95" fill="#374151" stroke="#f87171" stroke-width="2"/>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#fca5a5">Corporate Executive Rigor</text>
      </g>
    `
  },
  {
    slug: "xlri-interview-questions",
    categoryBadge: "⚖️ XLRI JAMSHEDPUR & DELHI",
    mainTitle: "XLRI Interview Questions (BM & HRM)",
    subtitle: "Ethical Decision Dilemmas, XAT Essay Defense & High-Stakes Faculty Panels",
    theme: {
      bg1: "#042f2e", bg2: "#0e7490", accent: "#22d3ee", badgeBg: "#0891b2",
      icon: "⚖️",
      tag1: "Ethical Dilemma Caselets", tag2: "BM vs HRM Specialization", tag3: "XAT Essay Interrogation"
    },
    visualGraphic: `
      <!-- Jesuit Ethics Scale & Flame -->
      <g transform="translate(860, 210)">
        <rect x="20" y="25" width="160" height="130" rx="10" fill="#155e75" stroke="#22d3ee" stroke-width="3"/>
        <line x1="100" y1="45" x2="100" y2="125" stroke="#22d3ee" stroke-width="4"/>
        <line x1="50" y1="60" x2="150" y2="60" stroke="#22d3ee" stroke-width="4"/>
        <circle cx="50" cy="85" r="18" fill="#0891b2" stroke="#ffffff" stroke-width="2"/>
        <circle cx="150" cy="85" r="18" fill="#0891b2" stroke="#ffffff" stroke-width="2"/>
        <text x="100" y="190" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#a5f3fc">For the Greater Good</text>
      </g>
    `
  },
  {
    slug: "fms-delhi-interview-questions",
    categoryBadge: "🔴 FMS DELHI (RED BUILDING)",
    mainTitle: "FMS Delhi Interview Questions",
    subtitle: "1-Minute Rapid Extempore, High-Velocity PI Defense & Maximum ROI Leadership",
    theme: {
      bg1: "#4c0519", bg2: "#9f1239", accent: "#fb7185", badgeBg: "#e11d48",
      icon: "⏱️",
      tag1: "Mandatory 1-Min Extempore", tag2: "High-Speed Faculty Testing", tag3: "Red Building Legacy"
    },
    visualGraphic: `
      <!-- Red Building & 60-Second Stopwatch -->
      <g transform="translate(860, 210)">
        <circle cx="100" cy="90" r="65" fill="#881337" stroke="#fb7185" stroke-width="4"/>
        <line x1="100" y1="90" x2="100" y2="45" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
        <line x1="100" y1="90" x2="135" y2="90" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
        <circle cx="100" cy="90" r="8" fill="#ffffff"/>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#fecdd3">1-Minute Instant Extempore</text>
      </g>
    `
  },
  {
    slug: "iift-interview-questions",
    categoryBadge: "🚢 IIFT DELHI & KOLKATA",
    mainTitle: "IIFT Interview Questions",
    subtitle: "International Trade Dynamics, Forex Economics, Extempore & GD/WAT Mastery",
    theme: {
      bg1: "#064e3b", bg2: "#047857", accent: "#34d399", badgeBg: "#059669",
      icon: "🌐",
      tag1: "International Trade Concepts", tag2: "Forex & WTO Policy", tag3: "Extempore & Trade GDs"
    },
    visualGraphic: `
      <!-- Trade Vessel & Global Compass -->
      <g transform="translate(860, 210)">
        <circle cx="100" cy="90" r="70" fill="#065f46" stroke="#34d399" stroke-width="3"/>
        <polygon points="100,35 115,85 100,75 85,85" fill="#fbbf24"/>
        <polygon points="100,145 115,95 100,105 85,95" fill="#ffffff"/>
        <circle cx="100" cy="90" r="6" fill="#34d399"/>
        <text x="100" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#a7f3d0">Global Trade Strategy</text>
      </g>
    `
  }
];

titleDesigns.forEach(d => {
  const safeTitle = d.mainTitle.replace(/&/g, '&amp;');
  const safeSubtitle = d.subtitle.replace(/&/g, '&amp;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${d.theme.bg1}"/>
      <stop offset="100%" stop-color="${d.theme.bg2}"/>
    </linearGradient>
    <linearGradient id="accentBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${d.theme.accent}"/>
      <stop offset="100%" stop-color="${d.theme.badgeBg}"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>

  <!-- Geometric Grid & Glow Overlay -->
  <g opacity="0.07" stroke="#ffffff" stroke-width="1.2">
    <line x1="80" y1="0" x2="80" y2="630"/>
    <line x1="280" y1="0" x2="280" y2="630"/>
    <line x1="480" y1="0" x2="480" y2="630"/>
    <line x1="680" y1="0" x2="680" y2="630"/>
    <line x1="880" y1="0" x2="880" y2="630"/>
    <line x1="1080" y1="0" x2="1080" y2="630"/>
    <line x1="0" y1="120" x2="1200" y2="120"/>
    <line x1="0" y1="260" x2="1200" y2="260"/>
    <line x1="0" y1="400" x2="1200" y2="400"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
  </g>

  <!-- Top Accent Bar -->
  <rect x="0" y="0" width="1200" height="10" fill="url(#accentBar)"/>

  <!-- Left Side Badge -->
  <g transform="translate(80, 55)">
    <rect x="0" y="0" width="370" height="42" rx="21" fill="${d.theme.badgeBg}" opacity="0.25"/>
    <rect x="0" y="0" width="370" height="42" rx="21" fill="none" stroke="${d.theme.accent}" stroke-width="1.5"/>
    <text x="24" y="27" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" fill="${d.theme.accent}" letter-spacing="1">${d.categoryBadge}</text>
  </g>

  <!-- Title Section -->
  <text x="80" y="175" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
    <tspan x="80" dy="0">${safeTitle.slice(0, 36)}</tspan>
    ${safeTitle.length > 36 ? `<tspan x="80" dy="54">${safeTitle.slice(36)}</tspan>` : ''}
  </text>

  <!-- Subtitle -->
  <text x="80" y="${safeTitle.length > 36 ? 310 : 255}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400" fill="#cbd5e1" width="700">
    <tspan x="80" dy="0">${safeSubtitle.slice(0, 62)}</tspan>
    <tspan x="80" dy="30">${safeSubtitle.slice(62, 125)}...</tspan>
  </text>

  <!-- 3 Pillars/Tags Feature Badges -->
  <g transform="translate(80, ${safeTitle.length > 36 ? 410 : 370})">
    <rect x="0" y="0" width="225" height="46" rx="8" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.2"/>
    <text x="18" y="28" font-family="sans-serif" font-size="14" font-weight="700" fill="#f8fafc">✓ ${d.theme.tag1.slice(0, 24)}</text>

    <rect x="240" y="0" width="245" height="46" rx="8" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.2"/>
    <text x="258" y="28" font-family="sans-serif" font-size="14" font-weight="700" fill="#f8fafc">✓ ${d.theme.tag2.slice(0, 26)}</text>

    <rect x="500" y="0" width="245" height="46" rx="8" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.2"/>
    <text x="518" y="28" font-family="sans-serif" font-size="14" font-weight="700" fill="#f8fafc">✓ ${d.theme.tag3.slice(0, 26)}</text>
  </g>

  <!-- Specialized Right-side Visual Graphic for this specific title -->
  ${d.visualGraphic}

  <!-- Footer Branding -->
  <g transform="translate(80, 545)">
    <text x="0" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="900" fill="#d4af37" letter-spacing="1">MBA WIZARDS</text>
    <text x="0" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#94a3b8">Mentored by Mr. Surinder Gupta (IIT Roorkee Alum, 25+ Yrs Exp) • IIM Interview Masterclass</text>
    <text x="1040" y="30" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="${d.theme.accent}">mbawizards.co.in</text>
  </g>
</svg>`;

  const targetPath = path.join(publicImagesDir, `${d.slug}.svg`);
  fs.writeFileSync(targetPath, svg, 'utf8');
  console.log(`Generated tailored cover image for: ${d.slug}`);
});

console.log("🎉 All 20 Title-Specific Cover Images Generated Successfully!");
