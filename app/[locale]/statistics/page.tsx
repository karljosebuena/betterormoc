'use client'

import { useEffect, useState } from 'react'
import {
    BarChart3,
    Users,
    TrendingUp,
    GraduationCap,
    Heart,
    Building2,
    Leaf,
    Wheat,
    Shield,
    Plane,
    MapPin,
    Loader2,
    Clock,
    Store,
    Tractor,
    Construction,
    School,
    Stethoscope,
    Camera
} from 'lucide-react'
import { StatisticsCharts } from '@/components/statistics/StatisticsCharts'

interface Statistic {
    id: number
    category: string
    label: string
    value: string
    year: number
}

interface CategoryData {
    category: string
    icon: React.ElementType
    color: string
    stats: Statistic[]
}

const categoryIcons: Record<string, { icon: React.ElementType; color: string }> = {
    'Demographics': { icon: Users, color: 'blue' },
    'Geography': { icon: MapPin, color: 'green' },
    'Economy': { icon: TrendingUp, color: 'purple' },
    'Education': { icon: GraduationCap, color: 'indigo' },
    'Health': { icon: Heart, color: 'red' },
    'Infrastructure': { icon: Building2, color: 'gray' },
    'Social Services': { icon: Users, color: 'pink' },
    'Environment': { icon: Leaf, color: 'emerald' },
    'Agriculture': { icon: Wheat, color: 'amber' },
    'Public Safety': { icon: Shield, color: 'orange' },
    'Tourism': { icon: Plane, color: 'cyan' },
    'Barangay Population': { icon: Users, color: 'violet' },
    'Historical Trends': { icon: Clock, color: 'slate' },
    'Economy Details': { icon: Store, color: 'purple' },
    'Agriculture Details': { icon: Tractor, color: 'amber' },
    'Infrastructure Details': { icon: Construction, color: 'gray' },
    'Education Details': { icon: School, color: 'indigo' },
    'Health Details': { icon: Stethoscope, color: 'red' },
    'Tourism Details': { icon: Plane, color: 'cyan' },
    'Public Safety Details': { icon: Camera, color: 'orange' },
}

