import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
                <h2 className="mb-4 text-2xl font-semibold text-gray-700">Service Not Found</h2>
                <p className="mb-8 text-gray-600">
                    The service you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                >
                    Browse All Services
                </Link>
            </div>
        </div>
    )
}
