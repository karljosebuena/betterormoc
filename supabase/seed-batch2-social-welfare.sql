-- Phase 1, Batch 2: Social Welfare Services (5 services)
-- PWD ID & Services, Solo Parent ID, Financial Assistance, Burial Assistance, Medical Assistance

-- ============================================
-- PWD ID & SERVICES
-- ============================================
UPDATE services
SET 
  description = 'Person with Disability (PWD) ID provides access to benefits including 20% discount on medicines, medical services, transportation, and establishments. Also grants VAT exemption, priority lanes, and access to PWD-specific programs and services.',
  fees = 'Free',
  processing_time = '1-2 weeks (for card production)',
  office = 'City Social Welfare and Development Office (CSWDO)',
  steps = '[
    {"title": "Prepare Medical Certificate", "description": "Get a medical certificate from a licensed physician certifying your disability. Must specify type of disability and assessment that it is permanent or will last for more than one year.", "order": 1},
    {"title": "Gather Requirements", "description": "Bring birth certificate, valid ID, proof of residency, medical certificate, 1x1 ID photos (2 copies), and cedula (community tax certificate).", "order": 2},
    {"title": "Go to CSWDO", "description": "Visit the City Social Welfare and Development Office at City Hall. Bring all requirements and be prepared for assessment interview.", "order": 3},
    {"title": "Fill Out Application Form", "description": "Complete the PWD ID application form. Provide accurate personal information, disability details, and emergency contact.", "order": 4},
    {"title": "Assessment Interview", "description": "CSWDO staff will conduct brief assessment interview to verify disability and determine appropriate classification and benefits.", "order": 5},
    {"title": "Register in PWD Database", "description": "Your information will be encoded in the PWD database. You will be assigned a PWD ID number and registered for benefits.", "order": 6},
    {"title": "Attend Orientation", "description": "Attend orientation on PWD rights, benefits, and available programs. This may be scheduled on a specific date.", "order": 7},
    {"title": "Claim PWD ID", "description": "Return to CSWDO after 1-2 weeks with claim stub. Bring valid ID for verification. Receive PWD ID and booklet of benefits.", "order": 8}
  ]'::jsonb,
  faq = '[
    {"question": "What benefits do PWDs get?", "answer": "20% discount on medicines, medical/dental services, transportation, hotels, restaurants, recreation, and other establishments. VAT exemption. Priority lanes. Free medical services at government facilities. Access to livelihood programs and educational assistance.", "order": 1},
    {"question": "What disabilities qualify for PWD ID?", "answer": "Physical disabilities, visual impairment, hearing impairment, speech/communication disorders, intellectual disabilities, mental/psychosocial disabilities, and other chronic illnesses that substantially limit major life activities.", "order": 2},
    {"question": "Do I need to renew PWD ID?", "answer": "PWD IDs typically do not expire for permanent disabilities. However, you may need to renew if you change address or if the card is damaged/lost. Temporary disabilities may require periodic reassessment.", "order": 3},
    {"question": "Can family members use PWD discount?", "answer": "No, PWD discount is personal to the PWD cardholder only. The PWD must be present and the purchase must be for their use to avail of the discount.", "order": 4},
    {"question": "What if my disability is temporary?", "answer": "Temporary disabilities (less than 1 year) may still qualify. Bring medical certificate indicating expected duration. You may need to renew or reassess when the period expires.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "City Social Welfare and Development Office (CSWDO)", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM"}'::jsonb,
  requirements_by_type = '{"applicant": ["Medical Certificate from licensed physician (certifying permanent disability or lasting more than 1 year)", "Birth Certificate (PSA copy preferred)", "Valid government-issued ID", "Proof of residency (utility bill, barangay certificate, or lease contract)", "1x1 ID photo (2 copies)", "Community Tax Certificate (Cedula)"], "renewal_replacement": ["Previous PWD ID (if renewal/replacement)", "Valid government-issued ID", "Medical certificate (if reassessment needed)", "1x1 ID photo (2 copies)", "Affidavit of Loss (if lost/stolen)"]}'::jsonb,
  related_services = ARRAY['senior-citizen-id', 'medical-assistance', 'financial-assistance']
