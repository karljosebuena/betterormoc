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
INSERT INTO officials (name, position, department, email, phone, photo_url, term_start, term_end, display_order, bio, achievements, education, office_hours, social_media) VALUES
-- Mayor
('Hon. Lucy Torres-Gomez', 'City Mayor', 'Office of the City Mayor', 'mayor@ormoc.gov.ph', '+63 53 561 6000', '/images/officials/mayor-lucy-torres-gomez.jpg', '2025-06-30', '2028-06-30', 1, 
'Lucy Torres-Gomez is the City Mayor of Ormoc, re-elected in 2025 with an overwhelming 90,153 votes. A former actress and model, she has dedicated her public service career to improving the lives of Ormoc citizens through transparent governance, social programs, and infrastructure development.',
ARRAY[
  'Re-elected City Mayor in 2025 with 90,153 votes',
  'Announced P4.5 billion budget for 2025 with focus on social services and infrastructure',
  'Increased social services budget by 17.39% (P2.7 billion for 2025)',
  'Led environmental stewardship initiatives including water quality testing laboratory accreditation',
  'Championed healthcare improvements including plans for city-run hospital',
  'Established free tertiary education through city college program'
],
ARRAY['Bachelor of Arts in Communication Arts, Ateneo de Manila University'],
'Monday to Friday: 8:00 AM - 5:00 PM (by appointment)',
'{"facebook": "https://www.facebook.com/lucytorresgomez", "instagram": "https://www.instagram.com/lucytgomez"}'::jsonb),

-- Vice Mayor
('Hon. Leo Carmelo "Toto" Locsin Jr.', 'City Vice Mayor', 'Office of the Vice Mayor', 'vicemayor@ormoc.gov.ph', '+63 53 561 6000', '/images/officials/vice-mayor-locsin.jpg', '2025-06-30', '2028-06-30', 2,
'Leo Carmelo "Toto" Locsin Jr. serves as Vice Mayor of Ormoc City, elected as part of the Ormoc Development Team that swept all elective positions in the 2025 midterm elections. He presides over the Sangguniang Panlungsod and works closely with the Mayor on city development initiatives.',
ARRAY[
  'Elected Vice Mayor in 2025 as part of Ormoc Development Team',
  'Presides over Sangguniang Panlungsod sessions',
  'Supports social services and infrastructure development programs',
  'Advocates for youth development and sports programs'
],
ARRAY['Bachelor of Laws, University of the Philippines'],
'Monday to Friday: 8:00 AM - 5:00 PM (by appointment)',
'{}'::jsonb);

-- Sangguniang Panlungsod Members
-- Data verified from official roster (2025-2028 Term)
INSERT INTO officials (name, position, department, office_location, email, phone, is_elected, display_order, office_hours, term_start, term_end)
VALUES 
  ('Hon. Ari Larrazabal', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'New Ormoc City Hall, Aunubing St., Brgy. Cogon', 'spmarilarrazabal@gmail.com', '+63 53 561 6000', true, 3, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. Edmund Kierulf', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Aunubing St. Brgy. Cogon, Ormoc City', 'ekierulf09@gmail.com', '+63 53 561 6000', true, 4, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. Tomas Serafica', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'New Ormoc City Hall, Aunubing St., Brgy. Cogon', 'spmtomasserafica@gmail.com', '+63 53 561 6000', true, 5, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. Jasper Lucero', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Aunubing Street, Ormoc City', 'spmjasperlucero@gmail.com', '+63 53 561 6000', true, 6, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. Peter Rodriguez', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Aunubing St. Brgy. Cogon, Ormoc City', NULL, '+63 53 561 6000', true, 7, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. Maria Carmen Jean Rama', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', '3F New Ormoc City Hall, Aunubing St. Brgy. Cogon', 'ctramaoffice@gmail.com', '+63 53 561 6000', true, 8, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. Eusebio Gerardo Penserga', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Aunubing St., Brgy. Cogon, Ormoc City', 'SPMEMBERGERRYPENSERGA@gmail.com', '+63 53 561 6000', true, 9, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. Burt Pades', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', '3F Councilor''s Office, New Ormoc City Hall', 'burtjpades06@gmail.com', '+63 53 561 6000', true, 10, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. Krizea Caessandra Mercadal', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Anubing Street, Brgy. Cogon, Ormoc City', 'spmkiamercadal@gmail.com', '+63 53 561 6000', true, 11, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. Lalaine Marcos', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Aunubing Street, Barangay Cogon, Ormoc City', 'SPM.MARCOSOFFICE@GMAIL.COM', '+63 53 561 6000', true, 12, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30');

-- Ex-Officio Members (ABC President, SK Federation President)
-- Note: Placeholder data for Ex-Officio members (not included in councilors list)
INSERT INTO officials (name, position, department, email, phone, photo_url, term_start, term_end, display_order) VALUES
('Hon. [ABC President Name]', 'ABC President (Ex-Officio)', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 13),
('Hon. [SK Federation President Name]', 'SK Federation President (Ex-Officio)', 'Sangguniang Panlungsod', 'sp@ormoc.gov.ph', NULL, NULL, '2025-06-30', '2028-06-30', 14);

-- Verification Status
COMMENT ON TABLE officials IS 'City Officials for 2025-2028 term. Data pending verification from official sources.';
