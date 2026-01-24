# Vercel Deployment

## ✅ Successfully Deployed & Connected!

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

## Git Connection Status

✅ **Connected!** Git repository manually connected in Vercel dashboard.

### Automatic Deployments Enabled:

- **Push to `main`** → Production deployment
- **Pull Requests** → Preview deployments
- **Commits** → Automatic builds

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
