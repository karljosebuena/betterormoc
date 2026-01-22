'use client'

import { HistoricalPopulationChart } from '@/components/charts/HistoricalPopulationChart'
import { BarangayPopulationChart } from '@/components/charts/BarangayPopulationChart'
import { SectorPieChart } from '@/components/charts/SectorPieChart'
import { TrendingUp, Users, BarChart3, PieChart } from 'lucide-react'

interface Statistic {
    category: string
    label: string
    value: string
    year: number
}

interface StatisticsChartsProps {
    statistics: Statistic[]
}

export function StatisticsCharts({ statistics }: StatisticsChartsProps) {
    // Extract historical population data
    const historicalData = statistics
        .filter(s => s.category === 'Historical Trends' && s.label.includes('Population'))
        .sort((a, b) => a.year - b.year)

    const populationHistory = {
        years: historicalData.map(s => s.year),
        populations: historicalData.map(s => parseInt(s.value.replace(/,/g, '')))
    }

    // Extract top 20 barangays by population
    const barangayData = statistics
        .filter(s => s.category === 'Barangay Population')
        .map(s => ({
            name: s.label.replace(' Population', ''),
            population: parseInt(s.value.replace(/,/g, ''))
        }))
        .sort((a, b) => b.population - a.population)
        .slice(0, 20)

    const barangayChartData = {
        barangays: barangayData.map(b => b.name),
        populations: barangayData.map(b => b.population)
    }

    // Extract economy data for pie chart
    const economyData = statistics
        .filter(s => s.category === 'Economy Details')
        .map(s => ({
            label: s.label,
            value: parseInt(s.value.replace(/,/g, ''))
        }))

    const economyChartData = {
        labels: economyData.map(e => e.label),
        values: economyData.map(e => e.value)
    }

    // Extract agriculture data
    const agricultureData = statistics
        .filter(s => s.category === 'Agriculture Details' && s.label.includes('Production'))
        .map(s => ({
            label: s.label.replace(' Production', ''),
            value: parseInt(s.value.replace(/,/g, '').replace(' MT', ''))
        }))

    const agricultureChartData = {
        labels: agricultureData.map(a => a.label),
        values: agricultureData.map(a => a.value)
    }

    // Extract education data
    const educationData = statistics
        .filter(s => s.category === 'Education Details' && s.label.includes('Students'))
        .map(s => ({
            label: s.label.replace(' Students', ''),
            value: parseInt(s.value.replace(/,/g, ''))
        }))

    const educationChartData = {
        labels: educationData.map(e => e.label),
        values: educationData.map(e => e.value)
    }

    // Extract health facilities data
    const healthData = [
        { label: 'Hospitals', value: parseInt(statistics.find(s => s.label === 'Hospitals')?.value || '0') },
        { label: 'Rural Health Units', value: parseInt(statistics.find(s => s.label === 'Rural Health Units')?.value || '0') },
        { label: 'Barangay Health Stations', value: parseInt(statistics.find(s => s.label === 'Barangay Health Stations')?.value || '0') },
    ].filter(h => h.value > 0)

    const healthChartData = {
        labels: healthData.map(h => h.label),
        values: healthData.map(h => h.value)
    }

    const hasHistoricalData = populationHistory.years.length > 0
    const hasBarangayData = barangayChartData.barangays.length > 0
    const hasEconomyData = economyChartData.labels.length > 0
    const hasAgricultureData = agricultureChartData.labels.length > 0
    const hasEducationData = educationChartData.labels.length > 0
    const hasHealthData = healthChartData.labels.length > 0

    if (!hasHistoricalData && !hasBarangayData && !hasEconomyData) {
        return null
    }

    return (
        <div className="space-y-12">
            {/* Quick Stats */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-blue-600">Total Population</p>
                            <p className="mt-2 text-3xl font-bold text-blue-900">
                                {statistics.find(s => s.label === 'Total Population')?.value || 'N/A'}
                            </p>
                        </div>
                        <Users className="h-12 w-12 text-blue-600 opacity-50" />
                    </div>
                </div>
                <div className="rounded-lg border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-green-600">Total Barangays</p>
                            <p className="mt-2 text-3xl font-bold text-green-900">110</p>
                        </div>
                        <BarChart3 className="h-12 w-12 text-green-600 opacity-50" />
                    </div>
                </div>
                <div className="rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-purple-600">Total Businesses</p>
                            <p className="mt-2 text-3xl font-bold text-purple-900">
                                {statistics.find(s => s.label === 'Total Registered Businesses')?.value || 'N/A'}
                            </p>
                        </div>
                        <TrendingUp className="h-12 w-12 text-purple-600 opacity-50" />
                    </div>
                </div>
                <div className="rounded-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-indigo-600">Total Schools</p>
                            <p className="mt-2 text-3xl font-bold text-indigo-900">
                                {statistics.find(s => s.label === 'Total Schools')?.value || 'N/A'}
                            </p>
                        </div>
                        <PieChart className="h-12 w-12 text-indigo-600 opacity-50" />
                    </div>
                </div>
            </div>

            {/* Historical Population Trend */}
            {hasHistoricalData && (
                <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Population Growth Trend</h2>
                        <p className="mt-1 text-gray-600">Historical population data from 1990 to 2024</p>
                    </div>
                    <HistoricalPopulationChart data={populationHistory} />
                    <div className="mt-4 text-center text-sm text-gray-500">
                        Source: Philippine Statistics Authority (PSA) Census Data
                    </div>
                </div>
            )}

            {/* Top Barangays by Population */}
            {hasBarangayData && (
                <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Top 20 Barangays by Population</h2>
                        <p className="mt-1 text-gray-600">Most populous barangays in Ormoc City</p>
                    </div>
                    <BarangayPopulationChart data={barangayChartData} />
                    <div className="mt-4 text-center text-sm text-gray-500">
                        Source: PSA 2020 Census
                    </div>
                </div>
            )}

            {/* Sector Distribution Charts */}
            {(hasEconomyData || hasAgricultureData || hasEducationData || hasHealthData) && (
                <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Sector Distributions</h2>
                        <p className="mt-1 text-gray-600">Breakdown of key sectors in Ormoc City</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        {hasEconomyData && (
                            <SectorPieChart
                                title="Economy: Business Types"
                                data={economyChartData}
                            />
                        )}
                        {hasAgricultureData && (
                            <SectorPieChart
                                title="Agriculture: Crop Production"
                                data={agricultureChartData}
                                colors={[
                                    'rgba(245, 158, 11, 0.8)',
                                    'rgba(251, 146, 60, 0.8)',
                                    'rgba(253, 186, 116, 0.8)',
                                    'rgba(254, 215, 170, 0.8)',
                                ]}
                            />
                        )}
                        {hasEducationData && (
                            <SectorPieChart
                                title="Education: Student Distribution"
                                data={educationChartData}
                                colors={[
                                    'rgba(99, 102, 241, 0.8)',
                                    'rgba(129, 140, 248, 0.8)',
                                    'rgba(165, 180, 252, 0.8)',
                                ]}
                            />
                        )}
                        {hasHealthData && (
                            <SectorPieChart
                                title="Health: Facility Distribution"
                                data={healthChartData}
                                colors={[
                                    'rgba(239, 68, 68, 0.8)',
                                    'rgba(248, 113, 113, 0.8)',
                                    'rgba(252, 165, 165, 0.8)',
                                ]}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
