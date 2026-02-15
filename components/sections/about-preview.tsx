import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, Lightbulb, Users, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Target,
    title: "Strategic Precision",
    description: "Every solution is architectured with long-term scalability and market readiness in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Led",
    description: "We leverage cutting-edge technologies to build infrastructure that keeps you ahead of the curve.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Deep collaboration with your teams ensures solutions that truly fit your business operations.",
  },
  {
    icon: Lock,
    title: "Trust & Security",
    description: "Enterprise-grade security, compliance-first architecture, and data governance at every layer.",
  },
]

export function AboutPreview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why Innovex
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance"
            >
              Not an agency. A strategic digital infrastructure partner.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Innovex is where enterprise-grade engineering meets ambitious vision. We build the
              digital backbone that takes businesses from local operations to public market
              readiness, with secure, scalable, and compliant infrastructure at every stage.
            </p>

            {/* Image showcase */}
            <div className="relative mt-6 overflow-hidden rounded-2xl sm:mt-8">
              <Image
                src="/asset/campaign-creators-gMsnXqILjp4-unsplash.jpg"
                alt="Team collaborating over technical plans with laptops"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={75}
                loading="lazy"
                className="h-48 w-full object-cover sm:h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <p className="text-xs font-medium text-foreground sm:text-sm">
                  Collaborative engineering at its core
                </p>
              </div>
            </div>

            <Button
              asChild
              className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:mt-8 sm:w-auto"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Right - Values Grid */}
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card rounded-xl p-4 transition-all duration-300 hover:border-primary/20 sm:rounded-2xl sm:p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-10 sm:w-10">
                  <value.icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-heading text-sm font-semibold text-foreground sm:mt-4 sm:text-base">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
