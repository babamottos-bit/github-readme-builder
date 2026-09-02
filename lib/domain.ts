export type UserRole = 'candidate' | 'employer' | 'recruiter' | 'service_provider' | 'consultant' | 'agency' | 'administrator'
export type Locale = 'en' | 'ar' | 'fr'
export type ListingStatus = 'draft' | 'published' | 'paused' | 'closed'

export interface Job { id: string; title: string; company: string; location: string; type: string; salary: string; skills: string[]; status: ListingStatus }
export interface Service { id: string; title: string; provider: string; category: string; location: string; priceFrom: number; currency: string; verified: boolean }
export interface MatchSignal { skillOverlap: number; experienceFit: number; locationFit: number; preferenceFit: number; availabilityFit: number }
export interface AIMatch { id: string; sourceType: 'job' | 'candidate' | 'service'; sourceId: string; targetId: string; score: number; signals: MatchSignal; createdAt: string }
