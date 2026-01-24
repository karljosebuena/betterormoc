'use client'

import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { SearchAutocomplete } from '@/components/search/SearchAutocomplete'

export function HeroSection() {
  const popularServices = [
    { name: 'Birth Certificate', slug: 'birth-certificate' },
    { name: 'Business Permit', slug: 'business-permit-new' },
    { name: 'Real Property Tax', slug: 'real-property-tax-payment' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-blue-950 py-16 text-white md:py-24">
      <div className="relative z-10 container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Welcome Message */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                BetterOrmoc
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-blue-50 md:text-xl">
              Access government services, information, and resources for the
              people of Ormoc City, Leyte.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-900 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
              >
                Browse Services
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-blue-900"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column - Search Card */}
          <div className="flex items-center">
            <div className="w-full rounded-xl border border-blue-800 bg-white p-8 shadow-2xl">
              <div className="mb-6">
                <h2 className="mb-2 flex items-center gap-2 text-2xl font-bold text-gray-900">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Find a Service
                </h2>
                <p className="text-sm text-gray-600">
                  Search for government services and information
                </p>
              </div>

              <SearchAutocomplete
                placeholder="e.g., birth certificate, business permit"
                popularServices={popularServices}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-full w-full opacity-10">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-yellow-300 blur-3xl"></div>
      </div>
    </section>
  )
}
