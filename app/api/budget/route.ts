import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()

    // Fetch budget overview
    const { data: overview, error: overviewError } = await supabase
      .from('budget_overview')
      .select('*')
      .eq('year', 2025)
      .single()

    if (overviewError && overviewError.code !== 'PGRST116') {
      return NextResponse.json(
        { error: overviewError.message },
        { status: 500 }
      )
    }

    // Fetch revenue sources
    const { data: revenue, error: revenueError } = await supabase
      .from('revenue_sources')
      .select('*')
      .eq('year', 2025)
      .order('amount', { ascending: false })

    if (revenueError) {
      return NextResponse.json({ error: revenueError.message }, { status: 500 })
    }

    // Fetch expenditure categories
    const { data: expenditure, error: expenditureError } = await supabase
      .from('expenditure_categories')
      .select('*')
      .eq('year', 2025)
      .order('amount', { ascending: false })

    if (expenditureError) {
      return NextResponse.json(
        { error: expenditureError.message },
        { status: 500 }
      )
    }

    // Fetch major projects
    const { data: projects, error: projectsError } = await supabase
      .from('major_projects')
      .select('*')
      .eq('year', 2025)
      .order('budget_allocation', { ascending: false })

    if (projectsError) {
      return NextResponse.json(
        { error: projectsError.message },
        { status: 500 }
      )
    }

    // Fetch budget documents
    const { data: documents, error: documentsError } = await supabase
      .from('budget_documents')
      .select('*')
      .in('year', [2024, 2025])
      .order('year', { ascending: false })
      .order('upload_date', { ascending: false })

    if (documentsError) {
      return NextResponse.json(
        { error: documentsError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      data: {
        overview: overview || null,
        revenue: revenue || [],
        expenditure: expenditure || [],
        projects: projects || [],
        documents: documents || [],
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch budget data' },
      { status: 500 }
    )
  }
}
