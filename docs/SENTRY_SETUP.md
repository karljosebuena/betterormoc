# Sentry Configuration

This project uses Sentry for error tracking and performance monitoring.

## Setup Instructions

1. Create a Sentry account at https://sentry.io
2. Create a new Next.js project in Sentry
3. Copy your DSN from the project settings
4. Add the DSN to your `.env.local`:

```env
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
```

## Configuration Files

Sentry configuration files will be generated when you run:

```bash
npx @sentry/wizard@latest -i nextjs
```

This will create:
- `sentry.client.config.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`

## Features Enabled

- Error tracking
- Performance monitoring
- Session replay (optional)
- Release tracking

## Testing

To test Sentry integration, you can trigger a test error:

```typescript
throw new Error('Sentry test error');
```

Check your Sentry dashboard to see if the error was captured.
