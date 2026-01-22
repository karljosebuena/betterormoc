'use client'

import { TrendingUp, Users, MapPin, Award } from 'lucide-react'
import { Link } from '@/i18n/navigation'

const topStats = [
    {
        id: '1',
        value: '250,000+',
        label: 'Population',
        description: 'Estimated residents',
        year: '2024',
        icon: Users,
    },
    {
        id: '2',
        value: '110',
        label: 'Barangays',
        description: 'Administrative divisions',
        year: '2024',
        icon: MapPin,
    },
    {
        id: '3',
        value: '613.6 km²',
        label: 'Land Area',
        description: 'Total city coverage',
        year: '2024',
        icon: MapPin,
    },
    {
        id: '4',
        value: '1st Class',
        label: 'City Classification',
        description: 'Income classification',
        year: '2024',
        icon: Award,
    },
]

export function StatsSection() {
    return (
        <section className="section bg-white">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Ormoc at a Glance</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Key statistics about our city
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {topStats.map((stat) => {
                        const Icon = stat.icon
                        return (
                            <Link
                                key={stat.id}
                                href="/statistics"
                                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-900 hover:shadow-md"
                            >
                                <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-3 text-blue-900 transition-colors group-hover:bg-blue-900 group-hover:text-white">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                <div className="mt-2 text-sm font-medium text-gray-900">{stat.label}</div>
                                <div className="mt-1 text-xs text-gray-500">{stat.description}</div>
                                {stat.year && (
                                    <div className="mt-2 text-xs text-gray-400">As of {stat.year}</div>
                                )}
                            </Link>
                        )
                    })}
                </div>

                {/* View All Stats Link */}
                <div className="mt-8 text-center">
                    <Link
                        href="/statistics"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                        View all statistics
                        <TrendingUp className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
