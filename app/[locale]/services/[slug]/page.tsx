'use client'

import { use } from 'react'
import { useServices } from '@/lib/hooks/use-data'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Clock, DollarSign, Building2, ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import { ServiceSteps } from '@/components/services/ServiceSteps'
import { ServiceRequirements } from '@/components/services/ServiceRequirements'
import { ServiceFAQ } from '@/components/services/ServiceFAQ'
import { OfficeInfoCard } from '@/components/services/OfficeInfoCard'
import { RelatedServices } from '@/components/services/RelatedServices'
import { ServiceDownloads } from '@/components/services/ServiceDownloads'
import type {
  ServiceStep,
  ServiceFAQ as ServiceFAQType,
  OfficeDetails,
  RequirementsByType,
  ServiceDownload,
} from '@/lib/supabase/types'

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
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

  // Parse enhanced fields
  const steps = service.steps as unknown as ServiceStep[] | null
  const faq = service.faq as unknown as ServiceFAQType[] | null
  const officeDetails =
    service.office_details as unknown as OfficeDetails | null
  const requirementsByType =
    service.requirements_by_type as unknown as RequirementsByType | null
  const relatedServiceSlugs = service.related_services
  const downloads = service.downloads as unknown as ServiceDownload[] | null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-12 text-white">
        <div className="container">
          <Link
            href="/services"
            className="mb-4 inline-flex items-center gap-2 text-sm text-blue-100 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="mb-2 text-4xl font-bold">{service.title}</h1>
          <p className="text-blue-100">{service.category}</p>
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
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Overview
              </h2>
              <p className="text-gray-600">
                {service.description ||
                  'No description available for this service.'}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid gap-6 md:grid-cols-3">
              {service.fees && (
                <div className="rounded-lg border border-gray-200 bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-green-100 p-3 text-green-600">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Fees</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {service.fees}
                  </p>
                </div>
              )}

              {service.processing_time && (
                <div className="rounded-lg border border-gray-200 bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      Processing Time
                    </h3>
                  </div>
                  <p className="text-lg font-medium text-gray-900">
                    {service.processing_time}
                  </p>
                </div>
              )}

              {(officeDetails || service.office) && (
                <OfficeInfoCard
                  officeDetails={officeDetails || undefined}
                  office={service.office || undefined}
                />
              )}
            </div>

            {/* Step-by-Step Process */}
            {steps && steps.length > 0 && <ServiceSteps steps={steps} />}

            {/* Requirements */}
            <ServiceRequirements
              requirementsByType={requirementsByType || undefined}
              requirements={
                (service.requirements as unknown as string[]) || undefined
              }
            />

            {/* Downloads */}
            {downloads && downloads.length > 0 && (
              <ServiceDownloads downloads={downloads} />
            )}

            {/* FAQ */}
            {faq && faq.length > 0 && <ServiceFAQ faq={faq} />}

            {/* Related Services */}
            {relatedServiceSlugs && relatedServiceSlugs.length > 0 && (
              <RelatedServices
                relatedServiceSlugs={relatedServiceSlugs}
                allServices={services}
              />
            )}

            {/* Call to Action */}
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-8 text-center">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Need Help?
              </h3>
              <p className="mb-6 text-gray-600">
                Contact us if you have questions about this service
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
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