const colorClasses: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
    'blue': { bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-200', iconBg: 'bg-blue-100' },
    'green': { bg: 'bg-green-50', text: 'text-green-900', border: 'border-green-200', iconBg: 'bg-green-100' },
    'purple': { bg: 'bg-purple-50', text: 'text-purple-900', border: 'border-purple-200', iconBg: 'bg-purple-100' },
    'indigo': { bg: 'bg-indigo-50', text: 'text-indigo-900', border: 'border-indigo-200', iconBg: 'bg-indigo-100' },
    'red': { bg: 'bg-red-50', text: 'text-red-900', border: 'border-red-200', iconBg: 'bg-red-100' },
    'gray': { bg: 'bg-gray-50', text: 'text-gray-900', border: 'border-gray-200', iconBg: 'bg-gray-100' },
    'pink': { bg: 'bg-pink-50', text: 'text-pink-900', border: 'border-pink-200', iconBg: 'bg-pink-100' },
    'emerald': { bg: 'bg-emerald-50', text: 'text-emerald-900', border: 'border-emerald-200', iconBg: 'bg-emerald-100' },
    'amber': { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-200', iconBg: 'bg-amber-100' },
    'orange': { bg: 'bg-orange-50', text: 'text-orange-900', border: 'border-orange-200', iconBg: 'bg-orange-100' },
    'cyan': { bg: 'bg-cyan-50', text: 'text-cyan-900', border: 'border-cyan-200', iconBg: 'bg-cyan-100' },
    'violet': { bg: 'bg-violet-50', text: 'text-violet-900', border: 'border-violet-200', iconBg: 'bg-violet-100' },
    'slate': { bg: 'bg-slate-50', text: 'text-slate-900', border: 'border-slate-200', iconBg: 'bg-slate-100' },
}

export default function StatisticsPage() {
    const [statistics, setStatistics] = useState<Statistic[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    useEffect(() => {
        async function fetchStatistics() {
            try {
                const response = await fetch('/api/statistics')
                if (!response.ok) throw new Error('Failed to fetch statistics')
                const result = await response.json()
                setStatistics(result.data || [])
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }
        fetchStatistics()
    }, [])

    // Group statistics by category
    const categorizedData: CategoryData[] = Object.entries(
        statistics.reduce((acc, stat) => {
            if (!acc[stat.category]) {
                acc[stat.category] = []
            }
            acc[stat.category].push(stat)
            return acc
        }, {} as Record<string, Statistic[]>)
    ).map(([category, stats]) => ({
        category,
        icon: categoryIcons[category]?.icon || BarChart3,
        color: categoryIcons[category]?.color || 'gray',
        stats: stats.sort((a, b) => a.label.localeCompare(b.label)),
    }))

    const categories = ['all', ...categorizedData.map(c => c.category)].sort()

    const filteredData = selectedCategory === 'all'
        ? categorizedData
        : categorizedData.filter(c => c.category === selectedCategory)

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                    <div className="container">
                        <h1 className="mb-4 text-4xl font-bold">City Statistics</h1>
                        <p className="text-lg text-blue-50">
                            Comprehensive data about Ormoc City
                        </p>
                    </div>
                </div>
                <div className="container flex items-center justify-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    <span className="ml-3 text-gray-600">Loading statistics...</span>
                </div>
            </div>
        )
    }

    if (error || statistics.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                    <div className="container">
                        <h1 className="mb-4 text-4xl font-bold">City Statistics</h1>
                        <p className="text-lg text-blue-50">
                            Comprehensive data about Ormoc City
                        </p>
                    </div>
                </div>
                <div className="container py-12">
                    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
                        <p className="text-red-800">
                            {error || 'No statistics data available'}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">City Statistics</h1>
                    <p className="text-lg text-blue-50">
                        Comprehensive data about Ormoc City from official government sources
                    </p>
                </div>
            </div>

            <div className="container py-12">
                {/* Charts Section */}
                <div className="mb-12">
                    <StatisticsCharts statistics={statistics} />
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Filter by Category</h2>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === category
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category === 'all' ? 'All Categories' : category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Statistics Count */}
                <div className="mb-6 text-sm text-gray-600">
                    Showing {filteredData.reduce((sum, cat) => sum + cat.stats.length, 0)} statistics
                    {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                </div>

                {/* Statistics by Category */}
                <div className="space-y-8">
                    {filteredData.map((categoryData) => {
                        const Icon = categoryData.icon
                        const colors = colorClasses[categoryData.color]

                        return (
                            <div key={categoryData.category} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                                {/* Category Header */}
                                <div className="mb-6 flex items-center gap-3">
                                    <div className={`rounded-lg ${colors.iconBg} p-3`}>
                                        <Icon className={`h-6 w-6 ${colors.text}`} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{categoryData.category}</h2>
                                        <p className="text-sm text-gray-600">{categoryData.stats.length} data points</p>
                                    </div>
                                </div>

                                {/* Statistics Grid */}
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {categoryData.stats.map((stat) => (
                                        <div
                                            key={stat.id}
                                            className={`rounded-lg border ${colors.border} ${colors.bg} p-4`}
                                        >
                                            <div className="mb-2 text-sm font-medium text-gray-600">
                                                {stat.label}
                                            </div>
                                            <div className={`text-2xl font-bold ${colors.text}`}>
                                                {stat.value}
                                            </div>
                                            <div className="mt-2 text-xs text-gray-500">
                                                Year: {stat.year}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Data Sources */}
                <div className="mt-12 rounded-lg border border-blue-200 bg-blue-50 p-6">
                    <h3 className="mb-3 text-lg font-bold text-gray-900">Data Sources</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                        <p>• <strong>Philippine Statistics Authority (PSA)</strong> - 2020 Census data</p>
                        <p>• <strong>Department of Interior and Local Government (DILG)</strong> - Local government reports</p>
                        <p>• <strong>LGU Ormoc</strong> - City government data and reports (2023-2025)</p>
                        <p>• <strong>Various Department Reports</strong> - Agriculture, Health, Education, Tourism</p>
                    </div>
                    <p className="mt-4 text-xs text-gray-600">
                        All statistics are from official government sources and are updated regularly to ensure accuracy.
                    </p>
                </div>
            </div>
        </div>
    )
}
