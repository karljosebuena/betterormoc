-- Insert missing offices
INSERT INTO "public"."offices" ("name", "slug", "description", "location") VALUES
('Municipal Environment and Natural Resources Office', 'municipal-environment', 'Responsible for environmental protection and management.', 'Municipal Hall'),
('Municipal Disaster Risk Reduction and Management Office', 'mdrrmo', 'Responsible for disaster preparedness and response.', 'MDRRMO Building'),
('Ormoc City Police Office', 'ocpo', 'Responsible for maintaining peace and order.', 'Camp Downes'),
('Barangay Affairs', 'barangay', 'Local barangay services.', 'Barangay Hall'),
('Office of the Mayor', 'mayors-office', 'Office of the Local Chief Executive.', 'City Hall')
ON CONFLICT ("slug") DO NOTHING;

-- Assign Services to Offices

-- Civil Registrar
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'civil-registrar') 
WHERE slug IN ('birth-certificate', 'marriage-certificate', 'death-certificate', 'local-civil-registrar');

-- Treasurer
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'municipal-treasurer') 
WHERE slug IN (
    'community-tax-certificate-cedula', 
    'real-property-tax-payment', 
    'business-tax-payment', 
    'tax-clearance',
    'real-property-tax-online-billing-payment',
    'online-payment-order',
    'municipal-treasurer-s-office'
);

-- Assessor
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'municipal-assessor') 
WHERE slug IN ('property-declaration', 'municipal-assessor-s-office');

-- BPLS
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'bpls') 
WHERE slug IN (
    'business-permit-new', 
    'business-permit-renewal', 
    'business-closure', 
    'business-permits-licensing-office',
    'business-online-billing-payment',
    'new-business-application-online',
    'business-permit-renewal-online',
    'tricycle-franchising-records'
);

-- MSWDO
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'mswdo') 
WHERE slug IN (
    'senior-citizen-id', 
    'pwd-id-services', 
    'financial-assistance', 
    'burial-assistance', 
    'solo-parent-id', 
    'student-assistance',
    'mswdo-services'
);

-- Health (MHO)
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'health-office') 
WHERE slug IN (
    'sanitary-permit', 
    'vaccination-programs', 
    'health-certificate', 
    'medical-assistance',
    'prenatal-checkup'
);

-- Agriculture
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'municipal-agriculture') 
WHERE slug IN (
    'agricultural-loans', 
    'crop-insurance', 
    'fertilizer-assistance',
    'municipal-agriculture-office'
);

-- Engineering
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'municipal-engineering') 
WHERE slug IN (
    'building-permit', 
    'occupancy-permit', 
    'road-maintenance-request',
    'municipal-engineering-office'
);

-- Planning (MPDO)
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'mpdo') 
WHERE slug IN ('municipal-planning-development-office');

-- Budget
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'municipal-budget') 
WHERE slug IN ('municipal-budget-office');

-- Accounting
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'municipal-accounting') 
WHERE slug IN ('municipal-accounting-office');

-- General Services
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'general-services') 
WHERE slug IN ('general-services-office');

-- HRMO
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'hrmo') 
WHERE slug IN ('human-resource-management-office');

-- Mayor's Office (Generic/Scholarship)
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'mayors-office') 
WHERE slug IN ('scholarship-programs');

-- Environment (MENRO)
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'municipal-environment') 
WHERE slug IN (
    'environmental-clearance', 
    'tree-cutting-permit',
    'waste-management-services'
);

-- MDRRMO
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'mdrrmo') 
WHERE slug IN (
    'emergency-response', 
    'disaster-preparedness'
);

-- SEEDO
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'seedo-public-market') 
WHERE slug IN ('seedo-public-market');

UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'seedo-slaughterhouse') 
WHERE slug IN ('seedo-slaughterhouse');

-- Police
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'ocpo') 
WHERE slug IN ('police-clearance');

-- Barangay
UPDATE services SET office_id = (SELECT id FROM offices WHERE slug = 'barangay') 
WHERE slug IN ('barangay-clearance', 'barangay-id');
