import Link from "next/link"
import { ArrowRight, CreditCard, Code2, RefreshCw, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: CreditCard,
    title: "UPI & Digital Payments",
    description:
      "Native UPI 2.0 integration with multi-gateway fallback, zero-failure retry systems, and PCI-lite tokenization for enterprise-grade payment infrastructure.",
    features: ["Multi-gateway routing", "Idempotent APIs", "Real-time settlement"],
    href: "/services#payments",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Custom Android, iOS, and web applications built with scalable backends, regional language architecture, and enterprise-level performance standards.",
    features: ["Cross-platform apps", "Scalable backend", "Regional language support"],
    href: "/services#software",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description:
      "Offline-first POS synchronization, delta-based inventory replication, GST-ready invoicing, and complete CRM infrastructure for O2O migration.",
    features: ["Inventory sync", "GST billing", "POS cloud migration"],
    href: "/services#digital",
  },

]

export function ServicesPreview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance"
          >
            Enterprise solutions that scale with your ambition
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            From payment infrastructure to digital transformation, we engineer the digital backbone your
            business needs to compete and win.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group glass-card rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:glow-blue sm:rounded-2xl sm:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 sm:h-12 sm:w-12 sm:rounded-xl">
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground sm:mt-6 sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
                {service.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2" role="list">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-border/50 bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:mt-6 sm:text-sm">
                Learn more
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center sm:mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-border/60 bg-transparent text-foreground hover:bg-secondary hover:text-foreground sm:w-auto"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
