export type CommunityTopic = { id: string; title: string; category: string; replies: number; members: string; verified: boolean; excerpt: string }

export const communityTopics: CommunityTopic[] = [
  { id: 'gcc-work', title: 'GCC work and relocation circle', category: 'Work', replies: 128, members: '2.4k', verified: true, excerpt: 'Share practical hiring, onboarding, accommodation, and relocation guidance.' },
  { id: 'drivers', title: 'Drivers, fleet owners, and logistics', category: 'Work', replies: 84, members: '1.1k', verified: true, excerpt: 'Compare routes, licenses, vehicle requirements, and fair work conditions.' },
  { id: 'small-business', title: 'Small business growth desk', category: 'Business', replies: 67, members: '890', verified: false, excerpt: 'Trade referrals, vendor recommendations, and responsible partnership advice.' },
  { id: 'tenant-rights', title: 'Tenant and landlord rights corner', category: 'Rights', replies: 52, members: '760', verified: true, excerpt: 'Discuss leases, maintenance, deposits, and respectful housing practices.' },
  { id: 'mutual-aid', title: 'Community mutual aid and philanthropy', category: 'Community', replies: 39, members: '540', verified: true, excerpt: 'Coordinate skills, donations, volunteering, and local support campaigns.' },
]

export const communityActions = [
  { title: 'Start a discussion', description: 'Ask a question, share experience, or open a local topic.', label: 'Create post' },
  { title: 'Join a work campaign', description: 'Find verified campaigns needing workers, partners, or volunteers.', label: 'Explore campaigns' },
  { title: 'Request a service', description: 'Connect a forum conversation to a relevant marketplace service.', label: 'Browse services' },
  { title: 'Report a concern', description: 'Flag fraud, exploitation, cyber abuse, or unsafe conduct privately.', label: 'Open report' },
]

export const communityApiContract = { version: 'v1', resources: ['topics', 'posts', 'comments', 'reactions', 'reports', 'campaigns'], moderation: 'human-review-with-automated-signals' as const }
