'use client'

import { FileText, Download } from 'lucide-react'

interface DownloadItem {
  title: string
  url: string
  type?: string
}

interface ServiceDownloadsProps {
  downloads: DownloadItem[]
}

export function ServiceDownloads({ downloads }: ServiceDownloadsProps) {
  if (!downloads || downloads.length === 0) return null

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Downloadable Resources
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {downloads.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-900 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-red-50 p-2 text-red-600">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-blue-900">
                  {item.title}
                </p>
                {item.type && (
                  <p className="text-xs text-gray-500">{item.type} File</p>
                )}
              </div>
            </div>
            <Download className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:scale-110 group-hover:text-blue-900" />
          </a>
        ))}
      </div>
    </div>
  )
}
