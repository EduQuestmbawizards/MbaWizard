import { NextRequest, NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";
import { dispatchLeadAutomations } from "@/lib/notifications";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      name,
      email,
      phone,
      mobile,
      program,
      interestedIn,
      message,
      profileType = "Working Professional",
      targetScore = "705+ (99th %ile)",
      targetIntake = "2026/2027",
      cityArea = "Gurgaon",
      sourceSlug = "contact-us",
    } = body;

    const candidateName = fullName || name || "";
    const candidatePhone = phone || mobile || "";
    const candidateProgram = interestedIn || program || (message ? `Inquiry: ${message.slice(0, 50)}...` : "General MBA / Test Prep Consultation");

    // Validation
    if (!candidateName || !email || !candidatePhone) {
      return NextResponse.json(
        { error: "Full Name, Email, and Phone number are required." },
        { status: 400 }
      );
    }

    const cleanPhone = candidatePhone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    // 1. Dispatch 4-channel automations (Admin Email, User Email, User Fast2SMS, User Twilio WhatsApp)
    const automationResults = await dispatchLeadAutomations({
      fullName: candidateName.trim(),
      email: email.trim().toLowerCase(),
      phone: cleanPhone,
      interestedIn: candidateProgram,
      profileType,
      targetScore,
      targetIntake,
      cityArea,
      sourceSlug,
      blogName: "MBA Wizards Contact Us",
      ipAddress: ip,
    });

    // 2. Persist in Supabase
    const supabase = getServiceSupabase();
    const { data, error } = await supabase.from("gmat_gurgaon_leads").insert([
      {
        full_name: candidateName.trim(),
        email: email.trim().toLowerCase(),
        phone: cleanPhone,
        interested_in: candidateProgram,
        profile_type: profileType,
        target_score: targetScore,
        target_intake: targetIntake,
        city_area: cityArea,
        source_slug: sourceSlug,
        blog_name: "MBA Wizards Contact Form",
        lead_magnet_name: "Direct Contact Form",
        ip_address: ip,
        user_agent: userAgent,
      },
    ]).select();

    if (error) {
      console.warn("Supabase insert notice (fallback mode):", error.message);
      return NextResponse.json({
        success: true,
        message: "Inquiry received and automations dispatched successfully",
        automations: automationResults,
        warning: error.message,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry saved and automations completed successfully",
      data: data?.[0] || null,
      automations: automationResults,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("❌ Contact API Error:", errorMsg);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing contact inquiry." },
      { status: 500 }
    );
  }
}
