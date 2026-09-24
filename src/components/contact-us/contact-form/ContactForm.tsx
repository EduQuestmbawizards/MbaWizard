"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<"instant" | "funnelai">("instant");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "GMAT Focus 705+ Comprehensive Batch",
    profileType: "Working Professional",
    targetScore: "705+ (99th %ile)",
    targetIntake: "2026/2027",
    cityArea: "Gurgaon",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          interestedIn: formData.program,
          profileType: formData.profileType,
          targetScore: formData.targetScore,
          targetIntake: formData.targetIntake,
          cityArea: formData.cityArea,
          message: formData.message,
          sourceSlug: "contact-us-page",
        }),
      });

      const data = await res.json();
      if (!res.ok && !data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      program: "GMAT Focus 705+ Comprehensive Batch",
      profileType: "Working Professional",
      targetScore: "705+ (99th %ile)",
      targetIntake: "2026/2027",
      cityArea: "Gurgaon",
      message: "",
    });
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Book 1-on-1 Counseling &amp; Demo</h2>
        <p className={styles.formSubtitle}>
          Connect with <strong>Mr. Surinder Gupta (IIT Roorkee Alumni)</strong> for a free diagnostic evaluation and score strategy.
        </p>
      </div>

      <div className={styles.tabSwitch}>
        <button
          type="button"
          onClick={() => setActiveTab("instant")}
          className={`${styles.tabBtn} ${activeTab === "instant" ? styles.tabBtnActive : ""}`}
        >
          ⚡ Instant Callback &amp; Demo Form
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("funnelai")}
          className={`${styles.tabBtn} ${activeTab === "funnelai" ? styles.tabBtnActive : ""}`}
        >
          📋 FunnelAI Portal
        </button>
      </div>

      {activeTab === "instant" ? (
        <>
          {isSuccess ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>🎉</div>
              <h3 className={styles.successTitle}>Inquiry Sent Successfully!</h3>
              <p className={styles.successDesc}>
                Thank you, <strong>{formData.fullName}</strong>! We have sent a confirmation to your email <strong>{formData.email}</strong>, an SMS, and a WhatsApp message to <strong>+91 {formData.phone.replace(/\D/g, "").slice(-10)}</strong>.
              </p>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "20px" }}>
                Our Chief Academic Mentor will connect with you shortly with your 100-day diagnostic roadmap.
              </p>
              <button type="button" onClick={handleReset} className={styles.resetBtn}>
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {errorMsg && <div className={styles.errorBanner}>{errorMsg}</div>}

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohan Sharma"
                    className={styles.input}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>WhatsApp / Mobile *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    className={styles.input}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rohan@company.com"
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Program of Interest *</label>
                  <select
                    className={styles.select}
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  >
                    <option value="GMAT Focus 705+ Comprehensive Batch">GMAT Focus 705+ Comprehensive Batch</option>
                    <option value="1-on-1 IIT Roorkee Private Mentorship">1-on-1 IIT Roorkee Private Mentorship</option>
                    <option value="GRE 325+ Quantitative & Verbal Masterclass">GRE 325+ Masterclass</option>
                    <option value="CAT 99th Percentile Mentorship">CAT 99th Percentile Mentorship</option>
                    <option value="Executive MBA / ISB Admissions Consulting">Executive MBA / ISB Admissions Consulting</option>
                    <option value="Research Paper Drafting & Publishing">Research Paper Drafting &amp; Publishing</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Candidate Category</label>
                  <select
                    className={styles.select}
                    value={formData.profileType}
                    onChange={(e) => setFormData({ ...formData, profileType: e.target.value })}
                  >
                    <option value="Working Professional">Working Professional</option>
                    <option value="College Student">College Student</option>
                    <option value="Fresh Graduate">Fresh Graduate</option>
                    <option value="Dual CAT + GMAT Aspirant">Dual CAT + GMAT Aspirant</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Your Goals / Questions (Optional)</label>
                <textarea
                  placeholder="Tell us about your target test date, target B-schools, or any specific questions..."
                  className={styles.textarea}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? "Sending & Coordinating Mentors..." : "🚀 Book Free Trial Demo & Counseling"}
              </button>

              <div className={styles.guaranteeText}>
                🔒 100% Privacy Protected. Immediate confirmation via Email, SMS &amp; WhatsApp.
              </div>
            </form>
          )}
        </>
      ) : (
        <div className={styles.iframeWrapper}>
          <iframe
            src="https://admin.funnelai.in/widget/form/69980e0615246"
            style={{ width: "100%", height: "600px", border: "none", borderRadius: "8px" }}
            id="inline-69980e0615246"
            data-form-name="MBAWizards Black Font"
            data-layout-iframe-id="inline-69980e0615246"
            data-form-id="69980e0615246"
            data-height="600"
            title="MBAWizards Black Font"
          />
        </div>
      )}
    </div>
  );
}
