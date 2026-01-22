import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'
import { locales } from './request'

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always' // Ensures redirects to /en/ even for default
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
