'use client'

import { useStatistics } from '@/lib/hooks/use-data'
import { TrendingUp, Users, Building2, MapPin } from 'lucide-react'

const iconMap: Record<string, any> = {
    population: Users,
    economy: TrendingUp,
    services: Building2,
    infrastructure: MapPin,
}

export function StatsSection() {
    const { data: stats, isLoading } = useStatistics()

    if (isLoading) {
        return (
            <section className="section bg-white">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-32 animate-pulse rounded-lg bg-gray-200"></div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section bg-white">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Ormoc at a Glance</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Key statistics about our city
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats?.map((stat) => {
                        const Icon = iconMap[stat.category] || TrendingUp
                        return (
                            <div
                                key={stat.id}
                                className="rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3 text-green-600">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                <div className="mt-2 text-sm font-medium text-gray-600">{stat.label}</div>
                                {stat.year && (
                                    <div className="mt-1 text-xs text-gray-500">As of {stat.year}</div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
