export type EcosystemCategory = 'Work' | 'Business' | 'Technology' | 'Community' | 'Safety'

export interface EcosystemService {
  id: string
  name: string
  category: EcosystemCategory
  description: string
  functions: string[]
  audience: string
  href: string
}

export const ecosystemServices: EcosystemService[] = [
  { id: 'jobs', name: 'Jobs marketplace', category: 'Work', description: 'Discover verified work across every skill level, location, and schedule.', functions: ['Search and filters', 'Remote, hybrid, onsite', 'Applications and alerts'], audience: 'Job seekers and employers', href: '#jobs' },
  { id: 'talent', name: 'Talent marketplace', category: 'Work', description: 'Present skills, experience, availability, portfolios, and professional goals.', functions: ['Profiles and CVs', 'AI recommendations', 'Shortlisting'], audience: 'Candidates and recruiters', href: '#talent' },
  { id: 'services', name: 'Services marketplace', category: 'Business', description: 'Find trusted freelancers, consultants, agencies, and local service providers.', functions: ['Listings and pricing', 'Requests and orders', 'Reviews and verification'], audience: 'Customers and providers', href: '#services' },
  { id: 'employers', name: 'Employer workspace', category: 'Business', description: 'Move from vacancy to hire with a focused recruiting workspace.', functions: ['Vacancy management', 'Pipelines and interviews', 'Hiring analytics'], audience: 'Companies and agencies', href: '#companies' },
  { id: 'ai-guide', name: 'AI Guide and agents', category: 'Technology', description: 'Get guidance for discovery, applications, hiring, services, and workflows.', functions: ['Chat and voice', 'Recommendations', 'Workflow automation'], audience: 'Every ecosystem participant', href: '#assistant' },
  { id: 'release-hub', name: 'Release intelligence', category: 'Technology', description: 'Track important product releases and translate them into practical action.', functions: ['Curated updates', 'Feed ingestion', 'Business adaptation notes'], audience: 'Teams and founders', href: '#releases' },
  { id: 'future-skills', name: 'Future skills', category: 'Technology', description: 'Explore high-demand capabilities and high-paying career paths.', functions: ['Demand signals', 'Learning pathways', 'Career opportunities'], audience: 'Learners and professionals', href: '#skills' },
  { id: 'events', name: 'Events and production', category: 'Business', description: 'Source event crews, venues, DJs, production, displays, and staffing.', functions: ['Crew booking', 'Security and safety', 'Drone displays and production'], audience: 'Organizers and venues', href: '#services' },
  { id: 'care', name: 'Care and home support', category: 'Community', description: 'Connect families with caregivers, domestic workers, cleaning, and animal care.', functions: ['Availability matching', 'Care profiles', 'Trusted reviews'], audience: 'Families and providers', href: '#services' },
  { id: 'capital', name: 'Capital and partnerships', category: 'Business', description: 'Create pathways for investors, sales, partnerships, founders, and growth.', functions: ['Introductions', 'Business opportunities', 'Founder discovery'], audience: 'Founders and investors', href: '#companies' },
  { id: 'trust', name: 'Trust and verification', category: 'Safety', description: 'Double-check accounts, opportunities, reports, and provider credentials.', functions: ['Risk signals', 'Human review', 'Reports and appeals'], audience: 'Everyone on the platform', href: '#trust' },
  { id: 'emergency', name: 'Emergency assistance', category: 'Safety', description: 'Location-aware guidance and configured call paths for urgent situations.', functions: ['Police, fire, ambulance', 'Consent-based location', 'Incident reports'], audience: 'People needing urgent help', href: '#emergency' },
  { id: 'community', name: 'Community and culture', category: 'Community', description: 'Support education, cultural promotion, social care, and peacebuilding connections.', functions: ['Programs and services', 'Volunteer opportunities', 'Local partnerships'], audience: 'Organizations and communities', href: '#services' },
]

export const ecosystemCategories = ['All', 'Work', 'Business', 'Technology', 'Community', 'Safety'] as const
