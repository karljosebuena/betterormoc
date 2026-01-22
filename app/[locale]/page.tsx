import { HeroSection } from '@/components/home/HeroSection'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { StatsSection } from '@/components/home/StatsSection'
import { OnlineServicesSection } from '@/components/home/OnlineServicesSection'
import { LeadershipSection } from '@/components/home/LeadershipSection'
import { WeatherMap } from '@/components/home/WeatherMap'
import { HistorySection } from '@/components/home/HistorySection'
import { NewsSection } from '@/components/home/NewsSection'
import { ContactSection } from '@/components/home/ContactSection'
import { generateMetadata as generateSEOMetadata, type Locale } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'metadata.home' })

    return generateSEOMetadata({
        locale: locale as Locale,
        title: t('title'),
        description: t('description'),
        path: '',
    })
}

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <StatsSection />
            <OnlineServicesSection />
            <LeadershipSection />
            <WeatherMap />
            <HistorySection />
            <NewsSection />
            <ContactSection />
        </>
    )
}
