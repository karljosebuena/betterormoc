-- Add external_url column to services table
ALTER TABLE services
ADD COLUMN external_url TEXT;

COMMENT ON COLUMN services.external_url IS 'URL for direct access to external online service portals (if applicable)';
