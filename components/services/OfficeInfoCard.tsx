import { OfficeDetails } from '@/lib/supabase/types'
import { Building2, Clock, MapPin, Phone, Mail } from 'lucide-react'

interface OfficeInfoCardProps {
    officeDetails?: OfficeDetails
    office?: string // Fallback to old format
}

export function OfficeInfoCard({ officeDetails, office }: OfficeInfoCardProps) {
    if (!officeDetails && !office) return null

    // If using old format, show simple version
    if (!officeDetails) {
        return (
            <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
                        <Building2 className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                </div>
                <p className="text-sm text-gray-900">{office}</p>
            </div>
        )
    }

    return (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Office Information</h3>

            <div className="space-y-3">
                {/* Office Name */}
                <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 flex-shrink-0 text-blue-900" />
                    <div>
                        <p className="font-semibold text-gray-900">{officeDetails.name}</p>
                        <p className="text-sm text-gray-600">{officeDetails.location}</p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-blue-900" />
                    <p className="text-gray-700">{officeDetails.address}</p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-blue-900" />
                    <a
                        href={`tel:${officeDetails.phone}`}
                        className="font-medium text-blue-900 hover:underline"
                    >
                        {officeDetails.phone}
                    </a>
                </div>

                {/* Email */}
                {officeDetails.email && (
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 flex-shrink-0 text-blue-900" />
                        <a
                            href={`mailto:${officeDetails.email}`}
                            className="font-medium text-blue-900 hover:underline"
                        >
                            {officeDetails.email}
                        </a>
                    </div>
                )}

                {/* Hours */}
                <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0 text-blue-900" />
                    <div>
                        <p className="font-medium text-gray-900">Office Hours</p>
                        <p className="text-sm text-gray-600">{officeDetails.hours}</p>
                    </div>
                </div>
            </div>

            {/* Map Preview (if coordinates available) */}
            {officeDetails.map_coordinates && (
                <div className="mt-4">
                    <a
                        href={`https://www.google.com/maps?q=${officeDetails.map_coordinates.lat},${officeDetails.map_coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                    >
                        <MapPin className="h-4 w-4" />
                        Get Directions
                    </a>
                </div>
            )}
        </div>
    )
}
