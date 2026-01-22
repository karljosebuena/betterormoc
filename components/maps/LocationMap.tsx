'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { Location, locationTypeColors } from '@/lib/data/locations'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icons in Next.js
const fixLeafletIcons = () => {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl: '/leaflet/marker-icon.png',
        shadowUrl: '/leaflet/marker-shadow.png',
    })
}

interface LocationMapProps {
    locations: Location[]
    center?: [number, number]
    zoom?: number
    height?: string
    selectedLocation?: string | null
    showLabels?: boolean
    onToggleLabels?: (show: boolean) => void
}

function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap()

    useEffect(() => {
        map.setView(center, zoom)
    }, [center, zoom, map])

    return null
}

export function LocationMap({
    locations,
    center = [11.013031, 124.60476], // Updated to exact City Hall coordinates
    zoom = 14,
    height = '500px',
    selectedLocation = null,
    showLabels = true,
}: LocationMapProps) {
    useEffect(() => {
        fixLeafletIcons()
    }, [])

    // Find selected location coordinates
    const selectedCoords = selectedLocation
        ? locations.find((loc) => loc.id === selectedLocation)?.coordinates
        : null

    const mapCenter = selectedCoords || center
    const mapZoom = selectedCoords ? 16 : zoom

    return (
        <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            style={{ height, width: '100%' }}
            className="z-0 rounded-lg"
            scrollWheelZoom={false}
        >
            <MapController center={mapCenter} zoom={mapZoom} />

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((location) => {
                const isSelected = location.id === selectedLocation

                // Create custom colored icon with optional label
                const customIcon = L.divIcon({
                    className: 'custom-marker-container',
                    html: `
            <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
              ${showLabels ? `
                <div style="
                  background-color: white;
                  padding: 4px 8px;
                  border-radius: 4px;
                  font-size: 11px;
                  font-weight: 600;
                  color: #1f2937;
                  white-space: nowrap;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                  margin-bottom: 4px;
                  border: 1px solid ${locationTypeColors[location.type]};
                ">${location.name}</div>
              ` : ''}
              <div style="
                background-color: ${locationTypeColors[location.type]};
                width: 30px;
                height: 30px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                ${isSelected ? 'transform: rotate(-45deg) scale(1.2);' : ''}
              "></div>
            </div>
          `,
                    iconSize: [30, 30],
                    iconAnchor: [15, showLabels ? 50 : 30],
                    popupAnchor: [0, showLabels ? -50 : -30],
                })

                return (
                    <Marker
                        key={location.id}
                        position={location.coordinates}
                        icon={customIcon}
                    >
                        <Popup maxWidth={300}>
                            <div className="p-2">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                    {location.name}
                                </h3>

                                <p className="mb-3 text-sm text-gray-600">{location.description}</p>

                                <div className="mb-3 space-y-2 text-sm">
                                    <div>
                                        <strong className="text-gray-700">Address:</strong>
                                        <p className="text-gray-600">{location.address}</p>
                                    </div>

                                    {location.services && location.services.length > 0 && (
                                        <div>
                                            <strong className="text-gray-700">Services:</strong>
                                            <ul className="ml-4 list-disc text-gray-600">
                                                {location.services.slice(0, 3).map((service, idx) => (
                                                    <li key={idx}>{service}</li>
                                                ))}
                                                {location.services.length > 3 && (
                                                    <li className="text-gray-500">
                                                        +{location.services.length - 3} more
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                    {location.hours && (
                                        <div>
                                            <strong className="text-gray-700">Hours:</strong>
                                            <p className="text-gray-600">{location.hours}</p>
                                        </div>
                                    )}

                                    {location.contact && (
                                        <div>
                                            <strong className="text-gray-700">Contact:</strong>
                                            <p className="text-gray-600">{location.contact}</p>
                                        </div>
                                    )}
                                </div>

                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[0]},${location.coordinates[1]}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-900 hover:underline"
                                >
                                    Get Directions →
                                </a>
                            </div>
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}
