# Vercel Deployment

## ✅ Successfully Deployed!

**Project URL**: https://vercel.com/karljosebuenas-projects/betterormoc-ts
**Inspect URL**: https://vercel.com/karljosebuenas-projects/betterormoc-ts/RDDe4TXVtgiB7b38V

## Project Settings

- **Project Name**: betterormoc-ts
- **Scope**: karljosebuena's projects
- **Framework**: Next.js
- **Build Command**: `pnpm build`
- **Development Command**: `pnpm dev`
- **Install Command**: `pnpm install`
- **Output Directory**: `.next`

## Git Connection Issue

The Git connection failed because Vercel couldn't parse the custom remote URL:
```
git@personal:karljosebuena/betterormoc.git
```

### Solution Options:

#### Option 1: Use Standard GitHub URL (Recommended)
```bash
# Add GitHub remote
git remote add github git@github.com:karljosebuena/betterormoc.git

# Or update existing remote
git remote set-url origin git@github.com:karljosebuena/betterormoc.git

# Then reconnect in Vercel dashboard
```

#### Option 2: Manual Deployments
Continue using `vercel` CLI for deployments without Git integration.

## Environment Variables

Add these in Vercel dashboard (Settings > Environment Variables):

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Sentry
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn

# Site Config
NEXT_PUBLIC_SITE_URL=https://betterormoc.org
NEXT_PUBLIC_SITE_NAME=BetterOrmoc.org
```

## Deployment Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

## Next Steps

1. ✅ Project created on Vercel
2. ⏳ Add environment variables in dashboard
3. ⏳ Connect GitHub repository (optional)
4. ⏳ Configure custom domain
5. ⏳ Set up automatic deployments

## GitHub Actions Integration

Once Git is connected, GitHub Actions will automatically deploy:
- **Pull Requests** → Preview deployments
- **Main branch** → Production deployments

The workflow is already configured in `.github/workflows/ci.yml`.

## Secrets for GitHub Actions

Add these secrets to your GitHub repository:

```
VERCEL_TOKEN=<get from vercel.com/account/tokens>
VERCEL_ORG_ID=<from .vercel/project.json>
VERCEL_PROJECT_ID=<from .vercel/project.json>
```

## Notes

- The `.vercel` directory has been created locally
- This directory is gitignored by default
- Vercel project is linked and ready for deployments
