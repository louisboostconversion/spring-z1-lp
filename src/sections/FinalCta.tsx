import './FinalCta.css'

export default function FinalCta({ ctaUrl }: { ctaUrl: string }) {
  return (
    <section className="final-cta">
      <div className="final-cta-bg">
        <img src="/images/final-cta-bg.jpg" alt="" className="final-cta-bg-img" />
        <div className="final-cta-overlay">
          <p className="final-cta-surtitle">UN PACK POUR DÉCOUVRIR</p>
          <h2 className="final-cta-title">
            Une efficacité incroyable,<br />
            sans engagement !
          </h2>
          <a href={ctaUrl} className="cta-yellow final-cta-btn">
            Je profite du pack <s>7,90€</s> 4,90€
          </a>
          <p className="final-cta-shipping">
            <strong>Livraison offerte</strong> en boîte aux lettres
          </p>
        </div>
      </div>

    </section>
  )
}
