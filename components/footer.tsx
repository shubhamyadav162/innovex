import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refund", label: "Refund Policy" },
  ],
  services: [
    { href: "/services#payments", label: "UPI & Payments" },
    { href: "/services#software", label: "Software Engineering" },
    { href: "/services#digital", label: "Digital Transformation" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label="Innovex Home">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary sm:h-9 sm:w-9">
                <span className="font-heading text-base font-bold text-primary-foreground sm:text-lg">I</span>
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
                Innovex
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm">
              Engineering secure payment ecosystems, scalable software architecture, and robust
              digital infrastructure for businesses built to dominate.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground sm:text-sm">
              Company
            </h3>
            <ul className="mt-3 flex flex-col gap-2 sm:mt-4 sm:gap-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground sm:text-sm">
              Services
            </h3>
            <ul className="mt-3 flex flex-col gap-2 sm:mt-4 sm:gap-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground sm:text-sm">
              Contact
            </h3>
            <ul className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4" role="list">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" aria-hidden="true" />
                <span className="text-xs text-muted-foreground sm:text-sm">
                  Corporate Office, Mumbai, India
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" aria-hidden="true" />
                <a
                  href="mailto:hello@innovex.co"
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                >
                  hello@innovex.co
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" aria-hidden="true" />
                <a
                  href="tel:+918045682100"
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                >
                  +91 80 4568 2100
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 sm:mt-16 sm:gap-4 sm:pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground sm:text-sm">
            &copy; {new Date().getFullYear()} Innovex. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/refund"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              Refund Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
