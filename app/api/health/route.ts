import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const supabase = await createClient()

    const { error } = await supabase.from('services').select('id').limit(1)

    if (error) {
      return NextResponse.json(
        { healthy: false, error: error.message },
        { status: 503 }
      )
    }

    return NextResponse.json({ healthy: true })
  } catch {
    return NextResponse.json(
      { healthy: false, error: 'Database unreachable' },
      { status: 503 }
    )
  }
}
