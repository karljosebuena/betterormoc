
'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { locales } from '@/i18n/request'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const languageNames = {
    en: 'English',
    fil: 'Filipino',
    ceb: 'Bisaya',
}

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale })
        setIsOpen(false)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-blue-950 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="Select Language"
                aria-expanded={isOpen}
            >
                <Globe className="h-4 w-4 text-blue-200" />
                <span>{languageNames[locale as keyof typeof languageNames]}</span>
                <ChevronDown className={`h-4 w-4 text-blue-200 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl ring-1 ring-black/5 z-50">
                    <div className="py-1">
                        {locales.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => handleChange(loc)}
                                className={`flex w-full items-center justify-between px-4 py-2 text-sm text-left transition-colors hover:bg-gray-50
                                    ${locale === loc ? 'font-medium text-blue-900 bg-blue-50' : 'text-gray-700'}
                                `}
                            >
                                <span>{languageNames[loc]}</span>
                                {locale === loc && <Check className="h-4 w-4 text-blue-900" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
