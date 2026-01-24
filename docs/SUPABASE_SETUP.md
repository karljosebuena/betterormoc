# Supabase Setup Guide

## Prerequisites

- Supabase account (sign up at https://supabase.com)
- Supabase CLI installed

## Installation

```bash
# Install Supabase CLI
brew install supabase/tap/supabase

# Or with npm
npm install -g supabase
```

## Local Development

### 1. Start Supabase locally

```bash
# Initialize Supabase (first time only)
supabase init

# Start local Supabase
supabase start
```

This will start:

- PostgreSQL database
- Supabase Studio (GUI)
- API server
- Auth server

### 2. Run migrations

```bash
# Run all migrations
supabase db reset

# Or apply migrations incrementally
supabase migration up
```

### 3. Access local services

- **Studio**: http://localhost:54323
- **API URL**: http://localhost:54321
- **Database**: postgresql://postgres:postgres@localhost:54322/postgres

## Production Setup

### 1. Create Supabase project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Fill in project details
4. Wait for project to be provisioned

### 2. Link local project to remote

```bash
supabase link --project-ref <your-project-ref>
```

### 3. Push migrations to production

```bash
supabase db push
```

### 4. Get connection details

```bash
# Get project URL and anon key
supabase status
```

Add to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Database Schema

### Tables

1. **services** - Municipal services directory
2. **officials** - Government officials
3. **ordinances** - Municipal ordinances
4. **resolutions** - Municipal resolutions
5. **statistics** - Municipal statistics

### Row Level Security (RLS)

All tables have RLS enabled with public read access. Write access requires authentication (for future admin panel).

## Useful Commands

```bash
# Check migration status
supabase migration list

# Create new migration
supabase migration new <migration_name>

# Generate TypeScript types
supabase gen types typescript --local > lib/supabase/types.ts

# View database
supabase db diff

# Stop local Supabase
supabase stop
```

## Seeding Data

See `supabase/seed.sql` for sample data.

```bash
# Run seed file
supabase db reset --seed
```

## Troubleshooting

### Port conflicts

```bash
# Stop Supabase
supabase stop

# Start with different ports
supabase start --db-port 54323
```

### Reset database

```bash
supabase db reset
```

### View logs

```bash
supabase logs
```
