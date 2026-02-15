"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"
import { User, AuthChangeEvent, Session } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null)
      }
    )

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2" aria-label="Innovex Home">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary sm:h-9 sm:w-9">
            <span className="font-heading text-base font-bold text-primary-foreground sm:text-lg">I</span>
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Innovex
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {user && (
            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Dashboard
            </Link>
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <Button variant="ghost" onClick={handleSignOut} className="text-sm font-medium">
              Logout
            </Button>
          ) : (
            <Button variant="ghost" asChild className="text-sm font-medium">
              <Link href="/login">Login</Link>
            </Button>
          )}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation - full screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[calc(3.25rem+1px)] bottom-0 border-t border-border/40 bg-background/98 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-6 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <Link
                href="/dashboard"
                className="rounded-xl px-4 py-3.5 text-base font-medium text-primary transition-colors hover:bg-secondary hover:text-primary/80"
                onClick={() => setMobileOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <div className="flex flex-col gap-3 mt-4">
              {user ? (
                <Button variant="outline" onClick={handleSignOut} className="w-full">
                  Logout
                </Button>
              ) : (
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login" onClick={() => setMobileOpen(false)}>Login</Link>
                </Button>
              )}
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Start a Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
