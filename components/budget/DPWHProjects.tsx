'use client'

import { useState } from 'react'
import { Building2, MapPin, Calendar, TrendingUp } from 'lucide-react'

interface DPWHProject {
    id: string
    name: string
    category: 'Road' | 'Flood Control' | 'Building' | 'Bridge'
    location: string
    contractor: string
    cost: number
    status: number // percentage
    completionDate: string | null
    year: number
}

const DPWH_PROJECTS: DPWHProject[] = [
    {
        id: 'DPWH-ORD-2024-001',
        name: 'Concreting of Ormoc-Baybay Road (Section 1)',
        category: 'Road',
        location: 'Barangay Cogon Combado to Barangay Bantigue',
        contractor: 'ABC Construction Corp.',
        cost: 45000000,
        status: 75,
        completionDate: null,
        year: 2024
    },
    {
        id: 'DPWH-ORD-2024-002',
        name: 'Rehabilitation of Ormoc City Flood Control Structure',
        category: 'Flood Control',
        location: 'Bao River, Barangay Liberty',
        contractor: 'XYZ Engineering Services',
        cost: 32000000,
        status: 100,
        completionDate: '2024-11-15',
        year: 2024
    },
    {
        id: 'DPWH-ORD-2023-015',
        name: 'Construction of Multi-Purpose Building',
        category: 'Building',
        location: 'Barangay San Pablo',
        contractor: 'DEF Builders Inc.',
        cost: 18500000,
        status: 100,
        completionDate: '2024-03-20',
        year: 2023
    },
    {
        id: 'DPWH-ORD-2024-003',
        name: 'Bridge Construction - Anilao River Crossing',
        category: 'Bridge',
        location: 'Barangay Anilao',
        contractor: 'GHI Infrastructure Ltd.',
        cost: 28000000,
        status: 60,
        completionDate: null,
        year: 2024
    },
    {
        id: 'DPWH-ORD-2024-004',
        name: 'Road Widening Project - Valencia-Kananga Road',
        category: 'Road',
        location: 'Barangay Valencia to City Boundary',
        contractor: 'JKL Construction',
        cost: 52000000,
        status: 45,
        completionDate: null,
        year: 2024
    },
    {
        id: 'DPWH-ORD-2023-012',
        name: 'Flood Mitigation - Bagong Buhay Drainage System',
        category: 'Flood Control',
        location: 'Barangay Bagong Buhay',
        contractor: 'MNO Engineering',
        cost: 24000000,
        status: 100,
        completionDate: '2024-06-30',
        year: 2023
    },
    {
        id: 'DPWH-ORD-2024-005',
        name: 'School Building Construction - Ipil Elementary',
        category: 'Building',
        location: 'Barangay Ipil',
        contractor: 'PQR Builders',
        cost: 21000000,
        status: 85,
        completionDate: null,
        year: 2024
    },
    {
        id: 'DPWH-ORD-2024-006',
        name: 'Concreting of Farm-to-Market Road',
        category: 'Road',
        location: 'Barangay Mahayag to Margen',
        contractor: 'STU Construction',
        cost: 38000000,
        status: 55,
        completionDate: null,
        year: 2024
    }
]

export function DPWHProjects() {
    const [filter, setFilter] = useState<string>('all')

    const filteredProjects = filter === 'all'
        ? DPWH_PROJECTS
        : DPWH_PROJECTS.filter(p => {
            if (filter === 'roads') return p.category === 'Road'
            if (filter === 'flood') return p.category === 'Flood Control'
            if (filter === 'buildings') return p.category === 'Building' || p.category === 'Bridge'
            return true
        })

    const totalCost = DPWH_PROJECTS.reduce((sum, p) => sum + p.cost, 0)
    const completedCount = DPWH_PROJECTS.filter(p => p.status === 100).length
    const ongoingCount = DPWH_PROJECTS.length - completedCount

    const getCategoryBadgeColor = (category: string) => {
        switch (category) {
            case 'Road': return 'bg-blue-100 text-blue-800'
            case 'Flood Control': return 'bg-cyan-100 text-cyan-800'
            case 'Building': return 'bg-purple-100 text-purple-800'
            case 'Bridge': return 'bg-green-100 text-green-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    const formatCurrency = (amount: number) => {
        return `₱${(amount / 1000000).toFixed(1)}M`
    }

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return '—'
        return new Date(dateStr).toLocaleDateString('en-PH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    return (
        <div className="space-y-6">
            {/* Summary Bar */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">{DPWH_PROJECTS.length}</div>
                    <div className="text-sm text-gray-600">Total Projects</div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{formatCurrency(totalCost)}</div>
                    <div className="text-sm text-gray-600">Total Investment</div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{completedCount}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">{ongoingCount}</div>
                    <div className="text-sm text-gray-600">Ongoing</div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setFilter('all')}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === 'all'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    All ({DPWH_PROJECTS.length})
                </button>
                <button
                    onClick={() => setFilter('roads')}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === 'roads'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    Roads ({DPWH_PROJECTS.filter(p => p.category === 'Road').length})
                </button>
                <button
                    onClick={() => setFilter('flood')}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === 'flood'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    Flood Control ({DPWH_PROJECTS.filter(p => p.category === 'Flood Control').length})
                </button>
                <button
                    onClick={() => setFilter('buildings')}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === 'buildings'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    Buildings ({DPWH_PROJECTS.filter(p => p.category === 'Building' || p.category === 'Bridge').length})
                </button>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
                    >
                        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                            <div className="flex-1">
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-mono text-gray-500">{project.id}</span>
                                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getCategoryBadgeColor(project.category)}`}>
                                        {project.category}
                                    </span>
                                    {project.status === 100 ? (
                                        <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                            Completed
                                        </span>
                                    ) : (
                                        <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                            {project.status}% Complete
                                        </span>
                                    )}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">{project.name}</h3>
                                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4" />
                                    <span>{project.location}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-blue-600">{formatCurrency(project.cost)}</div>
                                <div className="text-xs text-gray-500">Contract Cost</div>
                            </div>
                        </div>

                        <div className="grid gap-4 border-t border-gray-100 pt-4 md:grid-cols-3">
                            <div>
                                <div className="text-xs font-medium text-gray-500">Contractor</div>
                                <div className="mt-1 text-sm text-gray-900">{project.contractor}</div>
                            </div>
                            <div>
                                <div className="text-xs font-medium text-gray-500">Year</div>
                                <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-900">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {project.year}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs font-medium text-gray-500">Completion Date</div>
                                <div className="mt-1 text-sm text-gray-900">{formatDate(project.completionDate)}</div>
                            </div>
                        </div>

                        {project.status < 100 && (
                            <div className="mt-4">
                                <div className="mb-1 flex justify-between text-xs text-gray-600">
                                    <span>Progress</span>
                                    <span>{project.status}%</span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                    <div
                                        className="h-full bg-blue-600 transition-all"
                                        style={{ width: `${project.status}%` }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-12 text-center">
                    <Building2 className="mx-auto mb-3 h-12 w-12 text-gray-400" />
                    <p className="text-gray-600">No projects found in this category.</p>
                </div>
            )}

            {/* Data Source */}
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm text-blue-900">
                    <strong>Data Source:</strong> DPWH Transparency Portal and DPWH Leyte 2nd District Engineering Office.
                    Sample data shown for demonstration. Contact DPWH for official project updates.
                </p>
            </div>
        </div>
    )
}
