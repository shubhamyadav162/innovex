import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description:
        "Innovex Terms & Conditions - Read our terms of service and usage policies.",
}

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: [
            "By accessing or using the Innovex website and our services, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
            "If you do not agree with any part of these terms, you must not use our website or services.",
            "These terms apply to all visitors, users, clients, and others who access or use our services.",
        ],
    },
    {
        title: "2. Description of Services",
        content: [
            "Innovex provides enterprise-grade digital infrastructure solutions, including UPI & Digital Payments Infrastructure, Custom App & Software Engineering, and Offline to Online Enterprise Transformation.",
            "We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice or liability.",
        ],
    },
    {
        title: "3. User Responsibilities",
        content: [
            "You agree to use our services only for lawful purposes and in accordance with these Terms.",
            "You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.",
            "You must not attempt to gain unauthorized access to our systems, networks, or data.",
        ],
    },
    {
        title: "4. Intellectual Property Rights",
        content: [
            "The website, its original content, features, and functionality are owned by Innovex and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
            "Client-specific deliverable rights will be governed by the specific service agreements signed between Innovex and the client.",
        ],
    },
    {
        title: "5. Limitation of Liability",
        content: [
            "In no event shall Innovex, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.",
            "This includes without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.",
        ],
    },
    {
        title: "6. Governing Law",
        content: [
            "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
            "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
        ],
    },
    {
        title: "7. Changes to Terms",
        content: [
            "We reserve the right, at our sole discretion, to modify or replace these Terms at any time.",
            "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.",
        ],
    },
    {
        title: "8. Contact Us",
        content: [
            "If you have any questions about these Terms, please contact us at:",
            "Email: hello@innovex.co",
            "Address: Unit 402, 4th Floor, Prestige Tech Park, Marathahalli-Sarjapur Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103, India",
        ],
    },
]

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Page Header */}
                <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24" aria-labelledby="terms-heading">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                    <div className="relative mx-auto max-w-7xl px-6">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Legal
                        </p>
                        <h1
                            id="terms-heading"
                            className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
                        >
                            Terms & Conditions
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            Please read these terms and conditions carefully before using our services.
                            They govern your use of the Innovex infrastructure and solutions.
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
