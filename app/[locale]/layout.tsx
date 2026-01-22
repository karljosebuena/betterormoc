import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HotlineBar } from '@/components/layout/HotlineBar'
import { InfoBar } from '@/components/layout/InfoBar'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { Toaster } from 'sonner'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: {
        default: 'BetterOrmoc.org | XOfficial Portal',
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
        title: 'BetterOrmoc.org | XOfficial Portal',
        description:
            'Empowering the people of Ormoc with transparent access to the services, programs, and public funds of LGU Ormoc.',
        siteName: 'BetterOrmoc.org',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BetterOrmoc.org | XOfficial Portal',
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

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    // Validate that the incoming locale parameter is valid
    const { locale } = await params
    console.log('[LocaleLayout] Received locale:', locale)
    if (!locales.includes(locale as any)) {
        console.error('[LocaleLayout] Validation failed for:', locale, 'Valid:', locales)
        notFound()
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Get messages for the locale
    const messages = await getMessages()

    return (
        <html lang={locale} className={inter.variable}>
            <body className="antialiased">
                <NextIntlClientProvider messages={messages}>
                    <QueryProvider>
                        <HotlineBar />
                        <InfoBar />
                        <DisclaimerBanner />
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </QueryProvider>
                    <Toaster position="top-right" richColors />
                </NextIntlClientProvider>
            </body>
            {/* Chart.js for statistics and budget visualizations */}
            <Script
                src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"
                strategy="beforeInteractive"
            />
        </html>
    )
}
