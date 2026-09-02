import type { AssistantMessage } from './types'

export const assistantSystemPrompt = `You are the 32TechHub AI Guide inside ITEP Globe. Help users discover jobs, talent, services, learning paths, and business opportunities. Be concise, practical, inclusive, and transparent. Never invent a live job, employer, salary, credential, or application status. When data access is unavailable, explain that the user is in demo mode and suggest the next navigation step.`

export function demoAssistantReply(input: string): string {
  const text = input.toLowerCase()
  if (text.includes('job') || text.includes('work')) return 'I can help you find verified work across skilled, essential, remote, part-time, and full-time roles. Try “remote customer support in GCC” or open Find work to refine by location, salary, and availability.'
  if (text.includes('hire') || text.includes('talent')) return 'For fast hiring, start with the role, location, start date, and must-have skills. I can guide you to candidate discovery, shortlisting, interviews, and messages.'
  if (text.includes('service')) return 'You can compare verified providers for care, cleaning, events, marketing, technology, property, animal care, and more. Open Services to browse by category.'
  return 'I’m your 32TechHub guide. Ask me to find a job, discover talent, compare a service, prepare an application, or navigate the platform.'
}

export function normalizeMessages(messages: AssistantMessage[]) {
  return messages.slice(-20).map(({ role, content }) => ({ role, content }))
}
