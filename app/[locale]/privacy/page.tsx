import { Link } from '@/i18n/navigation'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your information',
}

export default function PrivacyPage() {
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
          <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            How we collect, use, and protect your information
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mt-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm lg:p-12">
          <div className="prose prose-lg max-w-none text-gray-600">
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Introduction
              </h2>
              <p className="mb-4">
                BetterOrmoc.org ("we," "us," or "our") is committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website.
              </p>
              <p className="mb-6">
                This policy is designed to comply with the{' '}
                <strong>
                  Data Privacy Act of 2012 (Republic Act No. 10173)
                </strong>{' '}
                of the Philippines and its Implementing Rules and Regulations
                (IRR).
              </p>
              <div className="rounded-lg border border-green-100 bg-green-50 p-4 text-green-800">
                We are committed to <strong>transparency</strong> and{' '}
                <strong>data minimization</strong> — we only collect what is
                necessary.
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We collect minimal information necessary to operate this civic
                platform effectively:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                Information You Provide Voluntarily
              </h3>
              <ul className="mb-6 list-disc pl-6">
                <li>Email address (when you contact us or submit feedback)</li>
                <li>Name (if provided in correspondence)</li>
                <li>Message content and inquiries</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                Information Collected Automatically
              </h3>
              <ul className="mb-6 list-disc pl-6">
                <li>IP address (anonymized where possible)</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on pages</li>
              </ul>

              <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-blue-800">
                <p className="font-semibold">Important:</p>
                <p>
                  We do <strong>not</strong> collect sensitive personal
                  information such as government-issued ID numbers, financial
                  information, health records, or biometric data through this
                  website.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6">
                <li>To respond to your inquiries and feedback</li>
                <li>To improve website functionality and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To ensure website security and prevent abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. Data Sharing and Disclosure
              </h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  services (e.g., web hosting, analytics) that assist in
                  operating our website
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law,
                  court order, or government authority under Philippine
                  jurisdiction
                </li>
                <li>
                  <strong>Protection of Rights:</strong> To protect the rights,
                  property, or safety of BetterOrmoc.org, our users, or the
                  public
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. Your Rights
              </h2>
              <p className="mb-4">
                Under the Data Privacy Act of 2012, you have the right to
                access, correct, and request deletion of your personal data. To
                exercise these rights, please contact us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, wish to
                exercise your data privacy rights, or have concerns about how
                your information is handled, please contact us:
              </p>
              <a
                href="mailto:volunteer@betterormoc.org"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                volunteer@betterormoc.org
              </a>
            </section>

            <div className="border-t border-gray-200 pt-8 text-sm text-gray-500">
              Last Updated: January 23, 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
