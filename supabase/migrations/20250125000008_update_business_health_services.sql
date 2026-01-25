-- Update Business & Health Key Services (Batch 2)

-- 1. Business Permit (New)
UPDATE services
SET 
  description = 'Application for a new Business Permit (Mayor''s Permit) for starting a business in Ormoc City.',
  steps = '[
    {"title": "Application", "description": "Submit unified application form and requirements at Business One-Stop Shop (BOSS).", "order": 1},
    {"title": "Assessment", "description": "One-time assessment of taxes, fees, and charges.", "order": 2},
    {"title": "Payment", "description": "Pay assessed fees at the Treasurer''s Office.", "order": 3},
    {"title": "Clearances", "description": "LGU processes regulatory clearances (Sanitary, Fire, Zoning) internally if integrated.", "order": 4},
    {"title": "Release", "description": "Claim your Business Permit, Plate, and Sticker.", "order": 5}
  ]'::jsonb,
  requirements_by_type = '{
    "Single Proprietorship": ["DTI Registration", "Barangay Clearance (Business)", "Proof of Right of Applicant (Lease Contract/Title)", "Occupancy Permit"],
    "Corporation/Partnership": ["SEC Registration", "Barangay Clearance (Business)", "Lease Contract/Title", "Occupancy Permit"]
  }'::jsonb,
  office_details = '{
    "name": "Business Permits & Licensing Office (BPLO)",
    "location": "Business One-Stop Shop, Ground Floor, City Hall",
    "hours": "Mon-Fri 8AM-5PM (Extended during renewal period)"
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'business-permit-new';

-- 2. Business Permit (Renewal)
UPDATE services
SET 
  description = 'Annual renewal of Business Permit. Must be filed on or before January 20 to avoid penalties.',
  steps = '[
    {"title": "Submission", "description": "Submit renewal application and previous year''s permit/receipts.", "order": 1},
    {"title": "Assessment", "description": "Assessment of local business tax based on gross sales.", "order": 2},
    {"title": "Payment", "description": "Pay taxes and fees.", "order": 3},
    {"title": "Release", "description": "Receive renewed permit.", "order": 4}
  ]'::jsonb,
  requirements_by_type = '{
    "All Businesses": ["Previous Year Business Permit (Copy)", "Audited Financial Statement / ITR", "Barangay Clearance for Renewal"]
  }'::jsonb,
  office_details = '{
    "name": "BPLO / BOSS",
    "location": "City Hall / Designated Renewal Center",
    "hours": "Mon-Fri 8AM-5PM"
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'business-permit-renewal';

-- 3. Business Closure
UPDATE services
SET 
  description = 'Officially retire your business to stop tax obligations.',
  steps = '[
    {"title": "Application", "description": "Submit letter of retirement/closure and surrender permit.", "order": 1},
    {"title": "Inspection", "description": "Verification of closure by inspectors.", "order": 2},
    {"title": "Assessment", "description": "Computation of any final unpaid taxes.", "order": 3},
    {"title": "Payment", "description": "Pay clearance fee and tax balance.", "order": 4},
    {"title": "Certificate", "description": "Receive Certificate of Business Retirement.", "order": 5}
  ]'::jsonb,
  requirements_by_type = '{
    "Requirements": ["Letter of Request for Retirement", "Original Mayor''s Permit", "Affidavit of Closure", "Outstanding Tax Payment"]
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'business-closure';

-- 4. Health Certificate
UPDATE services
SET 
  description = 'Medical certificate for employment (food handler / non-food handler).',
  steps = '[
    {"title": "Lab Tests", "description": "Undergo required tests (X-ray, Stool, etc.) at accredited labs.", "order": 1},
    {"title": "Payment", "description": "Pay Health Certificate fee at Treasurer''s.", "order": 2},
    {"title": "Submission", "description": "Submit lab results and receipt to City Health Office.", "order": 3},
    {"title": "Release", "description": "Receive Health Card/Certificate.", "order": 4}
  ]'::jsonb,
  requirements_by_type = '{
    "Food Handler": ["Chest X-ray result", "Stool Exam result", "Urinalysis", "Cedula"],
    "Non-Food Handler": ["Chest X-ray result", "Cedula"]
  }'::jsonb,
  fees = '₱100.00 - ₱150.00',
  office_details = '{
    "name": "City Health Office",
    "location": "City Health Building",
    "hours": "Mon-Fri 8AM-5PM"
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'health-certificate';

-- 5. Sanitary Permit
UPDATE services
SET 
  description = 'Required for all business establishments to ensure compliance with sanitation code.',
  steps = '[
    {"title": "Compliance", "description": "Ensure establishment meets sanitary standards.", "order": 1},
    {"title": "Assessment", "description": "Pay sanitary fee along with Business Permit.", "order": 2},
    {"title": "Inspection", "description": "Sanitary inspector validates compliance.", "order": 3},
    {"title": "Issuance", "description": "Permit is issued (often with Business Permit).", "order": 4}
  ]'::jsonb,
  requirements_by_type = '{
    "New/Renewal": ["Health Certificates of all employees", "Water Analysis Result (if applicable)", "Pest Control (if applicable)"]
  }'::jsonb,
  office_details = '{
    "name": "City Health Office - Sanitation Division",
    "location": "City Health Building",
    "hours": "Mon-Fri 8AM-5PM"
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'sanitary-permit';
