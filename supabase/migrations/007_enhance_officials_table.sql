-- Enhance officials table with additional fields for comprehensive profiles
-- Migration: 007_enhance_officials_table.sql

-- Add new columns for enhanced official profiles
ALTER TABLE officials 
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS achievements TEXT[],
ADD COLUMN IF NOT EXISTS education TEXT[],
ADD COLUMN IF NOT EXISTS office_hours TEXT,
ADD COLUMN IF NOT EXISTS social_media JSONB,
ADD COLUMN IF NOT EXISTS term_start DATE,
ADD COLUMN IF NOT EXISTS term_end DATE;

-- Add comments for new columns
COMMENT ON COLUMN officials.bio IS 'Brief biography of the official';
COMMENT ON COLUMN officials.achievements IS 'Array of key achievements and accomplishments';
COMMENT ON COLUMN officials.education IS 'Array of educational background';
COMMENT ON COLUMN officials.office_hours IS 'Office hours for public visits';
COMMENT ON COLUMN officials.social_media IS 'Social media links {facebook, twitter, instagram, etc}';
COMMENT ON COLUMN officials.term_start IS 'Start date of current term';
COMMENT ON COLUMN officials.term_end IS 'End date of current term';

-- Create index for term dates
CREATE INDEX IF NOT EXISTS idx_officials_term ON officials(term_start, term_end);
