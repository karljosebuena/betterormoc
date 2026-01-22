-- Seed data for remaining 5 priority services
-- Business Permit, Building Permit, Occupancy Permit, Real Property Tax, Enhanced Cedula

-- ============================================
-- BUSINESS PERMIT (New Business)
-- ============================================
INSERT INTO services (title, slug, category, description, fees, processing_time, office, requirements, steps, faq, office_details, requirements_by_type, related_services)
SELECT 
  'Business Permit (New)',
  'business-permit',
  'Permits',
  'Mayor''s Permit or Business Permit required to legally operate a business in Ormoc City. Must be renewed annually. This permit ensures compliance with local ordinances and regulations.',
  'Varies (based on business type and gross sales)',
  '3-7 business days',
  'Business Permits and Licensing Office',
  '["DTI/SEC/CDA Registration", "Barangay Clearance", "Cedula", "Valid ID", "Payment"]'::jsonb,
  '[
    {"title": "Register Business Name", "description": "Register with DTI (sole proprietorship), SEC (corporation), or CDA (cooperative) first. This is a prerequisite before applying for business permit.", "order": 1},
    {"title": "Secure Barangay Clearance", "description": "Get barangay business clearance from the barangay where your business will operate. Bring DTI/SEC registration and valid ID.", "order": 2},
    {"title": "Prepare Requirements", "description": "Gather all documents: DTI/SEC/CDA registration, barangay clearance, cedula, lease contract or property title, valid ID, and business location sketch.", "order": 3},
    {"title": "Submit Application", "description": "Go to Business Permits and Licensing Office at City Hall. Submit application form and all requirements. Staff will assess your business type and location.", "order": 4},
    {"title": "Pay Fees", "description": "Pay business permit fees, sanitary permit, fire safety inspection fee, and other applicable charges at the City Treasurer Office. Fees vary by business type.", "order": 5},
    {"title": "Undergo Inspections", "description": "Schedule inspections from City Health Office, Bureau of Fire Protection, and other relevant offices. Ensure compliance with safety and health standards.", "order": 6},
    {"title": "Claim Permit", "description": "After all inspections pass and fees are paid, claim your Mayor Permit/Business Permit. Display it prominently at your business location.", "order": 7}
  ]'::jsonb,
  '[
    {"question": "How much does a business permit cost?", "answer": "Fees vary based on business type, location, and gross sales. Small businesses (under ₱100k annual sales) may pay ₱500-₱2,000. Larger businesses pay more. Visit the Business Permits Office for exact computation.", "order": 1},
    {"question": "Can I operate while waiting for the permit?", "answer": "No, you must have an approved business permit before starting operations. Operating without a permit may result in fines and closure.", "order": 2},
    {"question": "What is the difference between DTI and business permit?", "answer": "DTI registration is for your business name (national level). Business permit is from the city government allowing you to operate in Ormoc. You need both.", "order": 3},
    {"question": "Do I need to renew every year?", "answer": "Yes, business permits must be renewed annually before January 20 to avoid penalties. Renewal is faster than new applications.", "order": 4},
    {"question": "What if my business is home-based?", "answer": "Home-based businesses still need a business permit and barangay clearance. Requirements are the same, but zoning regulations may apply.", "order": 5}
  ]'::jsonb,
  '{"name": "Business Permits and Licensing Office", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  '{"new_business": ["DTI/SEC/CDA Registration Certificate", "Barangay Business Clearance", "Community Tax Certificate (Cedula)", "Lease Contract or Property Title", "Location Sketch/Map", "Valid government-issued ID", "Passport-size photos (2x2)", "Payment for fees"], "renewal": ["Previous year Business Permit", "Barangay Clearance (current year)", "Community Tax Certificate (Cedula)", "Valid government-issued ID", "Payment for renewal fees"]}'::jsonb,
  ARRAY['barangay-clearance', 'community-tax-certificate', 'occupancy-permit']
WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'business-permit');

