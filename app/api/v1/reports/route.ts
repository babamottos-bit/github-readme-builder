import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({ targetType: z.enum(['job', 'employer', 'worker', 'service']), targetId: z.string().min(1).max(200), reason: z.enum(['scam', 'harassment', 'unsafe_work', 'impersonation', 'misleading', 'other']), details: z.string().trim().min(10).max(4000) })
export async function POST(request: Request) {
  const requestId = request.headers.get('x-request-id') ?? crypto.randomUUID()
  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ ok: false, error: { code: 'INVALID_REPORT', message: 'Please provide valid report details.' }, requestId }, { status: 400 })
  return NextResponse.json({ ok: true, data: { status: 'queued', moderationReference: `RPT-${requestId.slice(0, 8)}` }, requestId }, { status: 202 })
}
