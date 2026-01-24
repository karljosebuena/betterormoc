'use client'

import { useEffect, useRef } from 'react'

interface BarangayPopulationChartProps {
  data: {
    barangays: string[]
    populations: number[]
  }
}

export function BarangayPopulationChart({
  data,
}: BarangayPopulationChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<any>(null)

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return

    const initChart = () => {
      if (!(window as any).Chart) {
        setTimeout(initChart, 100)
        return
      }

      const Chart = (window as any).Chart

      if (chartRef.current) {
        chartRef.current.destroy()
      }

      const ctx = canvasRef.current!.getContext('2d')
      if (!ctx) return

      // Create gradient colors for bars
      const colors = data.populations.map((_, index) => {
        const ratio = index / data.populations.length
        const r = Math.floor(59 + (147 - 59) * ratio)
        const g = Math.floor(130 + (197 - 130) * ratio)
        const b = Math.floor(246 + (253 - 246) * ratio)
        return `rgba(${r}, ${g}, ${b}, 0.8)`
      })

      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.barangays,
          datasets: [
            {
              label: 'Population',
              data: data.populations,
              backgroundColor: colors,
              borderColor: colors.map((c) => c.replace('0.8', '1')),
              borderWidth: 1,
              hoverBackgroundColor: colors.map((c) => c.replace('0.8', '0.9')),
              hoverBorderWidth: 2,
            },
          ],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context: any) {
                  return 'Population: ' + context.parsed.x.toLocaleString()
                },
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                callback: function (value: any) {
                  return (value / 1000).toFixed(1) + 'K'
                },
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
          animation: {
            duration: 1500,
            easing: 'easeOutQuart',
            delay: (context: any) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default') {
                delay = context.dataIndex * 50;
              }
              return delay;
            },
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
    <div className="relative h-[500px] w-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
