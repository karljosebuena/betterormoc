import { Eye, Ear, MousePointer, Keyboard, FileText, Mail } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
        <div className="container">
          <h1 className="mb-4 text-4xl font-bold">Accessibility</h1>
          <p className="text-lg text-blue-50">
            Our commitment to making BetterOrmoc.org accessible to everyone
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Commitment
            </h2>
            <p className="text-gray-600">
              The City Government of Ormoc is committed to ensuring digital
              accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the
              relevant accessibility standards.
            </p>
          </section>

          {/* Features */}
          <section>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Accessibility Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Visual Accessibility
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• High contrast color schemes</li>
                  <li>• Readable font sizes</li>
                  <li>• Clear visual hierarchy</li>
                  <li>• Alternative text for images</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                    <Keyboard className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Keyboard Navigation
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Full keyboard support</li>
                  <li>• Logical tab order</li>
                  <li>• Skip to content links</li>
                  <li>• Focus indicators</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                    <Ear className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Screen Reader Support
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Semantic HTML markup</li>
                  <li>• ARIA labels and roles</li>
                  <li>• Descriptive link text</li>
                  <li>• Proper heading structure</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                    <MousePointer className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Responsive Design
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mobile-friendly interface</li>
                  <li>• Touch-friendly controls</li>
                  <li>• Flexible layouts</li>
                  <li>• Scalable text</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Standards */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Standards Compliance
            </h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="mb-4 text-gray-600">
                We aim to conform to the Web Content Accessibility Guidelines
                (WCAG) 2.1 Level AA. These guidelines explain how to make web
                content more accessible for people with disabilities.
              </p>
              <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-4">
                <FileText className="h-6 w-6 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">WCAG 2.1 Level AA</p>
                  <p className="text-sm text-gray-600">
                    International accessibility standard
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Feedback */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Feedback</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="mb-4 text-gray-600">
                We welcome your feedback on the accessibility of
                BetterOrmoc.org. Please let us know if you encounter
                accessibility barriers:
              </p>
              <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                <Mail className="h-6 w-6 flex-shrink-0 text-blue-900" />
                <div>
                  <p className="font-medium text-gray-900">Contact Us</p>
                  <p className="text-sm text-gray-600">
                    Email:{' '}
                    <a
                      href="mailto:accessibility@ormoc.gov.ph"
                      className="text-blue-900 hover:underline"
                    >
                      accessibility@ormoc.gov.ph
                    </a>
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Or use our{' '}
                    <Link
                      href="/contact"
                      className="text-blue-900 hover:underline"
                    >
                      contact form
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Known Limitations
            </h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="mb-4 text-gray-600">
                Despite our best efforts, some limitations may exist:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Some PDF documents may not be fully accessible</li>
                <li>
                  • Third-party embedded content may have accessibility issues
                </li>
                <li>
                  • Some legacy content is being updated for better
                  accessibility
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                We are actively working to address these limitations and improve
                accessibility across all content.
              </p>
            </div>
          </section>

          {/* Technical Specifications */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Technical Specifications
            </h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="mb-4 text-gray-600">
                BetterOrmoc.org relies on the following technologies:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• HTML5 for semantic structure</li>
                <li>• CSS3 for visual presentation</li>
                <li>• JavaScript for enhanced functionality</li>
                <li>• ARIA attributes for accessibility</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                These technologies are relied upon for conformance with the
                accessibility standards used.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
