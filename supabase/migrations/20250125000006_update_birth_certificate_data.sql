-- Update Birth Certificate with Gold Standard Data
UPDATE services
SET 
  description = 'Get a certified true copy of a Certificate of Live Birth registered in Ormoc City. This document is often required for school enrollment, passport application, employment, and other legal purposes.',
  
  -- Structured Steps
  steps = '[
    {
      "title": "Check Eligibility",
      "description": "Ensure you are eligible to request the document. You must be the owner, a parent/guardian, or an authorized representative.",
      "order": 1
    },
    {
      "title": "Prepare Requirements",
      "description": "Gather all necessary documents. Bring a valid government-issued ID. If you are a representative, ensure you have an authorization letter.",
      "order": 2
    },
    {
      "title": "Visit Civil Registrar",
      "description": "Proceed to the Local Civil Registrar''s Office (LCRO) at the New Ormoc City Hall. Get a priority number and wait for your turn.",
      "order": 3
    },
    {
      "title": "Fill Out Request Form",
      "description": "Complete the request form with accurate details: Full Name, Date of Birth, Place of Birth, and Father''s/Mother''s Name.",
      "order": 4
    },
    {
      "title": "Pay & Claim",
      "description": "Pay the fee of ₱150.00 at the Treasurer''s Office. Return to LCRO with the receipt to claim your certified copy.",
      "order": 5
    }
  ]'::jsonb,

  -- Categorized Requirements
  requirements_by_type = '{
    "Owner": [
      "Valid Government-issued ID (Original + Photocopy)",
      "Payment of Fee"
    ],
    "Parent/Guardian": [
      "Valid Government-issued ID (Original + Photocopy)",
      "Proof of relationship (if applicable)",
      "Payment of Fee"
    ],
    "Representative": [
      "Authorization Letter signed by the document owner",
      "Valid ID of the document owner (Photocopy with 3 specimen signatures)",
      "Valid ID of the representative (Original + Photocopy)",
      "Payment of Fee"
    ]
  }'::jsonb,

  -- Flat Requirements (Legacy support / Searchable text)
  requirements = '["Valid ID", "Authorization Letter (if representative)", "Payment Receipt"]'::jsonb,

  -- Rich Office Details
  office_details = '{
    "name": "Local Civil Registrar''s Office",
    "location": "Ground Floor, New Ormoc City Hall",
    "address": "Aunubing St., Ormoc City, Leyte",
    "phone": "(053) 255-XXXX",
    "email": "lcro@ormoc.gov.ph",
    "hours": "Monday - Friday: 8:00 AM - 5:00 PM"
  }'::jsonb,

  -- Extended FAQs
  faq = '[
    {
      "question": "How long is the processing time?",
      "answer": "If the record is available in the digital database, it can be released within 15-30 minutes. Manual searching for older records may take 1-2 days.",
      "order": 1
    },
    {
      "question": "Can I request online?",
      "answer": "Yes, you can request via the PSA Serbilis website for PSA copies. For Local Civil Registrar copies, you must visit the office personally or send a representative.",
      "order": 2
    },
    {
      "question": "What if the record is not found?",
      "answer": "You may be advised to file for Late Registration. The officer will provide a list of requirements for this specific procedure.",
      "order": 3
    }
  ]'::jsonb,

  fees = '₱150.00 per copy',
  processing_time = '15-30 minutes',
  updated_at = NOW()

WHERE slug = 'birth-certificate';
