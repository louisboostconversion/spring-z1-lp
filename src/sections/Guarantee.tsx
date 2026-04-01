import './Guarantee.css'

export default function Guarantee() {
  return (
    <section className="guarantee section">
      <div className="section-inner">
        <div className="guarantee-card">
          <h2 className="guarantee-title">Et si ça ne vous convient pas ?</h2>
          <p className="guarantee-text">
            <span className="guarantee-desktop">
              Pas de problème, on garanti notre pack{' '}
              <strong className="guarantee-underline">satisfait ou remboursé</strong> 😉
              Et vous êtes libres de retourner acheter des bidons au supermarché !
            </span>
            <span className="guarantee-mobile">
              Un petit message et{' '}
              <strong className="guarantee-underline">on vous rembourse</strong>,
              sans vous poser de question !<br />
              On peut pas faire plus simple, non ? 😉
            </span>
          </p>
        </div>

        <img src="/images/passez-en-mode-clean.png" alt="Passez en mode clean" className="guarantee-handwritten-img" />
      </div>
    </section>
  )
}
