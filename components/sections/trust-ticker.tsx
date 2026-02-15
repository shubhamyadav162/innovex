import { Building2, ShieldCheck, Clock, Zap, Globe, Award } from "lucide-react"

const stats = [
  { icon: Building2, value: "50+", label: "Businesses Digitalized" },
  { icon: Zap, value: "500Cr+", label: "Transactions Processed" },
  { icon: Clock, value: "24/7", label: "Enterprise Support" },
  { icon: ShieldCheck, value: "99.9%", label: "System Uptime" },
  { icon: Globe, value: "15+", label: "Industries Served" },
  { icon: Award, value: "100%", label: "Compliance Rate" },
]

export function TrustTicker() {
  return (
    <section className="border-y border-border/30 bg-card/30 py-8 sm:py-12" aria-label="Trust metrics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${index >= 3 ? "hidden lg:flex" : ""}`}
            >
              <stat.icon className="mb-2 h-4 w-4 text-primary sm:mb-3 sm:h-5 sm:w-5" aria-hidden="true" />
              <p className="font-heading text-lg font-bold text-foreground sm:text-2xl">{stat.value}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground sm:mt-1 sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
