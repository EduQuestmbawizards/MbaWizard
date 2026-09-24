export interface SendWhatsAppParams {
  phone: string;
  fullName: string;
  program?: string;
  targetScore?: string;
  targetIntake?: string;
  customMessage?: string;
}

export interface WhatsAppResult {
  success: boolean;
  messageSid?: string;
  response?: unknown;
  error?: string;
}

/**
 * Sends an automated WhatsApp message to the candidate via Twilio WhatsApp API
 */
export async function sendLeadWhatsApp({
  phone,
  fullName,
  program = "GMAT Focus / GRE / CAT Prep",
  targetScore = "705+ (99th %ile)",
  targetIntake = "2026/2027",
  customMessage,
}: SendWhatsAppParams): Promise<WhatsAppResult> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  let fromNumber = process.env.TWILIO_WHATSAPP_NUMBER || "+919958041888";

  if (!accountSid || !authToken) {
    console.warn("⚠️ TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN is not configured in environment variables.");
    return { success: false, error: "Twilio credentials are missing." };
  }

  // Ensure From has whatsapp: prefix
  if (!fromNumber.startsWith("whatsapp:")) {
    fromNumber = `whatsapp:${fromNumber}`;
  }

  // Sanitize recipient phone number
  const digitsOnly = phone.replace(/\D/g, "");
  let recipientFormatted = digitsOnly;
  if (digitsOnly.length === 10) {
    recipientFormatted = `91${digitsOnly}`;
  }
  const toWhatsApp = `whatsapp:+${recipientFormatted}`;

  const firstName = fullName.trim().split(" ")[0] || "Candidate";

  const defaultMessage = `👋 *Hello ${firstName}!*

Thank you for contacting *MBA Wizards* for your *${program}* preparation!

📋 *We have received your details:*
• Program: *${program}*
• Target Score: *${targetScore}*
• Target Intake: *${targetIntake}*

🎓 *What happens next:*
Our Chief Academic Mentor, *Mr. Surinder Gupta (IIT Roorkee Alumni, 15+ Yrs Test Prep Mentorship)*, will personally review your profile and connect with you to share:
1. Customized 100-Day Diagnostic Score Roadmap
2. Class Schedule & Batch Timings (Galleria DLF Phase 4 & Sector 50 Gurgaon / Live Online)
3. Exclusive study resources & formula sheets

📍 *Our Centers in Gurgaon:*
• DLF Galleria Market, DLF Phase 4, Gurgaon
• Nirvana Courtyard / Sector 50, Gurgaon
• Live Online Global Interactive Classes

If you have urgent questions or want to schedule an immediate trial diagnostic session, reply directly to this message or call us at *+91 99580 41888*.

Warm regards,
*Team MBA Wizards*
🌐 www.mbawizards.com`;

  const bodyText = customMessage || defaultMessage;

  try {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const basicAuth = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

    const params = new URLSearchParams();
    params.append("From", fromNumber);
    params.append("To", toWhatsApp);
    params.append("Body", bodyText);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      const errMsg = (data && (data.message || data.error_message)) || `HTTP ${response.status}`;
      console.error("❌ Twilio WhatsApp API error response:", errMsg);
      return { success: false, error: errMsg, response: data };
    }

    console.log("✅ Twilio WhatsApp message dispatched successfully! SID:", data.sid);
    return {
      success: true,
      messageSid: data.sid,
      response: data,
    };
  } catch (error: unknown) {
    const err = error instanceof Error ? error.message : String(error);
    console.error("❌ Twilio WhatsApp network/execution error:", err);
    return { success: false, error: err };
  }
}
