# i-DIGIT — Site vitrine

Site institutionnel Next.js App Router, TypeScript et CSS personnalisé, configuré pour un export statique et un hébergement Cloudflare Pages.

## Pages
- `/` : accueil, six familles de services, présentation, approche et contact.
- `/carte/` : carte professionnelle de **Chris Seidy — Fondateur · Consultant**, WhatsApp, téléphone, e-mail, vCard et formulaire de demande de rappel.
- `/confidentialite/` : note d'information initiale sur les interactions du site.

## Identité
- Domaine cible : `https://idigit.tech` (à connecter après achat/configuration).
- Siège : Akwa, Douala — Cameroun.
- WhatsApp : +237 659 754 675.
- E-mail provisoire : `seidychris4@gmail.com`.
- Couleurs : `#00B7FF`, `#222E3A`, `#F4F7FB`.

## Développement
Prérequis : Node.js 20.9+.

```bash
npm install
npm run dev
```

Build statique : `npm run build`, résultat dans `out/`.

## Déploiement Cloudflare Pages
1. Importer ce dépôt depuis GitHub.
2. Preset : **Next.js (Static HTML Export)**.
3. Build command : `npx next build`.
4. Output directory : `out`.
5. Vérifier le sous-domaine `*.pages.dev`, puis connecter le domaine personnalisé.

## À finaliser avant publication
- Vérifier le domaine et les DNS existants (notamment les enregistrements e-mail).
- Remplacer le portrait de remplacement de la carte professionnelle par la photo finale du fondateur.
- Confirmer les modalités de support annoncées et compléter les mentions légales/confidentialité.
- Le formulaire prépare un message WhatsApp ; aucune donnée n'est enregistrée dans une base i-DIGIT.
- Générer le QR code uniquement après déploiement de la page `/carte/` sur une URL publique stable.

Le projet n'utilise ni SSR, ni API dynamique, ni base de données. Le build n'a pas encore été validé dans cet environnement.
