// Re-export types
export type { Database } from './types'
import type { Database } from './types'

// Re-export clients
export { createClient as createBrowserClient } from './client'
export { createClient as createServerClient } from './server'

// Helper types
export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row']

export type Insertable<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert']

export type Updateable<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update']

// Specific table types
export type Service = Tables<'services'>
export type Official = Tables<'officials'>
export type Ordinance = Tables<'ordinances'>
export type Resolution = Tables<'resolutions'>
export type Statistic = Tables<'statistics'>
