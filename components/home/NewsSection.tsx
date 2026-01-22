'use client'

import { useEffect, useState } from 'react'
import { Calendar, FileText, TrendingUp, ExternalLink } from 'lucide-react'

interface NewsItem {
    title: string
    link: string
    pubDate: string
    description: string
    source: string
}

export function NewsSection() {
    const [news, setNews] = useState<NewsItem[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('/api/news')
                const data = await response.json()
                if (data.success && data.news) {
                    setNews(data.news)
                }
            } catch (error) {
                console.error('Error fetching news:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchNews()
    }, [])

    const handleViewAllNews = () => {
        window.open(
            'https://news.google.com/search?q=ormoc%20city&hl=en-PH&gl=PH&ceid=PH%3Aen',
            '_blank',
            'noopener,noreferrer'
        )
    }

    if (isLoading) {
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
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-80 animate-pulse rounded-lg bg-gray-200"></div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section bg-white">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Latest Updates</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Stay informed about the latest news and announcements from Google News
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {news.map((item, index) => (
                        <article
                            key={index}
                            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="p-6">
                                <div className="mb-3 flex items-center gap-3 text-sm">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        {item.source}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <Calendar className="h-4 w-4" />
                                        <span>
                                            {new Date(item.pubDate).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-900 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p
                                    className="mb-4 text-sm text-gray-600 line-clamp-2"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-900 hover:underline"
                                >
                                    Read more
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={handleViewAllNews}
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 px-8 py-3 font-semibold text-blue-900 transition-all hover:bg-blue-900 hover:text-white"
                    >
                        <TrendingUp className="h-5 w-5" />
                        View All News
                    </button>
                </div>
            </div>
        </section>
    )
}
