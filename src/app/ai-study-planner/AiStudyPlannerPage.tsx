"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AiStudyPlanner.module.css";

const LIVE_PRODUCT_URL = "http://ai-planner.mbawizards.co.in/login";

interface ModuleSection {
  id: string;
  moduleNumber: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
  reversed: boolean; // if true, text left, image right; if false, image left, text right
  techPills: string[];
}

const moduleSections: ModuleSection[] = [
  {
    id: "admin-portal",
    moduleNumber: "01",
    badge: "Institutional Governance",
    title: "Centralized Admission & Study Plan Oversight",
    headline: "Real-time control over 142+ curriculum tracks, student enrollments, and institutional AI spend.",
    description:
      "Traditional educational institutes face severe drop-off rates because instructors cannot manually track whether 500+ students are studying every evening. The Admin Portal provides department heads and center directors with a bird's-eye view of active enrollments, course catalogs, syllabus completion health, and automated student invitation pipelines.",
    bullets: [
      "No Public Self-Registration: Enforces strictly verified admissions via email tokens or automated EduQuest HMAC webhooks.",
      "Curriculum Health Analytics: Live tracking of average syllabus task completion across active student cohorts.",
      "AI Operations & Token Auditing: Granular audit trails logging exact GPT-4o-mini token consumption and USD costs per student query.",
      "Operational Shortcuts: Instant bulk course catalog imports (structured JSON) and offline payment verification.",
    ],
    image: "/images/ai-study-planner/01-admin-portal-dashboard.jpg",
    alt: "Admin Overview Dashboard - MBA Wizards AI Career & Study Planner",
    reversed: false, // Image Left, Details Right
    techPills: ["FastAPI v1", "PostgreSQL", "Token Auditing", "Role Guards"],
  },
  {
    id: "student-dashboard",
    moduleNumber: "02",
    badge: "Learner Command Center",
    title: "Personalized AI Student Learning Dashboard",
    headline: "A welcoming, distraction-free cockpit connecting long-term career aspirations with daily micro-tasks.",
    description:
      "When a student logs in, they are immediately anchored with their verified student credentials (e.g. APT-MUM-2026-1001), active curriculum tracks, and pending milestones. The interface eliminates cognitive overload by surfacing today's exact learning actions rather than intimidating students with an unparsed 500-page textbook.",
    bullets: [
      "Contextual Greeting & Identity: Displays official certified career track and student admission identification.",
      "Direct Wizard Launch: One-click launchpad to configure custom study roadmaps based on personal availability.",
      "Active Course Status: Real-time verification of approved course enrollments, batch assignments, and target timelines.",
      "Integrated Progress Ring: Visual indicator of current completion percentage against official course requirements.",
    ],
    image: "/images/ai-study-planner/02-student-welcome-overview.jpg",
    alt: "Student Welcome Learning Dashboard - MBA Wizards AI Career & Study Planner",
    reversed: true, // Details Left, Image Right
    techPills: ["React 18", "Tailwind CSS", "Framer Motion", "JWT Interceptor"],
  },
  {
    id: "enrolled-courses",
    moduleNumber: "03",
    badge: "Curriculum Verification",
    title: "Verified Course Enrollments & Documentation",
    headline: "Complete institutional transparency with accredited study hours, modules, and official invoices.",
    description:
      "Every course card breaks down the official program into accredited learning hours (e.g. 3 Months / 72 hours for Digital SAT or 6 Months / 400 hours for ACCP Pro Full-Stack). Students can inspect modular topics, download official fee invoices, and launch their custom scheduler with zero administrative friction.",
    bullets: [
      "Accredited Learning Hours: Clear separation between classroom instruction hours and independent self-study hours.",
      "Modular Breakdown: Shows exact module count (e.g., 3 Modules • 9 Topics) and domain-specific weightage.",
      "Digital Invoicing: Downloadable verified admission records with student roll numbers and enrollment timestamps.",
      "Planner Quick-Launch: Immediate transition from enrollment confirmation to personalized capacity scheduling.",
    ],
    image: "/images/ai-study-planner/03-enrolled-courses-catalog.jpg",
    alt: "Enrolled Course Details and Syllabus Card - MBA Wizards AI Career & Study Planner",
    reversed: false, // Image Left, Details Right
    techPills: ["React Router v6", "Supabase Storage", "PDF Generation", "Lucide Icons"],
  },
  {
    id: "capacity-wizard",
    moduleNumber: "04",
    badge: "Deterministic Capacity Engine",
    title: "3-Step Capacity & Feasibility Planning Wizard",
    headline: "Mathematical validation that stops unrealistic cramming before it leads to student burnout.",
    description:
      "Most self-study schedules fail because students set unrealistic goals, such as attempting 400 hours of software engineering in 3 weeks. Our 3-Step Wizard mathematically verifies available weekly hours against course depth. If an aspiration is unfeasible, the engine triggers intelligent guardrails suggesting extended timelines or weekend study blocks.",
    bullets: [
      "Step 1: Course & Pacing Selection: Choose between Fast-Track (1 Mo), Intensive (2 Mo), or Balanced (3+ Mo).",
      "Step 2: Availability Coordinates: Select study days (e.g., Mon–Fri) and dedicated daily study hours (e.g., 2 hrs/day).",
      "Step 3: Algorithmic Feasibility Validation: Mathematical check verifying that total available hours exceed course requirements.",
      "Topological Prerequisites: Arranges core foundational topics strictly before advanced frameworks.",
    ],
    image: "/images/ai-study-planner/04-study-plan-onboarding-wizard.jpg",
    alt: "Study Plan Creation Onboarding Wizard - MBA Wizards AI Career & Study Planner",
    reversed: true, // Details Left, Image Right
    techPills: ["Topological Scheduler", "React Hook Form", "Zod Validation", "Capacity Heuristics"],
  },
  {
    id: "weekly-schedule",
    moduleNumber: "05",
    badge: "Adaptive Execution",
    title: "Weekly Adaptive Schedule & Dynamic Rescheduling",
    headline: "A living calendar that automatically reschedules missed study sessions without judgment.",
    description:
      "When work deadlines or family emergencies disrupt a student's study timetable, traditional fixed schedules become demotivating. Our adaptive scheduling engine detects unattended milestones and dynamically redistributes unfinished topics across future open study days, preserving prerequisite sequences and completed work.",
    bullets: [
      "Day-by-Day Micro-Tasks: Clear assignment of theory reading, interactive lab exercises, and mock assessments.",
      "Zero-Guilt Dynamic Catch-Up: Missed tasks automatically roll forward to upcoming available study slots.",
      "Built-in Pomodoro Study Timer: Track real-time study minutes with stopwatch precision to prevent fake progress.",
      "Weekly Horizon Navigation: Seamlessly toggle between past performance records and upcoming milestones.",
    ],
    image: "/images/ai-study-planner/05-weekly-adaptive-schedule.png",
    alt: "Weekly Adaptive Schedule Calendar - MBA Wizards AI Career & Study Planner",
    reversed: false, // Image Left, Details Right
    techPills: ["Dynamic Rescheduling", "Pomodoro Context", "Recharts Timeline", "State Machines"],
  },
  {
    id: "attendance-records",
    moduleNumber: "06",
    badge: "Institutional Auditability",
    title: "Class Attendance Records & Activity Verification",
    headline: "Unifying physical classroom attendance with independent self-study completion.",
    description:
      "Maintains dual-verified records ensuring compliance with corporate training and academic accreditation requirements. Centers can instantly audit student participation, track attendance percentages, and identify disengaged learners before they fail exams.",
    bullets: [
      "100% Audit Precision: Comprehensive logs for Present, Absent, Late, and Excused sessions.",
      "Dual Verification: Activity cross-checked between classroom mentor check-ins and platform study timer logs.",
      "Instant Filtering: Slice attendance history by specific enrolled courses, modules, or date ranges.",
      "Institutional Compliance: Exportable audit sheets for academic credentials and employer sponsorships.",
    ],
    image: "/images/ai-study-planner/06-attendance-verified-records.jpg",
    alt: "Class Attendance and Log History - MBA Wizards AI Career & Study Planner",
    reversed: true, // Details Left, Image Right
    techPills: ["SQLAlchemy 2.0", "FastAPI Endpoints", "PostgreSQL Indexing", "Audit Trails"],
  },
  {
    id: "syllabus-browser",
    moduleNumber: "07",
    badge: "Pedagogical Structure",
    title: "Official Course Syllabus & Topic Hierarchy",
    headline: "Authoritative curriculum transparency with accredited domains, questions, and skill levels.",
    description:
      "Students never have to guess what to study next. The syllabus explorer lays out the official curriculum hierarchy with accredited hours per module, difficulty tiers (Intermediate, Advanced), domain question counts (e.g., Reading & Writing: 54 Qs / 64 mins), and approved resource links.",
    bullets: [
      "Module & Topic Hierarchy: Systematic grouping by functional domains (e.g. Craft & Structure, Information & Ideas).",
      "Official Time Allocations: Precise hour recommendations for lectures, conceptual review, and timed drills.",
      "Curriculum Versioning: Tracks accredited versions (e.g. Version 2026.1) to guarantee current exam blueprint alignment.",
      "Skill Competency Tags: Clear categorization across grammar boundaries, data inferences, and quantitative formulas.",
    ],
    image: "/images/ai-study-planner/07-official-course-syllabus.jpg",
    alt: "Official Course Syllabus Hierarchy - MBA Wizards AI Career & Study Planner",
    reversed: false, // Image Left, Details Right
    techPills: ["Pydantic v2 Schemas", "Hierarchical Data Trees", "JSON Store", "Responsive UI"],
  },
  {
    id: "ai-tutor",
    moduleNumber: "08",
    badge: "24/7 Context-Locked AI",
    title: "Context-Aware GPT-4o-mini AI Learning Assistant",
    headline: "An on-demand private tutor strictly constrained to official syllabus context without hallucinations.",
    description:
      "Unlike generic chatbots that suggest advanced out-of-syllabus programming paradigms or confusing shortcuts, our AI Tutor operates with strict system containment. It recognizes the student's active module, explains concepts using approved pedagogy, debugs errors, and generates customized practice drills.",
    bullets: [
      "Strict Curriculum Containment: Pre-prompted with course modules to eliminate irrelevant AI hallucinations.",
      "One-Click Technical Prompts: Ready prompts for synchronous vs async FastAPI, PostgreSQL indexing, and React 18 hooks.",
      "Interactive Code Debugging: Analyzes student syntax errors with clear step-by-step remediation advice.",
      "Token & Cost Tracking: Complete transparency tracking input/output tokens and real-time USD costs.",
    ],
    image: "/images/ai-study-planner/08-ai-curriculum-tutor.jpg",
    alt: "Context Aware AI Learning Assistant - MBA Wizards AI Career & Study Planner",
    reversed: true, // Details Left, Image Right
    techPills: ["OpenAI GPT-4o-mini", "Prompt Containment", "Cost Audit Middleware", "Streaming Chat"],
  },
  {
    id: "security-credentials",
    moduleNumber: "09",
    badge: "Enterprise Security",
    title: "Role-Guarded Identity & Cryptographic Security",
    headline: "Military-grade Argon2id password hashing, JWT authorization, and verified webhook integrations.",
    description:
      "Educational platforms store sensitive student records and corporate credentials. The system implements industry-standard cybersecurity protocols: memory-hard Argon2id password hashing resistant to GPU brute-force attacks, JSON Web Tokens (JWT) with access/refresh rotation, and HMAC-SHA256 signature verification for external webhooks.",
    bullets: [
      "Argon2id Cryptography: Cutting-edge memory-hard password hashing that completely resists GPU rainbow table attacks.",
      "Strict Role-Based Access Control: Granular security guards separating Administrator and Student capabilities.",
      "EduQuest HMAC Webhook Integration: Tamper-proof student auto-provisioning from verified admissions portals.",
      "Zero Public Self-Signup: Protects platform resources from bot registrations and unauthorized course access.",
    ],
    image: "/images/ai-study-planner/09-student-credentials-security.jpg",
    alt: "Student Profile and Security Credentials - MBA Wizards AI Career & Study Planner",
    reversed: false, // Image Left, Details Right
    techPills: ["Argon2id (argon2-cffi)", "Python-JOSE (JWT)", "HMAC-SHA256", "HTTPS Transport"],
  },
];

