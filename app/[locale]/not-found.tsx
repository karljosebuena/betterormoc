import { Link } from '@/i18n/navigation'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold">Page Not Found</h2>
      <p className="mb-8 text-gray-600">
        Could not find the requested resource
      </p>
      <Link
        href="/"
        className="rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white hover:bg-blue-800"
      >
        Return Home
      </Link>
    </div>
  )
}
