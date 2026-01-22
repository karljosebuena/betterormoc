-- Update Officials Seed Data with Complete Roster
-- Ormoc City Government Officials (2025)
-- Note: SP member and department head names are placeholders pending official roster publication

DELETE FROM officials WHERE id > 2; -- Keep Mayor and Vice Mayor

-- ============================================
-- SANGGUNIANG PANLUNGSOD MEMBERS (8 members)
-- ============================================
-- Note: Actual names pending official roster. Using placeholder structure.

INSERT INTO officials (
  name, position, department, office_location, email, phone, elected, display_order,
  office_hours, term_start, term_end, bio, achievements, education
) VALUES
-- SP Member 1 - Committee on Appropriations
(
  'Hon. Maria Elena Santos',
  'Sangguniang Panlungsod Member',
  'Sangguniang Panlungsod',
  'City Hall, 2nd Floor, Legislative Building',
  'sp.santos@ormoc.gov.ph',
  '+63 53 561 6001',
  true,
  10,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  '2025-06-30',
  '2028-06-30',
  'Chairperson of the Committee on Appropriations. Advocates for transparent budget allocation and fiscal responsibility.',
  ARRAY['Led budget reform initiatives', 'Championed social services funding'],
  'Bachelor of Science in Accountancy, University of the Philippines'
),

-- SP Member 2 - Committee on Health
(
  'Hon. Dr. Roberto Cruz',
  'Sangguniang Panlungsod Member',
  'Sangguniang Panlungsod',
  'City Hall, 2nd Floor, Legislative Building',
  'sp.cruz@ormoc.gov.ph',
  '+63 53 561 6002',
  true,
  11,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  '2025-06-30',
  '2028-06-30',
  'Chairperson of the Committee on Health. Medical doctor with extensive experience in public health programs.',
  ARRAY['Expanded vaccination programs', 'Improved rural health unit facilities'],
  'Doctor of Medicine, University of Santo Tomas'
),

-- SP Member 3 - Committee on Education
(
  'Hon. Carmen Reyes',
  'Sangguniang Panlungsod Member',
  'Sangguniang Panlungsod',
  'City Hall, 2nd Floor, Legislative Building',
  'sp.reyes@ormoc.gov.ph',
  '+63 53 561 6003',
  true,
  12,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  '2025-06-30',
  '2028-06-30',
  'Chairperson of the Committee on Education. Former public school teacher dedicated to improving educational facilities.',
  ARRAY['School building program expansion', 'Scholarship program enhancement'],
  'Master of Arts in Education, Leyte Normal University'
),

-- SP Member 4 - Committee on Infrastructure
(
  'Hon. Engr. Jose Mendoza',
  'Sangguniang Panlungsod Member',
  'Sangguniang Panlungsod',
  'City Hall, 2nd Floor, Legislative Building',
  'sp.mendoza@ormoc.gov.ph',
  '+63 53 561 6004',
  true,
  13,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  '2025-06-30',
  '2028-06-30',
  'Chairperson of the Committee on Infrastructure. Licensed civil engineer focused on road development and public works.',
  ARRAY['Road concreting program', 'Bridge construction projects'],
  'Bachelor of Science in Civil Engineering, Mapua University'
),

-- SP Member 5 - Committee on Agriculture
(
  'Hon. Antonio Villanueva',
  'Sangguniang Panlungsod Member',
  'Sangguniang Panlungsod',
  'City Hall, 2nd Floor, Legislative Building',
  'sp.villanueva@ormoc.gov.ph',
  '+63 53 561 6005',
  true,
  14,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  '2025-06-30',
  '2028-06-30',
  'Chairperson of the Committee on Agriculture. Farmer advocate promoting agricultural modernization and support programs.',
  ARRAY['Farm mechanization program', 'Irrigation system expansion'],
  'Bachelor of Science in Agriculture, Visayas State University'
),

-- SP Member 6 - Committee on Environment
(
  'Hon. Patricia Gonzales',
  'Sangguniang Panlungsod Member',
  'Sangguniang Panlungsod',
  'City Hall, 2nd Floor, Legislative Building',
  'sp.gonzales@ormoc.gov.ph',
  '+63 53 561 6006',
  true,
  15,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  '2025-06-30',
  '2028-06-30',
  'Chairperson of the Committee on Environment. Environmental advocate championing sustainability and climate action.',
  ARRAY['Waste segregation ordinance', 'Tree planting programs'],
  'Bachelor of Science in Environmental Science, University of the Philippines'
),

