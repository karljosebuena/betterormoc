'use client'

import { Service } from '@/lib/supabase/types'
import { Building2, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

interface ResponsibleOfficesProps {
    services: Service[]
    category: string
}

export function ResponsibleOffices({
    services,
    category,
}: ResponsibleOfficesProps) {
    if (!services || services.length === 0 || category === 'all') return null

    // Extract unique offices
    const uniqueOffices = Array.from(new Set(services.map((s) => s.office)))
        .filter(Boolean)
        .sort()

    if (uniqueOffices.length === 0) return null

    // Helper to slugify office name for URL
    const slugify = (text: string) =>
        text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '')

    return (
        <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
                Responsible Offices
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
                {uniqueOffices.map((office) => (
                    <Link
                        key={office}
                        href={`/offices/${slugify(office as string)}`}
                        className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-blue-900 hover:shadow-md"
                    >
                        <div className="flex items-center gap-4">
                            <div className="rounded-lg bg-blue-50 p-3 text-blue-900">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-900">
                                    {office}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    View services and office details
                                </p>
                            </div>
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-900" />
                    </Link>
                ))}
            </div>
        </div>
    )
}
