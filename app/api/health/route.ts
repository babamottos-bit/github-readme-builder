import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ status: 'ok', service: 'github-readme-builder', timestamp: new Date().toISOString() }, { headers: { 'Cache-Control': 'no-store' } })
}
