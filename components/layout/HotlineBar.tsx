'use client'

import { Link } from '@/i18n/navigation'
import { Phone, Heart, Flame, Building, AlertTriangle, Truck } from 'lucide-react'

const hotlines = [
    {
        icon: Phone,
        label: 'RESCUE',
        number: '0905 570 5865',
        href: 'tel:09055705865',
    },
    {
        icon: AlertTriangle,
        label: 'DRRM OPCEN',
        number: '0998 241 2991',
        href: 'tel:09982412991',
    },
    {
        icon: Truck,
        label: 'RAPID RESCUE',
        number: '0947 507 1433',
        href: 'tel:09475071433',
    },
    {
        icon: Flame,
        label: 'Fire Protection',
        number: '0915 170 0910',
        href: 'tel:09151700910',
    },
    {
        icon: Building,
        label: 'OCPO HQ',
        number: '0998 598 6690',
        href: 'tel:09985986690',
    },
    {
        icon: Heart,
        label: 'Coast Guard',
        number: '0930 313 5188',
        href: 'tel:09303135188',
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
