import { NextRequest, NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";
import { dispatchLeadAutomations } from "@/lib/notifications";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    console.log("📥 [FunnelAI Webhook] Received payload:", rawBody);

    // Flexible extraction from different FunnelAI / CRM webhook formats
    const fullName =
      rawBody.fullName ||
      rawBody.full_name ||
      rawBody.name ||
      rawBody.contact_name ||
      `${rawBody.firstName || rawBody.first_name || ""} ${rawBody.lastName || rawBody.last_name || ""}`.trim() ||
      "Prospective Student";

    const email = rawBody.email || rawBody.contact_email || rawBody.email_address || "";
    const phone = rawBody.phone || rawBody.mobile || rawBody.contact_number || rawBody.phone_number || "";
    const interestedIn =
      rawBody.interestedIn ||
      rawBody.interested_in ||
      rawBody.program ||
      rawBody.course ||
      rawBody.subject ||
      rawBody.service ||
      "GMAT Focus / GRE / CAT Preparation";

    const profileType = rawBody.profileType || rawBody.profile_type || "Working Professional";
    const targetScore = rawBody.targetScore || rawBody.target_score || "705+ (99th %ile)";
    const targetIntake = rawBody.targetIntake || rawBody.target_intake || "2026/2027";
    const cityArea = rawBody.city || rawBody.cityArea || rawBody.location || "Gurgaon / Delhi NCR";
    const sourceSlug = rawBody.source || rawBody.sourceSlug || "funnelai-widget";

    if (!email && !phone) {
      return NextResponse.json(
        { error: "Payload must contain at least email or phone number" },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/[^0-9]/g, "");

    // 1. Dispatch 4-channel automations (Admin Email, User Email, Fast2SMS, Twilio WhatsApp)
    const automationResults = await dispatchLeadAutomations({
      fullName,
      email: email ? email.toLowerCase() : "lead@mbawizards.com",
      phone: cleanPhone || "9958041888",
      interestedIn,
      profileType,
      targetScore,
      targetIntake,
      cityArea,
      sourceSlug,
      blogName: "FunnelAI Webhook Lead",
    });

    // 2. Persist in Supabase
    const supabase = getServiceSupabase();
    await supabase.from("gmat_gurgaon_leads").insert([
      {
        full_name: fullName,
        email: email ? email.toLowerCase() : "webhook@mbawizards.com",
        phone: cleanPhone,
        interested_in: interestedIn,
        profile_type: profileType,
        target_score: targetScore,
        target_intake: targetIntake,
        city_area: cityArea,
        source_slug: sourceSlug,
        blog_name: "FunnelAI Webhook",
        lead_magnet_name: "FunnelAI Embedded Lead",
      },
    ]);

    return NextResponse.json({
      success: true,
      message: "Webhook processed and all automations triggered successfully",
      automations: automationResults,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("❌ FunnelAI Webhook Error:", errorMsg);
    return NextResponse.json(
      { error: "Internal error processing webhook" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    endpoint: "/api/webhook/funnelai",
    description: "MBA Wizards automated lead webhook for FunnelAI integrations",
  });
}
