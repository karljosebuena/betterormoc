'use client'

import { Link } from '@/i18n/navigation'
import { Service } from '@/lib/supabase/types'
import { ArrowRight, FileText } from 'lucide-react'

interface RelatedServicesProps {
  relatedServiceSlugs?: string[]
  allServices?: Service[]
}

export function RelatedServices({
  relatedServiceSlugs,
  allServices,
}: RelatedServicesProps) {
  if (!relatedServiceSlugs || relatedServiceSlugs.length === 0 || !allServices)
    return null

  const relatedServices = allServices.filter((s) =>
    relatedServiceSlugs.includes(s.slug)
  )

  if (relatedServices.length === 0) return null

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Related Services
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedServices.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex items-start gap-3 rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-900 hover:shadow-md"
          >
            <div className="rounded-lg bg-blue-100 p-2 text-blue-900">
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-blue-900">
                {service.title}
              </h3>
              <p className="line-clamp-2 text-sm text-gray-600">
                {service.description}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-900" />
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-900 hover:underline"
        >
          View All Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
