"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AiPlannerShowcase.module.css";

export interface PlannerSlide {
  id: string;
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
}

export const plannerSlides: PlannerSlide[] = [
  {
    id: "admin-oversight",
    step: "01",
    badge: "Admin & Operations",
    title: "Centralized Admission & Study Plan Oversight",
    subtitle: "Manage official course tracks, verify student enrollments, and audit AI token consumption in real time.",
    description: "Eliminates administrative bottlenecks with automated student onboarding, verified admission tokens, real-time syllabus completion health metrics, and comprehensive AI usage cost auditing.",
    image: "/images/ai-study-planner/01-admin-portal-dashboard.jpg",
    alt: "MBA Wizards AI Career & Study Planner - Admin Overview Dashboard",
    highlights: [
      "Real-time student progress tracking & plan reviews",
      "Course catalog management across 142+ curriculum tracks",
      "AI token cost auditing & verified batch attendance logs",
    ],
  },
  {
    id: "student-dashboard",
    step: "02",
    badge: "Student Hub",
    title: "Personalized AI Student Learning Command Center",
    subtitle: "A unified portal greeting students with their active enrolled curriculum, study targets, and daily progress.",
    description: "Personalized dashboard that bridges long-term IT and test preparation goals with actionable daily milestones, helping students maintain unbreakable consistency across 6 to 12-month programs.",
    image: "/images/ai-study-planner/02-student-welcome-overview.jpg",
    alt: "MBA Wizards AI Career & Study Planner - Student Learning Overview",
    highlights: [
      "Direct launch for AI Planner Onboarding Wizard",
      "Approved course enrollment status & batch tracking",
      "Integrated Pomodoro timer & daily task alerts",
    ],
  },
  {
    id: "enrolled-courses",
    step: "03",
    badge: "Curriculum Catalog",
    title: "Verified Course Enrollments & Milestone Roadmaps",
    subtitle: "Inspect accredited syllabus hours, structured modules, and official admission documentation.",
    description: "Clear institutional transparency with duration breakdowns (e.g. 3 Months / 72 accredited hours), modular topic structures, downloadable fee invoices, and one-click planner configuration.",
    image: "/images/ai-study-planner/03-enrolled-courses-catalog.jpg",
    alt: "MBA Wizards AI Career & Study Planner - Enrolled Course Catalog",
    highlights: [
      "Accredited duration & total learning hours visibility",
      "Modular topic hierarchy with clear prerequisites",
      "One-click study plan configuration & invoice access",
    ],
  },
  {
    id: "capacity-wizard",
    step: "04",
    badge: "3-Step Wizard",
    title: "Intelligent Capacity & Feasibility Validator",
    subtitle: "Topological scheduling that mathematically checks whether your target completion date is realistic.",
    description: "Before locking in a study timetable, our deterministic capacity engine validates available weekly hours against required syllabus depth, preventing burnout and unrealistic deadline cramming.",
    image: "/images/ai-study-planner/04-study-plan-onboarding-wizard.jpg",
    alt: "MBA Wizards AI Career & Study Planner - 3-Step Study Plan Creation Wizard",
    highlights: [
      "Custom study duration selection (1, 2, or 3+ months)",
      "Daily available hours & active study days allocation",
      "Mathematically verified capacity feasibility check",
    ],
  },
  {
    id: "weekly-schedule",
    step: "05",
    badge: "Adaptive Calendar",
    title: "Dynamic Daily Tasks & Auto-Rescheduling Calendar",
    subtitle: "Visual day-by-day study roadmap that automatically adapts if you miss study sessions.",
    description: "Life happens. If a student falls behind due to college or work emergencies, the scheduling engine intelligently shifts pending tasks to future open study slots without disrupting completed milestones.",
    image: "/images/ai-study-planner/05-weekly-adaptive-schedule.png",
    alt: "MBA Wizards AI Career & Study Planner - Weekly Adaptive Study Schedule",
    highlights: [
      "Micro-task breakdown for theory, coding & practice mocks",
      "Automated catch-up redistribution for missed study sessions",
      "Color-coded timeline with visual completion indicators",
    ],
  },
  {
    id: "attendance-records",
    step: "06",
    badge: "Institutional Audit",
    title: "Class Attendance Tracking & Verified Log History",
    subtitle: "Automated session attendance records linked directly to student milestone completion.",
    description: "Maintains an unalterable log of attended classes, missed sessions, and excused leaves. Integrates study planner activity with physical classroom participation for 100% institutional compliance.",
    image: "/images/ai-study-planner/06-attendance-verified-records.jpg",
    alt: "MBA Wizards AI Career & Study Planner - Attendance Logs and Records",
    highlights: [
      "Real-time attendance percentage & health badges",
      "Filterable session logs by course and topic",
      "Dual verification by mentors and automated study sessions",
    ],
  },
  {
    id: "syllabus-browser",
    step: "07",
    badge: "Syllabus Hierarchy",
    title: "Authoritative Curriculum Hierarchy & Learning Hours",
    subtitle: "Granular breakdown of modules, topics, domain question distributions, and skill difficulty tiers.",
    description: "Complete pedagogical roadmap displaying intermediate and advanced learning tiers, recommended practice hours per domain, and official College Board or software engineering competencies.",
    image: "/images/ai-study-planner/07-official-course-syllabus.jpg",
    alt: "MBA Wizards AI Career & Study Planner - Official Curriculum and Topics",
    highlights: [
      "Domain-by-domain question count & time allocations",
      "Structured prerequisites preventing out-of-order learning",
      "Skill tags: Craft & Structure, Information & Ideas, Math",
    ],
  },
  {
    id: "ai-tutor",
    step: "08",
    badge: "GPT-4o-mini AI",
    title: "Context-Aware AI Curriculum Tutor (24/7 Learning)",
    subtitle: "Syllabus-locked AI assistant that explains complex concepts, debugs code, and generates practice questions.",
    description: "Powered by OpenAI GPT-4o-mini with prompt containment. Unlike open-ended chatbots, our AI tutor stays strictly within official course context, delivering relevant concept explanations and exam prep.",
    image: "/images/ai-study-planner/08-ai-curriculum-tutor.jpg",
    alt: "MBA Wizards AI Career & Study Planner - Context Aware AI Learning Assistant",
    highlights: [
      "Strict curriculum context containment (no off-topic hallucinations)",
      "Instant code debugging, architectural queries & syntax help",
      "Automated token usage & cost tracking per query",
    ],
  },
  {
    id: "security-credentials",
    step: "09",
    badge: "Enterprise Security",
    title: "Military-Grade Security & Role-Guarded Access",
    subtitle: "Argon2id password hashing, JWT authentication, and strict role guards protecting student records.",
    description: "Enterprise-grade educational infrastructure featuring memory-hard Argon2id cryptography, HTTPS transport encryption, verified token activation emails, and zero public self-registration.",
    image: "/images/ai-study-planner/09-student-credentials-security.jpg",
    alt: "MBA Wizards AI Career & Study Planner - Security and Student Identity Management",
    highlights: [
      "Argon2id password hashing resistant to GPU brute-force",
      "Strict role guards for Administrator and Student tiers",
      "HMAC-SHA256 verified webhook integration with EduQuest",
    ],
  },
];

