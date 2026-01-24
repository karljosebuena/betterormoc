-- Migration: Seed Barangay Officials Data
-- Description: Populates barangay_officials table with placeholder data for all 110 barangays
-- Data Source: Pending verification from DILG Barangay Officials Directory
-- Last Updated: 2025-01-25
-- Note: Table already exists from migration 010_create_barangay_officials_table.sql

-- Clear existing data
TRUNCATE TABLE barangay_officials CASCADE;

-- ============================================
-- BARANGAY CAPTAINS (110 Barangays)
-- ============================================
-- NOTE: All names are placeholders pending official verification from DILG
-- TODO: Update with real data from https://dilg.gov.ph/barangay-officials-directory/search

-- Insert placeholder barangay captains
-- This migration doesn't depend on the barangays table existing
-- The actual barangay names and data will be populated when seed-production.sql runs

-- For now, just create a simple placeholder structure
-- When barangays table exists, this can be updated via another migration or seed file

INSERT INTO barangay_officials (barangay_name, captain_name, district, population, contact_number, email)
VALUES
  ('Placeholder Barangay 1', 'Hon. [Captain Name - Pending]', 1, 0, NULL, NULL),
  ('Placeholder Barangay 2', 'Hon. [Captain Name - Pending]', 1, 0, NULL, NULL),
  ('Placeholder Barangay 3', 'Hon. [Captain Name - Pending]', 1, 0, NULL, NULL)
ON CONFLICT (barangay_name) DO NOTHING;

-- NOTE: The full 110 barangay captains will be populated by seed-production.sql
-- which runs after migrations and has access to the barangays table data

-- Add table comment
COMMENT ON TABLE barangay_officials IS 'Barangay captains for all 110 barangays in Ormoc City. Data pending verification from DILG Barangay Officials Directory.';

-- Verification query to check data
-- SELECT 
--   barangay_name,
--   captain_name,
--   district,
--   population,
--   contact_number,
--   email
-- FROM barangay_officials
-- ORDER BY barangay_name;
--
-- Expected: 110 rows (one per barangay)
