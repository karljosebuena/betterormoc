'use client'

import { useState, useMemo, useEffect } from 'react'
import { Calendar, FileText, Loader2 } from 'lucide-react'

interface Resolution {
    id: string
    resolution_number: string
    title: string
    description?: string
    date_approved: string
    year: number
    category?: string
}

export default function ResolutionsPage() {
    const [selectedYear, setSelectedYear] = useState<string>('all')
    const [resolutions, setResolutions] = useState<Resolution[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchResolutions() {
            try {
                const response = await fetch('/api/resolutions')
                if (!response.ok) throw new Error('Failed to fetch resolutions')
                const result = await response.json()
                setResolutions(result.data || [])
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }
        fetchResolutions()
    }, [])

    const years = useMemo(() => {
        if (resolutions.length === 0) return ['all']
        const yearsSet = new Set(resolutions.map((r) => r.year.toString()))
        return ['all', ...Array.from(yearsSet).sort().reverse()]
    }, [resolutions])

    const filteredResolutions = useMemo(() => {
        if (selectedYear === 'all') return resolutions
        return resolutions.filter((r) => r.year.toString() === selectedYear)
    }, [selectedYear, resolutions])

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                    <div className="container">
                        <h1 className="mb-4 text-4xl font-bold">City Resolutions</h1>
                        <p className="text-lg text-blue-50">
                            Official resolutions from the Sangguniang Panlungsod
                        </p>
                    </div>
                </div>
                <div className="container flex items-center justify-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    <span className="ml-3 text-gray-600">Loading resolutions...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                    <div className="container">
                        <h1 className="mb-4 text-4xl font-bold">City Resolutions</h1>
                        <p className="text-lg text-blue-50">
                            Official resolutions from the Sangguniang Panlungsod
                        </p>
                    </div>
                </div>
                <div className="container py-12">
                    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
                        <p className="text-red-800">Error: {error}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
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

                {filteredResolutions.length === 0 ? (
                    <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
                        <FileText className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                        <p className="text-gray-600">No resolutions found for the selected year.</p>
                    </div>
                ) : (
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
                                            <div className="text-sm font-medium text-blue-600">
                                                Resolution No. {resolution.resolution_number}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Calendar className="h-4 w-4" />
                                                <span>
                                                    {new Date(resolution.date_approved).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {resolution.category && (
                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                            {resolution.category}
                                        </span>
                                    )}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">{resolution.title}</h3>
                                {resolution.description && (
                                    <p className="text-sm text-gray-600">{resolution.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
