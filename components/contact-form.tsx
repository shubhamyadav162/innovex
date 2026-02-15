"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Loader2 } from "lucide-react"

const serviceOptions = [
  { value: "payments", label: "UPI & Digital Payments" },
  { value: "software", label: "Custom Software Engineering" },
  { value: "digital", label: "Digital Transformation (O2O)" },
  { value: "ipo", label: "IPO Tech Readiness" },
  { value: "other", label: "Other / General Inquiry" },
]

type FormState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [leadId, setLeadId] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      interest: formData.get("interest") as string,
      message: formData.get("message") as string,
    }

    // Client-side validation
    const newErrors: Record<string, string> = {}
    if (!data.name.trim()) newErrors.name = "Name is required"
    if (!data.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Please enter a valid email"
    if (!data.message.trim()) newErrors.message = "Message is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setFormState("submitting")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Submission failed")

      const result = await res.json()
      setLeadId(result.lead_id)
      setFormState("success")
    } catch {
      setFormState("error")
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center" role="status">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
          Message Received
        </h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
        </p>
        {leadId && (
          <p className="mt-4 text-sm text-muted-foreground">
            Reference ID: <span className="font-mono font-medium text-foreground">{leadId}</span>
          </p>
        )}
        <Button
          onClick={() => setFormState("idle")}
          className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            className="border-border/60 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-destructive" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Your company name"
            className="border-border/60 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            className="border-border/60 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-destructive" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 123 456 7890"
            className="border-border/60 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="interest" className="text-sm font-medium text-foreground">
          Service Interest
        </Label>
        <Select name="interest">
          <SelectTrigger
            id="interest"
            className="border-border/60 bg-secondary/50 text-foreground"
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="border-border bg-card text-foreground">
            {serviceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project, goals, and timeline..."
          rows={5}
          className="border-border/60 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {formState === "error" && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3" role="alert">
          <p className="text-sm text-destructive">
            Something went wrong. Please try again or email us directly at hello@innovex.co.
          </p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={formState === "submitting"}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
