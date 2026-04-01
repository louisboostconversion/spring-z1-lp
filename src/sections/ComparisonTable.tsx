import './ComparisonTable.css'

const rows = [
  { label: 'Efficacité', emoji: '👍', spring: true, classic: true },
  { label: 'Emballage sans plastique', emoji: '📦', spring: true, classic: false },
  { label: 'Formule sans matières controversées', emoji: '🧪', spring: true, classic: false },
  { label: 'Bilan carbone réduit', emoji: '🌍', spring: true, classic: false },
  { label: 'Formule sans eau', emoji: '💧', spring: true, classic: false },
  { label: 'Choix de parfums multiple', emoji: '🌸', spring: true, classic: true },
]

function CheckIcon() {
  return (
    <span className="ct-check">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#83BBB8" />
        <path d="M7 12l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function CrossIcon() {
  return (
    <span className="ct-cross">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#FF8383" />
        <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export default function ComparisonTable({ ctaUrl }: { ctaUrl: string }) {
  return (
    <section className="ct section">
      <div className="section-inner">
        <h2 className="ct-title">
          L'efficacité des grandes marques <span className="text-blue">sans l'impact environnemental</span>
        </h2>

        <div className="ct-table">
          {/* Header */}
          <div className="ct-header">
            <div className="ct-col-label"></div>
            <div className="ct-col-spring">
              <img
                src="https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/4617c1b1-c085-4617-a3aa-4a90837e9522/logo-spring-noir-1-2.original.svg"
                alt="SPRiNG."
                className="ct-logo"
              />
            </div>
            <div className="ct-col-classic">
              <span className="ct-classic-icon">🧴</span> Lessive classique
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className="ct-row">
              <div className="ct-col-label">
                <span className="ct-emoji">{row.emoji}</span>
                <span>{row.label}</span>
              </div>
              <div className="ct-col-spring">
                <CheckIcon />
              </div>
              <div className="ct-col-classic">
                {row.classic ? <CheckIcon /> : <CrossIcon />}
              </div>
            </div>
          ))}
        </div>

        <div className="ct-cta-wrap">
          <a href={ctaUrl} className="cta-yellow">
            Mon pack d'essai pour <s>7,90€</s> 4,90€
          </a>
          <div className="ct-sub-info">
            <div className="ct-sub-item">
              <img src="/images/icon-livraison.svg" alt="" className="ct-sub-icon" />
              <div className="ct-sub-text">
                <span className="sub-label">Livraison offerte</span>
                <span className="sub-detail">en boîte aux lettres</span>
              </div>
            </div>
            <div className="ct-sub-item">
              <img src="/images/icon-engagement.svg" alt="" className="ct-sub-icon" />
              <div className="ct-sub-text">
                <span className="sub-label">Sans engagement</span>
                <span className="sub-detail">modifiable en 1 clic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
