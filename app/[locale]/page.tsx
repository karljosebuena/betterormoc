import { HeroSection } from '@/components/home/HeroSection'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { StatsSection } from '@/components/home/StatsSection'
import { LeadershipSection } from '@/components/home/LeadershipSection'
import { WeatherMap } from '@/components/home/WeatherMap'
import { NewsSection } from '@/components/home/NewsSection'
import { ContactSection } from '@/components/home/ContactSection'

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <StatsSection />
            <LeadershipSection />
            <WeatherMap />
            <NewsSection />
            <ContactSection />
        </>
    )
}
