'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, Phone, ShieldCheck } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const checks = ['Email OTP', 'Phone OTP', 'Identity details', 'Business registration', 'Manual review']

export function VerificationWorkspace() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [sent, setSent] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendEmailOtp() {
    if (!email) return setMessage('Enter an email address first.')
    setLoading(true)
    const { error } = await createClient().auth.signInWithOtp({ email, options: { shouldCreateUser: true } })
    setLoading(false)
    setSent(!error)
    setMessage(error ? 'We could not send the code. Please check the address and try again.' : 'A verification code was sent to your email.')
  }

  async function verifyEmailOtp() {
    if (!email || !otp) return setMessage('Enter your email and the verification code.')
    setLoading(true)
    const { error } = await createClient().auth.verifyOtp({ email, token: otp, type: 'email' })
    setLoading(false)
    setMessage(error ? 'That code is invalid or expired.' : 'Email verified. Continue with phone and business checks.')
  }

  async function sendPhoneOtp() {
    if (!phone) return setMessage('Enter a phone number first.')
    setLoading(true)
    const { error } = await createClient().auth.signInWithOtp({ phone, options: { shouldCreateUser: true } })
    setLoading(false)
    setSent(!error)
    setMessage(error ? 'We could not send the phone code. Use international format and try again.' : 'A verification code was sent to your phone.')
  }

  return <section id="verification" className="border-y border-border bg-secondary/30"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground">Verification center</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em]">Build trust before you connect.</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Employers, workers, property managers, and service providers can complete layered checks before publishing or responding to opportunities.</p><div className="mt-7 flex flex-col gap-3">{checks.map((check, index) => <div key={check} className="flex items-center gap-3 text-sm"><span className="grid size-7 place-items-center rounded-full bg-card text-xs font-bold">{index + 1}</span>{check}<CheckCircle2 className="ml-auto size-4 text-accent-foreground" /></div>)}</div></div><div className="rounded-2xl border border-border bg-card p-5"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground"><ShieldCheck className="size-5" /></span><div><h3 className="font-semibold">Start contact verification</h3><p className="text-sm text-muted-foreground">OTP codes are handled by Supabase Auth.</p></div></div><div className="mt-6 grid gap-3 sm:grid-cols-2"><label className="text-sm font-medium">Email<input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-3 font-normal outline-none" /></label><label className="text-sm font-medium">Phone<input value={phone} onChange={event => setPhone(event.target.value)} type="tel" placeholder="+971 50 000 0000" className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-3 font-normal outline-none" /></label></div><div className="mt-4 flex flex-wrap gap-3"><button onClick={sendEmailOtp} disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"><Mail className="size-4" /> Send email OTP</button><button onClick={sendPhoneOtp} disabled={loading} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold disabled:opacity-60"><Phone className="size-4" /> Send phone OTP</button></div>{sent && <div className="mt-4 flex gap-2"><input value={otp} onChange={event => setOtp(event.target.value)} inputMode="numeric" placeholder="6-digit code" className="min-w-0 flex-1 rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none" /><button onClick={verifyEmailOtp} disabled={loading} className="rounded-xl border border-border px-4 py-3 text-sm font-semibold">Verify</button></div>}{message && <p role="status" className="mt-4 text-sm text-muted-foreground">{message}</p>}<p className="mt-5 text-xs leading-5 text-muted-foreground">Verification does not guarantee employment, payment, safety, ownership, or performance. It confirms submitted contact and review signals only.</p></div></div></div></section>
}
