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

// Weather hook
interface WeatherData {
  temperature: number
  timestamp: string
  location: string
}

export function useWeather() {
  return useQuery({
    queryKey: ['weather'],
    queryFn: async () => {
      const res = await fetch('/api/weather')
      if (!res.ok) throw new Error('Failed to fetch weather')
      return res.json() as Promise<WeatherData>
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
    refetchInterval: 30 * 60 * 1000, // Refetch every 30 minutes
    retry: 2,
  })
}

// Currency hook
interface CurrencyData {
  rate: number
  base: string
  target: string
  lastUpdated: number
}

export function useCurrency() {
  return useQuery({
    queryKey: ['currency'],
    queryFn: async () => {
      const res = await fetch('/api/currency')
      if (!res.ok) throw new Error('Failed to fetch currency')
      return res.json() as Promise<CurrencyData>
    },
    staleTime: 60 * 60 * 1000, // 1 hour
    refetchInterval: 60 * 60 * 1000, // Refetch every hour
    retry: 2,
  })
}
