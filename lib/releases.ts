export type ReleaseCategory = 'AI & Agents' | 'Cloud & DevTools' | 'Cybersecurity' | 'Data & Databases' | 'Mobile & Web' | 'Business & Finance' | 'Workplace & Marketing'

export interface TechnologyRelease {
  id: string
  name: string
  category: ReleaseCategory
  version: string
  released: string
  function: string
  dailyAdaptation: string
  businessAdaptation: string
  source: string
  status: 'Verified' | 'Review'
}

export const releaseCategories = ['All updates', 'AI & Agents', 'Cloud & DevTools', 'Cybersecurity', 'Data & Databases', 'Mobile & Web', 'Business & Finance', 'Workplace & Marketing'] as const

export const technologyReleases: TechnologyRelease[] = [
  { id: 'ai-agents', name: 'Agentic workflow platforms', category: 'AI & Agents', version: 'Latest releases', released: 'Sep 2026', function: 'Coordinate models, tools, memory, and approvals into repeatable workflows.', dailyAdaptation: 'Delegate research, drafting, scheduling, and follow-ups while keeping human review.', businessAdaptation: 'Automate recruitment screening, service matching, support, and operational handoffs.', source: 'AI provider release feeds', status: 'Verified' },
  { id: 'ai-voice', name: 'Realtime voice AI', category: 'AI & Agents', version: 'Current generation', released: 'Sep 2026', function: 'Enable natural voice conversations, transcription, and spoken responses.', dailyAdaptation: 'Use hands-free guidance for job discovery, applications, and reminders.', businessAdaptation: 'Offer multilingual candidate support and voice-first customer service.', source: 'AI provider release feeds', status: 'Verified' },
  { id: 'cloud-native', name: 'Cloud-native runtime updates', category: 'Cloud & DevTools', version: 'Rolling releases', released: 'Sep 2026', function: 'Improve deployment, observability, scaling, and edge delivery.', dailyAdaptation: 'Access work tools quickly from any device and location.', businessAdaptation: 'Ship smaller updates safely with health checks and rolling deployments.', source: 'Cloud platform feeds', status: 'Verified' },
  { id: 'zero-trust', name: 'Zero-trust security tooling', category: 'Cybersecurity', version: 'Latest patches', released: 'Sep 2026', function: 'Verify users, devices, sessions, and access continuously.', dailyAdaptation: 'Protect personal accounts and work documents across shared devices.', businessAdaptation: 'Reduce breach risk with least-privilege access and audit trails.', source: 'Security advisories', status: 'Verified' },
  { id: 'postgres', name: 'PostgreSQL ecosystem updates', category: 'Data & Databases', version: 'Current stable', released: 'Sep 2026', function: 'Store, query, secure, and analyze reliable business data.', dailyAdaptation: 'Keep profiles, applications, schedules, and documents organized.', businessAdaptation: 'Build trusted analytics, matching, billing, and reporting foundations.', source: 'Database release feeds', status: 'Verified' },
  { id: 'cross-platform', name: 'Cross-platform app releases', category: 'Mobile & Web', version: 'Current SDKs', released: 'Sep 2026', function: 'Share product experiences across web, Android, iOS, and desktop.', dailyAdaptation: 'Resume tasks seamlessly between phone, tablet, and laptop.', businessAdaptation: 'Reach workers and customers without rebuilding every workflow.', source: 'Web and mobile release feeds', status: 'Verified' },
  { id: 'fintech', name: 'Fintech and payment APIs', category: 'Business & Finance', version: 'Regional-ready', released: 'Sep 2026', function: 'Support subscriptions, invoices, payouts, and secure transactions.', dailyAdaptation: 'Track earnings, applications, and service payments in one place.', businessAdaptation: 'Launch compliant billing and regional payment integrations.', source: 'Finance platform feeds', status: 'Review' },
  { id: 'growth', name: 'Digital growth and creator tools', category: 'Workplace & Marketing', version: 'New capabilities', released: 'Sep 2026', function: 'Create, distribute, measure, and optimize digital campaigns.', dailyAdaptation: 'Build a portfolio, promote skills, and find relevant opportunities.', businessAdaptation: 'Match creators, ambassadors, agencies, and brands to campaigns.', source: 'Business software feeds', status: 'Review' },
]
