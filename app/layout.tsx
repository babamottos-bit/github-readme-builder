import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReadmeCodeGen — Build a README that represents you',
  description: 'A production-ready home for ReadmeCodeGen, the focused toolkit for creating a sharper GitHub profile README.',
}

export const viewport: Viewport = {
  themeColor: '#f4f7f9',
  colorScheme: 'light',
  userScalable: true,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className="bg-background"><body>{children}</body></html>
}
