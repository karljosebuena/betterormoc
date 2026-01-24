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
-- Using barangay IDs from the barangays table
INSERT INTO barangay_officials (barangay_id, name, position, display_order, term_start, term_end)
SELECT 
  b.id,
  'Hon. [Captain Name - ' || b.name || ']' as name,
  'Barangay Captain' as position,
  1 as display_order,
  '2023-11-30'::date as term_start,
  '2026-11-30'::date as term_end
FROM barangays b
ORDER BY b.name;

-- ============================================
-- BARANGAY KAGAWADS (7 per barangay)
-- ============================================
-- NOTE: Placeholder data - each barangay has 7 kagawads
-- TODO: Update with real names from DILG directory

INSERT INTO barangay_officials (barangay_id, name, position, display_order, term_start, term_end)
SELECT 
  b.id,
  'Hon. [Kagawad ' || n.num || ' - ' || b.name || ']' as name,
  'Kagawad' as position,
  (n.num + 1) as display_order,
  '2023-11-30'::date as term_start,
  '2026-11-30'::date as term_end
FROM barangays b
CROSS JOIN (
  SELECT generate_series(1, 7) as num
) n
ORDER BY b.name, n.num;

-- ============================================
-- SK CHAIRMEN (1 per barangay)
-- ============================================
-- NOTE: Sangguniang Kabataan (SK) Chairman per barangay
-- TODO: Update with real names from DILG directory

INSERT INTO barangay_officials (barangay_id, name, position, display_order, term_start, term_end)
SELECT 
  b.id,
  'Hon. [SK Chairman - ' || b.name || ']' as name,
  'SK Chairman' as position,
  9 as display_order,
  '2023-11-30'::date as term_start,
  '2026-11-30'::date as term_end
FROM barangays b
ORDER BY b.name;

-- Add table comment
COMMENT ON TABLE barangay_officials IS 'Barangay officials for all 110 barangays in Ormoc City. Data pending verification from DILG Barangay Officials Directory. Each barangay has: 1 Captain, 7 Kagawads, 1 SK Chairman.';

-- Add column comments
COMMENT ON COLUMN barangay_officials.position IS 'Position types: Barangay Captain, Kagawad, SK Chairman, Secretary, Treasurer';
COMMENT ON COLUMN barangay_officials.term_start IS 'Barangay elections are held every 3 years. Last election: November 30, 2023';
COMMENT ON COLUMN barangay_officials.term_end IS 'Current term ends November 30, 2026';

-- Verification query to check data
-- SELECT 
--   b.name as barangay,
--   COUNT(CASE WHEN bo.position = 'Barangay Captain' THEN 1 END) as captains,
--   COUNT(CASE WHEN bo.position = 'Kagawad' THEN 1 END) as kagawads,
--   COUNT(CASE WHEN bo.position = 'SK Chairman' THEN 1 END) as sk_chairmen,
--   COUNT(*) as total_officials
-- FROM barangays b
-- LEFT JOIN barangay_officials bo ON b.id = bo.barangay_id
-- GROUP BY b.name
-- ORDER BY b.name;
