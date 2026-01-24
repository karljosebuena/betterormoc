import { AlertCircle } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export function DisclaimerBanner() {
  return (
    <div className="border-b border-yellow-200 bg-yellow-50 py-2">
      <div className="container">
        <div className="flex items-center justify-center gap-2 text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0 text-yellow-700" />
          <p className="text-yellow-800">
            <strong>Disclaimer:</strong> This is an unofficial community
            project, not affiliated with Ormoc City Government.{' '}
            <Link
              href="/about"
              className="font-medium underline hover:text-yellow-900"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
