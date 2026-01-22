import { useMemo } from 'react'
import Fuse from 'fuse.js'
import { useServices, useOfficials } from './use-data'

export interface SearchItem {
  id: string
  type: 'service' | 'official' | 'ordinance' | 'resolution'
  title: string
  description?: string
  category?: string
  url: string
}

export function useSearch(query: string) {
  const { data: services } = useServices()
  const { data: officials } = useOfficials()

  // Build search index
  const searchItems = useMemo<SearchItem[]>(() => {
    const items: SearchItem[] = []

    // Add services
    services?.forEach((service) => {
      items.push({
        id: service.id.toString(),
        type: 'service',
        title: service.title,
        description: service.description || undefined,
        category: service.category,
        url: `/services/${service.slug}`,
      })
    })

    // Add officials
    officials?.forEach((official) => {
      items.push({
        id: official.id.toString(),
        type: 'official',
        title: official.name,
        description: official.position,
        category: official.department || undefined,
        url: `/government`,
      })
    })

    // TODO: Add ordinances and resolutions when we have the hooks

    return items
  }, [services, officials])

  // Configure Fuse.js
  const fuse = useMemo(
    () =>
      new Fuse(searchItems, {
        keys: [
          { name: 'title', weight: 0.7 },
          { name: 'description', weight: 0.2 },
          { name: 'category', weight: 0.1 },
        ],
        threshold: 0.3,
        includeScore: true,
        minMatchCharLength: 2,
      }),
    [searchItems]
  )

  // Perform search
  const results = useMemo(() => {
    if (!query || query.length < 2) return []
    
    const fuseResults = fuse.search(query)
    return fuseResults.map((result) => result.item)
  }, [query, fuse])

  // Group results by type
  const groupedResults = useMemo(() => {
    return {
      services: results.filter((r) => r.type === 'service').slice(0, 5),
      officials: results.filter((r) => r.type === 'official').slice(0, 5),
      ordinances: results.filter((r) => r.type === 'ordinance').slice(0, 5),
      resolutions: results.filter((r) => r.type === 'resolution').slice(0, 5),
    }
  }, [results])

  return {
    results,
    groupedResults,
    totalResults: results.length,
  }
}
