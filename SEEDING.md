# Database Seeding Guide

## Overview
The `seed.sql` file contains placeholder data adapted from BetterSolano for BetterOrmoc. This data will populate your Supabase database so all pages render with content immediately.

## Data Summary
- **57 Services** across 10 categories
- **10 Officials** (Mayor, Vice Mayor, 8 Councilors)
- **5 Ordinances**
- **40 Resolutions**
- **8 Statistics**

All text has been adapted from "Solano, Nueva Vizcaya" to "Ormoc, Leyte".

## How to Apply Seed Data

### Option 1: Using Supabase CLI (Recommended)
```bash
# Reset database and apply all migrations + seed
supabase db reset

# Or apply seed only (if migrations already applied)
supabase db seed
```

### Option 2: Using psql Directly
```bash
# Connect to your Supabase database
psql "postgresql://postgres:[YOUR-PASSWORD]@[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Run the seed file
\i supabase/seed.sql
```

### Option 3: Using Supabase Dashboard
1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `supabase/seed.sql`
4. Paste and run the SQL

## Regenerating Seed Data

If BetterSolano data changes, regenerate the seed file:

```bash
node scripts/generate-seed.js
```

This will:
1. Read BetterSolano JSON files from `../bettersolano/data/`
2. Adapt all text (Solano → Ormoc, Nueva Vizcaya → Leyte)
3. Generate fresh `supabase/seed.sql`

## Next Steps

After seeding:
1. Verify data in Supabase dashboard
2. Check that API routes return data
3. Confirm pages render with content
4. Replace with real Ormoc data when available

## Important Notes

- ⚠️ **This is placeholder data** from BetterSolano
- 🔄 Replace with actual Ormoc data when available
- 📝 The seed file uses `TRUNCATE CASCADE` to clear existing data
- 🔐 Ensure RLS policies are enabled for public read access
