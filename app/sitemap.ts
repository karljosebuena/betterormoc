import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/metadata'

const locales = ['en', 'fil', 'ceb'] as const
const routes = [
  '',
  '/about',
  '/services',
  '/government',
  '/statistics',
  '/budget',
  '/contact',
  '/search',
  '/ordinances',
  '/resolutions',
  '/faq',
  '/accessibility',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Generate entries for each route in each locale
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      })
    }
  }

  return sitemapEntries
}
