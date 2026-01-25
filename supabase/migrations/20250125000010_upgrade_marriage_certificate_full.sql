-- Massive Upgrade for Marriage Certificate (License + Registration)
UPDATE services
SET 
  description = 'Complete guide for couples intending to marry in Ormoc City (Marriage License) and for those registering or requesting copies of marriage contracts.
  
> **Important Registration Deadlines:** The Certificate of Marriage (COM) must be registered within **15 days** after the solemnization of marriage. For weddings under Art. 34 or PD 1083, it must be registered within **30 days**.',
  
  -- Combined Steps for License Application AND Registration
  steps = '[
    {
      "title": "[License] Present Requirements",
      "description": "Submit duly accomplished Marriage License Application Form and requirements to the Local Civil Registrar for review.",
      "order": 1,
      "duration": "5 mins",
      "personnel": "LCR Staff",
      "documents": "Application Form, Birth Cert, CENOMAR, Valid ID"
    },
    {
      "title": "[License] Interview & Encoding",
      "description": "Answer questions for data encoding. Verify drafted information before printing.",
      "order": 2,
      "duration": "10 mins",
      "personnel": "LCR Encoder"
    },
    {
      "title": "[License] Payment of Fees",
      "description": "Proceed to Treasurer''s Office (MTO) to pay the application and license fees.",
      "order": 3,
      "duration": "15 mins",
      "fee": "₱270.00",
      "personnel": "MTO Staff",
      "documents": "Order of Payment"
    },
    {
      "title": "[License] Pre-Marriage Counseling",
      "description": "Proceed to City Population Office / MSWDO for counseling (PMC) scheduling or conduct.",
      "order": 4,
      "duration": "4 hours / By Sched",
      "personnel": "PMC Team",
      "documents": "Official Receipt"
    },
    {
      "title": "[License] Claiming",
      "description": "After the 10-day posting period, return to LCR to claim the valid marriage license.",
      "order": 5,
      "duration": "5 mins",
      "personnel": "Releasing Officer",
      "documents": "Claim Stub"
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
