import { NextResponse } from "next/server"

function generateLeadId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let id = "INVX-"
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return id
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, company, phone, interest, message } = body

    // Server-side validation
    const errors: Record<string, string> = {}

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.name = "Name is required"
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "A valid email is required"
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      errors.message = "Message is required"
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { status: "error", errors },
        { status: 422 }
      )
    }

    // In production, this would store to database and send via email service
    const lead_id = generateLeadId()

    console.log("[Contact API] New lead:", {
      lead_id,
      name,
      email,
      company: company || "N/A",
      phone: phone || "N/A",
      interest: interest || "N/A",
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      status: "success",
      lead_id,
      message: "Your inquiry has been received. Our team will respond within 24 hours.",
    })
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    )
  }
}
