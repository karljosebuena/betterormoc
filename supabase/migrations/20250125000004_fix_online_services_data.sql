-- Fix Online Services data to match Home Page
-- Deletes old "Online" services and inserts new ones with external links

-- 1. Delete existing services in 'Online' category to avoid duplicates
DELETE FROM services WHERE category = 'Online';

-- 2. Insert correct Online services from Home Page
INSERT INTO services (title, slug, category, description, external_url, fees, processing_time, office, requirements, created_at, updated_at)
VALUES 
  (
    'Real Property Tax', 
    'real-property-tax-online-portal', 
    'Online', 
    'Pay and inquire about property taxes', 
    'https://eservices.lguormoc.org/rpt/pages/index.php',
    'Varies',
    'Instant',
    'Municipal Treasurer''s Office',
    '[]'::jsonb,
    NOW(),
    NOW()
  ),
  (
    'Business Permit (New)', 
    'business-permit-new-online-portal', 
    'Online', 
    'Apply for new business permits', 
    'https://bploormoc.com/bplo/new.php',
    'Varies',
    '3-5 days',
    'Business Permits & Licensing Office',
    '[]'::jsonb,
    NOW(),
    NOW()
  ),
  (
    'Business Permit (Renewal)', 
    'business-permit-renewal-online-portal', 
    'Online', 
    'Renew your business permit', 
    'https://bploormoc.com/bplo/renewal.php',
    'Varies',
    'Same day',
    'Business Permits & Licensing Office',
    '[]'::jsonb,
    NOW(),
    NOW()
  ),
  (
    'LBP e-GPS Payment', 
    'lbp-egps-payment', 
    'Online', 
    'Pay government fees via Land Bank', 
    'https://www.lbp-eservices.com/egps/portal/index.jsp',
    'Varies',
    'Instant',
    'Land Bank of the Philippines',
    '[]'::jsonb,
    NOW(),
    NOW()
  );
