import './ReassuranceBar.css'

const items = [
  { icon: 'https://d9hhrg4mnvzow.cloudfront.net/lessive.wespring.com/z1/697fd507-francais-1.svg', text: 'Marque Française' },
  { icon: 'https://d9hhrg4mnvzow.cloudfront.net/lessive.wespring.com/z1/04eced1e-group-664.svg', text: 'Livraison offerte en boîte aux lettres' },
  { icon: 'https://d9hhrg4mnvzow.cloudfront.net/lessive.wespring.com/z1/91316300-group-15-1.svg', text: 'Paiement Sécurisé' },
]

export default function ReassuranceBar() {
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items]

  return (
    <div className="assurance-bar">
      {/* Mobile: scrolling marquee */}
      <div className="assurance-track assurance-mobile">
        {repeated.map((item, i) => (
          <span key={i} className="assurance-item">
            <img src={item.icon} alt="" width="22" height="22" />
            {item.text}
          </span>
        ))}
      </div>
      {/* Desktop: static centered */}
      <div className="assurance-track assurance-desktop">
        {items.map((item, i) => (
          <span key={i} className="assurance-item">
            <img src={item.icon} alt="" width="22" height="22" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
