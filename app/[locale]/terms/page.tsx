import { Link } from '@/i18n/navigation'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms and conditions for using BetterOrmoc.org',
}

export default function TermsPage() {
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
          <h1 className="mb-4 text-4xl font-bold">Terms of Use</h1>
          <p className="text-xl text-blue-100">
            Guidelines for using BetterOrmoc.org
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
                BetterOrmoc.org is a civic platform dedicated to empowering the
                people of Ormoc City by providing transparent access to the
                services, programs, and public funds of LGU Ormoc.
              </p>
              <p className="mb-6">
                While volunteers make every effort to secure BetterOrmoc.org
                from online threats and keep information accurate, no system can
                be guaranteed to be perfectly secure, error-free, or completely
                up-to-date at all times.
              </p>
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-blue-800">
                This platform is provided <strong>free of charge</strong> as a
                public service.
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you acknowledge and agree
                to be bound by these terms and conditions. Your continued use of
                the site signifies your ongoing acceptance of this agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. Public Domain Content
              </h2>
              <p className="mb-4">
                This website and its content are provided as a public domain
                resource and are operated entirely by volunteers. All
                information, data, documents, and materials on this website are
                in the public domain unless otherwise stated.
              </p>
              <p className="mb-6">
                Public domain content may be freely used, copied, distributed,
                and modified without permission or attribution, although
                attribution to BetterOrmoc.org and LGU Ormoc is encouraged as a
                civic courtesy.
              </p>
              <div className="rounded-lg border border-yellow-100 bg-yellow-50 p-4 text-yellow-800">
                <p className="font-semibold">Important Note:</p>
                <p>
                  As a volunteer-run initiative, this website does not replace
                  official government channels. Residents and stakeholders are
                  encouraged to conduct their own independent research and
                  verification of all information found here and to consult
                  official LGU Ormoc offices and government agencies when making
                  important decisions.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. "As Is" Disclaimer
              </h2>
              <p className="mb-4">
                All information on this website is provided "AS IS" without
                warranty of any kind, whether express or implied. This includes,
                but is not limited to:
              </p>
              <ul className="list-disc pl-6">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property rights</li>
                <li>Accuracy, completeness, or reliability of information</li>
                <li>
                  Freedom from errors, viruses, or other harmful components
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. User Responsibilities
              </h2>
              <p className="mb-4">
                Users share responsibility for promoting informed and
                responsible civic engagement. By using this website, you are
                solely responsible for:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>
                  Independently verifying all information obtained from this
                  website
                </li>
                <li>
                  Reviewing and visiting original source links and references
                  provided
                </li>
                <li>
                  Cross-checking information with multiple reliable and official
                  sources before making decisions
                </li>
                <li>
                  Determining whether the information is suitable for your
                  intended use
                </li>
                <li>
                  Complying with all applicable laws, regulations, and local
                  ordinances
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, the website operators,
                volunteers, contributors, and any affiliated civic partners
                shall not be liable for any direct, indirect, incidental,
                special, consequential, or punitive damages arising from or
                related to your use of this website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Contact Information
              </h2>
              <p className="mb-4">
                For questions about these terms, feedback on civic information,
                or content-related concerns, please contact:
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
