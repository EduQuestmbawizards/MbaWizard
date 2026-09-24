export interface SendSmsParams {
  phone: string;
  fullName: string;
  program?: string;
  customMessage?: string;
}

export interface SmsResult {
  success: boolean;
  messageId?: string;
  response?: unknown;
  error?: string;
}

/**
 * Sends an automated SMS to the candidate using Fast2SMS API
 */
export async function sendLeadSms({
  phone,
  fullName,
  program = "GMAT/GRE/CAT Prep",
  customMessage,
}: SendSmsParams): Promise<SmsResult> {
  const apiKey = process.env.FAST2SMS_API_KEY;

  if (!apiKey) {
    console.warn("⚠️ FAST2SMS_API_KEY is not configured in environment variables.");
    return { success: false, error: "FAST2SMS_API_KEY is missing." };
  }

  // Extract last 10 digits for Fast2SMS (Indian numbers)
  const cleanPhone = phone.replace(/\D/g, "").slice(-10);
  if (cleanPhone.length !== 10) {
    console.error("❌ Invalid phone number for SMS:", phone);
    return { success: false, error: `Invalid 10-digit phone number: ${phone}` };
  }

  const firstName = fullName.trim().split(" ")[0] || "Candidate";
  const defaultMessage = `Hi ${firstName}, thank you for contacting MBA Wizards! Your study plan & consultation request for ${program} is received. Our lead mentor Mr. Surinder Gupta (IIT Roorkee alumni) will connect with you shortly. Call/WA: +919958041888`;
  const messageText = customMessage || defaultMessage;

  try {
    const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        route: "q",
        message: messageText,
        language: "english",
        flash: 0,
        numbers: cleanPhone,
      }),
    });

    const data = await response.json();

    if (!response.ok || data.return === false) {
      const errMsg = (data && (data.message || JSON.stringify(data))) || `HTTP ${response.status}`;
      console.error("❌ Fast2SMS API error response:", errMsg);
      return { success: false, error: errMsg, response: data };
    }

    console.log("✅ Fast2SMS message sent successfully to", cleanPhone, data);
    return {
      success: true,
      messageId: data.request_id || "fast2sms-sent",
      response: data,
    };
  } catch (error: unknown) {
    const err = error instanceof Error ? error.message : String(error);
    console.error("❌ Fast2SMS network/execution error:", err);
    return { success: false, error: err };
  }
}
