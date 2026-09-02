export type ServiceCategory = 'marketplace' | 'community' | 'support' | 'rights'
export const serviceCatalog = [
  { id: 'manpower', title: 'Manpower supply marketplace', category: 'marketplace' as const, description: 'Request verified workers or find referral-matched roles across sectors.', functions: ['Employer requests', 'Worker discovery', 'Fast referrals', 'Availability matching'] },
  { id: 'community', title: 'Community & mutual support', category: 'community' as const, description: 'Connect local initiatives, volunteers, mentors, and neighborhood support.', functions: ['Community groups', 'Volunteer matching', 'Mentorship', 'Events'] },
  { id: 'philanthropy', title: 'Philanthropy & impact', category: 'community' as const, description: 'Coordinate donations, sponsorships, skills, and measurable social impact.', functions: ['Campaigns', 'Donations', 'Impact updates', 'Partner discovery'] },
  { id: 'patriotic', title: 'Patriotic & public-service support', category: 'community' as const, description: 'Support civic initiatives, public departments, and national development programs.', functions: ['Civic projects', 'Public campaigns', 'Volunteer response', 'Department referrals'] },
  { id: 'help', title: 'Help center', category: 'support' as const, description: 'Get quick guidance for accounts, listings, matching, and platform use.', functions: ['Search help', 'Open ticket', 'Track request', 'Human escalation'] },
  { id: 'complaints', title: 'Complaints & incident center', category: 'support' as const, description: 'Privately report fraud, cyber incidents, fake jobs, exploitation, or unsafe housing.', functions: ['Private report', 'Evidence upload', 'Case reference', 'Intervention queue'] },
  { id: 'rights', title: 'Know your rights', category: 'rights' as const, description: 'Plain-language workplace and housing guidance. Educational, not legal advice.', functions: ['Employer rights', 'Employee rights', 'Tenant rights', 'Landlord rights'] },
] as const
export const subscriptionPlans = [
  { id: 'free', name: 'Community', price: 'Free', privileges: ['Browse and apply', 'Basic referrals', 'Help center access'] },
  { id: 'pro', name: 'Professional', price: 'Coming soon', privileges: ['Priority matching', 'Profile visibility', 'Saved searches', 'Faster support'] },
  { id: 'business', name: 'Business', price: 'Coming soon', privileges: ['Manpower requests', 'Team seats', 'Verified employer badge', 'Hiring insights'] },
] as const
