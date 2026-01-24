'use client'

import { useOfficials } from '@/lib/hooks/use-data'
import Image from 'next/image'
import { Mail, Phone, Building2, MapPin } from 'lucide-react'
import { Link } from '@/i18n/navigation'
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
              className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-blue-300 hover:shadow-lg"
            >
              <div className="rounded-lg bg-blue-100 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
                <Building2 className="h-8 w-8 text-blue-900 transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-gray-900">
                  City Officials
                </h3>
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
              className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-green-300 hover:shadow-lg"
            >
              <div className="rounded-lg bg-green-100 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600">
                <MapPin className="h-8 w-8 text-green-900 transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-gray-900">
                  Barangay Captains
                </h3>
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
    </div>
  )
}
