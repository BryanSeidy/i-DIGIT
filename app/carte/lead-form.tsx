'use client'

import { useState, type FormEvent } from 'react'

export function LeadForm() {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [phone, setPhone] = useState('')
  const [need, setNeed] = useState('')
  const [contact, setContact] = useState('WhatsApp')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name.trim() || !phone.trim() || !consent) {
      setError('Indiquez votre nom, votre numéro et donnez votre accord pour être recontacté.')
      return
    }
    const message = [
      'Bonjour i-DIGIT, je souhaite être recontacté(e).',
      `Nom : ${name.trim()}`,
      business.trim() ? `Structure : ${business.trim()}` : '',
      `Téléphone : ${phone.trim()}`,
      need.trim() ? `Besoin : ${need.trim()}` : '',
      `Contact préféré : ${contact}`,
      'J’accepte que ces informations soient utilisées pour donner suite à ma demande de contact.'
    ].filter(Boolean).join('\n')
    window.location.href = `https://wa.me/237659754675?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="lead-form-section" aria-labelledby="lead-form-title">
      <div className="lead-form-heading">
        <span className="section-eyebrow">RESTONS EN CONTACT</span>
        <h2 id="lead-form-title">Souhaitez-vous être recontacté(e) ?</h2>
        <p>Laissez vos coordonnées et indiquez brièvement votre besoin. Votre application WhatsApp s’ouvrira avec un message prérempli que vous pourrez vérifier avant de l’envoyer.</p>
      </div>
      <form className="lead-form" onSubmit={handleSubmit}>
        <label>Nom et prénom *<input value={name} onChange={e => setName(e.target.value)} autoComplete="name" required maxLength={100} placeholder="Votre nom" /></label>
        <label>Entreprise ou activité <span>(facultatif)</span><input value={business} onChange={e => setBusiness(e.target.value)} autoComplete="organization" maxLength={120} placeholder="Nom de votre structure" /></label>
        <label>Numéro de téléphone *<input value={phone} onChange={e => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" required maxLength={30} placeholder="Ex. : 6XX XX XX XX" /></label>
        <label>Votre besoin <span>(facultatif)</span><textarea value={need} onChange={e => setNeed(e.target.value)} rows={3} maxLength={500} placeholder="Maintenance, réseau, vidéosurveillance, site web, automatisation…" /></label>
        <label>Comment préférez-vous être contacté(e) ?<select value={contact} onChange={e => setContact(e.target.value)}><option>WhatsApp</option><option>Appel téléphonique</option></select></label>
        <label className="lead-consent"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} /> <span>J'accepte que i-DIGIT utilise ces informations uniquement pour répondre à ma demande et me recontacter. *</span></label>
        {error && <p className="lead-error" role="alert">{error}</p>}
        <button className="button button-primary lead-submit" type="submit">Envoyer ma demande sur WhatsApp <span aria-hidden="true">↗</span></button>
        <p className="lead-privacy">Aucune donnée n'est enregistrée dans une base i-DIGIT par ce formulaire. Les informations ne sont transmises que lorsque vous choisissez d'envoyer le message dans WhatsApp. Consultez notre <a href="/confidentialite/">notice de confidentialité</a>.</p>
      </form>
    </section>
  )
}
