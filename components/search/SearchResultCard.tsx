import { Link } from '@/i18n/navigation'
import { FileText, Users, Scale, FileCheck } from 'lucide-react'
import { SearchItem } from '@/lib/hooks/use-search'

interface SearchResultCardProps {
    item: SearchItem
    query: string
}

const typeIcons = {
    service: FileText,
    official: Users,
    ordinance: Scale,
    resolution: FileCheck,
}

export function SearchResultCard({ item, query }: SearchResultCardProps) {
    const IconComponent = typeIcons[item.type as keyof typeof typeIcons]

    // Highlight query in title
    const highlightText = (text: string, query: string) => {
        if (!query) return text

        const parts = text.split(new RegExp(`(${query})`, 'gi'))
        return parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={i} className="bg-yellow-200 font-medium">
                    {part}
                </mark>
            ) : (
                part
            )
        )
    }

    return (
        <Link
            href={item.url}
            className="block rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-lg bg-blue-50 p-2">
                    <IconComponent className="h-5 w-5 text-blue-900" />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="mb-1 font-semibold text-gray-900">
                        {highlightText(item.title, query)}
                    </h3>

                    {item.description && (
                        <p className="mb-2 text-sm text-gray-600 line-clamp-2">
                            {item.description}
                        </p>
                    )}

                    <div className="flex items-center gap-2">
                        {item.category && (
                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                {item.category}
                            </span>
                        )}
                        <span className="text-xs capitalize text-gray-500">
                            {item.type}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
