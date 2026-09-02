export type AgentAction = 'jobs' | 'talent' | 'services' | 'applications' | 'messages' | 'dashboard'

export type AssistantMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  createdAt: string
  action?: AgentAction
}

export type AssistantConversation = {
  id: string
  title: string
  messages: AssistantMessage[]
}

export const agentActions: { label: string; action: AgentAction; description: string }[] = [
  { label: 'Find jobs', action: 'jobs', description: 'Search verified opportunities' },
  { label: 'Find talent', action: 'talent', description: 'Discover people and teams' },
  { label: 'Explore services', action: 'services', description: 'Compare providers and offers' },
  { label: 'Track applications', action: 'applications', description: 'Review your progress' },
]
