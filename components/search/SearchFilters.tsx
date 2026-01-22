'use client'

interface SearchFiltersProps {
    currentType: string
    currentSort: string
    onTypeChange: (type: string) => void
    onSortChange: (sort: string) => void
}

const filters = [
    { label: 'All', value: '' },
    { label: 'Services', value: 'service' },
    { label: 'Officials', value: 'official' },
    { label: 'Ordinances', value: 'ordinance' },
    { label: 'Resolutions', value: 'resolution' },
]

const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Alphabetical (A-Z)', value: 'alphabetical' },
    { label: 'Date (Newest)', value: 'date' },
]

export function SearchFilters({
    currentType,
    currentSort,
    onTypeChange,
    onSortChange,
}: SearchFiltersProps) {
    return (
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Type Filters */}
            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        onClick={() => onTypeChange(filter.value)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${currentType === filter.value
                                ? 'bg-blue-900 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-gray-600">
                    Sort by:
                </label>
                <select
                    id="sort"
                    value={currentSort}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                >
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
