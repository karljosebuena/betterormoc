'use client'

import { ExternalLink, CreditCard, FileText, Briefcase, Building2 } from 'lucide-react'

const businessOnlineServices = [
    {
        name: 'Business Permit Application',
        description: 'Apply for new business permits online',
        url: 'https://bploormoc.com/bplo/new.php',
        icon: Briefcase,
        office: 'BPLO',
    },
    {
        name: 'Business Permit Renewal',
        description: 'Renew your business permit online',
        url: 'https://bploormoc.com/bplo/renewal.php',
        icon: Briefcase,
        office: 'BPLO',
    },
    {
        name: 'Business Retirement',
        description: 'File for business closure or retirement',
        url: 'https://bploormoc.com/retirement/',
        icon: Briefcase,
        office: 'BPLO',
    },
    {
        name: 'Real Property Tax Portal',
        description: 'Pay and inquire about real property taxes online',
        url: 'https://eservices.lguormoc.org/rpt/pages/index.php',
        icon: FileText,
        office: 'City Treasurer',
    },
    {
        name: 'LBP e-GPS Payment',
        description: 'Pay government fees through Land Bank',
        url: 'https://www.lbp-eservices.com/egps/portal/index.jsp',
        icon: CreditCard,
        office: 'Land Bank',
    },
]

export function BusinessOnlineServices() {
    return (
        <div className="mb-12 rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            {/* Header */}
            <div className="mb-6 text-center">
                <div className="mb-3 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                        <Building2 className="h-4 w-4" />
                        Online Services via Official Portals
                    </span>
                </div>
                <h2 className="mb-2 text-2xl font-bold text-gray-900">Online Business Transactions</h2>
                <p className="text-gray-600">
                    Complete your business transactions online through official Ormoc City portals
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {businessOnlineServices.map((service) => (
                    <a
                        key={service.name}
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-blue-300"
                    >
                        {/* External Badge */}
                        <div className="absolute right-3 top-3">
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                                <ExternalLink className="h-3 w-3" />
                            </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                            <service.icon className="h-5 w-5" />
                        </div>

                        {/* Content */}
                        <h4 className="mb-1.5 font-semibold text-gray-900 group-hover:text-blue-600">
                            {service.name}
                        </h4>
                        <p className="mb-3 text-sm text-gray-600">{service.description}</p>

                        {/* Office Tag */}
                        <div className="border-t border-gray-100 pt-3">
                            <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                <Building2 className="h-3 w-3" />
                                {service.office}
                            </span>
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute bottom-3 right-3 opacity-0 transition-opacity group-hover:opacity-100">
                            <ExternalLink className="h-4 w-4 text-blue-600" />
                        </div>
                    </a>
                ))}
            </div>


        </div>
    )
}
