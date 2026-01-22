'use client'

import { useEffect, useRef } from 'react'

interface SectorPieChartProps {
    title: string
    data: {
        labels: string[]
        values: number[]
    }
    colors?: string[]
}

const DEFAULT_COLORS = [
    'rgba(59, 130, 246, 0.8)',   // Blue
    'rgba(16, 185, 129, 0.8)',   // Green
    'rgba(245, 158, 11, 0.8)',   // Orange
    'rgba(139, 92, 246, 0.8)',   // Purple
    'rgba(236, 72, 153, 0.8)',   // Pink
    'rgba(14, 165, 233, 0.8)',   // Cyan
    'rgba(251, 146, 60, 0.8)',   // Orange-light
    'rgba(168, 85, 247, 0.8)',   // Purple-light
]

export function SectorPieChart({ title, data, colors = DEFAULT_COLORS }: SectorPieChartProps) {
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

            chartRef.current = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: data.labels,
                    datasets: [{
                        data: data.values,
                        backgroundColor: colors,
                        borderColor: colors.map(c => c.replace('0.8', '1')),
                        borderWidth: 2,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                font: {
                                    size: 11
                                },
                                generateLabels: function (chart: any) {
                                    const data = chart.data
                                    if (data.labels.length && data.datasets.length) {
                                        return data.labels.map((label: string, i: number) => {
                                            const value = data.datasets[0].data[i]
                                            const total = data.datasets[0].data.reduce((a: number, b: number) => a + b, 0)
                                            const percentage = ((value / total) * 100).toFixed(1)
                                            return {
                                                text: `${label} (${percentage}%)`,
                                                fillStyle: data.datasets[0].backgroundColor[i],
                                                hidden: false,
                                                index: i
                                            }
                                        })
                                    }
                                    return []
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context: any) {
                                    const label = context.label || ''
                                    const value = context.parsed
                                    const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
                                    const percentage = ((value / total) * 100).toFixed(1)
                                    return `${label}: ${value.toLocaleString()} (${percentage}%)`
                                }
                            }
                        }
                    }
                }
            })
        }

        initChart()

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy()
            }
        }
    }, [data, colors])

    return (
        <div className="space-y-3">
            <h3 className="text-center text-lg font-semibold text-gray-900">{title}</h3>
            <div className="relative h-[280px] w-full">
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    )
}
