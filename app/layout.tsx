import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '32TechHub | Jobs, Talent & Services',
  description: 'Find jobs, talent, and professional services across the global ITEP Globe ecosystem on every device.',
  generator: '32TechHub · ITEP Globe',
  manifest: '/manifest.webmanifest',
  openGraph: { title: '32TechHub | Jobs, Talent & Services', description: 'Find the work that moves you.', type: 'website' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#13231f', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
