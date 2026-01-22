-- Update existing Building Permit and Occupancy Permit with enhanced data

-- UPDATE BUILDING PERMIT
UPDATE services
SET 
  description = 'Required permit before constructing, renovating, or demolishing any structure. Ensures compliance with National Building Code and local zoning ordinances. Protects public safety and property rights.',
  fees = 'Varies (based on project cost and type)',
  processing_time = '7-14 business days',
  office = 'Office of the Building Official',
  steps = '[
    {"title": "Prepare Building Plans", "description": "Hire a licensed architect or engineer to prepare building plans and specifications. Plans must comply with National Building Code and local zoning ordinances.", "order": 1},
    {"title": "Secure Clearances", "description": "Get barangay clearance, locational clearance, and environmental compliance certificate if required. For commercial buildings, additional clearances may be needed.", "order": 2},
    {"title": "Submit Application", "description": "Go to Office of the Building Official. Submit application form, building plans (5 sets), land title, tax declaration, and other requirements.", "order": 3},
    {"title": "Plan Review", "description": "Building Official reviews plans for compliance with building code, zoning, and safety standards. May require revisions. This takes 5-10 days.", "order": 4},
    {"title": "Pay Permit Fees", "description": "After plan approval, pay building permit fees at City Treasurer Office. Fees are based on project cost (typically 1-2% of total project cost).", "order": 5},
    {"title": "Receive Permit", "description": "Claim approved building permit and stamped plans. Post permit at construction site. Construction can now begin legally.", "order": 6},
    {"title": "Schedule Inspections", "description": "During construction, schedule required inspections (foundation, framing, electrical, plumbing, final). Pass all inspections before occupancy.", "order": 7}
  ]'::jsonb,
  faq = '[
    {"question": "How much does a building permit cost?", "answer": "Fees are typically 1-2% of total project cost. For a ₱500,000 house, expect ₱5,000-₱10,000 in permit fees. Exact computation depends on project type and size.", "order": 1},
    {"question": "Can I start construction without a permit?", "answer": "No, constructing without a permit is illegal and may result in stop-work orders, fines, or demolition. Always secure a permit first.", "order": 2},
    {"question": "Do I need an architect for a small house?", "answer": "For residential buildings under 2 floors and less than 200 sqm, you may use a licensed engineer. Larger or commercial buildings require an architect.", "order": 3},
    {"question": "How long is a building permit valid?", "answer": "Building permits are typically valid for 1 year. If construction is not completed, you must apply for an extension before expiration.", "order": 4},
    {"question": "What inspections are required?", "answer": "Typical inspections include: foundation, framing, electrical, plumbing, and final inspection. Schedule these at appropriate construction stages.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "Office of the Building Official", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  requirements_by_type = '{"residential": ["Building Plans signed by licensed architect/engineer (5 sets)", "Land Title (Original and photocopy)", "Tax Declaration (current year)", "Barangay Clearance", "Locational Clearance", "Valid government-issued ID", "Bill of Materials and Cost Estimate", "Payment for permit fees"], "commercial": ["Building Plans signed by licensed architect (5 sets)", "Land Title (Original and photocopy)", "Tax Declaration (current year)", "Barangay Clearance", "Locational Clearance", "Environmental Compliance Certificate (if required)", "Fire Safety Evaluation Clearance", "Valid government-issued ID", "Bill of Materials and Cost Estimate", "Payment for permit fees"]}'::jsonb,
  related_services = ARRAY['occupancy-permit', 'barangay-clearance']
WHERE slug = 'building-permit';

-- UPDATE OCCUPANCY PERMIT
UPDATE services
SET 
  description = 'Certificate issued after final inspection confirming that a building complies with building codes and is safe for occupancy. Required before using a newly constructed or renovated building.',
  fees = '₱500-₱2,000 (varies by building type)',
  processing_time = '3-5 business days',
  office = 'Office of the Building Official',
  steps = '[
    {"title": "Complete Construction", "description": "Finish all construction work according to approved building plans. Ensure all electrical, plumbing, and structural work is complete.", "order": 1},
    {"title": "Prepare As-Built Plans", "description": "Have your architect/engineer prepare as-built plans showing actual construction. These should reflect any approved changes from original plans.", "order": 2},
    {"title": "Request Final Inspection", "description": "Submit request for final inspection at Office of the Building Official. Bring building permit and as-built plans.", "order": 3},
    {"title": "Undergo Final Inspection", "description": "Building inspector will check compliance with approved plans and building code. All systems (electrical, plumbing, fire safety) must be functional.", "order": 4},
    {"title": "Address Deficiencies", "description": "If inspector finds issues, correct them and request re-inspection. Repeat until all requirements are met.", "order": 5},
    {"title": "Pay Occupancy Fee", "description": "After passing final inspection, pay certificate of occupancy fee at City Treasurer Office.", "order": 6},
    {"title": "Claim Certificate", "description": "Receive Certificate of Occupancy. Building is now legally approved for use. Keep certificate for future transactions.", "order": 7}
  ]'::jsonb,
  faq = '[
    {"question": "When should I apply for occupancy permit?", "answer": "Apply after construction is 100% complete and all systems are functional. Do not occupy the building before getting this certificate.", "order": 1},
    {"question": "Can I use the building without this certificate?", "answer": "No, occupying a building without a Certificate of Occupancy is illegal and unsafe. It may also affect insurance and future property transactions.", "order": 2},
    {"question": "What if my building fails inspection?", "answer": "Correct the deficiencies noted by the inspector and request re-inspection. You can reapply as many times as needed until you pass.", "order": 3},
    {"question": "Do I need this for renovations?", "answer": "Yes, if your renovation required a building permit, you also need a Certificate of Occupancy after completion.", "order": 4},
    {"question": "How long is the certificate valid?", "answer": "Certificate of Occupancy does not expire. It remains valid as long as the building use and structure remain unchanged.", "order": 5}
  ]'::jsonb,
  office_details = '{"name": "Office of the Building Official", "location": "City Hall", "address": "Ormoc City, Leyte", "phone": "+63 53 561 6000", "hours": "Monday to Friday: 8:00 AM - 5:00 PM", "map_coordinates": {"lat": 11.0064, "lng": 124.6075}}'::jsonb,
  requirements_by_type = '{"residential": ["Approved Building Permit", "As-Built Plans signed by architect/engineer", "Electrical Inspection Certificate", "Plumbing Inspection Certificate", "Sanitary Inspection Certificate", "Valid government-issued ID", "Payment for occupancy fee"], "commercial": ["Approved Building Permit", "As-Built Plans signed by architect/engineer", "Electrical Inspection Certificate", "Plumbing Inspection Certificate", "Sanitary Inspection Certificate", "Fire Safety Inspection Certificate", "Mechanical Inspection Certificate (if applicable)", "Valid government-issued ID", "Payment for occupancy fee"]}'::jsonb,
  related_services = ARRAY['building-permit', 'business-permit']
WHERE slug = 'occupancy-permit';
