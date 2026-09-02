'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, BriefcaseBusiness, Building2, CheckCircle2, ChevronDown, Globe2, Heart, Layers3, MapPin, Menu, Search, Sparkles, Star, Users, X } from 'lucide-react'
import { AssistantHub } from '@/components/assistant-hub'
import { PlatformReadiness } from '@/components/platform-readiness'
import { ReleaseHub } from '@/components/release-hub'
import { TrustCenter } from '@/components/trust-center'
import { EmergencyAssistance } from '@/components/emergency-assistance'
import { EcosystemDirectory } from '@/components/ecosystem-directory'
import { VerificationWorkspace } from '@/components/verification-workspace'
import { ServiceCenter } from '@/components/service-center'
import { PaymentOptions } from '@/components/payment-options'

const jobs = [
  { title: 'Senior Product Designer', company: 'Namaa Digital', location: 'Dubai, UAE', type: 'Full-time', salary: '$70k – $95k', logo: 'ND', tone: 'bg-primary text-primary-foreground' },
  { title: 'Frontend Engineer · React', company: 'Orbit Labs', location: 'Riyadh, Saudi Arabia', type: 'Hybrid', salary: '$65k – $90k', logo: 'OL', tone: 'bg-accent text-accent-foreground' },
  { title: 'Growth Marketing Lead', company: 'Mosaic Commerce', location: 'Remote · GCC', type: 'Full-time', salary: '$55k – $75k', logo: 'MC', tone: 'bg-secondary text-secondary-foreground' },
  { title: 'Remote Customer Support Specialist', company: 'Global Assist', location: 'Remote · Worldwide', type: 'Part-time', salary: '$18 – $32/hr', logo: 'GA', tone: 'bg-card text-foreground' },
  { title: 'Certified Caregiver', company: 'Wellbeing Home Care', location: 'Abu Dhabi, UAE', type: 'Full-time', salary: '$1,200 – $2,000/mo', logo: 'WH', tone: 'bg-primary text-primary-foreground' },
  { title: 'School & Private Teacher', company: 'Gulf Learning Network', location: 'Doha, Qatar', type: 'Full-time', salary: '$2,000 – $4,500/mo', logo: 'GL', tone: 'bg-accent text-accent-foreground' },
  { title: 'Event Security Officer', company: 'Summit Events', location: 'Dubai, UAE', type: 'Part-time', salary: '$18 – $30/hr', logo: 'SE', tone: 'bg-secondary text-secondary-foreground' },
  { title: 'Housekeeper & Domestic Worker', company: 'Trusted Homes', location: 'Kuwait City, Kuwait', type: 'Full-time', salary: '$500 – $1,100/mo', logo: 'TH', tone: 'bg-card text-foreground' },
  { title: 'Hotel Waiter & Bell Staff', company: 'Marina Hospitality', location: 'Jeddah, Saudi Arabia', type: 'Full-time', salary: '$700 – $1,500/mo', logo: 'MH', tone: 'bg-primary text-primary-foreground' },
  { title: 'Lifeguard & Water Safety Lead', company: 'Blue Coast Resorts', location: 'Muscat, Oman', type: 'Seasonal', salary: '$900 – $1,800/mo', logo: 'BC', tone: 'bg-accent text-accent-foreground' },
  { title: 'Fitness Trainer & Personal Coach', company: 'ActiveLife Clubs', location: 'Manama, Bahrain', type: 'Part-time', salary: '$25 – $60/hr', logo: 'AC', tone: 'bg-secondary text-secondary-foreground' },
  { title: 'Bouncer & Venue Safety Staff', company: 'Nightline Group', location: 'Riyadh, Saudi Arabia', type: 'Part-time', salary: '$20 – $38/hr', logo: 'NG', tone: 'bg-card text-foreground' },
  { title: 'Registered Nurse & Medical Assistant', company: 'GulfCare Clinics', location: 'Dubai, UAE', type: 'Full-time', salary: '$2,000 – $5,500/mo', logo: 'GC', tone: 'bg-primary text-primary-foreground' },
  { title: 'Salon Stylist & Beauty Therapist', company: 'Luma Beauty Collective', location: 'Doha, Qatar', type: 'Full-time', salary: '$1,000 – $3,000/mo', logo: 'LB', tone: 'bg-accent text-accent-foreground' },
  { title: 'Air Hostess & Cabin Crew', company: 'Gulf Skies Aviation', location: 'Abu Dhabi, UAE', type: 'Full-time', salary: '$2,500 – $6,000/mo', logo: 'GS', tone: 'bg-secondary text-secondary-foreground' },
  { title: 'Storekeeper & Inventory Coordinator', company: 'Al Noor Distribution', location: 'Jeddah, Saudi Arabia', type: 'Full-time', salary: '$800 – $1,800/mo', logo: 'AN', tone: 'bg-card text-foreground' },
  { title: 'DJ, Sound & Lighting Production Crew', company: 'Pulse Nightlife', location: 'Dubai, UAE', type: 'Part-time', salary: '$500 – $2,500/event', logo: 'PN', tone: 'bg-primary text-primary-foreground' },
  { title: 'Property & Business Manager', company: 'Horizon Estates', location: 'Riyadh, Saudi Arabia', type: 'Full-time', salary: '$2,500 – $7,000/mo', logo: 'HE', tone: 'bg-accent text-accent-foreground' },
  { title: 'Therapist & Social Care Specialist', company: 'Hope Wellness Network', location: 'Remote · GCC', type: 'Full-time', salary: '$2,000 – $5,000/mo', logo: 'HW', tone: 'bg-secondary text-secondary-foreground' },
  { title: 'Cultural Promoter & Peacebuilding Officer', company: 'Bridge Communities', location: 'Muscat, Oman', type: 'Full-time', salary: '$1,500 – $4,000/mo', logo: 'BC', tone: 'bg-card text-foreground' },
  { title: 'Brand Ambassador & Content Creator', company: 'Mosaic Brands', location: 'Remote · Worldwide', type: 'Part-time', salary: '$25 – $100/hr', logo: 'MB', tone: 'bg-primary text-primary-foreground' },
]
const services = [
  { name: 'Brand strategy & identity', provider: 'Studio Amara', meta: 'Design · Dubai', price: 'From $1,200', initials: 'SA' },
  { name: 'AI & automation consulting', provider: 'Fahad Al-Harbi', meta: 'Technology · Riyadh', price: 'From $150/hr', initials: 'FA' },
  { name: 'B2B content systems', provider: 'Northline Agency', meta: 'Marketing · Remote', price: 'From $900', initials: 'NA' },
  { name: 'Home care & caregiving', provider: 'CareCircle Professionals', meta: 'Care · GCC', price: 'From $25/hr', initials: 'CP' },
  { name: 'Cleaning & housekeeping', provider: 'BrightHome Services', meta: 'Home services · Dubai', price: 'From $18/hr', initials: 'BH' },
  { name: 'Event security & stewarding', provider: 'Shield Venue Services', meta: 'Safety · Riyadh', price: 'From $22/hr', initials: 'SV' },
  { name: 'Private tutoring & coaching', provider: 'LearnWell Network', meta: 'Education · Remote', price: 'From $30/hr', initials: 'LW' },
  { name: 'Medical staffing & home nursing', provider: 'GulfCare Professionals', meta: 'Healthcare · GCC', price: 'From $35/hr', initials: 'GP' },
  { name: 'Salon, beauty & wellness', provider: 'Luma Beauty Collective', meta: 'Beauty · Dubai', price: 'From $40/hr', initials: 'LB' },
  { name: 'Full DJ, sound & lighting set', provider: 'Pulse Event Production', meta: 'Events · GCC', price: 'From $1,500/event', initials: 'PE' },
  { name: 'Property & business management', provider: 'Horizon Advisory', meta: 'Management · Riyadh', price: 'From $900/mo', initials: 'HA' },
  { name: 'Animal care & pet services', provider: 'Paws & Partners', meta: 'Animal care · Remote booking', price: 'From $20/hr', initials: 'PP' },
  { name: 'Digital, online & social marketing', provider: 'Northline Agency', meta: 'Growth · Worldwide', price: 'From $700/mo', initials: 'NA' },
  { name: 'Investor, sales & strategic partnerships', provider: 'Catalyst Ventures', meta: 'Business development · GCC', price: 'By engagement', initials: 'CV' },
  { name: 'Barista, catering & hospitality crew', provider: 'GatherWorks Staffing', meta: 'Hospitality · Events', price: 'From $18/hr', initials: 'GW' },
]
const futureSkills = [
  { name: 'AI & Machine Learning', demand: 'Very high', salary: '$110k–$180k', growth: '+36%', tone: 'bg-primary text-primary-foreground' },
  { name: 'Robotics & Drone Tech', demand: 'Very high', salary: '$95k–$175k', growth: '+34%', tone: 'bg-accent text-accent-foreground' },
  { name: 'Agentic Commerce', demand: 'Very high', salary: '$100k–$190k', growth: '+40%', tone: 'bg-secondary text-secondary-foreground' },
  { name: 'Cryptography & Cybersecurity', demand: 'Very high', salary: '$105k–$180k', growth: '+32%', tone: 'bg-card text-foreground' },
  { name: 'Fintech & Digital Assets', demand: 'High', salary: '$90k–$170k', growth: '+29%', tone: 'bg-primary text-primary-foreground' },
  { name: 'Defence, Marine & Space Tech', demand: 'High', salary: '$100k–$185k', growth: '+27%', tone: 'bg-accent text-accent-foreground' },
  { name: 'Biotech & Health Innovation', demand: 'High', salary: '$85k–$165k', growth: '+25%', tone: 'bg-secondary text-secondary-foreground' },
  { name: 'Events, Display & Fireworks Tech', demand: 'Growing', salary: '$65k–$135k', growth: '+22%', tone: 'bg-card text-foreground' },
]

