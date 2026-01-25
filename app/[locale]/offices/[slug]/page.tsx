'use client'

import { useParams } from 'next/navigation'
import { useServices } from '@/lib/hooks/use-data'
import { ServiceCard } from '@/components/services/ServiceCard'
import { Building2, MapPin, Phone, Clock, Mail } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { OfficeDetails } from '@/lib/supabase/types'

export default function OfficePage() {
    const params = useParams()
    const slug = params.slug as string
    const { data: services, isLoading } = useServices()

    // Helper to check if office name matches slug
    const matchesSlug = (officeName: string) => {
        const s = officeName
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '')
        return s === slug
    }

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="text-gray-600">Loading office details...</div>
            </div>
        )
    }

    if (!services) return null

    // Filter services belonging to this office
    const officeServices = services.filter(
        (s) => s.office && matchesSlug(s.office)
    )

    if (officeServices.length === 0) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="mb-4 text-2xl font-bold text-gray-900">
                        Office Not Found
                    </h1>
                    <Link href="/services" className="text-blue-900 hover:underline">
                        Back to Services
                    </Link>
                </div>
            </div>
        )
    }

    // Extract office details from the first service that has them
    // (Assuming consistency across services for the same office)
    const officeName = officeServices[0].office
    const officeInfo = officeServices.find((s) => s.office_details)?.office_details as OfficeDetails | undefined

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                <div className="container">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                        <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="mb-4 text-4xl font-bold">{officeName}</h1>
                    <p className="text-lg text-blue-50">
                        Responsible office for {officeServices.length} municipal services
                    </p>
                </div>
            </div>

            <div className="container py-12">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Content: Services List */}
                    <div className="lg:col-span-2">
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">
                            Services Offered
                        </h2>
                        <div className="grid gap-6">
                            {officeServices.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar: Office Info */}
                    <div>
                        <div className="sticky top-24 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold text-gray-900">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                {officeInfo?.location && (
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 shrink-0 text-gray-400" />
                                        <div>
                                            <p className="font-medium text-gray-900">Location</p>
                                            <p className="text-sm text-gray-600">
                                                {officeInfo.location}
                                            </p>
                                            {officeInfo.address && (
                                                <p className="text-sm text-gray-500">
                                                    {officeInfo.address}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {officeInfo?.hours && (
                                    <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 shrink-0 text-gray-400" />
                                        <div>
                                            <p className="font-medium text-gray-900">Office Hours</p>
                                            <p className="text-sm text-gray-600">{officeInfo.hours}</p>
                                        </div>
                                    </div>
                                )}

                                {(officeInfo?.phone || officeInfo?.email) && (
                                    <div className="border-t border-gray-100 pt-4">
                                        {officeInfo.phone && (
                                            <div className="mb-3 flex items-start gap-3">
                                                <Phone className="h-5 w-5 shrink-0 text-gray-400" />
                                                <div>
                                                    <p className="font-medium text-gray-900">Phone</p>
                                                    <p className="text-sm text-gray-600">
                                                        {officeInfo.phone}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        {officeInfo.email && (
                                            <div className="flex items-start gap-3">
                                                <Mail className="h-5 w-5 shrink-0 text-gray-400" />
                                                <div>
                                                    <p className="font-medium text-gray-900">Email</p>
                                                    <p className="text-sm text-gray-600">
                                                        {officeInfo.email}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {!officeInfo && (
                                    <p className="text-sm text-gray-500 italic">
                                        Contact details not available for this office.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
