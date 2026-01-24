-- Migration: Update City Officials for 2025-2028 Term
-- Description: Updates city officials with placeholder data pending official verification
-- Data Source: Pending official roster from Google Sheets
-- Last Updated: 2025-01-25

-- Clear existing officials data
TRUNCATE TABLE officials CASCADE;

-- Reset sequence
ALTER SEQUENCE officials_id_seq RESTART WITH 1;

-- Insert City Officials (2025-2028 Term)
-- NOTE: This data contains placeholders pending official verification
-- TODO: Update with real data from official sources

-- Executive Leadership
INSERT INTO officials (name, position, department, email, phone, photo_url, term_start, term_end, display_order) VALUES
-- Mayor
('Hon. [Mayor Name]', 'City Mayor', 'Office of the City Mayor', 'mayor@ormoc.gov.ph', '(053) 560-8140', NULL, '2025-06-30', '2028-06-30', 1),

-- Vice Mayor
('Hon. [Vice Mayor Name]', 'City Vice Mayor', 'Office of the Vice Mayor', 'vicemayor@ormoc.gov.ph', '(053) 560-8140', NULL, '2025-06-30', '2028-06-30', 2);

-- Sangguniang Panlungsod Members
-- NOTE: Placeholder data - needs verification from official roster
INSERT INTO officials (name, position, department, email, phone, photo_url, term_start, term_end, display_order) VALUES
('Hon. [Councilor 1 Name]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 3),
('Hon. [Councilor 2 Name]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 4),
('Hon. [Councilor 3 Name]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 5),
('Hon. [Councilor 4 Name]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 6),
('Hon. [Councilor 5 Name]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 7),
('Hon. [Councilor 6 Name]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 8),
('Hon. [Councilor 7 Name]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 9),
('Hon. [Councilor 8 Name]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 10);

-- Ex-Officio Members (ABC President, SK Federation President)
INSERT INTO officials (name, position, department, email, phone, photo_url, term_start, term_end, display_order) VALUES
('Hon. [ABC President Name]', 'ABC President (Ex-Officio)', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 11),
('Hon. [SK Federation President Name]', 'SK Federation President (Ex-Officio)', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 12);

-- Verification Status
COMMENT ON TABLE officials IS 'City Officials for 2025-2028 term. Data pending verification from official sources.';
