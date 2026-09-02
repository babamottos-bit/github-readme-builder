export type VerificationStatus = 'pending' | 'verified' | 'needs_review' | 'rejected'
export type ReportTarget = 'job' | 'employer' | 'worker' | 'service'

export interface VerificationCheck { id: string; type: 'identity' | 'business' | 'job' | 'duplicate' | 'document'; status: VerificationStatus; checkedAt?: string; riskScore?: number }
export interface SafetyReport { targetType: ReportTarget; targetId: string; reason: 'scam' | 'harassment' | 'unsafe_work' | 'impersonation' | 'misleading' | 'other'; details: string; evidenceCount: number; requestId: string }
export interface EmergencyIncident { department: 'police' | 'fire' | 'ambulance'; description: string; latitude?: number; longitude?: number; consentToShareLocation: boolean; requestId: string }

export const verificationPrinciples = ['Identity and business checks', 'Duplicate and impersonation detection', 'Human moderation for risk signals', 'Appeals and evidence review', 'Immutable audit trail'] as const
export const emergencyNumbers = { AE: { police: '999', fire: '997', ambulance: '998' }, SA: { police: '999', fire: '998', ambulance: '997' }, QA: { police: '999', fire: '999', ambulance: '999' }, OM: { police: '9999', fire: '9999', ambulance: '9999' }, DEFAULT: { police: '112', fire: '112', ambulance: '112' } }
