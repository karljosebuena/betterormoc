'use client'

import { useEffect, useState } from 'react'
import { DollarSign, CloudSun, Clock } from 'lucide-react'

export function InfoBar() {
    const [time, setTime] = useState<string>('')
    const [date, setDate] = useState<string>('')

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()
            setTime(
                now.toLocaleTimeString('en-PH', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                })
            )
            setDate(
                now.toLocaleDateString('en-PH', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                })
            )
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
                            <span>1 USD = ₱ --</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CloudSun className="h-4 w-4" />
                            <span>Ormoc</span>
                            <span className="font-medium">--°C</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{date}</span>
                            <span>•</span>
                            <span className="font-medium">{time}</span>
                            <span className="text-xs">PHT</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
