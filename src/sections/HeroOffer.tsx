import { useState, useRef, useCallback, useEffect } from 'react'
import './HeroOffer.css'

const ICON_URL = 'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/c6eaf051-224b-4942-9835-4682f7b92813/frame-1000007176.original.svg'
const FLAG_URL = 'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/65253ebc-fa90-47c6-b6db-215097931a3c/.webp.original.'

const fragrances = [
  {
    name: 'Fraîcheur Verte', tag: "L'originale", tagBg: '#2AB2A6',
    thumb: 'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/75d20144-79cd-42e4-835f-bc0c106b7c02/image.original.webp',
    slides: [
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/c1f66fcb-8381-4d10-ae42-bd2a13768d42/frame-1000007171-4.original.webp',
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/590cf66b-44ff-4352-b50a-ae7122bc2a6f/photo-produit-2.original.webp',
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/cf56d1bf-2511-4b67-8981-0bc5510b7b51/capsule.original.webp',
    ],
    ctaHref: 'https://www.wespring.com/funnel/lessive/15/0?shopifyVariantId=gid://shopify/ProductVariant/41757959979206',
  },
  {
    name: 'Fleur Poudrée', tag: 'La plus douce', tagBg: '#E8BBBE',
    thumb: 'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/2206144d-ca59-4f0b-bc5f-36ba0bd6707f/image-1.original.webp',
    slides: [
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/29eb6593-b2e5-4bc8-9de2-55ffe17b7b40/frame-1000007171-5.original.webp',
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/e49d4b60-e6f9-44c6-b09a-c3936c87268e/photo-produit-2-1.original.webp',
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/b6bc97b0-c375-4ce8-9d44-80644d75359d/capsule-1.original.webp',
    ],
    ctaHref: 'https://www.wespring.com/funnel/lessive/15/0?shopifyVariantId=gid://shopify/ProductVariant/47483817754958',
  },
  {
    name: 'Air Frais', tag: 'La plus intense', tagBg: '#017BC7',
    thumb: 'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/1f8cfc01-54ef-4204-acb8-fa59007845b3/image-2.original.webp',
    slides: [
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/7173a6ef-2dc9-4b98-b5e4-2b513897decd/frame-1000007171-6.original.webp',
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/10a96c64-2fad-4ebf-9972-fc65bbdfd4f8/photo-produit-2-2.original.webp',
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/764d32e6-1507-49dc-8266-090c268c299d/capsule-2.original.webp',
    ],
    ctaHref: 'https://www.wespring.com/funnel/lessive/15/0?shopifyVariantId=gid://shopify/ProductVariant/41757797417158',
  },
  {
    name: 'Savon Végétal', tag: 'La traditionnelle', tagBg: '#E2C910',
    thumb: 'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/95587ff7-d71b-480c-a2f2-44d7dbbf0d80/image-3.original.webp',
    slides: [
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/9f42d968-ae7b-4996-8476-e4a893ce9333/frame-1000007171-7.original.webp',
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/5f027270-3634-455f-b4bc-e64bfd34f0f9/photo-produit-2-3.original.webp',
      'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/3480a6a4-456f-4c61-a09b-0098aa80354a/capsule-3.original.webp',
    ],
    ctaHref: 'https://www.wespring.com/funnel/lessive/15/0?shopifyVariantId=gid://shopify/ProductVariant/41757959946438',
  },
]

const accItems = [
  {
    id: 'pourquoi', title: 'Pourquoi Spring ?',
    paragraphs: [
      '<strong>Nettoie efficacement dès 30°C</strong> grâce à une formule concentrée qui agit au cœur des fibres.',
      '<strong>Élimine les taches du quotidien</strong> (sauce, transpiration, herbe…) sans surdoser.',
      '<strong>Respecte votre linge</strong> et aide à préserver les couleurs et les blancs.',
      '<strong>Parfum frais et agréable,</strong> pensé pour sentir le propre sans être entêtant.',
      '<strong>Capsule pré-dosée :</strong> la juste dose à chaque lavage, sans gaspillage.',
    ],
  },
  {
    id: 'ingredients', title: 'Ingrédients de notre lessive',
    paragraphs: [
      '<strong>Tensioactifs &amp; savon :</strong> pour capturer les graisses et salissures pour les éliminer dans l\'eau.',
      '<strong>Enzymes détachantes :</strong> pour nettoyer efficacement les taches du quotidien.',
      '<strong>Agents de blanchiment :</strong> pour éliminer les taches colorées et maintenir le blanc du linge.',
      '<strong>Agents anti-calcaire &amp; boosters de lavage :</strong> pour améliorer l\'efficacité de la lessive à basse température.',
      '<strong>Parfum :</strong> pour garder une odeur fraîche et la stabilité de la formule.',
      '<strong>Agents anti-redéposition :</strong> pour maintenir les salissures en suspension dans l\'eau et empêcher qu\'elles se recollent sur les fibres.',
    ],
  },
]

