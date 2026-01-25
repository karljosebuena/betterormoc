import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import { Building2, MapPin, Phone, Clock, ArrowRight, Mail } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Metadata } from 'next'
import { Database } from '@/lib/supabase/types'

type Office = Database['public']['Tables']['offices']['Row']
type Service = Database['public']['Tables']['services']['Row']

interface Props {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: officeData } = await supabase
    .from('offices')
    .select('name, description')
    .eq('slug', slug)
    .single()

  const office = officeData as unknown as Office

  if (!office) {
    return {
      title: 'Office Not Found',
    }
  }

  return {
    title: `${office.name} | Better Ormoc`,
    description:
      office.description || `Services and information for ${office.name}`,
  }
}

export default async function OfficePage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  // Fetch office details
  const { data: officeData } = await supabase
    .from('offices')
    .select('*')
    .eq('slug', slug)
    .single()

  const office = officeData as unknown as Office

  if (!office) {
    // Fallback: If not found in offices table, check if it matches a legacy service.office slug
    notFound()
  }

  // Fetch services for this office by ID
  const { data: servicesData } = await supabase
    .from('services')
    .select('*')
    .eq('office_id', office.id)
    .order('title', { ascending: true })

  const services = servicesData as Service[]

  // Parse contact info safely
  const contactInfo = (office.contact_info as any) || {}

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
        <div className="container">
          <div className="mb-6 inline-flex rounded-lg bg-blue-800/50 p-3 ring-1 ring-blue-700/50">
            <Building2 className="h-8 w-8 text-blue-100" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">{office.name}</h1>
          {office.description && (
            <p className="max-w-3xl text-lg text-blue-100">
              {office.description}
            </p>
          )}
        </div>
      </div>

      <div className="container py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content - Services */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Available Services
            </h2>

            {!services || services.length === 0 ? (
              <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                <p className="text-gray-500">
                  No online services currently listed for this office.
                </p>
              </div>
            ) : (
              <div className="grid gap-6">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-900 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-900">
                          {service.title}
                        </h3>
                        {service.description && (
                          <p className="mb-4 line-clamp-2 text-gray-600">
                            {service.description}
                          </p>
                        )}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          {service.processing_time && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {service.processing_time}
                            </span>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-900" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Contact Info */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-lg font-bold text-gray-900">
                Office Information
              </h3>

              <div className="space-y-4">
                {office.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-900" />
                    <div>
                      <span className="block font-medium text-gray-900">
                        Location
                      </span>
                      <span className="text-gray-600">{office.location}</span>
                    </div>
                  </div>
                )}

                {contactInfo.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-900" />
                    <div>
                      <span className="block font-medium text-gray-900">
                        Phone
                      </span>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-blue-600 hover:underline"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contactInfo.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-900" />
                    <div>
                      <span className="block font-medium text-gray-900">
                        Email
                      </span>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-blue-900" />
                  <div>
                    <span className="block font-medium text-gray-900">
                      Office Hours
                    </span>
                    <span className="text-gray-600">
                      Mon - Fri, 8:00 AM - 5:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
