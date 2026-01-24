import { Link } from '@/i18n/navigation'
import { Facebook, Linkedin, Github, Heart } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  quickLinks: [
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'FAQ', href: '/faq' },
  ],
  resources: [
    {
      name: 'Open Data Philippines',
      href: 'https://data.gov.ph',
      external: true,
    },
    {
      name: 'Freedom of Information',
      href: 'https://www.foi.gov.ph/',
      external: true,
    },
    {
      name: 'Official LGU Ormoc Portal',
      href: 'https://ormoc.gov.ph/',
      external: true,
    },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="Ormoc City Official Seal"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="text-lg leading-none font-bold text-white">
                  BetterOrmoc
                </span>
                <span className="text-xs text-gray-400">XOfficial Portal</span>
              </div>
            </div>
            <p className="mb-4 max-w-md text-sm">
              Empowering the people of Ormoc with transparent access to the
              services, programs, and public funds of LGU Ormoc.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com/betterormoc"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/betterormoc"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/betterormoc"
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <div className="text-center text-sm md:text-left">
            <p>© {currentYear} BetterOrmoc. MIT | CC BY 4.0</p>
            <p className="text-xs text-gray-500">
              All public information sourced from official government portals.
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Official Website:{' '}
              <a
                href="https://ormoc.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 transition-colors hover:text-blue-300"
              >
                ormoc.gov.ph
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>Cost to the People of Ormoc =</span>
            <span className="font-bold text-green-400">₱0</span>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="h-3 w-3 fill-red-500 text-red-500" />{' '}
            for the people of Ormoc City
          </p>
        </div>
      </div>
    </footer>
  )
}
