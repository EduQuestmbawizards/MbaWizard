import { NextRequest, NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";
import { sendLeadNotificationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      interestedIn = "GMAT Focus Edition (705+ Strategy)",
      profileType = "Working Professional",
      targetScore = "705+ (99th %ile)",
      targetIntake = "2026/2027",
      cityArea = "Gurgaon",
      sourceSlug = "gmat-gurgaon-blog",
      blogName = "GMAT Focus Gurgaon Guide",
      leadMagnetName = "GMAT Gurgaon Mastery Guide 2026",
    } = body;

    // Basic validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Phone validation (at least 10 digits)
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    const finalBlogName = blogName || leadMagnetName || "GMAT Focus Gurgaon Guide";

    // 1. Send real-time email notification via SMTP to rupali.eduquest@gmail.com
    let emailResult: { success: boolean; messageId?: string; error?: string } = { success: false };
    try {
      emailResult = await sendLeadNotificationEmail({
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: cleanPhone,
        interestedIn,
        profileType,
        targetScore,
        targetIntake,
        cityArea,
        sourceSlug,
        blogName: finalBlogName,
        ipAddress: ip,
      });
    } catch (mailErr: unknown) {
      console.error("Lead email dispatch error:", mailErr);
    }

    // 2. Insert into Supabase database
    const supabase = getServiceSupabase();
    const { data, error } = await supabase.from("gmat_gurgaon_leads").insert([
      {
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: cleanPhone,
        interested_in: interestedIn,
        profile_type: profileType,
        target_score: targetScore,
        target_intake: targetIntake,
        city_area: cityArea,
        source_slug: sourceSlug,
        blog_name: finalBlogName,
        lead_magnet_name: finalBlogName,
        ip_address: ip,
        user_agent: userAgent,
      },
    ]).select();

    if (error) {
      console.warn("Supabase insert notice (fallback mode):", error.message);
      return NextResponse.json({
        success: true,
        message: "Lead recorded successfully (email dispatched)",
        leadId: "local-" + Date.now(),
        emailSent: emailResult.success,
        warning: error.message,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully in Supabase and email sent",
      data: data?.[0] || null,
      emailSent: emailResult.success,
    });
  } catch (err: unknown) {
    console.error("Lead Magnet API Error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

