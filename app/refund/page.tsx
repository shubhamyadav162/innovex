import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Refund Policy",
    description:
        "Innovex Refund Policy - Learn about our strict no-refund policy.",
}

const sections = [
    {
        title: "1. No Refund Policy",
        content: [
            "At Innovex, we are dedicated to providing enterprise-grade digital infrastructure and unparalleled technical solutions. Due to the highly customized, labor-intensive, and immediate nature of the engineering and architectural services we provide, we maintain a strict NO REFUND policy.",
            "Once a project or service is commissioned, payments are considered final.",
        ],
    },
    {
        title: "2. Service Commitment",
        content: [
            "We allocate dedicated resources, architects, and engineering hours as soon as an engagement begins. This upfront dedication of capital and talent ensures the highest quality of service but makes refunds impossible.",
            "We ensure that all project deliverables are clearly defined, reviewed, and agreed upon through a formal Statement of Work (SOW) before the commencement of any billing.",
        ],
    },
    {
        title: "3. Quality Assurance",
        content: [
            "If you are unsatisfied with any aspect of the deliverables, our team will work with you to revise and adjust the solutions within the scope of the original agreement.",
            "We stand by the quality of our code and infrastructure, and our primary goal is your complete satisfaction with the deployed solution. However, this does not entitle the client to a refund of completed payments.",
        ],
    },
    {
        title: "4. Cancellation Policy",
        content: [
            "If a client wishes to terminate a project before completion, they may do so subject to the termination clauses in their specific service agreement.",
            "In the event of cancellation, the client will remain liable for all work completed up to the point of cancellation, and no previously paid amounts will be refunded.",
        ],
    },
    {
        title: "5. Contact Information",
        content: [
            "If you have any questions or concerns regarding our policy, please feel free to reach out to our support team.",
            "Email: support@innovex.co",
            "Phone: +91 80 4568 2100",
        ],
    },
]

export default function RefundPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Page Header */}
                <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24" aria-labelledby="refund-heading">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                    <div className="relative mx-auto max-w-7xl px-6">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Legal
                        </p>
                        <h1
                            id="refund-heading"
                            className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
                        >
                            Refund Policy
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            Please review our policy regarding payments, deliverables, and service
                            commitments carefully.
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