const STARS_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="126" height="22" viewBox="0 0 126 22" fill="none" className="ho-stars-svg">
    <path d="M22 0H0V22H22V0Z" fill="#00B67A"/><path d="M11 14.82L14.34 13.98L15.74 18.28L11 14.82ZM18.7 9.25H12.81L11 3.71L9.19 9.25H3.3L8.06 12.69L6.25 18.24L11.02 14.8L13.95 12.69L18.7 9.25Z" fill="white"/>
    <path d="M48 0H26V22H48V0Z" fill="#00B67A"/><path d="M37 14.82L40.35 13.98L41.75 18.28L37 14.82ZM44.7 9.25H38.81L37 3.71L35.19 9.25H29.3L34.07 12.69L32.26 18.24L37.03 14.8L39.96 12.69L44.7 9.25Z" fill="white"/>
    <path d="M74 0H52V22H74V0Z" fill="#00B67A"/><path d="M63 14.82L66.34 13.98L67.74 18.28L63 14.82ZM70.7 9.25H64.81L63 3.71L61.19 9.25H55.3L60.07 12.69L58.26 18.24L63.02 14.8L65.96 12.69L70.7 9.25Z" fill="white"/>
    <path d="M100 0H78V22H100V0Z" fill="#00B67A"/><path d="M89 14.82L92.34 13.98L93.74 18.28L89 14.82ZM96.7 9.25H90.81L89 3.71L87.19 9.25H81.3L86.07 12.69L84.26 18.24L89.02 14.8L91.96 12.69L96.7 9.25Z" fill="white"/>
    <path d="M126 0H104V22H126V0Z" fill="#00B67A"/><path d="M115 14.82L118.35 13.98L119.75 18.28L115 14.82ZM122.7 9.25H116.81L115 3.71L113.19 9.25H107.3L112.07 12.69L110.26 18.24L115.03 14.8L117.96 12.69L122.7 9.25Z" fill="white"/>
  </svg>
)

