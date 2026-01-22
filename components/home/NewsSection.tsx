import { Calendar, FileText, TrendingUp } from 'lucide-react'

const news = [
    {
        id: 1,
        title: 'Mayor Lucy Torres-Gomez Wins Re-election',
        excerpt: 'Mayor Lucy Torres-Gomez secured re-election with 90,153 votes. Her entire Ormoc Development Team swept all elective positions in the 2025 midterm elections.',
        date: '2025-05-13',
        category: 'Government',
    },
    {
        id: 2,
        title: 'P4.5 Billion Budget Approved for 2025',
        excerpt: 'Ormoc City Council approved a P4.5 billion budget, including P2.7 billion for social services and P1.8 billion for infrastructure projects.',
        date: '2024-10-15',
        category: 'Budget',
    },
    {
        id: 3,
        title: 'Environmental Stewardship Initiatives Launched',
        excerpt: 'City government strengthens commitment to water purity and waste management. City Water Quality Testing Laboratory preparing for accreditation.',
        date: '2025-09-19',
        category: 'Environment',
    },
]

export function NewsSection() {
    return (
        <section className="section bg-white">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Latest Updates</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Stay informed about the latest news and announcements
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {news.map((item) => (
                        <article
                            key={item.id}
                            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200">
                                <div className="flex h-full items-center justify-center">
                                    <FileText className="h-16 w-16 text-blue-900 opacity-50" />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center gap-3 text-sm">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        {item.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <Calendar className="h-4 w-4" />
                                        <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-900">
                                    {item.title}
                                </h3>
                                <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                                    {item.excerpt}
                                </p>
                                <button className="inline-flex items-center text-sm font-medium text-blue-900 hover:underline">
                                    Read more →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 px-8 py-3 font-semibold text-blue-900 transition-all hover:bg-blue-900 hover:text-white">
                        <TrendingUp className="h-5 w-5" />
                        View All News
                    </button>
                </div>
            </div>
        </section>
    )
}
