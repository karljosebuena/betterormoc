'use client'

import { use } from 'react'
import { useServices } from '@/lib/hooks/use-data'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Clock, DollarSign, Building2, FileText, ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { notFound } from 'next/navigation'

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const { data: services, isLoading } = useServices()
    const service = services?.find((s) => s.slug === slug)

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="container py-12">
                    <div className="mx-auto max-w-4xl space-y-6">
                        <div className="h-8 w-64 animate-pulse rounded bg-gray-200"></div>
                        <div className="h-12 w-full animate-pulse rounded bg-gray-200"></div>
                        <div className="h-64 w-full animate-pulse rounded bg-gray-200"></div>
                    </div>
                </div>
            </div>
        )
    }

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-12 text-white">
                <div className="container">
                    <Link
                        href="/services"
                        className="mb-4 inline-flex items-center gap-2 text-sm text-green-100 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Services
                    </Link>
                    <h1 className="mb-2 text-4xl font-bold">{service.title}</h1>
                    <p className="text-green-100">{service.category}</p>
                </div>
            </div>

            <div className="container py-8">
                <div className="mx-auto max-w-4xl">
                    <Breadcrumb
                        items={[
                            { label: 'Services', href: '/services' },
                            { label: service.title },
                        ]}
                    />

                    <div className="mt-8 space-y-8">
                        {/* Overview */}
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">Overview</h2>
                            <p className="text-gray-600">
                                {service.description || 'No description available for this service.'}
                            </p>
                        </div>

                        {/* Quick Info */}
                        <div className="grid gap-6 md:grid-cols-3">
                            {service.fees && (
                                <div className="rounded-lg border border-gray-200 bg-white p-6">
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="rounded-lg bg-green-100 p-3 text-blue-900">
                                            <DollarSign className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900">Fees</h3>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{service.fees}</p>
                                </div>
                            )}

                            {service.processing_time && (
                                <div className="rounded-lg border border-gray-200 bg-white p-6">
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                                            <Clock className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900">Processing Time</h3>
                                    </div>
                                    <p className="text-lg font-medium text-gray-900">{service.processing_time}</p>
                                </div>
                            )}

                            {service.office && (
                                <div className="rounded-lg border border-gray-200 bg-white p-6">
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
                                            <Building2 className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900">Office</h3>
                                    </div>
                                    <p className="text-sm text-gray-900">{service.office}</p>
                                </div>
                            )}
                        </div>

                        {/* Requirements */}
                        {service.requirements && Array.isArray(service.requirements) && service.requirements.length > 0 && (
                            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                                <div className="mb-4 flex items-center gap-3">
                                    <FileText className="h-6 w-6 text-blue-900" />
                                    <h2 className="text-2xl font-bold text-gray-900">Requirements</h2>
                                </div>
                                <ul className="space-y-2">
                                    {service.requirements.map((req, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-600">
                                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-900"></span>
                                            <span className="capitalize">{String(req)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Contact Information */}
                        {service.contact_info && (
                            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">Contact Information</h2>
                                <div className="text-gray-600">
                                    {typeof service.contact_info === 'object' && (
                                        <pre className="whitespace-pre-wrap">{JSON.stringify(service.contact_info, null, 2)}</pre>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Call to Action */}
                        <div className="rounded-lg border border-green-200 bg-blue-50 p-8 text-center">
                            <h3 className="mb-2 text-xl font-bold text-gray-900">Need Help?</h3>
                            <p className="mb-6 text-gray-600">
                                Contact us if you have questions about this service
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
