-- Comprehensive Ordinances Seed Data for Ormoc City (2024-2025)
-- Realistic legislative data based on Philippine LGU patterns

DELETE FROM ordinances WHERE year IN (2024, 2025);

-- ============================================
-- 2025 ORDINANCES (15 ordinances)
-- ============================================

INSERT INTO ordinances (ordinance_number, title, description, year, date_approved, category) VALUES

-- January 2025
('ORD-2025-001', 'An Ordinance Approving the Annual Investment Plan (AIP) for Fiscal Year 2025', 'Approving the Annual Investment Plan detailing capital outlay projects and infrastructure development programs for the City of Ormoc for fiscal year 2025, appropriating funds therefor, and for other purposes.', 2025, '2025-01-15', 'Finance & Budget'),

('ORD-2025-002', 'An Ordinance Regulating the Operation of Food Carts and Mobile Food Vendors in the City of Ormoc', 'Establishing guidelines, requirements, and standards for the operation of food carts and mobile food vendors to ensure food safety, public health, and orderly conduct of business in public spaces.', 2025, '2025-01-22', 'Business & Commerce'),

-- February 2025
('ORD-2025-003', 'An Ordinance Establishing a Bicycle Lane Network in Major Roads of Ormoc City', 'Creating a comprehensive bicycle lane network along major thoroughfares to promote sustainable transportation, reduce carbon emissions, and ensure the safety of cyclists, providing penalties for violations thereof.', 2025, '2025-02-05', 'Infrastructure'),

('ORD-2025-004', 'An Ordinance Strengthening the Anti-Littering Campaign and Imposing Stiffer Penalties for Violations', 'Amending existing anti-littering ordinances to impose stricter penalties and enforcement mechanisms to maintain cleanliness and environmental sanitation throughout the city.', 2025, '2025-02-19', 'Environment'),

-- March 2025
('ORD-2025-005', 'An Ordinance Creating the Ormoc City Tourism Development Council', 'Establishing the Ormoc City Tourism Development Council to formulate policies, programs, and projects for the promotion and development of tourism industry in the city, defining its composition, powers, and functions.', 2025, '2025-03-12', 'Governance & Administration'),

('ORD-2025-006', 'An Ordinance Regulating the Use of Single-Use Plastics in Commercial Establishments', 'Prohibiting the use, sale, and distribution of single-use plastic bags, straws, and styrofoam containers in all commercial establishments within Ormoc City, promoting eco-friendly alternatives, and providing penalties for violations.', 2025, '2025-03-26', 'Environment'),

-- April 2025
('ORD-2025-007', 'An Ordinance Establishing Free Wi-Fi Zones in Public Parks and Plazas', 'Providing free internet access in designated public parks and plazas to promote digital inclusion, enhance public services, and support students and entrepreneurs, appropriating funds therefor.', 2025, '2025-04-09', 'Social Services'),

('ORD-2025-008', 'An Ordinance Regulating the Establishment and Operation of Internet Cafes and Computer Shops', 'Setting standards, requirements, and guidelines for the establishment and operation of internet cafes and computer shops to protect minors, prevent illegal activities, and ensure public safety and morality.', 2025, '2025-04-21', 'Business & Commerce'),

-- May 2025
('ORD-2025-009', 'An Ordinance Creating the Film Development Council of the City of Ormoc', 'Establishing the Film Development Council to promote Ormoc City as a film location, support local filmmakers, develop the creative industry, and provide incentives for film productions, defining its powers and functions.', 2025, '2025-05-07', 'Social Services'),

('ORD-2025-010', 'An Ordinance Prohibiting the Entry of Nuisance Contraband Inside the Ormoc District Jail', 'Prohibiting the entry, possession, and distribution of contraband items including mobile phones, drugs, weapons, and other prohibited articles inside the Ormoc District Jail, providing penalties for violations thereof.', 2025, '2025-05-21', 'Public Order & Safety'),

-- June 2025
('ORD-2025-011', 'An Ordinance Institutionalizing the Ormoc City Scholarship Program', 'Establishing a comprehensive scholarship program for deserving students from low-income families, defining eligibility criteria, benefits, obligations, and funding sources to promote access to quality education.', 2025, '2025-06-04', 'Social Services'),

