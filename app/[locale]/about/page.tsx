import { AlertCircle, Heart, Github, Mail } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
    // We'll migrate the text to translation files in the next step
    // For now, ensuring Link uses locale-aware routing
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">About BetterOrmoc</h1>
                    <p className="text-lg text-blue-50">
                        A community-driven project to help Ormocanons navigate city services
                    </p>
                </div>
            </div>

            <div className="container py-12">
                <div className="mx-auto max-w-3xl space-y-8">
                    {/* Important Disclaimer */}
                    <div className="rounded-lg border-2 border-yellow-300 bg-yellow-50 p-6">
                        <div className="mb-4 flex items-center gap-3">
                            <AlertCircle className="h-6 w-6 text-yellow-700" />
                            <h2 className="text-xl font-bold text-yellow-900">Important Disclaimer</h2>
                        </div>
                        <div className="space-y-3 text-yellow-900">
                            <p className="font-semibold">
                                This is NOT an official Ormoc City Government website.
                            </p>
                            <p>
                                BetterOrmoc is an <strong>independent, unofficial community project</strong> created
                                to help Ormocanons easily find information about city services, government offices,
                                and public resources.
                            </p>
                            <p>
                                This website is <strong>not affiliated with, endorsed by, or connected to</strong>{' '}
                                the City Government of Ormoc or any of its departments.
                            </p>
                        </div>
                    </div>

                    {/* What is BetterOrmoc */}
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">What is BetterOrmoc?</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                BetterOrmoc is a personal project built with the goal of making it easier for
                                residents and visitors to navigate Ormoc City's services and resources.
                            </p>
                            <p>
                                The platform aggregates publicly available information from various sources to
                                provide a centralized, user-friendly portal for:
                            </p>
                            <ul className="ml-6 list-disc space-y-2">
                                <li>Finding government services and their requirements</li>
                                <li>Locating government offices on an interactive map</li>
                                <li>Accessing contact information for city departments</li>
                                <li>Viewing city statistics and public data</li>
                                <li>Searching for ordinances and resolutions (framework)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Data Sources */}
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Data Sources</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                All information on this website is compiled from publicly available sources,
                                including:
                            </p>
                            <ul className="ml-6 list-disc space-y-2">
                                <li>Official government websites and social media pages</li>
                                <li>Public records and documents</li>
                                <li>OpenStreetMap for location data</li>
                                <li>Community contributions and feedback</li>
                            </ul>
                            <p className="text-sm italic">
                                <strong>Note:</strong> While we strive for accuracy, information may become
                                outdated. Always verify critical information with official government sources.
                            </p>
                        </div>
                    </div>

                    {/* Official Resources */}
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                        <h2 className="mb-4 text-xl font-bold text-blue-900">
                            Official Ormoc City Resources
                        </h2>
                        <p className="mb-4 text-blue-800">
                            For official information, please visit these government channels:
                        </p>
                        <div className="space-y-2 text-blue-900">
                            <div>
                                <strong>Official Website:</strong>{' '}
                                <a
                                    href="https://ormoc.gov.ph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-700"
                                >
                                    ormoc.gov.ph
                                </a>
                            </div>
                            <div>
                                <strong>Facebook:</strong>{' '}
                                <a
                                    href="https://www.facebook.com/OrmocCityGovernment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-700"
                                >
                                    Ormoc City Government
                                </a>
                            </div>
                            <div>
                                <strong>Hotline:</strong> +63 53 561 6000
                            </div>
                        </div>
                    </div>

                    {/* Open Source */}
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Open Source Project</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                BetterOrmoc is built with modern web technologies and is open source. The code is
                                available for anyone to review, contribute to, or use as inspiration for similar
                                projects in other cities.
                            </p>
                            <div className="flex items-center gap-2">
                                <Github className="h-5 w-5" />
                                <a
                                    href="https://github.com/yourusername/betterormoc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-blue-900 hover:underline"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Contact & Feedback</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Have suggestions, corrections, or want to contribute? We'd love to hear from you!
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                    <a
                                        href="mailto:hello@betterormoc.com"
                                        className="font-medium text-blue-900 hover:underline"
                                    >
                                        hello@betterormoc.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Github className="h-5 w-5 text-gray-400" />
                                    <a
                                        href="https://github.com/yourusername/betterormoc/issues"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-blue-900 hover:underline"
                                    >
                                        Report an issue on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Made with Love */}
                    <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-6 text-center">
                        <div className="mb-2 flex items-center justify-center gap-2 text-gray-700">
                            <span>Made with</span>
                            <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                            <span>for Ormocanons</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            A personal project by a fellow Ormocanon who wants to make city services more
                            accessible
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
