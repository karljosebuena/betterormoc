-- Comprehensive Resolutions Seed Data for Ormoc City (2024-2025)
-- Realistic legislative data based on Philippine LGU patterns

DELETE FROM resolutions WHERE year IN (2024, 2025);

-- ============================================
-- 2025 RESOLUTIONS (25 resolutions)
-- ============================================

INSERT INTO resolutions (resolution_number, title, description, year, date_approved, category) VALUES

-- January 2025
('RES-2025-001', 'A Resolution Approving the Supplemental Budget No. 1 for Fiscal Year 2025', 'Approving supplemental budget to cover additional expenses for disaster preparedness and emergency response programs.', 2025, '2025-01-08', 'Finance'),

('RES-2025-002', 'A Resolution Authorizing the City Mayor to Enter into a Memorandum of Agreement with the Department of Agriculture', 'Authorizing partnership for the implementation of agricultural modernization and farmers'' support programs in Ormoc City.', 2025, '2025-01-15', 'Agreements'),

('RES-2025-003', 'A Resolution Commending the Ormoc City Disaster Risk Reduction and Management Office', 'Recognizing outstanding performance in disaster response and preparedness during the 2024 typhoon season.', 2025, '2025-01-22', 'Awards & Recognition'),

-- February 2025
('RES-2025-004', 'A Resolution Designating Acting Department Heads During Official Leaves', 'Designating officer-in-charge for various city departments to ensure continuity of government operations.', 2025, '2025-02-05', 'Appointments'),

('RES-2025-005', 'A Resolution Expressing Support for the Proposed Ormoc-Cebu Ferry Service', 'Endorsing the establishment of regular ferry service to boost tourism and trade connectivity with Cebu.', 2025, '2025-02-12', 'Policy'),

('RES-2025-006', 'A Resolution Authorizing the City Treasurer to Accept Donations for the City Library', 'Accepting book donations and financial contributions from private organizations for library expansion.', 2025, '2025-02-19', 'Administrative'),

-- March 2025
('RES-2025-007', 'A Resolution Honoring Outstanding Teachers on World Teachers Day', 'Recognizing and awarding exemplary teachers who demonstrated excellence in education and community service.', 2025, '2025-03-05', 'Awards & Recognition'),

('RES-2025-008', 'A Resolution Approving the Loan Application for Infrastructure Development', 'Authorizing the City Mayor to secure a loan from the Development Bank of the Philippines for road improvement projects.', 2025, '2025-03-12', 'Finance'),

('RES-2025-009', 'A Resolution Creating an Ad Hoc Committee on Climate Change Adaptation', 'Establishing a special committee to study and recommend climate resilience strategies for Ormoc City.', 2025, '2025-03-19', 'Legislative'),

('RES-2025-010', 'A Resolution Authorizing the City Mayor to Sign a Sister City Agreement with Tacloban City', 'Approving partnership agreement for cultural exchange, tourism promotion, and mutual development cooperation.', 2025, '2025-03-26', 'Agreements'),

-- April 2025
('RES-2025-011', 'A Resolution Declaring June as Ormoc City Environment Month', 'Institutionalizing annual environmental awareness campaigns, tree planting activities, and coastal cleanup programs.', 2025, '2025-04-02', 'Policy'),

('RES-2025-012', 'A Resolution Commending the Ormoc City Police Office for Crime Reduction Achievements', 'Recognizing significant decrease in crime rates and improved peace and order situation in 2024.', 2025, '2025-04-09', 'Awards & Recognition'),

('RES-2025-013', 'A Resolution Approving the Transfer of Appropriations for Health Programs', 'Reallocating budget funds to strengthen maternal health services and vaccination programs.', 2025, '2025-04-16', 'Finance'),

-- May 2025
('RES-2025-014', 'A Resolution Authorizing the Conduct of the Ormoc City Job Fair 2025', 'Approving the organization of employment fair to connect job seekers with local and national employers.', 2025, '2025-05-07', 'Administrative'),

('RES-2025-015', 'A Resolution Expressing Condolences to the Family of Former Councilor Eduardo Santos', 'Extending sympathy and recognizing the public service contributions of the late city councilor.', 2025, '2025-05-14', 'Awards & Recognition'),

