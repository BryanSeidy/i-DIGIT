import Link from 'next/link'
import { Icon } from './icon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/brand/idigit-logo-horizontal-dark.svg" alt="i-DIGIT — Solutions numériques" />
          <p>Des solutions numériques fiables et adaptées aux réalités de votre activité.</p>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <a href="https://wa.me/237659754675" target="_blank" rel="noreferrer"><Icon name="phone" size={17}/> +237 659 754 675</a>
          <a href="mailto:seidychris4@gmail.com"><Icon name="mail" size={17}/> seidychris4@gmail.com</a>
          <span><Icon name="pin" size={17}/> Akwa, Douala — Cameroun</span>
        </div>
        <div className="footer-links">
          <h3>Explorer</h3>
          <Link href="/#services">Nos services</Link>
          <Link href="/carte/">Carte professionnelle</Link>
          <Link href="/confidentialite/">Confidentialité</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} i-DIGIT. Tous droits réservés.</span>
        <span>Akwa · Douala · Cameroun</span>
      </div>
    </footer>
  )
}
