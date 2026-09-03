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
    { event: "GMAT Registration", date: "Open Year-Round", details: "Book test slots up to 6 months in advance via mba.com" },
    { event: "GMAT Testing Window", date: "Daily (365 Days a Year)", details: "Test center & at-home online proctored options available every day" },
    { event: "Round 1 (R1) Application Deadlines", date: "September – October 2026", details: "Harvard, Stanford, Wharton, INSEAD, Kellogg, ISB Round 1" },
    { event: "ISB PGP Round 1 Deadline", date: "October 15, 2026", details: "Hyderabad & Mohali campuses early decision round" },
    { event: "Round 2 (R2) Application Deadlines", date: "January 2027", details: "Largest global MBA intake round; take exam before mid-December 2026" },
    { event: "ISB PGP Round 2 Deadline", date: "January 2027", details: "Main admissions round for 2027–2028 PGP batch" },
    { event: "Round 3 (R3) Application Deadlines", date: "March – April 2027", details: "Final intake window for international & Indian MBA candidates" },
    { event: "Score Validity Period", date: "5 Years from test date", details: "All GMAT Focus scores valid across multiple admission intake cycles" },
  ],
  GRE: [
    { event: "GRE Test Registration", date: "Open Year-Round", details: "Schedule exam dates via ets.org up to 6 months in advance" },
    { event: "GRE At-Home & Test Center Delivery", date: "Available 24/7 Daily", details: "1 hour 58 minute shorter format available worldwide" },
    { event: "Spring 2027 Intake Deadlines", date: "September – October 2026", details: "Top US & European universities spring admissions" },
    { event: "Fall 2027 Early Deadlines", date: "November – December 2026", details: "Priority deadline for Stanford MS, MIT, CMU, Harvard" },
    { event: "Fall 2027 Regular Deadlines", date: "January – February 2027", details: "Priority window for university fellowships, TA/RA funding" },
    { event: "Late Round Applications", date: "March – May 2027", details: "Rolling admissions for select universities & specialized Master's" },
    { event: "Score Validity Period", date: "5 Years from test date", details: "Scores valid for all graduate & MBA applications through 2031" },
  ],
  CAT: [
    { event: "CAT 2026 Official Notification", date: "August 2026", details: "Notification & test format released on official portal iimcat.ac.in" },
    { event: "CAT 2026 Registration Window", date: "August 2 – September 20, 2026", details: "Online registration active on iimcat.ac.in across 170+ cities" },
    { event: "CAT 2026 Admit Card Release", date: "Late October 2026", details: "Download admit card with test center & slot assignment" },
    { event: "CAT 2026 Exam Date", date: "November 29, 2026", details: "Computer-based exam across Morning, Afternoon, and Evening slots" },
    { event: "CAT 2026 Results & Scorecards", date: "Early January 2027", details: "Sectional scaled scores & national percentiles declared on portal" },
    { event: "IIM WAT-PI Rounds", date: "February – April 2027", details: "IIM Ahmedabad, Bangalore, Calcutta, Lucknow personal interview rounds" },
    { event: "Final IIM Admission Offers", date: "April – May 2027", details: "Final composite merit lists published for 2027–2029 PGP/MBA batch" },
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