export default function HeroOffer({ ctaUrl: _ctaUrl }: { ctaUrl: string }) {
  const [fragIdx, setFragIdx] = useState(0)
  const [slide, setSlide] = useState(0)
  const [bannerHidden, setBannerHidden] = useState(false)
  const [accOpen, setAccOpen] = useState('pourquoi')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const isAnimating = useRef(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  const frag = fragrances[fragIdx]
  const slides = frag.slides
  const TOTAL = slides.length

  const bullets = [`9 capsules "${frag.name}"`]
  fragrances.forEach((f, i) => { if (i !== fragIdx) bullets.push(`1 capsules "${f.name}"`) })

  const setPos = useCallback((idx: number, animate: boolean) => {
    if (!trackRef.current) return
    trackRef.current.style.transition = animate ? 'transform 0.35s ease' : 'none'
    trackRef.current.style.transform = `translateX(-${(idx + 1) * 100}%)`
  }, [])

  useEffect(() => { setPos(slide, false) }, [fragIdx, slide, setPos])

  const goTo = useCallback((newSlide: number) => {
    if (isAnimating.current) return
    isAnimating.current = true
    setSlide(newSlide)
    setPos(newSlide, true)
    setTimeout(() => {
      if (newSlide < 0) { setSlide(TOTAL - 1); setPos(TOTAL - 1, false) }
      if (newSlide >= TOTAL) { setSlide(0); setPos(0, false) }
      isAnimating.current = false
    }, 360)
  }, [TOTAL, setPos])

  const selectFrag = (idx: number) => { setFragIdx(idx); setSlide(0); setBannerHidden(true) }

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) goTo(slide + (diff > 0 ? 1 : -1))
  }

  const realSlide = ((slide % TOTAL) + TOTAL) % TOTAL

  /* ── Shared sub-components ── */
  const textBlock = (
    <div className="ho-text-block">
      <div className="ho-marque-tag">
        <img src={FLAG_URL} alt="🇫🇷" />
        Marque Française
      </div>
      <p className="ho-eyebrow">UN PACK DE LESSIVE POUR DÉCOUVRIR</p>
      <h1 className="ho-title">
        Testez <strong className="ho-blue">l'efficacité SPRING</strong> sans engagement
      </h1>
      <div className="ho-rating">
        <div className="ho-stars">{STARS_SVG}</div>
        <span className="ho-rating-text">4,85/5 sur 9 289 avis</span>
      </div>
      <span className="ho-movement">Rejoignez le mouvement.</span>
      <p className="ho-desc">
        Testez SPRiNG grâce à un pack d'essai de 12 capsules qui arrivera directement dans votre boîte aux lettres d'ici quelques jours.
      </p>
    </div>
  )

  const carousel = (
    <div className="ho-carousel-outer">
      <div className={`ho-banner ${bannerHidden ? 'ho-banner-hidden' : ''}`}>
        <span>⏳ Offre de bienvenue limitée</span>
      </div>
      <span className={`ho-image-tag ${bannerHidden ? 'ho-tag-visible' : ''}`} style={{ background: frag.tagBg }}>
        {frag.tag}
      </span>
      <div className="ho-carousel-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="ho-carousel-track" ref={trackRef}>
          <div className="ho-carousel-slide"><img src={slides[TOTAL - 1]} alt="" /></div>
          {slides.map((src, i) => (
            <div key={i} className="ho-carousel-slide"><img src={src} alt={`SPRiNG photo ${i + 1}`} /></div>
          ))}
          <div className="ho-carousel-slide"><img src={slides[0]} alt="" /></div>
        </div>
      </div>
      <button className="ho-btn ho-btn-prev" onClick={() => goTo(slide - 1)}>‹</button>
      <button className="ho-btn ho-btn-next" onClick={() => goTo(slide + 1)}>›</button>
      <div className="ho-dots">
        {slides.map((_, i) => <div key={i} className={`ho-dot ${realSlide === i ? 'ho-dot-active' : ''}`} />)}
      </div>
    </div>
  )

  const thumbs = (
    <div className="ho-thumbnails">
      {fragrances.map((f, i) => (
        <button key={i} className={`ho-thumb ${fragIdx === i ? 'ho-thumb-active' : ''}`} onClick={() => selectFrag(i)}>
          <img src={f.thumb} alt={f.name} />
          <span className="ho-thumb-label">{f.name}</span>
        </button>
      ))}
    </div>
  )

  const priceBlock = (
    <div className="ho-price-section">
      <div className="ho-price-block">
        <div className="ho-price-row ho-price-row-border">
          <div className="ho-capsule-col">
            <span className="ho-capsule-label">12 capsules de lessive</span>
            <span className="ho-capsule-sub">
              Ce que contient le pack :
              <ul className="ho-bullet-list">
                {bullets.map((b, i) => (
                  <li key={i} className="ho-bullet-item">
                    <img src={ICON_URL} alt="" width="14" height="14" />
                    {b}
                  </li>
                ))}
              </ul>
            </span>
          </div>
          <span>4,90€</span>
        </div>
        <div className="ho-price-row">
          <span>Livraison</span>
          <span className="ho-free">OFFERTE</span>
        </div>
        <div className="ho-price-row ho-total">
          <span>TOTAL</span>
          <span className="ho-total-price">
            <s>7,90€</s> <strong className="ho-blue">4,90€</strong>
          </span>
        </div>
      </div>
      <button className="ho-cta-button" onClick={() => { window.location.href = frag.ctaHref }}>
        Je commande mon pack d'essai
      </button>
      <p className="ho-disclaimer">Sans engagement</p>
    </div>
  )

  const accordions = (
    <div className="ho-acc-wrapper">
      {accItems.map(item => (
        <div key={item.id} className={`ho-acc-item ${accOpen === item.id ? 'ho-acc-open' : ''}`}>
          <div className="ho-acc-header" onClick={() => setAccOpen(accOpen === item.id ? '' : item.id)}>
            <span className="ho-acc-title">{item.title}</span>
            <button className="ho-acc-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <div className="ho-acc-body">
            <div className="ho-acc-body-inner">
              <div className="ho-acc-content">
                {item.paragraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="ho-section">
      {/* ── MOBILE LAYOUT ── */}
      <div className="ho-mobile">
        {textBlock}
        <div className="ho-mob-gallery">{carousel}</div>
        {thumbs}
        {priceBlock}
        {accordions}
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="ho-desktop">
        <div className="ho-desk-gallery">
          {carousel}
          {thumbs}
        </div>
        <div className="ho-desk-info">
          {textBlock}
          {priceBlock}
          {accordions}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="ho-lightbox" onClick={() => setLightboxSrc(null)}>
          <button className="ho-lightbox-close" onClick={() => setLightboxSrc(null)}>✕</button>
          <img className="ho-lightbox-img" src={lightboxSrc} alt="Agrandissement" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
