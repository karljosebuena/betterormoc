import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HotlineBar } from '@/components/layout/HotlineBar'
import { InfoBar } from '@/components/layout/InfoBar'
import { QueryProvider } from '@/components/providers/QueryProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'BetterOrmoc.org | Official Portal',
    template: '%s | BetterOrmoc.org',
  },
  description:
    'Empowering the people of Ormoc with transparent access to the services, programs, and public funds of LGU Ormoc.',
  keywords: [
    'BetterOrmoc',
    'Ormoc City',
    'LGU Ormoc',
    'municipal services',
    'government transparency',
    'Ormoc Philippines',
  ],
  authors: [{ name: 'BetterOrmoc Team' }],
  creator: 'BetterOrmoc Team',
  publisher: 'BetterOrmoc.org',
  metadataBase: new URL('https://betterormoc.org'),
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://betterormoc.org',
    title: 'BetterOrmoc.org | Official Portal',
    description:
      'Empowering the people of Ormoc with transparent access to the services, programs, and public funds of LGU Ormoc.',
    siteName: 'BetterOrmoc.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BetterOrmoc.org | Official Portal',
    description:
      'Empowering the people of Ormoc with transparent access to the services, programs, and public funds of LGU Ormoc.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <QueryProvider>
          <HotlineBar />
          <InfoBar />
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}
