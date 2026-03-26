import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import type { Database } from '@/lib/supabase/types'

export const dynamic = 'force-dynamic'

type DPWHProject = Database['public']['Tables']['dpwh_projects']['Row']

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { searchParams } = request.nextUrl
    const yearParam = searchParams.get('year')

    let query = supabase
      .from('dpwh_projects')
      .select('*')
      .order('infra_year', { ascending: false })
      .order('budget', { ascending: false })

    if (yearParam) {
      query = query.eq('infra_year', yearParam)
    }

    const { data, error } = await query

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    const projects = (data ?? []) as DPWHProject[]

    // Map DB columns to API response format (matching component expectations)
    const mappedProjects = projects.map((p) => ({
      contractId: p.contract_id,
      description: p.description,
      category: p.category,
      status: p.status,
      budget: Number(p.budget) || 0,
      amountPaid: Number(p.amount_paid) || 0,
      progress: Number(p.progress) || 0,
      location: {
        province: p.location_province,
        region: p.location_region,
      },
      contractor: p.contractor,
      startDate: p.start_date,
      completionDate: p.completion_date,
      infraYear: p.infra_year,
      programName: p.program_name,
      sourceOfFunds: p.source_of_funds,
      isLive: p.is_live,
      livestreamUrl: p.livestream_url,
      latitude: p.latitude ? Number(p.latitude) : null,
      longitude: p.longitude ? Number(p.longitude) : null,
      reportCount: p.report_count,
      hasSatelliteImage: p.has_satellite_image,
    }))

    // Compute summary
    const summary = {
      totalProjects: mappedProjects.length,
      completed: mappedProjects.filter((p) => p.status === 'Completed').length,
      ongoing: mappedProjects.filter((p) => p.status === 'On-Going').length,
      forProcurement: mappedProjects.filter(
        (p) => p.status === 'For Procurement'
      ).length,
      terminated: mappedProjects.filter((p) => p.status === 'Terminated')
        .length,
      totalBudget: mappedProjects.reduce((sum, p) => sum + p.budget, 0),
      totalAmountPaid: mappedProjects.reduce((sum, p) => sum + p.amountPaid, 0),
    }

    return NextResponse.json({
      projects: mappedProjects,
      summary,
      source: 'DPWH Transparency Portal (transparency.dpwh.gov.ph)',
    })
  } catch (error) {
    console.error('DPWH projects API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch DPWH project data' },
      { status: 500 }
    )
  }
}
