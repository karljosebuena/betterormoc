# Supabase Database Files

## 📁 Production Seed File

### `seed-production.sql` ⭐
**THE ONLY FILE YOU NEED FOR PRODUCTION DATABASE RESETS**

This master file contains ALL latest data:
- ✅ **150+ Statistics** (PSA 2024 Census)
- ✅ **Complete 2025 Budget** (₱4.5 Billion)
- ✅ **Officials** (Mayor, Vice Mayor)
- ✅ **All Categories**: Demographics, Economy, Education, Health, Infrastructure, etc.

**Usage**:
```bash
# Method 1: npm script (recommended)
npm run db:seed-production

# Method 2: Direct psql
psql "$SUPABASE_DB_URL" -f supabase/seed-production.sql

# Method 3: Supabase SQL Editor
# Copy contents and run in https://supabase.com/dashboard/project/qmypmpbacylvhgmsorkt/sql
```

---

## 📂 Other Files (Keep for Reference)

### Active Seed Files
- `seed-statistics-ormoc.sql` - Statistics only (for partial updates)
- `seed-all-data.sql` - Legacy comprehensive seed (deprecated, use seed-production.sql)
- `seed-budget-2025.sql` - Budget data only
- `seed-officials-2025.sql` - Officials only
- `seed-ordinances-2024-2025.sql` - Ordinances
- `seed-resolutions-2024-2025.sql` - Resolutions
- `seed.sql` - Generated seed file (from scripts/generate-seed.js)

### Configuration
- `config.toml` - Supabase local configuration
- `migrations/` - Database schema migrations

---

## 🚀 Quick Start

### Production Database Reset

1. **Get your database URL** from Supabase Dashboard
2. **Set environment variable**:
   ```bash
   export SUPABASE_DB_URL='postgresql://postgres.qmypmpbacylvhgmsorkt:[PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres'
   ```
3. **Run the seed**:
   ```bash
   npm run db:seed-production
   ```

### Verify
- Visit `/statistics` - Should show **238,545** population
- Check data source says **"PSA 2024 Census"**
- Budget page shows **₱4.5 Billion** for 2025

---

## 📊 What's Included in seed-production.sql

### Statistics (150+ data points)
- Demographics (Population: 238,545)
- Geography (Land Area: 613.60 km²)
- Economy (8,500+ businesses)
- Education (134 schools, 98.2% literacy)
- Health (7 hospitals, 110 health stations)
- Infrastructure (850 km roads, 45 bridges)
- Social Services (18,500+ seniors, 4,200+ PWDs)
- Environment (28% forest cover)
- Agriculture (28,000+ farmers)
- Public Safety (8 police stations, 5 fire stations)
- Tourism (120,000+ annual visitors)
- Barangay Population (Top 20)
- Historical Trends (1990-2024)

### Budget 2025 (₱4.5 Billion)
- Revenue Sources (11 sources)
- Expenditure Categories (23 categories)
- Major Projects (15 projects)
- Budget Documents (3 documents)

### Officials
- Mayor: Hon. Lucy Torres-Gomez
- Vice Mayor: Hon. Leo Carmelo "Toto" Locsin Jr.

---

## 🔧 Maintenance

### When to Update seed-production.sql
- ✅ New census data released
- ✅ Budget approved for new fiscal year
- ✅ New officials elected
- ✅ Major data corrections

### How to Update
1. Edit `seed-production.sql` directly
2. Test locally first
3. Commit changes
4. Run on production

---

## 📝 Data Sources

- **PSA 2024 Census** - Population and demographics
- **LGU Ormoc** - Budget, officials, programs
- **DILG** - Government reports
- **DTI** - Business and economic data
- **DOH** - Health statistics
- **DepEd** - Education data

---

**Last Updated**: 2026-01-25  
**Data Version**: 2024-2025  
**Maintained by**: BetterOrmoc Team
