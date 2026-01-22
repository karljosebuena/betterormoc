import dynamic from 'next/dynamic'
import { generateMetadata as generateSEOMetadata, type Locale } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import { HeroSection } from '@/components/home/HeroSection'

const ServicesGrid = dynamic(() => import('@/components/home/ServicesGrid').then((mod) => mod.ServicesGrid))
const StatsSection = dynamic(() => import('@/components/home/StatsSection').then((mod) => mod.StatsSection))
const OnlineServicesSection = dynamic(() => import('@/components/home/OnlineServicesSection').then((mod) => mod.OnlineServicesSection))
const LeadershipSection = dynamic(() => import('@/components/home/LeadershipSection').then((mod) => mod.LeadershipSection))
const WeatherMap = dynamic(() => import('@/components/home/WeatherMap').then((mod) => mod.WeatherMap))
const HistorySection = dynamic(() => import('@/components/home/HistorySection').then((mod) => mod.HistorySection))
const NewsSection = dynamic(() => import('@/components/home/NewsSection').then((mod) => mod.NewsSection))

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
        </>
    )
}
