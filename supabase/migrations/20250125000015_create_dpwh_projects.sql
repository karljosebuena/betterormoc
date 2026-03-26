-- DPWH Infrastructure Projects table
-- Data sourced from DPWH Transparency Portal (transparency.dpwh.gov.ph)

CREATE TABLE IF NOT EXISTS dpwh_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contract_id TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  component_categories TEXT,
  status TEXT NOT NULL DEFAULT 'For Procurement',
  budget NUMERIC(15, 2) DEFAULT 0,
  amount_paid NUMERIC(15, 2) DEFAULT 0,
  progress NUMERIC(5, 2) DEFAULT 0,
  location_province TEXT NOT NULL,
  location_region TEXT NOT NULL DEFAULT 'Region VIII',
  contractor TEXT,
  start_date DATE,
  completion_date DATE,
  infra_year TEXT NOT NULL,
  program_name TEXT,
  source_of_funds TEXT,
  is_live BOOLEAN DEFAULT false,
  livestream_url TEXT,
  latitude NUMERIC(10, 7),
  longitude NUMERIC(10, 7),
  report_count INTEGER DEFAULT 0,
  has_satellite_image BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for common queries
CREATE INDEX idx_dpwh_projects_infra_year ON dpwh_projects (infra_year);
CREATE INDEX idx_dpwh_projects_status ON dpwh_projects (status);
CREATE INDEX idx_dpwh_projects_location ON dpwh_projects (location_province);

-- Enable RLS
ALTER TABLE dpwh_projects ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Allow public read access on dpwh_projects"
  ON dpwh_projects FOR SELECT
  USING (true);
