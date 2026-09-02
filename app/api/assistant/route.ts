import { NextResponse } from 'next/server'
import { z } from 'zod'
import { generateText } from 'ai'
import { assistantSystemPrompt, demoAssistantReply, normalizeMessages } from '@/lib/ai/agent'
import type { AssistantMessage } from '@/lib/ai/types'

const requestSchema = z.object({ messages: z.array(z.object({ role: z.enum(['user', 'assistant']), content: z.string().min(1).max(4000) })).min(1).max(20) })
const corsHeaders = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, X-Request-ID', 'Cache-Control': 'no-store' }

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders })
}

export async function POST(request: Request) {
  const correlationId = request.headers.get('x-request-id') ?? crypto.randomUUID()
  const headers = { ...corsHeaders, 'X-Request-ID': correlationId }
  let body: unknown
  try { body = await request.json() } catch { return NextResponse.json({ ok: false, error: { code: 'INVALID_JSON', message: 'Invalid message request.' }, requestId: correlationId }, { status: 400, headers }) }
  const parsed = requestSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ ok: false, error: { code: 'INVALID_REQUEST', message: 'Invalid message request.' }, requestId: correlationId }, { status: 400, headers })
  const messages = parsed.data.messages as AssistantMessage[]
  try {
    const result = await generateText({ model: process.env.AI_MODEL ?? 'openai/gpt-5.5', system: assistantSystemPrompt, messages: normalizeMessages(messages) })
    return NextResponse.json({ ok: true, data: { mode: 'ai', message: result.text }, requestId: correlationId }, { headers })
  } catch {
    return NextResponse.json({ ok: true, data: { mode: 'demo', message: demoAssistantReply(messages.at(-1)?.content ?? '') }, requestId: correlationId }, { headers })
  }
}
