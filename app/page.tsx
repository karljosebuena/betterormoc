export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <main className="container flex flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              BetterOrmoc.org
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Empowering the people of Ormoc with transparent access to the
            services, programs, and public funds of LGU Ormoc.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              🚀 Project Status
            </h3>
            <p className="text-sm text-gray-600">
              Phase 1: Foundation Setup Complete
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              🛠️ Tech Stack
            </h3>
            <p className="text-sm text-gray-600">
              Next.js 16 • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Built with ❤️ for the people of Ormoc City</p>
        </div>
      </main>
    </div>
  )
}
