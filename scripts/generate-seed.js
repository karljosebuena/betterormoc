#!/usr/bin/env node

/**
 * BetterSolano to BetterOrmoc Data Adapter
 * Converts BetterSolano JSON data to Supabase seed SQL for BetterOrmoc
 */

const fs = require('fs');
const path = require('path');

// Paths
const BETTERSOLANO_DATA = '/Users/karljosebuena/Documents/personal/repos/bettersolano/data';
const OUTPUT_FILE = '/Users/karljosebuena/Documents/personal/repos/betterormoc-ts/supabase/seed.sql';

// Category mapping: simplify to 1-word names
const CATEGORY_MAP = {
  'Certificates & Vital Records': 'Certificates',
  'Business, Trade & Investment': 'Business',
  'Social Services & Assistance': 'Social',
  'Health & Wellness': 'Health',
  'Taxation & Payments': 'Taxation',
  'Agriculture & Economic Development': 'Agriculture',
  'Infrastructure & Public Works': 'Infrastructure',
  'Education & Scholarship': 'Education',
  'Public Safety & Security': 'Safety',
  'Environment & Natural Resources': 'Environment',
  'Government Services': 'Government',
  'Online Services': 'Online'
};

// Helper to escape SQL strings
function escapeSql(str) {
  if (!str) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

// Helper to adapt text from Solano to Ormoc
function adaptText(text) {
  if (!text) return text;
  return String(text)
    .replace(/Solano/g, 'Ormoc')
    .replace(/Nueva Vizcaya/g, 'Leyte')
    .replace(/solano\.gov\.ph/g, 'ormoc.gov.ph');
}

// Helper to simplify category names
function simplifyCategory(category) {
  return CATEGORY_MAP[category] || category;
}

// Generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

console.log('🔄 Loading BetterSolano data...');

// Load JSON files
const servicesData = JSON.parse(fs.readFileSync(path.join(BETTERSOLANO_DATA, 'services.json'), 'utf8'));
const officialsData = JSON.parse(fs.readFileSync(path.join(BETTERSOLANO_DATA, 'officials.json'), 'utf8'));
const ordinancesData = JSON.parse(fs.readFileSync(path.join(BETTERSOLANO_DATA, 'ordinances.json'), 'utf8'));
const resolutionsData = JSON.parse(fs.readFileSync(path.join(BETTERSOLANO_DATA, 'resolutions.json'), 'utf8'));

console.log(`✅ Loaded ${servicesData.services.length} services`);
console.log(`✅ Loaded officials data`);
console.log(`✅ Loaded ${ordinancesData.ordinances.length} ordinances`);
console.log(`✅ Loaded ${resolutionsData.resolutions.length} resolutions`);

// Start building SQL
let sql = `-- BetterOrmoc Seed Data
-- Adapted from BetterSolano
-- Generated: ${new Date().toISOString()}

-- Clear existing data
TRUNCATE TABLE services, officials, ordinances, resolutions, statistics CASCADE;

-- ============================================
-- SERVICES
-- ============================================

`;

// Process services
servicesData.services.forEach((service, index) => {
  const id = index + 1;
  const title = adaptText(service.title);
  const slug = generateSlug(service.title);
  const category = simplifyCategory(adaptText(service.category));
  const description = adaptText(service.description);
  const fees = service.fee || 'Contact office';
  const processingTime = service.processingTime || 'Varies';
  const office = adaptText(service.office || 'Municipal Office');
  const requirements = service.requirements ? JSON.stringify(service.requirements) : '[]';
  
  sql += `INSERT INTO services (id, title, slug, category, description, fees, processing_time, office, requirements, created_at, updated_at)
VALUES (${id}, ${escapeSql(title)}, ${escapeSql(slug)}, ${escapeSql(category)}, ${escapeSql(description)}, ${escapeSql(fees)}, ${escapeSql(processingTime)}, ${escapeSql(office)}, '${requirements}'::jsonb, NOW(), NOW());

`;
});

// ============================================
// OFFICIALS
// ============================================

sql += `
-- ============================================
-- OFFICIALS
-- ============================================

`;

// Mayor
sql += `INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (1, 'Hon. Richard I. Gomez', 'City Mayor', 'Office of the Mayor', 'Ormoc City Hall', 'mayor@ormoc.gov.ph', '(053) 561-4000', NULL, true, 1, NOW(), NOW());

`;

// Vice Mayor
sql += `INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (2, 'Hon. Leo Carmelo A. Locsin', 'City Vice Mayor', 'Office of the Vice Mayor', 'Ormoc City Hall', 'vicemayor@ormoc.gov.ph', '(053) 561-4001', NULL, true, 2, NOW(), NOW());

`;

// Councilors (8 members)
for (let i = 1; i <= 8; i++) {
  sql += `INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES (${i + 2}, 'Hon. Councilor ${i}', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', 'sp${i}@ormoc.gov.ph', '(053) 561-40${10 + i}', NULL, true, ${i + 2}, NOW(), NOW());

`;
}

// ============================================
// ORDINANCES
// ============================================

sql += `
-- ============================================
-- ORDINANCES
-- ============================================

`;

ordinancesData.ordinances.forEach((ordinance, index) => {
  const id = index + 1;
  const number = ordinance.number || `ORD-2024-${String(id).padStart(3, '0')}`;
  const title = adaptText(ordinance.title);
  const description = adaptText(ordinance.description || ordinance.title);
  const year = ordinance.year || 2024;
  const dateApproved = ordinance.dateApproved || '2024-01-01';
  
  sql += `INSERT INTO ordinances (id, ordinance_number, title, description, year, date_approved, created_at, updated_at)
VALUES (${id}, ${escapeSql(number)}, ${escapeSql(title)}, ${escapeSql(description)}, ${year}, '${dateApproved}', NOW(), NOW());

`;
});

// ============================================
// RESOLUTIONS
// ============================================

sql += `
-- ============================================
-- RESOLUTIONS
-- ============================================

`;

resolutionsData.resolutions.forEach((resolution, index) => {
  const id = index + 1;
  const number = resolution.number || `RES-2024-${String(id).padStart(3, '0')}`;
  const title = adaptText(resolution.title);
  const description = adaptText(resolution.description || resolution.title);
  const year = resolution.year || 2024;
  const dateApproved = resolution.dateApproved || '2024-01-01';
  
  sql += `INSERT INTO resolutions (id, resolution_number, title, description, year, date_approved, created_at, updated_at)
VALUES (${id}, ${escapeSql(number)}, ${escapeSql(title)}, ${escapeSql(description)}, ${year}, '${dateApproved}', NOW(), NOW());

`;
});

// ============================================
// STATISTICS
// ============================================

sql += `
-- ============================================
-- STATISTICS
-- ============================================

INSERT INTO statistics (id, category, label, value, year, created_at, updated_at)
VALUES 
(1, 'population', 'Total Population', '230,998', 2020, NOW(), NOW()),
(2, 'population', 'Households', '52,140', 2020, NOW(), NOW()),
(3, 'economy', 'GDP Growth', '6.2%', 2023, NOW(), NOW()),
(4, 'economy', 'Employment Rate', '94.5%', 2023, NOW(), NOW()),
(5, 'services', 'Barangays', '110', 2024, NOW(), NOW()),
(6, 'services', 'Public Schools', '87', 2024, NOW(), NOW()),
(7, 'infrastructure', 'Road Network', '450 km', 2024, NOW(), NOW()),
(8, 'infrastructure', 'Health Facilities', '15', 2024, NOW(), NOW());

-- Reset sequences
SELECT setval('services_id_seq', (SELECT MAX(id) FROM services));
SELECT setval('officials_id_seq', (SELECT MAX(id) FROM officials));
SELECT setval('ordinances_id_seq', (SELECT MAX(id) FROM ordinances));
SELECT setval('resolutions_id_seq', (SELECT MAX(id) FROM resolutions));
SELECT setval('statistics_id_seq', (SELECT MAX(id) FROM statistics));
`;

// Write to file
fs.writeFileSync(OUTPUT_FILE, sql);

console.log('\n✅ Seed file generated successfully!');
console.log(`📁 Output: ${OUTPUT_FILE}`);
console.log(`\n📊 Summary:`);
console.log(`   - ${servicesData.services.length} services`);
console.log(`   - 10 officials`);
console.log(`   - ${ordinancesData.ordinances.length} ordinances`);
console.log(`   - ${resolutionsData.resolutions.length} resolutions`);
console.log(`   - 8 statistics`);
console.log(`\n🎨 Categories simplified to 1-word names:`);
Object.entries(CATEGORY_MAP).forEach(([old, newCat]) => {
  console.log(`   ${old} → ${newCat}`);
});