export function PlatformHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [tab, setTab] = useState('Jobs')
  const [query, setQuery] = useState('')
  const [language, setLanguage] = useState('English')

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="border-b border-border bg-primary px-4 py-2 text-center text-xs font-medium tracking-wide text-primary-foreground">
        <span className="opacity-70">ITEP Globe</span><span className="mx-2 opacity-40">/</span>Building the future of work across the GCC and beyond
      </div>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="32TechHub home">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">32</span>
          <span className="text-lg font-semibold tracking-tight">TechHub<span className="text-accent-foreground">.</span></span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
          <Link className="text-foreground" href="#jobs">Find work</Link><Link href="#talent">Find talent</Link><Link href="#services">Services</Link><Link href="#skills">Future skills</Link><Link href="#companies">Companies</Link><Link href="#service-center">Services</Link><Link href="#subscriptions">Plans</Link><Link href="#platform">Platform</Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex"><label className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-2 text-xs font-medium text-muted-foreground"><Globe2 className="size-3.5" /><span className="sr-only">Choose language</span><select value={language} onChange={event => setLanguage(event.target.value)} className="max-w-24 bg-transparent outline-none"><option>English</option><option>العربية</option><option>Français</option><option>Español</option><option>Português</option><option>Deutsch</option><option>中文</option><option>日本語</option><option>हिन्दी</option><option>Türkçe</option><option>Русский</option></select></label><Link href="#about" className="px-3 py-2 text-sm font-medium">For business</Link><button className="rounded-lg border border-border px-4 py-2 text-sm font-semibold">Sign in</button><button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Join free</button></div>
        <button className="rounded-lg border border-border p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="flex flex-col gap-4 border-y border-border px-5 py-5 text-sm md:hidden"><Link href="#jobs">Find work</Link><Link href="#talent">Find talent</Link><Link href="#services">Services</Link><label className="flex items-center gap-2 text-muted-foreground"><Globe2 className="size-4" /><span>Language</span><select value={language} onChange={event => setLanguage(event.target.value)} className="ml-auto rounded-md border border-border bg-card px-2 py-1 text-foreground"><option>English</option><option>العربية</option><option>Français</option><option>Español</option><option>Português</option><option>Deutsch</option><option>中文</option><option>日本語</option><option>हिन्दी</option><option>Türkçe</option><option>Русский</option></select></label><button className="w-fit rounded-lg bg-primary px-4 py-2 text-primary-foreground">Join free</button></div>}

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"><Sparkles className="size-3.5 text-accent-foreground" /> AI-powered opportunities, thoughtfully matched</div><h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Find work. <span className="text-muted-foreground">Hire fast.</span></h1><p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">32TechHub makes job placement and employer hiring seamless — matching ready-to-move talent with the right opportunities across the GCC and beyond.</p><div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-muted-foreground"><span className="rounded-full border border-border bg-card px-3 py-2">Fast candidate matching</span><span className="rounded-full border border-border bg-card px-3 py-2">Verified employers</span><span className="rounded-full border border-border bg-card px-3 py-2">One simple workflow</span></div></div>
          <div className="relative rounded-3xl border border-border bg-card p-5 shadow-sm"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">What are you looking for?</p><p className="mt-1 text-xs text-muted-foreground">Search across the ecosystem</p></div><div className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">Explore</div></div><div className="flex gap-1 border-b border-border pb-3">{['Jobs','Talent','Services'].map(item => <button key={item} onClick={() => setTab(item)} className={`px-3 py-2 text-sm font-semibold ${tab === item ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}>{item}</button>)}</div><div className="mt-4 flex flex-col gap-3 sm:flex-row"><label className="flex flex-1 items-center gap-2 rounded-xl border border-input bg-background px-3"><Search className="size-4 text-muted-foreground" /><input value={query} onChange={e => setQuery(e.target.value)} className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none" placeholder={tab === 'Jobs' ? 'Job title, skill or keyword' : `Search ${tab.toLowerCase()}`} /></label><button className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Search</button></div><div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="size-3.5" /> Worldwide <ChevronDown className="size-3" /></div></div>
        </div>
      </section>

      <section id="jobs" className="border-y border-border bg-secondary/40"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="mb-8 flex items-end justify-between"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground">Work for every ambition</p><h2 className="text-3xl font-semibold tracking-tight">Verified opportunities across every sector and skill level</h2></div><Link href="#all-jobs" className="hidden items-center gap-2 text-sm font-semibold sm:flex">View all jobs <ArrowUpRight className="size-4" /></Link></div><div className="grid gap-4 lg:grid-cols-3">{jobs.map(job => <article key={job.title} className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-start justify-between"><div className={`grid size-11 place-items-center rounded-xl text-xs font-bold ${job.tone}`}>{job.logo}</div><button aria-label={`Save ${job.title}`} className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"><Heart className="size-4" /></button></div><h3 className="mt-8 text-lg font-semibold tracking-tight">{job.title}</h3><p className="mt-1 text-sm text-muted-foreground">{job.company}</p><div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground"><span className="rounded-md bg-secondary px-2 py-1">{job.type}</span><span className="rounded-md bg-secondary px-2 py-1">{job.salary}</span></div><div className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="size-3.5" />{job.location}<ArrowUpRight className="ml-auto size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="mb-9 max-w-2xl"><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground">From search to start date</p><h2 className="text-3xl font-semibold tracking-tight">A faster path to the right fit.</h2></div><div className="grid gap-3 md:grid-cols-3"><article className="rounded-2xl border border-border bg-card p-5"><span className="font-mono text-sm text-muted-foreground">01</span><h3 className="mt-8 text-lg font-semibold">Discover</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Search roles, talent, and services with precise filters for skills, location, salary, availability, work type, and verified status.</p></article><article className="rounded-2xl border border-border bg-card p-5"><span className="font-mono text-sm text-muted-foreground">02</span><h3 className="mt-8 text-lg font-semibold">Match</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">AI-powered recommendations surface the strongest fit, so employers and professionals spend less time sorting.</p></article><article className="rounded-2xl border border-border bg-card p-5"><span className="font-mono text-sm text-muted-foreground">03</span><h3 className="mt-8 text-lg font-semibold">Move forward</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Message, shortlist, interview, and start the next chapter from one seamless workflow.</p></article></div></section>

      <section id="talent" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground">One ecosystem</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em]">The right people.<br />The right momentum.</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">From your next hire to your next growth partner, discover verified talent and services built for the way business moves today.</p><div className="mt-7 flex items-center gap-3 text-sm font-semibold"><div className="flex -space-x-2"><span className="grid size-8 place-items-center rounded-full border-2 border-background bg-primary text-[10px] text-primary-foreground">AM</span><span className="grid size-8 place-items-center rounded-full border-2 border-background bg-accent text-[10px]">RK</span><span className="grid size-8 place-items-center rounded-full border-2 border-background bg-secondary text-[10px]">+2k</span></div><span>Join 12,000+ professionals</span></div></div><div id="services" className="grid gap-4 sm:grid-cols-3">{services.map(service => <article key={service.name} className="rounded-2xl border border-border bg-card p-5"><div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-full bg-secondary text-xs font-bold">{service.initials}</span><CheckCircle2 className="size-4 text-accent-foreground" /></div><h3 className="mt-7 text-base font-semibold leading-6">{service.name}</h3><p className="mt-2 text-xs text-muted-foreground">{service.provider}</p><p className="mt-1 text-xs text-muted-foreground">{service.meta}</p><div className="mt-6 border-t border-border pt-4 text-xs font-semibold">{service.price}<ArrowUpRight className="float-right size-4" /></div></article>)}</div></div></section>

      <section id="skills" className="border-y border-border bg-secondary/30"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground">Future sectors & founder pathways</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em]">Build skills that<br />travel further.</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Explore the capabilities employers are investing in now — and the high-paying career paths opening up across technology, business, and the GCC.</p><div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold"><span className="rounded-full border border-border bg-card px-3 py-2">Female founders</span><span className="rounded-full border border-border bg-card px-3 py-2">Male founders</span><span className="rounded-full border border-border bg-card px-3 py-2">Scale-up talent</span></div><Link href="#jobs" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Explore career opportunities <ArrowUpRight className="size-4" /></Link></div><div className="grid gap-3 sm:grid-cols-2">{futureSkills.map((skill, index) => <article key={skill.name} className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex items-start justify-between gap-3"><span className={`grid size-10 place-items-center rounded-xl text-xs font-bold ${skill.tone}`}>{String(index + 1).padStart(2, '0')}</span><span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">{skill.growth}</span></div><h3 className="mt-6 text-lg font-semibold tracking-tight">{skill.name}</h3><div className="mt-4 flex items-end justify-between border-t border-border pt-4"><div><p className="text-xs text-muted-foreground">Typical range</p><p className="mt-1 text-sm font-semibold">{skill.salary}</p></div><div className="text-right"><p className="text-xs text-muted-foreground">Demand</p><p className="mt-1 text-sm font-semibold">{skill.demand}</p></div></div></article>)}</div></div></div></section>

      <AssistantHub />

      <ReleaseHub />

      <EcosystemDirectory />

      <ServiceCenter />

      <PaymentOptions />

      <TrustCenter />

      <VerificationWorkspace />

      <EmergencyAssistance />

      <PlatformReadiness />

      <section id="companies" className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] opacity-60">Built for ambitious teams</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em]">Make your next<br />move count.</h2><p className="mt-5 max-w-md leading-7 opacity-70">Reach the people and expertise that will take your business further. One platform, from first search to final success.</p><button className="mt-7 rounded-xl bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary">Explore employer tools <ArrowUpRight className="ml-2 inline size-4" /></button></div><div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-4">{[{icon: Users, label: 'Talent pool', value: '12k+'},{icon: Building2, label: 'Companies', value: '1.8k'},{icon: BriefcaseBusiness, label: 'Open roles', value: '4.2k'},{icon: Globe2, label: 'Countries', value: '42'}].map(item => <div key={item.label} className="bg-primary p-5"><item.icon className="size-5 opacity-70" /><p className="mt-8 text-2xl font-semibold">{item.value}</p><p className="mt-1 text-xs opacity-60">{item.label}</p></div>)}</div></div></div></section>
      <section className="border-t border-border bg-secondary/30"><div className="mx-auto max-w-7xl px-5 py-8 lg:px-8"><div className="rounded-2xl border border-border bg-card p-5"><p className="text-sm font-semibold text-foreground">Important placement notice</p><p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">32TechHub is a job facilitator and marketplace only. We help match and refer candidates, employers, recruiters, and service providers; we are not a guarantor of employment, payment, safety, performance, or any job outcome. Final salary, benefits, duties, working hours, start date, and all other terms and conditions are agreed directly between the employer and employee or contractor. Please review and confirm all terms before accepting an opportunity.</p></div></div></section>
      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-2 font-semibold text-foreground"><span className="grid size-6 place-items-center rounded-md bg-primary text-[9px] text-primary-foreground">32</span> TechHub</div><div className="flex flex-wrap gap-5"><Link href="#about">About</Link><Link href="#help">Help center</Link><Link href="#privacy">Privacy</Link><span>© 2026 ITEP Globe</span></div></footer>
    </main>
  )
}
