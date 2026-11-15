'use client'

import { useState } from 'react'
import Link from 'next/link'

const whatsapp = 'https://wa.me/237659754675?text=Bonjour%20i-DIGIT%2C%20je%20souhaite%20pr%C3%A9senter%20un%20projet%20de%20solution%20technologique.'

const links = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#methode', label: 'Notre méthode' },
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
          <img src="/brand/idigit-logo-horizontal.svg" alt="i-DIGIT — Intégration de solutions technologiques" className="brand-logo" />
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <a className="button button-primary nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Parler de mon projet <span aria-hidden="true">↗</span></a>
        <div className="mobile-nav">
          <button
            className={'mobile-menu-toggle' + (menuOpen ? ' is-open' : '')}
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
