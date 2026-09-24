import { sendLeadNotificationEmail, sendUserConfirmationEmail, LeadEmailData } from "./email";
import { sendLeadSms } from "./sms";
import { sendLeadWhatsApp } from "./whatsapp";

export interface LeadAutomationPayload extends LeadEmailData {
  customSmsMessage?: string;
  customWhatsAppMessage?: string;
}

export interface LeadAutomationResults {
  adminEmail: { success: boolean; messageId?: string; error?: string };
  userEmail: { success: boolean; messageId?: string; error?: string };
  sms: { success: boolean; messageId?: string; error?: string };
  whatsapp: { success: boolean; messageSid?: string; error?: string };
}

/**
 * Dispatches all automated lead notifications concurrently across all 4 channels:
 * 1. Admin Email Alert (SMTP)
 * 2. Candidate Confirmation Email (SMTP)
 * 3. Candidate Quick SMS (Fast2SMS)
 * 4. Candidate WhatsApp Message (Twilio WhatsApp API)
 */
export async function dispatchLeadAutomations(
  payload: LeadAutomationPayload
): Promise<LeadAutomationResults> {
  const {
    fullName,
    email,
    phone,
    interestedIn,
    profileType,
    targetScore,
    targetIntake,
    cityArea,
    sourceSlug,
    blogName,
    ipAddress,
    customSmsMessage,
    customWhatsAppMessage,
  } = payload;

  console.log(`🚀 [Automation Engine] Triggering lead automations for: ${fullName} (${email}, ${phone})`);

  // Run all 4 delivery channels concurrently with resilience
  const [adminEmailRes, userEmailRes, smsRes, whatsappRes] = await Promise.allSettled([
    // 1. Admin Notification Email
    sendLeadNotificationEmail({
      fullName,
      email,
      phone,
      interestedIn,
      profileType,
      targetScore,
      targetIntake,
      cityArea,
      sourceSlug,
      blogName,
      ipAddress,
    }),

    // 2. Candidate Confirmation Email
    sendUserConfirmationEmail({
      fullName,
      email,
      phone,
      interestedIn,
      profileType,
      targetScore,
      targetIntake,
      cityArea,
      sourceSlug,
      blogName,
      ipAddress,
    }),

    // 3. Fast2SMS Quick SMS to Candidate
    sendLeadSms({
      phone,
      fullName,
      program: interestedIn || "GMAT/GRE/CAT Prep",
      customMessage: customSmsMessage,
    }),

    // 4. Twilio WhatsApp Message to Candidate
    sendLeadWhatsApp({
      phone,
      fullName,
      program: interestedIn || "GMAT Focus / GRE / CAT Prep",
      targetScore: targetScore || "705+ (99th %ile)",
      targetIntake: targetIntake || "2026/2027",
      customMessage: customWhatsAppMessage,
    }),
  ]);

  const results: LeadAutomationResults = {
    adminEmail:
      adminEmailRes.status === "fulfilled"
        ? adminEmailRes.value
        : { success: false, error: String(adminEmailRes.reason) },
    userEmail:
      userEmailRes.status === "fulfilled"
        ? userEmailRes.value
        : { success: false, error: String(userEmailRes.reason) },
    sms:
      smsRes.status === "fulfilled"
        ? smsRes.value
        : { success: false, error: String(smsRes.reason) },
    whatsapp:
      whatsappRes.status === "fulfilled"
        ? whatsappRes.value
        : { success: false, error: String(whatsappRes.reason) },
  };

  console.log("📊 [Automation Engine] Dispatch Summary:", {
    candidate: fullName,
    adminEmail: results.adminEmail.success ? "✅ Sent" : `❌ ${results.adminEmail.error}`,
    userEmail: results.userEmail.success ? "✅ Sent" : `❌ ${results.userEmail.error}`,
    sms: results.sms.success ? "✅ Sent" : `❌ ${results.sms.error}`,
    whatsapp: results.whatsapp.success ? "✅ Sent" : `❌ ${results.whatsapp.error}`,
  });

  return results;
}
