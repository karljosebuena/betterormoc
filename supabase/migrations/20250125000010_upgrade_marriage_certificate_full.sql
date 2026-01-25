-- Massive Upgrade for Marriage Certificate (License + Registration)
UPDATE services
SET 
  description = 'Complete guide for couples intending to marry in Ormoc City (Marriage License) and for those registering or requesting copies of marriage contracts.
  
> **Important Registration Deadlines:** The Certificate of Marriage (COM) must be registered within **15 days** after the solemnization of marriage. For weddings under Art. 34 or PD 1083, it must be registered within **30 days**.',
  fees = '₱270.00',
  processing_time = '10 days, 5 hours and 10 minutes',
  
  -- Combined Steps for License Application AND Registration
  steps = '[
    {
      "title": "[License] Present Requirements",
      "description": "Submit requirements for review. Personnel will check for completeness.",
      "order": 1,
      "duration": "2 mins",
      "personnel": "LCR Staff (Bernadette/Juvy)",
      "documents": "Birth Certificate, Parental Consent/Advice (if applicable), CENOMAR, Valid ID"
    },
    {
      "title": "[License] Interview & Encoding",
      "description": "Answer questions for encoding in the Application Form.",
      "order": 2,
      "duration": "3 mins",
      "personnel": "LCR Encoder (Edgar Mc)"
    },
    {
      "title": "[License] Printing",
      "description": "Wait for the printing of the documents.",
      "order": 3,
      "duration": "2 mins",
      "personnel": "LCR Encoder"
    },
    {
      "title": "[License] Payment",
      "description": "Pay the required fees at the MTO.",
      "order": 4,
      "duration": "10 mins",
      "fee": "₱268.00 (+₱250 Solemnization if applicable)",
      "personnel": "MTO Collection Officer",
      "documents": "Order of Payment"
    },
    {
      "title": "[License] Schedule PMC",
      "description": "Proceed to MSWDO for the schedule of PMC (Pre-Marriage Counseling).",
      "order": 5,
      "duration": "45 mins",
      "personnel": "MSWDO Staff",
      "documents": "Application for Marriage License, Official Receipt"
    },
    {
      "title": "[License] Attend PMC",
      "description": "Attend the PMC (every Thursday at 8:00 AM) at the designated room.",
      "order": 6,
      "duration": "4 hours",
      "personnel": "PMC Team",
      "documents": "Application Form, OR"
    },
    {
      "title": "[License] Return to MCRO",
      "description": "After the PMC, go back to MCRO for the schedule of issuance of the Marriage License.",
      "order": 7,
      "duration": "5 mins",
      "personnel": "LCR Staff",
      "documents": "Application Form, Certificate of PMC"
    },
    {
      "title": "[License] Issuance",
      "description": "Issuance of the marriage license after the completion of the requirements and period of 10 days posting.",
      "order": 8,
      "duration": "3 mins",
      "fee": "₱2.00 (License Fee)",
      "personnel": "Releasing Officer",
      "documents": "Application Form duly signed, PMC Cert, OR"
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
