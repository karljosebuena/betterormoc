-- Massive Upgrade for Marriage Certificate (License + Registration)
UPDATE services
SET 
  description = 'Complete guide for couples intending to marry in Ormoc City (Marriage License) and for those registering or requesting copies of marriage contracts. The Marriage License is valid anywhere in the Philippines for 120 days.',
  
  -- Combined Steps for License Application AND Registration
  steps = '[
    {
      "title": "[License] Application",
      "description": "Submit duly accomplished Marriage License Application Form and requirements to the Local Civil Registrar. Both parties must appear personally.",
      "order": 1
    },
    {
      "title": "[License] Counseling & Posting",
      "description": "Attend Pre-Marriage Counseling (PMC) if required. The Notice of Marriage application will be posted for 10 consecutive days.",
      "order": 2
    },
    {
      "title": "[License] Issuance",
      "description": "After the 10-day posting period, pay the fees at the Treasurer''s Office and claim the Marriage License at LCR.",
      "order": 3
    },
    {
      "title": "[Registration] Ceremony & Submission",
      "description": "After the wedding ceremony, the Solemnizing Officer submit the Certificate of Marriage (COM) to LCR for registration (within 15 days).",
      "order": 4
    },
    {
      "title": "[Request] Certified Copy",
      "description": "To get a certified true copy, verify records at LCR, pay the fee of ₱150, and claim your document.",
      "order": 5
    }
  ]'::jsonb,

  -- Comprehensive Requirements
  requirements_by_type = '{
    "For Marriage License": [
      "Birth Certificate (PSA Copy) - Original + Photocopy",
      "Certificate of No Marriage (CENOMAR) - PSA",
      "Valid Government ID (Original + Photocopy)",
      "Cedula (Community Tax Certificate)",
      "Pre-Marriage Counseling Certificate (for ages 18-25)",
      "Parental Consent (for ages 18-21)",
      "Parental Advice (for ages 22-25)",
      "Certificate of Legal Capacity (for Foreigners)"
    ],
    "For Registration (Timely)": [
      "Certificate of Marriage (COM) - 4 copies",
      "Signatures of Couple, Solemnizing Officer, and 2 Witnesses",
      "Authority of Solemnizing Officer (Photocopy)"
    ],
    "For Registration (Delayed)": [
      "Affidavit for Delayed Registration",
      "Negative Certification from PSA",
      "Affidavit of Solemnizing Officer stating cause of delay"
    ],
    "For Certified Copy Request": [
      "Valid ID of Requester",
      "Authorization Letter (if Representative)",
      "Fee Payment Receipt"
    ]
  }'::jsonb,

  -- Enriched FAQs
  faq = '[
    {
      "question": "How long is the Marriage License valid?",
      "answer": "The Marriage License is valid for 120 days from the date of issue and can be used anywhere in the Philippines.",
      "order": 1
    },
    {
      "question": "Is Pre-Marriage Counseling required?",
      "answer": "Yes, for applicants ages 18-25. It is conducted by the City Population Office / MSWDO. Older applicants may be exempt but usually still need a certificate/interview.",
      "order": 2
    },
    {
      "question": "What if my partner is a Foreigner?",
      "answer": "Foreign applicants must submit a ''Certificate of Legal Capacity to Contract Marriage'' issued by their respective diplomatic or consular officials in the Philippines.",
      "order": 3
    },
    {
      "question": "Can we get married immediately?",
      "answer": "No, there is a mandatory 10-day posting period for the marriage license application before the license is issued.",
      "order": 4
    },
    {
      "question": "Can I get a CENOMAR here?",
      "answer": "No, CENOMAR is issued by the PSA. We only process the Marriage License and standard Marriage Certificate registration.",
      "order": 5
    }
  ]'::jsonb,

  -- Ensure related services are mapped
  related_services = ARRAY['birth-certificate', 'death-certificate', 'community-tax-certificate-cedula'],
  updated_at = NOW()

WHERE slug = 'marriage-certificate';
