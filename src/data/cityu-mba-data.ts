export interface CityUMbaProgramFact {
  metric: string;
  label: string;
  description: string;
  badge?: string;
}

export interface CityUConcentration {
  title: string;
  tagline: string;
  description: string;
  highlightCourses: string[];
  careerPath: string;
}

export const CITYU_MBA_CONFIG = {
  officialUrl: "https://mba.cb.cityu.edu.hk/en/about-us/why-cityuhk-mba",
  hubPageUrl: "/cityuhk-mba",
  headline: "Explore the CityUHK MBA",
  subText: "Discover the university, the programme and your next career step.",
  ctaText: "Explore Now",
  universityName: "City University of Hong Kong (CityUHK)",
  collegeName: "College of Business (CB)",
  programTitle: "Master of Business Administration (MBA)",
  location: "Kowloon Tong, Hong Kong SAR",
  accreditation: "AACSB & EQUIS Dual-Crown Accredited",
  studyModes: "1-Year Accelerated Full-Time | 2-Year Part-Time",
  creditsRequired: "40 Credit Units (20 Core + 20 Electives)",
  intakeTimeline: "Fall 2025 / 2026 Rolling Admissions",
};

export const CITYU_KEY_FACTS: CityUMbaProgramFact[] = [
  {
    metric: "#86",
    label: "QS Global MBA Worldwide",
    description: "Ranked among top business programs globally with exceptional ROI and alumni career growth.",
    badge: "QS World 2024/25",
  },
  {
    metric: "#14",
    label: "QS MBA Ranking in Asia",
    description: "Consistently recognized as one of the premier executive and management programs in the Asia-Pacific region.",
    badge: "Top Tier in Asia",
  },
  {
    metric: "#62",
    label: "QS World University Rankings",
    description: "City University of Hong Kong is ranked in the top 100 world universities for research excellence and global faculty.",
    badge: "Global Elite 100",
  },
  {
    metric: "#1",
    label: "International Trade in HK",
    description: "Ranked #1 in Hong Kong and #37 globally in QS International Trade Rankings for graduate outcomes and trade leadership.",
    badge: "Hong Kong Leader",
  },
  {
    metric: "AACSB + EQUIS",
    label: "Dual Crown Accreditation",
    description: "Accredited continuously by AACSB International since 2005 and consecutive 5-year EQUIS quality certification.",
    badge: "Top 1% Worldwide",
  },
  {
    metric: "STEM",
    label: "Enriched Curriculum",
    description: "Curriculum seamlessly blends managerial leadership with AI analytics, financial computing, and digital transformation.",
    badge: "Future-Ready",
  },
];

export const CITYU_WHY_POINTS = [
  {
    icon: "🌏",
    title: "Strategic Gateway to Asia & Greater Bay Area (GBA)",
    description:
      "Situated in Hong Kong, the world's premier international financial hub, CityUHK offers direct access to multinational corporate headquarters, Mainland China markets, and the 86M+ consumer ecosystem of the Greater Bay Area.",
  },
  {
    icon: "📈",
    title: "Unrivaled ROI & High Employability",
    description:
      "QS Global MBA metrics score CityUHK at the top for 'Value for Money' and 'Alumni Outcomes'. Accelerate your salary growth, climb to executive leadership, and tap into global recruitment pipelines.",
  },
  {
    icon: "🤖",
    title: "STEM-Enriched Tech & AI Leadership",
    description:
      "Designed for the digital age, the curriculum integrates applied Artificial Intelligence, machine learning for business, predictive analytics, and digital business modeling alongside classical strategy and finance.",
  },
  {
    icon: "✈️",
    title: "Global Immersive Learning Partnerships",
    description:
      "Expand your worldview with overseas experiential modules and study trips with partner institutions like UC Berkeley, Imperial College London, and top European business schools.",
  },
  {
    icon: "👥",
    title: "World-Class Multinational Cohort & Faculty",
    description:
      "Learn alongside high-caliber peers from 20+ countries spanning finance, engineering, consulting, technology, and entrepreneurship, taught by globally renowned professors and industry leaders.",
  },
  {
    icon: "⚡",
    title: "1-Year Accelerated Graduation",
    description:
      "Complete 40 credits in 12 months (Full-Time Weekday or Weekend modes) minimizing opportunity cost and returning to the senior job market with an elite global credential in hand.",
  },
];

export const CITYU_CONCENTRATIONS: CityUConcentration[] = [
  {
    title: "MBA in Financial Technology (FinTech)",
    tagline: "The Future of Global Capital Markets",
    description:
      "Deep dive into blockchain architecture, quantitative trading algorithms, algorithmic risk management, digital banking, and AI-driven portfolio management.",
    highlightCourses: [
      "AI & Machine Learning in Finance",
      "Financial Computing & Analytics",
      "Blockchain & Digital Assets",
      "Corporate FinTech Strategy",
    ],
    careerPath: "Quantitative Analyst, FinTech Founder, Investment Banker, Digital Assets Manager",
  },
  {
    title: "MBA in Professional Accounting",
    tagline: "HKICPA & International Accounting Benchmark",
    description:
      "Tailored for professionals and career switchers looking to build verified mastery in international accounting standards, Hong Kong tax law, corporate governance, and auditing.",
    highlightCourses: [
      "Advanced Financial Accounting",
      "Hong Kong Taxation & Law",
      "Auditing Practice & Ethics",
      "Managerial Cost Accounting",
    ],
    careerPath: "CFO, Audit Director, Corporate Controller, Financial Consultant",
  },
  {
    title: "Business Analytics & Strategic Management",
    tagline: "Data-Driven Executive Decision Making",
    description:
      "Bridge data science and boardroom leadership. Master predictive business analytics, supply chain resilience, competitive market modeling, and enterprise digital transformation.",
    highlightCourses: [
      "Big Data Analytics for Business",
      "Strategic Management in Asia",
      "Operations & Supply Chain Modeling",
      "Enterprise Tech Transformation",
    ],
    careerPath: "Strategy Consultant, Operations Director, Chief Strategy Officer, Analytics Lead",
  },
  {
    title: "General Management & Entrepreneurship",
    tagline: "Venture Building & Cross-Border Leadership",
    description:
      "Master the end-to-end playbook of launching ventures, securing venture capital, leading cross-cultural teams, and driving multinational corporate expansion.",
    highlightCourses: [
      "New Venture Creation & Venture Capital",
      "Cross-Cultural Leadership & Negotiation",
      "Global Marketing Strategy",
      "Mergers & Acquisitions in Asia",
    ],
    careerPath: "Venture Capitalist, Tech Founder, Country General Manager, Managing Director",
  },
];

