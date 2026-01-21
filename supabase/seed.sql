-- BetterOrmoc Seed Data
-- Adapted from BetterSolano
-- Generated: 2026-01-21T16:51:24.893Z

-- Clear existing data
TRUNCATE TABLE services, officials, ordinances, resolutions, statistics CASCADE;

-- ============================================
-- SERVICES
-- ============================================

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (1, 'Birth Certificate', 'birth-certificate', 'Certificates & Vital Records', 'Get a certified copy of birth certificate registered in Ormoc', '₱150', '15-30 minutes', 'Local Civil Registrar', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (2, 'Marriage Certificate', 'marriage-certificate', 'Certificates & Vital Records', 'Register or request certified true copy of marriage certificate', 'Free (Registration)', '5 minutes', 'Local Civil Registrar', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (3, 'Death Certificate', 'death-certificate', 'Certificates & Vital Records', 'Register death certificate and obtain burial or transfer permit', '₱50-150', '1 hour 35 minutes', 'Local Civil Registrar', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (4, 'Barangay Clearance', 'barangay-clearance', 'Certificates & Vital Records', 'Certificate of residence from your barangay', '₱50-100', 'Same day', 'Barangay Hall', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (5, 'Barangay ID', 'barangay-id', 'Certificates & Vital Records', 'Official barangay identification card', 'Free', '1-2 days', 'Barangay Hall', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (6, 'Police Clearance', 'police-clearance', 'Certificates & Vital Records', 'Police clearance coordination through municipal office', 'Varies', '3-5 days', 'PNP Ormoc', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (7, 'Business Permit (New)', 'business-permit-new', 'Business, Trade & Investment', 'Apply for a new mayor''s permit to operate a business', 'Varies', '3-5 days', 'Business Permits & Licensing Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (8, 'Business Permit Renewal', 'business-permit-renewal', 'Business, Trade & Investment', 'Renew your annual business permit', 'Varies', 'Same day', 'Business Permits & Licensing Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (9, 'Business Closure', 'business-closure', 'Business, Trade & Investment', 'File for business closure/termination', 'Free', '1-2 days', 'Business Permits & Licensing Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (10, 'Sanitary Permit', 'sanitary-permit', 'Business, Trade & Investment', 'Health and sanitation permit for businesses', 'Varies', '1-3 days', 'Municipal Health Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (11, 'Community Tax Certificate (Cedula)', 'community-tax-certificate-cedula', 'Business, Trade & Investment', 'Obtain cedula for individuals and businesses', '₱5+', 'Same day', 'Municipal Treasurer''s Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (12, 'Senior Citizen ID', 'senior-citizen-id', 'Social Services & Assistance', 'ID card and benefits for citizens 60 years and above', 'Free', '1-2 weeks', 'MSWDO / OSCA', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (13, 'PWD ID & Services', 'pwd-id-services', 'Social Services & Assistance', 'ID and benefits for persons with disabilities', 'Free', '1-2 weeks', 'MSWDO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (14, 'Financial Assistance', 'financial-assistance', 'Social Services & Assistance', 'Emergency financial aid for qualified residents', 'Free', 'Varies', 'MSWDO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (15, 'Burial Assistance', 'burial-assistance', 'Social Services & Assistance', 'Financial assistance for burial expenses', 'Free', '1-3 days', 'MSWDO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (16, 'Solo Parent ID', 'solo-parent-id', 'Social Services & Assistance', 'ID and benefits for solo parents', 'Free', '1-2 weeks', 'MSWDO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (17, 'Vaccination Programs', 'vaccination-programs', 'Health & Wellness', 'Free immunization for children and adults', 'Free', 'Same day', 'Municipal Health Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (18, 'Health Certificate', 'health-certificate', 'Health & Wellness', 'Medical certificate for employment or business', '₱100-200', 'Same day', 'Municipal Health Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (19, 'Medical Assistance', 'medical-assistance', 'Health & Wellness', 'Financial aid for medical expenses and hospitalization', 'Free', '1-3 days', 'Municipal Health Office / MSWDO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (20, 'Prenatal Checkup', 'prenatal-checkup', 'Health & Wellness', 'Free prenatal care for pregnant women', 'Free', 'Same day', 'Municipal Health Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (21, 'Real Property Tax Payment', 'real-property-tax-payment', 'Taxation & Payments', 'Pay annual real property tax (amilyar)', 'Varies', 'Same day', 'Municipal Treasurer''s Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (22, 'Business Tax Payment', 'business-tax-payment', 'Taxation & Payments', 'Pay quarterly or annual business taxes', 'Varies', 'Same day', 'Municipal Treasurer''s Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (23, 'Tax Clearance', 'tax-clearance', 'Taxation & Payments', 'Certificate of no tax liability', '₱50-100', 'Same day', 'Municipal Treasurer''s Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (24, 'Agricultural Loans', 'agricultural-loans', 'Agriculture & Economic Development', 'Low-interest loans for farmers', 'Varies', '1-2 weeks', 'Municipal Agriculture Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (25, 'Crop Insurance', 'crop-insurance', 'Agriculture & Economic Development', 'Insurance coverage for crop damage', 'Subsidized', 'Varies', 'Municipal Agriculture Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (26, 'Fertilizer Assistance', 'fertilizer-assistance', 'Agriculture & Economic Development', 'Free or subsidized fertilizer for registered farmers', 'Free/Subsidized', 'Varies', 'Municipal Agriculture Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (27, 'Building Permit', 'building-permit', 'Infrastructure & Public Works', 'Permit for new construction or renovation', 'Varies', '5-10 days', 'Municipal Engineering Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (28, 'Occupancy Permit', 'occupancy-permit', 'Infrastructure & Public Works', 'Certificate of completion for new buildings', 'Varies', '3-5 days', 'Municipal Engineering Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (29, 'Road Maintenance Request', 'road-maintenance-request', 'Infrastructure & Public Works', 'Report road damage or request repairs', 'Free', 'Varies', 'Municipal Engineering Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (30, 'Scholarship Programs', 'scholarship-programs', 'Education & Scholarship', 'Financial assistance for students', 'Free', 'Varies', 'Municipal Mayor''s Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (31, 'Student Assistance', 'student-assistance', 'Education & Scholarship', 'Educational grants and allowances', 'Free', 'Varies', 'MSWDO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (32, 'Emergency Response', 'emergency-response', 'Public Safety & Security', '24/7 emergency assistance and rescue', 'Free', 'Immediate', 'MDRRMO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (33, 'Disaster Preparedness', 'disaster-preparedness', 'Public Safety & Security', 'Training and resources for disaster readiness', 'Free', 'Varies', 'MDRRMO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (34, 'Environmental Clearance', 'environmental-clearance', 'Environment & Natural Resources', 'Environmental compliance certificate for projects', 'Varies', '5-10 days', 'Municipal Environment Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (35, 'Tree Cutting Permit', 'tree-cutting-permit', 'Environment & Natural Resources', 'Permit to cut or trim trees', 'Varies', '3-5 days', 'Municipal Environment Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (36, 'SEEDO Slaughterhouse', 'seedo-slaughterhouse', 'Business, Trade & Investment', 'Hog, cattle, goat, and carabao slaughter with meat inspection services', '₱40-350', '37 min - 1.5 hrs', 'SEEDO Slaughterhouse', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (37, 'MSWDO Services', 'mswdo-services', 'Social Services & Assistance', 'Social case studies, indigency certificates, AICS, PWD and senior citizen assistance', 'Free', '28 min - 1.5 hrs', 'MSWDO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (38, 'Waste Management Services', 'waste-management-services', 'Environment & Natural Resources', 'Garbage collection and disposal services', 'Included in tax', 'Scheduled', 'Municipal Environment Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (39, 'SEEDO Public Market', 'seedo-public-market', 'Business, Trade & Investment', 'Market clearance, entrance fees, vendor services, and CTC issuance', '₱5-50', 'Same day', 'SEEDO Public Market', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (40, 'Business Permits & Licensing Office', 'business-permits-licensing-office', 'Business, Trade & Investment', 'New permits, renewals, Mayor''s clearance, and other business permits', 'Varies', '1-5 days', 'Mayor''s Office - BPLS', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (41, 'Tricycle Franchising & Records', 'tricycle-franchising-records', 'Business, Trade & Investment', 'Apply for tricycle franchise (MTOF) and request records', 'Varies', '3-5 days', 'BPLS / SBO', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (42, 'Municipal Treasurer''s Office', 'municipal-treasurer-s-office', 'Taxation & Payments', 'Tax collection, cedula, clearances, and payment services', 'Varies', 'Same day', 'Municipal Treasurer''s Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (43, 'Municipal Budget Office', 'municipal-budget-office', 'Taxation & Payments', 'Obligation requests, barangay budget review, and SEF budget preparation', 'Free', '15 min - 1 day', 'Municipal Budget Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (44, 'Municipal Accounting Office', 'municipal-accounting-office', 'Taxation & Payments', 'Pre-audit of disbursements, payroll, check issuance, and financial reporting', 'Free', 'Varies', 'Municipal Accounting Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (45, 'Property Declaration', 'property-declaration', 'Taxation & Payments', 'Declaration of land, building and machineries for tax assessment', 'Varies', '3-5 days', 'Municipal Assessor''s Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (46, 'Municipal Assessor''s Office', 'municipal-assessor-s-office', 'Taxation & Payments', 'Property assessment, tax declaration, and land records', 'Varies', '3-5 days', 'Municipal Assessor''s Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (47, 'Local Civil Registrar', 'local-civil-registrar', 'Certificates & Vital Records', 'Birth, marriage, death certificates and civil registry services', '₱150+', '15-30 minutes', 'Local Civil Registrar', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (48, 'Municipal Engineering Office', 'municipal-engineering-office', 'Infrastructure & Public Works', 'Building permits, infrastructure projects, and engineering services', 'Varies', '5-10 days', 'Municipal Engineering Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (49, 'Municipal Planning & Development Office', 'municipal-planning-development-office', 'Infrastructure & Public Works', 'Zoning, land use, development permits, and planning services', 'Varies', '3-7 days', 'Municipal Planning Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (50, 'Municipal Agriculture Office', 'municipal-agriculture-office', 'Agriculture & Economic Development', 'Agricultural assistance, farm registration, and livelihood programs', 'Free/Varies', 'Varies', 'Municipal Agriculture Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (51, 'General Services Office', 'general-services-office', 'Government Services', 'Property management, vehicle maintenance, and general municipal services', 'Free', 'Varies', 'General Services Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (52, 'Human Resource Management Office', 'human-resource-management-office', 'Government Services', 'Employment, personnel records, and HR services', 'Free', 'Varies', 'Human Resource Management Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (53, 'Business Online Billing & Payment', 'business-online-billing-payment', 'Online Services', 'View and pay your business tax bills online via Filipizen', 'Varies', 'Instant', 'BPLS Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (54, 'New Business Application Online', 'new-business-application-online', 'Online Services', 'Apply for a new business permit online via Filipizen', 'Varies', '3-5 days', 'BPLS Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (55, 'Business Permit Renewal Online', 'business-permit-renewal-online', 'Online Services', 'Renew your existing business permit online via Filipizen', 'Varies', 'Same day', 'BPLS Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (56, 'Real Property Tax Online Billing & Payment', 'real-property-tax-online-billing-payment', 'Online Services', 'View and pay your real property tax (amilyar) online via Filipizen', 'Varies', 'Instant', 'Municipal Treasurer''s Office', '[]'::jsonb, NOW(), NOW());

INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (57, 'Online Payment Order', 'online-payment-order', 'Online Services', 'Process payment orders for various municipal fees online via Filipizen', 'Varies', 'Instant', 'Municipal Treasurer''s Office', '[]'::jsonb, NOW(), NOW());


-- ============================================
-- OFFICIALS
-- ============================================

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (1, 'Hon. Richard I. Gomez', 'City Mayor', 'Office of the Mayor', 'Ormoc City Hall', 'mayor@ormoc.gov.ph', '(053) 561-4000', NULL, true, 1, NOW(), NOW());

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (2, 'Hon. Leo Carmelo A. Locsin', 'City Vice Mayor', 'Office of the Vice Mayor', 'Ormoc City Hall', 'vicemayor@ormoc.gov.ph', '(053) 561-4001', NULL, true, 2, NOW(), NOW());

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (3, 'Hon. Councilor 1', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', 'sp1@ormoc.gov.ph', '(053) 561-4011', NULL, true, 3, NOW(), NOW());

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (4, 'Hon. Councilor 2', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', 'sp2@ormoc.gov.ph', '(053) 561-4012', NULL, true, 4, NOW(), NOW());

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (5, 'Hon. Councilor 3', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', 'sp3@ormoc.gov.ph', '(053) 561-4013', NULL, true, 5, NOW(), NOW());

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (6, 'Hon. Councilor 4', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', 'sp4@ormoc.gov.ph', '(053) 561-4014', NULL, true, 6, NOW(), NOW());

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (7, 'Hon. Councilor 5', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', 'sp5@ormoc.gov.ph', '(053) 561-4015', NULL, true, 7, NOW(), NOW());

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (8, 'Hon. Councilor 6', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', 'sp6@ormoc.gov.ph', '(053) 561-4016', NULL, true, 8, NOW(), NOW());

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (9, 'Hon. Councilor 7', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', 'sp7@ormoc.gov.ph', '(053) 561-4017', NULL, true, 9, NOW(), NOW());

INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (10, 'Hon. Councilor 8', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', 'sp8@ormoc.gov.ph', '(053) 561-4018', NULL, true, 10, NOW(), NOW());


-- ============================================
-- ORDINANCES
-- ============================================

INSERT INTO ordinances (id, ordinance_number, title, description, year, date_approved, created_at, updated_at)
VALUES (1, 'ORD-2024-001', 'An Ordinance Creating the Film Development Council of the Municipality of Ormoc, Leyte, Providing for Its Powers and Functions, and for Other Purposes', 'An Ordinance Creating the Film Development Council of the Municipality of Ormoc, Leyte, Providing for Its Powers and Functions, and for Other Purposes', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO ordinances (id, ordinance_number, title, description, year, date_approved, created_at, updated_at)
VALUES (2, 'ORD-2024-002', 'An Ordinance Prohibiting the Entry of Nuisance Contraband Inside the Ormoc District Jail in the Municipality of Ormoc, Leyte, and Providing Penalties for Violation Thereof', 'An Ordinance Prohibiting the Entry of Nuisance Contraband Inside the Ormoc District Jail in the Municipality of Ormoc, Leyte, and Providing Penalties for Violation Thereof', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO ordinances (id, ordinance_number, title, description, year, date_approved, created_at, updated_at)
VALUES (3, 'ORD-2024-003', 'An Ordinance Creating the Ormoc Municipal Housing Board, Defining Its Powers and Functions, and for Other Purposes', 'An Ordinance Creating the Ormoc Municipal Housing Board, Defining Its Powers and Functions, and for Other Purposes', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO ordinances (id, ordinance_number, title, description, year, date_approved, created_at, updated_at)
VALUES (4, 'ORD-2024-004', 'An Ordinance Requiring All Households in the Municipality of Ormoc, Leyte to Comply with Zero Open Defecation (ZOD), Providing for Its Guidelines and Penalties for Violation and Appropriating Funds Therefor', 'An Ordinance Requiring All Households in the Municipality of Ormoc, Leyte to Comply with Zero Open Defecation (ZOD), Providing for Its Guidelines and Penalties for Violation and Appropriating Funds Therefor', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO ordinances (id, ordinance_number, title, description, year, date_approved, created_at, updated_at)
VALUES (5, 'ORD-2024-005', 'An Ordinance Revising the Gender and Development Code of the Municipality of Ormoc, Leyte and for Other Purposes, Subject to All Laws and Existing Rules and Regulations', 'An Ordinance Revising the Gender and Development Code of the Municipality of Ormoc, Leyte and for Other Purposes, Subject to All Laws and Existing Rules and Regulations', 2024, '2024-01-01', NOW(), NOW());


-- ============================================
-- RESOLUTIONS
-- ============================================

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (1, 'RES-2024-001', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Sign the Application Forms for the Building Permit for the Installation of Twenty-Three (23) Solar Poles Project Owned by the YMP Telecom Power Inc.', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Sign the Application Forms for the Building Permit for the Installation of Twenty-Three (23) Solar Poles Project Owned by the YMP Telecom Power Inc.', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (2, 'RES-2024-002', 'A Resolution Adopting Republic Act No. 8976, Otherwise Known as the Food Fortification Law, as Part of the Local Nutrition Program Implementation in the Municipality of Ormoc', 'A Resolution Adopting Republic Act No. 8976, Otherwise Known as the Food Fortification Law, as Part of the Local Nutrition Program Implementation in the Municipality of Ormoc', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (3, 'RES-2024-003', 'A Resolution Adopting Republic Act No. 8172, Otherwise Known as the Act of Salt Iodization Nationwide (ASIN), as Part of the Local Nutrition Program Implementation in the Municipality of Ormoc', 'A Resolution Adopting Republic Act No. 8172, Otherwise Known as the Act of Salt Iodization Nationwide (ASIN), as Part of the Local Nutrition Program Implementation in the Municipality of Ormoc', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (4, 'RES-2024-004', 'A Resolution Adopting Republic Act No. 10028, Otherwise Known as the Expanded Breastfeeding Promotion Act of 2009, as Part of the Local Nutrition Program Implementation in the Municipality of Ormoc', 'A Resolution Adopting Republic Act No. 10028, Otherwise Known as the Expanded Breastfeeding Promotion Act of 2009, as Part of the Local Nutrition Program Implementation in the Municipality of Ormoc', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (5, 'RES-2024-005', 'A Resolution Adopting Executive Order No. 51, Otherwise Known as the National Code of Marketing of Breastmilk Substitute, Breastmilk Supplements, and Other Related Products', 'A Resolution Adopting Executive Order No. 51, Otherwise Known as the National Code of Marketing of Breastmilk Substitute, Breastmilk Supplements, and Other Related Products', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (6, 'RES-2024-006', 'A Resolution Adopting Republic Act No. 11037, Otherwise Known as the Masustansyang Pagkain Para sa Batang Pilipino Act, as Part of the Local Nutrition Program Implementation', 'A Resolution Adopting Republic Act No. 11037, Otherwise Known as the Masustansyang Pagkain Para sa Batang Pilipino Act, as Part of the Local Nutrition Program Implementation', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (7, 'RES-2024-007', 'A Resolution Adopting Republic Act No. 11148, Otherwise Known as the Kalusugan at Nutrisyon ng Mag-Nanay Act of 2019, as Part of the Local Nutrition Program Implementation', 'A Resolution Adopting Republic Act No. 11148, Otherwise Known as the Kalusugan at Nutrisyon ng Mag-Nanay Act of 2019, as Part of the Local Nutrition Program Implementation', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (8, 'RES-2024-008', 'A Resolution Adopting the National Nutrition Council (NNC) Governing Board Resolution No. 1 Series of 2022 Regarding the National Policy on Nutrition in Emergencies', 'A Resolution Adopting the National Nutrition Council (NNC) Governing Board Resolution No. 1 Series of 2022 Regarding the National Policy on Nutrition in Emergencies', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (9, 'RES-2024-009', 'A Resolution Declaring Appropriation Ordinance No. 01 Series of 2024 (CY 2025 Annual Budget) of Barangay San Juan Operative in Its Entirety', 'A Resolution Declaring Appropriation Ordinance No. 01 Series of 2024 (CY 2025 Annual Budget) of Barangay San Juan Operative in Its Entirety', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (10, 'RES-2024-010', 'A Resolution Declaring Resolution No. 4 Series of 2025 of the Sangguniang Kabataan of Barangay Commonal Operative in Its Entirety', 'A Resolution Declaring Resolution No. 4 Series of 2025 of the Sangguniang Kabataan of Barangay Commonal Operative in Its Entirety', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (11, 'RES-2024-011', 'A Resolution Recognizing Mrs. Angelica Ordoñez Danguilan for Her Remarkable Contribution to the Rich Cultural Heritage and History of the Municipality of Ormoc as Composer of the Pagbiagan Song', 'A Resolution Recognizing Mrs. Angelica Ordoñez Danguilan for Her Remarkable Contribution to the Rich Cultural Heritage and History of the Municipality of Ormoc as Composer of the Pagbiagan Song', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (12, 'RES-2024-012', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Contract of Service with Dr. Charles Melric Castro Billedo for the Provision of Medical Consultation Services', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Contract of Service with Dr. Charles Melric Castro Billedo for the Provision of Medical Consultation Services', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (13, 'RES-2024-013', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Contract of Service with Mr. Fonchito C. Gallevo, CPA, MGM, CSEE, for the Provision of Management Advisory Services', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Contract of Service with Mr. Fonchito C. Gallevo, CPA, MGM, CSEE, for the Provision of Management Advisory Services', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (14, 'RES-2024-014', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Contract of Service with Leona Castillo Dotimas as Head of the Office of the Senior Citizens Affairs (OSCA)', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Contract of Service with Leona Castillo Dotimas as Head of the Office of the Senior Citizens Affairs (OSCA)', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (15, 'RES-2024-015', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Memorandum of Understanding with the Philippine Red Cross Leyte for Mobile Blood Donation Activities', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Memorandum of Understanding with the Philippine Red Cross Leyte for Mobile Blood Donation Activities', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (16, 'RES-2024-016', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Memorandum of Agreement with the Leyte Provincial Hospital for the Sustainable Program of Voluntary Blood Donation', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Memorandum of Agreement with the Leyte Provincial Hospital for the Sustainable Program of Voluntary Blood Donation', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (17, 'RES-2024-017', 'A Resolution Earnestly Requesting the Department of Public Works and Highways to Prioritize the Completion of the Flood Control Project Along the Magat River', 'A Resolution Earnestly Requesting the Department of Public Works and Highways to Prioritize the Completion of the Flood Control Project Along the Magat River', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (18, 'RES-2024-018', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into Employment Contracts with the Beneficiaries of the Special Program for Employment of Students (SPES)', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into Employment Contracts with the Beneficiaries of the Special Program for Employment of Students (SPES)', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (19, 'RES-2024-019', 'A Resolution Endorsing to the Municipal Development Council the Resolution No. 01 Series of 2025 of the Barangay Development Council of Roxas', 'A Resolution Endorsing to the Municipal Development Council the Resolution No. 01 Series of 2025 of the Barangay Development Council of Roxas', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (20, 'RES-2024-020', 'A Resolution Approving the Applications for Franchise to Operate Motorized Tricycles-for-Hire in the Municipality of Ormoc, Province of Leyte', 'A Resolution Approving the Applications for Franchise to Operate Motorized Tricycles-for-Hire in the Municipality of Ormoc, Province of Leyte', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (21, 'RES-2024-021', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Data Sharing Agreement with the Department of Social Welfare and Development for 4Ps Beneficiaries Profiling', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Data Sharing Agreement with the Department of Social Welfare and Development for 4Ps Beneficiaries Profiling', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (22, 'RES-2024-022', 'A Resolution Declaring as Savings the Unappropriated Surplus Amounting to Forty-Four Million Seven Hundred Nineteen Thousand Four Hundred Fifty-Two Pesos (PHP 44,719,452.00)', 'A Resolution Declaring as Savings the Unappropriated Surplus Amounting to Forty-Four Million Seven Hundred Nineteen Thousand Four Hundred Fifty-Two Pesos (PHP 44,719,452.00)', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (23, 'RES-2024-023', 'A Resolution Expressing Gratitude and Recognition to Ms. Angelica Ordoñez Danguilan for Her Contribution as Facilitator in the Retrieval of the Original Document Containing the Lyrics of Ormoc March', 'A Resolution Expressing Gratitude and Recognition to Ms. Angelica Ordoñez Danguilan for Her Contribution as Facilitator in the Retrieval of the Original Document Containing the Lyrics of Ormoc March', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (24, 'RES-2024-024', 'A Resolution Expressing Profound Congratulations to Senior Fire Officer III Daisy Leal Cabauatan for Being Recognized as Resilience Champion in the Philippine Resilience Awards', 'A Resolution Expressing Profound Congratulations to Senior Fire Officer III Daisy Leal Cabauatan for Being Recognized as Resilience Champion in the Philippine Resilience Awards', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (25, 'RES-2024-025', 'A Resolution Warmly Congratulating CPA Licensure Examination Passers from the Municipality of Ormoc', 'A Resolution Warmly Congratulating CPA Licensure Examination Passers from the Municipality of Ormoc', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (26, 'RES-2024-026', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Memorandum of Agreement with the Department of Agriculture for the Livestock Economic Enterprise Development Program', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Memorandum of Agreement with the Department of Agriculture for the Livestock Economic Enterprise Development Program', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (27, 'RES-2024-027', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Memorandum of Agreement with the Provincial Government Unit of Leyte for Collaborative Framework', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Enter into a Memorandum of Agreement with the Provincial Government Unit of Leyte for Collaborative Framework', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (28, 'RES-2024-028', 'A Resolution Approving the Applications for Franchise to Operate Motorized Tricycles-for-Hire in the Municipality of Ormoc, Province of Leyte', 'A Resolution Approving the Applications for Franchise to Operate Motorized Tricycles-for-Hire in the Municipality of Ormoc, Province of Leyte', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (29, 'RES-2024-029', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Execute a Deed of Donation of a 140 SQM Lot in Favor of Barangay Poblacion South', 'A Resolution Authorizing Municipal Mayor Atty. Philip A. Dacayo to Execute a Deed of Donation of a 140 SQM Lot in Favor of Barangay Poblacion South', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (30, 'RES-2024-030', 'A Resolution Profoundly Congratulating SF03 Daisy Cabauatan for Being Recognized as One of the Ten 2025 Outstanding Women in Law Enforcement and National Security Awardees', 'A Resolution Profoundly Congratulating SF03 Daisy Cabauatan for Being Recognized as One of the Ten 2025 Outstanding Women in Law Enforcement and National Security Awardees', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (31, 'RES-2024-031', 'A Resolution Honoring the Late Pablo Whigan for His Remarkable Contribution to the Rich Cultural Heritage and History of the Municipality of Ormoc as Composer of the Ormoc March', 'A Resolution Honoring the Late Pablo Whigan for His Remarkable Contribution to the Rich Cultural Heritage and History of the Municipality of Ormoc as Composer of the Ormoc March', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (32, 'RES-2024-032', 'A Resolution Approving the Realignment of the Development Projects of Barangays Bangar, Osmeña and Aggub Funded Under the 20% Development Fund for Calendar Year 2026', 'A Resolution Approving the Realignment of the Development Projects of Barangays Bangar, Osmeña and Aggub Funded Under the 20% Development Fund for Calendar Year 2026', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (33, 'RES-2024-033', 'A Resolution Approving and Adopting the Annual Investment Program (AIP) for Calendar Year 2026 of the Municipality of Ormoc, Leyte', 'A Resolution Approving and Adopting the Annual Investment Program (AIP) for Calendar Year 2026 of the Municipality of Ormoc, Leyte', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (34, 'RES-2024-034', 'A Resolution Expressing Profound Congratulations to Civil Service Examination Passers from the Municipality of Ormoc', 'A Resolution Expressing Profound Congratulations to Civil Service Examination Passers from the Municipality of Ormoc', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (35, 'RES-2024-035', 'A Resolution Expressing Profound Congratulations to Philippine Nurses Licensure Examination Passers from the Municipality of Ormoc', 'A Resolution Expressing Profound Congratulations to Philippine Nurses Licensure Examination Passers from the Municipality of Ormoc', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (36, 'RES-2024-036', 'A Resolution Approving the Temporary Closure of Mabini, Gaddang, and Luna Streets in Barangay Poblacion South as Temporary Selling Areas for Vendors', 'A Resolution Approving the Temporary Closure of Mabini, Gaddang, and Luna Streets in Barangay Poblacion South as Temporary Selling Areas for Vendors', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (37, 'RES-2024-037', 'A Resolution Warmly Congratulating Honorable Flodemonte Santiago Gerdan for Being Elected as Board Member of the Province of Leyte', 'A Resolution Warmly Congratulating Honorable Flodemonte Santiago Gerdan for Being Elected as Board Member of the Province of Leyte', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (38, 'RES-2024-038', 'A Resolution Warmly Congratulating Honorable Wilson Dee Salas for Being Elected as Board Member of the Province of Leyte', 'A Resolution Warmly Congratulating Honorable Wilson Dee Salas for Being Elected as Board Member of the Province of Leyte', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (39, 'RES-2024-039', 'A Resolution Warmly Congratulating Honorable Atty. Primo Percival Jose Marcos for Being Re-Elected as Board Member of the Province of Leyte', 'A Resolution Warmly Congratulating Honorable Atty. Primo Percival Jose Marcos for Being Re-Elected as Board Member of the Province of Leyte', 2024, '2024-01-01', NOW(), NOW());

INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (40, 'RES-2024-040', 'A Resolution Warmly Congratulating Honorable Atty. John Severino Gonong Bagasao for Being Elected as Board Member of the Province of Leyte', 'A Resolution Warmly Congratulating Honorable Atty. John Severino Gonong Bagasao for Being Elected as Board Member of the Province of Leyte', 2024, '2024-01-01', NOW(), NOW());


-- ============================================
-- STATISTICS
-- ============================================

INSERT INTO statistics (id, category, label, value, year, created_at, updated_at)
VALUES 
(1, 'population', 'Total Population', '230,998', 2020, NOW(), NOW()),
(2, 'population', 'Households', '52,140', 2020, NOW(), NOW()),
(3, 'economy', 'GDP Growth', '6.2%', 2023, NOW(), NOW()),
(4, 'economy', 'Employment Rate', '94.5%', 2023, NOW(), NOW()),
(5, 'services', 'Barangays', '110', 2024, NOW(), NOW()),
(6, 'services', 'Public Schools', '87', 2024, NOW(), NOW()),
(7, 'infrastructure', 'Road Network', '450 km', 2024, NOW(), NOW()),
(8, 'infrastructure', 'Health Facilities', '15', 2024, NOW(), NOW());

-- Reset sequences
SELECT setval('services_id_seq', (SELECT MAX(id) FROM services));
SELECT setval('officials_id_seq', (SELECT MAX(id) FROM officials));
SELECT setval('ordinances_id_seq', (SELECT MAX(id) FROM ordinances));
SELECT setval('resolutions_id_seq', (SELECT MAX(id) FROM resolutions));
SELECT setval('statistics_id_seq', (SELECT MAX(id) FROM statistics));
