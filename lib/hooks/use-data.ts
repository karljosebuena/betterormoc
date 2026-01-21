'use client'

import { useQuery } from '@tanstack/react-query'
import type { Service, Official, Statistic } from '@/lib/supabase'

// Services hooks
export function useServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await fetch('/api/services')
      if (!res.ok) throw new Error('Failed to fetch services')
      const json = await res.json()
      return json.data as Service[]
    },
  })
}

export function useServicesByCategory(category: string) {
  return useQuery({
    queryKey: ['services', 'category', category],
    queryFn: async () => {
      const res = await fetch('/api/services')
      if (!res.ok) throw new Error('Failed to fetch services')
      const json = await res.json()
      const services = json.data as Service[]
      return services.filter((s) => s.category === category)
    },
  })
}

// Officials hooks
export function useOfficials() {
  return useQuery({
    queryKey: ['officials'],
    queryFn: async () => {
      const res = await fetch('/api/officials')
      if (!res.ok) throw new Error('Failed to fetch officials')
      const json = await res.json()
      return json.data as Official[]
    },
  })
}

// Statistics hooks
export function useStatistics() {
  return useQuery({
    queryKey: ['statistics'],
    queryFn: async () => {
      const res = await fetch('/api/statistics')
      if (!res.ok) throw new Error('Failed to fetch statistics')
      const json = await res.json()
      return json.data as Statistic[]
    },
  })
}

export function useStatisticsByCategory(category: string) {
  return useQuery({
    queryKey: ['statistics', 'category', category],
    queryFn: async () => {
      const res = await fetch('/api/statistics')
      if (!res.ok) throw new Error('Failed to fetch statistics')
      const json = await res.json()
      const stats = json.data as Statistic[]
      return stats.filter((s) => s.category === category)
    },
  })
}
