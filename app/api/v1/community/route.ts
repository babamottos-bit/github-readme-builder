import { NextResponse } from 'next/server'
import { communityApiContract, communityTopics } from '@/lib/community'

export async function GET() {
  return NextResponse.json({ ok: true, data: { ...communityApiContract, topics: communityTopics }, requestId: crypto.randomUUID() }, { headers: { 'Cache-Control': 'no-store' } })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body.title !== 'string' || body.title.trim().length < 5) return NextResponse.json({ ok: false, error: { code: 'INVALID_REQUEST', message: 'Add a topic title with at least five characters.' }, requestId: crypto.randomUUID() }, { status: 400 })
  return NextResponse.json({ ok: true, data: { status: 'queued_for_moderation', message: 'Your post is queued for community review.' }, requestId: crypto.randomUUID() }, { status: 202 })
}
