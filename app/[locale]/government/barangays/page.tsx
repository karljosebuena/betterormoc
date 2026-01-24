'use client'

import { Users, MapPin, Phone, Award } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { BarangayCaptainsGrid } from '@/components/government/BarangayCaptainsGrid'

export default function BarangaysPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-green-900 to-green-950 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">Barangay Captains</h1>
                    <p className="text-lg text-green-50">
                        110 Barangays serving the communities of Ormoc City
                    </p>
                </div>
            </div>

            {/* Data Disclaimer */}
            <div className="border-b border-yellow-200 bg-yellow-50 py-4">
                <div className="container">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0">
                            <svg
                                className="h-5 w-5 text-yellow-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-yellow-800">
                                <strong className="font-semibold">Note:</strong> Barangay
                                captain names are placeholders pending official verification.
                                Population data is from PSA 2024 Census.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-12">
                {/* Quick Links */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Link
                        href="/government"
                        className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-blue-200"
                    >
                        <MapPin className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                        <div>
                            <h3 className="font-semibold text-gray-900">Government Overview</h3>
                            <p className="text-sm text-gray-600">Office locations & map</p>
                        </div>
                    </Link>
                    <Link
                        href="/government/officials"
                        className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-blue-200"
                    >
                        <Award className="h-8 w-8 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                        <div>
                            <h3 className="font-semibold text-gray-900">City Officials</h3>
                            <p className="text-sm text-gray-600">Mayor, Vice Mayor & Council</p>
                        </div>
                    </Link>
                </div>

                {/* About Barangays */}
                <div className="mb-8 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">
                        About Ormoc's Barangays
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="flex items-start gap-3">
                            <div className="rounded-lg bg-green-100 p-3">
                                <Users className="h-6 w-6 text-green-900" />
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900">110 Barangays</h3>
                                <p className="text-sm text-gray-600">
                                    Serving all communities across Ormoc City
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="rounded-lg bg-blue-100 p-3">
                                <MapPin className="h-6 w-6 text-blue-900" />
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900">Urban & Rural</h3>
                                <p className="text-sm text-gray-600">
                                    Mix of urban and rural barangays
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="rounded-lg bg-purple-100 p-3">
                                <Phone className="h-6 w-6 text-purple-900" />
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900">Local Leadership</h3>
                                <p className="text-sm text-gray-600">
                                    Each led by an elected Barangay Captain
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Barangay Captains Grid */}
                <div>
                    <div className="mb-6 flex items-center gap-3">
                        <Users className="h-8 w-8 text-green-900" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Barangay Captains Directory
                        </h2>
                    </div>
                    <BarangayCaptainsGrid />
                </div>
            </div>
        </div>
    )
}
