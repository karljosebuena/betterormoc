'use client'

import Link from 'next/link'
import { Phone, Heart, Flame, Building, AlertTriangle, Truck } from 'lucide-react'

const hotlines = [
    {
        icon: Phone,
        label: 'Police',
        number: '0927 400 8033',
        href: 'tel:09274008033',
    },
    {
        icon: Heart,
        label: 'MSWDO',
        number: '0916 284 0885',
        href: 'tel:09162840885',
    },
    {
        icon: Flame,
        label: 'Fire',
        number: '0936 062 0305',
        href: 'tel:09360620305',
    },
    {
        icon: Building,
        label: 'DILG',
        number: '0906 188 086',
        href: 'tel:0906188086',
    },
    {
        icon: AlertTriangle,
        label: 'MDRRMO',
        number: '0926 383 3744',
        href: 'tel:09263833744',
    },
    {
        icon: Truck,
        label: 'R2TMC',
        number: '0906 819 5569',
        href: 'tel:09068195569',
    },
]

export function HotlineBar() {
    return (
        <div className="border-b border-gray-200 bg-red-600 text-white">
            <div className="container">
                <div className="flex items-center gap-4 overflow-x-auto py-2 scrollbar-hide">
                    {hotlines.map((hotline) => (
                        <Link
                            key={hotline.label}
                            href={hotline.href}
                            className="flex items-center gap-2 whitespace-nowrap text-sm transition-opacity hover:opacity-80"
                        >
                            <hotline.icon className="h-4 w-4" />
                            <span className="font-medium">{hotline.label}:</span>
                            <span>{hotline.number}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
