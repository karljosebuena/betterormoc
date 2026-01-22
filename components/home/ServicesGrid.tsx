'use client'

import { Link } from '@/i18n/navigation'
import { FileText, Briefcase, Building2, FileCheck, Heart, Grid3x3, ArrowRight } from 'lucide-react'

const topServices = [
    {
        slug: 'birth-certificate',
        title: 'Birth Certificate',
        description: 'Birth, marriage, death certificates',
        icon: FileText,
        category: 'Certificates',
    },
    {
        slug: 'business-permit-new',
        title: 'Business Permit',
        description: 'New permits and renewals',
        icon: Briefcase,
        category: 'Business',
    },
    {
        slug: 'real-property-tax-payment',
        title: 'Real Property Tax',
        description: 'Property and business taxes',
        icon: Building2,
        category: 'Taxation',
    },
    {
        slug: 'barangay-clearance',
        title: 'Barangay Clearance',
        description: 'Certificate of residence from your barangay',
        icon: FileCheck,
        category: 'Certificates',
    },
    {
        slug: 'health-certificate',
        title: 'Health Certificate',
        description: 'Medical assistance & programs',
        icon: Heart,
        category: 'Health',
    },
]

export function ServicesGrid() {
    return (
        <section id="services" className="section bg-gray-50">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">
                        Popular Services
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Quick access to frequently requested municipal services
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Service Cards */}
                    {topServices.map((service) => {
                        const Icon = service.icon
                        return (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-900 hover:shadow-md"
                            >
                                <div className="flex-shrink-0 rounded-lg bg-blue-50 p-3 text-blue-900 transition-colors group-hover:bg-blue-900 group-hover:text-white">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900 group-hover:text-blue-900">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-1">
                                        {service.description}
                                    </p>
                                </div>
                                <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-900" />
                            </Link>
                        )
                    })}

                    {/* View All Services Card */}
                    <Link
                        href="/services"
                        className="group flex items-center gap-4 rounded-lg border border-blue-900 bg-blue-900 p-6 shadow-md transition-all hover:bg-blue-800 hover:shadow-lg"
                    >
                        <div className="flex-shrink-0 rounded-lg bg-white/20 p-3 text-white">
                            <Grid3x3 className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="mb-1 text-lg font-semibold text-white">
                                View All Services
                            </h3>
                            <p className="text-sm text-blue-100">
                                Browse complete directory
                            </p>
                        </div>
                        <ArrowRight className="h-5 w-5 flex-shrink-0 text-white transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