('ORD-2025-012', 'An Ordinance Regulating the Cutting, Trimming, and Removal of Trees in Ormoc City', 'Establishing guidelines and procedures for tree cutting, trimming, and removal to balance development needs with environmental protection, requiring permits and imposing penalties for unauthorized tree cutting.', 2025, '2025-06-18', 'Environment'),

-- July 2025
('ORD-2025-013', 'An Ordinance Establishing Night Markets in Designated Areas of Ormoc City', 'Creating night market zones to promote local entrepreneurship, boost tourism, provide livelihood opportunities, and enhance the city''s night economy, setting operational guidelines and standards.', 2025, '2025-07-02', 'Business & Commerce'),

('ORD-2025-014', 'An Ordinance Strengthening Disaster Risk Reduction and Management in Barangays', 'Enhancing barangay-level disaster preparedness through mandatory training, equipment provision, early warning systems, and evacuation protocols, appropriating funds for disaster risk reduction programs.', 2025, '2025-07-16', 'Public Order & Safety'),

-- August 2025
('ORD-2025-015', 'An Ordinance Regulating the Operation of Tricycles for Hire in Ormoc City', 'Updating regulations for tricycle operations including franchise requirements, route assignments, fare rates, safety standards, and driver qualifications to improve public transportation services.', 2025, '2025-08-06', 'Business & Commerce');

-- ============================================
-- 2024 ORDINANCES (20 ordinances)
-- ============================================

INSERT INTO ordinances (ordinance_number, title, description, year, date_approved, category) VALUES

-- January 2024
('ORD-2024-001', 'An Ordinance Approving the Annual Budget for Fiscal Year 2024', 'Appropriating funds for the operation of the City Government of Ormoc for fiscal year 2024, authorizing the City Mayor to enter into contracts and obligations, and for other purposes.', 2024, '2024-01-10', 'Finance & Budget'),

('ORD-2024-002', 'An Ordinance Establishing the Ormoc City Business One-Stop Shop (BOSS)', 'Creating a unified business processing center to streamline business permit applications, renewals, and related transactions, improving ease of doing business in Ormoc City.', 2024, '2024-01-24', 'Business & Commerce'),

-- February 2024
('ORD-2024-003', 'An Ordinance Regulating the Sale and Use of Firecrackers and Pyrotechnic Devices', 'Prohibiting the sale, distribution, and use of firecrackers and pyrotechnic devices except in designated areas and periods, promoting public safety and reducing firecracker-related injuries.', 2024, '2024-02-07', 'Public Order & Safety'),

('ORD-2024-004', 'An Ordinance Creating the Ormoc City Youth Development Office', 'Establishing a dedicated office for youth development programs, sports activities, skills training, and leadership development, defining its organizational structure and functions.', 2024, '2024-02-21', 'Social Services'),

-- March 2024
('ORD-2024-005', 'An Ordinance Implementing the No Garage, No Car Policy in Residential Subdivisions', 'Requiring residential subdivision developers to provide garage spaces and prohibiting on-street parking in subdivisions to reduce traffic congestion and improve road safety.', 2024, '2024-03-06', 'Infrastructure'),

('ORD-2024-006', 'An Ordinance Establishing the Ormoc City Public Employment Service Office (PESO)', 'Strengthening employment facilitation services through the creation of a comprehensive public employment service office providing job matching, livelihood training, and employment counseling.', 2024, '2024-03-20', 'Social Services'),

-- April 2024
('ORD-2024-007', 'An Ordinance Regulating the Establishment and Operation of Funeral Parlors', 'Setting standards, location requirements, sanitation guidelines, and operational procedures for funeral parlors to ensure public health, safety, and respect for the deceased and their families.', 2024, '2024-04-03', 'Health & Sanitation'),

('ORD-2024-008', 'An Ordinance Prohibiting Discrimination Based on Sexual Orientation and Gender Identity', 'Protecting individuals from discrimination in employment, education, housing, and public services based on sexual orientation and gender identity, promoting equality and human rights.', 2024, '2024-04-17', 'Governance & Administration'),

