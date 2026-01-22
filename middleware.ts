import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n/request'

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',

  // Locale detection based on Accept-Language header
  localeDetection: true,
})

export const config = {
  // Match all pathnames except for
  // - /api routes
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /public files (public folder)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
