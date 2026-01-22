'use client'

import { ServiceFAQ as ServiceFAQType } from '@/lib/supabase/types'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface ServiceFAQProps {
    faq: ServiceFAQType[]
}

export function ServiceFAQ({ faq }: ServiceFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    if (!faq || faq.length === 0) return null

    const sortedFAQ = [...faq].sort((a, b) => a.order - b.order)

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
                <HelpCircle className="h-6 w-6 text-blue-900" />
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
                {sortedFAQ.map((item, index) => {
                    const isOpen = openIndex === index

                    return (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg border border-gray-200 transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="flex w-full items-center justify-between gap-4 bg-gray-50 p-4 text-left transition-colors hover:bg-gray-100"
                            >
                                <span className="font-semibold text-gray-900">{item.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {isOpen && (
                                <div className="bg-white p-4">
                                    <p className="text-gray-600">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
