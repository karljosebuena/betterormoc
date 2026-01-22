-- Comprehensive Budget Data for Ormoc City 2025
-- Total Budget: ₱4.5 Billion

DELETE FROM budget_overview WHERE year = 2025;
DELETE FROM revenue_sources WHERE year = 2025;
DELETE FROM expenditure_categories WHERE year = 2025;
DELETE FROM major_projects WHERE year = 2025;
DELETE FROM budget_documents WHERE year = 2025;

-- ============================================
-- BUDGET OVERVIEW
-- ============================================

INSERT INTO budget_overview (year, total_budget, total_revenue, total_expenditure, surplus_deficit, notes) VALUES
(2025, 4500000000.00, 4200000000.00, 4500000000.00, -300000000.00, 'Approved annual budget for fiscal year 2025. Deficit to be covered by previous year surplus and loans.');

-- ============================================
-- REVENUE SOURCES (₱4.2 Billion)
-- ============================================

INSERT INTO revenue_sources (year, source_name, category, amount, percentage, description) VALUES
-- Local Revenue Sources (₱1.8B - 42.9%)
(2025, 'Real Property Tax', 'local', 650000000.00, 15.5, 'Tax on land, buildings, and other real properties within city limits'),
(2025, 'Business Tax', 'local', 580000000.00, 13.8, 'Taxes from business operations including Mayor''s Permit fees'),
(2025, 'Community Tax (Cedula)', 'local', 85000000.00, 2.0, 'Community tax certificates for individuals and corporations'),
(2025, 'Regulatory Fees', 'local', 120000000.00, 2.9, 'Fees from permits, licenses, and regulatory services'),
(2025, 'Service Fees and Charges', 'local', 250000000.00, 6.0, 'Fees from government services, market stalls, and public facilities'),
(2025, 'Other Local Taxes', 'local', 115000000.00, 2.7, 'Amusement tax, franchise tax, and other local levies'),

-- National Government Transfers (₱2.1B - 50.0%)
(2025, 'Internal Revenue Allotment (IRA)', 'national', 2100000000.00, 50.0, 'National tax share allocated to LGUs based on population and land area'),

-- National Grants and Assistance (₱200M - 4.8%)
(2025, 'National Grants and Aid', 'national', 200000000.00, 4.8, 'Special grants from national agencies for specific programs'),

-- Other Income (₱100M - 2.4%)
(2025, 'Interest Income', 'other', 45000000.00, 1.1, 'Interest from deposits and investments'),
(2025, 'Rental Income', 'other', 35000000.00, 0.8, 'Income from city-owned properties and facilities'),
(2025, 'Other Income', 'other', 20000000.00, 0.5, 'Miscellaneous income and receipts');

-- ============================================
-- EXPENDITURE CATEGORIES (₱4.5 Billion)
-- ============================================

INSERT INTO expenditure_categories (year, category_name, sector, amount, percentage, description) VALUES
-- Social Services & Welfare (₱1.44B - 32%)
(2025, 'Social Welfare Programs', 'social_services', 800000000.00, 17.8, '4Ps, financial assistance, burial assistance, and other social welfare programs'),
(2025, 'PWD and Senior Citizen Support', 'social_services', 320000000.00, 7.1, 'Support services, subsidies, and programs for PWDs and senior citizens'),
(2025, 'Youth and Sports Development', 'social_services', 180000000.00, 4.0, 'Youth programs, sports facilities, and athletic development'),
(2025, 'Cultural Programs', 'social_services', 140000000.00, 3.1, 'Cultural preservation, festivals, and community events'),

-- Education Support (₱900M - 20%)
(2025, 'School Building Program', 'education', 380000000.00, 8.4, 'Construction and renovation of school buildings and classrooms'),
(2025, 'Scholarship Programs', 'education', 280000000.00, 6.2, 'Scholarships for elementary, high school, and college students'),
(2025, 'Educational Materials and Equipment', 'education', 150000000.00, 3.3, 'Books, computers, laboratory equipment, and learning materials'),
(2025, 'City College of Ormoc Operations', 'education', 90000000.00, 2.0, 'Operational support for free tertiary education'),

-- Infrastructure & Development (₱1.08B - 24%)
(2025, 'Road Construction and Improvement', 'infrastructure', 450000000.00, 10.0, 'Road concreting, rehabilitation, and maintenance'),
(2025, 'Bridge Construction', 'infrastructure', 180000000.00, 4.0, 'Construction and repair of bridges and drainage systems'),
(2025, 'Water Supply and Sanitation', 'infrastructure', 250000000.00, 5.6, 'Water system expansion and sanitation facilities'),
(2025, 'Public Buildings and Facilities', 'infrastructure', 120000000.00, 2.7, 'Construction and maintenance of government buildings'),
(2025, 'Street Lighting and Electrification', 'infrastructure', 80000000.00, 1.8, 'Street lights, electrical infrastructure, and energy projects'),

-- Health Services (₱675M - 15%)
(2025, 'Hospital and Health Facilities Upgrade', 'health', 320000000.00, 7.1, 'Modernization of Ormoc City General Hospital and rural health units'),
(2025, 'Medical Assistance Programs', 'health', 180000000.00, 4.0, 'Financial assistance for medical procedures and medicines'),
(2025, 'Vaccination and Immunization', 'health', 95000000.00, 2.1, 'Vaccine procurement and immunization programs'),
(2025, 'Maternal and Child Health', 'health', 80000000.00, 1.8, 'Prenatal care, birthing facilities, and child nutrition programs'),

