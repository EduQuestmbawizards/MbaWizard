import nodemailer from "nodemailer";

export interface LeadEmailData {
  fullName: string;
  email: string;
  phone: string;
  interestedIn?: string;
  profileType?: string;
  targetScore?: string;
  targetIntake?: string;
  cityArea?: string;
  sourceSlug?: string;
  blogName?: string;
  ipAddress?: string;
}

/**
 * Creates and returns the configured Nodemailer transporter
 */
function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER || "rupali.eduquest@gmail.com";
  // Strip any accidental spaces from the app password
  const pass = (process.env.SMTP_PASS || "iytsyltkbopeuydg").replace(/\s+/g, "");

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends a rich HTML alert to the admin/counselor email when a new lead is captured
 */
export async function sendLeadNotificationEmail(lead: LeadEmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transporter = getTransporter();
    const recipient = process.env.LEAD_NOTIFICATION_EMAIL || "rupali.eduquest@gmail.com";
    const sender = process.env.SMTP_USER || "rupali.eduquest@gmail.com";

    const cleanPhone = lead.phone.replace(/[^0-9]/g, "");
    const waPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
    const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(
      `Hello ${lead.fullName}, thank you for requesting the MBA Wizards study guide and consultation for ${lead.interestedIn || "GMAT/GRE/CAT Prep"}.`
    )}`;

    const dateStr = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const subject = `🎯 New Lead Alert: ${lead.fullName} (${lead.interestedIn || "GMAT Prep"})`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 20px; color: #1f2937; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
    .header { background: linear-gradient(135deg, #0a0f1d 0%, #1e1b4b 100%); color: #ffffff; padding: 24px; text-align: center; }
    .header h1 { margin: 0 0 6px 0; font-size: 22px; color: #d4af37; font-weight: 700; letter-spacing: 0.5px; }
    .header p { margin: 0; font-size: 14px; color: #94a3b8; }
    .badge { display: inline-block; background: #22c55e; color: #ffffff; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; margin-top: 8px; }
    .content { padding: 24px; }
    .section-title { font-size: 14px; font-weight: 700; text-transform: uppercase; color: #6b7280; margin-bottom: 12px; letter-spacing: 0.05em; border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .table td.label { width: 38%; font-weight: 600; color: #4b5563; background-color: #f8fafc; }
    .table td.value { color: #111827; font-weight: 500; }
    .highlight-val { color: #1d4ed8; font-weight: 700; }
    .actions { display: flex; gap: 10px; margin-top: 24px; padding-top: 16px; border-top: 1px dashed #e2e8f0; }
    .btn { display: inline-block; padding: 10px 16px; border-radius: 6px; font-weight: 600; font-size: 13px; text-decoration: none; text-align: center; }
    .btn-wa { background-color: #25D366; color: #ffffff !important; }
    .btn-call { background-color: #2563eb; color: #ffffff !important; }
    .btn-email { background-color: #4b5563; color: #ffffff !important; }
    .footer { background: #f8fafc; padding: 16px 24px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>MBA WIZARDS</h1>
      <p>New Student Lead Generated via Website</p>
      <span class="badge">Live Notification</span>
    </div>
    
    <div class="content">
      <div class="section-title">Candidate Details</div>
      <table class="table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${lead.fullName}</strong></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:+91${cleanPhone}" style="color:#2563eb; text-decoration:none; font-weight:700;">+91 ${cleanPhone}</a></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${lead.email}" style="color:#2563eb; text-decoration:none;">${lead.email}</a></td>
        </tr>
        <tr>
          <td class="label">Program of Interest</td>
          <td class="value highlight-val">${lead.interestedIn || "GMAT Focus Preparation"}</td>
        </tr>
        <tr>
          <td class="label">Candidate Profile</td>
          <td class="value">${lead.profileType || "Working Professional"}</td>
        </tr>
        <tr>
          <td class="label">Target Score</td>
          <td class="value">${lead.targetScore || "705+ (99th %ile)"}</td>
        </tr>
        <tr>
          <td class="label">Target Intake</td>
          <td class="value">${lead.targetIntake || "2026/2027"}</td>
        </tr>
        <tr>
          <td class="label">Location / City</td>
          <td class="value">${lead.cityArea || "Gurgaon / Delhi NCR"}</td>
        </tr>
      </table>

      <div class="section-title">Source Information</div>
      <table class="table">
        <tr>
          <td class="label">Source Guide / Blog</td>
          <td class="value">${lead.blogName || "MBA Wizards Blog"}</td>
        </tr>
        <tr>
          <td class="label">URL Slug</td>
          <td class="value"><code>${lead.sourceSlug || "gmat-gurgaon"}</code></td>
        </tr>
        <tr>
          <td class="label">Submission Time</td>
          <td class="value">${dateStr}</td>
        </tr>
        ${lead.ipAddress ? `<tr><td class="label">IP Address</td><td class="value">${lead.ipAddress}</td></tr>` : ""}
      </table>

      <div style="margin-top: 20px; text-align: center;">
        <a href="${waLink}" style="display:inline-block; margin: 4px; padding: 10px 18px; background: #25D366; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px;">💬 WhatsApp Lead</a>
        <a href="tel:+91${cleanPhone}" style="display:inline-block; margin: 4px; padding: 10px 18px; background: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px;">📞 Call Candidate</a>
        <a href="mailto:${lead.email}" style="display:inline-block; margin: 4px; padding: 10px 18px; background: #475569; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px;">✉️ Reply via Email</a>
      </div>
    </div>

    <div class="footer">
      <p style="margin:0;">This is an automated real-time lead notification from <strong>MBA Wizards</strong> (Supabase + SMTP integration).</p>
      <p style="margin:4px 0 0 0;">Centers: Galleria DLF Phase 4 & Sector 50, Gurgaon | Online Globally</p>
    </div>
  </div>
</body>
</html>
    `;

    const plainText = `
🎯 NEW MBA WIZARDS LEAD ALERT:
==================================
Name: ${lead.fullName}
Phone: +91 ${cleanPhone}
Email: ${lead.email}
Program: ${lead.interestedIn || "GMAT Focus Prep"}
Profile: ${lead.profileType || "Working Professional"}
Target Score: ${lead.targetScore || "705+"}
Target Intake: ${lead.targetIntake || "2026/2027"}
Location: ${lead.cityArea || "Gurgaon"}
Source Guide: ${lead.blogName || "MBA Wizards Website"}
Slug: ${lead.sourceSlug || "gmat-gurgaon"}
Time: ${dateStr}

WhatsApp: ${waLink}
Call: tel:+91${cleanPhone}
==================================
    `;

    const info = await transporter.sendMail({
      from: `"MBA Wizards Lead Alert" <${sender}>`,
      to: recipient,
      replyTo: lead.email,
      subject,
      text: plainText,
      html: htmlContent,
    });

    console.log("✅ Lead notification email sent successfully! MessageID:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("❌ Failed to send lead notification email via SMTP:", errorMsg);
    return { success: false, error: errorMsg };
  }
}
