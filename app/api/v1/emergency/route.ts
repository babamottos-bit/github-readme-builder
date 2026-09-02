import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({ department: z.enum(['police', 'fire', 'ambulance']), description: z.string().trim().min(5).max(2000), latitude: z.number().optional(), longitude: z.number().optional(), consentToShareLocation: z.boolean() })
export async function POST(request: Request) {
  const requestId = request.headers.get('x-request-id') ?? crypto.randomUUID()
  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ ok: false, error: { code: 'INVALID_INCIDENT', message: 'Please provide valid incident details.' }, requestId }, { status: 400 })
  return NextResponse.json({ ok: true, data: { status: 'received', intervention: 'configured_public_service_routing', disclaimer: 'Call local emergency services immediately.', requestId }, requestId }, { status: 202 })
}
