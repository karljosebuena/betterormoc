import type { Service } from '@/lib/supabase'
import { Clock, DollarSign, Building2, ExternalLink } from 'lucide-react'
import { Link } from '@/i18n/navigation'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Determine content to allow reuse in Link or anchor
  const content = (
    <>
      <div className="flex items-start justify-between">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-blue-900">
          {service.title}
        </h3>
        {service.external_url && (
          <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-blue-900" />
        )}
      </div>

      {service.description && (
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {service.description}
        </p>
      )}

      <div className="space-y-2">
        {service.office && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Building2 className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{service.office}</span>
          </div>
        )}

        {service.processing_time && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4 shrink-0" />
            <span>{service.processing_time}</span>
          </div>
        )}

        {service.fees && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <DollarSign className="h-4 w-4 shrink-0" />
            <span>{service.fees}</span>
          </div>
        )}
      </div>

      <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-900 group-hover:underline">
        {service.external_url ? 'Visit Portal' : 'Learn more'} →
      </div>
    </>
  )

  const cardClasses =
    'group block h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-900 hover:shadow-md'

  if (service.external_url) {
    return (
      <a
        href={service.external_url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={`/services/${service.slug}`} className={cardClasses}>
      {content}
    </Link>
  )
}
