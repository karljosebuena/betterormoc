'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        dropdown: [
            { name: 'Certificates', href: '/services/certificates' },
            { name: 'Business', href: '/services/business' },
            { name: 'Tax Payments', href: '/services/tax-payments' },
            { name: 'Social Services', href: '/services/social-services' },
        ],
    },
    { name: 'Government', href: '/government' },
    { name: 'Statistics', href: '/statistics' },
    { name: 'Legislative', href: '/legislative' },
    { name: 'Transparency', href: '/budget' },
    { name: 'Contact', href: '/contact' },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-800 text-white">
                            <span className="text-xl font-bold">B</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold leading-none text-gray-900">
                                BetterOrmoc
                            </span>
                            <span className="text-xs text-gray-500">Official Portal</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Language Selector */}
                    <div className="hidden items-center gap-2 lg:flex">
                        <button className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                            EN
                        </button>
                        <button className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                            FIL
                        </button>
                        <button className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                            ILO
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="border-t border-gray-200 py-4 lg:hidden">
                        <nav className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
