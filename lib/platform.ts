export type ClientPlatform = 'web' | 'android' | 'ios' | 'tablet' | 'desktop'

export interface PlatformCapabilities {
  platform: ClientPlatform
  supportsVoice: boolean
  supportsPush: boolean
  supportsDeepLinks: boolean
  supportsOfflineShell: boolean
  apiVersion: 'v1'
}

export interface ApiSuccess<T> { ok: true; data: T; requestId: string }
export interface ApiFailure { ok: false; error: { code: string; message: string }; requestId: string }
export type ApiResponse<T> = ApiSuccess<T> | ApiFailure

export const supportedPlatforms: PlatformCapabilities[] = [
  { platform: 'web', supportsVoice: true, supportsPush: true, supportsDeepLinks: true, supportsOfflineShell: true, apiVersion: 'v1' },
  { platform: 'android', supportsVoice: true, supportsPush: true, supportsDeepLinks: true, supportsOfflineShell: true, apiVersion: 'v1' },
  { platform: 'ios', supportsVoice: true, supportsPush: true, supportsDeepLinks: true, supportsOfflineShell: true, apiVersion: 'v1' },
  { platform: 'tablet', supportsVoice: true, supportsPush: true, supportsDeepLinks: true, supportsOfflineShell: true, apiVersion: 'v1' },
  { platform: 'desktop', supportsVoice: true, supportsPush: true, supportsDeepLinks: true, supportsOfflineShell: true, apiVersion: 'v1' },
]

export const apiContract = {
  version: 'v1',
  basePath: '/api/v1',
  principles: ['backward-compatible contracts', 'idempotent mutations', 'graceful degradation', 'correlation IDs', 'rolling deployments'] as const,
} as const
