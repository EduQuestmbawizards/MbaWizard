"use client";

import { useState } from "react";
import styles from "./ExamUpdates.module.css";

type ExamKey = "GMAT" | "GRE" | "CAT";

const updatesData: Record<ExamKey, Array<{ icon: string; date: string; title: string; desc: string }>> = {
  GMAT: [
    { icon: "⚡", date: "Sep 2026", title: "Round 1 Application Deadlines Active", desc: "Top global business schools (Harvard, Stanford, Wharton, INSEAD, and ISB) have opened Round 1 deadlines for the 2027 intake. GMAT Focus scores are universally accepted on the 205–805 scale." },
    { icon: "🔄", date: "2026", title: "Question Review & Edit Window", desc: "Test-takers can bookmark challenging questions and edit up to 3 answers per section before final submission — providing immense tactical flexibility." },
    { icon: "📋", date: "2026", title: "Full Section Order Choice", desc: "Candidates have complete control to choose their preferred section order (Quant, Verbal, Data Insights) to align with individual mental peak stamina." },
    { icon: "📊", date: "2026", title: "Free Official Diagnostic Analytics", desc: "Official GMAT Focus Score Reports now include deep diagnostic breakdowns: time per question, performance by topic, and percentile ranking included at no extra charge." },
    { icon: "🌐", date: "2026", title: "Online & Test Center 100% Equivalence", desc: "GMAC and all top business school admissions deans confirm complete parity between online proctored and testing-center scores." },
    { icon: "🎯", date: "2026", title: "5-Year Score Window (2026–2031)", desc: "All GMAT Focus scores remain valid for 5 full admissions cycles. Candidates can attempt the exam up to 5 times in a rolling 12-month window." },
  ],
  GRE: [
    { icon: "⚡", date: "2026", title: "Shorter Format (1h 58m) Benchmarks", desc: "The streamlined GRE test under 2 hours has achieved record candidate completion rates. Eliminating the unscored section reduced exam fatigue substantially." },
    { icon: "🏫", date: "2026", title: "MBA Acceptance Crosses 95%", desc: "Over 1,300 global MBA programs — including Harvard, Stanford GSB, Wharton, MIT Sloan, and Columbia — officially accept GRE on equal footing with GMAT." },
    { icon: "📱", date: "2026", title: "24/7 At-Home Testing in 180+ Countries", desc: "Enhanced live remote proctoring allows candidates to schedule their exam at home with 24 hours advance notice, ideal for working professionals." },
    { icon: "📊", date: "2026", title: "ScoreSelect Strategic Advantage", desc: "ETS ScoreSelect allows candidates to take multiple attempts and send only their single highest score to prospective graduate and MBA programs." },
    { icon: "🎓", date: "2026", title: "STEM MS & Ph.D. Intake Open", desc: "Leading US institutions have opened Fall 2027 admissions portals with merit-based assistantships and fellowships tied to 325+ GRE scores." },
    { icon: "🌍", date: "2026", title: "Integrated Fee Waivers", desc: "Expanded financial assistance and fee reduction vouchers available for eligible candidates in India." },
  ],
  CAT: [
    { icon: "📅", date: "Aug–Sep 2026", title: "CAT 2026 Registration Active", desc: "Official registration is live on iimcat.ac.in for the exam scheduled on November 29, 2026 across 170+ test cities nationwide." },
    { icon: "💼", date: "2026", title: "Higher Work-Ex Weightage at Top IIMs", desc: "IIM Ahmedabad, Bangalore, and Calcutta have enhanced the composite scoring weightage for 24–36 months of corporate experience for the 2027–2029 batch." },
    { icon: "🖥️", date: "2026", title: "AI-Monitored Computer Based Testing", desc: "Strict biometric and AI proctoring standards maintained across all 3 test slots to ensure absolute integrity." },
    { icon: "🔄", date: "2026", title: "Evolving DILR Puzzle Sets", desc: "Recent exam patterns feature unconventional situational logic sets (tournaments, network paths) that test lateral thinking over formulaic templates." },
    { icon: "📊", date: "2026", title: "Multi-Slot Normalization System", desc: "Rigorous equi-percentile equating formula applied across morning, afternoon, and evening slots for equitable scoring." },
    { icon: "🏆", date: "2026", title: "Expanded Seats Across 21 IIMs", desc: "Over 5,500 total seats available across IIMs, plus premier non-IIM institutions like FMS Delhi, SPJIMR Mumbai, and MDI Gurgaon." },
  ],
};

interface ExamUpdatesProps {
  defaultExam?: ExamKey;
}

export default function ExamUpdates({ defaultExam = "GMAT" }: ExamUpdatesProps) {
  const [activeExam, setActiveExam] = useState<ExamKey>(defaultExam);
  const updates = updatesData[activeExam];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>2026 Verified Information</span>
          <h2 className={styles.title}>
            Latest Exam <span className={styles.titleHighlight}>Updates &amp; Insights</span>
          </h2>
        </div>

        <div className={styles.tabBar}>
          {(["GMAT", "GRE", "CAT"] as ExamKey[]).map((exam) => (
            <button
              key={exam}
              type="button"
              onClick={() => setActiveExam(exam)}
              className={`${styles.tab} ${activeExam === exam ? styles.active : ""}`}
            >
              {exam} 2026 Updates
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {updates.map((u, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{u.icon}</span>
                <span className={styles.date}>{u.date}</span>
              </div>
              <h3 className={styles.cardTitle}>{u.title}</h3>
              <p className={styles.cardDesc}>{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