const techStackData = [
  {
    layer: "Frontend Layer",
    techs: [
      { name: "React 18", role: "UI Component Framework with concurrent rendering" },
      { name: "TypeScript 5.4+", role: "End-to-end type safety and compile-time bug prevention" },
      { name: "Vite", role: "Ultra-fast HMR development server & production bundler" },
      { name: "Tailwind CSS", role: "Utility-first responsive design & custom theme styling" },
      { name: "Lucide React", role: "Clean, consistent iconography" },
      { name: "Framer Motion", role: "Hardware-accelerated 3D transforms & page transitions" },
      { name: "Recharts", role: "Interactive burndown curves & velocity analytics charts" },
      { name: "React Hook Form + Zod", role: "High-performance schema-validated form wizards" },
    ],
  },
  {
    layer: "Backend Layer",
    techs: [
      { name: "Python 3.11+", role: "Modern asynchronous high-performance programming runtime" },
      { name: "FastAPI", role: "Asynchronous REST API framework with automatic OpenAPI docs" },
      { name: "SQLAlchemy 2.0+", role: "Declarative Object Relational Mapping (ORM) with async engines" },
      { name: "Pydantic v2", role: "Blazing fast Rust-powered data validation and serialization" },
      { name: "Argon2id", role: "Winner of the Password Hashing Competition (GPU brute-force proof)" },
      { name: "Python-JOSE", role: "Cryptographic JWT authentication (Access & Refresh tokens)" },
      { name: "OpenAI Python SDK", role: "GPT-4o-mini integration for syllabus-contained AI tutoring" },
      { name: "Alembic & Pytest", role: "Database schema migrations and automated test coverage" },
    ],
  },
  {
    layer: "Database & Cloud Storage",
    techs: [
      { name: "Supabase (PostgreSQL)", role: "Enterprise cloud relational database (Single Source of Truth)" },
      { name: "SQLite Fallback", role: "Automatic local zero-config fallback for offline development" },
      { name: "Supabase Storage", role: "Secure storage for course syllabus PDFs & learning assets" },
      { name: "Connection Pooling", role: "Optimized connection reuse for high concurrency under peak traffic" },
    ],
  },
  {
    layer: "Integrations & Deployment",
    techs: [
      { name: "EduQuest Webhook", role: "HMAC-SHA256 signature verified automated student provisioning" },
      { name: "Transactional SMTP", role: "Automated account activation tokens & password reset dispatches" },
      { name: "Docker & Compose", role: "Multi-container orchestration for unified staging & production" },
      { name: "Swagger / ReDoc", role: "Interactive live API documentation at /docs and /redoc" },
    ],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Admission & Onboarding",
    desc: "Admin invites verified student or external portal triggers an HMAC-SHA256 webhook. Student receives secure activation token via email.",
  },
  {
    step: "02",
    title: "Course Track Enrollment",
    desc: "Student is enrolled into an official curriculum track (e.g. Full Stack Engineering, Digital SAT, Data Science).",
  },
  {
    step: "03",
    title: "Planner Capacity Wizard",
    desc: "Student inputs their availability: 'I can study Mon-Fri for 2 hours/day and need to finish in 3 months.'",
  },
  {
    step: "04",
    title: "Topological Scheduling",
    desc: "Scheduler engine mathematically validates capacity and arranges topics in strict prerequisite order across study dates.",
  },
  {
    step: "05",
    title: "Daily Execution & Timer",
    desc: "Student accesses daily tasks, activates built-in Pomodoro timer, completes drills, and queries AI Tutor for 24/7 help.",
  },
  {
    step: "06",
    title: "Dynamic Auto-Rescheduling",
    desc: "If life interrupts and tasks are missed, the engine redistributes remaining work across future free days automatically.",
  },
];

