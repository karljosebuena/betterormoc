'use client'

import { Link } from '@/i18n/navigation'
import { ExternalLink, CreditCard, FileText, Briefcase } from 'lucide-react'

const onlineServices = [
  {
    name: 'Real Property Tax',
    description: 'Pay and inquire about property taxes',
    url: 'https://eservices.lguormoc.org/rpt/pages/index.php',
    icon: FileText,
    category: 'Taxation',
  },
  {
    name: 'Business Permit (New)',
    description: 'Apply for new business permits',
    url: 'https://bploormoc.com/bplo/new.php',
    icon: Briefcase,
    category: 'Business',
  },
  {
    name: 'Business Permit (Renewal)',
    description: 'Renew your business permit',
    url: 'https://bploormoc.com/bplo/renewal.php',
    icon: Briefcase,
    category: 'Business',
  },
  {
    name: 'LBP e-GPS Payment',
    description: 'Pay government fees via Land Bank',
    url: 'https://www.lbp-eservices.com/egps/portal/index.jsp',
    icon: CreditCard,
    category: 'Finance',
  },
]

export function OnlineServicesSection() {
  return (
    <section className="section bg-linear-to-br from-blue-50 to-indigo-50 py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Online Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Access official Ormoc City e-services for faster, more convenient
            transactions.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-500 italic">
            Note: These links redirect to official LGU Ormoc portals and trusted
            government partners (e.g. Land Bank). BetterOrmoc is an independent
            initiative.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {onlineServices.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-900 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-900 transition-colors group-hover:bg-blue-900 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-900">
                {service.name}
              </h3>
              <p className="mb-4 flex-1 text-sm text-gray-600">
                {service.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-medium text-gray-500">
                  {service.category}
                </span>
                <div className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-all group-hover:gap-2">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <Link
              href="/contact"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Contact us
            </Link>{' '}
            for assistance
          </p>
        </div>
      </div>
    </section>
  )
}