('RES-2025-016', 'A Resolution Endorsing the Ormoc City Comprehensive Land Use Plan 2025-2035', 'Approving the updated comprehensive land use plan for sustainable urban development and zoning.', 2025, '2025-05-21', 'Policy'),

-- June 2025
('RES-2025-017', 'A Resolution Authorizing the City Mayor to Accept Grant from USAID for Education Programs', 'Accepting financial assistance for school infrastructure improvement and teacher training programs.', 2025, '2025-06-04', 'Finance'),

('RES-2025-018', 'A Resolution Declaring the First Week of July as Ormoc City Founding Anniversary Week', 'Institutionalizing annual celebration with cultural shows, sports events, and civic activities.', 2025, '2025-06-11', 'Policy'),

('RES-2025-019', 'A Resolution Commending Outstanding Barangay Officials for Exemplary Service', 'Recognizing barangay captains and council members who demonstrated exceptional leadership in 2024.', 2025, '2025-06-18', 'Awards & Recognition'),

-- July 2025
('RES-2025-020', 'A Resolution Approving the Revised Organizational Structure of the City Health Office', 'Authorizing reorganization to improve health service delivery and create additional positions.', 2025, '2025-07-02', 'Administrative'),

('RES-2025-021', 'A Resolution Authorizing the City Mayor to Enter into a MOA with Private Hospitals', 'Approving partnership for indigent patient care and emergency medical services cooperation.', 2025, '2025-07-09', 'Agreements'),

('RES-2025-022', 'A Resolution Expressing Support for the Proposed Ormoc Airport Expansion', 'Endorsing airport development project to accommodate larger aircraft and increase passenger capacity.', 2025, '2025-07-16', 'Policy'),

-- August 2025
('RES-2025-023', 'A Resolution Approving the Supplemental Budget No. 2 for Fiscal Year 2025', 'Authorizing additional appropriations for social welfare assistance and scholarship programs.', 2025, '2025-08-06', 'Finance'),

('RES-2025-024', 'A Resolution Commending the Ormoc City Fire Department for Fire Prevention Efforts', 'Recognizing successful fire safety education campaigns and rapid emergency response in 2025.', 2025, '2025-08-13', 'Awards & Recognition'),

('RES-2025-025', 'A Resolution Authorizing the Conduct of the Annual Ormoc City Sports Festival', 'Approving the organization of inter-barangay sports competition to promote health and community unity.', 2025, '2025-08-20', 'Administrative');

-- ============================================
-- 2024 RESOLUTIONS (25 resolutions)
-- ============================================

INSERT INTO resolutions (resolution_number, title, description, year, date_approved, category) VALUES

-- January 2024
('RES-2024-001', 'A Resolution Approving the City Budget for Fiscal Year 2024', 'Confirming the annual budget appropriation of ₱4.2 billion for city operations and development programs.', 2024, '2024-01-10', 'Finance'),

('RES-2024-002', 'A Resolution Authorizing the City Mayor to Apply for a Loan from Land Bank', 'Approving loan application for the construction of new public market and slaughterhouse facilities.', 2024, '2024-01-17', 'Finance'),

('RES-2024-003', 'A Resolution Commending the City Engineering Office for Infrastructure Projects', 'Recognizing successful completion of road concreting and bridge construction projects in 2023.', 2024, '2024-01-24', 'Awards & Recognition'),

-- February 2024
('RES-2024-004', 'A Resolution Authorizing the City Mayor to Sign a MOA with DPWH', 'Approving partnership for the implementation of national road improvement projects within city limits.', 2024, '2024-02-07', 'Agreements'),

('RES-2024-005', 'A Resolution Declaring a State of Calamity Due to Prolonged Drought', 'Declaring calamity status to enable quick release of calamity funds for affected farmers and communities.', 2024, '2024-02-14', 'Policy'),

('RES-2024-006', 'A Resolution Appointing Members of the City Peace and Order Council', 'Designating representatives from various sectors to the peace and order coordinating body.', 2024, '2024-02-21', 'Appointments'),

-- March 2024
('RES-2024-007', 'A Resolution Expressing Support for the Ormoc City General Hospital Modernization', 'Endorsing hospital upgrade project including new equipment and facility expansion.', 2024, '2024-03-06', 'Policy'),