-- General Administration (₱270M - 6%)
(2025, 'Personnel Services', 'administration', 150000000.00, 3.3, 'Salaries and benefits for city government employees'),
(2025, 'Office Operations', 'administration', 70000000.00, 1.6, 'Office supplies, utilities, and operational expenses'),
(2025, 'IT and Digital Services', 'administration', 50000000.00, 1.1, 'Computer systems, software, and digital transformation initiatives'),

-- Other Services (₱135M - 3%)
(2025, 'Disaster Risk Reduction', 'other', 180000000.00, 4.0, 'Disaster preparedness, emergency response, and calamity funds'),
(2025, 'Agricultural Support', 'other', 150000000.00, 3.3, 'Farm inputs, training, and agricultural development programs'),
(2025, 'Environmental Programs', 'other', 90000000.00, 2.0, 'Waste management, tree planting, and environmental protection'),
(2025, 'Tourism Development', 'other', 60000000.00, 1.3, 'Tourism promotion, facilities, and destination development'),
(2025, 'Public Safety and Security', 'other', 75000000.00, 1.7, 'Peace and order programs, traffic management, and public safety');

-- ============================================
-- MAJOR PROJECTS (Top 15)
-- ============================================

INSERT INTO major_projects (year, project_name, sector, budget_allocation, status, description) VALUES
(2025, 'City-Wide Road Network Improvement Program', 'infrastructure', 450000000.00, 'ongoing', 'Concreting and rehabilitation of major city roads and barangay access roads'),
(2025, 'School Building Construction and Renovation', 'education', 380000000.00, 'ongoing', 'Construction of new classrooms and renovation of existing school buildings'),
(2025, 'Ormoc City General Hospital Modernization', 'health', 320000000.00, 'ongoing', 'Hospital equipment upgrade, facility expansion, and service improvement'),
(2025, 'Comprehensive Social Welfare Assistance Program', 'social_services', 800000000.00, 'ongoing', 'Expanded 4Ps implementation, financial aid, and livelihood programs'),
(2025, 'City Scholarship Program Expansion', 'education', 280000000.00, 'ongoing', 'Increased scholarship slots for deserving students from elementary to college'),
(2025, 'Water Supply System Expansion', 'infrastructure', 250000000.00, 'planned', 'Extension of water distribution network to underserved barangays'),
(2025, 'Disaster Risk Reduction and Management Enhancement', 'other', 180000000.00, 'ongoing', 'Early warning systems, evacuation centers, and emergency equipment'),
(2025, 'Bridge Construction and Rehabilitation Program', 'infrastructure', 180000000.00, 'ongoing', 'Construction of new bridges and repair of existing structures'),
(2025, 'Medical Assistance and Medicines Program', 'health', 180000000.00, 'ongoing', 'Free medicines and financial assistance for indigent patients'),
(2025, 'Agricultural Modernization Program', 'other', 150000000.00, 'ongoing', 'Farm mechanization, irrigation, and post-harvest facilities'),
(2025, 'Public Market Modernization', 'infrastructure', 120000000.00, 'planned', 'Renovation and expansion of public markets with modern facilities'),
(2025, 'Youth and Sports Development Program', 'social_services', 180000000.00, 'ongoing', 'Sports facilities, equipment, and youth training programs'),
(2025, 'Environmental Protection and Waste Management', 'other', 90000000.00, 'ongoing', 'Materials recovery facilities, waste segregation, and coastal cleanup'),
(2025, 'Street Lighting and Energy Efficiency Project', 'infrastructure', 80000000.00, 'planned', 'LED street light installation and solar energy projects'),
(2025, 'Tourism Infrastructure Development', 'other', 60000000.00, 'planned', 'Tourist facilities, signage, and destination marketing');

-- ============================================
-- BUDGET DOCUMENTS
-- ============================================

INSERT INTO budget_documents (year, document_type, title, description, file_url, file_size, upload_date) VALUES
(2025, 'annual_budget', 'Annual Budget 2025', 'Approved budget for fiscal year 2025 with detailed appropriations', NULL, '15.2 MB', '2025-01-15'),
(2025, 'citizens_budget', 'Citizens'' Budget 2025', 'Simplified budget presentation for public understanding', NULL, '2.8 MB', '2025-01-20'),
(2025, 'procurement_plan', 'Annual Procurement Plan 2025', 'Detailed procurement schedule and project timeline', NULL, '8.5 MB', '2025-01-25'),
(2025, 'quarterly_report', 'Quarterly Financial Report Q1 2025', 'Financial performance and budget utilization for first quarter', NULL, '4.2 MB', '2025-04-15'),
(2024, 'annual_budget', 'Annual Budget 2024', 'Approved budget for fiscal year 2024', NULL, '14.8 MB', '2024-01-10'),
(2024, 'audit_report', 'Annual Audit Report 2024', 'Commission on Audit report for fiscal year 2024', NULL, '12.3 MB', '2024-12-15'),
(2024, 'quarterly_report', 'Quarterly Financial Report Q4 2024', 'Financial performance for fourth quarter 2024', NULL, '4.5 MB', '2025-01-10');

-- Add comments
COMMENT ON TABLE budget_overview IS 'Ormoc City annual budget overview. 2025 budget: ₱4.5 billion approved by Sangguniang Panlungsod.';
COMMENT ON TABLE revenue_sources IS 'Detailed revenue breakdown showing local taxes (42.9%), IRA (50%), and other sources.';
COMMENT ON TABLE expenditure_categories IS 'Budget allocation across sectors: Social Services (32%), Infrastructure (24%), Education (20%), Health (15%), Administration (6%), Other (3%).';
COMMENT ON TABLE major_projects IS 'Top 15 major projects and programs for 2025 with budget allocations totaling ₱3.2 billion.';
