-- Remove redundant Local Civil Registrar service
DELETE FROM services WHERE slug = 'local-civil-registrar';

-- Enrich Birth Certificate with Deep FAQs and Related Services
UPDATE services
SET 
  related_services = '["marriage-certificate", "death-certificate", "barangay-clearance"]'::jsonb,
  faq = '[
    {
      "question": "Can I get a birth certificate registered in another municipality?",
      "answer": "No. The Local Civil Registrar (LCR) can only issue copies of birth certificates that were originally registered here in Ormoc City. For records from other places, please request via PSA.",
      "order": 1
    },
    {
      "question": "What difference between Local Copy and PSA Copy?",
      "answer": "A Local Copy is issued by the LGU where the event occurred and is printed on LGU watermarked paper. A PSA Copy is printed on Security Paper (SECPA) by the Philippine Statistics Authority. Some agencies specifically require the PSA copy.",
      "order": 2
    },
    {
      "question": "Can I request through email or online?",
      "answer": "For Local LCR copies, you must visit the office personally or send a representative. For PSA copies, you can order online via PSA Serbilis.",
      "order": 3
    },
    {
      "question": "What if I don''t know the exact date of birth?",
      "answer": "You may provide an approximate year. The records officer will search the years surrounding your estimate, but a manual search fee may apply.",
      "order": 4
    }
  ]'::jsonb,
  updated_at = NOW()
WHERE slug = 'birth-certificate';

-- Enrich Marriage Certificate
UPDATE services
SET 
  related_services = '["birth-certificate", "death-certificate", "community-tax-certificate-cedula"]'::jsonb,
  faq = '[
    {
      "question": "Can I get a CENOMAR here?",
      "answer": "No, the Certificate of No Marriage (CENOMAR) is issued exclusively by the PSA. We only issue copies of Marriage Certificates registered in Ormoc.",
      "order": 1
    },
    {
      "question": "Do marriage certificates expire?",
      "answer": "Civil registry documents strictly speaking do not expire. However, for legal purposes like passport application, agencies often require a copy issued within the last 6 months.",
      "order": 2
    },
    {
      "question": "Can I register a marriage that happened abroad?",
      "answer": "No, marriages abroad must be reported to the Philippine Consulate in the country where the marriage took place.",
      "order": 3
    }
  ]'::jsonb,
  updated_at = NOW()
WHERE slug = 'marriage-certificate';

-- Enrich Death Certificate
UPDATE services
SET 
  related_services = '["birth-certificate", "burial-assistance", "transfer-permit"]'::jsonb,
  faq = '[
    {
      "question": "Who can request a Death Certificate?",
      "answer": "The nearest of kin (Spouse, Parent, Child) or an authorized representative with a letter of authority.",
      "order": 1
    },
    {
      "question": "Is late registration possible?",
      "answer": "Yes, but it requires additional supporting documents like a Joint Affidavit of Two Disinterested Persons and a Negative Certification from PSA.",
      "order": 2
    },
    {
      "question": "Do you issue pending death certificates?",
      "answer": "No, the death certificate must be fully registered and signed by the Health Officer and Civil Registrar before a certified copy is issued.",
      "order": 3
    }
  ]'::jsonb,
  updated_at = NOW()
WHERE slug = 'death-certificate';
