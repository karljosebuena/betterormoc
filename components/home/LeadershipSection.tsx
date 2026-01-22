'use client'

import { useOfficials } from '@/lib/hooks/use-data'
import { Mail, Phone, User } from 'lucide-react'
import Image from 'next/image'

interface LeadershipSectionProps {
    showPhotos?: boolean
}

export function LeadershipSection({ showPhotos = false }: LeadershipSectionProps) {
    const { data: officials, isLoading } = useOfficials()

    const topOfficials = officials?.slice(0, 3) // Mayor, Vice Mayor, and top official

    if (isLoading) {
        return (
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="grid gap-8 md:grid-cols-3">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-64 animate-pulse rounded-lg bg-gray-200"></div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section bg-gray-50">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">City Leadership</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Meet the officials serving Ormoc City
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {topOfficials?.map((official) => (
                        <div
                            key={official.id}
                            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            {showPhotos && (
                                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200">
                                    {official.photo_url ? (
                                        <Image
                                            src={official.photo_url}
                                            alt={official.name}
                                            width={400}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center">
                                            <User className="h-24 w-24 text-blue-900" />
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="mb-1 text-xl font-bold text-gray-900">{official.name}</h3>
                                <p className="mb-4 text-sm font-medium text-blue-900">{official.position}</p>
                                {official.department && (
                                    <p className="mb-4 text-sm text-gray-600">{official.department}</p>
                                )}
                                <div className="space-y-2">
                                    {official.email && (
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Mail className="h-4 w-4" />
                                            <a href={`mailto:${official.email}`} className="hover:text-blue-900">
                                                {official.email}
                                            </a>
                                        </div>
                                    )}
                                    {official.phone && (
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Phone className="h-4 w-4" />
                                            <a href={`tel:${official.phone}`} className="hover:text-blue-900">
                                                {official.phone}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/government"
                        className="inline-flex items-center justify-center rounded-lg border-2 border-green-600 px-8 py-3 text-base font-semibold text-blue-900 transition-all hover:bg-blue-900 hover:text-white"
                    >
                        View All Officials
                    </a>
                </div>
            </div>
        </section>
    )
}
