import Link from 'next/link'
import { Icon } from '../components/icon'

const whatsappBase = 'https://wa.me/237659754675?text='
const wa = (message: string) => whatsappBase + encodeURIComponent(message)

const projectMessage = 'Bonjour i-DIGIT, je souhaite étudier un projet de solution technologique.\nDomaine : [énergie / sécurité / réseau / autre]\nVille ou quartier : [à préciser]\nMon besoin : [décrire brièvement].'

const solutions = [
  {
    number: '01',
    icon: 'spark' as const,
    title: 'Énergie & continuité électrique',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1100&q=82',
    imageAlt: 'Panneaux solaires installés sur une toiture.',
    visualCaption: 'Restez opérationnel',
    description: 'Protégez vos équipements essentiels et limitez les interruptions liées aux coupures.',
    items: [
      'Solutions solaires et photovoltaïques',
      'Onduleurs, batteries et systèmes de secours',
      'Étude du besoin et coordination de l’installation',
    ],
  },
  {
    number: '02',
    icon: 'camera' as const,
    title: 'Sécurité & contrôle d’accès',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1100&q=82',
    imageAlt: 'Caméra de vidéosurveillance installée sur un bâtiment.',
    visualCaption: 'Protégez vos espaces',
    description: 'Renforcez la surveillance et maîtrisez les accès à vos locaux et propriétés.',
    items: [
      'Vidéosurveillance et caméras IP',
      'Alarmes et systèmes anti-intrusion',
      'Contrôle d’accès, interphones et portails motorisés',
    ],
  },
  {
    number: '03',
    icon: 'network' as const,
    title: 'Réseaux & systèmes connectés',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=82',
    imageAlt: 'Équipements réseau et serveurs dans une baie informatique.',
    visualCaption: 'Connectez vos installations',
    description: 'Disposez d’une infrastructure réseau structurée, stable et adaptée à vos usages.',
    items: [
      'Réseaux LAN, Wi-Fi et câblage structuré',
      'Infrastructure informatique et connectivité',
      'Domotique et automatisation des équipements',
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <section className="hero" id="accueil">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Akwa, Douala · Cameroun</div>
            <p className="hero-kicker">Intégration de solutions technologiques</p>
            <h1>Des solutions fiables pour <span>vos espaces et vos activités.</span></h1>
            <p className="hero-lead">Énergie de secours, sécurité électronique, réseaux et systèmes connectés.</p>
            <p className="hero-description">i-DIGIT vous aide à définir la solution adaptée à votre besoin, à identifier les équipements appropriés et à coordonner sa mise en œuvre avec des intervenants techniques spécialisés.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={wa(projectMessage)} target="_blank" rel="noreferrer">Décrire mon besoin <Icon name="arrow" size={18}/></a>
              <a className="button button-secondary" href={wa('Bonjour i-DIGIT, je souhaite échanger avec vous au sujet d’un projet de sécurité, d’énergie ou de réseau.')} target="_blank" rel="noreferrer"><span className="whatsapp-mark">◉</span> Parler sur WhatsApp</a>
            </div>
            <div className="hero-promises">
              <div><Icon name="check" size={21}/><span>Un besoin analysé<br/><strong>avant de proposer</strong></span></div>
              <div><Icon name="network" size={21}/><span>Interventions<br/><strong>selon votre projet</strong></span></div>
              <div><Icon name="shield" size={21}/><span>Un projet cadré<br/><strong>et suivi</strong></span></div>
            </div>
          </div>
          <div className="hero-art-wrap" aria-label="Illustration du pilotage de solutions technologiques">
            <div className="hero-art-orbit orbit-one" />
            <div className="hero-art-orbit orbit-two" />
            <div className="hero-art-card hero-art-main">
              <div className="art-window-bar"><i/><i/><i/><span>i-DIGIT / intégration</span></div>
              <div className="art-content">
                <div className="art-side">
                  <div className="art-mini-title">Solutions coordonnées</div>
                  <div className="art-flow"><span/><b/><span/></div>
                  <div className="art-flow short"><span/><b/><span/></div>
                  <div className="art-chip"><Icon name="shield" size={18}/> Étude · fourniture · suivi</div>
                </div>
                <div className="art-dashboard">
                  <div className="art-chart-title">Votre projet, étape par étape</div>
                  <div className="chart-bars"><i/><i/><i/><i/><i/><i/><i/></div>
                  <div className="chart-line"><span/><span/><span/><span/></div>
                  <div className="art-status"><span/> Coordination du projet</div>
                </div>
              </div>
            </div>
            <div className="floating-card floating-ai"><span className="floating-icon"><Icon name="spark" size={23}/></span><span><b>Énergie & autonomie</b><small>Des équipements adaptés</small></span></div>
            <div className="floating-card floating-network"><span className="floating-icon"><Icon name="camera" size={23}/></span><span><b>Sécurité & connectivité</b><small>Des installations mieux maîtrisées</small></span></div>
            <div className="hero-art-caption"><span/> Une réponse adaptée à chaque besoin.</div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Nos domaines d’intervention">
        <div className="container trust-inner">
          <span><b>01</b> Énergie & continuité</span>
          <span><b>02</b> Sécurité & contrôle d’accès</span>
          <span><b>03</b> Réseaux & systèmes connectés</span>
        </div>
      </section>

      <section className="section services-section" id="solutions">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">NOS SOLUTIONS</span>
            <h2>Des installations pensées autour de <span>vos besoins réels.</span></h2>
            <p>Pour les particuliers, commerces, PME, bureaux et résidences. Nous partons de votre usage, de vos contraintes et du résultat attendu.</p>
          </div>
          <div className="services-grid">
            {solutions.map((solution) => (
              <article className="service-card" key={solution.number}>
                <div className="service-visual">
                  <img src={solution.image} alt={solution.imageAlt} loading="lazy" decoding="async"/>
                  <span className="service-visual-number">{solution.number}</span>
                  <span className="service-visual-caption">{solution.visualCaption}</span>
                </div>
                <div className="service-card-body">
                  <div className="service-card-top">
                    <span className="service-icon"><Icon name={solution.icon} size={21}/></span>
                    <span className="service-card-kicker">EXPERTISE I-DIGIT</span>
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <ul>{solution.items.map(item => <li key={item}><Icon name="check" size={15}/>{item}</li>)}</ul>
                  <a href={wa('Bonjour i-DIGIT, je souhaite étudier un projet dans le domaine : ' + solution.title + '. Voici mon besoin : ')} target="_blank" rel="noreferrer" className="text-link">Étudier ce besoin <Icon name="arrow" size={16}/></a>
                </div>
              </article>
            ))}
          </div>
          <p style={{maxWidth:820, margin:'30px auto 0', textAlign:'center', color:'#687C8D', fontSize:13, lineHeight:1.8}}>
            En complément : assistance et maintenance informatique, digitalisation, développement logiciel et automatisation des processus.
          </p>
        </div>
      </section>

      <section className="section approach-section" id="apropos">
        <div className="container approach-layout">
          <div className="approach-mark"><img src="/brand/idigit-symbol.svg" alt="Symbole i-DIGIT"/><span className="approach-mark-caption">i-DIGIT · Akwa, Douala</span></div>
          <div className="approach-copy">
            <span className="section-eyebrow">À PROPOS D’I-DIGIT</span>
            <h2>Un interlocuteur pour <span>faire avancer votre projet.</span></h2>
            <p>i-DIGIT vous accompagne de la clarification du besoin à la coordination de la solution. Selon la nature du projet, nous mobilisons les fournisseurs et compétences techniques adaptés. Le périmètre, les coûts, les responsabilités et les garanties sont clarifiés avant tout engagement.</p>
            <div className="value-list">
              <div><b>01</b><span><strong>Comprendre avant de proposer</strong><small>Identifier le problème, les équipements concernés et les priorités.</small></span></div>
              <div><b>02</b><span><strong>Choisir une réponse proportionnée</strong><small>Comparer les options, le dimensionnement et le coût global.</small></span></div>
              <div><b>03</b><span><strong>Coordonner et suivre</strong><small>Organiser les intervenants et garder un point de contact clair.</small></span></div>
            </div>
            <Link href="/carte/" className="text-link">Retrouver nos coordonnées <Icon name="arrow" size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="section work-section" id="methode">
        <div className="container work-panel">
          <div>
            <span className="section-eyebrow">COMMENT NOUS AVANÇONS</span>
            <h2>Un projet clair, <span>du premier échange au suivi.</span></h2>
            <p>Nous commençons à distance pour comprendre votre besoin. Une visite technique n’est organisée que lorsqu’elle est utile au diagnostic ou au dimensionnement.</p>
          </div>
          <div className="work-steps">
            <div><span>01</span><b>Qualifier</b><small>Échanger sur le besoin, le site et les contraintes.</small></div>
            <div><span>02</span><b>Chiffrer</b><small>Obtenir une proposition technique et financière adaptée.</small></div>
            <div><span>03</span><b>Coordonner</b><small>Planifier la fourniture, l’intervention et le suivi.</small></div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container cta-inner">
          <div>
            <span className="section-eyebrow">PARLONS DE VOTRE PROJET</span>
            <h2>Un besoin en énergie, sécurité ou réseau ?</h2>
            <p>Décrivez simplement votre situation. Nous étudierons avec vous la prochaine étape pertinente.</p>
          </div>
          <a className="button button-white" href={wa(projectMessage)} target="_blank" rel="noreferrer">Présenter mon projet <Icon name="arrow" size={18}/></a>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-inner">
          <div><Icon name="pin" size={22}/><span><b>Base</b><small>Akwa, Douala — Cameroun</small></span></div>
          <div><Icon name="globe" size={22}/><span><b>Zone d’intervention</b><small>Partout au Cameroun, selon la prestation</small></span></div>
          <div><Icon name="phone" size={22}/><span><b>WhatsApp & téléphone</b><small>+237 659 754 675</small></span></div>
        </div>
      </section>
    </>
  )
}
