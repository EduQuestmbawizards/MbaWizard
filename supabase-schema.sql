-- ==============================================================================
-- MBA WIZARDS & EDUQUEST - SUPABASE DATABASE SCHEMA FOR LEAD MAGNET CAPTURE
-- Table: gmat_gurgaon_leads
-- Description: Captures user leads before unlocking the GMAT Gurgaon PDF Guide
-- ==============================================================================

-- 1. Create table if not exists
CREATE TABLE IF NOT EXISTS public.gmat_gurgaon_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    interested_in TEXT DEFAULT 'GMAT Focus 705+ Comprehensive Batch',
    profile_type TEXT NOT NULL DEFAULT 'Working Professional', -- 'Working Professional' | 'College Student' | 'Fresh Graduate'
    target_score TEXT DEFAULT '705+ (99th %ile)',
    target_intake TEXT DEFAULT '2026/2027',
    city_area TEXT DEFAULT 'Gurgaon',
    source_slug TEXT,
    blog_name TEXT,
    lead_magnet_name TEXT DEFAULT 'GMAT Gurgaon Mastery Guide 2026',
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Indexes for high-speed queries and reporting
CREATE INDEX IF NOT EXISTS idx_gmat_leads_email ON public.gmat_gurgaon_leads (email);
CREATE INDEX IF NOT EXISTS idx_gmat_leads_phone ON public.gmat_gurgaon_leads (phone);
CREATE INDEX IF NOT EXISTS idx_gmat_leads_created_at ON public.gmat_gurgaon_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_gmat_leads_source_slug ON public.gmat_gurgaon_leads (source_slug);
CREATE INDEX IF NOT EXISTS idx_gmat_leads_blog_name ON public.gmat_gurgaon_leads (blog_name);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.gmat_gurgaon_leads ENABLE ROW LEVEL SECURITY;

-- 4. Create Policy to allow anonymous users (website visitors) to INSERT leads
CREATE POLICY "Allow public insert for lead capture"
    ON public.gmat_gurgaon_leads
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 5. Create Policy to allow authenticated admins / service_role to SELECT leads
CREATE POLICY "Allow service role and authenticated users to read leads"
    ON public.gmat_gurgaon_leads
    FOR SELECT
    TO authenticated, service_role
    USING (true);

-- 6. Trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_gmat_leads_updated_at ON public.gmat_gurgaon_leads;
CREATE TRIGGER set_gmat_leads_updated_at
    BEFORE UPDATE ON public.gmat_gurgaon_leads
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Comment on table
COMMENT ON TABLE public.gmat_gurgaon_leads IS 'Leads generated through GMAT Gurgaon SEO blog posts and Lead Magnet PDF downloads for MBA Wizard and EduQuest';
