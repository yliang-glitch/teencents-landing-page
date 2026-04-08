# TeenCents Landing Page
The official web portal for the TeenCents iOS app. Built with React, Vite, and Tailwind CSS. Hosted on Vercel.

## Waitlist Email Setup
Waitlist submissions post to `/api/waitlist`, which sends an email to `info@teencents.ai` using Resend.

Set these Vercel environment variables:
- `RESEND_API_KEY` (required)
- `WAITLIST_FROM_EMAIL` (optional, default: `TeenCents Waitlist <onboarding@resend.dev>`)
