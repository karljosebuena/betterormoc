import { getTranslations } from 'next-intl/server'

export const siteConfig = {
  name: 'BetterOrmoc',
  description:
    'Empowering the people of Ormoc with transparent access to services, programs, and public funds of LGU Ormoc.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://betterormoc.vercel.app',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/karljosebuena/betterormoc',
  },
  keywords: [
    'Ormoc',
    'LGU Ormoc',
    'Ormoc City',
    'Government Services',
    'Transparency',
    'Public Services',
    'Philippines',
    'Leyte',
  ],
}

export type Locale = 'en' | 'fil' | 'ceb'

interface MetadataParams {
  locale: Locale
  title?: string
  description?: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}

export async function generateMetadata({
  locale,
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
}: MetadataParams) {
  const t = await getTranslations({ locale, namespace: 'metadata' })

  const pageTitle = title || t('defaultTitle')
  const fullTitle = `${pageTitle} | ${siteConfig.name}`
  const pageDescription = description || t('defaultDescription')
  const url = `${siteConfig.url}/${locale}${path}`
  const allKeywords = [...siteConfig.keywords, ...keywords]

  return {
    title: fullTitle,
    description: pageDescription,
    keywords: allKeywords,
    authors: [{ name: 'BetterOrmoc Team' }],
    creator: 'BetterOrmoc',
    publisher: 'BetterOrmoc',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/en${path}`,
        fil: `${siteConfig.url}/fil${path}`,
        ceb: `${siteConfig.url}/ceb${path}`,
      },
    },
    openGraph: {
      type: 'website',
      locale:
        locale === 'fil' ? 'fil_PH' : locale === 'ceb' ? 'ceb_PH' : 'en_PH',
      url,
      title: fullTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
