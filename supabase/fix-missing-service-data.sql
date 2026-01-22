-- Quick Fixes for Missing Office Details and Basic Data
-- Run this to complete the most critical missing data

-- 1. Community Tax Certificate (Cedula) - Add office details
UPDATE services 
SET office_details = '{
    "name":"City Treasurer Office / Barangay Hall",
    "location":"City Hall or Your Barangay",
    "address":"Ormoc City, Leyte",
    "phone":"+63 53 561 6000",
    "hours":"Monday to Friday: 8:00 AM - 5:00 PM"
}'::jsonb,
steps = '[
    {"title":"Determine Where to Apply","description":"For individual cedula: Go to your barangay hall. For business cedula: Go to City Treasurer Office.","order":1},
    {"title":"Prepare Requirements","description":"Bring valid ID and payment. For business: Bring business registration documents.","order":2},
    {"title":"Fill Out Form","description":"Complete the Community Tax Certificate application form with your personal/business information.","order":3},
    {"title":"Pay Fee","description":"Pay the cedula fee. Amount varies based on income/gross sales. Minimum ₱5 for individuals.","order":4},
    {"title":"Receive Certificate","description":"Get your Community Tax Certificate (Cedula). Keep it for your records and transactions.","order":5}
]'::jsonb,
requirements_by_type = '{
    "individual":["Valid government-issued ID","Payment (₱5 minimum)"],
    "business":["Business registration (DTI/SEC/CDA)","Valid ID of owner","Payment based on gross sales"]
}'::jsonb,
faq = '[
    {"question":"How much is the cedula fee?","answer":"For individuals: ₱5 base + ₱1 per ₱1,000 of income. For businesses: Based on gross sales. Maximum ₱5,000.","order":1},
    {"question":"Where can I get cedula?","answer":"Individuals can get it from barangay hall. Businesses must get it from City Treasurer Office.","order":2},
    {"question":"How long is cedula valid?","answer":"Valid for one calendar year (January 1 to December 31). Must renew annually.","order":3},
    {"question":"What is cedula used for?","answer":"Required for: business permits, employment, transactions with government, legal documents, and other official purposes.","order":4}
]'::jsonb
WHERE slug = 'community-tax-certificate-cedula';

-- 2. General Services Office - Add office details
UPDATE services 
SET office_details = '{
    "name":"General Services Office (GSO)",
    "location":"City Hall",
    "address":"Ormoc City, Leyte",
    "phone":"+63 53 561 6000",
    "hours":"Monday to Friday: 8:00 AM - 5:00 PM"
}'::jsonb,
steps = '[
    {"title":"Visit GSO","description":"Go to General Services Office at City Hall for facility, equipment, or vehicle-related requests.","order":1},
    {"title":"Submit Request","description":"Fill out request form for the service you need (facility rental, equipment use, vehicle request, etc.).","order":2},
    {"title":"Wait for Approval","description":"GSO will process your request and coordinate with relevant departments.","order":3},
    {"title":"Receive Service","description":"Once approved, GSO will provide the requested service or facility access.","order":4}
]'::jsonb,
requirements_by_type = '{
    "general":["Valid ID","Completed request form","Authorization letter (if applicable)"]
}'::jsonb,
faq = '[
    {"question":"What services does GSO provide?","answer":"GSO handles: facility management, equipment maintenance, vehicle pool management, janitorial services, and general administrative support.","order":1},
    {"question":"How do I request a city vehicle?","answer":"Submit vehicle request form to GSO with trip details. Subject to availability and approval.","order":2},
    {"question":"Can I rent city facilities?","answer":"Yes, for official events and approved activities. Submit facility rental request to GSO.","order":3}
]'::jsonb
WHERE slug = 'general-services-office';

-- 3. Human Resource Management Office - Add office details
UPDATE services 
SET office_details = '{
    "name":"Human Resource Management Office (HRMO)",
    "location":"City Hall",
    "address":"Ormoc City, Leyte",
    "phone":"+63 53 561 6000",
    "hours":"Monday to Friday: 8:00 AM - 5:00 PM"
}'::jsonb,
steps = '[
    {"title":"Visit HRMO","description":"Go to Human Resource Management Office at City Hall for employment-related concerns.","order":1},
    {"title":"Submit Inquiry/Request","description":"Fill out appropriate form for your concern (job application, employee records, benefits, etc.).","order":2},
    {"title":"Provide Requirements","description":"Submit required documents depending on your request type.","order":3},
    {"title":"Wait for Processing","description":"HRMO will process your request and provide feedback or required documents.","order":4}
]'::jsonb,
requirements_by_type = '{
    "general":["Valid ID","Completed form","Supporting documents (varies by request)"]
}'::jsonb,
faq = '[
    {"question":"What services does HRMO provide?","answer":"HRMO handles: recruitment, employee records, benefits administration, training, performance evaluation, and HR policy implementation.","order":1},
    {"question":"How do I apply for city government jobs?","answer":"Check job postings on city website or HRMO office. Submit application with required documents during application period.","order":2},
    {"question":"Where can I get employment certification?","answer":"Request from HRMO with valid ID. Processing time: 1-3 business days.","order":3}
]'::jsonb
WHERE slug = 'human-resource-management-office';

