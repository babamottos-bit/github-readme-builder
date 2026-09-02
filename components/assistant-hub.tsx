'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Bot, BriefcaseBusiness, ExternalLink, Mic, MicOff, Navigation, Send, Sparkles, Volume2, VolumeX } from 'lucide-react'
import { agentActions, type AgentAction, type AssistantMessage } from '@/lib/ai/types'
import { demoAssistantReply } from '@/lib/ai/agent'

const initialMessages: AssistantMessage[] = [{ id: 'welcome', role: 'assistant', content: 'Welcome to your 32TechHub guide. I can help you discover opportunities, prepare applications, find talent, compare services, or navigate the ecosystem.', createdAt: new Date().toISOString() }]
const actionLinks: Record<AgentAction, string> = { jobs: '#jobs', talent: '#talent', services: '#services', applications: '#jobs', messages: '#companies', dashboard: '#companies' }

export function AssistantHub() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [voiceSupported, setVoiceSupported] = useState(true)
  const [speaking, setSpeaking] = useState(false)
  const recognitionRef = useRef<{ start: () => void; stop: () => void; onresult: ((event: { results: { [key: number]: { [key: number]: { transcript: string } } } }) => void) | null; onend: (() => void) | null } | null>(null)
  const prompts = useMemo(() => ['Find a remote job', 'How do I hire quickly?', 'Guide me to services'], [])

  function submit(text = input) {
    const trimmed = text.trim()
    if (!trimmed) return
    const reply = demoAssistantReply(trimmed)
    setMessages(current => [...current, { id: `u-${Date.now()}`, role: 'user', content: trimmed, createdAt: new Date().toISOString() }, { id: `a-${Date.now()}`, role: 'assistant', content: reply, createdAt: new Date().toISOString() }])
    setInput('')
  }

  function toggleVoice() {
    const SpeechRecognition = (window as Window & { SpeechRecognition?: new () => typeof recognitionRef.current; webkitSpeechRecognition?: new () => typeof recognitionRef.current }).SpeechRecognition || (window as Window & { webkitSpeechRecognition?: new () => typeof recognitionRef.current }).webkitSpeechRecognition
    if (!SpeechRecognition) { setVoiceSupported(false); return }
    if (isListening) { recognitionRef.current?.stop(); setIsListening(false); return }
    const recognition = new SpeechRecognition()
    recognition.onresult = event => { const transcript = event.results[0][0].transcript; setInput(transcript); setIsListening(false) }
    recognition.onend = () => setIsListening(false)
    recognitionRef.current = recognition
    setIsListening(true)
    recognition.start()
  }

  function readAloud(content: string) {
    if (!('speechSynthesis' in window)) { setSpeaking(false); return }
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return }
    const utterance = new SpeechSynthesisUtterance(content)
    utterance.onend = () => setSpeaking(false)
    setSpeaking(true)
    window.speechSynthesis.speak(utterance)
  }

  return <section id="ai-guide" className="border-y border-border bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><div><div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-accent"><Sparkles className="size-4" /> Your AI guide</div><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em]">Talk to your<br />next opportunity.</h2><p className="mt-5 max-w-md leading-7 opacity-75">Get practical guidance for jobs, hiring, services, applications, and navigation — by text or voice.</p><div className="mt-8 flex flex-wrap gap-2">{agentActions.map(item => <Link key={item.action} href={actionLinks[item.action]} className="group rounded-xl border border-primary-foreground/20 px-3 py-2 text-xs font-semibold transition hover:bg-primary-foreground/10">{item.label}<ArrowUpRight className="ml-1 inline size-3 transition group-hover:translate-x-0.5" /></Link>)}</div></div><div className="overflow-hidden rounded-3xl bg-card text-foreground shadow-xl"><div className="flex items-center justify-between border-b border-border px-5 py-4"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Bot className="size-4" /></span><div><p className="text-sm font-semibold">32TechHub Guide</p><p className="text-xs text-muted-foreground">AI guidance · Demo mode</p></div></div><Link href="#jobs" className="text-xs font-semibold text-muted-foreground">Open marketplace <ExternalLink className="ml-1 inline size-3" /></Link></div><div className="flex max-h-80 flex-col gap-4 overflow-y-auto p-5">{messages.map(message => <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}><span className="grid size-7 shrink-0 place-items-center rounded-full bg-secondary text-[10px] font-bold">{message.role === 'assistant' ? 'AI' : 'You'}</span><div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>{message.content}{message.role === 'assistant' && <button onClick={() => readAloud(message.content)} className="ml-3 text-muted-foreground" aria-label="Read message aloud">{speaking ? <VolumeX className="inline size-3.5" /> : <Volume2 className="inline size-3.5" />}</button>}</div></div>)}</div><div className="flex flex-wrap gap-2 border-t border-border px-5 py-3">{prompts.map(prompt => <button key={prompt} onClick={() => submit(prompt)} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-secondary">{prompt}</button>)}</div><div className="flex items-center gap-2 border-t border-border p-4"><input value={input} onChange={event => setInput(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) submit() }} placeholder="Ask your guide anything..." className="min-w-0 flex-1 bg-transparent px-1 text-sm outline-none" aria-label="Message your AI guide" /><button onClick={toggleVoice} className={`rounded-xl p-2 ${isListening ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-secondary'}`} aria-label={voiceSupported ? (isListening ? 'Stop voice input' : 'Start voice input') : 'Voice input unavailable'}>{isListening ? <MicOff className="size-4" /> : <Mic className="size-4" />}</button><button onClick={() => submit()} className="rounded-xl bg-primary p-2 text-primary-foreground" aria-label="Send message"><Send className="size-4" /></button></div>{!voiceSupported && <p className="px-5 pb-4 text-xs text-muted-foreground">Voice input is not supported in this browser. You can continue with text chat.</p>}</div></div></section>
}
