import Link from 'next/link'
import { Icon } from '../components/icon'

const whatsappBase = 'https://wa.me/237659754675?text='
const services = [
  {
    number: '01', icon: 'wrench' as const, title: 'Maintenance & assistance informatique',
    image: 'https://images.unsplash.com/photo-1705494833979-9377fbdee229?auto=format&fit=crop&w=1100&q=82',
    imageAlt: 'Ordinateur portable ouvert pour une intervention de maintenance matérielle.',
    visualCaption: 'Maintenance de vos équipements',
    description: 'Gardez vos équipements fiables et votre activité opérationnelle.',
    items: ['Diagnostic et dépannage', 'Maintenance préventive et corrective', 'Installation et assistance technique'],
  },
  {
    number: '02', icon: 'network' as const, title: 'Réseaux & sécurité électronique',
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1100&q=82',
    imageAlt: 'Baies réseau et équipements informatiques dans une salle technique.',
    visualCaption: 'Réseaux & infrastructure',
    description: 'Des infrastructures connectées, structurées et mieux protégées.',
    items: ['Installation réseaux LAN et Wi-Fi', 'Vidéosurveillance et caméras IP', 'Configuration et sécurisation réseau'],
  },
  {
    number: '03', icon: 'home' as const, title: 'Domotique & systèmes connectés',
    image: 'https://images.unsplash.com/photo-1770625467638-964f594712e3?auto=format&fit=crop&w=1100&q=82',
    imageAlt: 'Panneau mural de commande numérique et réglage de température.',
    visualCaption: 'Des espaces intelligents',
    description: 'Rendez vos espaces plus intelligents, pratiques et maîtrisables.',
    items: ['Automatisation des éclairages', 'Capteurs et équipements connectés', 'Contrôle intelligent des installations'],
  },
  {
    number: '04', icon: 'code' as const, title: 'Digitalisation & développement logiciel',
    image: 'https://images.unsplash.com/photo-1642177977596-36c73531208d?auto=format&fit=crop&w=1100&q=82',
    imageAlt: 'Ordinateur portable affichant un service numérique dans un espace de travail.',
    visualCaption: 'Vos outils métier, en numérique',
    description: 'Des outils numériques qui s’adaptent à vos méthodes de travail.',
    items: ['Sites web et applications métiers', 'Outils internes et tableaux de bord', 'Automatisation des processus'],
  },
  {
    number: '05', icon: 'spark' as const, title: 'Intelligence artificielle & automatisation',
    image: 'https://images.unsplash.com/photo-1748609278627-4b0e483b9b70?auto=format&fit=crop&w=1100&q=82',
    imageAlt: 'Poste de travail numérique avec écran et outils de suivi de données.',
    visualCaption: 'Des processus mieux orchestrés',
    description: 'Faites gagner du temps à vos équipes avec des usages IA concrets.',
    items: ['Assistants conversationnels', 'Agents IA et intégrations API', 'Automatisation des tâches répétitives'],
  },
  {
    number: '06', icon: 'headset' as const, title: 'Externalisation informatique',
    image: 'https://images.unsplash.com/photo-1758691737158-18ffa31c0a46?auto=format&fit=crop&w=1100&q=82',
    imageAlt: 'Équipe réunie autour d’un ordinateur pour travailler ensemble.',
    visualCaption: 'Un partenaire à vos côtés',
    description: 'Un accompagnement technique adapté aux besoins de votre structure.',
    items: ['Support informatique externalisé', 'Suivi et maintenance de parc', 'Accompagnement technique continu'],
  },
]

const wa = (message: string) => `${whatsappBase}${encodeURIComponent(message)}`

