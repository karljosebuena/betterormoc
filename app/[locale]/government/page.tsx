'use client'

import { useOfficials } from '@/lib/hooks/use-data'
import Image from 'next/image'
import { Mail, Phone, Building2, MapPin } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { ormocLocations } from '@/lib/data/locations'
import { LocationList } from '@/components/maps/LocationList'
import { BarangayCaptainsGrid } from '@/components/government/BarangayCaptainsGrid'

// Dynamically import map to avoid SSR issues
const LocationMap = dynamic(
  () => import('@/components/maps/LocationMap').then((mod) => mod.LocationMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[500px] items-center justify-center rounded-lg bg-gray-100">
        <div className="text-center">
          <div className="mb-2 text-gray-400">Loading map...</div>
        </div>
      </div>
    ),
  }
)

export default function GovernmentPage() {
  const { data: officials, isLoading } = useOfficials()
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [showLabels, setShowLabels] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
        <div className="container">
          <h1 className="mb-4 text-4xl font-bold">City Government</h1>
          <p className="text-lg text-blue-50">
            Meet the officials serving Ormoc City
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
                <strong className="font-semibold">
                  Data Verification Notice:
                </strong>{' '}
                Mayor and Vice Mayor information has been verified from official
                sources. Sangguniang Panlungsod members and Department Heads
                data are placeholders pending official roster verification, as
                this information is not publicly available online. We are
                actively working to obtain and verify the complete official
                roster.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="border-b border-gray-200 bg-white py-8">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/government/officials"
              className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-blue-300"
            >
              <div className="rounded-lg bg-blue-100 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
                <Building2 className="h-8 w-8 text-blue-900 transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-gray-900">City Officials</h3>
                <p className="text-sm text-gray-600">
                  Mayor, Vice Mayor & Sangguniang Panlungsod
                </p>
              </div>
              <svg
                className="h-6 w-6 text-gray-400 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/government/barangays"
              className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-green-300"
            >
              <div className="rounded-lg bg-green-100 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600">
                <MapPin className="h-8 w-8 text-green-900 transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-gray-900">Barangay Captains</h3>
                <p className="text-sm text-gray-600">
                  110 Barangays serving Ormoc communities
                </p>
              </div>
              <svg
                className="h-6 w-6 text-gray-400 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Office Locations Map */}
      <div className="border-b border-gray-200 bg-white py-12">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-gray-900">
                Office Locations
              </h2>
              <p className="text-gray-600">
                Find government offices and service centers across Ormoc City
              </p>
            </div>

            {/* Label Toggle Button */}
            <button
              onClick={() => setShowLabels(!showLabels)}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <MapPin className="h-4 w-4" />
              {showLabels ? 'Hide Labels' : 'Show Labels'}
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Map */}
            <div className="lg:col-span-2">
              <LocationMap
                locations={ormocLocations}
                height="600px"
                selectedLocation={selectedLocation}
                showLabels={showLabels}
              />
            </div>

            {/* Location List */}
            <div className="max-h-[600px] overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-4">
              <LocationList
                locations={ormocLocations}
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-lg bg-gray-200"
              ></div>
            ))}
          </div>
        ) : (
          <>
            {/* Top Officials */}
            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-gray-900">
                Executive Leadership
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {officials?.slice(0, 2).map((official) => (
                  <div
                    key={official.id}
                    className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-300"
                  >
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
                        <div className="flex h-full items-center justify-center text-6xl font-bold text-blue-900">
                          {official.name.charAt(5)}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="mb-1 text-xl font-bold text-gray-900">
                        {official.name}
                      </h3>
                      <p className="mb-4 text-sm font-medium text-blue-900">
                        {official.position}
                      </p>
                      {official.department && (
                        <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                          <Building2 className="h-4 w-4" />
                          <span>{official.department}</span>
                        </div>
                      )}
                      <div className="space-y-2">
                        {official.email && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4" />
                            <a
                              href={`mailto:${official.email}`}
                              className="hover:text-blue-900"
                            >
                              {official.email}
                            </a>
                          </div>
                        )}
                        {official.phone && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="h-4 w-4" />
                            <a
                              href={`tel:${official.phone}`}
                              className="hover:text-blue-900"
                            >
                              {official.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Council Members */}
            {officials && officials.length > 2 && (
              <div>
                <h2 className="mb-8 text-2xl font-bold text-gray-900">
                  Sangguniang Panlungsod
                </h2>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                  {officials.slice(2).map((official) => (
                    <div
                      key={official.id}
                      className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-blue-200"
                    >
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                        {official.photo_url ? (
                          <Image
                            src={official.photo_url}
                            alt={official.name}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-4xl font-bold text-gray-400">
                            {official.name.charAt(5)}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="mb-1 font-semibold text-gray-900">
                          {official.name}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {official.position}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Barangay Captains Section */}
      <div className="border-t border-gray-200 bg-white py-12">
        <div className="container">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Barangay Captains
            </h2>
            <p className="text-gray-600">
              110 Barangays serving the communities of Ormoc City
            </p>
          </div>

          {/* Disclaimer for Barangay Captains */}
          <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
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

          <BarangayCaptainsGrid />
        </div>
      </div>
    </div>
  )
}
