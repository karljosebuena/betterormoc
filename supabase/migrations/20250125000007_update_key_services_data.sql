-- Update Key Services with Gold Standard Data

-- 1. Marriage Certificate
UPDATE services
SET 
  description = 'Get a certified true copy of a Marriage Certificate registered in Ormoc City. Essential for legal purposes, change of status, and spousal benefits.',
  steps = '[
    {"title": "Check Eligibility", "description": "Ensure you are the document owner (spouse) or a direct relative. Authorized representatives must have a valid letter.", "order": 1},
    {"title": "Prepare Requirements", "description": "Secure valid IDs and authorization if applicable.", "order": 2},
    {"title": "Visit Civil Registrar", "description": "Go to the Local Civil Registrar''s Office (LCRO) at City Hall.", "order": 3},
    {"title": "Payment", "description": "Pay the certification fee at the Treasurer''s Office.", "order": 4},
    {"title": "Claim Document", "description": "Present receipt at LCRO to claim your certified copy.", "order": 5}
  ]'::jsonb,
  requirements_by_type = '{
    "Owner (Spouse)": ["Valid Government ID (Original + Copy)", "Payment Receipt"],
    "Representative": ["Authorization Letter", "Valid ID of Owner (Copy)", "Valid ID of Representative (Original)", "Payment Receipt"]
  }'::jsonb,
  faq = '[
    {"question": "Can I get a CENOMAR here?", "answer": "No, CENOMAR is issued by the PSA. We only issue copies of Marriage Certificates registered locally in Ormoc.", "order": 1},
    {"question": "Validity?", "answer": "Civil registry documents do not expire, but recent copies are often required by agencies (e.g., within 6 months).", "order": 2}
  ]'::jsonb,
  office_details = '{
    "name": "Local Civil Registrar''s Office",
    "location": "Ground Floor, New Ormoc City Hall",
    "hours": "Mon-Fri 8AM-5PM"
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'marriage-certificate';

-- 2. Death Certificate
UPDATE services
SET 
  description = 'Request a certified copy of a Death Certificate. Required for insurance claims, inheritance, and burial purposes.',
  steps = '[
    {"title": "Verify Record", "description": "Verify at LCRO if the death record is available locally.", "order": 1},
    {"title": "Submit Req", "description": "Submit ID and proof of relationship.", "order": 2},
    {"title": "Payment", "description": "Pay the fee at the Treasurer''s Office.", "order": 3},
    {"title": "Claim", "description": "Receive the certified copy.", "order": 4}
  ]'::jsonb,
  requirements_by_type = '{
    "Next of Kin": ["Valid ID", "Proof of Relationship (Birth/Marriage Cert)"],
    "Representative": ["Authorization Letter", "Valid ID of Kin", "Valid ID of Representative"]
  }'::jsonb,
  office_details = '{
    "name": "Local Civil Registrar''s Office",
    "location": "Ground Floor, New Ormoc City Hall",
    "hours": "Mon-Fri 8AM-5PM"
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'death-certificate';

-- 3. Community Tax Certificate (Cedula)
UPDATE services
SET 
  description = 'Obtain a Community Tax Certificate (Cedula), required for notarization, employment, and business licensing.',
  steps = '[
    {"title": "Fill Form", "description": "Fill out the CTC application form at the Treasurer''s Office window.", "order": 1},
    {"title": "Assessment", "description": "Officer calculates tax based on declared income/gross sales.", "order": 2},
    {"title": "Payment", "description": "Pay the calculated amount.", "order": 3},
    {"title": "Release", "description": "Sign and receive your Cedula immediately.", "order": 4}
  ]'::jsonb,
  requirements_by_type = '{
    "Individual": ["Valid ID", "Proof of Income (Payslip/ITR) optional for higher tax class"],
    "Corporation": ["Financial Statement / BIR Return", "Authorized Representative ID"]
  }'::jsonb,
  faq = '[
    {"question": "How much is the fee?", "answer": "Basic residency tax is ₱5.00, plus ₱1.00 for every ₱1,000.00 of gross earnings.", "order": 1},
    {"question": "Do I need it every year?", "answer": "Yes, Cedula is valid only for the calendar year it was issued.", "order": 2}
  ]'::jsonb,
  office_details = '{
    "name": "City Treasurer''s Office",
    "location": "Ground Floor, New Ormoc City Hall",
    "hours": "Mon-Fri 8AM-5PM"
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'community-tax-certificate-cedula';

-- 4. Barangay Clearance
UPDATE services
SET 
  description = 'Certificate of residency and good moral character from your Barangay, often a prerequisite for Police/NBI clearance or employment.',
  steps = '[
    {"title": "Visit Barangay", "description": "Go to your specific Barangay Hall.", "order": 1},
    {"title": "Request", "description": "Present ID and state purpose (Employment, ID application, etc.).", "order": 2},
    {"title": "Payment", "description": "Pay the barangay certification fee.", "order": 3},
    {"title": "Release", "description": "Claim signed clearance from the Barangay Captain or Secretary.", "order": 4}
  ]'::jsonb,
  requirements_by_type = '{
    "Resident": ["Valid ID showing address", "Cedula (current year)"]
  }'::jsonb,
  fees = '₱50.00 - ₱100.00 (varies by Barangay)',
  office_details = '{
    "name": "Barangay Hall",
    "location": "Your respective Barangay Hall",
    "hours": "Mon-Fri 8AM-5PM"
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'barangay-clearance';

-- 5. Police Clearance
UPDATE services
SET 
  description = 'Local police clearance certifying you have no derogatory record within Ormoc City jurisdiction.',
  steps = '[
    {"title": "Prerequisite", "description": "Secure a Barangay Clearance and Cedula first.", "order": 1},
    {"title": "Payment", "description": "Pay the police clearance fee at the City Treasurer''s Office.", "order": 2},
    {"title": "Police Station", "description": "Proceed to the PNP Station (refer to address below).", "order": 3},
    {"title": "Biometrics", "description": "Submit requirements and undergo photo/fingerprint capture.", "order": 4},
    {"title": "Release", "description": "Wait for name verification and release.", "order": 5}
  ]'::jsonb,
  requirements_by_type = '{
    "Applicant": ["Barangay Clearance (Original)", "Cedula (Copy)", "Official Receipt of Payment", "2x2 ID Photo (if required)"]
  }'::jsonb,
  office_details = '{
    "name": "Ormoc City Police Office (OCPO)",
    "location": "Camp Downes / Assigned Police Station",
    "hours": "Mon-Fri 8AM-5PM"
  }'::jsonb,
  updated_at = NOW()
WHERE slug = 'police-clearance';
