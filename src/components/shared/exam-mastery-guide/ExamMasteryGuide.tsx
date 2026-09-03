"use client";

import { useState } from "react";
import styles from "./ExamMasteryGuide.module.css";

export interface ExamStructureItem {
  section: string;
  questions: number;
  timeLimit: string;
  avgTimePerQ: string;
  scoring: string;
  focus: string;
}

export interface RoadmapStage {
  stage: string;
  duration: string;
  title: string;
  description: string;
  wizardsSupport: string;
}

export interface ExamMasteryData {
  examName: string;
  tagline: string;
  duration: string;
  totalQuestions: string;
  scoreRange: string;
  markingScheme: string;
  structure: ExamStructureItem[];
  roadmap: RoadmapStage[];
  referenceMaterials: Array<{ title: string; type: string; desc: string }>;
  scoringBenchmarks: Array<{ score: string; percentile: string; targetSchools: string }>;
}

interface ExamMasteryGuideProps {
  data: ExamMasteryData;
  city?: string;
}

export default function ExamMasteryGuide({ data, city }: ExamMasteryGuideProps) {
  const [activeTab, setActiveTab] = useState<"structure" | "roadmap" | "materials" | "scoring">("structure");

  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>2026 Master Guide</span>
          <h2 className={styles.title}>
            {data.examName} 2026: <span className={styles.titleHighlight}>Structure, Roadmap &amp; Scoring</span>
            {city && ` in ${city}`}
          </h2>
          <p className={styles.subtitle}>{data.tagline}</p>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Total Duration</span>
            <strong className={styles.statValue}>{data.duration}</strong>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Total Questions</span>
            <strong className={styles.statValue}>{data.totalQuestions}</strong>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Score Scale</span>
            <strong className={styles.statValue}>{data.scoreRange}</strong>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Marking System</span>
            <strong className={styles.statValue}>{data.markingScheme}</strong>
          </div>
        </div>

        <div className={styles.tabsRow}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === "structure" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("structure")}
          >
            📋 Exam Structure &amp; Pattern
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === "roadmap" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("roadmap")}
          >
            🗺️ Prep Roadmap &amp; Wizard Support
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === "scoring" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("scoring")}
          >
            📊 Scoring &amp; Percentiles
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === "materials" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("materials")}
          >
            📚 Reference Materials
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "structure" && (
            <div className={styles.structureWrap}>
              <div className={styles.tableCard}>
                <div className={styles.tableResponsive}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>Questions</th>
                        <th>Time Limit</th>
                        <th>Avg Time / Q</th>
                        <th>Section Score</th>
                        <th>Key Topics Tested</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.structure.map((s, idx) => (
                        <tr key={idx}>
                          <td className={styles.sectionName}>
                            <strong>{s.section}</strong>
                          </td>
                          <td>{s.questions} Qs</td>
                          <td>{s.timeLimit}</td>
                          <td>{s.avgTimePerQ}</td>
                          <td><span className={styles.scoreTag}>{s.scoring}</span></td>
                          <td className={styles.focusText}>{s.focus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "roadmap" && (
            <div className={styles.roadmapGrid}>
              {data.roadmap.map((stage, idx) => (
                <div key={idx} className={styles.stageCard}>
                  <div className={styles.stageTop}>
                    <span className={styles.stageBadge}>{stage.stage}</span>
                    <span className={styles.stageDuration}>{stage.duration}</span>
                  </div>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageDesc}>{stage.description}</p>
                  <div className={styles.wizardsBox}>
                    <span className={styles.wizardsLabel}>🧙‍♂️ How MBA Wizards Helps:</span>
                    <p className={styles.wizardsText}>{stage.wizardsSupport}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "scoring" && (
            <div className={styles.scoringWrap}>
              <div className={styles.scoringGrid}>
                {data.scoringBenchmarks.map((b, idx) => (
                  <div key={idx} className={styles.benchmarkCard}>
                    <div className={styles.benchmarkScore}>{b.score}</div>
                    <div className={styles.benchmarkPercentile}>{b.percentile}</div>
                    <div className={styles.benchmarkTarget}>
                      <span className={styles.targetLabel}>Target Programs:</span>
                      <p className={styles.targetText}>{b.targetSchools}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.scoringAdvice}>
                <span className={styles.adviceIcon}>💡</span>
                <div>
                  <strong>Admissions Insight:</strong> Standardized test scores represent the highest-leverage component of your MBA application. An elite score balances undergraduate GPA variations and qualifies you for merit-based scholarships of up to 100% tuition.
                </div>
              </div>
            </div>
          )}

          {activeTab === "materials" && (
            <div className={styles.materialsGrid}>
              {data.referenceMaterials.map((mat, idx) => (
                <div key={idx} className={styles.materialCard}>
                  <span className={styles.materialType}>{mat.type}</span>
                  <h3 className={styles.materialTitle}>{mat.title}</h3>
                  <p className={styles.materialDesc}>{mat.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.ctaStrip}>
          <div className={styles.ctaText}>
            <strong>Want a personalized score diagnostic &amp; study plan?</strong>
            <span>Take our scientific Litmus Test mapped specifically for {data.examName} 2026.</span>
          </div>
          <button type="button" onClick={handleOpenDemo} className={styles.ctaActionBtn}>
            Book 1-on-1 Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
