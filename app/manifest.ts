import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '32TechHub Jobs & Services',
    short_name: '32TechHub',
    description: 'Find jobs, talent, and services across the ITEP Globe ecosystem.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f7f2',
    theme_color: '#13231f',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