-- SP Member 7 - Committee on Tourism
(
  'Hon. Miguel Torres',
  'Sangguniang Panlungsod Member',
  'Sangguniang Panlungsod',
  'City Hall, 2nd Floor, Legislative Building',
  'sp.torres@ormoc.gov.ph',
  '+63 53 561 6007',
  true,
  16,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  '2025-06-30',
  '2028-06-30',
  'Chairperson of the Committee on Tourism. Business leader promoting Ormoc as a premier tourist destination.',
  ARRAY['Tourism development plan', 'Festival promotion initiatives'],
  'Bachelor of Science in Tourism Management, De La Salle University'
),

-- SP Member 8 - Committee on Public Safety
(
  'Hon. Rafael Domingo',
  'Sangguniang Panlungsod Member',
  'Sangguniang Panlungsod',
  'City Hall, 2nd Floor, Legislative Building',
  'sp.domingo@ormoc.gov.ph',
  '+63 53 561 6008',
  true,
  17,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  '2025-06-30',
  '2028-06-30',
  'Chairperson of the Committee on Public Safety. Former police officer dedicated to peace and order programs.',
  ARRAY['Community policing programs', 'Disaster preparedness initiatives'],
  'Bachelor of Science in Criminology, Philippine National Police Academy'
);

-- ============================================
-- DEPARTMENT HEADS (15 key departments)
-- ============================================

INSERT INTO officials (
  name, position, department, office_location, email, phone, elected, display_order,
  office_hours, bio, education
) VALUES
-- City Administrator
(
  'Atty. Benjamin Ramirez',
  'City Administrator',
  'Office of the City Administrator',
  'City Hall, 3rd Floor',
  'cityadmin@ormoc.gov.ph',
  '+63 53 561 6100',
  false,
  20,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Chief administrative officer overseeing day-to-day operations of city government departments and programs.',
  'Juris Doctor, Ateneo de Manila University'
),

-- City Treasurer
(
  'Ms. Rosario Fernandez',
  'City Treasurer',
  'Office of the City Treasurer',
  'City Hall, 1st Floor',
  'treasurer@ormoc.gov.ph',
  '+63 53 561 6110',
  false,
  21,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Manages city finances, revenue collection, and disbursement of funds in accordance with budget appropriations.',
  'Bachelor of Science in Accountancy, CPA'
),

-- City Assessor
(
  'Engr. Carlos Bautista',
  'City Assessor',
  'Office of the City Assessor',
  'City Hall, 1st Floor',
  'assessor@ormoc.gov.ph',
  '+63 53 561 6120',
  false,
  22,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Responsible for property assessment, real property tax administration, and maintenance of property records.',
  'Bachelor of Science in Civil Engineering'
),

-- City Budget Officer
(
  'Ms. Diana Lopez',
  'City Budget Officer',
  'Office of the City Budget',
  'City Hall, 3rd Floor',
  'budget@ormoc.gov.ph',
  '+63 53 561 6130',
  false,
  23,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Prepares annual budget, monitors budget utilization, and ensures fiscal accountability across all departments.',
  'Master in Public Administration, University of the Philippines'
),

-- City Planning and Development Officer
(
  'Arch. Eduardo Santos',
  'City Planning and Development Coordinator',
  'City Planning and Development Office',
  'City Hall, 4th Floor',
  'planning@ormoc.gov.ph',
  '+63 53 561 6140',
  false,
  24,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Formulates comprehensive development plans, zoning ordinances, and coordinates city development projects.',
  'Master in Urban and Regional Planning'
),

-- City Engineer
(
  'Engr. Francisco Alvarez',
  'City Engineer',
  'Office of the City Engineer',
  'City Hall, Ground Floor',
  'engineering@ormoc.gov.ph',
  '+63 53 561 6150',
  false,
  25,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Oversees infrastructure projects, road construction, building permits, and public works maintenance.',
  'Bachelor of Science in Civil Engineering, Licensed Civil Engineer'
),

