import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Innovex Privacy Policy - Learn how we collect, use, and protect your personal information.",
}

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly to us when you use our services, submit inquiries through our contact forms, or communicate with us. This includes:",
      "Personal identification information such as name, email address, phone number, and company name.",
      "Technical information including IP address, browser type, operating system, and usage data collected through cookies and similar technologies.",
      "Business information relevant to the services you request, including project requirements, technical specifications, and organizational details.",
      "All data collection is performed in compliance with the Information Technology Act, 2000 (India) and its amendments, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect to provide, maintain, and improve our services, including:",
      "Processing and responding to your inquiries and service requests.",
      "Delivering the digital infrastructure, software, and consulting services you have engaged us for.",
      "Communicating with you about updates, security alerts, and administrative messages.",
      "Analyzing usage patterns to improve our website, services, and user experience.",
      "Complying with legal obligations and protecting our rights and the rights of our users.",
    ],
  },
  {
    title: "3. Data Security & Encryption",
    content: [
      "We implement industry-standard security measures to protect your personal information:",
      "All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3 protocols.",
      "We employ role-based access controls (RBAC) to ensure only authorized personnel can access sensitive data.",
      "Regular security audits, penetration testing, and vulnerability assessments are conducted to maintain the integrity of our systems.",
      "Our key management system (KMS) uses hardware security modules (HSMs) with automated key rotation policies.",
      "We maintain SOC 2 Type II compliant security practices across all our infrastructure.",
    ],
  },
  {
    title: "4. Data Retention",
    content: [
      "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected:",
      "Contact form submissions and inquiry data: retained for 2 years from the date of submission.",
      "Transaction logs and payment records: retained for 7 years in compliance with financial regulations.",
      "Audit reports and compliance documentation: retained for 10 years in accordance with regulatory requirements.",
      "Technical logs and analytics data: retained for 1 year for service improvement purposes.",
      "Upon expiration of retention periods, data is securely deleted using cryptographic erasure methods.",
    ],
  },
  {
    title: "5. Data Sharing & Third Parties",
    content: [
      "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
      "With service providers who assist us in operating our business, subject to confidentiality agreements.",
      "When required by law, regulation, or legal process, including requests from government authorities.",
      "To protect the rights, property, or safety of Innovex, our clients, or others.",
      "In connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of the transaction.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Under applicable Indian law and international data protection frameworks, you have the following rights:",
      "Right to access: You may request a copy of the personal information we hold about you.",
      "Right to correction: You may request correction of inaccurate or incomplete personal information.",
      "Right to deletion: You may request deletion of your personal information, subject to legal retention requirements.",
      "Right to withdraw consent: You may withdraw consent for data processing at any time by contacting our Data Protection Officer.",
      "To exercise any of these rights, please contact our Data Protection Officer at dpo@innovex.co.",
    ],
  },
  {
    title: "7. Cookies & Analytics",
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience:",
      "Essential cookies: Required for basic website functionality and cannot be disabled.",
      "Analytics cookies: Used to understand how visitors interact with our website. These are only activated with your explicit consent.",
      "We use a privacy-first approach to analytics, preferring server-side event logging over client-side tracking where possible.",
      "You can manage your cookie preferences through our consent banner displayed on your first visit.",
    ],
  },
  {
    title: "8. Data Breach Notification",
    content: [
      "In the event of a data breach that may affect your personal information:",
      "We will notify affected individuals within 72 hours of becoming aware of the breach.",
      "We will notify the relevant regulatory authority (CERT-In) within 6 hours as required under Indian cybersecurity directives.",
      "Our notification will include details about the nature of the breach, the data affected, steps taken to mitigate the impact, and recommended actions for affected individuals.",
      "We maintain a documented incident response plan that is tested and updated quarterly.",
    ],
  },
  {
    title: "9. Contact & Data Protection Officer",
    content: [
      "For any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:",
      "Data Protection Officer: dpo@innovex.co",
      "General Inquiries: hello@innovex.co",
      "Phone: +91 123 456 7890",
      "Registered Office: Business District, Mumbai, India",
      "This Privacy Policy was last updated on January 1, 2026, and may be revised from time to time. We will notify you of any material changes by posting the updated policy on our website.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24" aria-labelledby="privacy-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Legal
            </p>
            <h1
              id="privacy-heading"
              className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
            >
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              At Innovex, we are committed to protecting your privacy and ensuring the
              security of your personal information. This policy outlines how we collect, use,
              and safeguard your data.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Effective Date: January 1, 2026 | Last Updated: January 1, 2026
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col gap-12">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  <div className="mt-4 flex flex-col gap-3">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="text-sm leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
