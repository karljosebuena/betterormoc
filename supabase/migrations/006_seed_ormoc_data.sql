-- Services Data Migration

-- Transforming Solano services to Ormoc format

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Birth Certificate', 'Certificates & Vital Records', 'Get a certified copy of birth certificate registered in Ormoc', '["birth","certificate","born","baby","civil registry","lcr","vital records"]'::jsonb, '₱150', '15-30 minutes', 'Local Civil Registrar', NULL, 'birth-certificate');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Marriage Certificate', 'Certificates & Vital Records', 'Register or request certified true copy of marriage certificate', '["marriage","wedding","married","spouse","civil registry","kasal","COM","certificate of marriage"]'::jsonb, 'Free (Registration)', '5 minutes', 'Local Civil Registrar', NULL, 'marriage-certificate');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Death Certificate', 'Certificates & Vital Records', 'Register death certificate and obtain burial or transfer permit', '["death","died","deceased","obituary","civil registry","burial permit","transfer permit"]'::jsonb, '₱50-150', '1 hour 35 minutes', 'Local Civil Registrar', NULL, 'death-certificate');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Barangay Clearance', 'Certificates & Vital Records', 'Certificate of residence from your barangay', '["barangay","clearance","residence","residency","brgy"]'::jsonb, '₱50-100', 'Same day', 'Barangay Hall', NULL, 'barangay-clearance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Barangay ID', 'Certificates & Vital Records', 'Official barangay identification card', '["barangay","id","identification","brgy"]'::jsonb, 'Free', '1-2 days', 'Barangay Hall', NULL, 'barangay-id');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Police Clearance', 'Certificates & Vital Records', 'Police clearance coordination through municipal office', '["police","clearance","nbi","criminal","record"]'::jsonb, 'Varies', '3-5 days', 'PNP Ormoc', NULL, 'police-clearance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Business Permit (New)', 'Business, Trade & Investment', 'Apply for a new mayor''s permit to operate a business', '["business","permit","new","mayor","license","negosyo","store","shop"]'::jsonb, 'Varies', '3-5 days', 'Business Permits & Licensing Office', NULL, 'business-permit-new');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Business Permit Renewal', 'Business, Trade & Investment', 'Renew your annual business permit', '["business","permit","renewal","renew","annual","negosyo"]'::jsonb, 'Varies', 'Same day', 'Business Permits & Licensing Office', NULL, 'business-permit-renewal');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Business Closure', 'Business, Trade & Investment', 'File for business closure/termination', '["business","closure","close","terminate","end"]'::jsonb, 'Free', '1-2 days', 'Business Permits & Licensing Office', NULL, 'business-closure');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Sanitary Permit', 'Business, Trade & Investment', 'Health and sanitation permit for businesses', '["sanitary","permit","health","sanitation","food","restaurant"]'::jsonb, 'Varies', '1-3 days', 'Municipal Health Office', NULL, 'sanitary-permit');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Community Tax Certificate (Cedula)', 'Business, Trade & Investment', 'Obtain cedula for individuals and businesses', '["cedula","community","tax","certificate","ctc"]'::jsonb, '₱5+', 'Same day', 'Municipal Treasurer''s Office', NULL, 'cedula');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Senior Citizen ID', 'Social Services & Assistance', 'ID card and benefits for citizens 60 years and above', '["senior","citizen","elderly","old","60","osca","discount"]'::jsonb, 'Free', '1-2 weeks', 'MSWDO / OSCA', NULL, 'senior-citizen-id');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('PWD ID & Services', 'Social Services & Assistance', 'ID and benefits for persons with disabilities', '["pwd","disability","disabled","handicap","special","discount"]'::jsonb, 'Free', '1-2 weeks', 'MSWDO', NULL, 'pwd-id');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Financial Assistance', 'Social Services & Assistance', 'Emergency financial aid for qualified residents', '["financial","assistance","aid","help","money","emergency","aics"]'::jsonb, 'Free', 'Varies', 'MSWDO', NULL, 'financial-assistance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Burial Assistance', 'Social Services & Assistance', 'Financial assistance for burial expenses', '["burial","funeral","death","assistance","aid"]'::jsonb, 'Free', '1-3 days', 'MSWDO', NULL, 'burial-assistance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Solo Parent ID', 'Social Services & Assistance', 'ID and benefits for solo parents', '["solo","parent","single","mother","father"]'::jsonb, 'Free', '1-2 weeks', 'MSWDO', NULL, 'solo-parent-id');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Vaccination Programs', 'Health & Wellness', 'Free immunization for children and adults', '["vaccine","vaccination","immunization","shot","covid","flu"]'::jsonb, 'Free', 'Same day', 'Municipal Health Office', NULL, 'vaccination');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Health Certificate', 'Health & Wellness', 'Medical certificate for employment or business', '["health","certificate","medical","employment","work"]'::jsonb, '₱100-200', 'Same day', 'Municipal Health Office', NULL, 'health-certificate');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Medical Assistance', 'Health & Wellness', 'Financial aid for medical expenses and hospitalization', '["medical","assistance","hospital","medicine","health","sick"]'::jsonb, 'Free', '1-3 days', 'Municipal Health Office / MSWDO', NULL, 'medical-assistance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Prenatal Checkup', 'Health & Wellness', 'Free prenatal care for pregnant women', '["prenatal","pregnant","pregnancy","baby","maternal","checkup"]'::jsonb, 'Free', 'Same day', 'Municipal Health Office', NULL, 'prenatal-checkup');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Real Property Tax Payment', 'Taxation & Payments', 'Pay annual real property tax (amilyar)', '["property","tax","real","amilyar","land","house","lot"]'::jsonb, 'Varies', 'Same day', 'Municipal Treasurer''s Office', NULL, 'real-property-tax');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Business Tax Payment', 'Taxation & Payments', 'Pay quarterly or annual business taxes', '["business","tax","payment","quarterly","annual"]'::jsonb, 'Varies', 'Same day', 'Municipal Treasurer''s Office', NULL, 'business-tax');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Tax Clearance', 'Taxation & Payments', 'Certificate of no tax liability', '["tax","clearance","certificate","liability"]'::jsonb, '₱50-100', 'Same day', 'Municipal Treasurer''s Office', NULL, 'tax-clearance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Agricultural Loans', 'Agriculture & Economic Development', 'Low-interest loans for farmers', '["agricultural","loan","farmer","farming","credit","pautang"]'::jsonb, 'Varies', '1-2 weeks', 'Municipal Agriculture Office', NULL, 'agricultural-loan');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Crop Insurance', 'Agriculture & Economic Development', 'Insurance coverage for crop damage', '["crop","insurance","damage","calamity","pcic"]'::jsonb, 'Subsidized', 'Varies', 'Municipal Agriculture Office', NULL, 'crop-insurance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Fertilizer Assistance', 'Agriculture & Economic Development', 'Free or subsidized fertilizer for registered farmers', '["fertilizer","assistance","farmer","farming","abono"]'::jsonb, 'Free/Subsidized', 'Varies', 'Municipal Agriculture Office', NULL, 'fertilizer-assistance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Building Permit', 'Infrastructure & Public Works', 'Permit for new construction or renovation', '["building","permit","construction","house","renovation","build"]'::jsonb, 'Varies', '5-10 days', 'Municipal Engineering Office', NULL, 'building-permit');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Occupancy Permit', 'Infrastructure & Public Works', 'Certificate of completion for new buildings', '["occupancy","permit","completion","building","certificate"]'::jsonb, 'Varies', '3-5 days', 'Municipal Engineering Office', NULL, 'occupancy-permit');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Road Maintenance Request', 'Infrastructure & Public Works', 'Report road damage or request repairs', '["road","maintenance","repair","pothole","damage","street"]'::jsonb, 'Free', 'Varies', 'Municipal Engineering Office', NULL, 'road-maintenance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Scholarship Programs', 'Education & Scholarship', 'Financial assistance for students', '["scholarship","student","education","school","college","tuition"]'::jsonb, 'Free', 'Varies', 'Municipal Mayor''s Office', NULL, 'scholarship');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Student Assistance', 'Education & Scholarship', 'Educational grants and allowances', '["student","assistance","education","allowance","grant"]'::jsonb, 'Free', 'Varies', 'MSWDO', NULL, 'student-assistance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Emergency Response', 'Public Safety & Security', '24/7 emergency assistance and rescue', '["emergency","response","rescue","911","help","disaster"]'::jsonb, 'Free', 'Immediate', 'MDRRMO', NULL, 'emergency-response');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Disaster Preparedness', 'Public Safety & Security', 'Training and resources for disaster readiness', '["disaster","preparedness","training","evacuation","calamity"]'::jsonb, 'Free', 'Varies', 'MDRRMO', NULL, 'disaster-preparedness');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Environmental Clearance', 'Environment & Natural Resources', 'Environmental compliance certificate for projects', '["environmental","clearance","ecc","compliance","permit"]'::jsonb, 'Varies', '5-10 days', 'Municipal Environment Office', NULL, 'environmental-clearance');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Tree Cutting Permit', 'Environment & Natural Resources', 'Permit to cut or trim trees', '["tree","cutting","permit","trim","remove"]'::jsonb, 'Varies', '3-5 days', 'Municipal Environment Office', NULL, 'tree-cutting-permit');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('SEEDO Slaughterhouse', 'Business, Trade & Investment', 'Hog, cattle, goat, and carabao slaughter with meat inspection services', '["slaughterhouse","slaughter","hog","cattle","goat","carabao","meat","inspection","butcher","SEEDO"]'::jsonb, '₱40-350', '37 min - 1.5 hrs', 'SEEDO Slaughterhouse', NULL, 'seedo-slaughterhouse');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('MSWDO Services', 'Social Services & Assistance', 'Social case studies, indigency certificates, AICS, PWD and senior citizen assistance', '["MSWDO","social welfare","indigency","certificate","AICS","PWD","senior citizen","assistance","social worker","welfare"]'::jsonb, 'Free', '28 min - 1.5 hrs', 'MSWDO', NULL, 'mswdo-services');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Waste Management Services', 'Environment & Natural Resources', 'Garbage collection and disposal services', '["waste","garbage","trash","collection","disposal","basura"]'::jsonb, 'Included in tax', 'Scheduled', 'Municipal Environment Office', NULL, 'waste-management');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('SEEDO Public Market', 'Business, Trade & Investment', 'Market clearance, entrance fees, vendor services, and CTC issuance', '["public market","market","vendor","stall","clearance","entrance","SEEDO","palengke"]'::jsonb, '₱5-50', 'Same day', 'SEEDO Public Market', NULL, 'seedo-public-market');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Business Permits & Licensing Office', 'Business, Trade & Investment', 'New permits, renewals, Mayor''s clearance, and other business permits', '["BPLS","business permit","license","mayor clearance","renewal","new business"]'::jsonb, 'Varies', '1-5 days', 'Mayor''s Office - BPLS', NULL, 'business-permits-licensing');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Tricycle Franchising & Records', 'Business, Trade & Investment', 'Apply for tricycle franchise (MTOF) and request records', '["tricycle","franchise","MTOF","pedicab","toda","driver","operator"]'::jsonb, 'Varies', '3-5 days', 'BPLS / SBO', NULL, 'tricycle-franchising');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Municipal Treasurer''s Office', 'Taxation & Payments', 'Tax collection, cedula, clearances, and payment services', '["treasurer","MTO","tax","payment","cedula","clearance","collection"]'::jsonb, 'Varies', 'Same day', 'Municipal Treasurer''s Office', NULL, 'municipal-treasurer');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Municipal Budget Office', 'Taxation & Payments', 'Obligation requests, barangay budget review, and SEF budget preparation', '["budget","MBO","obligation","appropriation","SEF","barangay budget"]'::jsonb, 'Free', '15 min - 1 day', 'Municipal Budget Office', NULL, 'municipal-budget');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Municipal Accounting Office', 'Taxation & Payments', 'Pre-audit of disbursements, payroll, check issuance, and financial reporting', '["accounting","MACCO","audit","payroll","check","disbursement","voucher"]'::jsonb, 'Free', 'Varies', 'Municipal Accounting Office', NULL, 'municipal-accounting');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Property Declaration', 'Taxation & Payments', 'Declaration of land, building and machineries for tax assessment', '["property","declaration","assessor","land","building","tax assessment","real property"]'::jsonb, 'Varies', '3-5 days', 'Municipal Assessor''s Office', NULL, 'property-declaration');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Municipal Assessor''s Office', 'Taxation & Payments', 'Property assessment, tax declaration, and land records', '["assessor","property","assessment","tax declaration","land","appraisal"]'::jsonb, 'Varies', '3-5 days', 'Municipal Assessor''s Office', NULL, 'municipal-assessor');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Local Civil Registrar', 'Certificates & Vital Records', 'Birth, marriage, death certificates and civil registry services', '["civil registrar","LCR","birth","marriage","death","certificate","vital records","CENOMAR"]'::jsonb, '₱150+', '15-30 minutes', 'Local Civil Registrar', NULL, 'civil-registrar');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Municipal Engineering Office', 'Infrastructure & Public Works', 'Building permits, infrastructure projects, and engineering services', '["engineering","MEO","building permit","construction","infrastructure","road"]'::jsonb, 'Varies', '5-10 days', 'Municipal Engineering Office', NULL, 'municipal-engineering');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Municipal Planning & Development Office', 'Infrastructure & Public Works', 'Zoning, land use, development permits, and planning services', '["planning","MPDO","zoning","land use","development","locational clearance"]'::jsonb, 'Varies', '3-7 days', 'Municipal Planning Office', NULL, 'municipal-planning');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Municipal Agriculture Office', 'Agriculture & Economic Development', 'Agricultural assistance, farm registration, and livelihood programs', '["agriculture","MAO","farmer","farm","livestock","crops","RSBSA","livelihood"]'::jsonb, 'Free/Varies', 'Varies', 'Municipal Agriculture Office', NULL, 'municipal-agriculture');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('General Services Office', 'Government Services', 'Property management, vehicle maintenance, and general municipal services', '["general services","MGSO","property","vehicle","maintenance","supplies"]'::jsonb, 'Free', 'Varies', 'General Services Office', NULL, 'general-services');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Human Resource Management Office', 'Government Services', 'Employment, personnel records, and HR services', '["human resource","HRMO","employment","job","personnel","hiring","application"]'::jsonb, 'Free', 'Varies', 'Human Resource Management Office', NULL, 'human-resource');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Business Online Billing & Payment', 'Online Services', 'View and pay your business tax bills online via Filipizen', '["online","billing","payment","business tax","filipizen","e-payment","digital"]'::jsonb, 'Varies', 'Instant', 'BPLS Office', NULL, 'online-business-billing');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('New Business Application Online', 'Online Services', 'Apply for a new business permit online via Filipizen', '["online","new business","application","permit","filipizen","e-services"]'::jsonb, 'Varies', '3-5 days', 'BPLS Office', NULL, 'online-new-business');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Business Permit Renewal Online', 'Online Services', 'Renew your existing business permit online via Filipizen', '["online","renewal","business permit","filipizen","e-services","renew"]'::jsonb, 'Varies', 'Same day', 'BPLS Office', NULL, 'online-business-renewal');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Real Property Tax Online Billing & Payment', 'Online Services', 'View and pay your real property tax (amilyar) online via Filipizen', '["online","property tax","amilyar","billing","payment","filipizen","RPT"]'::jsonb, 'Varies', 'Instant', 'Municipal Treasurer''s Office', NULL, 'online-rpt-billing');

INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  ('Online Payment Order', 'Online Services', 'Process payment orders for various municipal fees online via Filipizen', '["online","payment order","fees","filipizen","e-payment","municipal fees"]'::jsonb, 'Varies', 'Instant', 'Municipal Treasurer''s Office', NULL, 'online-payment-order');


-- Officials Data Migration

-- Transforming Solano officials to Ormoc format

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Lucy Torres-Gomez', 'City Mayor', 'Office of the Mayor', 'mayor@ormoc.gov.ph', '0927-400-8033', NULL, 1);

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Leo Carmelo Locsin', 'City Vice Mayor', 'Office of the Vice Mayor', 'vicemayor@ormoc.gov.ph', '0916-284-0885', NULL, 2);

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Councilor 1', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', NULL, NULL, NULL, 3);

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Councilor 2', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', NULL, NULL, NULL, 4);

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Councilor 3', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', NULL, NULL, NULL, 5);

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Councilor 4', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', NULL, NULL, NULL, 6);

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Councilor 5', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', NULL, NULL, NULL, 7);

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Councilor 6', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', NULL, NULL, NULL, 8);

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Councilor 7', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', NULL, NULL, NULL, 9);

INSERT INTO officials (name, position, department, email, phone, photo_url, order_index) VALUES
  ('Hon. Councilor 8', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', NULL, NULL, NULL, 10);


-- Ordinances Data Migration

-- Using Solano ordinances as template for Ormoc

INSERT INTO ordinances (number, title, date_passed, description, category, status) VALUES
  ('2025-05-11', 'An Ordinance Creating the Film Development Council of the City of Ormoc, Nueva Vizcaya, Providing for Its Powers and Functions, and for Other Purposes', '2025-04-21', NULL, 'General', 'active');

INSERT INTO ordinances (number, title, date_passed, description, category, status) VALUES
  ('2025-04-11', 'An Ordinance Prohibiting the Entry of Nuisance Contraband Inside the Ormoc District Jail in the City of Solano, Nueva Vizcaya, and Providing Penalties for Violation Thereof', '2025-04-21', NULL, 'General', 'active');

INSERT INTO ordinances (number, title, date_passed, description, category, status) VALUES
  ('2025-03-11', 'An Ordinance Creating the Ormoc Municipal Housing Board, Defining Its Powers and Functions, and for Other Purposes', '2025-03-03', NULL, 'General', 'active');

INSERT INTO ordinances (number, title, date_passed, description, category, status) VALUES
  ('2025-02-11', 'An Ordinance Requiring All Households in the City of Ormoc, Nueva Vizcaya to Comply with Zero Open Defecation (ZOD), Providing for Its Guidelines and Penalties for Violation and Appropriating Funds Therefor', '2025-02-25', NULL, 'General', 'active');

INSERT INTO ordinances (number, title, date_passed, description, category, status) VALUES
  ('2025-01-11', 'An Ordinance Revising the Gender and Development Code of the City of Ormoc, Nueva Vizcaya and for Other Purposes, Subject to All Laws and Existing Rules and Regulations', '2025-02-25', NULL, 'General', 'active');


-- Migration script complete!

-- Note: This is template data. Update with actual Ormoc information.

