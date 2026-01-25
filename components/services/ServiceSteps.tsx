'use client'

import { ServiceStep } from '@/lib/supabase/types'

interface ServiceStepsProps {
  steps: ServiceStep[]
}

export function ServiceSteps({ steps }: ServiceStepsProps) {
  if (!steps || steps.length === 0) return null

  // Sort steps strictly by order
  const sortedSteps = [...steps].sort((a, b) => a.order - b.order)

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="bg-gray-50 px-6 py-4">
        <h2 className="text-xl font-bold text-gray-900">Step-by-Step Process</h2>
        <p className="text-sm text-gray-500">Complete guide to completing this service</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider w-16">Step</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider w-1/3">What to Do</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">Documents to Present</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">Fee</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">Duration</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">Personnel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedSteps.map((step, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 align-top">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-900">
                    {step.order}
                  </div>
                </td>
                <td className="px-6 py-4 align-top">
                  <p className="font-bold text-gray-900">{step.title}</p>
                  <p className="mt-1 text-gray-600 leading-relaxed text-xs">
                    {step.description}
                  </p>
                </td>
                <td className="px-6 py-4 align-top text-gray-600">
                  {step.documents ? (
                    <div className="whitespace-pre-line leading-relaxed">{step.documents}</div>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-6 py-4 align-top">
                  {step.fee ? (
                    <span className="inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      {step.fee}
                    </span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-6 py-4 align-top text-gray-600">
                  {step.duration || <span className="text-gray-400">—</span>}
                </td>
                <td className="px-6 py-4 align-top">
                  {step.personnel ? (
                    <span className="inline-flex rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                      {step.personnel}
                    </span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
