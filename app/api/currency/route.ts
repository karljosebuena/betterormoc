import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const revalidate = 3600 // 1 hour

interface ExchangeRateResponse {
  base: string
  rates: {
    PHP: number
  }
  time_last_updated: number
}

export async function GET() {
  try {
    const url = 'https://api.exchangerate-api.com/v4/latest/USD'
    
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Currency API error: ${response.status}`)
    }

    const data: ExchangeRateResponse = await response.json()

    return NextResponse.json({
      rate: data.rates.PHP,
      base: 'USD',
      target: 'PHP',
      lastUpdated: data.time_last_updated,
    })
  } catch (error) {
    console.error('Currency API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch currency data' },
      { status: 500 }
    )
  }
}