-- City Health Officer
(
  'Dr. Maria Victoria Cruz',
  'City Health Officer',
  'City Health Office',
  'Ormoc City General Hospital Compound',
  'health@ormoc.gov.ph',
  '+63 53 561 6160',
  false,
  26,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Leads public health programs, disease prevention, maternal and child health, and health facility management.',
  'Doctor of Medicine, Master in Public Health'
),

-- City Social Welfare and Development Officer
(
  'Ms. Angela Martinez',
  'City Social Welfare and Development Officer',
  'City Social Welfare and Development Office',
  'City Hall, 2nd Floor',
  'cswdo@ormoc.gov.ph',
  '+63 53 561 6170',
  false,
  27,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Implements social welfare programs, 4Ps, assistance to PWDs, senior citizens, and indigent families.',
  'Master in Social Work, Licensed Social Worker'
),

-- City Agriculturist
(
  'Dr. Ramon Dela Cruz',
  'City Agriculturist',
  'Office of the City Agriculturist',
  'City Hall Annex Building',
  'agriculture@ormoc.gov.ph',
  '+63 53 561 6180',
  false,
  28,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Promotes agricultural development, provides technical assistance to farmers, and implements farm support programs.',
  'Doctor of Philosophy in Agriculture'
),

-- City Environment and Natural Resources Officer
(
  'Forester Juan Reyes',
  'City Environment and Natural Resources Officer',
  'City Environment and Natural Resources Office',
  'City Hall Annex Building',
  'cenro@ormoc.gov.ph',
  '+63 53 561 6190',
  false,
  29,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Manages environmental programs, waste management, tree planting, and natural resource conservation.',
  'Bachelor of Science in Forestry, Licensed Forester'
),

-- City Tourism Officer
(
  'Ms. Isabel Garcia',
  'City Tourism Officer',
  'City Tourism Office',
  'City Hall, 2nd Floor',
  'tourism@ormoc.gov.ph',
  '+63 53 561 6200',
  false,
  30,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Promotes Ormoc as a tourist destination, develops tourism products, and coordinates festivals and events.',
  'Bachelor of Science in Tourism Management'
),

-- Human Resource Management Officer
(
  'Atty. Sophia Ramos',
  'Human Resource Management Officer',
  'Human Resource Management Office',
  'City Hall, 3rd Floor',
  'hrmo@ormoc.gov.ph',
  '+63 53 561 6210',
  false,
  31,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Manages recruitment, employee development, performance evaluation, and personnel records of city employees.',
  'Juris Doctor, Master in Human Resource Management'
),

-- General Services Officer
(
  'Mr. Roberto Santos',
  'General Services Officer',
  'General Services Office',
  'City Hall, Ground Floor',
  'gso@ormoc.gov.ph',
  '+63 53 561 6220',
  false,
  32,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Manages city properties, procurement, supplies, equipment maintenance, and administrative support services.',
  'Bachelor of Science in Business Administration'
),

-- Local Civil Registrar
(
  'Atty. Teresa Villanueva',
  'Local Civil Registrar',
  'Office of the Local Civil Registrar',
  'City Hall, 1st Floor',
  'civilregistrar@ormoc.gov.ph',
  '+63 53 561 6230',
  false,
  33,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Maintains civil registry records including birth, death, marriage certificates, and issues certified copies.',
  'Juris Doctor, Licensed Attorney'
),

-- Business Permits and Licensing Officer
(
  'Mr. Antonio Cruz',
  'Business Permits and Licensing Officer',
  'Business Permits and Licensing Office',
  'City Hall, 1st Floor',
  'bplo@ormoc.gov.ph',
  '+63 53 561 6240',
  false,
  34,
  'Monday to Friday: 8:00 AM - 5:00 PM',
  'Processes business permits, licenses, and ensures compliance with business regulations and ordinances.',
  'Bachelor of Science in Business Administration'
);

-- Add comment
COMMENT ON TABLE officials IS 'Ormoc City government officials including elected officials (Mayor, Vice Mayor, SP members) and appointed department heads. SP member and department head names are placeholders pending official roster publication.';
