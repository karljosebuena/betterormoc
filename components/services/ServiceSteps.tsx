'use client'

import { ServiceStep } from '@/lib/supabase/types'

interface ServiceStepsProps {
  steps: ServiceStep[]
  totalDuration?: string
  totalFees?: string
}

export function ServiceSteps({
  steps,
  totalDuration,
  totalFees,
}: ServiceStepsProps) {
  if (!steps || steps.length === 0) return null

  // Sort steps strictly by order
  const sortedSteps = [...steps].sort((a, b) => a.order - b.order)

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between bg-gray-50 px-6 py-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Step-by-Step Process
            </h2>
            <p className="text-sm text-gray-500">
              Complete guide to completing this service
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="w-16 px-6 py-4 font-semibold tracking-wider uppercase">
                  Step
                </th>
                <th className="w-1/3 px-6 py-4 font-semibold tracking-wider uppercase">
                  What to Do
                </th>
                <th className="px-6 py-4 font-semibold tracking-wider uppercase">
                  Documents to Present
                </th>
                <th className="px-6 py-4 font-semibold tracking-wider uppercase">
                  Fee
                </th>
                <th className="px-6 py-4 font-semibold tracking-wider uppercase">
                  Duration
                </th>
                <th className="px-6 py-4 font-semibold tracking-wider uppercase">
                  Personnel
                </th>
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
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </td>
                  <td className="px-6 py-4 align-top text-gray-600">
                    {step.documents ? (
                      <div className="leading-relaxed whitespace-pre-line">
                        {step.documents}
                      </div>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 align-top">
                    {step.fee ? (
                      <div className="whitespace-pre-line">
                        <span className="inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {step.fee}
                        </span>
                      </div>
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
            {/* Table Footer for Totals */}
            <tfoot className="bg-gray-50 font-bold text-gray-900">
              <tr>
                <td colSpan={3} className="px-6 py-4 text-gray-700 uppercase">
                  Total Response Time
                </td>
                <td className="px-6 py-4 text-green-700">{totalFees || '—'}</td>
                <td className="px-6 py-4" colSpan={2}>
                  {totalDuration || '—'}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Client Feedback Box */}
      <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-white p-1 shadow-sm">
            <svg
              className="h-5 w-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Client Feedback</h3>
            <p className="text-sm text-blue-800">
              Accomplish Client Feedback Form and drop at designated suggestion
              box.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
