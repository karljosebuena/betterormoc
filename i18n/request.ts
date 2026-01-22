import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// Supported locales
export const locales = ['en', 'fil', 'ceb'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  console.log('[i18n/request] Config requested for:', locale)

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    console.error('[i18n/request] Invalid locale:', locale)
    notFound()
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
