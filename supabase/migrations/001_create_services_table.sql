-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create services table
CREATE TABLE IF NOT EXISTS services (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL,
    description TEXT,
    fees TEXT,
    processing_time TEXT,
    office TEXT,
    requirements JSONB DEFAULT '[]'::jsonb,
    contact_info JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access on services"
    ON services FOR SELECT
    USING (true);

-- Create indexes
CREATE INDEX idx_services_category ON services(category);
CREATE INDEX idx_services_slug ON services(slug);
CREATE INDEX idx_services_title ON services USING gin(to_tsvector('english', title));

-- Add comments
COMMENT ON TABLE services IS 'Municipal services and their details';
COMMENT ON COLUMN services.slug IS 'URL-friendly identifier for the service';
COMMENT ON COLUMN services.requirements IS 'JSON array of required documents';