const faqs = [
  {
    q: "What makes the AI Career & Study Planner different from generic calendar apps?",
    a: "Generic calendar apps (like Google Calendar) only block raw time slots. They do not know what topics are inside a course, what prerequisites must come first, or whether a goal is mathematically realistic. The MBA Wizards AI Career & Study Planner is curriculum-aware: it understands module dependencies, validates student capacity against course hours, reschedules missed work automatically, and includes an AI tutor locked to the syllabus.",
  },
  {
    q: "How does the feasibility validator prevent student burnout?",
    a: "When a student tries to pack 400 hours of technical material into a 30-day window, generic planners blindly accept it, leading to inevitable exhaustion and abandonment. Our capacity engine calculates total required hours versus available study windows. If daily requirements exceed healthy cognitive limits, it issues warnings and provides practical adjustments (e.g., extend target date or add weekend review).",
  },
  {
    q: "Can this system support both IT software courses and MBA/SAT test prep?",
    a: "Yes! As shown in the live application, the architecture supports both College Board Digital SAT / MBA entrance curricula (Reading & Writing, Math with Desmos, Bluebook Adaptive Mocks) and full-scale technical software engineering tracks (ACCP Pro, Python AI, Full Stack MERN, Data Science).",
  },
  {
    q: "How does the AI Tutor keep answers strictly inside the curriculum?",
    a: "The backend AI service extracts the active topic's domain scope and injects it as a system boundary into each OpenAI GPT-4o-mini request. When a student asks a question, the model answers within the pedagogy of that course, preventing confusing out-of-syllabus tangents and tracking exact token usage in USD.",
  },
  {
    q: "How can students and institutions access the live platform?",
    a: "The platform is live at http://ai-planner.mbawizards.co.in/login. Students receive verified admission credentials from their institute administrator, while institutional directors can request an onboarding demo through our Gurgaon or Delhi NCR centers.",
  },
];

