'use client'

import { useEffect, useState } from 'react'
import {
  DollarSign,
  FileText,
  TrendingUp,
  Users,
  Loader2,
  Building2,
  Heart,
} from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { DPWHProjects } from '@/components/budget/DPWHProjects'

interface BudgetOverview {
  year: number
  total_budget: number
  total_revenue: number
  total_expenditure: number
  surplus_deficit: number
}

interface RevenueSource {
  source_name: string
  category: string
  amount: number
  percentage: number
}

interface ExpenditureCategory {
  category_name: string
  sector: string
  amount: number
  percentage: number
}

interface MajorProject {
  project_name: string
  sector: string
  budget_allocation: number
  status: string
}

interface BudgetDocument {
  title: string
  description: string
  document_type: string
  file_size: string
  year: number
}

interface BudgetData {
  overview: BudgetOverview | null
  revenue: RevenueSource[]
  expenditure: ExpenditureCategory[]
  projects: MajorProject[]
  documents: BudgetDocument[]
}

function formatCurrency(amount: number): string {
  if (amount >= 1000000000) {
    return `₱${(amount / 1000000000).toFixed(1)}B`
  } else if (amount >= 1000000) {
    return `₱${(amount / 1000000).toFixed(0)}M`
  }
  return `₱${amount.toLocaleString()}`
}

export default function BudgetPage() {
  const [budgetData, setBudgetData] = useState<BudgetData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBudgetData() {
      try {
        const response = await fetch('/api/budget')
        if (!response.ok) throw new Error('Failed to fetch budget data')
        const result = await response.json()
        setBudgetData(result.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }
    fetchBudgetData()
  }, [])

  // Calculate sector totals for expenditure
  const sectorTotals =
    budgetData?.expenditure.reduce(
      (acc, item) => {
        if (!acc[item.sector]) {
          acc[item.sector] = { amount: 0, percentage: 0 }
        }
        acc[item.sector].amount += item.amount
        acc[item.sector].percentage += item.percentage
        return acc
      },
      {} as Record<string, { amount: number; percentage: number }>
    ) || {}

  const sortedSectors = Object.entries(sectorTotals).sort(
    (a, b) => b[1].amount - a[1].amount
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold">Budget Transparency</h1>
            <p className="text-lg text-blue-50">
              Open access to Ormoc City&apos;s financial information
            </p>
          </div>
        </div>
        <div className="container flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <span className="ml-3 text-gray-600">Loading budget data...</span>
        </div>
      </div>
    )
  }

  if (error || !budgetData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
          <div className="container">
            <h1 className="mb-4 text-4xl font-bold">Budget Transparency</h1>
            <p className="text-lg text-blue-50">
              Open access to Ormoc City&apos;s financial information
            </p>
          </div>
        </div>
        <div className="container py-12">
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-red-800">
              Error: {error || 'Failed to load budget data'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const { overview, revenue, expenditure, projects, documents } = budgetData

  // Calculate category totals for revenue
  const revenueByCategory = revenue.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0
      }
      acc[item.category] += item.amount
      return acc
    },
    {} as Record<string, number>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
        <div className="container">
          <h1 className="mb-4 text-4xl font-bold">Budget Transparency</h1>
          <p className="text-lg text-blue-50">
            Open access to Ormoc City&apos;s financial information
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Overview */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Commitment to Transparency
            </h2>
            <p className="text-gray-600">
              The City Government of Ormoc is committed to financial
              transparency and accountability. We believe that citizens have the
              right to know how public funds are being used to serve the
              community.
            </p>
          </div>

          {/* Budget Highlights */}
          {overview && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-blue-300 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 transition-transform duration-300 group-hover:scale-105">
                  {formatCurrency(overview.total_budget)}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Annual Budget ({overview.year})
                </div>
              </div>

              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-green-300 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 transition-transform duration-300 group-hover:scale-105">
                  {formatCurrency(overview.total_revenue)}
                </div>
                <div className="mt-2 text-sm text-gray-600">Total Revenue</div>
              </div>

              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-purple-300 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3 text-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 transition-transform duration-300 group-hover:scale-105">
                  {formatCurrency(sectorTotals['social_services']?.amount || 0)}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Social Services
                </div>
              </div>

              <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-orange-300 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3 text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 transition-transform duration-300 group-hover:scale-105">
                  {formatCurrency(sectorTotals['infrastructure']?.amount || 0)}
                </div>
                <div className="mt-2 text-sm text-gray-600">Infrastructure</div>
              </div>
            </div>
          )}

          {/* Revenue Sources */}
          {revenue.length > 0 && (
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Revenue Sources
              </h2>
              <div className="space-y-4">
                {Object.entries(revenueByCategory)
                  .sort((a, b) => b[1] - a[1])
                  .map(([category, amount]) => {
                    const percentage = overview
                      ? (amount / overview.total_revenue) * 100
                      : 0
                    return (
                      <div key={category}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-700 capitalize">
                            {category}
                          </span>
                          <span className="text-gray-600">
                            {formatCurrency(amount)} ({percentage.toFixed(1)}%)
                          </span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-gray-200">
                          <div
                            className="h-3 rounded-full bg-green-600"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          )}

          {/* Budget Allocation by Sector */}
          {sortedSectors.length > 0 && (
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Budget Allocation by Sector
              </h2>
              <div className="space-y-4">
                {sortedSectors.map(([sector, data]) => {
                  const sectorName = sector
                    .replace(/_/g, ' ')
                    .replace(/\b\w/g, (l) => l.toUpperCase())
                  const colors: Record<string, string> = {
                    social_services: 'bg-blue-900',
                    infrastructure: 'bg-orange-600',
                    education: 'bg-purple-600',
                    health: 'bg-red-600',
                    administration: 'bg-gray-600',
                    other: 'bg-green-600',
                  }
                  return (
                    <div key={sector}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-700">
                          {sectorName}
                        </span>
                        <span className="text-gray-600">
                          {formatCurrency(data.amount)} (
                          {data.percentage.toFixed(1)}%)
                        </span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-gray-200">
                        <div
                          className={`h-3 rounded-full ${colors[sector] || 'bg-blue-600'}`}
                          style={{ width: `${data.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Major Projects */}
          {projects.length > 0 && (
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Major Projects 2025
              </h2>
              <div className="space-y-3">
                {projects.slice(0, 10).map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">
                        {project.project_name}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">
                        {project.status}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-blue-900">
                        {formatCurrency(project.budget_allocation)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DPWH Infrastructure Projects */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  DPWH Infrastructure Projects
                </h2>
              </div>
              <p className="text-gray-600">
                National government infrastructure projects implemented in Ormoc
                City
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Implementing Agency: DPWH Leyte 2nd District Engineering Office
              </p>
            </div>
            <DPWHProjects />
          </div>

          {/* Budget Documents */}
          {documents.length > 0 && (
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Budget Documents
              </h2>
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{doc.title}</p>
                        <p className="text-sm text-gray-500">
                          {doc.description}
                        </p>
                        <p className="text-xs text-gray-400">{doc.file_size}</p>
                      </div>
                    </div>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-8 text-center">
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Questions About Our Budget?
            </h3>
            <p className="mb-6 text-gray-600">
              Contact our Budget Office for more information
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
