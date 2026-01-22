import { BookOpen, Calendar } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export function HistorySection() {
    return (
        <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 flex items-center gap-3">
                        <BookOpen className="h-8 w-8 text-green-400" />
                        <h2 className="text-3xl font-bold">Brief History of Ormoc</h2>
                    </div>

                    <div className="space-y-6 text-blue-50">
                        <p className="text-lg leading-relaxed">
                            Ormoc City, whose name derives from "ogmok" (an old Visayan term for lowland or depressed plain),
                            traces its roots to a small Malayan settlement mentioned in Magellan's 1521 expedition chronicles.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Historical Milestones */}
                            <div className="rounded-lg bg-blue-800/30 p-6 backdrop-blur-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-green-400" />
                                    <h3 className="font-semibold text-green-400">Key Milestones</h3>
                                </div>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex gap-3">
                                        <span className="font-semibold text-white">1597</span>
                                        <span>Jesuit missionaries arrived, beginning Christian conversion</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-semibold text-white">1834</span>
                                        <span>Established as a distinct municipality, separate from Palompon</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-semibold text-white">1861</span>
                                        <span>Puente de la Reina (Bridge of the Queen) completed</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-semibold text-white">1944</span>
                                        <span>Liberated by U.S. Gen. Douglas MacArthur (Dec 10)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-semibold text-white">1947</span>
                                        <span>Granted cityhood - first non-provincial city in the Philippines</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Modern Era */}
                            <div className="rounded-lg bg-blue-800/30 p-6 backdrop-blur-sm">
                                <h3 className="mb-4 font-semibold text-green-400">Modern Ormoc</h3>
                                <p className="mb-4 text-sm leading-relaxed">
                                    Today, Ormoc City stands as a resilient port city and the economic, cultural, and commercial hub
                                    of western Leyte. Despite facing devastating natural calamities including Tropical Storm Thelma
                                    (1991) and Super Typhoon Haiyan (2013), the city has rebuilt and continues to thrive.
                                </p>
                                <p className="text-sm leading-relaxed">
                                    As the only commercial sugarcane district in the eastern Visayan Islands, Ormoc plays a vital
                                    role in the region's economy while serving as a major transportation hub.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                            >
                                Learn More About Ormoc
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
