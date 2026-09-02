export const operationsArchitecture = {
  health: '/api/health',
  readiness: '/api/ready',
  observability: ['request correlation IDs', 'structured server logs', 'error boundaries', 'web vitals'],
  resilience: ['demo fallback', 'bounded retries', 'idempotency keys', 'feature flags'],
  deployment: ['backward-compatible API contracts', 'rolling deployments', 'expand-contract migrations', 'graceful shutdown'],
} as const

export function requestId() {
  return crypto.randomUUID()
}
