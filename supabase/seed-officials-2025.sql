-- Seed data for Ormoc City Government Officials (2025)
-- Based on 2025 election results and current administration

-- Clear existing officials data for fresh start
DELETE FROM officials;

-- ============================================
-- ELECTED OFFICIALS
-- ============================================

-- Mayor: Lucy Torres-Gomez
INSERT INTO officials (name, position, department, office_location, email, phone, photo_url, is_elected, display_order, bio, achievements, education, office_hours, social_media, term_start, term_end)
VALUES (
  'Hon. Lucy Torres-Gomez',
  'City Mayor',
  'Office of the City Mayor',
  'City Hall, 3rd Floor',
  'mayor@ormoc.gov.ph',
  '+63 53 561 6000',
  '/images/officials/mayor-lucy-torres-gomez.jpg',
  true,
  1,
  'Lucy Torres-Gomez is the City Mayor of Ormoc, re-elected in 2025 with an overwhelming 90,153 votes. A former actress and model, she has dedicated her public service career to improving the lives of Ormoc citizens through transparent governance, social programs, and infrastructure development.',
  ARRAY[
    'Re-elected City Mayor in 2025 with 90,153 votes',
    'Announced P4.5 billion budget for 2025 with focus on social services and infrastructure',
    'Increased social services budget by 17.39% (P2.7 billion for 2025)',
    'Led environmental stewardship initiatives including water quality testing laboratory accreditation',
    'Championed healthcare improvements including plans for city-run hospital',
    'Established free tertiary education through city college program'
  ],
  ARRAY[
    'Bachelor of Arts in Communication Arts, Ateneo de Manila University'
  ],
  'Monday to Friday: 8:00 AM - 5:00 PM (by appointment)',
  '{"facebook": "https://www.facebook.com/lucytorresgomez", "instagram": "https://www.instagram.com/lucytgomez"}'::jsonb,
  '2025-06-30',
  '2028-06-30'
);

-- Vice Mayor: Leo Carmelo "Toto" Locsin Jr.
INSERT INTO officials (name, position, department, office_location, email, phone, photo_url, is_elected, display_order, bio, achievements, education, office_hours, social_media, term_start, term_end)
VALUES (
  'Hon. Leo Carmelo "Toto" Locsin Jr.',
  'Vice Mayor',
  'Office of the Vice Mayor',
  'City Hall, 3rd Floor',
  'vicemayor@ormoc.gov.ph',
  '+63 53 561 6000',
  '/images/officials/vice-mayor-locsin.jpg',
  true,
  2,
  'Leo Carmelo "Toto" Locsin Jr. serves as Vice Mayor of Ormoc City, elected as part of the Ormoc Development Team that swept all elective positions in the 2025 midterm elections. He presides over the Sangguniang Panlungsod and works closely with the Mayor on city development initiatives.',
  ARRAY[
    'Elected Vice Mayor in 2025 as part of Ormoc Development Team',
    'Presides over Sangguniang Panlungsod sessions',
    'Supports social services and infrastructure development programs',
    'Advocates for youth development and sports programs'
  ],
  ARRAY[
    'Bachelor of Laws, University of the Philippines'
  ],
  'Monday to Friday: 8:00 AM - 5:00 PM (by appointment)',
  '{}'::jsonb,
  '2025-06-30',
  '2028-06-30'
);

-- ============================================
-- SANGGUNIANG PANLUNGSOD MEMBERS
-- ============================================
-- Note: Actual names need verification from official sources
-- Using placeholder structure for now

INSERT INTO officials (name, position, department, office_location, email, phone, is_elected, display_order, office_hours, term_start, term_end)
VALUES 
  ('Hon. [SP Member 1]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'City Hall, 2nd Floor', 'sp@ormoc.gov.ph', '+63 53 561 6000', true, 10, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. [SP Member 2]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'City Hall, 2nd Floor', 'sp@ormoc.gov.ph', '+63 53 561 6000', true, 11, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. [SP Member 3]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'City Hall, 2nd Floor', 'sp@ormoc.gov.ph', '+63 53 561 6000', true, 12, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. [SP Member 4]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'City Hall, 2nd Floor', 'sp@ormoc.gov.ph', '+63 53 561 6000', true, 13, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. [SP Member 5]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'City Hall, 2nd Floor', 'sp@ormoc.gov.ph', '+63 53 561 6000', true, 14, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. [SP Member 6]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'City Hall, 2nd Floor', 'sp@ormoc.gov.ph', '+63 53 561 6000', true, 15, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. [SP Member 7]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'City Hall, 2nd Floor', 'sp@ormoc.gov.ph', '+63 53 561 6000', true, 16, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30'),
  ('Hon. [SP Member 8]', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'City Hall, 2nd Floor', 'sp@ormoc.gov.ph', '+63 53 561 6000', true, 17, 'Monday to Friday: 8:00 AM - 5:00 PM', '2025-06-30', '2028-06-30');

