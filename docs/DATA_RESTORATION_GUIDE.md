# Quick Data Restoration Guide

## Problem
The `/statistics`, `/government`, and `/budget` pages are showing minimal data because the Supabase Cloud database hasn't been seeded yet.

## Solution
Run the consolidated seed file in your Supabase SQL Editor.

## Steps

1. **Open Supabase SQL Editor**
   - Go to: https://supabase.com/dashboard/project/YOUR_PROJECT/sql/new
   - Or: Dashboard → SQL Editor → New Query

2. **Copy the Seed File**
   - Open: `supabase/seed-all-data.sql`
   - Select all (Cmd+A) and copy (Cmd+C)

3. **Paste and Run**
   - Paste into the SQL Editor
   - Click "Run" or press Cmd+Enter

4. **Verify**
   - Check `/statistics` - should show 100+ data points
   - Check `/budget` - should show 15 major projects
   - Check `/government` - should show complete official roster

## What This Adds

- **Statistics**: 100+ data points across all categories
  - Demographics, Geography, Economy
  - Education, Health, Infrastructure
  - Agriculture, Tourism, Public Safety
  
- **Budget**: Complete FY 2025 budget
  - Overview (₱4.5B total)
  - Revenue sources
  - Expenditure categories
  - 15 major projects
  - Budget documents

- **Officials**: Full government roster
  - Mayor & Vice Mayor (verified)
  - Sangguniang Panlungsod members
  - Department Heads
  - Barangay Captains (110)

## Estimated Time
2-3 minutes total

## Troubleshooting

**If you get errors:**
- Make sure you're connected to the correct project
- Check that the tables exist (they should from the initial migration)
- Try running in smaller batches if needed

**If data doesn't appear:**
- Hard refresh your browser (Cmd+Shift+R)
- Check the API endpoints are working
- Verify Supabase environment variables in Vercel
