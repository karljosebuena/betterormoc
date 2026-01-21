-- Statistics table for municipal data
CREATE TABLE IF NOT EXISTS statistics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category TEXT NOT NULL,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  year INTEGER,
  source TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_statistics_category ON statistics(category);
CREATE INDEX IF NOT EXISTS idx_statistics_year ON statistics(year DESC);

-- Enable Row Level Security
ALTER TABLE statistics ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public read access for statistics"
  ON statistics
  FOR SELECT
  USING (true);

-- Add comment
COMMENT ON TABLE statistics IS 'Municipal statistics and demographic data';
