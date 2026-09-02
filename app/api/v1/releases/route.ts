import { NextResponse } from 'next/server'
import { releaseCategories, technologyReleases } from '@/lib/releases'

export async function GET() {
  return NextResponse.json({ ok: true, data: { categories: releaseCategories, releases: technologyReleases }, meta: { source: 'curated-demo-catalog', liveFeeds: 'configure in admin' } }, { headers: { 'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600' } })
}