interface AiPlannerShowcaseProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  autoPlay?: boolean;
}

export default function AiPlannerShowcase({
  title = "AI Career & Study Planner: Autonomous Daily Scheduling & AI Mentorship",
  subtitle = "Experience the production-ready full-stack educational engine built with FastAPI, React 18, and GPT-4o-mini to turn ambitious syllabi into achievable daily victories.",
  compact = false,
  autoPlay = false, // Default to false so 1st image stays strictly as the default starting image
}: AiPlannerShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0); // Guaranteed starting 1st image
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % plannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + plannerSlides.length) % plannerSlides.length);
  };

  // Reset to 1st image when scrolled away, ensuring fresh visit always starts at 1st image
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setCurrentIdx(0); // Reset to 1st image when out of view
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered]);

  const active = plannerSlides[currentIdx];

  return (
    <section
      ref={sectionRef}
      className={`${styles.showcaseSection} ${compact ? styles.compactSection : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="MBA Wizards AI Career & Study Planner Platform Showcase"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.preTitleBadge}>
            <span className={styles.pulseDot} />
            <span>Official EdTech Architecture • Powered by MBA Wizards</span>
          </div>
          <h2 className={styles.mainTitle}>{title}</h2>
          <p className={styles.mainSubtitle}>{subtitle}</p>
        </div>

        {/* 60vh Interactive Carousel Wrapper */}
        <div className={styles.carouselFrame}>
          <div className={styles.slideContainer}>
            {/* Left: Text & Capability Details */}
            <div className={styles.detailsCol}>
              <div className={styles.metaRow}>
                <span className={styles.stepBadge}>Module {active.step} of 09</span>
                <span className={styles.categoryBadge}>{active.badge}</span>
              </div>

              <h3 className={styles.slideTitle}>{active.title}</h3>
              <p className={styles.slideSubtitle}>{active.subtitle}</p>
              <p className={styles.slideDesc}>{active.description}</p>

              <div className={styles.highlightsList}>
                {active.highlights.map((h, i) => (
                  <div key={i} className={styles.highlightItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className={styles.actionsRow}>
                <Link href="/ai-study-planner" className={styles.primaryBtn}>
                  <span>Explore Full Platform Details</span>
                  <span className={styles.arrowIcon}>→</span>
                </Link>
                <Link href="/contact-us" className={styles.secondaryBtn}>
                  <span>Request Institutional Demo</span>
                </Link>
              </div>
            </div>

            {/* Right: Screenshot Card with 3D RotateX Animation */}
            <div className={styles.imageCol}>
              <div className={styles.imageCardWrapper}>
                <div className={styles.imageCard}>
                  <div className={styles.browserHeader}>
                    <div className={styles.browserDots}>
                      <span className={styles.dotRed} />
                      <span className={styles.dotYellow} />
                      <span className={styles.dotGreen} />
                    </div>
                    <span className={styles.browserUrl}>
                      app.mbawizards.co.in/planner/view/{active.id}
                    </span>
                    <span className={styles.liveIndicator}>LIVE ⚡</span>
                  </div>

                  <div className={styles.imageViewport}>
                    <Image
                      src={active.image}
                      alt={active.alt}
                      width={960}
                      height={540}
                      priority={currentIdx === 0}
                      className={styles.screenshotImg}
                    />
                    <div className={styles.shimmerEffect} />
                  </div>
                </div>

                <div className={styles.imageCaption}>
                  <span>📸 Screenshot {active.step}: {active.title}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Bar */}
          <div className={styles.controlsBar}>
            <button
              type="button"
              onClick={prevSlide}
              className={styles.navBtn}
              aria-label="Previous slide"
            >
              ‹
            </button>

            <div className={styles.dotsTrack}>
              {plannerSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => {
                    setCurrentIdx(i);
                    setIsPlaying(false);
                  }}
                  className={`${styles.dot} ${i === currentIdx ? styles.dotActive : ""}`}
                  aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                >
                  <span className={styles.dotNumber}>{slide.step}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className={styles.navBtn}
              aria-label="Next slide"
            >
              ›
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className={styles.playToggleBtn}
              aria-label={isPlaying ? "Pause auto-slides" : "Start auto-slides"}
              title={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
