'use client'

import { useState, useMemo } from 'react'
import { Calendar, FileText } from 'lucide-react'

// Mock data - will be replaced with API call
const mockResolutions = [
    {
        id: '1',
        number: '2024-R-001',
        title: 'Resolution Approving City Budget',
        date_passed: '2024-01-10',
        category: 'Finance',
        status: 'active',
    },
    {
        id: '2',
        number: '2024-R-002',
        title: 'Resolution Honoring Outstanding Citizens',
        date_passed: '2024-03-01',
        category: 'Awards',
        status: 'active',
    },
]

export default function ResolutionsPage() {
    const [selectedYear, setSelectedYear] = useState<string>('all')

    const years = useMemo(() => {
        const yearsSet = new Set(mockResolutions.map((r) => new Date(r.date_passed).getFullYear().toString()))
        return ['all', ...Array.from(yearsSet).sort().reverse()]
    }, [])

    const filteredResolutions = useMemo(() => {
        if (selectedYear === 'all') return mockResolutions
        return mockResolutions.filter((r) => new Date(r.date_passed).getFullYear().toString() === selectedYear)
    }, [selectedYear])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">City Resolutions</h1>
                    <p className="text-lg text-blue-50">
                        Official resolutions from the Sangguniang Panlungsod
                    </p>
                </div>
            </div>

            <div className="container py-12">
                <div className="mb-8 flex flex-wrap gap-2">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${selectedYear === year
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {year === 'all' ? 'All Years' : year}
                        </button>
                    ))}
                </div>

                <div className="mb-6 text-sm text-gray-600">
                    Showing {filteredResolutions.length} {filteredResolutions.length === 1 ? 'resolution' : 'resolutions'}
                </div>

                <div className="space-y-4">
                    {filteredResolutions.map((resolution) => (
                        <div
                            key={resolution.id}
                            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-4 flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-blue-600">Resolution No. {resolution.number}</div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(resolution.date_passed).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                    {resolution.category}
                                </span>
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">{resolution.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
