-- Create table for tracking visitor statistics
CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,
  page_path text NOT NULL,
  referrer text,
  country text,
  ip_hash text
);

-- Index on created_at for fast queries over date ranges
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views (created_at);

-- Enable RLS
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Allow service role (backend) to bypass RLS (automatic in Supabase)
-- Allow authenticated administrators to read stats
DROP POLICY IF EXISTS "Allow authenticated read" ON page_views;
CREATE POLICY "Allow authenticated read" ON page_views
  FOR SELECT TO authenticated
  USING (true);