-- ============================================
-- BUILDING PERMIT
-- ============================================
INSERT INTO services (title, slug, category, description, fees, processing_time, office, requirements, steps, faq, office_details, requirements_by_type, related_services)
SELECT 
  'Building Permit',
  'building-permit',
  'Permits',
  'Required permit before constructing, renovating, or demolishing any structure. Ensures compliance with National Building Code and local zoning ordinances. Protects public safety and property rights.',
  'Varies (based on project cost and type)',
  '7-14 business days',
  'Office of the Building Official',
  '["Building Plans", "Land Title", "Tax Declaration", "Barangay Clearance", "Valid ID"]'::jsonb,
  '[
    {"title": "Prepare Building Plans", "description": "Hire a licensed architect or engineer to prepare building plans and specifications. Plans must comply with National Building Code and local zoning ordinances.", "order": 1},
    {"title": "Secure Clearances", "description": "Get barangay clearance, locational clearance, and environmental compliance certificate if required. For commercial buildings, additional clearances may be needed.", "order": 2},
    {"title": "Submit Application", "description": "Go to Office of the Building Official. Submit application form, building plans (5 sets), land title, tax declaration, and other requirements.", "order": 3},
    {"title": "Plan Review", "description": "Building Official reviews plans for compliance with building code, zoning, and safety standards. May require revisions. This takes 5-10 days.", "order": 4},
    {"title": "Pay Permit Fees", "description": "After plan approval, pay building permit fees at City Treasurer Office. Fees are based on project cost (typically 1-2% of total project cost).", "order": 5},
    {"title": "Receive Permit", "description": "Claim approved building permit and stamped plans. Post permit at construction site. Construction can now begin legally.", "order": 6},
    {"title": "Schedule Inspections", "description": "During construction, schedule required inspections (foundation, framing, electrical, plumbing, final). Pass all inspections before occupancy.", "order": 7}
  ]'::jsonb,
  '[
    {"question": "How much does a building permit cost?", "answer": "Fees are typically 1-2% of total project cost. For a ₱500,000 house, expect ₱5,000-₱10,000 in permit fees. Exact computation depends on project type and size.", "order": 1},
    {"question": "Can I start construction without a permit?", "answer": "No, constructing without a permit is illegal and may result in stop-work orders, fines, or demolition. Always secure a permit first.", "order": 2},
    {"question": "Do I need an architect for a small house?", "answer": "For residential buildings under 2 floors and less than 200 sqm, you may use a licensed engineer. Larger or commercial buildings require an architect.", "order": 3},
    {"question": "How long is a building permit valid?", "answer": "Building permits are typically valid for 1 year. If construction is not completed, you must apply for an extension before expiration.", "order": 4},
    {"question": "What inspections are required?", "answer": "Typical inspections include: foundation, framing, electrical, plumbing, and final inspection. Schedule these at appropriate construction stages.", "order": 5}
  ]'::jsonb,
  '{"name": "Office of the Building Official", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  '{"residential": ["Building Plans signed by licensed architect/engineer (5 sets)", "Land Title (Original and photocopy)", "Tax Declaration (current year)", "Barangay Clearance", "Locational Clearance", "Valid government-issued ID", "Bill of Materials and Cost Estimate", "Payment for permit fees"], "commercial": ["Building Plans signed by licensed architect (5 sets)", "Land Title (Original and photocopy)", "Tax Declaration (current year)", "Barangay Clearance", "Locational Clearance", "Environmental Compliance Certificate (if required)", "Fire Safety Evaluation Clearance", "Valid government-issued ID", "Bill of Materials and Cost Estimate", "Payment for permit fees"]}'::jsonb,
  ARRAY['occupancy-permit', 'barangay-clearance']
WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'building-permit');

