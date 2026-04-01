import './PressLogos.css'

const logos = [
  'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/e4dceaa1-5f8e-4092-8d43-ea11f58e9530/image.original.svg',
  'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/edd46b43-6ab4-4b08-9ac8-cf18e8dbad2a/image-1.original.svg',
  'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/25b176a5-3439-4658-9e70-5aecf7daa78a/image.small.webp',
  'https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/b4b98fb0-c8ec-49d2-8e4b-a4edae4de167/image-3.original.svg',
]

export default function PressLogos() {
  // Repeat logos 4x for seamless infinite scroll
  const repeated = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos]

  return (
    <section className="press-marquee">
      <div className="press-marquee-inner">
        {repeated.map((src, i) => (
          <span key={i}><img src={src} alt="Press logo" /></span>
        ))}
      </div>
    </section>
  )
}