-- 4. Real Property Tax Payment - Add office details and complete data
UPDATE services 
SET office_details = '{
    "name":"City Treasurer Office",
    "location":"City Hall",
    "address":"Ormoc City, Leyte",
    "phone":"+63 53 561 6000",
    "hours":"Monday to Friday: 8:00 AM - 5:00 PM"
}'::jsonb,
steps = '[
    {"title":"Get Tax Declaration","description":"Ensure you have your Tax Declaration Number (TDN) from City Assessor Office.","order":1},
    {"title":"Check Amount Due","description":"Visit City Treasurer or check online portal (eservices.lguormoc.org/rpt) for amount due.","order":2},
    {"title":"Prepare Payment","description":"Bring Tax Declaration, valid ID, and payment. Early payment (before March 31) gets 20% discount.","order":3},
    {"title":"Pay at Treasurer","description":"Go to City Treasurer Office. Submit Tax Declaration and pay the assessed amount.","order":4},
    {"title":"Get Official Receipt","description":"Receive official receipt as proof of payment. Keep for your records.","order":5}
]'::jsonb,
requirements_by_type = '{
    "payment":["Tax Declaration","Valid government-issued ID","Payment (cash or check)"]
}'::jsonb,
faq = '[
    {"question":"When is RPT due?","answer":"Annual deadline: December 31. Early payment (before March 31) gets 20% discount. Quarterly payment also allowed.","order":1},
    {"question":"How much is the discount for early payment?","answer":"20% discount if paid before March 31. 10% discount if paid before June 30.","order":2},
    {"question":"Can I pay online?","answer":"Yes, through eservices.lguormoc.org/rpt portal. You can check balance and pay online.","order":3},
    {"question":"What if I lost my Tax Declaration?","answer":"Request certified true copy from City Assessor Office. Bring valid ID and property details.","order":4},
    {"question":"What happens if I don''t pay?","answer":"Penalties and interest will be charged. Property may be subject to auction if unpaid for several years.","order":5}
]'::jsonb
WHERE slug = 'real-property-tax-payment';

-- 5. Business Permit (New) - Add steps
UPDATE services 
SET steps = '[
    {"title":"Register Business Name","description":"Register with DTI (sole proprietor), SEC (corporation), or CDA (cooperative) first.","order":1},
    {"title":"Secure Barangay Clearance","description":"Get barangay business clearance from your barangay hall. Bring business registration and valid ID.","order":2},
    {"title":"Apply Online or Walk-in","description":"Option 1: Apply online at bploormoc.com. Option 2: Walk-in at BPLO office with requirements.","order":3},
    {"title":"Submit Requirements","description":"Submit all required documents: DTI/SEC/CDA registration, barangay clearance, lease contract, cedula, valid ID.","order":4},
    {"title":"Pay Fees","description":"Pay business permit fees, taxes, and other charges at City Treasurer. Amount varies by business type and capital.","order":5},
    {"title":"Business Inspection","description":"Wait for inspection by relevant offices (Sanitary, Fire, Engineering, etc.). Ensure compliance with requirements.","order":6},
    {"title":"Claim Business Permit","description":"After all clearances, claim your Mayor''s Permit at BPLO. Display at your business location.","order":7}
]'::jsonb
WHERE slug = 'business-permit-new';

-- Verify updates
SELECT slug, title, 
    CASE WHEN office_details IS NOT NULL THEN '✅' ELSE '❌' END as has_office,
    CASE WHEN steps IS NOT NULL AND steps::text != '[]' THEN '✅' ELSE '❌' END as has_steps,
    CASE WHEN requirements_by_type IS NOT NULL AND requirements_by_type::text != '{}' THEN '✅' ELSE '❌' END as has_req,
    CASE WHEN faq IS NOT NULL AND faq::text != '[]' THEN '✅' ELSE '❌' END as has_faq
FROM services 
WHERE slug IN (
    'community-tax-certificate-cedula',
    'general-services-office',
    'human-resource-management-office',
    'real-property-tax-payment',
    'business-permit-new'
)
ORDER BY slug;