-- ============================================
-- OCCUPANCY PERMIT (Certificate of Occupancy)
-- ============================================
INSERT INTO services (title, slug, category, description, fees, processing_time, office, requirements, steps, faq, office_details, requirements_by_type, related_services)
SELECT 
  'Certificate of Occupancy',
  'occupancy-permit',
  'Permits',
  'Certificate issued after final inspection confirming that a building complies with building codes and is safe for occupancy. Required before using a newly constructed or renovated building.',
  '₱500-₱2,000 (varies by building type)',
  '3-5 business days',
  'Office of the Building Official',
  '["Building Permit", "Final Inspection", "As-Built Plans", "Valid ID"]'::jsonb,
  '[
    {"title": "Complete Construction", "description": "Finish all construction work according to approved building plans. Ensure all electrical, plumbing, and structural work is complete.", "order": 1},
    {"title": "Prepare As-Built Plans", "description": "Have your architect/engineer prepare as-built plans showing actual construction. These should reflect any approved changes from original plans.", "order": 2},
    {"title": "Request Final Inspection", "description": "Submit request for final inspection at Office of the Building Official. Bring building permit and as-built plans.", "order": 3},
    {"title": "Undergo Final Inspection", "description": "Building inspector will check compliance with approved plans and building code. All systems (electrical, plumbing, fire safety) must be functional.", "order": 4},
    {"title": "Address Deficiencies", "description": "If inspector finds issues, correct them and request re-inspection. Repeat until all requirements are met.", "order": 5},
    {"title": "Pay Occupancy Fee", "description": "After passing final inspection, pay certificate of occupancy fee at City Treasurer Office.", "order": 6},
    {"title": "Claim Certificate", "description": "Receive Certificate of Occupancy. Building is now legally approved for use. Keep certificate for future transactions.", "order": 7}
  ]'::jsonb,
  '[
    {"question": "When should I apply for occupancy permit?", "answer": "Apply after construction is 100% complete and all systems are functional. Do not occupy the building before getting this certificate.", "order": 1},
    {"question": "Can I use the building without this certificate?", "answer": "No, occupying a building without a Certificate of Occupancy is illegal and unsafe. It may also affect insurance and future property transactions.", "order": 2},
    {"question": "What if my building fails inspection?", "answer": "Correct the deficiencies noted by the inspector and request re-inspection. You can reapply as many times as needed until you pass.", "order": 3},
    {"question": "Do I need this for renovations?", "answer": "Yes, if your renovation required a building permit, you also need a Certificate of Occupancy after completion.", "order": 4},
    {"question": "How long is the certificate valid?", "answer": "Certificate of Occupancy does not expire. It remains valid as long as the building use and structure remain unchanged.", "order": 5}
  ]'::jsonb,
  '{"name": "Office of the Building Official", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  '{"residential": ["Approved Building Permit", "As-Built Plans signed by architect/engineer", "Electrical Inspection Certificate", "Plumbing Inspection Certificate", "Sanitary Inspection Certificate", "Valid government-issued ID", "Payment for occupancy fee"], "commercial": ["Approved Building Permit", "As-Built Plans signed by architect/engineer", "Electrical Inspection Certificate", "Plumbing Inspection Certificate", "Sanitary Inspection Certificate", "Fire Safety Inspection Certificate", "Mechanical Inspection Certificate (if applicable)", "Valid government-issued ID", "Payment for occupancy fee"]}'::jsonb,
  ARRAY['building-permit', 'business-permit']
WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'occupancy-permit');

-- ============================================
-- REAL PROPERTY TAX PAYMENT
-- ============================================
INSERT INTO services (title, slug, category, description, fees, processing_time, office, requirements, steps, faq, office_details, requirements_by_type, related_services)
SELECT 
  'Real Property Tax Payment',
  'real-property-tax',
  'Payments',
  'Annual tax on land, buildings, and other real property improvements. Must be paid by property owners to the City Treasurer. Deadline is every January 31 for full year payment with discount.',
  'Based on assessed property value (1-2% of assessed value)',
  '15-30 minutes',
  'City Treasurer Office',
  '["Tax Declaration", "Previous Tax Receipt", "Valid ID"]'::jsonb,
  '[
    {"title": "Get Tax Declaration", "description": "If you do not have a tax declaration, get one from the City Assessor Office. Bring land title and valid ID. This is a one-time requirement.", "order": 1},
    {"title": "Check Tax Amount", "description": "Visit City Treasurer Office or check online (if available) to verify your property tax amount. Bring your Tax Declaration Number (TDN).", "order": 2},
    {"title": "Prepare Payment", "description": "Bring previous year tax receipt (if available), tax declaration, and valid ID. Know your TDN and property location.", "order": 3},
    {"title": "Go to City Treasurer", "description": "Visit City Treasurer Office at City Hall. Get queue number and wait for your turn. Office hours: Mon-Fri, 8AM-5PM.", "order": 4},
    {"title": "Pay Tax", "description": "Present tax declaration and previous receipt. Pay the assessed amount. Pay before January 31 to get 10-20% early payment discount.", "order": 5},
    {"title": "Receive Official Receipt", "description": "Get official receipt as proof of payment. Keep this for your records and for next year payment. Also needed for property transactions.", "order": 6}
  ]'::jsonb,
  '[
    {"question": "When is the deadline for property tax?", "answer": "Property tax for the full year is due every January 31. You can pay quarterly (March 31, June 30, Sept 30, Dec 31) but you will not get the early payment discount.", "order": 1},
    {"question": "What is the early payment discount?", "answer": "Pay the full year tax before January 31 to get 10-20% discount (varies by city ordinance). This is a significant savings for property owners.", "order": 2},
    {"question": "What if I miss the deadline?", "answer": "Late payments incur penalties and interest (typically 2% per month). Pay as soon as possible to minimize additional charges.", "order": 3},
    {"question": "Can I pay online?", "answer": "Some cities offer online payment. Check with Ormoc City Treasurer Office if this service is available. Otherwise, pay in person.", "order": 4},
    {"question": "What if I just bought the property?", "answer": "Transfer the tax declaration to your name first at the City Assessor Office. Then pay the current year tax. Previous owner should have paid up to the transfer date.", "order": 5}
  ]'::jsonb,
  '{"name": "City Treasurer Office", "location": "City Hall, Ground Floor", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  '{"property_owner": ["Tax Declaration (original or certified copy)", "Previous year Official Receipt (if available)", "Valid government-issued ID", "Payment (cash or check)"], "authorized_representative": ["Tax Declaration (original or certified copy)", "Previous year Official Receipt (if available)", "Authorization letter from property owner", "Valid ID of property owner (photocopy)", "Valid ID of representative (original)", "Payment (cash or check)"]}'::jsonb,
  ARRAY['tax-declaration', 'land-title-transfer']