WHERE slug = 'pwd-id-services';

-- ============================================
-- SOLO PARENT ID
-- ============================================
UPDATE services
SET 
  description = 'Solo Parent ID provides access to benefits and assistance for solo parents including educational assistance, livelihood programs, housing assistance, medical assistance, and flexible work arrangements. Recognizes and supports solo parents raising children alone.',
  fees = 'Free',
  processing_time = '1-2 weeks',
  office = 'City Social Welfare and Development Office (CSWDO)',
  steps = '[
    {"title": "Check Eligibility", "description": "You qualify if you are unmarried, widowed, legally separated, or abandoned and solely responsible for raising a child. Prepare proof of solo parent status.", "order": 1},
    {"title": "Prepare Requirements", "description": "Bring birth certificate of child(ren), proof of solo parent status (death certificate, legal separation decree, affidavit, etc.), valid ID, proof of residency, and 1x1 photos.", "order": 2},
    {"title": "Go to CSWDO", "description": "Visit the City Social Welfare and Development Office at City Hall. Bring all requirements for verification.", "order": 3},
    {"title": "Fill Out Application Form", "description": "Complete Solo Parent ID application form. Provide information about yourself, your children, and circumstances of solo parenthood.", "order": 4},
    {"title": "Submit Requirements", "description": "Submit completed form and all supporting documents. CSWDO staff will verify your eligibility and documents.", "order": 5},
    {"title": "Assessment Interview", "description": "Brief interview to assess your situation and determine appropriate assistance programs you may qualify for.", "order": 6},
    {"title": "Attend Orientation", "description": "Attend orientation on solo parent rights, benefits, and available programs. Learn about educational assistance, livelihood, and other support services.", "order": 7},
    {"title": "Claim Solo Parent ID", "description": "Return after 1-2 weeks to claim your Solo Parent ID. Bring valid ID and claim stub for verification.", "order": 8}
  ]'::jsonb,
  faq = '[
    {"question": "Who qualifies as a solo parent?", "answer": "Unmarried mothers/fathers, widows/widowers, legally separated or annulled, abandoned spouse, spouse in prison, spouse with disability preventing work, or unwed parent with sole custody. Must be solely responsible for raising child(ren).", "order": 1},
    {"question": "What benefits do solo parents get?", "answer": "Educational assistance for children, livelihood and skills training, housing assistance, medical assistance, flexible work arrangements, parental leave benefits, and priority in government programs.", "order": 2},
    {"question": "Do I need to renew Solo Parent ID?", "answer": "Yes, Solo Parent ID typically needs renewal every 1-2 years or when circumstances change (child reaches 18, remarriage, etc.). Check with CSWDO for renewal schedule.", "order": 3},
    {"question": "Can both parents get Solo Parent ID?", "answer": "No, only the parent who has sole custody and responsibility for raising the child qualifies. If parents share custody equally, neither qualifies as solo parent.", "order": 4},
    {"question": "What if I remarry?", "answer": "If you remarry, you are no longer considered a solo parent and must surrender your Solo Parent ID. Benefits will cease upon remarriage.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "City Social Welfare and Development Office (CSWDO)", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM"}'::jsonb,
  requirements_by_type = '{"unmarried_parent": ["Birth Certificate of child(ren)", "Birth Certificate of applicant", "Affidavit declaring solo parent status", "Valid government-issued ID", "Proof of residency", "1x1 ID photo (2 copies)"], "widowed": ["Birth Certificate of child(ren)", "Death Certificate of spouse", "Marriage Certificate", "Valid government-issued ID", "Proof of residency", "1x1 ID photo (2 copies)"], "separated_abandoned": ["Birth Certificate of child(ren)", "Legal Separation decree or Affidavit of Abandonment", "Marriage Certificate", "Valid government-issued ID", "Proof of residency", "1x1 ID photo (2 copies)"]}'::jsonb,
  related_services = ARRAY['financial-assistance', 'scholarship-programs', 'medical-assistance']
