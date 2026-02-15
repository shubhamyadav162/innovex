import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16 md:pt-20" aria-label="Hero">
      {/* Hero Background Image - Minimum opacity for decisive visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/fabio-oyXis2kALVg-unsplash.jpg"
          alt="Futuristic technology workspace with modern devices"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 sm:mb-8 sm:px-4 sm:py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-medium tracking-wide text-primary sm:text-xs">
              Enterprise Digital Infrastructure
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-balance">
            Where Ambition Meets{" "}
            <span className="gradient-text">Digital Scale.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
            Innovex engineers secure payment ecosystems, scalable software architecture, and
            IPO-ready digital infrastructure for businesses built to dominate.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="group w-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 glow-blue sm:w-auto sm:px-8"
            >
              <Link href="/contact">
                Start Strategic Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-border/60 bg-background/30 px-6 text-foreground backdrop-blur-sm hover:bg-secondary hover:text-foreground sm:w-auto sm:px-8"
            >
              <Link href="/services">
                Explore Capabilities
                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-6 border-t border-border/30 pt-6 sm:mt-16 sm:gap-8 sm:pt-8 lg:gap-16">
            {[
              { value: "50+", label: "Enterprises Served" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "500Cr+", label: "Transactions Processed" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