export default function HomePage() {
  return (
    <>
      <section className="hero" id="accueil">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Akwa, Douala · Cameroun</div>
            <p className="hero-kicker">Votre partenaire en solutions numériques</p>
            <h1>Le numérique au service de <span>votre performance.</span></h1>
            <p className="hero-lead">Maintenance informatique, réseaux, sécurité électronique, domotique, digitalisation et intelligence artificielle.</p>
            <p className="hero-description">i-DIGIT accompagne les entreprises et les professionnels dans la mise en place de solutions numériques fiables, utiles et adaptées à leurs activités.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={wa('Bonjour i-DIGIT, je souhaite demander un devis pour un besoin dans mon entreprise.')} target="_blank" rel="noreferrer">Demander un devis <Icon name="arrow" size={18}/></a>
              <a className="button button-secondary" href={wa('Bonjour i-DIGIT, je souhaite échanger avec vous au sujet de vos services.')} target="_blank" rel="noreferrer"><span className="whatsapp-mark">◉</span> Discuter sur WhatsApp</a>
            </div>
            <div className="hero-promises">
              <div><Icon name="headset" size={21}/><span>Support réactif<br/><strong>7j/7</strong></span></div>
              <div><Icon name="network" size={21}/><span>Équipe de proximité<br/><strong>basée à Douala</strong></span></div>
              <div><Icon name="shield" size={21}/><span>Solutions adaptées<br/><strong>aux PME</strong></span></div>
            </div>
          </div>
          <div className="hero-art-wrap" aria-label="Illustration de solutions numériques interconnectées">
            <div className="hero-art-orbit orbit-one" />
            <div className="hero-art-orbit orbit-two" />
            <div className="hero-art-card hero-art-main">
              <div className="art-window-bar"><i/><i/><i/><span>i-DIGIT / solutions</span></div>
              <div className="art-content">
                <div className="art-side"><div className="art-mini-title">Systèmes connectés</div><div className="art-flow"><span/><b/><span/></div><div className="art-flow short"><span/><b/><span/></div><div className="art-chip"><Icon name="shield" size={18}/> Infrastructure sécurisée</div></div>
                <div className="art-dashboard"><div className="art-chart-title">Performance opérationnelle</div><div className="chart-bars"><i/><i/><i/><i/><i/><i/><i/></div><div className="chart-line"><span/><span/><span/><span/></div><div className="art-status"><span/> Activité connectée</div></div>
              </div>
            </div>
            <div className="floating-card floating-ai"><span className="floating-icon"><Icon name="spark" size={23}/></span><span><b>Automatisation IA</b><small>Des tâches mieux orchestrées</small></span></div>
            <div className="floating-card floating-network"><span className="floating-icon"><Icon name="network" size={23}/></span><span><b>Réseaux & sécurité</b><small>Une infrastructure fiable</small></span></div>
            <div className="hero-art-caption"><span/> Technologie utile. Résultats concrets.</div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Nos engagements">
        <div className="container trust-inner">
          <span><b>01</b> Une approche adaptée à votre activité</span>
          <span><b>02</b> Un interlocuteur de proximité</span>
          <span><b>03</b> Des solutions pensées pour durer</span>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">CE QUE NOUS FAISONS</span>
            <h2>Des solutions numériques <span>qui vous font avancer.</span></h2>
            <p>Un accompagnement technique et digital pour simplifier vos opérations, renforcer vos installations et soutenir votre croissance.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-visual">
                  <img src={service.image} alt={service.imageAlt} loading="lazy" decoding="async"/>
                  <span className="service-visual-number">{service.number}</span>
                  <span className="service-visual-caption">{service.visualCaption}</span>
                </div>
                <div className="service-card-body">
                  <div className="service-card-top">
                    <span className="service-icon"><Icon name={service.icon} size={21}/></span>
                    <span className="service-card-kicker">EXPERTISE I-DIGIT</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>{service.items.map(item => <li key={item}><Icon name="check" size={15}/>{item}</li>)}</ul>
                  <a href={wa(`Bonjour i-DIGIT, je souhaite en savoir plus sur votre service : ${service.title}.`)} target="_blank" rel="noreferrer" className="text-link">Parler de ce service <Icon name="arrow" size={16}/></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section" id="apropos">
        <div className="container approach-layout">
          <div className="approach-mark"><img src="/brand/idigit-symbol.svg" alt="Symbole i-DIGIT"/><span className="approach-mark-caption">i-DIGIT · Akwa, Douala</span></div>
          <div className="approach-copy">
            <span className="section-eyebrow">À PROPOS D’I-DIGIT</span>
            <h2>La technologie doit être <span>un levier, pas une complication.</span></h2>
            <p>Nous aidons les entreprises et les professionnels à choisir, mettre en place et maintenir des solutions numériques adaptées à leurs réalités. Notre approche privilégie l’écoute, la fiabilité et l’utilité concrète.</p>
            <div className="value-list">
              <div><b>01</b><span><strong>Comprendre avant de proposer</strong><small>Partir de vos besoins réels et de vos contraintes.</small></span></div>
              <div><b>02</b><span><strong>Concevoir avec justesse</strong><small>Choisir des solutions proportionnées à votre activité.</small></span></div>
              <div><b>03</b><span><strong>Accompagner dans la durée</strong><small>Rester disponible pour le suivi et l'amélioration.</small></span></div>
            </div>
            <Link href="/carte/" className="text-link">Découvrir notre contact professionnel <Icon name="arrow" size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="section work-section" id="realisations">
        <div className="container work-panel">
          <div>
            <span className="section-eyebrow">UNE APPROCHE CONCRÈTE</span>
            <h2>Des solutions pensées autour de <span>vos usages.</span></h2>
            <p>Chaque intervention commence par un échange pour comprendre votre environnement, vos priorités et le résultat attendu. Nous définissons ensuite une réponse adaptée, avec un périmètre et des étapes clairs.</p>
          </div>
          <div className="work-steps">
            <div><span>01</span><b>Écouter</b><small>Comprendre votre contexte et vos besoins.</small></div>
            <div><span>02</span><b>Proposer</b><small>Définir une réponse réaliste et adaptée.</small></div>
            <div><span>03</span><b>Accompagner</b><small>Mettre en œuvre, suivre et améliorer.</small></div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container cta-inner">
          <div><span className="section-eyebrow">PARLONS DE VOTRE PROJET</span><h2>Un besoin informatique ou digital ?</h2><p>Présentez-nous votre situation. Nous échangerons sur une solution adaptée à votre structure.</p></div>
          <a className="button button-white" href={wa('Bonjour i-DIGIT, j’aimerais discuter d’un besoin pour mon entreprise.')} target="_blank" rel="noreferrer">Échanger sur WhatsApp <Icon name="arrow" size={18}/></a>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-inner">
          <div><Icon name="pin" size={22}/><span><b>Siège</b><small>Akwa, Douala — Cameroun</small></span></div>
          <div><Icon name="phone" size={22}/><span><b>WhatsApp & téléphone</b><small>+237 659 754 675</small></span></div>
          <div><Icon name="mail" size={22}/><span><b>E-mail</b><small>seidychris4@gmail.com</small></span></div>
        </div>
      </section>
    </>
  )
}