WHERE slug = 'solo-parent-id';

-- ============================================
-- FINANCIAL ASSISTANCE
-- ============================================
UPDATE services
SET 
  description = 'Financial assistance program for indigent residents facing crisis situations including medical emergencies, funeral expenses, educational needs, and other urgent financial needs. Provides one-time cash assistance based on assessment and availability of funds.',
  fees = 'Free (assistance program)',
  processing_time = '3-7 business days (subject to fund availability)',
  office = 'City Social Welfare and Development Office (CSWDO)',
  steps = '[
    {"title": "Assess Your Need", "description": "Financial assistance is for crisis situations: medical emergencies, death in family, fire victims, disaster victims, or urgent educational needs. Prepare documentation of your situation.", "order": 1},
    {"title": "Prepare Requirements", "description": "Bring valid ID, barangay indigency certificate, proof of crisis (medical certificate, death certificate, fire report, etc.), and any supporting documents.", "order": 2},
    {"title": "Go to CSWDO", "description": "Visit City Social Welfare and Development Office at City Hall. Go to the financial assistance section and get queue number.", "order": 3},
    {"title": "Fill Out Application Form", "description": "Complete financial assistance application form. Explain your situation clearly and specify amount needed and purpose.", "order": 4},
    {"title": "Submit Requirements", "description": "Submit completed form and all supporting documents. Ensure all documents are complete to avoid delays.", "order": 5},
    {"title": "Case Assessment", "description": "Social worker will conduct assessment interview and home visit (if needed) to verify your situation and determine eligibility and amount of assistance.", "order": 6},
    {"title": "Wait for Approval", "description": "Application will be reviewed and approved by CSWDO head. Processing takes 3-7 business days depending on case complexity and fund availability.", "order": 7},
    {"title": "Claim Assistance", "description": "If approved, you will be notified to claim assistance. Bring valid ID and sign acknowledgment receipt. Assistance may be cash or in-kind.", "order": 8}
  ]'::jsonb,
  faq = '[
    {"question": "How much financial assistance can I get?", "answer": "Amount varies based on your need, assessment, and fund availability. Typically ranges from ₱1,000 to ₱10,000. Medical and burial assistance may be higher. CSWDO determines final amount.", "order": 1},
    {"question": "Can I apply multiple times?", "answer": "Financial assistance is meant to be one-time or occasional help. Frequent applications may not be approved. There may be a waiting period (6 months to 1 year) between applications.", "order": 2},
    {"question": "What if I am not indigent?", "answer": "Financial assistance is primarily for indigent residents. However, crisis situations (major medical emergency, disaster victim) may be considered even for non-indigent, subject to assessment.", "order": 3},
    {"question": "How long does approval take?", "answer": "Processing takes 3-7 business days, but may be expedited for urgent cases (medical emergency). Approval depends on completeness of documents and fund availability.", "order": 4},
    {"question": "What if my application is denied?", "answer": "You will be informed of the reason for denial. You may reapply with additional documents or seek alternative assistance programs. Social worker can guide you to other available programs.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "City Social Welfare and Development Office (CSWDO)", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM"}'::jsonb,
  requirements_by_type = '{"medical_assistance": ["Valid government-issued ID", "Barangay Indigency Certificate", "Medical Certificate or Hospital Bill", "Prescription (if for medicines)", "Proof of residency"], "burial_assistance": ["Valid government-issued ID", "Barangay Indigency Certificate", "Death Certificate", "Funeral Contract or Estimate", "Proof of relationship to deceased"], "educational_assistance": ["Valid government-issued ID", "Barangay Indigency Certificate", "School Enrollment Certificate", "Statement of Account or Tuition Fee", "Report Card or Certificate of Good Moral"], "disaster_assistance": ["Valid government-issued ID", "Barangay Certificate (certifying disaster victim)", "Photos of damage (if applicable)", "Fire Report or Disaster Report", "Proof of residency"]}'::jsonb,
  related_services = ARRAY['medical-assistance', 'burial-assistance', 'solo-parent-id', 'pwd-id-services']
