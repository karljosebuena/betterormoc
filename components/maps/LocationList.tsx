'use client'

import { Location, locationTypeLabels } from '@/lib/data/locations'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

interface LocationListProps {
  locations: Location[]
  selectedLocation: string | null
  onSelectLocation: (id: string) => void
}

export function LocationList({
  locations,
  selectedLocation,
  onSelectLocation,
}: LocationListProps) {
  // Group locations by type
  const groupedLocations = locations.reduce(
    (acc, location) => {
      if (!acc[location.type]) {
        acc[location.type] = []
      }
      acc[location.type].push(location)
      return acc
    },
    {} as Record<string, Location[]>
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Locations</h2>
        <p className="text-sm text-gray-600">
          Click on a location to view it on the map
        </p>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedLocations).map(([type, locs]) => (
          <div key={type}>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
              {locationTypeLabels[type as keyof typeof locationTypeLabels]} (
              {locs.length})
            </h3>

            <div className="space-y-2">
              {locs.map((location) => (
                <button
                  key={location.id}
                  onClick={() => onSelectLocation(location.id)}
                  className={`w-full rounded-lg border p-4 text-left transition-all ${
                    selectedLocation === location.id
                      ? 'border-blue-900 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="mb-2 flex items-start justify-between">
                    <h4 className="font-semibold text-gray-900">
                      {location.name}
                    </h4>
                    <MapPin
                      className={`h-5 w-5 flex-shrink-0 ${
                        selectedLocation === location.id
                          ? 'text-blue-900'
                          : 'text-gray-400'
                      }`}
                    />
                  </div>

                  <p className="mb-3 text-sm text-gray-600">
                    {location.description}
                  </p>

                  <div className="space-y-1 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{location.address}</span>
                    </div>

                    {location.hours && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{location.hours}</span>
                      </div>
                    )}

                    {location.contact && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3" />
                        <span>{location.contact}</span>
                      </div>
                    )}

                    {location.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3" />
                        <span>{location.email}</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
