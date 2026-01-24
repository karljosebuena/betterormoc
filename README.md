# BetterOrmoc.org

A modern civic-tech platform providing transparent access to municipal services, programs, and public funds of LGU Ormoc, Philippines.

![Version](https://img.shields.io/badge/version-0.1.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + Shadcn UI
- **Database**: Supabase (PostgreSQL)
- **Error Tracking**: Sentry
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## ✨ Key Features

- **Split-Screen Hero**: Modern, responsive entry point with quick access to services.
- **Autocomplete Search**: Instant results for municipal services and pages.
- **Real-Time Data**: Live weather updates (Open-Meteo) and currency rates.
- **Interactive Map**: Client-side optimized Leaflet map for location context.
- **Performance First**: Lazy loading for heavy components to ensure fast initial paint.

## 📋 Prerequisites

- Node.js 20+
- pnpm 8+
- Git

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/betterormoc-ts.git
cd betterormoc-ts
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command             | Description                             |
| ------------------- | --------------------------------------- |
| `pnpm dev`          | Start development server with Turbopack |
| `pnpm build`        | Build for production                    |
| `pnpm start`        | Start production server                 |
| `pnpm lint`         | Run ESLint                              |
| `pnpm lint:fix`     | Fix ESLint errors                       |
| `pnpm type-check`   | Run TypeScript type checking            |
| `pnpm format`       | Format code with Prettier               |
| `pnpm format:check` | Check code formatting                   |

## 🏗️ Project Structure

```
betterormoc-ts/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── home/             # Homepage components (Hero, Stats, Map, etc.)
│   ├── layout/           # Shared layout components (Header, Footer, Bars)
│   └── ui/               # Shadcn UI components
├── lib/                   # Utility functions
│   ├── utils.ts          # Helper functions
│   └── supabase/         # Supabase client
├── public/               # Static assets
├── .github/              # GitHub Actions workflows
└── package.json          # Dependencies

```

## 🎨 Design System

Based on BetterSolano.org with:

- Primary Color: `#1e3a8a` (Blue-900) - Used for primary actions and branding
- Secondary Color: `#1a5f2a` (Green-800) - Used for accents and nature-related elements
- Font: Inter (Google Fonts)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`pnpm type-check && pnpm lint`)
5. Commit with conventional commits (`git commit -m "feat: add amazing feature"`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Build process or tooling changes

## 📄 License

This project is dual-licensed:

- **MIT License** - Source code
- **CC BY 4.0** - Content

## 🙏 Acknowledgments

- Inspired by [BetterSolano.org](https://bettersolano.org)
- Built for the people of Ormoc City
- Part of the BetterGov.ph civic-tech initiative

## 📞 Contact

- Website: [betterormoc.org](https://betterormoc.org)
- Email: volunteer@betterormoc.org

---

**Cost to the People of Ormoc = ₱0**

Built with ❤️ for Ormoc City
