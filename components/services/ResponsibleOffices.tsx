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
  // We handle both legacy 'office' string and new 'offices' relation
  const uniqueOfficesMap = new Map<string, { name: string; slug: string }>()

  services.forEach((service: any) => {
    // Prefer relation
    if (service.offices) {
      const office = service.offices
      if (office.name && office.slug) {
        uniqueOfficesMap.set(office.slug, {
          name: office.name,
          slug: office.slug,
        })
        return
      }
    }

    // Fallback to legacy string
    if (service.office && typeof service.office === 'string') {
      const cached = Array.from(uniqueOfficesMap.values()).find(
        (o) => o.name === service.office
      )
      if (!cached) {
        // Determine a slug (this fallback is weak if DB has "Civil Registrar" but code slugifies to "civil-registrar")
        // Hopefully migration migrated all.
        const slug = service.office
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '')

        uniqueOfficesMap.set(slug, {
          name: service.office,
          slug: slug,
        })
      }
    }
  })

  const uniqueOffices = Array.from(uniqueOfficesMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  if (uniqueOffices.length === 0) return null

  return (
    <div className="mt-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">
        Responsible Offices
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {uniqueOffices.map((office) => (
          <Link
            key={office.slug}
            href={`/offices/${office.slug}`}
            className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-blue-900 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-50 p-3 text-blue-900">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-900">
                  {office.name}
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
