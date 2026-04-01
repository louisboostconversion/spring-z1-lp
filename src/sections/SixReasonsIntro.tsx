import './SixReasonsIntro.css'

export default function SixReasonsIntro() {
  return (
    <section className="reasons-intro">
      <div className="reasons-intro-inner">
        <div className="reasons-intro-image">
          <div className="reasons-intro-logo">
            <img
              src="/images/logo-spring-blanc.svg"
              alt="SPRiNG."
            />
          </div>
          <img
            src="/images/hero-woman.png"
            alt="Femme avec son pack SPRiNG"
            className="reasons-intro-photo"
          />
        </div>

        <div className="reasons-intro-content">
          <h2 className="reasons-intro-title">
            <span className="mobile-title">6 raisons de switcher pour SPRiNG.</span>
            <span className="desktop-title">6 raisons de de passer à la lessive SPRiNG.</span>
          </h2>
          <p className="reasons-intro-subtitle">
            (et de ne plus jamais<br />
            revenir en arrière)
          </p>
          <p className="reasons-intro-desc">
            La lessive qui sent divinement bon, livrée directement chez vous.
          </p>

          <div className="reasons-intro-testimonial">
            <div className="testimonial-header">
              <div className="testimonial-left">
                <img src="/images/sarah-avatar.png" alt="Sarah" className="testimonial-avatar" />
                <span className="testimonial-name">Sarah,</span>
              </div>
              <span className="testimonial-stars">★★★★★</span>
            </div>
            <p className="testimonial-text">
              "L'efficacité est là, et le parfum est un vrai coup de cœur. Je n'ai plus besoin de courir au supermarché, car c'est directement livré chez moi. Je recommande à 100%.."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
