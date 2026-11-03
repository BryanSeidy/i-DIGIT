import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '../../components/icon'
import { LeadForm } from './lead-form'

export const metadata: Metadata = {
  title: 'Carte professionnelle — Chris Seidy',
  description: 'Coordonnées professionnelles de Chris Seidy, Fondateur · Consultant chez i-DIGIT à Douala.',
  alternates: { canonical: '/carte/' },
}

export default function CartePage() {
  return (
    <section className="card-page">
      <div className="digital-card">
        <div className="digital-card-top"><img src="/brand/idigit-logo-horizontal.svg" alt="i-DIGIT — Solutions numériques"/><span>CARTE PROFESSIONNELLE</span></div>
        <div className="digital-card-person">
          <img src="/images/chris-seidy.svg" alt="Portrait de remplacement Chris Seidy" className="profile-photo"/>
          <div><span className="profile-overline">VOTRE INTERLOCUTEUR</span><h1>Chris Seidy</h1><p>Fondateur · Consultant</p><span className="profile-company">i-DIGIT · Solutions numériques</span></div>
        </div>
        <div className="digital-card-actions">
          <a className="button button-primary" href="/chris-seidy.vcf" download><Icon name="download" size={18}/> Enregistrer le contact</a>
          <a className="button button-outline" href="https://wa.me/237659754675" target="_blank" rel="noreferrer">WhatsApp <Icon name="arrow" size={17}/></a>
        </div>
        <div className="digital-card-details">
          <a href="tel:+237659754675"><Icon name="phone"/> <span>+237 659 754 675</span></a>
          <a href="mailto:seidychris4@gmail.com"><Icon name="mail"/> <span>seidychris4@gmail.com</span></a>
          <a href="https://idigit.tech" target="_blank" rel="noreferrer"><Icon name="globe"/> <span>idigit.tech</span></a>
          <div><Icon name="pin"/> <span>Akwa, Douala — Cameroun</span></div>
        </div>
        <div className="digital-card-footer"><span>Innover · Digitaliser · Performer</span><Link href="/">Visiter le site i-DIGIT <Icon name="arrow" size={15}/></Link></div>
      </div>
      <LeadForm />
      <p className="card-page-note">Une présentation professionnelle d'i-DIGIT. Pour toute demande, contactez-nous directement.</p>
    </section>
  )
}
