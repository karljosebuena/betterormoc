-- Phase 1, Batch 1: IDs & Clearances (3 services)
-- Barangay ID, Police Clearance, Senior Citizen ID

-- ============================================
-- BARANGAY ID
-- ============================================
UPDATE services
SET 
  description = 'Official identification card issued by the Barangay for residents. Serves as proof of residency and valid ID for local transactions. Free for residents.',
  fees = 'Free (some barangays may charge ₱20-₱50 for card production)',
  processing_time = '1-2 weeks (for card production)',
  office = 'Barangay Hall',
  steps = '[
    {"title": "Determine Your Barangay", "description": "Go to the Barangay Hall where you currently reside. Barangay ID must be obtained from your barangay of residence.", "order": 1},
    {"title": "Prepare Requirements", "description": "Bring valid government-issued ID (or school ID for students), proof of residency, 1x1 or 2x2 ID photo, and birth certificate.", "order": 2},
    {"title": "Fill Out Application Form", "description": "At the Barangay Hall, fill out the Barangay ID application form with your personal information.", "order": 3},
    {"title": "Submit Requirements", "description": "Submit completed form, ID photo, and supporting documents to the barangay secretary or designated staff.", "order": 4},
    {"title": "Pay Fee (if applicable)", "description": "Some barangays charge ₱20-₱50 for ID card production. Others provide it free. Check with your barangay.", "order": 5},
    {"title": "Wait for Processing", "description": "ID card production typically takes 1-2 weeks. You will be notified when ready for claiming.", "order": 6},
    {"title": "Claim Barangay ID", "description": "Return to Barangay Hall with claim stub or receipt. Bring valid ID for verification. Sign logbook upon receipt.", "order": 7}
  ]'::jsonb,
  faq = '[
    {"question": "Is Barangay ID a valid government ID?", "answer": "Yes, Barangay ID is recognized as a valid government-issued ID for local transactions and can be used as supporting document for other ID applications.", "order": 1},
    {"question": "How much does Barangay ID cost?", "answer": "Most barangays provide it free. Some charge ₱20-₱50 for card production costs. Check with your specific barangay.", "order": 2},
    {"question": "Do I need to renew my Barangay ID?", "answer": "Barangay IDs typically do not expire, but some barangays may require renewal every few years. Check with your barangay for their policy.", "order": 3},
    {"question": "Can I get Barangay ID if I just moved?", "answer": "Yes, but you need to establish residency first. Bring proof of new address (utility bill, lease contract) and get a barangay certificate of residency.", "order": 4},
    {"question": "What if I lost my Barangay ID?", "answer": "Report to your Barangay Hall and request a replacement. You may need to file an affidavit of loss and pay a replacement fee.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "Barangay Hall", "location": "Your Barangay of Residence", "address": "Ormoc City has 110 barangays - visit your local barangay hall", "phone": "Contact your barangay office", "hours": "Monday to Friday: 8:00 AM - 5:00 PM (varies by barangay)"}'::jsonb,
  requirements_by_type = '{"resident": ["Valid government-issued ID or School ID", "Proof of residency (utility bill, lease contract, or barangay certificate)", "1x1 or 2x2 ID photo (2 copies)", "Birth Certificate (photocopy)", "Barangay Clearance (some barangays require)", "Payment (if applicable)"], "minor": ["Birth Certificate (original and photocopy)", "Valid ID of parent/guardian", "School ID (if student)", "1x1 or 2x2 ID photo (2 copies)", "Proof of residency", "Consent of parent/guardian"]}'::jsonb,
  related_services = ARRAY['barangay-clearance', 'senior-citizen-id', 'voter-registration']
WHERE slug = 'barangay-id';

-- ============================================
-- POLICE CLEARANCE (NBI Clearance)
-- ============================================
UPDATE services
SET 
  description = 'National Bureau of Investigation (NBI) Clearance certificate confirming no criminal record. Required for employment (local and abroad), visa applications, gun license, and other legal purposes. Valid for 1 year from issue date.',
  fees = '₱115 (regular) / ₱170 (expedited - same day)',
  processing_time = '3-5 business days (regular) / Same day (expedited)',
  office = 'NBI Clearance Center or Satellite Offices',
  steps = '[
    {"title": "Register Online", "description": "Go to NBI Clearance website (clearance.nbi.gov.ph) and create an account. Fill out online application form with accurate personal information.", "order": 1},
    {"title": "Schedule Appointment", "description": "Choose your preferred NBI office/satellite location, date, and time slot. Print or save the online application reference number.", "order": 2},
    {"title": "Prepare Requirements", "description": "Bring valid government-issued ID, online application reference number, and exact payment amount in cash.", "order": 3},
    {"title": "Go to NBI Office", "description": "Arrive at scheduled appointment time. Present online reference number and valid ID at the registration counter.", "order": 4},
    {"title": "Pay Clearance Fee", "description": "Pay ₱115 (regular) or ₱170 (expedited) at the cashier. Keep official receipt.", "order": 5},
    {"title": "Biometrics and Photo", "description": "Proceed to biometrics station for fingerprint scanning and photo capture. Ensure you look presentable for ID photo.", "order": 6},
    {"title": "Wait for Processing", "description": "Regular: 3-5 business days. Expedited: Same day (usually within 2-4 hours). Check status online using reference number.", "order": 7},
    {"title": "Claim NBI Clearance", "description": "Return to NBI office with official receipt and valid ID. If no hit (no criminal record), clearance is released immediately.", "order": 8}
  ]'::jsonb,
  faq = '[
    {"question": "What is the difference between NBI and Police Clearance?", "answer": "NBI Clearance is national (from National Bureau of Investigation) and more widely accepted, especially for employment abroad. Police Clearance is local (from PNP) and mainly for local use.", "order": 1},
    {"question": "How long is NBI Clearance valid?", "answer": "NBI Clearance is valid for 1 year from the date of issue. You need to renew annually if continuously needed.", "order": 2},
    {"question": "What if I have a hit (same name as someone with record)?", "answer": "If there is a hit, you need to return for manual verification. Bring additional IDs and documents to prove you are not the person with the record. This may take additional days.", "order": 3},
    {"question": "Can I walk in without online appointment?", "answer": "Some NBI offices accept walk-ins, but online appointment is highly recommended to avoid long queues and ensure slot availability.", "order": 4},
    {"question": "What IDs are accepted?", "answer": "Accepted IDs: Passport, Driver License, UMID, SSS/GSIS ID, PhilHealth ID, Postal ID, Voter ID, PRC ID, Senior Citizen ID, PWD ID, or any government-issued ID with photo and signature.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "National Bureau of Investigation (NBI)", "location": "NBI Clearance Centers and Satellite Offices nationwide", "address": "Check NBI website for nearest office in Leyte/Ormoc area", "phone": "NBI Hotline: (02) 8523-8231 to 38", "hours": "Monday to Friday: 8:00 AM - 5:00 PM (varies by office)"}'::jsonb,
  requirements_by_type = '{"applicant": ["Valid government-issued ID (original)", "Online application reference number", "Payment: ₱115 (regular) or ₱170 (expedited)", "1x1 ID photo (if not captured at NBI)"], "renewal": ["Previous NBI Clearance (if available)", "Valid government-issued ID (original)", "Online application reference number", "Payment: ₱115 (regular) or ₱170 (expedited)"]}'::jsonb,
  related_services = ARRAY['barangay-clearance', 'police-clearance-pnp', 'birth-certificate']
WHERE slug = 'police-clearance';

-- ============================================
-- SENIOR CITIZEN ID
-- ============================================
UPDATE services
SET 
  description = 'Official identification card for Filipino citizens 60 years old and above. Provides access to senior citizen benefits including 20% discount on medicines, restaurants, transportation, and other establishments. Also grants exemption from VAT.',
  fees = 'Free',
  processing_time = '1-2 weeks (for card production)',
  office = 'Office of the Senior Citizens Affairs (OSCA) or Barangay Hall',
  steps = '[
    {"title": "Check Eligibility", "description": "You must be a Filipino citizen, 60 years old or above, and a resident of Ormoc City. Prepare proof of age (birth certificate or valid ID with birthdate).", "order": 1},
    {"title": "Prepare Requirements", "description": "Bring birth certificate (PSA copy preferred), valid ID, proof of residency, 1x1 ID photo (2 copies), and cedula (community tax certificate).", "order": 2},
    {"title": "Go to OSCA or Barangay Hall", "description": "Visit the Office of the Senior Citizens Affairs at City Hall or your Barangay Hall. Some barangays process senior citizen IDs directly.", "order": 3},
    {"title": "Fill Out Application Form", "description": "Complete the Senior Citizen ID application form. Provide accurate personal information and emergency contact details.", "order": 4},
    {"title": "Submit Requirements", "description": "Submit completed form, ID photos, and supporting documents. Staff will verify your eligibility and documents.", "order": 5},
    {"title": "Register in Database", "description": "Your information will be encoded in the senior citizens database. You will be assigned a senior citizen ID number.", "order": 6},
    {"title": "Wait for ID Production", "description": "ID card production takes 1-2 weeks. Some offices provide temporary certificate while waiting for the card.", "order": 7},
    {"title": "Claim Senior Citizen ID", "description": "Return to OSCA or Barangay Hall with claim stub. Bring valid ID for verification. Attend orientation on senior citizen benefits if required.", "order": 8}
  ]'::jsonb,
  faq = '[
    {"question": "What benefits do senior citizens get?", "answer": "20% discount on medicines, medical services, restaurants, hotels, transportation, and other establishments. VAT exemption on purchases. Priority lanes. Free medical and dental services at government facilities.", "order": 1},
    {"question": "Do I need to renew my Senior Citizen ID?", "answer": "Senior Citizen IDs typically do not expire. However, you may need to renew if you change address or if the card is damaged/lost.", "order": 2},
    {"question": "Can I use Senior Citizen ID as valid ID?", "answer": "Yes, Senior Citizen ID is a valid government-issued ID and can be used for transactions requiring identification.", "order": 3},
    {"question": "What if I turn 60 mid-year?", "answer": "You can apply for Senior Citizen ID as soon as you turn 60. Bring your birth certificate showing your birthdate as proof of eligibility.", "order": 4},
    {"question": "Can I get Senior Citizen ID if I am not a resident?", "answer": "You must be a resident of Ormoc City to get an Ormoc Senior Citizen ID. If you reside elsewhere, apply in your city/municipality of residence.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "Office of the Senior Citizens Affairs (OSCA)", "location": "City Hall or Barangay Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM"}'::jsonb,
  requirements_by_type = '{"applicant": ["Birth Certificate (PSA copy preferred, original and photocopy)", "Valid government-issued ID", "Proof of residency (utility bill, barangay certificate, or lease contract)", "1x1 ID photo (2 copies)", "Community Tax Certificate (Cedula)", "Marriage Certificate (for married women using married name)"], "renewal_replacement": ["Previous Senior Citizen ID (if renewal/replacement)", "Valid government-issued ID", "Proof of residency (if address changed)", "1x1 ID photo (2 copies)", "Affidavit of Loss (if lost/stolen)"]}'::jsonb,
  related_services = ARRAY['pwd-id-services', 'barangay-id', 'medical-assistance']
WHERE slug = 'senior-citizen-id';
