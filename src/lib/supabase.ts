import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project-id.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Public client for browser interactions
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for secure server-side API routes (bypasses RLS or uses service role)
export const getServiceSupabase = () => {
  return createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey);
};

export interface LeadMagnetPayload {
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
  leadMagnetName?: string;
}