export const CITYU_WHO_IS_FOR = [
  {
    icon: "💼",
    title: "Ambitious Corporate Accelerators",
    profile: "3-8+ years experience in corporate, consulting, or banking",
    benefit:
      "Fast-track promotion to executive director, VP, or regional business head across Asia-Pacific and multinational firms.",
  },
  {
    icon: "💻",
    title: "Tech & Engineering Professionals",
    profile: "Software engineers, data scientists, and product specialists",
    benefit:
      "Bridge deep technical acumen with P&L accountability, business strategy, investor relations, and senior product leadership.",
  },
  {
    icon: "🚀",
    title: "Entrepreneurs & Venture Builders",
    profile: "Founders, family business successors, and innovation leaders",
    benefit:
      "Leverage Hong Kong's capital ecosystem, pitch to regional VC networks, and scale ventures across Mainland China and Southeast Asia.",
  },
  {
    icon: "🌏",
    title: "International Career Switchers",
    profile: "Global candidates targeting relocation and employment in Hong Kong",
    benefit:
      "Take advantage of Hong Kong's post-study visa (IANG), tax-efficient compensation, and booming corporate hiring in the Greater Bay Area.",
  },
];

export const CITYU_PROGRAMME_SPECS = {
  degree: "Master of Business Administration (MBA)",
  awardingBody: "City University of Hong Kong",
  faculty: "College of Business (AACSB & EQUIS accredited)",
  duration: "1 Year Full-Time (Weekday / Weekend) or 2 Years Part-Time",
  credits: "40 credit units (20 Core + 20 Electives)",
  intake: "August / September 2025 & 2026",
  language: "English",
  minimumWorkExp: "Minimum 2 years of post-qualification professional experience (3+ preferred)",
  entranceExam: "GMAT / GRE accepted (GMAT Focus / GRE or equivalent assessed with profile)",
  englishProficiency: "TOEFL (min 79) or IELTS (min 6.5) if undergraduate not taught in English",
  campus: "Tat Chee Avenue, Kowloon Tong, Hong Kong (Direct MTR interchange station)",
};

export const CITYU_OFFICIAL_LINKS = [
  {
    label: "Official CityUHK MBA Portal",
    url: "https://mba.cb.cityu.edu.hk/en/about-us/why-cityuhk-mba",
    type: "official",
  },
  {
    label: "Admissions & Entry Requirements",
    url: "https://mba.cb.cityu.edu.hk/en/admissions/admissions-requirements",
    type: "admissions",
  },
  {
    label: "Curriculum & Concentrations",
    url: "https://mba.cb.cityu.edu.hk/en/programme/programme-structure",
    type: "curriculum",
  },
  {
    label: "CityUHK College of Business LinkedIn",
    url: "https://www.linkedin.com/school/city-university-of-hong-kong-college-of-business/",
    type: "social",
  },
  {
    label: "CityUHK YouTube Channel",
    url: "https://www.youtube.com/@CityUHongKong",
    type: "social",
  },
];

export const CITYU_FAQ = [
  {
    question: "What makes the CityUHK MBA unique among Asian business schools?",
    answer:
      "The CityUHK MBA integrates AACSB and EQUIS accredited academic rigor with a cutting-edge STEM-enriched curriculum. Located in Hong Kong—the premier financial gateway to the Greater Bay Area—it delivers exceptional ROI, QS #86 global ranking, top QS Value for Money scores, and optional immersive modules with institutions like UC Berkeley and Imperial College London.",
  },
  {
    question: "Can I complete the CityUHK MBA in 1 year?",
    answer:
      "Yes. The full-time CityUHK MBA is an accelerated 12-month program requiring 40 credit units (20 core credits and 20 elective/concentration credits). Weekend study options are also available to provide flexibility.",
  },
  {
    question: "What are the core concentrations available in the MBA?",
    answer:
      "Students can complete specialized concentrations including MBA in Financial Technology (FinTech), MBA in Professional Accounting (aligned with CPA requirements), Business Analytics & Strategic Management, and General Management & Entrepreneurship.",
  },
  {
    question: "Are GMAT or GRE scores mandatory for CityUHK MBA admission?",
    answer:
      "CityUHK accepts competitive GMAT (or GMAT Focus Edition) and GRE scores, which strengthen applicants' scholarship and admission chances. Outstanding candidates with substantial professional or managerial leadership experience may be assessed holistically with interview performance.",
  },
  {
    question: "How does MBA Wizards assist applicants for CityUHK MBA?",
    answer:
      "MBA Wizards provides end-to-end guidance for CityUHK MBA aspirants: profile evaluation, GMAT/GRE test preparation, essay formulation, resume elevation, scholarship targeting, and interview simulation with mentors who understand top Asian business school admissions.",
  },
];
