-- Clear existing officials data
TRUNCATE TABLE officials CASCADE;

-- Insert Real Officials Data
INSERT INTO officials (id, name, position, department, office_location, email, phone, photo_url, is_elected, display_order, created_at, updated_at)
VALUES 
-- Congressman
(1, 'Hon. Richard I. Gomez', 'Representative, 4th District of Leyte', 'Office of the Congressman', 'Ormoc City Hall', 'richard.gomez@house.gov.ph', NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/RICHARD - 1.png', true, 1, NOW(), NOW()),

-- Mayor
(2, 'Hon. Lucy Torres-Gomez', 'City Mayor', 'Office of the Mayor', 'Ormoc City Hall', 'mayor@ormoc.gov.ph', '(053) 561-4000', 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/LUCY - 2.png', true, 2, NOW(), NOW()),

-- Vice Mayor
(3, 'Hon. Leo Carmelo L. Locsin, Jr.', 'City Vice Mayor', 'Office of the Vice Mayor', 'Ormoc City Hall', 'vicemayor@ormoc.gov.ph', '(053) 561-4001', 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/VM - LOCSIN JR.png', true, 3, NOW(), NOW()),

-- Councilors (Ranked)
(4, 'Hon. Ari G. Larrazabal', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/LARRAZABAL.png', true, 4, NOW(), NOW()),
(5, 'Hon. Edmund B. Kierulf', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/KEIRULF.png', true, 5, NOW(), NOW()),
(6, 'Hon. Tomas R. Serafica', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/SERAFICA.png', true, 6, NOW(), NOW()),
(7, 'Hon. Jasper M. Lucero', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/LUCERO.png', true, 7, NOW(), NOW()),
(8, 'Hon. Peter M. Rodriguez', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/RODRIGUEZ.png', true, 8, NOW(), NOW()),
(9, 'Hon. Maria Carmen Jean T. Rama', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/TORRES-RAMA.png', true, 9, NOW(), NOW()),
(10, 'Hon. Eusebio Gerardo S. Penserga', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/PENSERGA.png', true, 10, NOW(), NOW()),
(11, 'Hon. Burt J. Pades', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/PADES.png', true, 11, NOW(), NOW()),
(12, 'Hon. Krizea Caessandra A. Mercadal', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/MERCADAL.png', true, 12, NOW(), NOW()),
(13, 'Hon. Lalaine A. Marcos', 'Sangguniang Panlungsod Member', 'Sangguniang Panlungsod', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/MARCOS.png', true, 13, NOW(), NOW()),

-- Ex-Officio
(14, 'Hon. Esteban V. Laurente', 'ABC President (Ex-Officio)', 'Liga ng mga Barangay', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/LAURENTE.png', true, 14, NOW(), NOW()),
(15, 'Hon. Jhana Lyka T. Calixtro', 'SK Federation President (Ex-Officio)', 'Sangguniang Kabataan', 'Ormoc City Hall', NULL, NULL, 'https://qmypmpbacylvhgmsorkt.supabase.co/storage/v1/object/public/city-officials-2025/CALIXTRO.png', true, 15, NOW(), NOW());

-- Reset sequence if needed (but IDs are explicit)
SELECT setval('officials_id_seq', (SELECT MAX(id) FROM officials));
