'use client'

import { Suspense } from 'react'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useSearchParams } from 'next/navigation'
import { useServices } from '@/lib/hooks/use-data'
import { ServiceCard } from '@/components/services/ServiceCard'
import { BusinessOnlineServices } from '@/components/services/BusinessOnlineServices'
import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'

function ServicesPageContent() {
  const router = useRouter()
  const pathname = usePathname()
  const { data: services, isLoading } = useServices()
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category')

  // Derive selected category directly from URL
  const selectedCategory = categoryFromUrl
    ? decodeURIComponent(categoryFromUrl)
    : 'all'
  const [searchQuery, setSearchQuery] = useState('')

  // Get unique categories
  const categories = useMemo(() => {
    if (!services) return []
    const cats = Array.from(new Set(services.map((s) => s.category)))
    return ['all', ...cats.sort()]
  }, [services])

  // Filter services
  const filteredServices = useMemo(() => {
    if (!services) return []

    return services.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory
      const matchesSearch =
        searchQuery === '' ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description?.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [services, selectedCategory, searchQuery])

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gray-50" key={selectedCategory}>
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
        <div className="container">
          <h1 className="mb-4 text-4xl font-bold">
            {selectedCategory === 'all'
              ? 'Municipal Services'
              : selectedCategory}
          </h1>
          <p className="text-lg text-blue-50">
            {selectedCategory === 'all'
              ? 'Browse all available services from LGU Ormoc'
              : `Services in ${selectedCategory}`}
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Business Online Services - Show only for Business category */}
        {selectedCategory === 'Business' && <BusinessOnlineServices />}

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-12 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${selectedCategory === category
                    ? 'bg-blue-900 text-white scale-105 shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 hover:shadow-sm'
                  }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-600">
          Showing {filteredServices.length}{' '}
          {filteredServices.length === 1 ? 'service' : 'services'}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </div>

        {/* Services Grid */}
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-48 animate-pulse rounded-lg bg-gray-200"
              ></div>
            ))}
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="rounded-lg bg-white p-12 text-center">
            <p className="text-gray-600">
              No services found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="text-gray-600">Loading services...</div>
        </div>
      }
    >
      <ServicesPageContent />
    </Suspense>
  )
}
