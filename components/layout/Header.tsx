'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import { SearchDialog } from '@/components/search/SearchDialog'

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        dropdown: [
            { name: 'Certificates', href: '/services?category=Certificates' },
            { name: 'Business', href: '/services?category=Business' },
            { name: 'Tax Payments', href: '/services?category=Taxation' },
            { name: 'Social Services', href: '/services?category=Social' },
            { name: 'Health', href: '/services?category=Health' },
            { name: 'Agriculture', href: '/services?category=Agriculture' },
            { name: 'Infrastructure', href: '/services?category=Infrastructure' },
            { name: 'Education', href: '/services?category=Education' },
            { name: 'Public Safety', href: '/services?category=Safety' },
            { name: 'Environment', href: '/services?category=Environment' },
            { name: 'Online Services', href: '/services?category=Online' },
        ],
    },
    { name: 'Government', href: '/government' },
    { name: 'Statistics', href: '/statistics' },
    {
        name: 'Legislative',
        href: '#',
        dropdown: [
            { name: 'Ordinance Framework', href: '/ordinances' },
            { name: 'Resolution Framework', href: '/resolutions' },
        ],
    },
    { name: 'Transparency', href: '/budget' },
    { name: 'Contact', href: '/contact' },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [searchOpen, setSearchOpen] = useState(false)

    // Global keyboard shortcut for search (Cmd+K / Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setSearchOpen(true)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
                <div className="container">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-900 to-blue-950 text-white">
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
                        <nav className="hidden items-center gap-6 lg:flex">
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {item.dropdown ? (
                                        <>
                                            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-blue-900">
                                                {item.name}
                                                <ChevronDown className="h-4 w-4" />
                                            </button>
                                            {activeDropdown === item.name && (
                                                <div className="absolute left-0 top-full pt-1 w-56">
                                                    <div className="rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-900"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-900"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Search Button */}
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="hidden items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 lg:flex"
                        >
                            <Search className="h-4 w-4" />
                            <span>Search</span>
                            <kbd className="ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500">
                                ⌘K
                            </kbd>
                        </button>

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
                                    <div key={item.name}>
                                        {item.dropdown ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                                                    }
                                                    className="flex w-full items-center justify-between text-sm font-medium text-gray-700"
                                                >
                                                    {item.name}
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>
                                                {activeDropdown === item.name && (
                                                    <div className="ml-4 mt-2 space-y-2">
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block text-sm text-gray-600 hover:text-blue-900"
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-900"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}
