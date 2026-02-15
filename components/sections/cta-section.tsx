import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 sm:rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/asset/nasa-Q1p7bh3SHj8-unsplash.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
              quality={75}
              loading="lazy"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-primary/10" />
          </div>

          <div className="relative z-10 p-8 text-center sm:p-12 lg:p-20">
            <h2 className="mx-auto max-w-2xl font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl xl:text-5xl text-balance">
              Ready to build infrastructure that scales?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base lg:text-lg">
              Start a conversation with our team of architects and engineers. From payment
              systems to IPO readiness, we have you covered.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button
                asChild
                size="lg"
                className="group w-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-8"
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
                className="w-full border-border/60 bg-transparent text-foreground hover:bg-secondary hover:text-foreground sm:w-auto"
              >
                <Link href="/services">
                  Explore All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
