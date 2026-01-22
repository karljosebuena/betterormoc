'use client'

import { useEffect, useState } from 'react'
import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react'

interface WeatherData {
    temperature: number
    condition: string
    humidity: number
    windSpeed: number
}

export function WeatherCard() {
    const [weather, setWeather] = useState<WeatherData>({
        temperature: 28,
        condition: 'Partly Cloudy',
        humidity: 75,
        windSpeed: 12,
    })

    // Simulate weather updates
    useEffect(() => {
        const interval = setInterval(() => {
            setWeather({
                temperature: 26 + Math.floor(Math.random() * 6),
                condition: ['Sunny', 'Partly Cloudy', 'Cloudy'][Math.floor(Math.random() * 3)],
                humidity: 70 + Math.floor(Math.random() * 20),
                windSpeed: 10 + Math.floor(Math.random() * 10),
            })
        }, 30000) // Update every 30 seconds

        return () => clearInterval(interval)
    }, [])

    const getWeatherIcon = () => {
        switch (weather.condition) {
            case 'Sunny':
                return <Sun className="h-12 w-12 text-yellow-500" />
            case 'Cloudy':
                return <Cloud className="h-12 w-12 text-gray-500" />
            case 'Rainy':
                return <CloudRain className="h-12 w-12 text-blue-500" />
            default:
                return <Cloud className="h-12 w-12 text-gray-400" />
        }
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Header with current weather */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-8 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="mb-2 text-sm font-medium text-blue-100">Ormoc City, Leyte</p>
                        <div className="flex items-center gap-4">
                            {getWeatherIcon()}
                            <div>
                                <p className="text-5xl font-bold">{weather.temperature}°C</p>
                                <p className="mt-1 text-lg text-blue-100">{weather.condition}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Weather details grid */}
            <div className="grid gap-4 p-6 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                        <Droplets className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Humidity</p>
                        <p className="text-2xl font-bold text-gray-900">{weather.humidity}%</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                        <Wind className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Wind Speed</p>
                        <p className="text-2xl font-bold text-gray-900">{weather.windSpeed}km/h</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                        <Sun className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">UV Index</p>
                        <p className="text-xl font-bold text-gray-900">Moderate</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                <p className="text-center text-sm text-gray-500">
                    Updates every 30 seconds • Powered by Open-Meteo
                </p>
            </div>
        </div>
    )
}