('RES-2024-008', 'A Resolution Commending the City Social Welfare Office for 4Ps Implementation', 'Recognizing effective management of Pantawid Pamilyang Pilipino Program beneficiaries.', 2024, '2024-03-13', 'Awards & Recognition'),

('RES-2024-009', 'A Resolution Approving the Transfer of Appropriations for Disaster Response', 'Reallocating funds to replenish disaster relief supplies and emergency response equipment.', 2024, '2024-03-20', 'Finance'),

-- April 2024
('RES-2024-010', 'A Resolution Authorizing the City Mayor to Accept Donation of Fire Truck', 'Accepting fire truck donation from a private foundation to enhance fire protection services.', 2024, '2024-04-03', 'Administrative'),

('RES-2024-011', 'A Resolution Declaring May as Mental Health Awareness Month', 'Institutionalizing mental health programs, counseling services, and awareness campaigns.', 2024, '2024-04-17', 'Policy'),

('RES-2024-012', 'A Resolution Commending Outstanding Senior Citizens for Community Service', 'Honoring senior citizens who actively contributed to barangay development and youth mentoring.', 2024, '2024-04-24', 'Awards & Recognition'),

-- May 2024
('RES-2024-013', 'A Resolution Authorizing the City Mayor to Enter into a MOA with DepEd', 'Approving partnership for school building construction and educational support programs.', 2024, '2024-05-08', 'Agreements'),

('RES-2024-014', 'A Resolution Approving the Revised Revenue Code of Ormoc City', 'Endorsing updated tax rates and fee schedules to improve local revenue generation.', 2024, '2024-05-15', 'Finance'),

('RES-2024-015', 'A Resolution Creating a Special Committee on Tourism Development', 'Establishing committee to formulate tourism master plan and marketing strategies.', 2024, '2024-05-22', 'Legislative'),

-- June 2024
('RES-2024-016', 'A Resolution Expressing Support for the Ormoc Port Modernization Project', 'Endorsing seaport upgrade to accommodate larger vessels and increase cargo capacity.', 2024, '2024-06-05', 'Policy'),

('RES-2024-017', 'A Resolution Commending the City Agriculture Office for Farmers'' Support Programs', 'Recognizing successful implementation of seed distribution and agricultural training programs.', 2024, '2024-06-12', 'Awards & Recognition'),

('RES-2024-018', 'A Resolution Authorizing the Conduct of the Ormoc City Trade Fair 2024', 'Approving organization of trade exhibition to promote local products and entrepreneurship.', 2024, '2024-06-19', 'Administrative'),

-- July 2024
('RES-2024-019', 'A Resolution Approving the Supplemental Budget No. 1 for Fiscal Year 2024', 'Authorizing additional appropriations for infrastructure projects and social services.', 2024, '2024-07-03', 'Finance'),

('RES-2024-020', 'A Resolution Authorizing the City Mayor to Sign a Sister City Agreement with Davao City', 'Approving partnership for trade promotion, cultural exchange, and best practices sharing.', 2024, '2024-07-17', 'Agreements'),

-- August 2024
('RES-2024-021', 'A Resolution Commending the City Health Office for COVID-19 Vaccination Success', 'Recognizing achievement of high vaccination coverage and effective pandemic response.', 2024, '2024-08-07', 'Awards & Recognition'),

('RES-2024-022', 'A Resolution Declaring September as Disaster Preparedness Month', 'Institutionalizing annual disaster drills, training programs, and public awareness campaigns.', 2024, '2024-08-14', 'Policy'),

('RES-2024-023', 'A Resolution Approving the Revised Comprehensive Development Plan 2024-2030', 'Endorsing updated city development framework for economic growth and social progress.', 2024, '2024-08-21', 'Policy'),

-- September 2024
('RES-2024-024', 'A Resolution Authorizing the City Mayor to Accept Grant from World Bank', 'Accepting financial assistance for water supply improvement and sanitation projects.', 2024, '2024-09-04', 'Finance'),

('RES-2024-025', 'A Resolution Commending Outstanding City Government Employees', 'Recognizing exemplary performance and dedication of civil servants during 2024.', 2024, '2024-09-18', 'Awards & Recognition');

-- Add comment
COMMENT ON TABLE resolutions IS 'Legislative resolutions passed by the Sangguniang Panlungsod of Ormoc City (2024-2025). Data represents typical Philippine LGU resolution subjects and patterns.';
