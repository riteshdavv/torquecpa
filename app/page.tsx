import Nav from '@/components/Nav'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import HowItWorks from '@/components/home/HowItWorks'
import ROISection from '@/components/home/ROISection'
import ObstaclesSection from '@/components/home/ObstaclesSection'
import GuaranteeSection from '@/components/home/GuaranteeSection'
import PricingSection from '@/components/home/PricingSection'
import IncludedSection from '@/components/home/IncludedSection'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/Footer'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'

export default function HomePage() {
  return (
    <>
      <ScrollRevealProvider />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <ROISection />
        <ObstaclesSection />
        <GuaranteeSection />
        <PricingSection />
        <IncludedSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
