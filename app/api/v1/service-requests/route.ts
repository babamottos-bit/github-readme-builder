import { NextResponse } from 'next/server'
import { z } from 'zod'
const schema = z.object({ type: z.enum(['manpower','help','complaint','rights']), subject: z.string().min(3).max(160), details: z.string().min(10).max(5000), urgent: z.boolean().default(false) })
export async function POST(request: Request) { const parsed = schema.safeParse(await request.json().catch(() => null)); if (!parsed.success) return NextResponse.json({ ok: false, error: { code: 'INVALID_REQUEST', message: 'Please provide complete request details.' } }, { status: 400 }); return NextResponse.json({ ok: true, data: { caseId: `CASE-${crypto.randomUUID().slice(0, 8).toUpperCase()}`, status: 'received', next: parsed.data.urgent ? 'priority_review' : 'moderation_queue' } }, { status: 202 }) }
