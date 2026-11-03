import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://idigit.tech'),
  title: { default: 'i-DIGIT | Solutions numériques à Douala', template: '%s | i-DIGIT' },
  description: 'i-DIGIT accompagne les entreprises et les professionnels de Douala : maintenance informatique, réseaux, vidéosurveillance, domotique, digitalisation, développement logiciel et intelligence artificielle.',
  applicationName: 'i-DIGIT',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'i-DIGIT — Le numérique au service de votre performance',
    description: 'Maintenance informatique, réseaux, sécurité, domotique, digitalisation et intelligence artificielle à Douala.',
    url: 'https://idigit.tech', siteName: 'i-DIGIT', locale: 'fr_CM', type: 'website',
  },
  icons: { icon: '/brand/idigit-symbol.svg' },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#222E3A' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><Header /><main>{children}</main><Footer /></body></html>
}
