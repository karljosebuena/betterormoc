'use client'

import dynamic from 'next/dynamic'
import { WeatherCard } from './WeatherCard'

// Dynamically import MapCard to avoid SSR issues with Leaflet
const MapCard = dynamic(() => import('./MapCard').then((mod) => ({ default: mod.MapCard })), {
    ssr: false,
    loading: () => (
        <div className="flex h-[400px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
            <p className="text-gray-500">Loading map...</p>
        </div>
    ),
})

export function WeatherMap() {
    return (
        <section className="section bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Weather & Location</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Current weather conditions and location of Ormoc City
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Weather Card */}
                    <WeatherCard />

                    {/* Map Card */}
                    <MapCard />
                </div>
            </div>
        </section>
    )
}
