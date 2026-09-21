"use client";

import { useState } from "react";
import styles from "./ExamTimetable.module.css";

type ExamKey = "GMAT" | "GRE" | "CAT";

interface TimetableRow {
  event: string;
  date: string;
  details: string;
}

const timetableData: Record<ExamKey, TimetableRow[]> = {
  GMAT: [
    { event: "GMAT Focus Registration Window", date: "Open Year-Round (Daily)", details: "Book test center or online slots up to 6 months in advance on mba.com" },
    { event: "Test Appointment Availability", date: "365 Days a Year", details: "Available 7 days/week at Pearson VUE centers and 24/7 online proctored format" },
    { event: "Section Breakdown & Total Time", date: "2 Hours 15 Minutes", details: "3 Sections: Quantitative (45m), Verbal (45m), Data Insights (45m) with optional 10m break" },
    { event: "Official Unofficial Score Preview", date: "Instant at Test Center", details: "View total score (205-805) and sectional percentiles immediately upon exam completion" },
    { event: "Official Score Report Release", date: "Within 1 to 3 Business Days", details: "Official score report with detailed Performance Insights delivered to mba.com account" },
    { event: "Retake Policy & Attempt Limits", date: "16-Day Cooldown Period", details: "Can retake up to 5 times in a 12-month rolling window (8 times lifetime maximum)" },
    { event: "Score Validity Duration", date: "5 Years from Test Date", details: "Official GMAT Focus score remains valid for 5 years across all global business schools" },
  ],
  GRE: [
    { event: "GRE General Test Registration", date: "Open Year-Round", details: "Schedule exam dates anytime via official ETS portal ets.org" },
    { event: "Test Delivery Formats", date: "Daily Test Center & 24/7 At-Home", details: "Computer-delivered testing at authorized Prometric centers or proctored at home" },
    { event: "Exam Duration & Structure", date: "1 Hour 58 Minutes", details: "Analytical Writing (30m), Verbal Reasoning (41m), Quantitative Reasoning (47m)" },
    { event: "Unofficial Score Reporting", date: "Instant upon Completion", details: "View Quantitative Reasoning (130-170) and Verbal Reasoning (130-170) immediately" },
    { event: "Official Scorecard Availability", date: "8 to 10 Days Post-Exam", details: "Complete scores including Analytical Writing score published in ETS account" },
    { event: "GRE Retake Policy", date: "Once every 21 Days", details: "Up to 5 times within any continuous rolling 12-month period" },
    { event: "Score Validity Period", date: "5 Years from Test Date", details: "Scores valid for master's and MBA programs worldwide" },
  ],
  CAT: [
    { event: "CAT 2026 Official Notification", date: "Late July / Early August 2026", details: "Official notification & information bulletin released on iimcat.ac.in" },
    { event: "CAT 2026 Registration Window", date: "August – September 2026", details: "Online registration open for approximately 6 weeks with choice of 6 test cities" },
    { event: "CAT 2026 Admit Card Release", date: "Late October 2026", details: "Download admit card with assigned test slot (Slot 1, Slot 2, or Slot 3) and center" },
    { event: "CAT 2026 Exam Date", date: "Last Sunday of November 2026", details: "120-minute computer-based exam across 3 timed 40-minute sections (VARC, DILR, QA)" },
    { event: "Official Answer Key & Response Sheet", date: "First Week of December 2026", details: "Candidate response sheets and objection window active for 3-4 days" },
    { event: "CAT 2026 Results & Scorecards", date: "First Week of January 2027", details: "Sectional scaled scores and overall percentile declared on official portal" },
    { event: "CAT Scorecard Validity", date: "1 Year (Until Dec 31, 2027)", details: "Valid for the 2027–2029 admission academic cycle" },
  ],
};

interface ExamTimetableProps {
  defaultExam?: ExamKey;
}

export default function ExamTimetable({ defaultExam = "GMAT" }: ExamTimetableProps) {
  const [activeExam, setActiveExam] = useState<ExamKey>(defaultExam);
  const rows = timetableData[activeExam];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Admissions Calendar</span>
          <h2 className={styles.title}>
            Exam <span className={styles.titleHighlight}>Timetable &amp; Key Dates</span>
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
              {exam} Schedule
            </button>
          ))}
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Event / Milestone</th>
                <th style={{ width: "30%" }}>Date / Schedule</th>
                <th style={{ width: "40%" }}>Details &amp; Strategic Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.event}>
                  <td className={styles.highlight}>{row.event}</td>
                  <td className={styles.dateCell}>{row.date}</td>
                  <td className={styles.detailsCell}>{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
