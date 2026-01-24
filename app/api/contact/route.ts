import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/schemas/contact'

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  return new Resend(apiKey)
}

// Simple in-memory rate limiting (for development)
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS = 3

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const requests = rateLimitMap.get(ip) || []

  // Filter out old requests
  const recentRequests = requests.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  )

  if (recentRequests.length >= MAX_REQUESTS) {
    return false
  }

  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)
  return true
}

export async function POST(request: Request) {
  try {
    const resend = getResendClient()
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      )
    }

    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Create email HTML
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="margin: 20px 0;">
          <p><strong>From:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
          ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
        </div>
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
        <div style="margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${validatedData.message}</p>
        </div>
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="color: #6b7280; font-size: 12px;">
          This message was sent from the BetterOrmoc contact form.
        </p>
      </div>
    `

    // Send email to city hall
    const { data, error } = await resend.emails.send({
      from: 'BetterOrmoc <noreply@betterormoc.org>',
      to: process.env.CONTACT_EMAIL || 'contact@ormoc.gov.ph',
      replyTo: validatedData.email,
      subject: `Contact Form: ${validatedData.subject}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Email send error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    // Send auto-reply to user
    await resend.emails.send({
      from: 'Ormoc City Hall <noreply@betterormoc.org>',
      to: validatedData.email,
      subject: 'We received your message - Ormoc City Hall',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">Thank you for contacting us!</h2>
          <p>Dear ${validatedData.name},</p>
          <p>We have received your message and will respond within 24-48 hours.</p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Your message:</strong></p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          <p>Best regards,<br/>Ormoc City Hall</p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: data?.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs.' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
