'use client'

import { Link } from '@/i18n/navigation'
import { ExternalLink, CreditCard, FileText, Briefcase } from 'lucide-react'

const onlineServices = [
    {
        name: 'Real Property Tax Portal',
        description: 'Pay and inquire about real property taxes online',
        url: 'https://eservices.lguormoc.org/rpt/pages/index.php',
        icon: FileText,
        category: 'Finance',
    },
    {
        name: 'Business Permit Application',
        description: 'Apply for new business permits online',
        url: 'https://bploormoc.com/bplo/new.php',
        icon: Briefcase,
        category: 'Business',
    },
    {
        name: 'Business Permit Renewal',
        description: 'Renew your business permit online',
        url: 'https://bploormoc.com/bplo/renewal.php',
        icon: Briefcase,
        category: 'Business',
    },
    {
        name: 'LBP e-GPS Payment',
        description: 'Pay government fees through Land Bank',
        url: 'https://www.lbp-eservices.com/egps/portal/index.jsp',
        icon: CreditCard,
        category: 'Finance',
    },
]

export function OnlineServicesSection() {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Online Services</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Access official Ormoc City e-services for faster, more convenient transactions
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {onlineServices.map((service) => (
                        <a
                            key={service.name}
                            href={service.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-blue-300"
                        >
                            {/* External Service Badge */}
                            <div className="absolute right-4 top-4">
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                                    <ExternalLink className="h-3 w-3" />
                                    External
                                </span>
                            </div>

                            {/* Icon */}
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <service.icon className="h-6 w-6" />
                            </div>

                            {/* Content */}
                            <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-blue-600">
                                {service.name}
                            </h3>
                            <p className="mb-4 text-sm text-gray-600">{service.description}</p>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                                Access Service
                                <ExternalLink className="h-4 w-4" />
                            </div>

                            {/* Category Tag */}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <span className="text-xs text-gray-500">{service.category}</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Need help? Visit our{' '}
                        <Link href="/contact" className="font-medium text-blue-600 hover:text-blue-700">
                            Contact Page
                        </Link>{' '}
                        for assistance
                    </p>
                </div>
            </div>
        </div>
    )
}
