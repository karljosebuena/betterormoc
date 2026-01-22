'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from '@/i18n/navigation'

interface FAQItem {
    question: string
    answer: string
    category: string
}

const faqs: FAQItem[] = [
    {
        category: 'General',
        question: 'What is BetterOrmoc.org?',
        answer: 'BetterOrmoc.org is the official transparency portal of the City Government of Ormoc. It provides easy access to government services, public records, and information about city programs and initiatives.',
    },
    {
        category: 'General',
        question: 'How can I access government services?',
        answer: 'You can browse all available services on our Services page. Each service listing includes requirements, fees, processing time, and the office responsible. Some services can be accessed online through our partner platforms.',
    },
    {
        category: 'Services',
        question: 'How do I get a birth certificate?',
        answer: 'Visit the Local Civil Registrar office with a valid ID and payment of ₱150. Processing time is 15-30 minutes. You can also check the Birth Certificate service page for detailed requirements.',
    },
    {
        category: 'Services',
        question: 'How long does it take to get a business permit?',
        answer: 'New business permits typically take 3-5 days to process. Renewals can be completed on the same day. Visit the Business Permits & Licensing Office for more information.',
    },
    {
        category: 'Services',
        question: 'Can I apply for services online?',
        answer: 'Yes! Several services are available online through our partner platform Filipizen, including business permit applications, renewals, and tax payments. Check the Online Services category for available options.',
    },
    {
        category: 'Payments',
        question: 'How do I pay my real property tax?',
        answer: 'You can pay at the Municipal Treasurer\'s Office during office hours, or online through the Filipizen platform. Payment can be made annually or quarterly.',
    },
    {
        category: 'Payments',
        question: 'What payment methods are accepted?',
        answer: 'We accept cash payments at our offices. Online payments through Filipizen accept credit/debit cards and online banking.',
    },
    {
        category: 'Government',
        question: 'How can I contact city officials?',
        answer: 'Visit our Government page to see contact information for all city officials. You can also send inquiries through our Contact page.',
    },
    {
        category: 'Government',
        question: 'Where can I view city ordinances and resolutions?',
        answer: 'All ordinances and resolutions are available on our Legislative pages. You can filter by year and category to find specific documents.',
    },
    {
        category: 'Technical',
        question: 'Is my personal information secure?',
        answer: 'Yes. We follow strict data privacy protocols in compliance with the Data Privacy Act of 2012. Your information is only used for official government purposes.',
    },
]

function FAQAccordion({ faq }: { faq: FAQItem }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="rounded-lg border border-gray-200 bg-white">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
            >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-blue-900" />
                ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-400" />
                )}
            </button>
            {isOpen && (
                <div className="border-t border-gray-200 p-6 pt-4">
                    <p className="text-gray-600">{faq.answer}</p>
                </div>
            )}
        </div>
    )
}

export default function FAQPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    const categories = ['all', ...Array.from(new Set(faqs.map((f) => f.category)))]
    const filteredFAQs = selectedCategory === 'all'
        ? faqs
        : faqs.filter((f) => f.category === selectedCategory)

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
                    <p className="text-lg text-blue-50">
                        Find answers to common questions about our services
                    </p>
                </div>
            </div>

            <div className="container py-12">
                {/* Category Filter */}
                <div className="mb-8 flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === category
                                ? 'bg-blue-900 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {category === 'all' ? 'All Questions' : category}
                        </button>
                    ))}
                </div>

                {/* FAQ List */}
                <div className="mx-auto max-w-3xl space-y-4">
                    {filteredFAQs.map((faq, index) => (
                        <FAQAccordion key={index} faq={faq} />
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-gray-200 bg-white p-8 text-center">
                    <h2 className="mb-2 text-xl font-bold text-gray-900">
                        Still have questions?
                    </h2>
                    <p className="mb-6 text-gray-600">
                        Can&apos;t find the answer you&apos;re looking for? Please contact us directly.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}
