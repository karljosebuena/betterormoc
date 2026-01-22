'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, ArrowRight, X, FileText } from 'lucide-react'
import { useRouter } from '@/i18n/navigation'
import { useSearch } from '@/lib/hooks/use-search'
import { Link } from '@/i18n/navigation'

interface SearchAutocompleteProps {
    placeholder?: string
    popularServices?: Array<{ name: string; slug: string }>
}

export function SearchAutocomplete({ placeholder, popularServices }: SearchAutocompleteProps) {
    const [query, setQuery] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const { results, totalResults } = useSearch(query)
    const router = useRouter()
    const wrapperRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Reset selected index when results change
    useEffect(() => {
        setSelectedIndex(0)
    }, [results])

    // Show dropdown when typing
    useEffect(() => {
        if (query.length > 0) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [query])

    const handleSelect = (url: string) => {
        router.push(url)
        setQuery('')
        setIsOpen(false)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            if (results[selectedIndex]) {
                handleSelect(results[selectedIndex].url)
            } else {
                router.push(`/services?q=${encodeURIComponent(query.trim())}`)
                setQuery('')
                setIsOpen(false)
            }
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsOpen(false)
            inputRef.current?.blur()
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex((prev) => Math.min(prev + 1, Math.min(results.length, 5) - 1))
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex((prev) => Math.max(prev - 1, 0))
        }
    }

    // Highlight matching text
    const highlightMatch = (text: string, query: string) => {
        if (!query) return text
        const parts = text.split(new RegExp(`(${query})`, 'gi'))
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={index} className="bg-yellow-200 font-semibold text-gray-900">
                    {part}
                </mark>
            ) : (
                part
            )
        )
    }

    const displayResults = results.slice(0, 5) // Show max 5 results

    return (
        <div ref={wrapperRef} className="relative w-full">
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    <input
                        ref={inputRef}
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onFocus={() => query.length > 0 && setIsOpen(true)}
                        placeholder={placeholder || 'e.g., birth certificate, business permit'}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Search services"
                        autoComplete="off"
                    />
                    {query && (
                        <button
                            type="button"
                            onClick={() => {
                                setQuery('')
                                setIsOpen(false)
                            }}
                            className="absolute right-12 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 hover:bg-gray-100"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700"
                        aria-label="Search"
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </form>

            {/* Autocomplete Dropdown */}
            {isOpen && query.length > 0 && (
                <div className="absolute z-[100] mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-2xl">
                    <div className="max-h-[400px] overflow-y-auto p-2">
                        {displayResults.length === 0 ? (
                            <div className="px-3 py-8 text-center text-sm text-gray-500">
                                No results found for &quot;{query}&quot;
                            </div>
                        ) : (
                            <>
                                {displayResults.map((result, index) => {
                                    const isSelected = index === selectedIndex
                                    return (
                                        <button
                                            key={result.id}
                                            onClick={() => handleSelect(result.url)}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                            className={`flex w-full cursor-pointer items-start gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
                                                }`}
                                        >
                                            <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-gray-900">
                                                    {highlightMatch(result.title, query)}
                                                </div>
                                                {result.description && (
                                                    <div className="mt-0.5 text-xs text-gray-500 line-clamp-1">
                                                        {highlightMatch(result.description, query)}
                                                    </div>
                                                )}
                                            </div>
                                            {result.category && (
                                                <span className="flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                                    {result.category}
                                                </span>
                                            )}
                                        </button>
                                    )
                                })}

                                {totalResults > 5 && (
                                    <div className="border-t border-gray-200 p-2 mt-1">
                                        <button
                                            onClick={() => {
                                                router.push(`/services?q=${encodeURIComponent(query)}`)
                                                setQuery('')
                                                setIsOpen(false)
                                            }}
                                            className="w-full rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                                        >
                                            View all {totalResults} results
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Footer hint */}
                    <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500">
                        Navigate with ↑↓ • Select with ↵ • Close with ESC
                    </div>
                </div>
            )}

            {/* Popular Services - Always render to prevent height change */}
            {popularServices && popularServices.length > 0 && (
                <div className={`mt-4 flex flex-wrap items-center gap-2 ${isOpen ? 'invisible' : 'visible'}`}>
                    <span className="text-sm font-medium text-gray-700">Popular:</span>
                    {popularServices.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
                        >
                            {service.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
