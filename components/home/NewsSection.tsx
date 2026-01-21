import { Calendar, FileText, TrendingUp } from 'lucide-react'

const news = [
    {
        id: 1,
        title: 'City Government Launches New Digital Services Platform',
        excerpt: 'Ormoc City introduces BetterOrmoc.org to provide easier access to government services and information for all citizens.',
        date: '2024-01-15',
        category: 'Technology',
    },
    {
        id: 2,
        title: 'Infrastructure Projects Boost Local Economy',
        excerpt: 'Major road improvements and public facilities construction create jobs and improve quality of life for residents.',
        date: '2024-01-10',
        category: 'Development',
    },
    {
        id: 3,
        title: 'Free Medical Services Expanded to More Barangays',
        excerpt: 'City health office extends free medical consultations and medicines to additional communities across Ormoc.',
        date: '2024-01-05',
        category: 'Health',
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
                            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200">
                                <div className="flex h-full items-center justify-center">
                                    <FileText className="h-16 w-16 text-green-600 opacity-50" />
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
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600">
                                    {item.title}
                                </h3>
                                <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                                    {item.excerpt}
                                </p>
                                <button className="inline-flex items-center text-sm font-medium text-green-600 hover:underline">
                                    Read more →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 px-8 py-3 font-semibold text-green-600 transition-all hover:bg-green-600 hover:text-white">
                        <TrendingUp className="h-5 w-5" />
                        View All News
                    </button>
                </div>
            </div>
        </section>
    )
}
