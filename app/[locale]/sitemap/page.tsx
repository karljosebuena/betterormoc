import { Link } from '@/i18n/navigation'
import { ArrowLeft, ArrowRight, Home, Grid, Building2, BarChart3, Scale, FileText, Phone, Mail, HelpCircle, FileCheck, Globe, Info } from 'lucide-react'

export const metadata = {
    title: 'Sitemap',
    description: 'Navigate all pages and services of BetterOrmoc.org',
}

export default function SitemapPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-16">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-950 py-16 text-white">
                <div className="container">
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-blue-200 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                    <h1 className="mb-4 text-4xl font-bold">Sitemap</h1>
                    <p className="text-xl text-blue-100">Navigate all pages and services of BetterOrmoc.org</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Main Navigation */}
                    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                            <div className="rounded-lg bg-blue-100 p-2 text-blue-900">
                                <Home className="h-5 w-5" />
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">Main Navigation</h2>
                        </div>
                        <div className="space-y-3">
                            <Link href="/" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Home
                            </Link>
                            <Link href="/services" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Services Directory
                            </Link>
                            <Link href="/government" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Government
                            </Link>
                            <Link href="/statistics" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Statistics
                            </Link>
                            <Link href="/budget" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Transparency
                            </Link>
                            <Link href="/contact" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Popular Services */}
                    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                            <div className="rounded-lg bg-blue-100 p-2 text-blue-900">
                                <Grid className="h-5 w-5" />
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">Featured Services</h2>
                        </div>
                        <div className="space-y-3">
                            {/* Certificates */}
                            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Certificates</div>
                            <Link href="/services/birth-certificate" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Birth Certificate
                            </Link>
                            <Link href="/services/barangay-clearance" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Barangay Clearance
                            </Link>

                            {/* Business */}
                            <div className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Business & Tax</div>
                            <Link href="/services/business-permit-new" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Business Permit
                            </Link>
                            <Link href="/services/real-property-tax-payment" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Real Property Tax
                            </Link>

                            <Link href="/services" className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">
                                View Full Service Directory
                            </Link>
                        </div>
                    </div>

                    {/* Government & Info */}
                    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                            <div className="rounded-lg bg-blue-100 p-2 text-blue-900">
                                <Building2 className="h-5 w-5" />
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">Government & Info</h2>
                        </div>
                        <div className="space-y-3">
                            <Link href="/government/officials" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Elected Officials
                            </Link>
                            <Link href="/ordinances" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Ordinances
                            </Link>
                            <Link href="/resolutions" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Resolutions
                            </Link>
                            <div className="border-t border-gray-100 my-2"></div>
                            <Link href="/about" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                About Ormoc
                            </Link>
                            <Link href="/faq" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                FAQ
                            </Link>
                        </div>
                    </div>

                    {/* Support & Legal */}
                    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                            <div className="rounded-lg bg-blue-100 p-2 text-blue-900">
                                <Scale className="h-5 w-5" />
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">Support & Legal</h2>
                        </div>
                        <div className="space-y-3">
                            <Link href="/help" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Help Center
                            </Link>
                            <Link href="/accessibility" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Accessibility
                            </Link>
                            <div className="border-t border-gray-100 my-2"></div>
                            <Link href="/terms" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Terms of Use
                            </Link>
                            <Link href="/privacy" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    {/* External Resources */}
                    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                            <div className="rounded-lg bg-blue-100 p-2 text-blue-900">
                                <Globe className="h-5 w-5" />
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">External Resources</h2>
                        </div>
                        <div className="space-y-3">
                            <a href="https://ormoc.gov.ph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Official LGU Website
                            </a>
                            <a href="https://www.foi.gov.ph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                Freedom of Information
                            </a>
                            <a href="https://www.philgeps.gov.ph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-900">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                PhilGEPS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