WHERE slug = 'financial-assistance';

-- ============================================
-- BURIAL ASSISTANCE
-- ============================================
UPDATE services
SET 
  description = 'Burial assistance program for indigent families to help with funeral and burial expenses. Provides financial aid to ease the burden of funeral costs for qualified families who lost a loved one.',
  fees = 'Free (assistance program)',
  processing_time = '1-3 business days (expedited for urgent cases)',
  office = 'City Social Welfare and Development Office (CSWDO)',
  steps = '[
    {"title": "Prepare Death Certificate", "description": "Secure death certificate from Local Civil Registrar or hospital. This is required to prove the death and apply for burial assistance.", "order": 1},
    {"title": "Get Barangay Indigency Certificate", "description": "Go to your Barangay Hall and request Certificate of Indigency. This certifies that your family is indigent and qualifies for assistance.", "order": 2},
    {"title": "Prepare Other Requirements", "description": "Bring valid ID, funeral contract or estimate from funeral parlor, and proof of relationship to deceased (birth certificate, marriage certificate).", "order": 3},
    {"title": "Go to CSWDO", "description": "Visit City Social Welfare and Development Office at City Hall as soon as possible. Burial assistance is processed urgently.", "order": 4},
    {"title": "Fill Out Application Form", "description": "Complete burial assistance application form. Provide details of deceased, funeral arrangements, and estimated costs.", "order": 5},
    {"title": "Submit Requirements", "description": "Submit all documents to CSWDO staff. Ensure completeness to expedite processing given the urgent nature.", "order": 6},
    {"title": "Assessment and Approval", "description": "Social worker will assess your case and verify documents. Approval is typically faster for burial assistance (1-3 days) due to urgency.", "order": 7},
    {"title": "Claim Burial Assistance", "description": "Once approved, claim assistance with valid ID. Assistance may be released directly to funeral parlor or as cash/check to family. Sign acknowledgment receipt.", "order": 8}
  ]'::jsonb,
  faq = '[
    {"question": "How much burial assistance can I get?", "answer": "Burial assistance typically ranges from ₱3,000 to ₱10,000 depending on assessment and fund availability. Amount is determined by CSWDO based on family situation and funeral costs.", "order": 1},
    {"question": "Can I apply if I already paid the funeral parlor?", "answer": "Yes, you can still apply for reimbursement. Bring official receipts from funeral parlor as proof of payment. However, applying before payment is preferred.", "order": 2},
    {"question": "Who can apply for burial assistance?", "answer": "Immediate family members (spouse, children, parents, siblings) of the deceased can apply. Must be indigent resident of Ormoc City and provide proof of relationship.", "order": 3},
    {"question": "Is burial assistance only for indigent families?", "answer": "Yes, burial assistance is primarily for indigent families who cannot afford funeral expenses. Barangay Indigency Certificate is required to prove indigency.", "order": 4},
    {"question": "Can I get assistance from multiple sources?", "answer": "You may apply to multiple assistance programs (CSWDO, DSWD, PhilHealth burial benefit, SSS/GSIS death benefit) but must declare all assistance received. Total should not exceed actual funeral costs.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "City Social Welfare and Development Office (CSWDO)", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM"}'::jsonb,
  requirements_by_type = '{"applicant": ["Death Certificate (original and photocopy)", "Barangay Indigency Certificate", "Valid government-issued ID of applicant", "Proof of relationship to deceased (birth certificate, marriage certificate)", "Funeral Contract or Estimate from funeral parlor", "Proof of residency"], "reimbursement": ["Death Certificate (original and photocopy)", "Barangay Indigency Certificate", "Valid government-issued ID of applicant", "Official Receipts from funeral parlor", "Proof of relationship to deceased", "Proof of residency"]}'::jsonb,
  related_services = ARRAY['financial-assistance', 'death-certificate', 'senior-citizen-id']
WHERE slug = 'burial-assistance';

