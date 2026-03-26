'use client'

import { useEffect, useState, useCallback } from 'react'
import {
  Building2,
  MapPin,
  Calendar,
  Loader2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const DPWH_API_BASE = 'https://api.transparency.dpwh.gov.ph/projects'

interface DPWHProject {
  contractId: string
  description: string
  category: string
  status: string
  budget: number
  amountPaid: number
  progress: number
  location: {
    province: string
    region: string
  }
  contractor: string | null
  startDate: string | null
  completionDate: string | null
  infraYear: string
}

interface DPWHApiResponse {
  status: number
  code: string
  data: {
    data: DPWHProject[]
    summary: {
      totalProjects: number
      completed: number
      ongoing: number
      notStarted: number
      forProcurement: number
      terminated: number
      totalBudget: number
    }
    pagination: {
      totalCount: number
    }
  }
}

interface YearData {
  projects: DPWHProject[]
  summary: DPWHApiResponse['data']['summary']
  loading: boolean
  error: string | null
}

function formatCurrency(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `₱${(amount / 1_000_000_000).toFixed(1)}B`
  } else if (amount >= 1_000_000) {
    return `₱${(amount / 1_000_000).toFixed(1)}M`
  } else if (amount >= 1_000) {
    return `₱${(amount / 1_000).toFixed(0)}K`
  }
  return `₱${amount.toLocaleString()}`
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function getStatusBadge(status: string): { className: string; label: string } {
  switch (status) {
    case 'Completed':
      return { className: 'bg-green-100 text-green-800', label: 'Completed' }
    case 'On-Going':
      return { className: 'bg-blue-100 text-blue-800', label: 'On-Going' }
    case 'For Procurement':
      return {
        className: 'bg-amber-100 text-amber-800',
        label: 'For Procurement',
      }
    case 'Terminated':
      return { className: 'bg-red-100 text-red-800', label: 'Terminated' }
    default:
      return { className: 'bg-gray-100 text-gray-800', label: status || 'Unknown' }
  }
}

function simplifyCategory(category: string): string {
  if (category.startsWith('Roads:') || category.startsWith('Road:'))
    return 'Road'
  if (category.startsWith('Bridges:')) return 'Bridge'
  if (category.startsWith('Buildings:')) return 'Building'
  if (category.toLowerCase().includes('flood')) return 'Flood Control'
  if (category.toLowerCase().includes('electrical')) return 'Electrical'
  if (category.toLowerCase().includes('drainage')) return 'Drainage'
  return 'Other'
}

function getCategoryBadgeColor(category: string): string {
  switch (category) {
    case 'Road':
      return 'bg-blue-100 text-blue-800'
    case 'Bridge':
      return 'bg-green-100 text-green-800'
    case 'Building':
      return 'bg-purple-100 text-purple-800'
    case 'Flood Control':
      return 'bg-cyan-100 text-cyan-800'
    case 'Drainage':
      return 'bg-teal-100 text-teal-800'
    case 'Electrical':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const AVAILABLE_YEARS = ['2026', '2025'] as const

function ProjectList({
  projects,
  categoryFilter,
  statusFilter,
}: {
  projects: DPWHProject[]
  categoryFilter: string
  statusFilter: string
}) {
  const filtered = projects.filter((p) => {
    if (
      categoryFilter !== 'all' &&
      simplifyCategory(p.category) !== categoryFilter
    )
      return false
    if (statusFilter !== 'all' && p.status !== statusFilter) return false
    return true
  })

  if (filtered.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-12 text-center">
        <Building2 className="mx-auto mb-3 h-12 w-12 text-gray-400" />
        <p className="text-gray-600">
          No projects found matching your filters.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Showing {filtered.length} of {projects.length} projects
      </p>
      {filtered.map((project) => {
        const simpleCategory = simplifyCategory(project.category)
        const statusBadge = getStatusBadge(project.status)

        return (
          <div
            key={project.contractId}
            className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-gray-500">
                    {project.contractId}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getCategoryBadgeColor(simpleCategory)}`}
                  >
                    {simpleCategory}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadge.className}`}
                  >
                    {statusBadge.label}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {project.description
                    .replace(/\r\n/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim()}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{project.location.province}</span>
                </div>
              </div>
              {project.budget > 0 && (
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    {formatCurrency(project.budget)}
                  </div>
                  <div className="text-xs text-gray-500">Budget</div>
                </div>
              )}
            </div>

            <div className="grid gap-4 border-t border-gray-100 pt-4 md:grid-cols-3">
              <div>
                <div className="text-xs font-medium text-gray-500">
                  Contractor
                </div>
                <div className="mt-1 text-sm text-gray-900">
                  {project.contractor || 'TBD'}
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500">
                  Infra Year
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-900">
                  <Calendar className="h-3.5 w-3.5" />
                  {project.infraYear}
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500">
                  Target Completion
                </div>
                <div className="mt-1 text-sm text-gray-900">
                  {formatDate(project.completionDate)}
                </div>
              </div>
            </div>

            {project.progress > 0 && project.status !== 'Completed' && (
              <div className="mt-4">
                <div className="mb-1 flex justify-between text-xs text-gray-600">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-blue-600 transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            )}

            {project.amountPaid > 0 && (
              <div className="mt-3 text-sm text-gray-500">
                Amount paid: {formatCurrency(project.amountPaid)}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function DPWHProjects() {
  const [yearData, setYearData] = useState<Record<string, YearData>>({})
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const fetchYear = useCallback(async (year: string) => {
    setYearData((prev) => ({
      ...prev,
      [year]: {
        projects: prev[year]?.projects ?? [],
        summary: prev[year]?.summary ?? {
          totalProjects: 0,
          completed: 0,
          ongoing: 0,
          notStarted: 0,
          forProcurement: 0,
          terminated: 0,
          totalBudget: 0,
        },
        loading: true,
        error: null,
      },
    }))

    try {
      const url = `${DPWH_API_BASE}?page=1&limit=100&search=ormoc&region=${encodeURIComponent('Region VIII')}&province=LEYTE&year=${year}`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Failed to fetch (${response.status})`)
      }

      const result: DPWHApiResponse = await response.json()

      setYearData((prev) => ({
        ...prev,
        [year]: {
          projects: result.data.data,
          summary: result.data.summary,
          loading: false,
          error: null,
        },
      }))
    } catch (err) {
      setYearData((prev) => ({
        ...prev,
        [year]: {
          ...prev[year],
          loading: false,
          error:
            err instanceof Error ? err.message : 'Failed to load projects',
        },
      }))
    }
  }, [])

  useEffect(() => {
    // Fetch both years on mount
    AVAILABLE_YEARS.forEach((year) => fetchYear(year))
  }, [fetchYear])

  const renderYearContent = (year: string) => {
    const data = yearData[year]

    if (!data || data.loading) {
      return (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
          <span className="ml-3 text-gray-600">
            Loading {year} projects from DPWH Transparency Portal...
          </span>
        </div>
      )
    }

    if (data.error) {
      return (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <AlertCircle className="mx-auto mb-2 h-8 w-8 text-red-500" />
          <p className="text-red-800">
            Unable to load DPWH project data for {year}. The transparency portal
            may be temporarily unavailable.
          </p>
          <p className="mt-2 text-sm text-red-600">{data.error}</p>
          <button
            onClick={() => fetchYear(year)}
            className="mt-4 rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-200"
          >
            Retry
          </button>
        </div>
      )
    }

    const { projects, summary } = data

    // Derive filter options from this year's data
    const availableCategories = [
      ...new Set(projects.map((p) => simplifyCategory(p.category))),
    ].sort()
    const availableStatuses = [...new Set(projects.map((p) => p.status))].sort()

    return (
      <div className="space-y-6">
        {/* Summary Bar */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">
              {summary.totalProjects}
            </div>
            <div className="text-sm text-gray-600">Total Projects</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {summary.totalBudget > 0
                ? formatCurrency(summary.totalBudget)
                : '—'}
            </div>
            <div className="text-sm text-gray-600">Total Budget</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {summary.completed}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {summary.ongoing + summary.forProcurement}
            </div>
            <div className="text-sm text-gray-600">Ongoing / Procurement</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
          >
            <option value="all">All Categories</option>
            {availableCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
          >
            <option value="all">All Statuses</option>
            {availableStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          {(categoryFilter !== 'all' || statusFilter !== 'all') && (
            <button
              onClick={() => {
                setCategoryFilter('all')
                setStatusFilter('all')
              }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
            >
              Clear filters
            </button>
          )}
        </div>

        <ProjectList
          projects={projects}
          categoryFilter={categoryFilter}
          statusFilter={statusFilter}
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs
        defaultValue="2026"
        onValueChange={() => {
          // Reset filters when switching tabs
          setCategoryFilter('all')
          setStatusFilter('all')
        }}
      >
        <TabsList className="grid w-full grid-cols-2 sm:w-auto sm:inline-grid">
          <TabsTrigger value="2026">2026 Projects</TabsTrigger>
          <TabsTrigger value="2025">2025 Projects</TabsTrigger>
        </TabsList>

        {AVAILABLE_YEARS.map((year) => (
          <TabsContent key={year} value={year}>
            {renderYearContent(year)}
          </TabsContent>
        ))}
      </Tabs>

      {/* Data Source Attribution */}
      <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
        <p className="text-sm text-blue-900">
          <strong>Data Source:</strong> DPWH Transparency Portal
          (transparency.dpwh.gov.ph).{' '}
          <a
            href="https://transparency.dpwh.gov.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium underline hover:text-blue-700"
          >
            View on DPWH Portal
            <ExternalLink className="h-3 w-3" />
          </a>
        </p>
      </div>
    </div>
  )
}
