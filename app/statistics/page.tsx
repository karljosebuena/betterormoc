'use client'

import { useStatistics } from '@/lib/hooks/use-data'
import { TrendingUp, Users, Building2, MapPin, DollarSign, Briefcase } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    population: Users,
    economy: TrendingUp,
    services: Building2,
    infrastructure: MapPin,
    budget: DollarSign,
    business: Briefcase,
}

export default function StatisticsPage() {
    const { data: stats, isLoading } = useStatistics()

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">City Statistics</h1>
                    <p className="text-lg text-purple-50">
                        Key data and metrics about Ormoc City
                    </p>
                </div>
            </div>

            <div className="container py-12">
                {isLoading ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-40 animate-pulse rounded-lg bg-gray-200"></div>
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Statistics Grid */}
                        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {stats?.map((stat) => {
                                const Icon = iconMap[stat.category] || TrendingUp
                                return (
                                    <div
                                        key={stat.id}
                                        className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                                    >
                                        <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3 text-purple-600">
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

                        {/* Additional Info */}
                        <div className="rounded-lg border border-gray-200 bg-white p-8">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">About These Statistics</h2>
                            <p className="mb-4 text-gray-600">
                                These statistics are compiled from official government records and are updated
                                regularly to provide accurate information about Ormoc City.
                            </p>
                            <p className="text-sm text-gray-500">
                                Data sources include the Philippine Statistics Authority (PSA), local government
                                records, and official city reports.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
