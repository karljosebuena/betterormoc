'use client'

import ReactMarkdown from 'react-markdown'
import { Info } from 'lucide-react'

interface MarkdownRendererProps {
  children: string
}

export function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return (
    <div className="prose max-w-none text-gray-600">
      <ReactMarkdown
        components={{
          // Render blockquotes as Blue Alerts
          blockquote: ({ children }) => (
            <div className="my-4 flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 not-italic">
              <Info className="h-5 w-5 shrink-0 text-blue-600" />
              <div className="text-sm text-blue-800 [&>p]:m-0">{children}</div>
            </div>
          ),
          // Clean up paragraph margins in general
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed last:mb-0">{children}</p>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
