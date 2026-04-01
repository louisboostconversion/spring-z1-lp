import { useState } from 'react'
import './Faq.css'

const faqsMobile = [
  { q: 'Quel parfum choisir ?', a: 'Notre pack d\'essai contient un assortiment de nos 4 parfums pour que vous puissiez les tester et choisir votre préféré.' },
  { q: 'C\'est bien gratuit la livraison ?', a: 'Oui, la livraison est offerte directement en boîte aux lettres.' },
  { q: 'Une vraie marque française ?', a: 'Oui, SPRiNG est une marque française certifiée B Corp. Nos parfums sont créés à Grasse.' },
  { q: 'Quels sont les délais de livraison ?', a: 'Votre pack est expédié sous 24-48h et livré en boîte aux lettres sous 2-4 jours ouvrés.' },
  { q: 'Une autre question ?', a: 'N\'hésitez pas à nous contacter via notre service client. Nous sommes disponibles 7j/7.' },
]

const faqsDesktop = [
  { q: 'Comment fonctionne l\'abonnement ?', a: 'L\'abonnement est sans engagement. Vous recevez vos capsules à la fréquence choisie et pouvez modifier, pauser ou annuler à tout moment en 1 clic.' },
  { q: 'Quel est le prix après le pack d\'essai ?', a: 'Après votre pack d\'essai, vous recevez 48 capsules pour 19,90€ soit 0,41€/lavage.' },
  { q: 'C\'est bien gratuit la livraison ?', a: 'Oui, la livraison est offerte directement en boîte aux lettres.' },
  { q: 'Une vraie marque française ?', a: 'Oui, SPRiNG est une marque française certifiée B Corp.' },
  { q: 'C\'est vraiment clean/naturel ?', a: 'Notre formule est sans matières controversées connues à date, testée dermatologiquement.' },
  { q: 'Une capsule pour combien de kg de linge ?', a: 'Une capsule suffit pour une machine standard (4-5kg).' },
  { q: 'Quels sont les délais de livraison ?', a: 'Expédition sous 24-48h, livraison en 2-4 jours ouvrés.' },
  { q: 'Une autre question ?', a: 'Contactez notre service client, disponible 7j/7.' },
]

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <span>{item.q}</span>
            <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
          </button>
          {openIndex === i && <div className="faq-answer">{item.a}</div>}
        </div>
      ))}
    </>
  )
}

export default function Faq({ ctaUrl }: { ctaUrl: string }) {
  return (
    <section className="faq" style={{ background: 'var(--faq-bg)' }}>
      <div className="faq-inner">
        <div className="faq-image">
          <img src="/images/faq.png" alt="Deux amies qui rient" />
        </div>
        <div className="faq-content">
          <h2 className="faq-title">Une dernière question ?</h2>
          <div className="faq-mobile"><FaqList items={faqsMobile} /></div>
          <div className="faq-desktop"><FaqList items={faqsDesktop} /></div>

          <a href={ctaUrl} className="cta-yellow faq-cta">
            Mon pack d'essai pour <s>7,90€</s> 4,90€
          </a>

          <div className="faq-sub-info">
            <div className="faq-sub-item">
              <img src="/images/icon-livraison.svg" alt="" className="faq-sub-icon" />
              <div className="faq-sub-text">
                <span className="sub-label">Livraison offerte</span>
                <span className="sub-detail">en boîte aux lettres</span>
              </div>
            </div>
            <div className="faq-sub-item">
              <img src="/images/icon-engagement.svg" alt="" className="faq-sub-icon" />
              <div className="faq-sub-text">
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
