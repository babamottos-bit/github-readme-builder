import type { TechnologyRelease } from '@/lib/releases'

export interface ReleaseFeed { id: string; name: string; url: string; category: TechnologyRelease['category']; enabled: boolean; lastSyncedAt?: string }
export interface ReleaseReview { releaseId: string; reviewerId: string; action: 'approve' | 'edit' | 'reject'; notes?: string; reviewedAt: string }
export interface ReleaseSyncResult { feedId: string; fetched: number; normalized: number; queuedForReview: number; syncedAt: string }

export const releaseOperations = {
  ingest: 'Fetch configured RSS/API sources, normalize versions, deduplicate, and queue entries for review.',
  approve: 'An authorized administrator approves or edits a release before it becomes public.',
  publish: 'Publish approved release guidance with source attribution and update timestamps.',
  refresh: 'Refresh feeds on a scheduled job with retries, timeouts, and idempotent upserts.',
} as const
