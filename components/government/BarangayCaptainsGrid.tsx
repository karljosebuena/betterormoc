'use client'

import { useEffect, useState } from 'react'
import { Search, MapPin, Users } from 'lucide-react'

interface BarangayOfficial {
  id: number
  barangay_name: string
  captain_name: string
  contact_number: string | null
  email: string | null
  district: number
  population: number
}

export function BarangayCaptainsGrid() {
  const [barangays, setBarangays] = useState<BarangayOfficial[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState<number | 'all'>(
    'all'
  )

  useEffect(() => {
    async function fetchBarangays() {
      try {
        const response = await fetch('/api/barangay-officials')
        if (!response.ok) throw new Error('Failed to fetch')
        const result = await response.json()
        setBarangays(result.data || [])
      } catch (error) {
        console.error('Error fetching barangays:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBarangays()
  }, [])

  const filteredBarangays = barangays.filter((b) => {
    const matchesSearch =
      b.barangay_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.captain_name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDistrict =
      selectedDistrict === 'all' || b.district === selectedDistrict
    return matchesSearch && matchesDistrict
  })

  const districts = Array.from(new Set(barangays.map((b) => b.district))).sort()

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="text-gray-600">Loading barangays...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative max-w-md flex-1">
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search barangay or captain..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
          />
        </div>

        {/* District Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">District:</span>
          <select
            value={selectedDistrict}
            onChange={(e) =>
              setSelectedDistrict(
                e.target.value === 'all' ? 'all' : Number(e.target.value)
              )
            }
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
          >
            <option value="all">All Districts</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                District {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredBarangays.length} of {barangays.length} barangays
      </div>

      {/* Barangays Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredBarangays.map((barangay) => (
          <div
            key={barangay.id}
            className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {barangay.barangay_name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {barangay.captain_name}
                </p>
              </div>
              <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                D{barangay.district}
              </span>
            </div>

            <div className="space-y-1 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" />
                <span>Pop: {barangay.population.toLocaleString()}</span>
              </div>
              {barangay.contact_number && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{barangay.contact_number}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredBarangays.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-500">
            No barangays found matching your search.
          </p>
        </div>
      )}
    </div>
  )
}