WHERE NOT EXISTS (SELECT 1 FROM services WHERE slug = 'real-property-tax');

-- ============================================
-- UPDATE COMMUNITY TAX CERTIFICATE (CEDULA) - Enhance existing
-- ============================================
UPDATE services
SET 
  description = 'Community Tax Certificate (Cedula) is a basic tax document required for various transactions including barangay clearance, business permits, marriage license, and other government services. Required for all Filipino citizens 18 years and above.',
  fees = '₱5 (basic) + additional based on income and property',
  processing_time = '15-30 minutes',
  office = 'Barangay Hall or Municipal Treasurer Office',
  steps = '[
    {"title": "Determine Where to Apply", "description": "You can get Cedula at your Barangay Hall or at the Municipal Treasurer Office. Barangay is usually faster and more convenient.", "order": 1},
    {"title": "Prepare Information", "description": "Know your complete name, address, birthdate, occupation, and estimated annual income. You will need to declare these.", "order": 2},
    {"title": "Fill Out Form", "description": "At the office, fill out the Cedula application form. Declare your income and property honestly as this affects the fee.", "order": 3},
    {"title": "Compute Fee", "description": "Basic fee is ₱5. Additional ₱1 for every ₱1,000 of income over ₱10,000, and ₱1 for every ₱1,000 of property value. Most people pay ₱5-₱50.", "order": 4},
    {"title": "Pay and Receive", "description": "Pay the computed fee. Cedula is issued immediately. It is a small receipt-like document.", "order": 5}
  ]'::jsonb,
  faq = '[
    {"question": "Who needs to get Cedula?", "answer": "All Filipino citizens 18 years and above are required to have Cedula. It is needed for many government transactions.", "order": 1},
    {"question": "How much does Cedula cost?", "answer": "Minimum is ₱5. Additional fees based on declared income and property. Most people pay ₱5-₱50. High-income earners may pay more.", "order": 2},
    {"question": "How long is Cedula valid?", "answer": "Cedula is valid for one calendar year (January 1 to December 31). You need to get a new one every year.", "order": 3},
    {"question": "What if I have no income?", "answer": "Even if you have no income, you still need Cedula. You will pay the minimum fee of ₱5.", "order": 4},
    {"question": "Can I get Cedula from any barangay?", "answer": "No, you should get it from your barangay of residence. Some offices may allow you to get it from Municipal Treasurer regardless of residence.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "Barangay Hall or Municipal Treasurer Office", "location": "Your Barangay or City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  requirements_by_type = '{"individual": ["Valid government-issued ID", "Information: complete name, address, birthdate, occupation, income", "Payment: ₱5 minimum + additional based on income/property"], "corporation": ["SEC Registration Certificate", "Company information and gross income", "Valid ID of authorized representative", "Payment: Based on gross receipts"]}'::jsonb,
  related_services = ARRAY['barangay-clearance', 'business-permit']
WHERE slug = 'community-tax-certificate';
