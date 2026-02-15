import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { TrustTicker } from "@/components/sections/trust-ticker"
import { ServicesPreview } from "@/components/sections/services-preview"
import { AboutPreview } from "@/components/sections/about-preview"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustTicker />
        <ServicesPreview />
        <AboutPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
