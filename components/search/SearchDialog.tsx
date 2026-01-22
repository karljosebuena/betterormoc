'use client'

import { useEffect, useState, useRef } from 'react'
import { Search, FileText, Users, Scale, FileCheck, X } from 'lucide-react'
import { useRouter } from '@/i18n/navigation'
import { useSearch } from '@/lib/hooks/use-search'

interface SearchDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const typeIcons = {
    service: FileText,
    official: Users,
    ordinance: Scale,
    resolution: FileCheck,
}

const typeLabels = {
    service: 'Services',
    official: 'Officials',
    ordinance: 'Ordinances',
    resolution: 'Resolutions',
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
    const [query, setQuery] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const { groupedResults, totalResults, results } = useSearch(query)
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)

    // Reset query when dialog closes
    useEffect(() => {
        if (!open) {
            setQuery('')
            setSelectedIndex(0)
        } else {
            // Focus input when dialog opens
            setTimeout(() => inputRef.current?.focus(), 100)
        }
    }, [open])

    // Reset selected index when results change
    useEffect(() => {
        setSelectedIndex(0)
    }, [results])

    const handleSelect = (url: string) => {
        router.push(url)
        onOpenChange(false)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            onOpenChange(false)
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1))
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex((prev) => Math.max(prev - 1, 0))
        } else if (e.key === 'Enter' && results[selectedIndex]) {
            e.preventDefault()
            handleSelect(results[selectedIndex].url)
        }
    }

    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => onOpenChange(false)}
        >
            <div className="container flex min-h-screen items-start justify-center pt-[20vh]">
                <div
                    className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Search Input */}
                    <div className="flex items-center border-b border-gray-200 px-4">
                        <Search className="h-5 w-5 text-gray-400" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search services, officials, ordinances..."
                            className="flex-1 border-0 bg-transparent px-4 py-4 text-base outline-none placeholder:text-gray-400"
                        />
                        {query && (
                            <button
                                onClick={() => setQuery('')}
                                className="rounded p-1 hover:bg-gray-100"
                            >
                                <X className="h-4 w-4 text-gray-400" />
                            </button>
                        )}
                        <kbd className="ml-2 hidden rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 sm:inline-block">
                            ESC
                        </kbd>
                    </div>

                    {/* Results */}
                    <div className="max-h-[400px] overflow-y-auto p-2">
                        {query.length === 0 && (
                            <div className="py-12 text-center text-sm text-gray-500">
                                <Search className="mx-auto mb-2 h-8 w-8 text-gray-300" />
                                <p>Type to search services, officials, and documents</p>
                                <p className="mt-1 text-xs">
                                    Press <kbd className="rounded bg-gray-100 px-1">⌘K</kbd> to open
                                </p>
                            </div>
                        )}

                        {query.length > 0 && totalResults === 0 && (
                            <div className="py-12 text-center text-sm text-gray-500">
                                No results found for &quot;{query}&quot;
                            </div>
                        )}

                        {Object.entries(groupedResults).map(([type, items]) => {
                            if (items.length === 0) return null

                            const label = typeLabels[type as keyof typeof typeLabels]

                            return (
                                <div key={type} className="mb-4">
                                    <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        {label}
                                    </div>
                                    {items.map((item) => {
                                        const globalIndex = results.findIndex((r) => r.id === item.id)
                                        const isSelected = globalIndex === selectedIndex
                                        const IconComponent = typeIcons[item.type as keyof typeof typeIcons]

                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => handleSelect(item.url)}
                                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                                className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${isSelected ? 'bg-gray-100' : 'hover:bg-gray-50'
                                                    }`}
                                            >
                                                <IconComponent className="h-4 w-4 flex-shrink-0 text-gray-400" />
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium text-gray-900 truncate">{item.title}</div>
                                                    {item.description && (
                                                        <div className="text-xs text-gray-500 truncate">{item.description}</div>
                                                    )}
                                                </div>
                                                {item.category && (
                                                    <span className="flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                                        {item.category}
                                                    </span>
                                                )}
                                            </button>
                                        )
                                    })}
                                </div>
                            )
                        })}

                        {totalResults > 10 && (
                            <div className="border-t border-gray-200 p-2">
                                <button
                                    onClick={() => {
                                        router.push(`/search?q=${encodeURIComponent(query)}`)
                                        onOpenChange(false)
                                    }}
                                    className="w-full rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
                                >
                                    View all {totalResults} results
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500">
                        <div className="flex items-center justify-between">
                            <span>Navigate with ↑↓ • Select with ↵</span>
                            <span className="hidden sm:inline">Close with ESC</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
