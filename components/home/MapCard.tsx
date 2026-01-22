'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin } from 'lucide-react'

// Fix for default marker icon in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

export function MapCard() {
    const mapRef = useRef<L.Map | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current || mapRef.current) return

        // Initialize map centered on Ormoc City Hall
        const map = L.map(containerRef.current).setView([11.0132, 124.6052], 13)

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
        }).addTo(map)

        // Add marker for Ormoc City Hall
        const marker = L.marker([11.0132, 124.6052]).addTo(map)
        marker.bindPopup('<b>Ormoc City Hall</b><br>Real Street, Ormoc City').openPopup()

        mapRef.current = map

        // Cleanup
        return () => {
            if (mapRef.current) {
                mapRef.current.remove()
                mapRef.current = null
            }
        }
    }, [])

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 text-white">
                <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white/20 p-2">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Location</h3>
                        <p className="text-sm text-blue-100">Ormoc City Hall</p>
                    </div>
                </div>
            </div>

            {/* Map Container */}
            <div ref={containerRef} className="h-[400px] w-full" />

            {/* Footer */}
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                <p className="text-center text-sm text-gray-500">
                    Real Street, Ormoc City, Leyte • Interactive Map
                </p>
            </div>
        </div>
    )
}
