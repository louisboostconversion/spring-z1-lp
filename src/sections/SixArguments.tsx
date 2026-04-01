import './SixArguments.css'

const argumentsData = [
  {
    num: 1,
    title: 'Un linge qui sent vraiment le propre',
    text: <>Nos <u>4 parfums imaginés à Grasse</u>, en France vous aide à retrouver cette <u>odeur nette et fraîche</u> qu'on aime quand le linge sort de la machine.</>,
    result: 'Résultat :',
    bullets: [
      'Une vraie odeur de linge fraîchement lavé, dès l\'ouverture du tambour.',
      'Le petit plaisir discret quand vous enfilez vos vêtements.',
      'Un parfum subtil qui tient sur le textile sans être trop fort.',
    ],
    image: '/images/arg1.png',
  },
  {
    num: 2,
    title: 'Une composition clean pour vous',
    text: <>Vos vêtements touchent votre peau toute la journée, autant <u>éviter les irritants</u> ou les <u>compositions douteuses</u>.</>,
    result: <>Notre formule est <span className="text-blue">plus clean pour vous et votre peau !</span></>,
    bullets: [
      'Sans matières controversées connues à date.',
      'Sans perturbateurs endocriniens.',
      'Testé dermatologiquement.',
    ],
    image: '/images/arg2.png',
  },
  {
    num: 3,
    title: 'Efficace contre les taches du quotidien',
    text: <>Café du matin, sauce tomate, traces de transpiration ou vêtements de sport… Nos capsules contiennent <strong>la juste dose d'actifs concentrés</strong> pour <u>nettoyer en profondeur, sans surdoser</u>.</>,
    bullets: [
      'Élimine efficacement les taches courantes dès le premier lavage',
      'Fonctionne aussi à froid et en cycle court',
      'Préserve les couleurs et la blancheur lavage après lavage',
    ],
    image: '/images/arg3.png',
  },
  {
    num: 4,
    title: 'Fini les bidons lourds à porter',
    text: <>On a tous mieux à faire que de porter des bidons de 3kg au 4ème étage sans ascenseur.</>,
    result: <>Avec SPRiNG, <span className="text-blue"><u>vous changez tout ça :</u></span></>,
    bullets: [
      'Format adapté en boite aux lettres',
      'Livraison quand vous en avez besoin, vous choisissez la fréquence et le lieu de livraison.',
      'Vous rentrez du boulot, c\'est là. Charge mentale = 0.',
    ],
    image: '/images/arg4.png',
  },
  {
    num: 5,
    title: 'Payez pour le propre, pas pour le plastique',
    text: <>Avec le budget courses qui explose, SPRiNG est une bonne nouvelle pour <u>faire un peu d'économies</u>.</>,
    result: <>Pas d'eau transportée, pas de marketing superflu = <span className="text-blue"><u>un prix juste</u></span>.</>,
    bullets: [
      'SPRiNG : 0,40€ / lavage',
      'Marque leader : env. 0,52€ / lavage',
    ],
    image: '/images/arg5.png',
  },
  {
    num: 6,
    title: 'Un service aussi flexible que votre agenda',
    text: null,
    bullets: [
      'Vous partez en voyage ? Pause en 1 clic.',
      'Trop de stock ? Décalez la prochaine livraison.',
      'Tout se gère depuis votre smartphone en 30 secondes.',
      'Gérez SPRiNG comme vous gérez votre Spotify.',
    ],
    image: '/images/arg6.png',
  },
]

export default function SixArguments({ ctaUrl: _ctaUrl }: { ctaUrl: string }) {
  return (
    <section className="six-args section">
      <div className="section-inner">
        {argumentsData.map((arg, i) => (
          <div key={arg.num} className={`arg-card ${i % 2 === 1 ? 'arg-card-reverse' : ''}`}>
            <div className="arg-image">
              <img src={arg.image} alt={arg.title} />
            </div>
            <div className="arg-content">
              <div className="arg-num">{arg.num}<span className="arg-dot">.</span></div>
              <h3 className="arg-title">{arg.title}</h3>
              {arg.text && <p className="arg-text">{arg.text}</p>}
              {arg.result && <p className="arg-result">{arg.result}</p>}
              <ul className="arg-bullets">
                {arg.bullets.map((b, j) => (
                  <li key={j}>
                    <span className="arg-check">✓</span>
                    <span>{arg.num === 5 && j === 0 ? <strong className="text-blue">{b}</strong> : b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