-- May 2024
('ORD-2024-009', 'An Ordinance Establishing Urban Gardens and Community Farming Programs', 'Promoting urban agriculture through community gardens, rooftop farming, and vacant lot utilization to enhance food security, environmental sustainability, and community engagement.', 2024, '2024-05-08', 'Agriculture'),

('ORD-2024-010', 'An Ordinance Regulating the Operation of Karaoke and Videoke Establishments', 'Setting operational hours, noise level limits, and location restrictions for karaoke and videoke establishments to balance entertainment needs with residential peace and quiet.', 2024, '2024-05-22', 'Business & Commerce'),

-- June 2024
('ORD-2024-011', 'An Ordinance Creating the Ormoc City Heritage Conservation Council', 'Establishing a council to identify, protect, and preserve historical sites, cultural landmarks, and heritage structures in Ormoc City, promoting cultural awareness and heritage tourism.', 2024, '2024-06-05', 'Social Services'),

('ORD-2024-012', 'An Ordinance Implementing Mandatory Segregation of Biodegradable and Non-Biodegradable Waste', 'Requiring all households and establishments to segregate waste at source, establishing collection schedules, and imposing penalties for non-compliance to improve waste management.', 2024, '2024-06-19', 'Environment'),

-- July 2024
('ORD-2024-013', 'An Ordinance Regulating the Establishment of Gasoline Stations and LPG Refilling Stations', 'Setting safety standards, distance requirements from residential areas, schools, and hospitals, and environmental compliance for gasoline and LPG stations to ensure public safety.', 2024, '2024-07-03', 'Public Order & Safety'),

('ORD-2024-014', 'An Ordinance Establishing Senior Citizens'' Parks and Recreation Centers', 'Creating dedicated parks and recreation facilities for senior citizens with age-appropriate amenities, exercise equipment, and social spaces to promote active aging and wellness.', 2024, '2024-07-17', 'Social Services'),

-- August 2024
('ORD-2024-015', 'An Ordinance Regulating the Slaughtering of Animals for Human Consumption', 'Establishing standards for animal slaughtering, meat inspection procedures, sanitation requirements, and penalties for illegal slaughtering to ensure food safety and animal welfare.', 2024, '2024-08-07', 'Health & Sanitation'),

('ORD-2024-016', 'An Ordinance Creating the Ormoc City Anti-Drug Abuse Council', 'Establishing a multi-sectoral council to formulate and implement comprehensive anti-drug programs, rehabilitation services, and community-based interventions against illegal drugs.', 2024, '2024-08-21', 'Public Order & Safety'),

-- September 2024
('ORD-2024-017', 'An Ordinance Establishing Farmers'' Markets in Strategic Locations', 'Creating designated farmers'' market areas to provide direct market access for local farmers, ensure fresh produce availability, and support agricultural livelihoods.', 2024, '2024-09-04', 'Agriculture'),

('ORD-2024-018', 'An Ordinance Regulating the Construction and Maintenance of Sidewalks', 'Setting standards for sidewalk construction, requiring property owners to maintain sidewalks, ensuring accessibility for persons with disabilities, and imposing penalties for violations.', 2024, '2024-09-18', 'Infrastructure'),

-- October 2024
('ORD-2024-019', 'An Ordinance Implementing the Adopt-a-School Program', 'Encouraging private sector participation in improving public school facilities, providing educational materials, and supporting teacher development through public-private partnerships.', 2024, '2024-10-02', 'Social Services'),

('ORD-2024-020', 'An Ordinance Regulating the Use of Loudspeakers and Sound Amplifying Devices', 'Controlling noise pollution by regulating the use of loudspeakers, sound systems, and amplifying devices in public and private spaces, setting decibel limits and time restrictions.', 2024, '2024-10-16', 'Public Order & Safety');

-- Add comment
COMMENT ON TABLE ordinances IS 'Legislative ordinances passed by the Sangguniang Panlungsod of Ormoc City (2024-2025). Data represents typical Philippine LGU legislative priorities.';
