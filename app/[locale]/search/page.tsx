'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter, Link } from '@/i18n/navigation'
import { Search, X } from 'lucide-react'
import { useSearch, SearchItem } from '@/lib/hooks/use-search'
import { useState, useEffect } from 'react'
import { SearchResultCard } from '@/components/search/SearchResultCard'
import { SearchFilters } from '@/components/search/SearchFilters'
import { Pagination } from '@/components/search/Pagination'

const RESULTS_PER_PAGE = 20

function SearchPageContent() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const query = searchParams.get('q') || ''
    const type = searchParams.get('type') || ''
    const sort = searchParams.get('sort') || 'relevance'
    const page = parseInt(searchParams.get('page') || '1')

    const [searchInput, setSearchInput] = useState(query)

    const { results, groupedResults, totalResults } = useSearch(query)

    // Update input when URL changes
    useEffect(() => {
        setSearchInput(query)
    }, [query])

    // Filter by type
    const filteredResults = type
        ? results.filter((r) => r.type === type)
        : results

    // Sort results
    const sortedResults = sortResults(filteredResults, sort)

    // Paginate
    const totalPages = Math.ceil(sortedResults.length / RESULTS_PER_PAGE)
    const paginatedResults = sortedResults.slice(
        (page - 1) * RESULTS_PER_PAGE,
        page * RESULTS_PER_PAGE
    )

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchInput.trim()) {
            updateURL({ q: searchInput.trim(), page: '1' })
        }
    }

    const updateURL = (params: Record<string, string>) => {
        const newParams = new URLSearchParams(searchParams.toString())
        Object.entries(params).forEach(([key, value]) => {
            if (value) {
                newParams.set(key, value)
            } else {
                newParams.delete(key)
            }
        })
        router.push(`/search?${newParams.toString()}`)
    }

    const clearSearch = () => {
        setSearchInput('')
        router.push('/search')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container py-8">
                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-gray-600">
                    <Link href="/" className="hover:text-blue-900">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-900">Search Results</span>
                </nav>

                {/* Search Input */}
                <div className="mb-8">
                    <form onSubmit={handleSearch} className="relative">
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    placeholder="Search services, officials, ordinances..."
                                    className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-12 text-base outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                                />
                                {searchInput && (
                                    <button
                                        type="button"
                                        onClick={clearSearch}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded p-1 hover:bg-gray-100"
                                    >
                                        <X className="h-5 w-5 text-gray-400" />
                                    </button>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="rounded-lg bg-blue-900 px-6 py-3 font-medium text-white hover:bg-blue-800"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {!query ? (
                    // Empty state - no query
                    <div className="py-16 text-center">
                        <Search className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                        <h2 className="mb-2 text-xl font-semibold text-gray-900">
                            Enter a search term to get started
                        </h2>
                        <p className="text-gray-600">
                            Search for services, officials, ordinances, and more
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Filters and Sort */}
                        <SearchFilters
                            currentType={type}
                            currentSort={sort}
                            onTypeChange={(newType) => updateURL({ type: newType, page: '1' })}
                            onSortChange={(newSort) => updateURL({ sort: newSort, page: '1' })}
                        />

                        {/* Results Count */}
                        <div className="mb-6 text-sm text-gray-600">
                            {filteredResults.length === 0 ? (
                                <span>No results found</span>
                            ) : (
                                <span>
                                    {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                                    {type && ` in ${type}s`}
                                </span>
                            )}
                        </div>

                        {filteredResults.length === 0 ? (
                            // Empty state - no results
                            <div className="py-16 text-center">
                                <Search className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                                <h2 className="mb-2 text-xl font-semibold text-gray-900">
                                    No results found for &quot;{query}&quot;
                                </h2>
                                <p className="mb-4 text-gray-600">
                                    Try adjusting your search or filters
                                </p>
                                <button
                                    onClick={() => updateURL({ type: '', sort: 'relevance' })}
                                    className="text-blue-900 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Results List */}
                                <div className="space-y-8">
                                    {Object.entries(groupedResults).map(([resultType, items]) => {
                                        if (type && resultType !== type) return null
                                        if (items.length === 0) return null

                                        const typeLabel = {
                                            service: 'Services',
                                            official: 'Officials',
                                            ordinance: 'Ordinances',
                                            resolution: 'Resolutions',
                                        }[resultType] || resultType

                                        const typeItems = sortResults(items, sort)
                                        const startIndex = (page - 1) * RESULTS_PER_PAGE
                                        const endIndex = page * RESULTS_PER_PAGE
                                        const pageItems = typeItems.slice(startIndex, endIndex)

                                        if (pageItems.length === 0 && !type) return null

                                        return (
                                            <div key={resultType}>
                                                <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-gray-500">
                                                    {typeLabel} ({typeItems.length})
                                                </h2>
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    {pageItems.map((item) => (
                                                        <SearchResultCard key={item.id} item={item} query={query} />
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <Pagination
                                        currentPage={page}
                                        totalPages={totalPages}
                                        onPageChange={(newPage) => updateURL({ page: newPage.toString() })}
                                    />
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-gray-600">Loading search...</div>
        </div>}>
            <SearchPageContent />
        </Suspense>
    )
}

function sortResults(results: SearchItem[], sort: string): SearchItem[] {
    const sorted = [...results]

    switch (sort) {
        case 'alphabetical':
            return sorted.sort((a, b) => a.title.localeCompare(b.title))
        case 'date':
            // For now, just return as-is (would need created_at field)
            return sorted
        case 'relevance':
        default:
            // Already sorted by Fuse.js relevance
            return sorted
    }
}
