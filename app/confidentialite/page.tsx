import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Confidentialité',
  description: 'Informations sur la confidentialité du site i-DIGIT.',
  alternates: { canonical: '/confidentialite/' },
}

export default function PrivacyPage() {
  return (
    <section className="section legal-page">
      <div className="container legal-content">
        <span className="section-eyebrow">INFORMATIONS</span>
        <h1>Confidentialité</h1>
        <p>Le site i-DIGIT est une vitrine informative. Il ne comporte pas de compte utilisateur ni de base de données de prospects.</p>
        <h2>Prise de contact</h2>
        <p>Lorsque vous choisissez de nous contacter via WhatsApp, téléphone ou e-mail, vous quittez le site ou ouvrez l'application correspondante. Les informations que vous communiquez dans cet échange sont alors traitées par le service choisi et par i-DIGIT afin de répondre à votre demande.</p>
        <h2>Demande de rappel depuis la carte professionnelle</h2>
        <p>Le formulaire de la page Carte professionnelle prépare un message contenant les coordonnées que vous saisissez (nom, téléphone et, si vous le souhaitez, entreprise et besoin). Le message n'est transmis que si vous choisissez de l'envoyer dans WhatsApp. i-DIGIT ne reçoit aucune donnée via un serveur ou une base de données à partir de ce formulaire. Votre accord est demandé avant l'ouverture de WhatsApp. Vous pouvez aussi nous contacter directement sans utiliser ce formulaire.</p>
        <h2>Enregistrement de la carte professionnelle</h2>
        <p>Le téléchargement de la carte de contact (.vcf) se fait sur votre appareil. Le site ne reçoit pas de notification lorsqu'un visiteur enregistre cette carte.</p>
        <h2>Mesure d'audience et cookies</h2>
        <p>Aucun outil publicitaire ou de mesure d'audience n'est volontairement intégré dans cette version initiale. Des services techniques de l'hébergeur peuvent toutefois traiter des données de connexion nécessaires à la sécurité et au fonctionnement du site.</p>
        <h2>Contact</h2>
        <p>Pour toute question relative à la confidentialité, contactez-nous à <a href="mailto:seidychris4@gmail.com">seidychris4@gmail.com</a>.</p>
        <p className="legal-note">Cette page constitue une information initiale pour la version vitrine du site. Elle devra être complétée après vérification des pratiques d'hébergement, des journaux techniques et des éventuels services tiers réellement activés.</p>
        <Link href="/" className="text-link">Retour à l'accueil</Link>
      </div>
    </section>
  )
}
