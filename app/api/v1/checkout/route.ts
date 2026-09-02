import { NextResponse } from 'next/server'
import { z } from 'zod'
import Stripe from 'stripe'
import { checkoutProducts } from '@/lib/payments'

const requestSchema = z.object({ productId: z.enum(['pro', 'business']), quantity: z.number().int().min(1).max(1), requestId: z.string().min(8).max(128) })

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ ok: false, error: { code: 'INVALID_CHECKOUT_REQUEST', message: 'Choose a valid plan.' } }, { status: 400 })
  if (!process.env.STRIPE_SECRET_KEY) return NextResponse.json({ ok: true, data: { mode: 'adapter', message: 'Stripe is ready to connect when billing is enabled.' } })
  const product = checkoutProducts[parsed.data.productId]
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const session = await stripe.checkout.sessions.create({ mode: 'subscription', line_items: [{ price_data: { currency: product.currency, product_data: { name: product.name }, unit_amount: product.priceInCents, recurring: { interval: 'month' } }, quantity: parsed.data.quantity }], success_url: `${new URL(request.url).origin}/?checkout=success`, cancel_url: `${new URL(request.url).origin}/?checkout=cancelled`, integration_identifier: `32techhub_${Math.random().toString(36).slice(2, 10)}` }, { idempotencyKey: parsed.data.requestId })
  return NextResponse.json({ ok: true, data: { url: session.url } })
}
