import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './HowItWorks.css'

const steps = [
  { num: 1, title: 'Ouvrez votre boîte', image: '/images/arg1.png' },
  { num: 2, title: 'Saisissez une capsule de lessive', image: '/images/how-2.png' },
  { num: 3, title: 'Déposez-la au fond du tambour', image: '/images/how-3.png' },
  { num: 4, title: 'Ajoutez votre linge et démarrez', image: '/images/how-4.png' },
  { num: 5, title: 'Profitez d\'un linge propre et qui sent très bon', image: '/images/how-5.png' },
]

export default function HowItWorks({ ctaUrl }: { ctaUrl: string }) {
  return (
    <section className="how section" style={{ background: 'var(--light-blue-bg)' }}>
      <div className="section-inner">
        <h2 className="how-title">Comment ça marche ?</h2>

        <div className="how-grid">
          {steps.map(s => (
            <div key={s.num} className="how-step">
              <img src={s.image} alt={s.title} className="how-step-img" />
              <div className="how-step-num">{s.num}<span className="how-dot">.</span></div>
              <p className="how-step-title">{s.title}</p>
            </div>
          ))}
        </div>

        <div className="how-swiper-wrap">
          <Swiper slidesPerView={1.3} spaceBetween={16} className="how-swiper">
            {steps.map(s => (
              <SwiperSlide key={s.num}>
                <div className="how-step">
                  <img src={s.image} alt={s.title} className="how-step-img" />
                  <div className="how-step-num">{s.num}<span className="how-dot">.</span></div>
                  <p className="how-step-title">{s.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="how-cta-wrap">
          <a href={ctaUrl} className="cta-yellow">
            Mon pack d'essai pour <s>7,90€</s> 4,90€
          </a>
          <div className="how-trustpilot">
            <div className="tp-stars">
              {[1,2,3,4,5].map(n => <span key={n} className="tp-star">★</span>)}
            </div>
            <span className="how-tp-text">+100 000 familles conquises</span>
          </div>
        </div>
      </div>
    </section>
  )
}
