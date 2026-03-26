'use client'

import { useEffect, useState } from 'react'
import {
  Building2,
  MapPin,
  Calendar,
  Loader2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react'

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

interface DPWHSummary {
  totalProjects: number
  completed: number
  ongoing: number
  forProcurement: number
  terminated: number
  totalBudget: number
  totalAmountPaid: number
}

interface DPWHResponse {
  projects: DPWHProject[]
  summary: DPWHSummary
  years: number[]
  source: string
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
      return {
        className: 'bg-green-100 text-green-800',
        label: 'Completed',
      }
    case 'On-Going':
      return {
        className: 'bg-blue-100 text-blue-800',
        label: 'On-Going',
      }
    case 'For Procurement':
      return {
        className: 'bg-amber-100 text-amber-800',
        label: 'For Procurement',
      }
    case 'Terminated':
      return {
        className: 'bg-red-100 text-red-800',
        label: 'Terminated',
      }
    default:
      return {
        className: 'bg-gray-100 text-gray-800',
        label: status || 'Unknown',
      }
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

export function DPWHProjects() {
  const [data, setData] = useState<DPWHResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [yearFilter, setYearFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/dpwh-projects')
        if (!response.ok) throw new Error('Failed to fetch DPWH projects')
        const result: DPWHResponse = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
        <span className="ml-3 text-gray-600">
          Loading DPWH projects from transparency portal...
        </span>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
        <AlertCircle className="mx-auto mb-2 h-8 w-8 text-red-500" />
        <p className="text-red-800">
          Unable to load DPWH project data. The transparency portal may be
          temporarily unavailable.
        </p>
        <p className="mt-2 text-sm text-red-600">{error}</p>
      </div>
    )
  }

  const { projects, summary, source } = data

  // Derive unique years and categories for filters
  const availableYears = [...new Set(projects.map((p) => p.infraYear))].sort(
    (a, b) => b.localeCompare(a)
  )
  const availableCategories = [
    ...new Set(projects.map((p) => simplifyCategory(p.category))),
  ].sort()
  const availableStatuses = [...new Set(projects.map((p) => p.status))].sort()

  // Apply filters
  const filteredProjects = projects.filter((p) => {
    if (yearFilter !== 'all' && p.infraYear !== yearFilter) return false
    if (
      categoryFilter !== 'all' &&
      simplifyCategory(p.category) !== categoryFilter
    )
      return false
    if (statusFilter !== 'all' && p.status !== statusFilter) return false
    return true
  })

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
        {/* Year filter */}
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
        >
          <option value="all">All Years ({projects.length})</option>
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year} ({projects.filter((p) => p.infraYear === year).length})
            </option>
          ))}
        </select>

        {/* Category filter */}
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

        {/* Status filter */}
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

        {filteredProjects.length !== projects.length && (
          <button
            onClick={() => {
              setYearFilter('all')
              setCategoryFilter('all')
              setStatusFilter('all')
            }}
            className="rounded-lg px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
          >
            Clear filters
          </button>
        )}
      </div>

      <p className="text-sm text-gray-500">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => {
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

      {filteredProjects.length === 0 && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-12 text-center">
          <Building2 className="mx-auto mb-3 h-12 w-12 text-gray-400" />
          <p className="text-gray-600">
            No projects found matching your filters.
          </p>
        </div>
      )}

      {/* Data Source Attribution */}
      <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
        <p className="text-sm text-blue-900">
          <strong>Data Source:</strong> {source}.{' '}
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