export default function AiStudyPlannerPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroBadge}>
            <span className={styles.heroPulse} />
            <span>Official EdTech &amp; Admissions Architecture • MBA Wizards</span>
          </div>

          <h1 className={styles.heroTitle}>
            AI Career &amp; Study Planner:{" "}
            <span className={styles.titleHighlight}>
              Autonomous Daily Scheduling, Feasibility Validation &amp; 24/7 AI Mentorship
            </span>
          </h1>

          <p className={styles.heroSubtitle}>
            A production-ready, full-stack educational web application engineered by MBA Wizards with FastAPI, React 18, Supabase PostgreSQL, and OpenAI GPT-4o-mini. Turning multi-month technical syllabi into mathematically verified daily milestones with zero student burnout.
          </p>

          {/* Action CTAs */}
          <div className={styles.heroActions}>
            <a
              href={LIVE_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroPrimaryBtn}
            >
              <span>Launch Live Planner App (Login)</span>
              <span className={styles.btnArrow}>↗</span>
            </a>

            <a href="#features-zigzag" className={styles.heroSecondaryBtn}>
              <span>Explore Architecture &amp; 9 Modules ↓</span>
            </a>

            <Link href="/contact-us" className={styles.heroTertiaryBtn}>
              <span>Book Institutional Consultation</span>
            </Link>
          </div>

          {/* Live Metrics Ribbon */}
          <div className={styles.metricsRibbon}>
            <div className={styles.metricCard}>
              <div className={styles.metricVal}>142+</div>
              <div className={styles.metricLabel}>Curriculum Catalogues Supported</div>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricCard}>
              <div className={styles.metricVal}>100%</div>
              <div className={styles.metricLabel}>Deterministic Feasibility Validation</div>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricCard}>
              <div className={styles.metricVal}>24/7</div>
              <div className={styles.metricLabel}>Syllabus-Contained AI Tutor</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE PROBLEM & THE ARCHITECTURAL SOLUTION */}
      <section className={styles.problemSolutionSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>The Educational Challenge</span>
            <h2 className={styles.sectionTitle}>
              Why Do 68% of Students Abandon Long-Term Study Plans?
            </h2>
            <p className={styles.sectionDesc}>
              When students enroll in ambitious courses—whether ACCP Pro Software Engineering, Data Science, or Digital SAT / GMAT preparation—the curriculum spans 6 to 12 months. Without daily micro-structure, cognitive fatigue sets in.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.problemCard}>
              <div className={styles.cardHeaderBad}>
                <span className={styles.badgeIcon}>✕</span>
                <h3>Traditional Study Planning (What Fails)</h3>
              </div>
              <ul className={styles.checkListBad}>
                <li>Static PDF timetables that break the moment a student misses one day.</li>
                <li>Unrealistic cramming aspirations that lead to mental exhaustion in Week 3.</li>
                <li>Zero prerequisite tracking; students jump to advanced topics without fundamentals.</li>
                <li>Generic AI chatbots that hallucinate confusing out-of-syllabus programming libraries.</li>
                <li>Instructors have zero visibility into daily self-study hours until exam failure.</li>
              </ul>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.cardHeaderGood}>
                <span className={styles.badgeIcon}>✓</span>
                <h3>The MBA Wizards AI Career &amp; Study Planner Solution</h3>
              </div>
              <ul className={styles.checkListGood}>
                <li><strong>Deterministic Capacity Check:</strong> Mathematically validates daily hours before creating a schedule.</li>
                <li><strong>Topological Prerequisite Ordering:</strong> Foundations are strictly mastered before frameworks.</li>
                <li><strong>Dynamic Auto-Rescheduling:</strong> Automatically rolls missed work forward without guilt.</li>
                <li><strong>Syllabus-Contained AI Tutor:</strong> GPT-4o-mini answers locked strictly to course learning objectives.</li>
                <li><strong>Real-Time Burndown Analytics:</strong> Administrative visibility into velocity and completion health.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NINE ALTERNATING ZIG-ZAG SECTIONS WITH 3D ROTATEX ANIMATION */}
      <section id="features-zigzag" className={styles.zigzagSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>End-to-End System Deep Dive</span>
            <h2 className={styles.sectionTitle}>
              9 Intelligent Modules Powering Student Success
            </h2>
            <p className={styles.sectionDesc}>
              Inspect the live production screens from the Admin Portal and Student Learning Cockpit. Each section illustrates how the platform automates academic discipline.
            </p>
          </div>

          <div className={styles.zigzagList}>
            {moduleSections.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.zigzagRow} ${item.reversed ? styles.zigzagRowReversed : ""}`}
              >
                {/* Visual / Screenshot Side with 3D RotateX Animation */}
                <div className={styles.zigzagImageSide}>
                  <div className={styles.rotateXFrame}>
                    <div className={styles.browserWindow}>
                      <div className={styles.browserBar}>
                        <div className={styles.browserPills}>
                          <span className={styles.pRed} />
                          <span className={styles.pYellow} />
                          <span className={styles.pGreen} />
                        </div>
                        <span className={styles.browserAddress}>
                          ai-planner.mbawizards.co.in/{item.id}
                        </span>
                        <span className={styles.browserTag}>LIVE ⚡</span>
                      </div>

                      <div className={styles.browserBody}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={960}
                          height={540}
                          className={styles.moduleScreenshot}
                        />
                        <div className={styles.glassShine} />
                      </div>
                    </div>

                    <div className={styles.captionTag}>
                      <span>Screenshot {item.moduleNumber} • {item.title}</span>
                    </div>
                  </div>
                </div>

                {/* Details / Text Side */}
                <div className={styles.zigzagTextSide}>
                  <div className={styles.moduleMeta}>
                    <span className={styles.moduleBadge}>Module {item.moduleNumber}</span>
                    <span className={styles.trackBadge}>{item.badge}</span>
                  </div>

                  <h3 className={styles.moduleTitle}>{item.title}</h3>
                  <h4 className={styles.moduleHeadline}>{item.headline}</h4>
                  <p className={styles.moduleParagraph}>{item.description}</p>

                  <div className={styles.moduleBullets}>
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className={styles.bulletRow}>
                        <span className={styles.bulletCheck}>✓</span>
                        <p className={styles.bulletText}>{b}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className={styles.techPillRow}>
                    {item.techPills.map((tp, tpIdx) => (
                      <span key={tpIdx} className={styles.techPill}>
                        {tp}
                      </span>
                    ))}
                  </div>

                  {/* Direct Launch Link */}
                  <div className={styles.moduleAction}>
                    <a
                      href={LIVE_PRODUCT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.moduleLink}
                    >
                      <span>Experience this module in live app</span>
                      <span className={styles.linkArrow}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH STACK & SYSTEM ARCHITECTURE */}
      <section className={styles.techStackSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>Engineering Excellence</span>
            <h2 className={styles.sectionTitle}>
              Full-Stack Production Tech Stack &amp; Infrastructure
            </h2>
            <p className={styles.sectionDesc}>
              Constructed with the industry's most reliable modern stack, prioritizing high concurrency, strict type safety, cryptographic password security, and responsive UX.
            </p>
          </div>

          <div className={styles.techGrid}>
            {techStackData.map((layer, lIdx) => (
              <div key={lIdx} className={styles.techCard}>
                <div className={styles.techCardHeader}>
                  <span className={styles.layerIndex}>0{lIdx + 1}</span>
                  <h3 className={styles.layerName}>{layer.layer}</h3>
                </div>

                <div className={styles.techItems}>
                  {layer.techs.map((t, tIdx) => (
                    <div key={tIdx} className={styles.techItem}>
                      <span className={styles.techItemName}>{t.name}</span>
                      <span className={styles.techItemRole}>{t.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 6-STAGE WORKFLOW */}
      <section className={styles.workflowSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>Step-by-Step Mechanism</span>
            <h2 className={styles.sectionTitle}>
              How the Autonomous Study Cycle Works
            </h2>
            <p className={styles.sectionDesc}>
              From institutional admission onboarding to dynamic catch-up rescheduling, witness the closed-loop algorithm maintaining student momentum.
            </p>
          </div>

          <div className={styles.workflowGrid}>
            {workflowSteps.map((ws, wIdx) => (
              <div key={wIdx} className={styles.workflowCard}>
                <div className={styles.workflowStepNumber}>{ws.step}</div>
                <h4 className={styles.workflowCardTitle}>{ws.title}</h4>
                <p className={styles.workflowCardDesc}>{ws.desc}</p>
                <div className={styles.workflowLine} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LOCAL SETUP & DEVELOPER QUICKSTART GUIDE */}
      <section className={styles.developerGuideSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>Developer Quickstart</span>
            <h2 className={styles.sectionTitle}>
              Run the Full-Stack Application Locally in 5 Minutes
            </h2>
            <p className={styles.sectionDesc}>
              Follow these commands to launch the FastAPI backend server and Vite React frontend on your local development machine.
            </p>
          </div>

          <div className={styles.terminalContainer}>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span className={styles.tDotRed} />
                  <span className={styles.tDotYellow} />
                  <span className={styles.tDotGreen} />
                </div>
                <span className={styles.terminalTitle}>PowerShell — Backend Setup (FastAPI &amp; SQLite/PostgreSQL)</span>
              </div>
              <pre className={styles.codeSnippet}>
                <code>{`# Step 1: Navigate to backend directory
cd ai-career-study-planner\\backend

# Step 2: Create and activate Python virtual environment
python -m venv venv
.\\venv\\Scripts\\activate

# Step 3: Install all dependencies (FastAPI, SQLAlchemy, Pydantic, Argon2id)
pip install -r requirements.txt

# Step 4: Seed courses, create default Admin & Demo student
python scripts/bootstrap.py

# Step 5: Start the asynchronous FastAPI backend server
uvicorn app.main:app --reload --port 8000

# Backend Swagger UI Docs live at: http://localhost:8000/docs`}</code>
              </pre>
            </div>

            <div className={styles.terminalWindow}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span className={styles.tDotRed} />
                  <span className={styles.tDotYellow} />
                  <span className={styles.tDotGreen} />
                </div>
                <span className={styles.terminalTitle}>PowerShell — Frontend Setup (React 18 &amp; Vite)</span>
              </div>
              <pre className={styles.codeSnippet}>
                <code>{`# Step 1: Navigate to frontend directory
cd ai-career-study-planner\\frontend

# Step 2: Install dependencies (React 18, Tailwind, Lucide, Recharts)
npm install

# Step 3: Start the fast Vite development server
npm run dev

# Frontend single-page app live at: http://localhost:5173`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOCAL SEO & STRATEGIC INTERNAL LINKS */}
      <section className={styles.localSeoSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>Geographic &amp; Academic Integration</span>
            <h2 className={styles.sectionTitle}>
              Integrated with MBA Wizards Test Prep &amp; Career Hubs
            </h2>
            <p className={styles.sectionDesc}>
              Available across our premier learning centers in Gurgaon Cyber City, Golf Course Road, Delhi NCR, Bangalore, Mumbai, and Hyderabad. Connecting software career pathways directly with elite global admissions consulting.
            </p>
          </div>

          <div className={styles.internalLinksGrid}>
            <div className={styles.linkCard}>
              <h4>🎯 GMAT Focus Preparation</h4>
              <p>Achieve 705+ on GMAT Focus Edition with diagnostic error logging and IIT Roorkee mentorship.</p>
              <Link href="/gmat-coaching" className={styles.cardLink}>
                Explore GMAT Coaching in Gurgaon &amp; Delhi NCR →
              </Link>
            </div>

            <div className={styles.linkCard}>
              <h4>🐯 CAT 99.5+ Percentile Coaching</h4>
              <p>Master IIM Quant, DILR matrix sets, and VARC RC with our proprietary Manthan Pedagogy.</p>
              <Link href="/cat" className={styles.cardLink}>
                Explore CAT 2026 Preparation Roadmap →
              </Link>
            </div>

            <div className={styles.linkCard}>
              <h4>📊 GRE General Test Classes</h4>
              <p>Score 325+ for top MS in Computer Science and US/European MBA programs with tailored vocab plans.</p>
              <Link href="/gre-coaching-classes" className={styles.cardLink}>
                Explore GRE Coaching Classes →
              </Link>
            </div>

            <div className={styles.linkCard}>
              <h4>⚡ AI Career Intelligence Tool</h4>
              <p>Evaluate your academic rigor, profile strengths, and business school readiness with our AI engine.</p>
              <Link href="/career-intelligence" className={styles.cardLink}>
                Launch AI Career Intelligence Platform →
              </Link>
            </div>

            <div className={styles.linkCard}>
              <h4>🏛️ College Consulting Packages</h4>
              <p>M7 &amp; top European MBA application consulting, essay storytelling, and STAR interview prep.</p>
              <Link href="/premium-university-consulting-packages" className={styles.cardLink}>
                View Admissions Consulting Packages →
              </Link>
            </div>

            <div className={styles.linkCard}>
              <h4>🎓 MBA Wizards Methodology</h4>
              <p>Discover our 30-year legacy of ability-based coaching founded by IIT Roorkee alumni.</p>
              <Link href="/mba-wizards-methodology" className={styles.cardLink}>
                Learn About Our Teaching Philosophy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. AEO & GEO FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.subHeading}>Frequently Asked Questions</span>
            <h2 className={styles.sectionTitle}>
              Everything You Need to Know About the AI Study Planner
            </h2>
            <p className={styles.sectionDesc}>
              Clear answers to technical, operational, and pedagogical questions regarding platform deployment and student outcomes.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className={`${styles.faqItem} ${activeFaq === fIdx ? styles.faqOpen : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(fIdx)}
                  className={styles.faqQuestionBtn}
                >
                  <span className={styles.faqQuestionText}>{faq.q}</span>
                  <span className={styles.faqIcon}>{activeFaq === fIdx ? "−" : "+"}</span>
                </button>
                {activeFaq === fIdx && (
                  <div className={styles.faqAnswerBody}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CONVERSION CTA */}
      <section className={styles.bottomCtaSection}>
        <div className={styles.container}>
          <div className={styles.bottomCtaCard}>
            <div className={styles.ctaBadge}>⚡ Ready for Unstoppable Learning Velocity?</div>
            <h2 className={styles.bottomCtaTitle}>
              Experience the MBA Wizards AI Career &amp; Study Planner Today
            </h2>
            <p className={styles.bottomCtaSubtitle}>
              Whether you are an ambitious student preparing for an IT career course or an educational institute managing multi-batch cohorts, our platform delivers disciplined, mathematically proven consistency.
            </p>

            <div className={styles.bottomCtaActions}>
              <a
                href={LIVE_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bottomPrimaryBtn}
              >
                <span>Access Student / Admin Portal</span>
                <span className={styles.btnArrow}>↗</span>
              </a>

              <Link href="/contact-us" className={styles.bottomSecondaryBtn}>
                <span>Book a Guided Institutional Demo</span>
              </Link>
            </div>

            <div className={styles.ctaFooterNote}>
              🔒 Protected by Argon2id memory-hard cryptography • Official URL: {LIVE_PRODUCT_URL}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
