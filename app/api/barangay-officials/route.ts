import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('barangay_officials')
      .select('*')
      .order('barangay_name', { ascending: true })

    if (error) {
      console.error('Error fetching barangay officials:', error)
      return NextResponse.json(
        { error: 'Failed to fetch barangay officials' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
