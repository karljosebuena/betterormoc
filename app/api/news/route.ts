import { NextResponse } from 'next/server'

const GOOGLE_NEWS_RSS_URL = 'https://news.google.com/rss/search?q=ormoc+city&hl=en-PH&gl=PH&ceid=PH:en'

interface NewsItem {
    title: string
    link: string
    pubDate: string
    description: string
    source: string
}

export async function GET() {
    try {
        const response = await fetch(GOOGLE_NEWS_RSS_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
            next: {
                revalidate: 3600, // Cache for 1 hour
            },
        })

        if (!response.ok) {
            throw new Error('Failed to fetch news')
        }

        const xmlText = await response.text()

        // Parse XML to extract news items
        const items: NewsItem[] = []
        const itemRegex = /<item>([\s\S]*?)<\/item>/g
        let match

        while ((match = itemRegex.exec(xmlText)) !== null && items.length < 3) {
            const itemXml = match[1]

            // Extract title (without CDATA)
            const titleMatch = itemXml.match(/<title>(.*?)<\/title>/)
            const linkMatch = itemXml.match(/<link>(.*?)<\/link>/)
            const pubDateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/)
            const descriptionMatch = itemXml.match(/<description>(.*?)<\/description>/)
            const sourceMatch = itemXml.match(/<source url=".*?">(.*?)<\/source>/)

            if (titleMatch && linkMatch && pubDateMatch) {
                // Clean up HTML entities in description
                let description = descriptionMatch ? descriptionMatch[1] : ''
                description = description
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/&amp;/g, '&')
                    .replace(/<[^>]*>/g, '') // Remove HTML tags
                    .trim()

                items.push({
                    title: titleMatch[1],
                    link: linkMatch[1],
                    pubDate: pubDateMatch[1],
                    description: description.substring(0, 150) + '...', // Limit description length
                    source: sourceMatch ? sourceMatch[1] : 'Google News',
                })
            }
        }

        return NextResponse.json({
            success: true,
            news: items,
        })
    } catch (error) {
        console.error('Error fetching Google News:', error)
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch news',
                news: [],
            },
            { status: 500 }
        )
    }
}
