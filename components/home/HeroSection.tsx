export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-blue-950 py-20 text-white md:py-32">
            <div className="container relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        Welcome to{' '}
                        <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                            BetterOrmoc
                        </span>
                    </h1>
                    <p className="mb-8 text-lg leading-relaxed text-blue-50 md:text-xl">
                        Empowering the people of Ormoc with transparent access to the
                        services, programs, and public funds of LGU Ormoc.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-green-700 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
                        >
                            Browse Services
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-green-700"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-0 top-0 h-full w-full opacity-10">
                <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-yellow-300 blur-3xl"></div>
            </div>
        </section>
    )
}
