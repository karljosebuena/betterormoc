import { DollarSign, FileText, TrendingUp, Users } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function BudgetPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">Budget Transparency</h1>
                    <p className="text-lg text-blue-50">
                        Open access to Ormoc City&apos;s financial information
                    </p>
                </div>
            </div>

            <div className="container py-12">
                <div className="mx-auto max-w-5xl space-y-8">
                    {/* Overview */}
                    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Commitment to Transparency</h2>
                        <p className="text-gray-600">
                            The City Government of Ormoc is committed to financial transparency and accountability.
                            We believe that citizens have the right to know how public funds are being used to
                            serve the community.
                        </p>
                    </div>

                    {/* Budget Highlights */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg border border-gray-200 bg-white p-6">
                            <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600">
                                <DollarSign className="h-6 w-6" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">₱2.5B</div>
                            <div className="mt-2 text-sm text-gray-600">Annual Budget (2024)</div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6">
                            <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3 text-blue-900">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">₱1.8B</div>
                            <div className="mt-2 text-sm text-gray-600">Revenue Collection</div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6">
                            <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3 text-purple-600">
                                <Users className="h-6 w-6" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">₱800M</div>
                            <div className="mt-2 text-sm text-gray-600">Social Services</div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6">
                            <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3 text-orange-600">
                                <FileText className="h-6 w-6" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">₱600M</div>
                            <div className="mt-2 text-sm text-gray-600">Infrastructure</div>
                        </div>
                    </div>

                    {/* Budget Documents */}
                    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">Budget Documents</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-gray-900">Annual Budget 2024</p>
                                        <p className="text-sm text-gray-500">Approved budget for fiscal year 2024</p>
                                    </div>
                                </div>
                                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                                    Download
                                </button>
                            </div>

                            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-gray-900">Quarterly Report Q1 2024</p>
                                        <p className="text-sm text-gray-500">Financial performance for Q1</p>
                                    </div>
                                </div>
                                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                                    Download
                                </button>
                            </div>

                            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-gray-900">Procurement Plan 2024</p>
                                        <p className="text-sm text-gray-500">Annual procurement plan and schedule</p>
                                    </div>
                                </div>
                                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Budget Allocation */}
                    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">Budget Allocation by Sector</h2>
                        <div className="space-y-4">
                            <div>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="font-medium text-gray-700">Social Services</span>
                                    <span className="text-gray-600">32%</span>
                                </div>
                                <div className="h-3 w-full rounded-full bg-gray-200">
                                    <div className="h-3 rounded-full bg-blue-900" style={{ width: '32%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="font-medium text-gray-700">Infrastructure</span>
                                    <span className="text-gray-600">24%</span>
                                </div>
                                <div className="h-3 w-full rounded-full bg-gray-200">
                                    <div className="h-3 rounded-full bg-blue-600" style={{ width: '24%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="font-medium text-gray-700">Education</span>
                                    <span className="text-gray-600">20%</span>
                                </div>
                                <div className="h-3 w-full rounded-full bg-gray-200">
                                    <div className="h-3 rounded-full bg-purple-600" style={{ width: '20%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="font-medium text-gray-700">Health Services</span>
                                    <span className="text-gray-600">15%</span>
                                </div>
                                <div className="h-3 w-full rounded-full bg-gray-200">
                                    <div className="h-3 rounded-full bg-red-600" style={{ width: '15%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="font-medium text-gray-700">Other Services</span>
                                    <span className="text-gray-600">9%</span>
                                </div>
                                <div className="h-3 w-full rounded-full bg-gray-200">
                                    <div className="h-3 rounded-full bg-gray-600" style={{ width: '9%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-8 text-center">
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Questions About Our Budget?</h3>
                        <p className="mb-6 text-gray-600">
                            Contact our Budget Office for more information
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
