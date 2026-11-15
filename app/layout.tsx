import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

const siteUrl = 'https://idigit.pages.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'i-DIGIT | Intégrateur de solutions technologiques au Cameroun', template: '%s | i-DIGIT' },
  description: 'i-DIGIT accompagne les particuliers et les entreprises au Cameroun dans leurs projets d’énergie solaire et de secours électrique, de sécurité électronique, de contrôle d’accès, de réseaux et de systèmes connectés.',
  applicationName: 'i-DIGIT',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'i-DIGIT — Intégrateur de solutions technologiques',
    description: 'Énergie et continuité électrique, sécurité électronique, contrôle d’accès, réseaux et systèmes connectés au Cameroun.',
    url: siteUrl,
    siteName: 'i-DIGIT',
    locale: 'fr_CM',
    type: 'website',
  },
  icons: { icon: '/brand/idigit-symbol.svg' },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#222E3A' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><Header /><main>{children}</main><Footer /></body></html>
}
