'use client'

import { useEffect, useState } from 'react'
import { DollarSign, CloudSun, Clock } from 'lucide-react'
import { useWeather, useCurrency } from '@/lib/hooks/use-data'

export function InfoBar() {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  // Fetch real-time data
  const { data: weather } = useWeather()
  const { data: currency } = useCurrency()

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()

      // Format time for Philippine timezone
      const timeFormatter = new Intl.DateTimeFormat('en-PH', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })

      // Format date for Philippine timezone
      const dateFormatter = new Intl.DateTimeFormat('en-PH', {
        timeZone: 'Asia/Manila',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })

      setTime(timeFormatter.format(now))
      setDate(dateFormatter.format(now))
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border-b border-gray-200 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-2 text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span>
                1 USD = ₱ {currency?.rate ? currency.rate.toFixed(2) : '--'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CloudSun className="h-4 w-4" />
              <span>{weather?.location || 'Ormoc'}</span>
              <span className="font-medium">
                {weather?.temperature
                  ? `${Math.round(weather.temperature)}°C`
                  : '--°C'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{date || '--- --, ----'}</span>
              <span>•</span>
              <span className="font-medium">{time || '--:-- --'}</span>
              <span className="text-xs">PHT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
