import { GoogleSignIn } from "@/components/auth/google-signin"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function LoginPage() {
    return (
        <>
            <Navbar />
            <main className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
                {/* Background Accents */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/asset/nasa-Q1p7bh3SHj8-unsplash.jpg"
                        alt=""
                        fill
                        className="object-cover opacity-10"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                </div>

                <div className="relative z-10 w-full max-w-md">
                    <div className="glass-card rounded-2xl p-8 sm:p-10 border border-primary/20 shadow-2xl backdrop-blur-xl">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 border border-primary/20">
                                <span className="text-2xl font-bold text-primary">IX</span>
                            </div>
                            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                Welcome Back
                            </h1>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Enter your credentials to access your account
                            </p>
                        </div>

                        <div className="space-y-6">
                            <GoogleSignIn />

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-border/50"></span>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Secured by Supabase
                                    </span>
                                </div>
                            </div>

                            <p className="text-center text-xs text-muted-foreground leading-relaxed">
                                By signing in, you agree to our{' '}
                                <a href="/terms" className="underline hover:text-primary transition-colors">Terms of Service</a>
                                {' '}and{' '}
                                <a href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
                            </p>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <a href="/contact" className="font-semibold text-primary hover:underline">
                            Contact us
                        </a>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
