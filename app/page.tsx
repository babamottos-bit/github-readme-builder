import Link from 'next/link'
import { ArrowUpRight, Check, Code2, Sparkles } from 'lucide-react'
import { ReadmeScanner } from '@/components/readme-scanner'

const features = [
  { icon: Code2, title: 'Built for builders', text: 'A focused starting point for turning your work into a profile people remember.' },
  { icon: Sparkles, title: 'Clarity over clutter', text: 'Keep the signal high with structure, hierarchy, and copy that earns its place.' },
  { icon: Code2, title: 'Made for GitHub', text: 'Designed around the place where your README does its best work: your profile.' },
]

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="ReadmeCodeGen home"><span className="brand-mark">&gt;_</span><span>ReadmeCodeGen</span></Link>
        <a className="nav-link" href="#features">Why it works <ArrowUpRight aria-hidden="true" /></a>
      </nav>
      <section className="hero shell">
        <div className="eyebrow"><span className="pulse" aria-hidden="true" /> Open-source profile craft</div>
        <h1>Make your README<br /><em>say more.</em></h1>
        <p className="lede">Your GitHub profile is your first impression. ReadmeCodeGen helps you shape it into a clear, confident snapshot of how you build.</p>
        <div className="hero-actions"><a className="button button-primary" href="https://github.com/babamottos-bit/github-readme-builder" target="_blank" rel="noreferrer">View the project <ArrowUpRight aria-hidden="true" /></a><a className="text-link" href="#features">See what&apos;s inside <span aria-hidden="true">↓</span></a></div>
        <div className="terminal" aria-label="Example README preview">
          <div className="terminal-bar"><span className="dot dot-red" /><span className="dot dot-yellow" /><span className="dot dot-green" /><span className="terminal-label">profile.md</span></div>
          <div className="terminal-body"><span className="line-number">01</span><span><b># Hey, I&apos;m Alex</b></span><span className="line-number">02</span><span className="muted">I build useful things for the web.</span><span className="line-number">03</span><span><span className="accent">●</span> Currently shipping with intention.</span><span className="line-number">04</span><span className="cursor">▋</span></div>
        </div>
      </section>
      <ReadmeScanner />
      <section id="features" className="features shell"><div className="section-intro"><span className="kicker">The good stuff</span><h2>Less template.<br />More <span>you.</span></h2></div><div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature" key={title}><div className="icon-wrap"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><Check className="check" aria-hidden="true" /></article>)}</div></section>
      <footer className="footer shell"><span>ReadmeCodeGen <span className="muted">/ a better first commit</span></span><span className="status"><span className="status-dot" /> Ready to deploy</span></footer>
    </main>
  )
}
