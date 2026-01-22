-- Update existing services with enhanced data
-- This updates Marriage Certificate, Death Certificate, CENOMAR, and Barangay Clearance

-- ============================================
-- UPDATE MARRIAGE CERTIFICATE
-- ============================================
UPDATE services
SET 
  description = 'Request a certified true copy of your marriage certificate from the Local Civil Registrar Office. Required for passport applications, visa processing, legal transactions, and other official purposes.',
  fees = '₱150 per copy',
  processing_time = '15-30 minutes',
  office = 'Local Civil Registrar',
  steps = '[
    {"title": "Check Eligibility", "description": "You can request if you are the owner (either spouse), parent/guardian, or authorized representative with proper authorization letter.", "order": 1},
    {"title": "Prepare Documents", "description": "Bring valid government-issued ID. If representative: authorization letter and IDs of both owner and representative.", "order": 2},
    {"title": "Visit Civil Registrar", "description": "Go to the Local Civil Registrar Office at 2nd Floor, Municipal Hall. Office hours: Mon-Fri, 8AM-5PM.", "order": 3},
    {"title": "Fill Out Request Form", "description": "Complete the request form with full names of both spouses, date of marriage, place of marriage, and purpose.", "order": 4},
    {"title": "Pay the Fee", "description": "Pay ₱150 per certified copy at the Municipal Treasurer Office (same building).", "order": 5},
    {"title": "Claim Certificate", "description": "Return to Civil Registrar with official receipt. Certificate released within 15-30 minutes if record is available.", "order": 6}
  ]'::jsonb,
  faq = '[
    {"question": "How long does processing take?", "answer": "If your marriage record is available in Ormoc City, you can get your certificate within 15-30 minutes. If the record needs to be verified or is from another municipality, it may take 1-3 business days.", "order": 1},
    {"question": "Can I request online?", "answer": "Currently, marriage certificates must be requested in person at the Local Civil Registrar Office. Online requests are not yet available.", "order": 2},
    {"question": "What if my marriage was registered elsewhere?", "answer": "You must request the certificate from the Local Civil Registrar where the marriage was registered. If registered in Ormoc, you can get it here.", "order": 3},
    {"question": "Can my spouse claim for me?", "answer": "Yes, either spouse can claim the marriage certificate without an authorization letter. For other representatives, an authorization letter is required.", "order": 4},
    {"question": "What IDs are accepted?", "answer": "Accepted government-issued IDs include: Philippine Passport, Driver License, SSS/GSIS ID, PhilHealth ID, Postal ID, Voter ID, PRC ID, Senior Citizen ID, PWD ID, or any government-issued ID with photo and signature.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "Local Civil Registrar", "location": "Municipal Hall, 2nd Floor", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  requirements_by_type = '{"owner": ["Valid government-issued ID of either spouse (original + photocopy)", "Payment: ₱150 cash per copy"], "representative": ["Authorization letter signed by either spouse", "Valid ID of the spouse (photocopy)", "Valid ID of the representative (original + photocopy)", "Payment: ₱150 cash per copy"]}'::jsonb,
  related_services = ARRAY['birth-certificate', 'death-certificate', 'cenomar']
WHERE slug = 'marriage-certificate';

-- ============================================
-- UPDATE DEATH CERTIFICATE
-- ============================================
UPDATE services
SET 
  description = 'Request a certified true copy of a death certificate from the Local Civil Registrar Office. Required for estate settlement, insurance claims, pension benefits, and other legal purposes.',
  fees = '₱150 per copy',
  processing_time = '15-30 minutes',
  office = 'Local Civil Registrar',
  steps = '[
    {"title": "Check Eligibility", "description": "You can request if you are a family member (spouse, children, parents, siblings) or authorized representative with proper authorization letter.", "order": 1},
    {"title": "Prepare Documents", "description": "Bring valid government-issued ID and proof of relationship to the deceased. If representative: authorization letter and IDs.", "order": 2},
    {"title": "Visit Civil Registrar", "description": "Go to the Local Civil Registrar Office at 2nd Floor, Municipal Hall. Office hours: Mon-Fri, 8AM-5PM.", "order": 3},
    {"title": "Fill Out Request Form", "description": "Complete the request form with full name of deceased, date of death, place of death, and purpose.", "order": 4},
    {"title": "Pay the Fee", "description": "Pay ₱150 per certified copy at the Municipal Treasurer Office (same building).", "order": 5},
    {"title": "Claim Certificate", "description": "Return to Civil Registrar with official receipt. Certificate released within 15-30 minutes if record is available.", "order": 6}
  ]'::jsonb,
  faq = '[
    {"question": "How long does processing take?", "answer": "If the death record is available in Ormoc City, you can get the certificate within 15-30 minutes. Records from other municipalities may take 1-3 business days.", "order": 1},
    {"question": "Who can request a death certificate?", "answer": "Immediate family members (spouse, children, parents, siblings) can request without special authorization. Other relatives or representatives need an authorization letter from a family member.", "order": 2},
    {"question": "What if the death occurred elsewhere?", "answer": "You must request the certificate from the Local Civil Registrar where the death was registered. If the person died in Ormoc, you can get it here.", "order": 3},
    {"question": "Do I need proof of relationship?", "answer": "Yes, you may be asked to show proof of relationship to the deceased, such as your birth certificate or marriage certificate.", "order": 4},
    {"question": "How many copies can I request?", "answer": "You can request as many certified copies as you need. Each copy costs ₱150.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "Local Civil Registrar", "location": "Municipal Hall, 2nd Floor", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  requirements_by_type = '{"family": ["Valid government-issued ID (original + photocopy)", "Proof of relationship to deceased (birth/marriage certificate)", "Payment: ₱150 cash per copy"], "representative": ["Authorization letter signed by a family member", "Valid ID of the family member (photocopy)", "Valid ID of the representative (original + photocopy)", "Proof of relationship of family member to deceased", "Payment: ₱150 cash per copy"]}'::jsonb,
  related_services = ARRAY['birth-certificate', 'marriage-certificate']
WHERE slug = 'death-certificate';

-- ============================================
-- UPDATE CENOMAR
-- ============================================
UPDATE services
SET 
  description = 'Certificate of No Marriage Record from the Philippine Statistics Authority (PSA). Required for marriage license applications, visa processing, employment abroad, and other legal purposes. This certifies that you have not contracted any marriage in the Philippines.',
  fees = '₱210 (walk-in) / ₱420 (online with delivery)',
  processing_time = '1-3 business days (walk-in) / 2-7 days (online)',
  office = 'Philippine Statistics Authority (PSA)',
  steps = '[
    {"title": "Choose Application Method", "description": "You can apply online via PSA Serbilis or walk-in at any PSA Civil Registry System (CRS) outlet. Online is more convenient but costs more.", "order": 1},
    {"title": "Prepare Information", "description": "You will need: complete name, date of birth, place of birth, father full name, mother maiden name, and purpose of request.", "order": 2},
    {"title": "Book Appointment (Walk-in)", "description": "For walk-in, book an online appointment at PSA CRS outlets. Choose your preferred outlet, date, and time. This is free and required.", "order": 3},
    {"title": "Submit Application", "description": "Online: Fill out the form at PSA Serbilis. Walk-in: Go to your scheduled appointment with valid ID and filled-out form.", "order": 4},
    {"title": "Pay the Fee", "description": "Online: Pay ₱420 via credit card, GCash, Maya, or other channels. Walk-in: Pay ₱210 at the PSA outlet cashier.", "order": 5},
    {"title": "Receive Certificate", "description": "Online: Delivered to your address in 2-7 days. Walk-in: Same day or next business day, bring your OR and valid ID to claim.", "order": 6}
  ]'::jsonb,
  faq = '[
    {"question": "What is the difference between online and walk-in?", "answer": "Online costs ₱420 with home delivery (2-7 days). Walk-in costs ₱210 but you need to visit a PSA outlet (same day or next day release). Choose based on your urgency and convenience.", "order": 1},
    {"question": "Can I get CENOMAR from LCR?", "answer": "No, CENOMAR must be obtained from PSA (Philippine Statistics Authority), not from the Local Civil Registrar. PSA is the only authorized issuer.", "order": 2},
    {"question": "How long is CENOMAR valid?", "answer": "CENOMAR is generally valid for 6 months from the date of issue. Some agencies may require a more recent copy (3 months or less).", "order": 3},
    {"question": "What if I was married before?", "answer": "If you were previously married, you cannot get a CENOMAR. Instead, you need a Certificate of Marriage with annotation showing annulment, divorce (for foreign nationals), or death of spouse.", "order": 4},
    {"question": "Can someone else claim for me?", "answer": "Yes, but only your spouse or parents/guardians (for minors) can claim on your behalf. They need an authorization letter and valid IDs of both parties.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "Philippine Statistics Authority (PSA)", "location": "Various PSA CRS Outlets nationwide", "address": "Check PSA website for nearest outlet", "phone": "1388 (PSA Hotline)", "hours": "Monday to Friday: 8:00 AM - 5:00 PM (varies by outlet)"}'::jsonb,
  requirements_by_type = '{"applicant": ["Valid government-issued ID (original + photocopy)", "Complete personal information (name, birthdate, birthplace, parents names)", "Payment: ₱210 (walk-in) or ₱420 (online)"], "representative": ["Authorization letter signed by the applicant", "Valid ID of the applicant (photocopy)", "Valid ID of the representative (original + photocopy)", "Only spouse or parents/guardians allowed", "Payment: ₱210 (walk-in) or ₱420 (online)"]}'::jsonb,
  related_services = ARRAY['birth-certificate', 'marriage-certificate']
WHERE slug = 'cenomar';

-- ============================================
-- UPDATE BARANGAY CLEARANCE
-- ============================================
UPDATE services
SET 
  description = 'Certificate issued by the Barangay confirming that you are a resident and have no derogatory records in the barangay. Required for employment, business permits, police clearance, and other transactions.',
  fees = '₱50-₱100 (varies by barangay)',
  processing_time = '30 minutes - 1 day',
  office = 'Barangay Hall',
  steps = '[
    {"title": "Determine Your Barangay", "description": "Go to the Barangay Hall where you currently reside. Barangay clearance must be obtained from your barangay of residence.", "order": 1},
    {"title": "Prepare Requirements", "description": "Bring valid ID, proof of residency (utility bill, lease contract, or barangay residency certificate), and Community Tax Certificate (Cedula).", "order": 2},
    {"title": "Get Cedula First", "description": "If you do not have a Cedula, get one first at the Barangay Hall or Municipal Treasurer Office. This is required for barangay clearance.", "order": 3},
    {"title": "Fill Out Application Form", "description": "At the Barangay Hall, fill out the barangay clearance application form with your personal information and purpose.", "order": 4},
    {"title": "Pay the Fee", "description": "Pay the barangay clearance fee (₱50-₱100, varies by barangay) at the designated payment window.", "order": 5},
    {"title": "Claim Clearance", "description": "Clearance is usually released within 30 minutes to 1 day. Some barangays issue it immediately, others require you to return the next day.", "order": 6}
  ]'::jsonb,
  faq = '[
    {"question": "How much does barangay clearance cost?", "answer": "The fee varies by barangay, typically ranging from ₱50 to ₱100. Check with your specific barangay for the exact amount.", "order": 1},
    {"question": "Do I need to be a registered voter?", "answer": "No, you do not need to be a registered voter. You just need to be a resident of the barangay. Proof of residency is sufficient.", "order": 2},
    {"question": "How long is barangay clearance valid?", "answer": "Barangay clearance is typically valid for 6 months to 1 year from the date of issue. Some agencies may require a more recent copy.", "order": 3},
    {"question": "What is Cedula and where do I get it?", "answer": "Cedula (Community Tax Certificate) is a tax document required for barangay clearance. You can get it at your Barangay Hall or Municipal Treasurer Office for around ₱5-₱50 depending on income.", "order": 4},
    {"question": "Can I get clearance from a different barangay?", "answer": "No, you must get barangay clearance from the barangay where you currently reside. If you recently moved, update your residency first.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "Barangay Hall", "location": "Your Barangay of Residence", "address": "Ormoc City has 110 barangays - visit your local barangay hall", "phone": "Contact your barangay office", "hours": "Monday to Friday: 8:00 AM - 5:00 PM (varies by barangay)"}'::jsonb,
  requirements_by_type = '{"resident": ["Valid government-issued ID (original + photocopy)", "Proof of residency (utility bill, lease contract, or barangay certificate)", "Community Tax Certificate (Cedula)", "Payment: ₱50-₱100 (varies by barangay)"], "new_resident": ["Valid government-issued ID (original + photocopy)", "Proof of new address (utility bill or lease contract)", "Transfer certificate from previous barangay (if applicable)", "Community Tax Certificate (Cedula)", "Payment: ₱50-₱100 (varies by barangay)"]}'::jsonb,
  related_services = ARRAY['community-tax-certificate', 'police-clearance', 'business-permit']
WHERE slug = 'barangay-clearance';
