'use client'

import { useState } from 'react'
import Link from 'next/link'

const whatsapp = 'https://wa.me/237659754675?text=Bonjour%20i-DIGIT%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.'

const links = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#services', label: 'Services' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/#apropos', label: 'À propos' },
  { href: '/#contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand-link" aria-label="i-DIGIT, accueil" onClick={closeMenu}>
          <img src="/brand/idigit-logo-horizontal.svg" alt="i-DIGIT — Solutions numériques" className="brand-logo" />
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <a className="button button-primary nav-cta" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
        <div className="mobile-nav">
          <button
            className={`mobile-menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span/><span/><span/>
          </button>
          {menuOpen && (
            <nav id="mobile-navigation" className="mobile-menu-panel" aria-label="Navigation mobile">
              {links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}</Link>)}
              <a href={whatsapp} target="_blank" rel="noreferrer" onClick={closeMenu}>Contacter sur WhatsApp</a>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
