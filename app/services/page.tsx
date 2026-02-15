import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CreditCard,
  Code2,
  RefreshCw,
  Shield,
  Check,
  Zap,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  FileCheck,
  Lock,
  Server,
  Receipt,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Innovex's enterprise digital solutions: UPI payments, custom software engineering, digital transformation, and IPO tech readiness.",
}

const services = [
  {
    id: "payments",
    icon: CreditCard,
    title: "UPI & Digital Payments Infrastructure",
    tagline: "Enterprise-grade payment ecosystems built for scale",
    description:
      "Native UPI 2.0 integration with multi-gateway fallback, zero-failure retry logic, and PCI-lite tokenization. We build payment infrastructure that handles millions of transactions with 99.99% reliability.",
    image: "/asset/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg",
    imageAlt: "Developer workstation with code and application preview on dual monitors",
    features: [
      { icon: Zap, text: "Multi-gateway intelligent routing with automatic failover" },
      { icon: Shield, text: "PCI-lite tokenization for secure card fallbacks" },
      { icon: Database, text: "Idempotent API architecture with zero-drop retry logic" },
      { icon: BarChart3, text: "Real-time settlement tracking and reconciliation" },
      { icon: Lock, text: "End-to-end encryption with audit-ready transaction logs" },
      { icon: Server, text: "Webhook-driven event system for seamless integrations" },
    ],
    deliverables: [
      "Payment gateway integration and configuration",
      "Custom payment flow UI/UX for mobile and web",
      "Transaction monitoring dashboard",
      "Webhook event system",
      "Load balancer and payment adapter layer architecture",
      "Compliance documentation and audit trail exports",
    ],
  },
  {
    id: "software",
    icon: Code2,
    title: "Custom App & Software Engineering",
    tagline: "Scalable applications engineered for enterprise performance",
    description:
      "From Android and iOS to full-stack web platforms, we build applications with scalable backends, regional language architecture, and enterprise-level performance that grows with your business.",
    image: "/asset/cova-software-SdlsfstOQZM-unsplash.jpg",
    imageAlt: "Developer working at a multi-screen workstation with code editors open",
    features: [
      { icon: Smartphone, text: "Native Android and iOS with shared business logic" },
      { icon: Globe, text: "Regional language architecture with RTL support" },
      { icon: Server, text: "Microservices backend with horizontal scaling" },
      { icon: Database, text: "Event-driven architecture with message queues" },
      { icon: Shield, text: "Enterprise security with RBAC and SSO" },
      { icon: BarChart3, text: "Performance monitoring and APM integration" },
    ],
    deliverables: [
      "Platform architecture document and tech stack selection",
      "Cross-platform mobile applications (Android & iOS)",
      "Responsive web application with progressive enhancement",
      "API gateway and microservices backend",
      "CI/CD pipeline setup with automated testing",
      "Performance optimization and load testing reports",
    ],
  },
  {
    id: "digital",
    icon: RefreshCw,
    title: "Offline to Online Enterprise Transformation",
    tagline: "Seamless O2O migration with zero operational downtime",
    description:
      "Offline-first POS synchronization, delta-based inventory replication, GST-ready invoicing, and regional language receipts. We digitize your entire operation while keeping business running smoothly.",
    image: "/asset/chase-chappell-a0Ayn1VUxGM-unsplash.jpg",
    imageAlt: "Team demonstrating digital point-of-sale system on tablet with analytics dashboard",
    features: [
      { icon: RefreshCw, text: "Delta-based inventory sync with conflict resolution" },
      { icon: Receipt, text: "GST-ready invoice generation in regional languages" },
      { icon: Database, text: "Cloud-synced POS with offline-first architecture" },
      { icon: Users, text: "CRM infrastructure with customer lifecycle tracking" },
      { icon: Globe, text: "Multi-language support for receipts and interfaces" },
      { icon: BarChart3, text: "Business intelligence dashboards and analytics" },
    ],
    deliverables: [
      "Current operations audit and transformation roadmap",
      "Cloud POS system with offline sync capabilities",
      "Inventory management system with real-time tracking",
      "GST-compliant invoicing and billing system",
      "CRM setup with customer data migration",
      "Staff training and change management support",
    ],
  },
  {
    id: "ipo",
    icon: Shield,
    title: "IPO Technology Compliance & Audit Systems",
    tagline: "Audit-ready infrastructure for public market readiness",
    description:
      "Immutable audit logs, RBAC design, encryption KMS, and compliance infrastructure that makes your technology stack investor-ready and regulator-approved for public market listing.",
    image: "/asset/scott-graham-5fNmWej4tAA-unsplash.jpg",
    imageAlt: "Immersive digital data visualization with cascading light particles",
    features: [
      { icon: FileCheck, text: "Immutable audit log exports with tamper detection" },
      { icon: Lock, text: "Encryption KMS with key rotation policies" },
      { icon: Shield, text: "RBAC design with fine-grained permission controls" },
      { icon: Database, text: "Data governance framework with retention policies" },
      { icon: Server, text: "Secure infrastructure with penetration testing" },
      { icon: BarChart3, text: "Compliance dashboard with real-time status monitoring" },
    ],
    deliverables: [
      "Technology audit and compliance gap analysis",
      "Immutable logging system implementation",
      "RBAC and access control framework",
      "Encryption infrastructure with KMS setup",
      "Audit report templates and export APIs",
      "Compliance documentation for regulatory submission",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header with Background */}
        <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24" aria-labelledby="services-page-heading">
          <div className="absolute inset-0 z-0">
            <Image
              src="/asset/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg"
              alt=""
              fill
              sizes="100vw"
              quality={75}
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Capabilities
            </p>
            <h1
              id="services-page-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl text-balance"
            >
              Enterprise solutions engineered for{" "}
              <span className="gradient-text">market dominance</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Four core pillars of digital infrastructure, each designed to take your business
              from where it is to where it needs to be.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-20 sm:scroll-mt-24"
                  aria-labelledby={`service-${service.id}-heading`}
                >
                  <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-start">
                    {/* Info Side */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-14 sm:w-14 sm:rounded-2xl">
                        <service.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                      </div>
                      <h2
                        id={`service-${service.id}-heading`}
                        className="mt-4 font-heading text-xl font-bold tracking-tight text-foreground sm:mt-6 sm:text-2xl lg:text-3xl"
                      >
                        {service.title}
                      </h2>
                      <p className="mt-1.5 text-xs font-medium text-primary sm:mt-2 sm:text-sm">{service.tagline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                        {service.features.map((feature) => (
                          <div key={feature.text} className="flex items-start gap-2 sm:gap-3">
                            <feature.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" aria-hidden="true" />
                            <span className="text-xs text-muted-foreground sm:text-sm">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:mt-8 sm:w-auto"
                      >
                        <Link href="/contact">
                          Request Proposal
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>

                    {/* Visual Side - Image + Deliverables */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      {/* Section Image */}
                      <div className="relative mb-4 overflow-hidden rounded-xl border border-border/30 sm:mb-6 sm:rounded-2xl">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          width={800}
                          height={450}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                          quality={75}
                          loading="lazy"
                          className="h-44 w-full object-cover sm:h-56 lg:h-64"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                      </div>

                      {/* Deliverables Card */}
                      <div className="glass-card rounded-xl p-6 sm:rounded-2xl sm:p-8">
                        <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">
                          Key Deliverables
                        </h3>
                        <ul className="mt-4 flex flex-col gap-3 sm:mt-6 sm:gap-4" role="list">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2 sm:gap-3">
                              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:mt-1 sm:h-5 sm:w-5">
                                <Check className="h-2.5 w-2.5 text-primary sm:h-3 sm:w-3" aria-hidden="true" />
                              </div>
                              <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < services.length - 1 && (
                    <div className="mt-16 border-b border-border/30 sm:mt-24" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
