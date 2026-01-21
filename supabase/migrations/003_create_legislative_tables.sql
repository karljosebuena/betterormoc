-- Ordinances table
CREATE TABLE IF NOT EXISTS ordinances (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  number TEXT NOT NULL,
  title TEXT NOT NULL,
  date_passed DATE,
  description TEXT,
  pdf_url TEXT,
  category TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Resolutions table
CREATE TABLE IF NOT EXISTS resolutions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  number TEXT NOT NULL,
  title TEXT NOT NULL,
  date_passed DATE,
  description TEXT,
  pdf_url TEXT,
  category TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_ordinances_number ON ordinances(number);
CREATE INDEX IF NOT EXISTS idx_ordinances_date ON ordinances(date_passed DESC);
CREATE INDEX IF NOT EXISTS idx_ordinances_category ON ordinances(category);

CREATE INDEX IF NOT EXISTS idx_resolutions_number ON resolutions(number);
CREATE INDEX IF NOT EXISTS idx_resolutions_date ON resolutions(date_passed DESC);
CREATE INDEX IF NOT EXISTS idx_resolutions_category ON resolutions(category);

-- Enable Row Level Security
ALTER TABLE ordinances ENABLE ROW LEVEL SECURITY;
ALTER TABLE resolutions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for ordinances"
  ON ordinances
  FOR SELECT
  USING (true);

CREATE POLICY "Public read access for resolutions"
  ON resolutions
  FOR SELECT
  USING (true);

-- Add comments
COMMENT ON TABLE ordinances IS 'Municipal ordinances from Sangguniang Bayan';
COMMENT ON TABLE resolutions IS 'Municipal resolutions from Sangguniang Bayan';
