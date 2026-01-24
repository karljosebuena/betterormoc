-- Migration: Create barangay_officials table
-- Stores barangay captains for all 110 barangays in Ormoc City

CREATE TABLE IF NOT EXISTS barangay_officials (
    id BIGSERIAL PRIMARY KEY,
    barangay_name TEXT NOT NULL UNIQUE,
    captain_name TEXT NOT NULL,
    contact_number TEXT,
    email TEXT,
    district INTEGER,
    population INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_barangay_officials_district ON barangay_officials(district);
CREATE INDEX IF NOT EXISTS idx_barangay_officials_population ON barangay_officials(population DESC);
CREATE INDEX IF NOT EXISTS idx_barangay_officials_name ON barangay_officials(barangay_name);

-- Enable RLS
ALTER TABLE barangay_officials ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists (for idempotent migrations)
DROP POLICY IF EXISTS "Allow public read access on barangay_officials" ON barangay_officials;

-- Create policy for public read access
CREATE POLICY "Allow public read access on barangay_officials"
    ON barangay_officials
    FOR SELECT
    USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_barangay_officials_updated_at
    BEFORE UPDATE ON barangay_officials
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

COMMENT ON TABLE barangay_officials IS 'Barangay officials (captains) for all 110 barangays in Ormoc City';
