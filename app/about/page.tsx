import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  Lightbulb,
  Shield,
  Users,
  MapPin,
  Building2,
  Rocket,
  Eye,
  Heart,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Innovex is a strategic digital infrastructure partner, engineering enterprise-grade solutions for businesses ready to scale.",
}

const values = [
  {
    icon: Target,
    title: "Strategic Precision",
    description:
      "Every solution is architectured with long-term scalability, market readiness, and business continuity as core design principles.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Led Engineering",
    description:
      "We leverage cutting-edge technologies and emerging frameworks to build infrastructure that stays ahead of the curve.",
  },
  {
    icon: Shield,
    title: "Security-First",
    description:
      "Enterprise-grade security, compliance-first architecture, and data governance embedded at every layer from day one.",
  },
  {
    icon: Users,
    title: "Deep Collaboration",
    description:
      "We work as an extension of your organization, integrating with your teams to deliver solutions that truly fit your operations.",
  },
  {
    icon: Rocket,
    title: "Execution Velocity",
    description:
      "Agile delivery frameworks with clear milestones, transparent communication, and predictable timelines you can count on.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description:
      "Your success is our metric. We measure our performance by the impact our solutions create for your business growth.",
  },
]

const leadership = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    bio: "15+ years in enterprise technology. Former engineering lead at a Fortune 500 fintech company. Passionate about bridging India's digital divide.",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Architect of large-scale payment systems processing billions in transactions. Deep expertise in distributed systems and cloud infrastructure.",
  },
  {
    name: "Vikram Reddy",
    role: "VP of Engineering",
    bio: "Built engineering teams from 5 to 200+. Specializes in agile delivery, DevOps culture, and high-performance software organizations.",
  },
  {
    name: "Neha Gupta",
    role: "Head of Compliance",
    bio: "Expert in regulatory technology, enterprise compliance frameworks, and audit infrastructure. Certified in information security and risk management.",
  },
]

const offices = [
  {
    city: "Bengaluru",
    type: "Headquarters",
    description: "Our primary engineering and strategy hub, driving our core technology solutions.",
    icon: Building2,
  },
  {
    city: "Mumbai",
    type: "Regional Operations",
    description: "Our regional office supporting operations and client engagement across the state.",
    icon: MapPin,
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header with Background Image */}
        <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24" aria-labelledby="about-page-heading">
          <div className="absolute inset-0 z-0">
            <Image
              src="/asset/arian-darvishi-wh-RPfR_3_M-unsplash.jpg"
              alt=""
              fill
              sizes="100vw"
              quality={75}
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Innovex
            </p>
            <h1
              id="about-page-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl text-balance"
            >
              Engineering the digital backbone of{" "}
              <span className="gradient-text">ambitious businesses</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              We are not an agency. Not freelancers. We are enterprise-grade technology architects
              building infrastructure that takes businesses from local operations to public markets.
            </p>
          </div>
        </section>

        {/* Mission & Vision with Image */}
        <section className="py-12 sm:py-16" aria-labelledby="mission-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="glass-card rounded-xl p-6 sm:rounded-2xl sm:p-8 lg:p-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12 sm:rounded-xl">
                  <Eye className="h-5 w-5 text-primary sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <h2 id="mission-heading" className="mt-4 font-heading text-xl font-bold text-foreground sm:mt-6 sm:text-2xl">
                  Our Mission
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                  To empower businesses across India with enterprise-grade digital infrastructure
                  that enables them to compete globally. We engineer secure payment ecosystems,
                  scalable software, and compliance-ready systems that transform ambition into
                  market reality.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6 sm:rounded-2xl sm:p-8 lg:p-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12 sm:rounded-xl">
                  <Rocket className="h-5 w-5 text-primary sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-heading text-xl font-bold text-foreground sm:mt-6 sm:text-2xl">
                  Our Vision
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                  To be the defining technology partner for India's next generation of
                  market-leading enterprises. We envision a future where every ambitious business
                  has access to the same caliber of digital infrastructure as the world's most
                  successful companies.
                </p>
              </div>
              {/* Mission Image */}
              <div className="relative h-48 overflow-hidden rounded-xl border border-border/30 sm:h-auto sm:rounded-2xl lg:row-span-1">
                <Image
                  src="/asset/campaign-creators-gMsnXqILjp4-unsplash.jpg"
                  alt="Team members collaborating over technical plans at a desk with laptops"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  quality={75}
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <p className="text-xs font-medium text-foreground sm:text-sm">
                    Strategy meets execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 sm:py-16 lg:py-24" aria-labelledby="values-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Core Values
              </p>
              <h2
                id="values-heading"
                className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
              >
                The principles that drive everything we build
              </h2>
            </div>
            <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
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
        </section>

        {/* Team Culture Image Banner */}
        <section className="py-6 sm:py-8" aria-label="Our team at work">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl border border-border/30 sm:rounded-3xl">
              <Image
                src="/asset/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg"
                alt="Innovex team in a strategy session with whiteboard planning and collaborative discussion"
                width={1400}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
                quality={80}
                loading="lazy"
                className="h-48 w-full object-cover sm:h-64 md:h-80 lg:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent sm:from-background/70 sm:via-background/30" />
              <div className="absolute bottom-4 left-4 max-w-xs sm:bottom-6 sm:left-6 sm:max-w-md md:bottom-8 md:left-8">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                  Our Culture
                </p>
                <p className="mt-1 font-heading text-base font-bold text-foreground sm:mt-2 sm:text-xl lg:text-2xl">
                  Where ideas become infrastructure
                </p>
                <p className="mt-1 hidden text-sm text-muted-foreground sm:block sm:mt-2">
                  Collaborative strategy sessions drive every solution we architect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-12 sm:py-16 lg:py-24" aria-labelledby="leadership-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Leadership
              </p>
              <h2
                id="leadership-heading"
                className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
              >
                The architects behind Innovex
              </h2>
            </div>
            <div className="mt-8 grid gap-3 grid-cols-1 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
              {leadership.map((person) => (
                <div
                  key={person.name}
                  className="glass-card rounded-xl p-4 transition-all duration-300 hover:border-primary/20 sm:rounded-2xl sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 sm:h-16 sm:w-16 sm:rounded-2xl">
                    <Briefcase className="h-5 w-5 text-primary sm:h-7 sm:w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-heading text-base font-semibold text-foreground sm:mt-5 sm:text-lg">
                    {person.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-primary sm:mt-1 sm:text-sm">{person.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
                    {person.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-12 sm:py-16 lg:py-24" aria-labelledby="offices-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Presence
              </p>
              <h2
                id="offices-heading"
                className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
              >
                Strategically driving operations across India
              </h2>
            </div>
            <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-6 md:grid-cols-2">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-primary/20 sm:rounded-2xl sm:p-8"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12 sm:rounded-xl">
                      <office.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                        {office.city}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-primary sm:mt-1 sm:text-sm">{office.type}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
                        {office.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA with image */}
        <section className="py-12 sm:py-16" aria-label="Join the team">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-xl border border-border/30 sm:rounded-2xl">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/asset/nasa-Q1p7bh3SHj8-unsplash.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 1280px"
                  quality={50}
                  loading="lazy"
                  className="object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
              </div>
              <div className="relative z-10 p-6 text-center sm:p-10 lg:p-16">
                <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-3xl text-balance">
                  Want to build the future with us?
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:mt-4 sm:text-base">
                  We are always looking for talented engineers, designers, and strategists who want to
                  build enterprise-grade digital infrastructure.
                </p>
                <Button asChild className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:mt-8 sm:w-auto">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
