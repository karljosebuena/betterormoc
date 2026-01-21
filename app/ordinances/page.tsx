'use client'

import { useState, useMemo } from 'react'
import { Calendar, FileText } from 'lucide-react'

// Mock data - will be replaced with API call
const mockOrdinances = [
    {
        id: '1',
        number: '2025-05-11',
        title: 'An Ordinance Creating the Film Development Council of the City of Ormoc, Leyte, Providing for Its Powers and Functions, and for Other Purposes',
        date_passed: '2025-04-21',
        category: 'Development',
        status: 'active',
    },
    {
        id: '2',
        number: '2025-04-11',
        title: 'An Ordinance Prohibiting the Entry of Nuisance Contraband Inside the Ormoc District Jail in the City of Ormoc, Leyte, and Providing Penalties for Violation Thereof',
        date_passed: '2025-04-21',
        category: 'Public Order',
        status: 'active',
    },
]

export default function OrdinancesPage() {
    const [selectedYear, setSelectedYear] = useState<string>('all')

    const years = useMemo(() => {
        const yearsSet = new Set(mockOrdinances.map((o) => new Date(o.date_passed).getFullYear().toString()))
        return ['all', ...Array.from(yearsSet).sort().reverse()]
    }, [])

    const filteredOrdinances = useMemo(() => {
        if (selectedYear === 'all') return mockOrdinances
        return mockOrdinances.filter((o) => new Date(o.date_passed).getFullYear().toString() === selectedYear)
    }, [selectedYear])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-green-600 to-green-800 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">City Ordinances</h1>
                    <p className="text-lg text-green-50">
                        Legislative measures passed by the Sangguniang Panlungsod
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
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {year === 'all' ? 'All Years' : year}
                        </button>
                    ))}
                </div>

                <div className="mb-6 text-sm text-gray-600">
                    Showing {filteredOrdinances.length} {filteredOrdinances.length === 1 ? 'ordinance' : 'ordinances'}
                </div>

                <div className="space-y-4">
                    {filteredOrdinances.map((ordinance) => (
                        <div
                            key={ordinance.id}
                            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-4 flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-green-100 p-3 text-green-600">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-green-600">Ordinance No. {ordinance.number}</div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(ordinance.date_passed).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                    {ordinance.category}
                                </span>
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">{ordinance.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
