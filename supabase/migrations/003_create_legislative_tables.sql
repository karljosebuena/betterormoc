-- Create ordinances table
CREATE TABLE IF NOT EXISTS ordinances (
    id BIGSERIAL PRIMARY KEY,
    ordinance_number TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    year INTEGER NOT NULL,
    date_approved DATE,
    pdf_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create resolutions table
CREATE TABLE IF NOT EXISTS resolutions (
    id BIGSERIAL PRIMARY KEY,
    resolution_number TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    year INTEGER NOT NULL,
    date_approved DATE,
    pdf_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE ordinances ENABLE ROW LEVEL SECURITY;
ALTER TABLE resolutions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on ordinances"
    ON ordinances FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on resolutions"
    ON resolutions FOR SELECT
    USING (true);

-- Create indexes
CREATE INDEX idx_ordinances_year ON ordinances(year);
CREATE INDEX idx_ordinances_number ON ordinances(ordinance_number);
CREATE INDEX idx_resolutions_year ON resolutions(year);
CREATE INDEX idx_resolutions_number ON resolutions(resolution_number);

-- Add comments
COMMENT ON TABLE ordinances IS 'Municipal ordinances and local legislation';
COMMENT ON TABLE resolutions IS 'Municipal resolutions and official decisions';
COMMENT ON COLUMN ordinances.ordinance_number IS 'Official ordinance number (e.g., ORD-2024-001)';
COMMENT ON COLUMN resolutions.resolution_number IS 'Official resolution number (e.g., RES-2024-001)';
