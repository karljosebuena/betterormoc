-- Create statistics table
CREATE TABLE IF NOT EXISTS statistics (
    id BIGSERIAL PRIMARY KEY,
    category TEXT NOT NULL,
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    year INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE statistics ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access on statistics"
    ON statistics FOR SELECT
    USING (true);

-- Create indexes
CREATE INDEX idx_statistics_category ON statistics(category);
CREATE INDEX idx_statistics_year ON statistics(year);

-- Add comments
COMMENT ON TABLE statistics IS 'City statistics and key metrics';
COMMENT ON COLUMN statistics.category IS 'Category of statistic (e.g., population, economy, services)';
COMMENT ON COLUMN statistics.value IS 'The statistic value as a string (can include units)';
