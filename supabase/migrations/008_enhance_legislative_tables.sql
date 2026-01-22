-- Add category column to ordinances and resolutions tables
-- Migration 008: Enhance Legislative Tables

-- Add category column to ordinances
ALTER TABLE ordinances ADD COLUMN IF NOT EXISTS category TEXT;

-- Add category column to resolutions
ALTER TABLE resolutions ADD COLUMN IF NOT EXISTS category TEXT;

-- Create indexes for category filtering
CREATE INDEX IF NOT EXISTS idx_ordinances_category ON ordinances(category);
CREATE INDEX IF NOT EXISTS idx_resolutions_category ON resolutions(category);

-- Add comments
COMMENT ON COLUMN ordinances.category IS 'Category of ordinance (e.g., Finance & Budget, Public Order & Safety, Environment)';
COMMENT ON COLUMN resolutions.category IS 'Category of resolution (e.g., Finance, Awards & Recognition, Agreements)';
