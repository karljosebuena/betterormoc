-- Sample data for Birth Certificate service with enhanced fields
-- This demonstrates the complete service detail structure

-- First, let's update the birth-certificate service with enhanced data
UPDATE services
SET 
  steps = '[
    {
      "title": "Check Eligibility",
      "description": "You can request if you are the owner, parent/guardian, or authorized representative with proper authorization letter.",
      "order": 1
    },
    {
      "title": "Prepare Documents",
      "description": "Bring valid government-issued ID. If representative: authorization letter and IDs of both owner and representative.",
      "order": 2
    },
    {
      "title": "Visit Civil Registrar",
      "description": "Go to the Local Civil Registrar Office at 2nd Floor, Municipal Hall. Office hours: Mon-Fri, 8AM-5PM.",
      "order": 3
    },
    {
      "title": "Fill Out Request Form",
      "description": "Complete the request form with full name, date of birth, place of birth, parents names, and purpose.",
      "order": 4
    },
    {
      "title": "Pay the Fee",
      "description": "Pay ₱150 per certified copy at the Municipal Treasurer Office (same building).",
      "order": 5
    },
    {
      "title": "Claim Certificate",
      "description": "Return to Civil Registrar with official receipt. Certificate released within 15-30 minutes if record is available.",
      "order": 6
    }
  ]'::jsonb,
  
  faq = '[
    {
      "question": "How long does processing take?",
      "answer": "If your birth record is available in Ormoc City, you can get your certificate within 15-30 minutes. If the record needs to be verified or is from another municipality, it may take 1-3 business days.",
      "order": 1
    },
    {
      "question": "Can I request online?",
      "answer": "Currently, birth certificates must be requested in person at the Local Civil Registrar Office. Online requests are not yet available.",
      "order": 2
    },
    {
      "question": "What if my birth was not registered?",
      "answer": "You will need to file a Late Registration of Birth. This requires additional documents and may take several weeks. Contact the Civil Registrar for specific requirements.",
      "order": 3
    },
    {
      "question": "Can someone else claim for me?",
      "answer": "Yes, you can authorize a representative to claim your certificate. They must present an authorization letter, your valid ID (photocopy), and their own valid ID (original).",
      "order": 4
    },
    {
      "question": "What IDs are accepted?",
      "answer": "Accepted government-issued IDs include: Philippine Passport, Driver License, SSS/GSIS ID, PhilHealth ID, Postal ID, Voter ID, PRC ID, Senior Citizen ID, PWD ID, or any government-issued ID with photo and signature.",
      "order": 5
    }
  ]'::jsonb,
  
  office_details = '{
    "name": "Local Civil Registrar",
    "location": "Municipal Hall, 2nd Floor",
    "address": "Ormoc City, Leyte",
    "phone": "+63 53 561 6000",
    "hours": "Monday to Friday: 8:00 AM - 5:00 PM",
    "map_coordinates": {
      "lat": 11.0064,
      "lng": 124.6075
    }
  }'::jsonb,
  
  requirements_by_type = '{
    "owner": [
      "Valid government-issued ID (original + photocopy)",
      "Payment: ₱150 cash per copy"
    ],
    "representative": [
      "Authorization letter signed by the owner",
      "Valid ID of the owner (photocopy)",
      "Valid ID of the representative (original + photocopy)",
      "Payment: ₱150 cash per copy"
    ]
  }'::jsonb,
  
  related_services = ARRAY['marriage-certificate', 'death-certificate', 'cenomar']
  
WHERE slug = 'birth-certificate';

-- If birth-certificate doesn't exist, insert it
INSERT INTO services (title, slug, category, description, fees, processing_time, office, requirements, steps, faq, office_details, requirements_by_type, related_services)
SELECT 
  'Birth Certificate',
  'birth-certificate',
  'Certificates',
  'Request a certified true copy of your birth certificate from the Local Civil Registrar Office. Required for various transactions including passport application, employment, marriage, and other legal purposes.',
  '₱150 per copy',
  '15-30 minutes',
  'Local Civil Registrar',
  '["Valid government-issued ID", "Payment fee"]'::jsonb,
  '[
    {"title": "Check Eligibility", "description": "You can request if you are the owner, parent/guardian, or authorized representative with proper authorization letter.", "order": 1},
    {"title": "Prepare Documents", "description": "Bring valid government-issued ID. If representative: authorization letter and IDs of both owner and representative.", "order": 2},
    {"title": "Visit Civil Registrar", "description": "Go to the Local Civil Registrar Office at 2nd Floor, Municipal Hall. Office hours: Mon-Fri, 8AM-5PM.", "order": 3},
    {"title": "Fill Out Request Form", "description": "Complete the request form with full name, date of birth, place of birth, parents names, and purpose.", "order": 4},
    {"title": "Pay the Fee", "description": "Pay ₱150 per certified copy at the Municipal Treasurer Office (same building).", "order": 5},
    {"title": "Claim Certificate", "description": "Return to Civil Registrar with official receipt. Certificate released within 15-30 minutes if record is available.", "order": 6}
  ]'::jsonb,
  '[
    {"question": "How long does processing take?", "answer": "If your birth record is available in Ormoc City, you can get your certificate within 15-30 minutes.", "order": 1},
    {"question": "Can I request online?", "answer": "Currently, birth certificates must be requested in person at the Local Civil Registrar Office.", "order": 2},
    {"question": "What if my birth was not registered?", "answer": "You will need to file a Late Registration of Birth. Contact the Civil Registrar for specific requirements.", "order": 3},
    {"question": "Can someone else claim for me?", "answer": "Yes, you can authorize a representative with proper authorization letter and IDs.", "order": 4},
    {"question": "What IDs are accepted?", "answer": "Accepted IDs include: Philippine Passport, Driver License, SSS/GSIS ID, PhilHealth ID, Postal ID, Voter ID, PRC ID, Senior Citizen ID, PWD ID.", "order": 5}
  ]'::jsonb,
  '{"name": "Local Civil Registrar", "location": "Municipal Hall, 2nd Floor", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  '{"owner": ["Valid government-issued ID (original + photocopy)", "Payment: ₱150 cash per copy"], "representative": ["Authorization letter signed by the owner", "Valid ID of the owner (photocopy)", "Valid ID of the representative (original + photocopy)", "Payment: ₱150 cash per copy"]}'::jsonb,
  ARRAY['marriage-certificate', 'death-certificate', 'cenomar']
WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'birth-certificate');

-- Add related services (these would need to exist in your database)
-- Marriage Certificate
INSERT INTO services (title, slug, category, description, fees, processing_time, office)
SELECT 
  'Marriage Certificate',
  'marriage-certificate',
  'Certificates',
  'Request a certified true copy of your marriage certificate.',
  '₱150 per copy',
  '15-30 minutes',
  'Local Civil Registrar'
WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'marriage-certificate');

-- Death Certificate
INSERT INTO services (title, slug, category, description, fees, processing_time, office)
SELECT 
  'Death Certificate',
  'death-certificate',
  'Certificates',
  'Request a certified true copy of a death certificate.',
  '₱150 per copy',
  '15-30 minutes',
  'Local Civil Registrar'
WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'death-certificate');

-- CENOMAR
INSERT INTO services (title, slug, category, description, fees, processing_time, office)
SELECT 
  'CENOMAR (Certificate of No Marriage)',
  'cenomar',
  'Certificates',
  'Certificate of No Marriage Record, required for marriage applications.',
  '₱210 per copy',
  '3-5 business days',
  'Philippine Statistics Authority (PSA)'
WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'cenomar');
