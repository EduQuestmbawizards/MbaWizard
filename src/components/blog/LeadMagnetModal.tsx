"use client";

import { useState } from "react";
import { generateLeadMagnetPDF } from "@/lib/generate-lead-magnet-pdf";
import styles from "./LeadMagnet.module.css";

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceSlug?: string;
  guideTitle?: string;
  blogTitle?: string;
}

export default function LeadMagnetModal({
  isOpen,
  onClose,
  sourceSlug = "gmat-gurgaon-blog",
  guideTitle = "GMAT Focus Gurgaon Mastery Guide & 100-Day Study Plan",
  blogTitle = "GMAT Coaching in Gurgaon Guide",
}: LeadMagnetModalProps) {
  const effectiveBlogTitle = blogTitle || guideTitle || "GMAT Focus Gurgaon Guide";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interestedIn: "GMAT Focus 705+ Comprehensive Batch",
    profileType: "Working Professional",
    targetScore: "705+ (99th %ile)",
    targetIntake: "2026/2027",
    cityArea: "Gurgaon",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [downloadedFileName, setDownloadedFileName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in all required fields (Name, Email, Phone).");
      return;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    const safeBlogName = effectiveBlogTitle
      .replace(/[:|/\\]/g, " - ")
      .replace(/[^a-zA-Z0-9_\- ]/g, "")
      .trim()
      .replace(/\s+/g, "_")
      .slice(0, 45);
    const safeCandidate = formData.fullName.trim().replace(/[^a-zA-Z0-9]/g, "_");
    const generatedFilename = `${safeBlogName}_Guide_${safeCandidate}.pdf`;
    setDownloadedFileName(generatedFilename);

    try {
      // 1. Submit lead details to Supabase backend API with exact blog name
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          interestedIn: formData.interestedIn,
          profileType: formData.profileType,
          targetScore: formData.targetScore,
          targetIntake: formData.targetIntake,
          cityArea: formData.cityArea,
          sourceSlug,
          blogName: effectiveBlogTitle,
          leadMagnetName: effectiveBlogTitle,
        }),
      });

      const data = await res.json();

      if (!res.ok && !data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      // 2. Automatically generate and download the branded PDF on the user's device with blog name
      generateLeadMagnetPDF({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        interestedIn: formData.interestedIn,
        blogTitle: effectiveBlogTitle,
        blogSlug: sourceSlug,
        profileType: formData.profileType,
        targetScore: formData.targetScore,
        targetIntake: formData.targetIntake,
      });

      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("Lead submission error (fallback to local download):", err);
      // Guarantee candidate receives their valuable PDF immediately even during network hiccups
      generateLeadMagnetPDF({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        interestedIn: formData.interestedIn,
        blogTitle: effectiveBlogTitle,
        blogSlug: sourceSlug,
        profileType: formData.profileType,
        targetScore: formData.targetScore,
        targetIntake: formData.targetIntake,
      });
      setIsSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadAgain = () => {
    generateLeadMagnetPDF({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      interestedIn: formData.interestedIn,
      blogTitle: effectiveBlogTitle,
      blogSlug: sourceSlug,
      profileType: formData.profileType,
      targetScore: formData.targetScore,
      targetIntake: formData.targetIntake,
    });
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className={styles.closeBtn}
          aria-label="Close modal"
        >
          ✕
        </button>

        {!isSuccess ? (
          <>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>📘</div>
              <h3 className={styles.modalTitle}>Download Free Study Guide &amp; Blueprint</h3>
              <p className={styles.modalSub}>
                Instant PDF download for <strong>{effectiveBlogTitle}</strong> with 100-Day Study Timetable, formulas, and IIT Roorkee mentorship framework.
              </p>
            </div>

            {errorMsg && (
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.15)",
                  border: "1px solid #ef4444",
                  color: "#fca5a5",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  marginBottom: "16px",
                }}
              >
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rohan Sharma"
                  className={styles.input}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g., rohan@company.com"
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>WhatsApp / Phone Number (10 Digits) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., +91 98765 43210"
                  className={styles.input}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Interested In / Target Program *</label>
                <select
                  className={styles.select}
                  value={formData.interestedIn}
                  onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                >
                  <option value="GMAT Focus 705+ Comprehensive Batch">GMAT Focus 705+ Comprehensive Batch (Live Online / Offline)</option>
                  <option value="1-on-1 IIT Roorkee Private Mentorship">1-on-1 IIT Roorkee Private Mentorship (Surinder Gupta)</option>
                  <option value="GMAT Weekend Batch for Working Professionals">GMAT Weekend Batch for Working Professionals (Cyber City / Golf Course Rd)</option>
                  <option value="GMAT 30-Day Intensive Crash Course">GMAT 30-Day Intensive Crash Course (Fast-Track)</option>
                  <option value="GMAT 750+ Elite 99th Percentile Advanced Batch">GMAT 750+ Elite 99th Percentile Advanced Batch</option>
                  <option value="Executive MBA / ISB / Global B-School Admissions">Executive MBA / ISB / Global B-School Admissions Consulting</option>
                  <option value="CAT / GRE / Hybrid Test Prep">CAT / GRE / Hybrid Test Prep</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Candidate Category</label>
                <select
                  className={styles.select}
                  value={formData.profileType}
                  onChange={(e) => setFormData({ ...formData, profileType: e.target.value })}
                >
                  <option value="Working Professional">Working Professional (Corporate / Tech / Consulting)</option>
                  <option value="College Student">College Student (Final / Pre-Final Year)</option>
                  <option value="Fresh Graduate">Fresh Graduate / 0-2 Yrs Experience</option>
                  <option value="Dual CAT + GMAT Aspirant">Dual CAT + GMAT Aspirant</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Target Score Goal</label>
                <select
                  className={styles.select}
                  value={formData.targetScore}
                  onChange={(e) => setFormData({ ...formData, targetScore: e.target.value })}
                >
                  <option value="735+ (99th - 100th %ile - Stanford/Harvard/Wharton)">735+ (99th-100th %ile - Stanford/Harvard/Wharton)</option>
                  <option value="705+ (99th %ile - ISB/INSEAD/LBS)">705+ (99th %ile - ISB/INSEAD/LBS)</option>
                  <option value="655+ (91st %ile - IIM 1-Yr MBA / Tier 1)">655+ (91st %ile - IIM 1-Yr MBA / Tier 1)</option>
                  <option value="605+ (75th %ile - Top Global Masters / YLP)">605+ (75th %ile - Top Global Masters / YLP)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={styles.submitBtn}
              >
                {loading ? "Saving & Generating PDF..." : "📥 Download Free PDF Guide Now"}
              </button>

              <div className={styles.guaranteeText}>
                🔒 100% Privacy Protected. Instant local PDF auto-download.
              </div>
            </form>
          </>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}>🎉</div>
            <h3 className={styles.successTitle}>PDF Downloaded Successfully!</h3>
            <p className={styles.successDesc}>
              Thank you, <strong>{formData.fullName}</strong>! Your personalized <strong>{effectiveBlogTitle}</strong> PDF blueprint is downloaded to your device.
            </p>
            {downloadedFileName && (
              <div style={{
                background: "rgba(212, 175, 55, 0.12)",
                border: "1px dashed #d4af37",
                borderRadius: "8px",
                padding: "10px 14px",
                fontSize: "0.85rem",
                color: "#f3cf65",
                marginBottom: "16px",
                wordBreak: "break-all"
              }}>
                📄 File Saved: <strong>{downloadedFileName}</strong>
              </div>
            )}
            <p className={styles.modalSub}>
              Our Chief Academic Mentor, <strong>Mr. Surinder Gupta (IIT Roorkee Alum)</strong>, will also share your 100-day diagnostic roadmap and class schedule via WhatsApp/Email.
            </p>
            <button
              type="button"
              onClick={handleDownloadAgain}
              className={styles.downloadAgainBtn}
            >
              🔄 Click here if download did not start
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.submitBtn}
              style={{ marginTop: "12px", width: "100%" }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