-- ============================================
-- MEDICAL ASSISTANCE
-- ============================================
UPDATE services
SET 
  description = 'Medical assistance program for indigent residents needing help with medical expenses including hospitalization, medicines, laboratory tests, and medical procedures. Provides financial aid or direct assistance to qualified patients.',
  fees = 'Free (assistance program)',
  processing_time = '1-5 business days (expedited for emergencies)',
  office = 'City Social Welfare and Development Office (CSWDO) or City Health Office',
  steps = '[
    {"title": "Get Medical Certificate", "description": "Secure medical certificate, prescription, or hospital bill from attending physician or hospital. This documents your medical need and estimated costs.", "order": 1},
    {"title": "Prepare Indigency Certificate", "description": "Get Certificate of Indigency from your Barangay Hall. This certifies that you are indigent and qualify for medical assistance.", "order": 2},
    {"title": "Gather Requirements", "description": "Bring valid ID, medical certificate/prescription/hospital bill, barangay indigency certificate, and proof of residency.", "order": 3},
    {"title": "Go to CSWDO or Health Office", "description": "For hospitalization/major medical: CSWDO at City Hall. For medicines/minor medical: City Health Office. Bring all requirements.", "order": 4},
    {"title": "Fill Out Application Form", "description": "Complete medical assistance application form. Specify type of assistance needed (hospitalization, medicines, laboratory, procedure) and estimated cost.", "order": 5},
    {"title": "Submit Requirements", "description": "Submit all documents. For emergency cases, inform staff immediately for priority processing.", "order": 6},
    {"title": "Assessment", "description": "Social worker or health officer will assess your case, verify documents, and determine type and amount of assistance. May conduct home visit for major assistance.", "order": 7},
    {"title": "Receive Assistance", "description": "Once approved, assistance may be: direct payment to hospital, medicine voucher, or cash/check. Sign acknowledgment receipt. For emergencies, processing is expedited.", "order": 8}
  ]'::jsonb,
  faq = '[
    {"question": "What medical expenses are covered?", "answer": "Hospitalization, medicines, laboratory tests, medical procedures, dialysis, chemotherapy, and other medical needs. Coverage depends on assessment and fund availability.", "order": 1},
    {"question": "How much medical assistance can I get?", "answer": "Amount varies based on medical need and fund availability. Minor assistance (medicines): ₱500-₱3,000. Major assistance (hospitalization, procedures): ₱5,000-₱50,000 or more for critical cases.", "order": 2},
    {"question": "Can I apply while already hospitalized?", "answer": "Yes, you can apply even if already admitted. Family member can apply on your behalf. Bring medical abstract, hospital bill, and other requirements. Processing may be expedited.", "order": 3},
    {"question": "Is medical assistance only for indigent?", "answer": "Primarily for indigent residents, but emergency/critical cases may be considered regardless of economic status, subject to assessment and fund availability.", "order": 4},
    {"question": "Can I apply multiple times?", "answer": "Yes, for different medical needs or continuing treatment (dialysis, chemotherapy). However, there may be limits on frequency and total amount per year depending on program guidelines.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "City Social Welfare and Development Office (CSWDO) / City Health Office", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM (Emergency cases: 24/7 coordination)"}'::jsonb,
  requirements_by_type = '{"hospitalization": ["Valid government-issued ID", "Barangay Indigency Certificate", "Medical Certificate or Hospital Bill", "Medical Abstract (if already admitted)", "Proof of residency", "PhilHealth Member Data Record (if applicable)"], "medicines": ["Valid government-issued ID", "Barangay Indigency Certificate", "Prescription from licensed physician", "Proof of residency"], "laboratory_procedure": ["Valid government-issued ID", "Barangay Indigency Certificate", "Medical Certificate with laboratory/procedure request", "Estimate or quotation", "Proof of residency"]}'::jsonb,
  related_services = ARRAY['financial-assistance', 'pwd-id-services', 'senior-citizen-id', 'health-certificate']
WHERE slug = 'medical-assistance';
