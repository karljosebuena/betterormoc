-- Add enhanced fields to services table for comprehensive service details
-- Migration: 006_enhance_services_table.sql

-- Add new columns for enhanced service information
ALTER TABLE services 
ADD COLUMN IF NOT EXISTS steps JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS faq JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS related_services TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN IF NOT EXISTS office_details JSONB,
ADD COLUMN IF NOT EXISTS requirements_by_type JSONB;

-- Add comments for new columns
COMMENT ON COLUMN services.steps IS 'Step-by-step process for obtaining the service. Array of {title, description, order}';
COMMENT ON COLUMN services.faq IS 'Frequently asked questions. Array of {question, answer, order}';
COMMENT ON COLUMN services.related_services IS 'Array of related service slugs';
COMMENT ON COLUMN services.office_details IS 'Detailed office information {name, location, address, phone, hours, map_coordinates}';
COMMENT ON COLUMN services.requirements_by_type IS 'Requirements organized by user type {owner: [], representative: [], etc}';

-- Create index for related services array
CREATE INDEX IF NOT EXISTS idx_services_related ON services USING GIN(related_services);

-- Update the updated_at trigger to include new columns
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Ensure trigger exists
DROP TRIGGER IF EXISTS update_services_updated_at ON services;
CREATE TRIGGER update_services_updated_at
    BEFORE UPDATE ON services
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
