'use client'

import { Smartphone, Globe2, Bell, Link2, WifiOff, ShieldCheck } from 'lucide-react'

const capabilities = [
  { icon: Smartphone, title: 'Every screen', body: 'Responsive web foundation for Android, iPhone, tablets, desktop, and future native apps.' },
  { icon: Bell, title: 'Stay connected', body: 'Push notifications, saved searches, alerts, and deep links keep every opportunity within reach.' },
  { icon: Globe2, title: 'One API contract', body: 'Versioned, backwards-compatible services let every client integrate without a rebuild.' },
  { icon: Link2, title: 'Voice and chat', body: 'AI guidance, messaging, and voice controls use progressive enhancement with accessible fallbacks.' },
  { icon: WifiOff, title: 'Resilient by design', body: 'PWA shell, graceful degradation, bounded retries, and demo-safe empty states protect continuity.' },
  { icon: ShieldCheck, title: 'Ready to scale', body: 'Feature flags, health checks, observability, and rolling deployment seams support dependable releases.' },
]

export function PlatformReadiness() {
  return <section id="platform" className="border-y border-border bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] opacity-65">Built once. Reach everywhere.</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em]">One seamless experience across every device.</h2><p className="mt-5 max-w-md leading-7 opacity-75">32TechHub is designed as a shared platform for web, Android, iOS, tablet, and desktop — with integration seams ready for native clients and ITEP Globe modules.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-4"><Icon className="size-5 opacity-80" /><h3 className="mt-6 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 opacity-70">{body}</p></article>)}</div></div></div></section>
}
