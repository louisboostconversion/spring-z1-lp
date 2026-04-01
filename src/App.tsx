import HeroOffer from './sections/HeroOffer'
import SixReasonsIntro from './sections/SixReasonsIntro'
import ReassuranceBar from './sections/ReassuranceBar'
import SixArguments from './sections/SixArguments'
import ComparisonTable from './sections/ComparisonTable'
import HowItWorks from './sections/HowItWorks'
import PressLogos from './sections/PressLogos'
import Guarantee from './sections/Guarantee'
import Faq from './sections/Faq'
import FinalCta from './sections/FinalCta'

const CTA_URL = '#commander'

export default function App() {
  return (
    <>
      <SixReasonsIntro />
      <ReassuranceBar />
      <SixArguments ctaUrl={CTA_URL} />

      <HeroOffer ctaUrl={CTA_URL} />
      <ComparisonTable ctaUrl={CTA_URL} />
      <HowItWorks ctaUrl={CTA_URL} />
      <PressLogos />
      <Guarantee />
      <Faq ctaUrl={CTA_URL} />

      <FinalCta ctaUrl={CTA_URL} />

      <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px 40px', background: '#FDF9F5' }}>
        <img src="https://user-assets.unbounce.com/4b14b75c-cb1e-4b60-bb6c-757a5eddc895/4617c1b1-c085-4617-a3aa-4a90837e9522/logo-spring-noir-1-2.original.svg" alt="SPRiNG." style={{ height: 32 }} />
      </footer>
    </>
  )
}
