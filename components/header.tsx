import Link from 'next/link'

const whatsapp = 'https://wa.me/237659754675?text=Bonjour%20i-DIGIT%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.'

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand-link" aria-label="i-DIGIT, accueil">
          <img src="/brand/idigit-logo-horizontal.svg" alt="i-DIGIT — Solutions numériques" className="brand-logo" />
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <Link href="/#accueil">Accueil</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#realisations">Réalisations</Link>
          <Link href="/#apropos">À propos</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <a className="button button-primary nav-cta" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
        <details className="mobile-nav">
          <summary aria-label="Ouvrir le menu"><span></span><span></span><span></span></summary>
          <nav aria-label="Navigation mobile">
            <Link href="/#accueil">Accueil</Link><Link href="/#services">Services</Link><Link href="/#realisations">Réalisations</Link><Link href="/#apropos">À propos</Link><Link href="/#contact">Contact</Link>
            <a href={whatsapp} target="_blank" rel="noreferrer">Contacter sur WhatsApp</a>
          </nav>
        </details>
      </div>
    </header>
  )
}
