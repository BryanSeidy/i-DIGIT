# i-DIGIT — Site vitrine

Site institutionnel Next.js App Router, TypeScript et CSS personnalisé, configuré pour un export statique et un hébergement Cloudflare Pages.

## Positionnement
i-DIGIT accompagne les particuliers et les organisations dans leurs projets de solutions technologiques, en s'appuyant sur un réseau de fournisseurs et d'intervenants spécialisés selon la nature du besoin.

Domaines prioritaires présentés sur le site :
- Énergie et continuité électrique : solaire, onduleurs, batteries et systèmes de secours.
- Sécurité et contrôle d'accès : vidéosurveillance, alarmes, interphones, contrôle d'accès et portails motorisés.
- Réseaux et systèmes connectés : LAN, Wi-Fi, câblage structuré, infrastructure et domotique.
- En complément : maintenance informatique, digitalisation, développement logiciel et automatisation.

Le parcours client commence à distance : qualification du besoin, proposition technique et financière, coordination de la fourniture/intervention et suivi. Une visite de site est organisée lorsqu'elle est nécessaire au diagnostic ou au dimensionnement.

## Pages
- \`/\` : positionnement, solutions prioritaires, méthode et contact.
- \`/carte/\` : carte professionnelle de **Chris Seidy — Fondateur · Consultant**, WhatsApp, téléphone, e-mail, vCard et formulaire de demande de rappel.
- \`/confidentialite/\` : note d'information initiale sur les interactions du site.

## Identité
- URL publique actuelle : \`https://idigit.pages.dev\`.
- Domaine personnalisé \`idigit.tech\` : à connecter après achat/configuration.
- Base : Akwa, Douala — Cameroun.
- Zone d'intervention : Cameroun, à distance et sur site selon la prestation.
- WhatsApp : +237 659 754 675.
- E-mail public : \`seidychris4@gmail.com\`.
- Couleurs : \`#00B7FF\`, \`#222E3A\`, \`#F4F7FB\`.

## Développement
Prérequis : Node.js 20.9+.

\`\`\`bash
npm install
npm run dev
\`\`\`

Build statique : \`npm run build\`, résultat dans \`out/\`.

## Déploiement Cloudflare Pages
1. Importer ce dépôt depuis GitHub.
2. Preset : **Next.js (Static HTML Export)**.
3. Build command : \`npx next build\`.
4. Output directory : \`out\`.
5. Vérifier le sous-domaine \`*.pages.dev\`, puis connecter le domaine personnalisé.

## À vérifier avant publication
- Exécuter \`npm run build\` sur la branche de mise à jour.
- Vérifier les liens WhatsApp, le formulaire de contact et la vCard.
- Vérifier le rendu des images sur mobile et desktop.
- Confirmer le domaine canonique actif et les DNS avant d'acheter/connecter un domaine personnalisé.
- Clarifier les responsabilités d'i-DIGIT et des partenaires, ainsi que les garanties, avant toute promesse d'installation.

Le projet utilise l'export statique Next.js, sans SSR, API dynamique ni base de données. Le build de cette mise à jour doit encore être validé.
