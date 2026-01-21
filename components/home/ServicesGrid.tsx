'use client'

import { useServices } from '@/lib/hooks/use-data'
import Link from 'next/link'
import { FileText, Building2, Heart, Briefcase, Users, Shield } from 'lucide-react'

const categoryIcons: Record<string, any> = {
    'Certificates & Vital Records': FileText,
    'Business, Trade & Investment': Briefcase,
    'Social Services & Assistance': Heart,
    'Health & Wellness': Heart,
    'Taxation & Payments': Building2,
    'Infrastructure & Public Works': Building2,
    'Agriculture & Economic Development': Users,
    'Public Safety & Security': Shield,
    'Environment & Natural Resources': Users,
    'Education & Scholarship': FileText,
    'Government Services': Building2,
    'Online Services': FileText,
}

export function ServicesGrid() {
    const { data: services, isLoading, error } = useServices()

    // Group services by category
    const servicesByCategory = services?.reduce((acc, service) => {
        const category = service.category
        if (!acc[category]) {
            acc[category] = []
        }
        acc[category].push(service)
        return acc
    }, {} as Record<string, typeof services>)

    if (isLoading) {
        return (
            <section id="services" className="section bg-gray-50">
                <div className="container">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
                        Municipal Services
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="h-48 animate-pulse rounded-lg bg-gray-200"
                            ></div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section id="services" className="section bg-gray-50">
                <div className="container">
                    <div className="rounded-lg bg-red-50 p-8 text-center">
                        <p className="text-red-600">Failed to load services</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="services" className="section bg-gray-50">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">
                        Municipal Services
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Access government services quickly and easily
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(servicesByCategory || {}).map(([category, categoryServices]) => {
                        const Icon = categoryIcons[category] || FileText
                        const count = categoryServices.length

                        return (
                            <Link
                                key={category}
                                href={`/services?category=${encodeURIComponent(category)}`}
                                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-green-500 hover:shadow-md"
                            >
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="rounded-lg bg-green-100 p-3 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                                        {count} {count === 1 ? 'service' : 'services'}
                                    </span>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600">
                                    {category}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    View all {category.toLowerCase()}
                                </p>
                            </Link>
                        )
                    })}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center rounded-lg bg-green-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    )
}
