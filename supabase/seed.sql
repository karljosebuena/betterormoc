-- Sample services data for development
INSERT INTO services (title, category, description, requirements, fees, processing_time, office, contact_info, slug) VALUES
  (
    'Birth Certificate',
    'Civil Registry',
    'Request for certified true copy of birth certificate',
    '["Valid ID", "PSA Birth Certificate (if available)", "Authorization letter (if representative)"]'::jsonb,
    '₱140 per copy',
    '3-5 business days',
    'Municipal Civil Registrar',
    '{"phone": "0916-284-0885", "email": "civilregistry@ormoc.gov.ph"}'::jsonb,
    'birth-certificate'
  ),
  (
    'Business Permit',
    'Business',
    'Application for new business permit',
    '["DTI/SEC Registration", "Barangay Clearance", "Fire Safety Inspection Certificate", "Sanitary Permit", "Valid ID"]'::jsonb,
    'Based on gross sales',
    '7-10 business days',
    'Business Permits and Licensing Office',
    '{"phone": "0927-400-8033", "email": "bplo@ormoc.gov.ph"}'::jsonb,
    'business-permit'
  ),
  (
    'Real Property Tax Payment',
    'Tax',
    'Payment of real property tax',
    '["Tax Declaration", "Official Receipt (previous payment)", "Valid ID"]'::jsonb,
    'Based on assessed value',
    'Same day',
    'Municipal Treasurer''s Office',
    '{"phone": "0936-062-0305", "email": "treasury@ormoc.gov.ph"}'::jsonb,
    'real-property-tax'
  );

-- Sample officials data
INSERT INTO officials (name, position, department, email, phone, order_index) VALUES
  ('Hon. Lucy Torres-Gomez', 'City Mayor', 'Office of the Mayor', 'mayor@ormoc.gov.ph', '0927-400-8033', 1),
  ('Hon. Leo Carmelo Locsin', 'City Vice Mayor', 'Office of the Vice Mayor', 'vicemayor@ormoc.gov.ph', '0916-284-0885', 2),
  ('Atty. Juan Dela Cruz', 'City Administrator', 'Office of the Mayor', 'admin@ormoc.gov.ph', '0936-062-0305', 3);

-- Sample ordinances
INSERT INTO ordinances (number, title, date_passed, description, category, status) VALUES
  ('2024-001', 'An Ordinance Regulating Street Vendors', '2024-01-15', 'Ordinance to regulate street vending activities in the city', 'Public Order', 'active'),
  ('2024-002', 'Environmental Protection Ordinance', '2024-02-20', 'Ordinance promoting environmental protection and waste management', 'Environment', 'active');

-- Sample resolutions
INSERT INTO resolutions (number, title, date_passed, description, category, status) VALUES
  ('2024-R-001', 'Resolution Approving City Budget', '2024-01-10', 'Resolution approving the annual city budget for 2024', 'Finance', 'active'),
  ('2024-R-002', 'Resolution Honoring Outstanding Citizens', '2024-03-01', 'Resolution honoring citizens for community service', 'Awards', 'active');

-- Sample statistics
INSERT INTO statistics (category, label, value, year, source) VALUES
  ('population', 'Total Population', '230,998', 2024, 'PSA Census'),
  ('economy', 'Total Budget', '₱2.5 Billion', 2024, 'City Budget Office'),
  ('services', 'Business Permits Issued', '1,245', 2024, 'BPLO'),
  ('infrastructure', 'Barangays', '110', 2024, 'City Planning Office');