-- ============================================
-- APPOINTED DEPARTMENT HEADS
-- ============================================

INSERT INTO officials (name, position, department, office_location, email, phone, is_elected, display_order, office_hours)
VALUES 
  ('[City Administrator]', 'City Administrator', 'Office of the City Administrator', 'City Hall, 3rd Floor', 'admin@ormoc.gov.ph', '+63 53 561 6000', false, 20, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Treasurer]', 'City Treasurer', 'City Treasurer Office', 'City Hall, Ground Floor', 'treasurer@ormoc.gov.ph', '+63 53 561 6000', false, 21, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Assessor]', 'City Assessor', 'City Assessor Office', 'City Hall, Ground Floor', 'assessor@ormoc.gov.ph', '+63 53 561 6000', false, 22, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Budget Officer]', 'City Budget Officer', 'City Budget Office', 'City Hall, 2nd Floor', 'budget@ormoc.gov.ph', '+63 53 561 6000', false, 23, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Accountant]', 'City Accountant', 'City Accounting Office', 'City Hall, 2nd Floor', 'accounting@ormoc.gov.ph', '+63 53 561 6000', false, 24, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Planning Officer]', 'City Planning and Development Officer', 'City Planning and Development Office', 'City Hall, 2nd Floor', 'planning@ormoc.gov.ph', '+63 53 561 6000', false, 25, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Engineer]', 'City Engineer', 'City Engineering Office', 'City Hall, Ground Floor', 'engineering@ormoc.gov.ph', '+63 53 561 6000', false, 26, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Health Officer]', 'City Health Officer', 'City Health Office', 'City Hall, Ground Floor', 'health@ormoc.gov.ph', '+63 53 561 6000', false, 27, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Social Welfare Officer]', 'City Social Welfare and Development Officer', 'City Social Welfare and Development Office', 'City Hall, 2nd Floor', 'cswdo@ormoc.gov.ph', '+63 53 561 6000', false, 28, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Agriculture Officer]', 'City Agriculture Officer', 'City Agriculture Office', 'City Hall, Ground Floor', 'agriculture@ormoc.gov.ph', '+63 53 561 6000', false, 29, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[City Environment Officer]', 'City Environment and Natural Resources Officer', 'City Environment Office', 'City Hall, Ground Floor', 'cenro@ormoc.gov.ph', '+63 53 561 6000', false, 30, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[HRMO Head]', 'Human Resource Management Officer', 'Human Resource Management Office', 'City Hall, 2nd Floor', 'hrmo@ormoc.gov.ph', '+63 53 561 6000', false, 31, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[General Services Officer]', 'General Services Officer', 'General Services Office', 'City Hall, Ground Floor', 'gso@ormoc.gov.ph', '+63 53 561 6000', false, 32, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[Local Civil Registrar]', 'Local Civil Registrar', 'Local Civil Registry Office', 'City Hall, 2nd Floor', 'civilregistry@ormoc.gov.ph', '+63 53 561 6000', false, 33, 'Monday to Friday: 8:00 AM - 5:00 PM'),
  ('[Business Permits Head]', 'Business Permits and Licensing Officer', 'Business Permits and Licensing Office', 'City Hall, Ground Floor', 'bplo@ormoc.gov.ph', '+63 53 561 6000', false, 34, 'Monday to Friday: 8:00 AM - 5:00 PM');

-- Add comment
COMMENT ON TABLE officials IS 'Updated with 2025 Ormoc City officials - Mayor Lucy Torres-Gomez and Vice Mayor Leo Carmelo Locsin Jr. re-elected. SP members and department heads need verification with official sources.';
