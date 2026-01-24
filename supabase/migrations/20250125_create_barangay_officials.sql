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

-- Insert Barangay Captains for all 110 barangays
-- Using existing table structure: barangay_name, captain_name, district, population
INSERT INTO barangay_officials (barangay_name, captain_name, district, population, contact_number, email)
SELECT 
  b.name as barangay_name,
  'Hon. [Captain Name - ' || b.name || ']' as captain_name,
  b.district,
  b.population_2024,
  NULL as contact_number,
  NULL as email
FROM barangays b
ORDER BY b.name
ON CONFLICT (barangay_name) DO UPDATE
SET 
  captain_name = EXCLUDED.captain_name,
  district = EXCLUDED.district,
  population = EXCLUDED.population,
  updated_at = NOW();

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
