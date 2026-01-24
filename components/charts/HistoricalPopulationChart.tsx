'use client'

import { useEffect, useRef } from 'react'

interface HistoricalPopulationChartProps {
  data: {
    years: number[]
    populations: number[]
  }
}

export function HistoricalPopulationChart({
  data,
}: HistoricalPopulationChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<any>(null)

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return

    // Wait for Chart.js to load
    const initChart = () => {
      if (!(window as any).Chart) {
        setTimeout(initChart, 100)
        return
      }

      const Chart = (window as any).Chart

      // Destroy existing chart
      if (chartRef.current) {
        chartRef.current.destroy()
      }

      const ctx = canvasRef.current!.getContext('2d')
      if (!ctx) return

      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.years,
          datasets: [
            {
              label: 'Population',
              data: data.populations,
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              pointHoverRadius: 8,
              pointBackgroundColor: 'rgb(59, 130, 246)',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointHoverBackgroundColor: 'rgb(37, 99, 235)',
              pointHoverBorderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context: any) {
                  return 'Population: ' + context.parsed.y.toLocaleString()
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: false,
              ticks: {
                callback: function (value: any) {
                  return (value / 1000).toFixed(0) + 'K'
                },
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          animation: {
            duration: 1500,
            easing: 'easeInOutQuart',
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
        },
      })
    }

    initChart()

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [data])

  return (
    <div className="relative h-[300px] w-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
