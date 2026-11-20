"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CITYU_MBA_CONFIG,
  CITYU_KEY_FACTS,
  CITYU_WHY_POINTS,
  CITYU_CONCENTRATIONS,
  CITYU_WHO_IS_FOR,
  CITYU_PROGRAMME_SPECS,
  CITYU_OFFICIAL_LINKS,
  CITYU_FAQ,
} from "@/data/cityu-mba-data";
import styles from "./CityUhkMba.module.css";

export default function CityUhkMbaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "3-5 years",
    intake: "Fall 2025",
    testStatus: "Planning to take GMAT/GRE",
    notes: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.group(
        "%c🎓 [CityUHK MBA Hub] Lead Form Submission",
        "color: #ffffff; background: #850028; padding: 4px 8px; font-weight: bold;"
      );
      console.table(formData);
      console.groupEnd();

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          program: "CityUHK MBA - Hub Page Enquiry",
          message: `Intake: ${formData.intake} | Experience: ${formData.experience} | Test: ${formData.testStatus} | Notes: ${formData.notes}`,
        }),
      }).catch(() => {});
    } catch {
      // ignore
    }

    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  return (
    <div className={styles.hubPageWrapper}>
      {/* BREADCRUMB NAVIGATION */}
      <nav className={styles.breadcrumbBar} aria-label="Breadcrumb">
        <div className={`container ${styles.breadcrumbContainer}`}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span>/</span>
          <Link
            href="/premium-university-consulting-packages"
            className={styles.breadcrumbLink}
          >
            Global MBA Admissions
          </Link>
          <span>/</span>
          <span className={styles.breadcrumbCurrent}>CityUHK MBA Hub</span>
        </div>
      </nav>

      {/* HERO SECTION / BANNER 0 SPOTLIGHT */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.heroBadge}>
                <span>✨ Day 1 Live | CityUHK MBA Hub</span>
              </div>
              <h1 className={styles.heroTitle}>
                {CITYU_MBA_CONFIG.headline} <br />
                <span>Accelerate in Hong Kong</span>
              </h1>
              <p className={styles.heroSubtext}>
                {CITYU_MBA_CONFIG.subText} Ranked #86 Worldwide and #14 in Asia.
                Earn an accelerated 1-year STEM-enriched MBA from an AACSB &amp;
                EQUIS dual-accredited top business school.
              </p>
              <div className={styles.heroCtas}>
                <a href="#interest-form" className={styles.btnPrimary}>
                  <span>Register Free Advisory</span>
                  <span>→</span>
                </a>
                <a
                  href={CITYU_MBA_CONFIG.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnOutline}
                >
                  <span>Visit Official CityUHK Site ↗</span>
                </a>
              </div>
            </div>

            {/* Quick Specs Card */}
            <div className={styles.heroQuickCard}>
              <div className={styles.quickCardTitle}>
                <span>Program Snapshot</span>
                <span style={{ fontSize: "12px", color: "#34d399" }}>● Admissions Active</span>
              </div>
              <div className={styles.quickSpecList}>
                <div className={styles.quickSpecRow}>
                  <span className={styles.quickSpecLabel}>Degree Awarded:</span>
                  <span className={styles.quickSpecVal}>{CITYU_PROGRAMME_SPECS.degree}</span>
                </div>
                <div className={styles.quickSpecRow}>
                  <span className={styles.quickSpecLabel}>Study Duration:</span>
                  <span className={styles.quickSpecVal}>1 Year FT / 2 Years PT</span>
                </div>
                <div className={styles.quickSpecRow}>
                  <span className={styles.quickSpecLabel}>Accreditations:</span>
                  <span className={styles.quickSpecVal}>AACSB &amp; EQUIS Dual Crown</span>
                </div>
                <div className={styles.quickSpecRow}>
                  <span className={styles.quickSpecLabel}>Location:</span>
                  <span className={styles.quickSpecVal}>Kowloon Tong, Hong Kong SAR</span>
                </div>
                <div className={styles.quickSpecRow}>
                  <span className={styles.quickSpecLabel}>Curriculum:</span>
                  <span className={styles.quickSpecVal}>STEM-Enriched (AI/FinTech)</span>
                </div>
                <div className={styles.quickSpecRow}>
                  <span className={styles.quickSpecLabel}>Next Intake:</span>
                  <span className={styles.quickSpecVal}>{CITYU_PROGRAMME_SPECS.intake}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY STATS STRIP */}
      <section className={styles.statsStrip} aria-label="Key Rankings and Metrics">
        <div className="container">
          <div className={styles.statsGrid}>
            {CITYU_KEY_FACTS.map((fact) => (
              <div key={fact.label} className={styles.statItem}>
                <div className={styles.statMetric}>{fact.metric}</div>
                <div className={styles.statTitle}>{fact.label}</div>
                <div className={styles.statDesc}>{fact.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. MEET CITYUHK (APPROVED FACTS) */}
      <section className={styles.section} id="meet-cityuhk">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Section 1</span>
            <h2 className={styles.sectionTitle}>Meet CityUHK</h2>
            <p className={styles.sectionSubtitle}>
              Official approved institutional credentials from City University of
              Hong Kong&apos;s College of Business.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "32px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
              border: "1px solid #e2e8f0",
            }}
          >
            <Image
              src="/images/cityu-mba/cityu-campus-students.jpg"
              alt="City University of Hong Kong Campus and MBA Cohort"
              width={1200}
              height={450}
              style={{ width: "100%", height: "auto", maxHeight: "360px", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(5,22,77,0.92) 0%, transparent 100%)",
                padding: "24px 30px",
                color: "#ffffff",
              }}
            >
              <span style={{ color: "#fce79f", fontSize: "12px", fontWeight: "bold" }}>
                📍 Kowloon Tong Campus, Hong Kong SAR
              </span>
              <h3 style={{ fontSize: "20px", fontWeight: "800", marginTop: "4px" }}>
                CityUHK College of Business — Elite Asian Global Business Leadership
              </h3>
            </div>
          </div>

          <div className={styles.meetGrid}>
            <div className={styles.meetCard}>
              <span className={styles.meetBadge}>QS Global MBA</span>
              <div className={styles.meetMetric}>#86 Worldwide</div>
              <h3 className={styles.meetCardTitle}>#14 in Asia-Pacific</h3>
              <p className={styles.meetCardText}>
                Ranked in the top 100 global MBA programmes with top quartile
                marks in Value for Money, Employability, and Alumni Outcomes.
              </p>
            </div>

            <div className={styles.meetCard}>
              <span className={styles.meetBadge}>World University</span>
              <div className={styles.meetMetric}>#62 Global</div>
              <h3 className={styles.meetCardTitle}>City University of Hong Kong</h3>
              <p className={styles.meetCardText}>
                Ranked 62nd globally in the QS World University Rankings, reflecting
                world-class faculty, research rigor, and cutting-edge campus facilities.
              </p>
            </div>

            <div className={styles.meetCard}>
              <span className={styles.meetBadge}>International Trade</span>
              <div className={styles.meetMetric}>#1 in Hong Kong</div>
              <h3 className={styles.meetCardTitle}>#37 Worldwide</h3>
              <p className={styles.meetCardText}>
                Recognized as the premier programme for international trade, logistics,
                and cross-border finance in the Greater Bay Area.
              </p>
            </div>

            <div className={styles.meetCard}>
              <span className={styles.meetBadge}>Accreditations</span>
              <div className={styles.meetMetric}>AACSB + EQUIS</div>
              <h3 className={styles.meetCardTitle}>Dual Crown Quality</h3>
              <p className={styles.meetCardText}>
                Accredited continuously by AACSB since 2005 alongside consecutive
                5-year EQUIS re-accreditations.
              </p>
            </div>

            <div className={styles.meetCard}>
              <span className={styles.meetBadge}>Research Impact</span>
              <div className={styles.meetMetric}>UTD Top 100</div>
              <h3 className={styles.meetCardTitle}>Business School Research</h3>
              <p className={styles.meetCardText}>
                Consistently positioned in UT Dallas Top 100 business school research
                league tables, driving modern managerial thought leadership.
              </p>
            </div>

            <div className={styles.meetCard}>
              <span className={styles.meetBadge}>Strategic Location</span>
              <div className={styles.meetMetric}>Hong Kong SAR</div>
              <h3 className={styles.meetCardTitle}>Kowloon Tong Campus</h3>
              <p className={styles.meetCardText}>
                Situated directly on a prime MTR transit junction, bridging international
                finance headquarters with mainland China&apos;s technological corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY AN MBA (WHY CITYUHK MBA) */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="why-cityuhk-mba">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Section 2</span>
            <h2 className={styles.sectionTitle}>Why CityUHK MBA?</h2>
            <p className={styles.sectionSubtitle}>
              Why global leaders choose the CityUHK MBA for career transformation,
              compensation growth, and executive mobility.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {CITYU_WHY_POINTS.map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROGRAMME AT A GLANCE */}
      <section className={styles.section} id="programme-at-a-glance">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Section 3</span>
            <h2 className={styles.sectionTitle}>Programme at a Glance</h2>
            <p className={styles.sectionSubtitle}>
              Curriculum architecture, credit structure, and high-demand
              specialisation tracks.
            </p>
          </div>

          <div className={styles.glanceBox}>
            <div className={styles.specRowList}>
              <div className={styles.specItem}>
                <span className={styles.specTag}>Study Options</span>
                <span className={styles.specHeading}>
                  1-Year Full-Time (Weekday / Weekend) or 2-Year Part-Time
                </span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specTag}>Credits Required</span>
                <span className={styles.specHeading}>
                  40 Credit Units (20 Core + 20 Electives)
                </span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specTag}>Curriculum Benchmark</span>
                <span className={styles.specHeading}>
                  STEM-Enriched • AI &amp; Quantitative Analytics
                </span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specTag}>Admissions Window</span>
                <span className={styles.specHeading}>
                  Rolling Admissions for 2025/2026 Intake
                </span>
              </div>
            </div>

            <h3
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#05164d",
                marginBottom: "20px",
              }}
            >
              Elective Concentrations &amp; Tracks
            </h3>

            <div className={styles.concGrid}>
              {CITYU_CONCENTRATIONS.map((c) => (
                <div key={c.title} className={styles.concCard}>
                  <h4 className={styles.concTitle}>{c.title}</h4>
                  <div className={styles.concTagline}>{c.tagline}</div>
                  <p className={styles.concDesc}>{c.description}</p>
                  <ul className={styles.concList}>
                    {c.highlightCourses.map((crs) => (
                      <li key={crs}>{crs}</li>
                    ))}
                  </ul>
                  <div className={styles.concOutcome}>
                    <strong>Career Pathways:</strong> {c.careerPath}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO IT IS FOR */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="who-it-is-for">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Section 4</span>
            <h2 className={styles.sectionTitle}>Who It Is For</h2>
            <p className={styles.sectionSubtitle}>
              Profiles and candidate archetypes that excel in the CityUHK MBA.
            </p>
          </div>

          <div className={styles.whoGrid}>
            {CITYU_WHO_IS_FOR.map((item) => (
              <div key={item.title} className={styles.whoCard}>
                <div className={styles.whoIcon}>{item.icon}</div>
                <h3 className={styles.whoTitle}>{item.title}</h3>
                <div className={styles.whoProfile}>{item.profile}</div>
                <p className={styles.whoBenefit}>{item.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 6. FORM & FOLLOW-US LINKS */}
      <section className={styles.interestSection} id="interest-form">
        <div className="container">
          <div className={styles.formCardWrap}>
            {/* Left Info Column */}
            <div className={styles.formLeftCol}>
              <div>
                <div className={styles.formLeftHeader}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#850028",
                      background: "#fff0f3",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      display: "inline-block",
                      marginBottom: "12px",
                    }}
                  >
                    Sections 5 &amp; 6
                  </span>
                  <h3>Register Interest &amp; Connect</h3>
                  <p>
                    Schedule an admissions review with MBA Wizards specialists to evaluate
                    your CityUHK candidacy, scholarship probability, and GMAT/GRE targets.
                  </p>
                </div>

                <ul className={styles.servicePoints}>
                  <li>🎯 Profile strength review against CityUHK admitted cohorts</li>
                  <li>📊 GMAT Focus &amp; GRE score recommendation</li>
                  <li>💰 Hong Kong Government &amp; College of Business scholarship evaluation</li>
                  <li>✍️ Essay framing and video interview simulation</li>
                </ul>
              </div>

              <div className={styles.followBox}>
                <div className={styles.followTitle}>Follow CityUHK &amp; Official Links</div>
                <div className={styles.socialRow}>
                  {CITYU_OFFICIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      🔗 {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div>
              {formSubmitted ? (
                <div className={styles.successBox}>
                  <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
                    🎉 Application Enquiry Received!
                  </h4>
                  <p style={{ fontSize: "14px", lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.fullName}</strong>. Your profile details have
                    been forwarded to our senior admissions mentor. We will get in touch with you
                    shortly via WhatsApp and Email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.interestForm}>
                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="hub-fullName">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="hub-fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Priya Sharma"
                        className={styles.inputControl}
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="hub-email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="hub-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="priya@example.com"
                        className={styles.inputControl}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="hub-phone">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="hub-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={styles.inputControl}
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="hub-experience">
                        Work Experience *
                      </label>
                      <select
                        id="hub-experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className={styles.selectControl}
                      >
                        <option value="1-2 years">1-2 years</option>
                        <option value="3-5 years">3-5 years (Average CityUHK)</option>
                        <option value="5-8 years">5-8 years</option>
                        <option value="8+ years">8+ years</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="hub-intake">
                        Target Intake
                      </label>
                      <select
                        id="hub-intake"
                        name="intake"
                        value={formData.intake}
                        onChange={handleInputChange}
                        className={styles.selectControl}
                      >
                        <option value="Fall 2025">Fall 2025</option>
                        <option value="Spring 2026">Spring 2026</option>
                        <option value="Fall 2026">Fall 2026</option>
                      </select>
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="hub-testStatus">
                        GMAT / GRE Readiness
                      </label>
                      <select
                        id="hub-testStatus"
                        name="testStatus"
                        value={formData.testStatus}
                        onChange={handleInputChange}
                        className={styles.selectControl}
                      >
                        <option value="Planning to take GMAT/GRE">
                          Planning to take GMAT/GRE
                        </option>
                        <option value="GMAT Focus Score Ready">
                          GMAT Score Ready
                        </option>
                        <option value="GRE Score Ready">
                          GRE Score Ready
                        </option>
                        <option value="Seeking Waiver / Direct Assessment">
                          Seeking Direct Profile Review
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel} htmlFor="hub-notes">
                      Specialisation Interests or Specific Queries
                    </label>
                    <textarea
                      id="hub-notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. Inquiring about FinTech concentration, scholarships, and post-study career visa."
                      className={styles.textareaControl}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.btnSubmit}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Profile for CityUHK Review →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.section} id="faq-cityuhk">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Frequently Asked Questions</span>
            <h2 className={styles.sectionTitle}>CityUHK MBA FAQs</h2>
            <p className={styles.sectionSubtitle}>
              Essential answers on admission requirements, rankings, study duration,
              and career opportunities in Hong Kong.
            </p>
          </div>

          <div className={styles.faqAccordion}>
            {CITYU_FAQ.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.question} className={styles.faqItem}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className={styles.faqQuestion}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div className={styles.faqAnswer}>{faq.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
