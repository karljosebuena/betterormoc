'use client'

import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { Search, FileText, Users, Scale, FileCheck, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
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
    const { groupedResults, totalResults } = useSearch(query)
    const router = useRouter()

    // Reset query when dialog closes
    useEffect(() => {
        if (!open) {
            setQuery('')
        }
    }, [open])

    const handleSelect = (url: string) => {
        router.push(url)
        onOpenChange(false)
    }

    const handleViewAll = () => {
        router.push(`/search?q=${encodeURIComponent(query)}`)
        onOpenChange(false)
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => onOpenChange(false)}>
            <div className="container flex min-h-screen items-start justify-center pt-[20vh]">
                <Command
                    className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center border-b border-gray-200 px-4">
                        <Search className="h-5 w-5 text-gray-400" />
                        <Command.Input
                            value={query}
                            onValueChange={setQuery}
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

                    <Command.List className="max-h-[400px] overflow-y-auto p-2">
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
                            <Command.Empty className="py-12 text-center text-sm text-gray-500">
                                No results found for &quot;{query}&quot;
                            </Command.Empty>
                        )}

                        {Object.entries(groupedResults).map(([type, items]) => {
                            if (items.length === 0) return null

                            const IconComponent = typeIcons[type as keyof typeof typeIcons]
                            const label = typeLabels[type as keyof typeof typeLabels]

                            return (
                                <Command.Group key={type} heading={label} className="mb-2">
                                    {items.map((item) => (
                                        <Command.Item
                                            key={item.id}
                                            value={item.title}
                                            onSelect={() => handleSelect(item.url)}
                                            className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-gray-100 aria-selected:bg-gray-100"
                                        >
                                            <IconComponent className="h-4 w-4 text-gray-400" />
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">{item.title}</div>
                                                {item.description && (
                                                    <div className="text-xs text-gray-500">{item.description}</div>
                                                )}
                                            </div>
                                            {item.category && (
                                                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                                    {item.category}
                                                </span>
                                            )}
                                        </Command.Item>
                                    ))}
                                </Command.Group>
                            )
                        })}

                        {totalResults > 0 && (
                            <div className="border-t border-gray-200 p-2">
                                <button
                                    onClick={handleViewAll}
                                    className="w-full rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
                                >
                                    View all {totalResults} results
                                </button>
                            </div>
                        )}
                    </Command.List>

                    <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500">
                        <div className="flex items-center justify-between">
                            <span>Navigate with ↑↓ • Select with ↵</span>
                            <span className="hidden sm:inline">Close with ESC</span>
                        </div>
                    </div>
                </Command>
            </div>
        </div>
    )
}
