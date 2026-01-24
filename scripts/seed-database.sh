#!/bin/bash
# Quick Database Seeding Script
# Run this to populate your Supabase database with all data

set -e

echo "🌱 BetterOrmoc Database Seeding Script"
echo "======================================"
echo ""

# Check if SUPABASE_DB_URL is set
if [ -z "$SUPABASE_DB_URL" ]; then
  echo "❌ Error: SUPABASE_DB_URL environment variable is not set"
  echo ""
  echo "Please set it first:"
  echo "  export SUPABASE_DB_URL='postgresql://postgres:[YOUR-PASSWORD]@[YOUR-PROJECT-REF].supabase.co:5432/postgres'"
  echo ""
  echo "You can find this in your Supabase Dashboard:"
  echo "  Project Settings → Database → Connection String (URI)"
  exit 1
fi

echo "✅ SUPABASE_DB_URL is set"
echo "📂 Running production seed file: supabase/seed-production.sql"
echo ""

# Run the seed file
psql "$SUPABASE_DB_URL" -f supabase/seed-production.sql

echo ""
echo "✅ Database seeding complete!"
echo ""
echo "Verify the data:"
echo "  - /statistics page should show 100+ data points"
echo "  - /budget page should show 15 major projects"
echo "  - /government page should show complete roster"
echo ""
