import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Innovex to discuss your digital infrastructure needs. We respond within 24 hours.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@innovex.co",
    href: "mailto:hello@innovex.co",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80 4568 2100",
    href: "tel:+918045682100",
  },
  {
    icon: MapPin,
    label: "Corporate Office",
    value: "Business District, Mumbai, India",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM IST",
    href: undefined,
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header with Background */}
        <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24" aria-labelledby="contact-heading">
          <div className="absolute inset-0 z-0">
            <Image
              src="/asset/robynne-o-HOrhCnQsxnQ-unsplash.jpg"
              alt=""
              fill
              sizes="100vw"
              quality={50}
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get in Touch
            </p>
            <h1
              id="contact-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl text-balance"
            >
              Let&apos;s build something{" "}
              <span className="gradient-text">extraordinary</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Whether you need payment infrastructure, custom software, or digital transformation,
              our team is ready to architect the right solution for your business.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="pb-16 sm:pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="glass-card rounded-xl p-6 sm:rounded-2xl sm:p-8 lg:p-10">
                  <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                    Send us a message
                  </h2>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                    Fill out the form below and we will get back to you within 24 hours.
                  </p>
                  <div className="mt-6 sm:mt-8">
                    <ContactForm />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-2">
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                  {/* Contact Info Cards -- 2x2 grid on mobile, stacked on lg */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
                    {contactInfo.map((item) => (
                      <div
                        key={item.label}
                        className="glass-card rounded-xl p-4 sm:rounded-2xl sm:p-6"
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-10 sm:w-10">
                            <item.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-foreground sm:text-sm">{item.label}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="mt-0.5 block truncate text-xs text-muted-foreground transition-colors hover:text-primary sm:mt-1 sm:text-sm"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="mt-0.5 text-xs text-muted-foreground sm:mt-1 sm:text-sm">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Circuit Board Accent Image */}
                  <div className="relative hidden overflow-hidden rounded-xl border border-border/30 sm:block sm:rounded-2xl">
                    <Image
                      src="/asset/cova-software-SdlsfstOQZM-unsplash.jpg"
                      alt="Close-up of circuit board representing our technical expertise"
                      width={600}
                      height={300}
                      sizes="(max-width: 1024px) 100vw, 400px"
                      quality={60}
                      loading="lazy"
                      className="h-32 w-full object-cover sm:h-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-xs font-medium text-muted-foreground">
                        Engineering excellence, delivered.
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="glass-card rounded-xl p-4 sm:rounded-2xl sm:p-6">
                    <h3 className="font-heading text-sm font-semibold text-foreground sm:text-base">
                      What happens next?
                    </h3>
                    <ol className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-4" role="list">
                      {[
                        "We review your message within 24 hours",
                        "Our architects assess your requirements",
                        "We schedule a strategic consultation call",
                        "You receive a detailed proposal and roadmap",
                      ].map((step, idx) => (
                        <li key={step} className="flex items-start gap-2 sm:gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary sm:h-6 sm:w-6 sm:text-xs">
                            {idx + 1}
                          </span>
                          <span className="text-xs text-muted-foreground sm:text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
