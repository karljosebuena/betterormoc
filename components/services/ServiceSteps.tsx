import { ServiceStep } from '@/lib/supabase/types'
import { CheckCircle2 } from 'lucide-react'

interface ServiceStepsProps {
    steps: ServiceStep[]
}

export function ServiceSteps({ steps }: ServiceStepsProps) {
    if (!steps || steps.length === 0) return null

    const sortedSteps = [...steps].sort((a, b) => a.order - b.order)

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Step-by-Step Process</h2>
            <p className="mb-6 text-gray-600">Follow these steps to request your service</p>

            <div className="space-y-6">
                {sortedSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                        {/* Step Number */}
                        <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-lg font-bold text-white">
                                {step.order}
                            </div>
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 pt-1">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>

                        {/* Connector Line (except for last step) */}
                        {index < sortedSteps.length - 1 && (
                            <div className="absolute ml-5 mt-12 h-full w-0.5 bg-gray-200" style={{ height: '2rem' }} />
                        )}
                    </div>
                ))}
            </div>

            {/* Completion Note */}
            <div className="mt-8 flex items-start gap-3 rounded-lg bg-green-50 p-4">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                <p className="text-sm text-green-800">
                    Complete all steps to successfully obtain your service. Processing times may vary.
                </p>
            </div>
        </div>
    )
}
