import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import {
    User,
    Settings,
    LayoutDashboard,
    CreditCard,
    ShieldCheck,
    Bell,
    LogOut,
    ExternalLink,
    PlusCircle,
    Activity
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect("/login")
    }

    const userMetadata = user.user_metadata
    const userName = userMetadata?.full_name || userMetadata?.name || "Member"
    const userAvatar = userMetadata?.avatar_url || null

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
                <div className="mx-auto max-w-7xl mt-8">

                    {/* Dashboard Header */}
                    <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-5">
                            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-primary/20 bg-primary/10 flex-shrink-0">
                                {userAvatar ? (
                                    <Image src={userAvatar} alt={userName} fill className="object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary">
                                        {userName[0]}
                                    </div>
                                )}
                            </div>
                            <div>
                                <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                    Hi, {userName.split(' ')[0]}
                                </h1>
                                <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                                    {user.email} <span className="h-1 w-1 rounded-full bg-border"></span> Member since {new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="outline" className="border-border/60 bg-background/50 backdrop-blur-sm">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </Button>
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg glow-blue">
                                <PlusCircle className="mr-2 h-4 w-4" />
                                New Project
                            </Button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
                        {[
                            { label: "Active Nodes", value: "3", icon: LayoutDashboard, trend: "+1 this month" },
                            { label: "Compliance Status", value: "94%", icon: ShieldCheck, trend: "Enterprise Ready" },
                            { label: "Infrastructure Spend", value: "₹14,200", icon: CreditCard, trend: "Within budget" },
                            { label: "System Health", value: "Optimal", icon: Activity, trend: "All systems green" },
                        ].map((stat) => (
                            <div key={stat.label} className="glass-card rounded-2xl p-6 border border-primary/10 group transition-all duration-300 hover:border-primary/30">
                                <div className="flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                                        <stat.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-[10px] font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                        Active
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                                    <p className="font-heading text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                                    <p className="text-[10px] text-muted-foreground mt-1">{stat.trend}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content Area */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Project Card Area */}
                            <div className="glass-card rounded-2xl overflow-hidden border border-primary/10">
                                <div className="px-6 py-5 border-b border-border/50 flex items-center justify-between bg-primary/5">
                                    <h2 className="font-heading font-bold text-foreground flex items-center gap-2">
                                        <Activity className="h-4 w-4 text-primary" />
                                        Infrastructure Roadmap
                                    </h2>
                                    <Button variant="ghost" size="sm" className="text-xs text-primary">View all</Button>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-6">
                                        {[
                                            { name: "Global Payment Gateway", status: "In Development", progress: 65, deadline: "March 15, 2026" },
                                            { name: "Enterprise Auth Layer", status: "Testing", progress: 90, deadline: "Feb 28, 2026" },
                                            { name: "Regional DB Migration", status: "Architecting", progress: 15, deadline: "July 10, 2026" },
                                        ].map((project) => (
                                            <div key={project.name} className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm font-semibold text-foreground">{project.name}</p>
                                                        <p className="text-[11px] text-muted-foreground mt-0.5">{project.status}</p>
                                                    </div>
                                                    <p className="text-[11px] font-medium text-muted-foreground">Due {project.deadline}</p>
                                                </div>
                                                <div className="h-1.5 w-full bg-secondary/50 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-primary transition-all duration-500 rounded-full"
                                                        style={{ width: `${project.progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Announcements Section */}
                            <div className="glass-card rounded-2xl p-6 border border-primary/10 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Bell className="h-32 w-32 -mr-8 -mt-8 text-primary" />
                                </div>
                                <h3 className="font-heading font-bold text-lg mb-4">Latest Insights</h3>
                                <div className="space-y-5">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                                            <Activity className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">UPI 3.0 Node Integration</p>
                                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                                Your infrastructure is successfully optimized for the newest UPI 3.0 protocols.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-accent/10">
                                            <ShieldCheck className="h-5 w-5 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">Security Audit Passed</p>
                                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                                Q1 penetration testing completed with zero critical vulnerabilities found.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar widgets */}
                        <div className="space-y-8">
                            {/* Account Security */}
                            <div className="glass-card rounded-2xl p-6 border border-primary/10">
                                <h2 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                    Security
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 border border-border/40">
                                        <span className="text-xs font-medium">2FA Status</span>
                                        <span className="text-[10px] font-bold text-primary uppercase">Enabled</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 border border-border/40">
                                        <span className="text-xs font-medium">Session Valid</span>
                                        <span className="text-[10px] font-bold text-emerald-500 uppercase">Secure</span>
                                    </div>
                                    <Button variant="outline" className="w-full text-xs h-9 border-border/60">Manage Keys</Button>
                                </div>
                            </div>

                            {/* Support Widget */}
                            <div className="glass-card rounded-2xl p-6 border border-border bg-gradient-to-br from-primary/10 to-transparent">
                                <h2 className="font-heading font-bold text-foreground mb-2">Need Guidance?</h2>
                                <p className="text-xs text-muted-foreground mb-4">Your dedicated architect is available for a consultation.</p>
                                <Button className="w-full bg-primary text-primary-foreground text-xs shadow-md">
                                    Schedule a Call
                                    <ExternalLink className="ml-2 h-3 w-3" />
                                </Button>
                            </div>

                            {/* Developer Resources */}
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-1">Resources</h3>
                                {[
                                    { name: "API Reference", href: "#" },
                                    { name: "SDK Documentation", href: "#" },
                                    { name: "Security Whitepapers", href: "#" },
                                ].map((link) => (
                                    <a key={link.name} href={link.href} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors group">
                                        <span className="text-sm font-medium">{link.name}</span>
                                        <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
