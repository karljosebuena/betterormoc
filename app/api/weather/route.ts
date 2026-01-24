import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const revalidate = 1800 // 30 minutes

// Ormoc City coordinates
const ORMOC_LAT = 11.0064
const ORMOC_LON = 124.6075

interface WeatherResponse {
  current: {
    temperature_2m: number
    time: string
  }
}

export async function GET() {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${ORMOC_LAT}&longitude=${ORMOC_LON}&current=temperature_2m&timezone=Asia/Manila`

    const response = await fetch(url, {
      next: { revalidate: 1800 }, // Cache for 30 minutes
    })

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`)
    }

    const data: WeatherResponse = await response.json()

    return NextResponse.json({
      temperature: data.current.temperature_2m,
      timestamp: data.current.time,
      location: 'Ormoc',
    })
  } catch (error) {
    console.error('Weather API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    )
  }
}
